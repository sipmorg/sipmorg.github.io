<template>
  <router-link :to="link" class="news-card glass" :class="{ 'news-card--hoverable': hoverable }">
    <div class="news-card-image" v-if="image">
      <img :src="image" :alt="title" />
    </div>
    <div class="news-card-content">
      <div class="news-card-meta">
        <span class="news-card-date">{{ formattedDate }}</span>
        <span class="news-card-category" v-if="category">{{ category }}</span>
      </div>
      <h3 class="news-card-title">{{ title }}</h3>
      <p class="news-card-excerpt">{{ excerpt }}</p>
      <span class="news-card-link">Read more →</span>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: null
  },
  link: {
    type: String,
    required: true
  },
  hoverable: {
    type: Boolean,
    default: true
  }
})

const formattedDate = computed(() => {
  const date = new Date(props.date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-text);
  overflow: hidden;
}

.news-card--hoverable:hover {
  transform: translateY(-4px);
}

.news-card-image {
  height: 200px;
  overflow: hidden;
  margin: calc(-1 * var(--spacing-xl));
  margin-bottom: 0;
}

.news-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.news-card:hover .news-card-image img {
  transform: scale(1.05);
}

.news-card-content {
  padding: var(--spacing-lg);
}

.news-card-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.news-card-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.news-card-category {
  font-size: var(--font-size-xs);
  color: var(--color-accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--font-weight-medium);
}

.news-card-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-tight);
}

.news-card-excerpt {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.news-card:hover .news-card-link {
  color: var(--color-accent-dark);
}
</style>
