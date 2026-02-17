<template>
  <router-link :to="link" class="standard-card glass" :class="{ 'standard-card--hoverable': hoverable }">
    <div class="standard-card-icon" :style="iconStyle">
      <component :is="iconComponent" v-if="iconComponent" />
      <span v-else class="standard-card-icon-text">{{ iconText }}</span>
    </div>
    <div class="standard-card-content">
      <h3 class="standard-card-title">{{ title }}</h3>
      <p class="standard-card-description">{{ description }}</p>
      <div class="standard-card-meta">
        <span class="standard-card-count">{{ count }} {{ count === 1 ? 'Standard' : 'Standards' }}</span>
        <Badge v-if="status" :variant="statusVariant">{{ status }}</Badge>
      </div>
    </div>
    <div class="standard-card-arrow">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import Badge from './Badge.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'leaf'
  },
  count: {
    type: Number,
    default: 0
  },
  link: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: ''
  },
  hoverable: {
    type: Boolean,
    default: true
  }
})

const iconText = computed(() => {
  const iconMap = {
    'leaf': '🌿',
    'flask': '🧪',
    'book': '📖',
    'globe': '🌍',
    'certificate': '📜',
    'users': '👥'
  }
  return iconMap[props.icon] || '📄'
})

const iconComponent = computed(() => null) // Placeholder for SVG icons

const iconStyle = computed(() => {
  const colorMap = {
    'leaf': 'var(--color-primary)',
    'flask': 'var(--color-secondary)',
    'book': 'var(--color-accent-dark)',
    'globe': 'var(--color-primary-light)',
    'certificate': 'var(--color-highlight)',
    'users': 'var(--color-accent)'
  }
  return {
    backgroundColor: `${colorMap[props.icon] || 'var(--color-primary)'}20`
  }
})

const statusVariant = computed(() => {
  const variantMap = {
    'published': 'success',
    'draft': 'warning',
    'review': 'info'
  }
  return variantMap[props.status?.toLowerCase()] || 'default'
})
</script>

<style scoped>
.standard-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  text-decoration: none;
  color: var(--color-text);
  position: relative;
}

.standard-card--hoverable:hover {
  transform: translateY(-4px);
}

.standard-card-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.standard-card-content {
  flex: 1;
  min-width: 0;
}

.standard-card-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.standard-card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-sm);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.standard-card-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.standard-card-count {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-secondary);
}

.standard-card-arrow {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
  opacity: 0;
  transform: translateX(-8px);
  transition: all var(--transition-fast);
}

.standard-card:hover .standard-card-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .standard-card {
    flex-direction: column;
    align-items: stretch;
  }

  .standard-card-arrow {
    display: none;
  }
}
</style>
