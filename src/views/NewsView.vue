<template>
  <div class="news-page">
    <div class="container">
      <TheBreadcrumbs :items="[{ label: 'News', path: '/news' }]" />

      <header class="page-header">
        <h1 class="page-title">News & Updates</h1>
        <p class="page-subtitle">
          Stay informed about the latest developments, events, and announcements from SIPM.
        </p>
      </header>

      <div class="news-grid">
        <NewsCard
          v-for="article in articles"
          :key="article.slug"
          :title="article.title"
          :excerpt="article.excerpt"
          :date="article.date"
          :category="article.category"
          :image="article.image"
          :link="`/news/${article.slug}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/layout/TheBreadcrumbs.vue'
import NewsCard from '@/components/ui/NewsCard.vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'News & Updates',
  description: 'Latest news, events, and announcements from the International Society of Phytomedicine.',
  url: '/news'
})

const articles = ref([
  {
    title: 'Introducing SIPM: A New Era for Phytomedicine Standards',
    excerpt: 'The International Society of Phytomedicine (SIPM) has been established to address the critical need for unified, science-based standards in the rapidly growing field of plant-based medicine.',
    date: '2026-02-05',
    category: 'Announcement',
    slug: 'introducing-sipm'
  }
])
</script>

<style scoped>
.news-page {
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.page-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
