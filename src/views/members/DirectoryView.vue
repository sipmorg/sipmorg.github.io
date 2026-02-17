<template>
  <div class="content-page">
    <h1 class="page-title">Member Directory</h1>

    <div class="content-body">
      <div class="coming-soon glass">
        <h2 class="coming-soon-title">Coming Soon</h2>
        <p class="lead">
          Our member directory is currently being developed.
        </p>
        <p>
          SIPM is actively building our global community of phytomedicine professionals.
          Once launched, the directory will include researchers, clinicians, industry
          professionals, and traditional medicine practitioners from around the world.
        </p>
        <p>
          If you're interested in becoming a member, please visit our
          <router-link to="/members/benefits">membership benefits</router-link> page
          or contact us at <a href="mailto:membership@sipm.org">membership@sipm.org</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Member Directory',
  description: 'SIPM member directory - coming soon.',
  url: '/members/directory'
})
</script>

<style scoped>
.content-page {
  max-width: 800px;
}

.page-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.content-body {
  line-height: var(--line-height-relaxed);
}

.coming-soon {
  padding: var(--spacing-2xl);
  text-align: center;
}

.coming-soon-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-md);
}

.lead {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.coming-soon p {
  margin-bottom: var(--spacing-md);
  color: var(--color-text-light);
}

.coming-soon a {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
