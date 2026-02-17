<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <h1 class="not-found-title">404</h1>
        <h2 class="not-found-subtitle">Page Not Found</h2>
        <p class="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <router-link to="/" class="not-found-link">
          ← Return to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  url: '/404'
})
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - var(--header-height) - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
}

.not-found-content {
  text-align: center;
}

.not-found-title {
  font-family: var(--font-serif);
  font-size: 8rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1;
  margin: 0;
}

.not-found-subtitle {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  margin: var(--spacing-md) 0;
}

.not-found-text {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
}

.not-found-link {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.not-found-link:hover {
  color: var(--color-accent-dark);
}
</style>
