<template>
  <div class="content-page">
    <TheBreadcrumbs :items="breadcrumbs" />

    <div class="content-body">
      <div class="coming-soon glass">
        <h1 class="page-title">Standard Coming Soon</h1>
        <p class="lead">
          This standard is currently under development by one of our working groups.
        </p>
        <p>
          SIPM working groups are actively developing standards across all categories.
          Once finalized and approved, standards will be published here with full documentation,
          including scope, audience, and implementation guidelines.
        </p>
        <p>
          If you have expertise in this area and would like to contribute to standards development,
          we invite you to <router-link to="/members/working-groups">join our working groups</router-link>.
        </p>
        <div class="actions">
          <router-link to="/standards" class="back-link">
            ← Back to Standards
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheBreadcrumbs from '@/components/layout/TheBreadcrumbs.vue'
import { useSeo } from '@/composables/useSeo.js'

const route = useRoute()

const categoryNames = {
  foundation: 'Foundation',
  quality: 'Quality',
  science: 'Science',
  governance: 'Governance'
}

const categoryName = computed(() => {
  const pathParts = route.path.split('/')
  const category = pathParts[2] // /standards/{category}/{slug}
  return categoryNames[category] || 'Standards'
})

const breadcrumbs = computed(() => [
  { label: 'Standards', path: '/standards' },
  { label: categoryName.value, path: `/standards/${route.path.split('/')[2]}` },
  { label: 'Standard', path: route.path }
])

useSeo({
  title: 'Standard Coming Soon',
  description: 'This SIPM standard is currently under development.',
  url: route.path
})
</script>

<style scoped>
.content-page {
  max-width: 800px;
  padding-top: var(--spacing-xl);
}

.page-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.content-body {
  line-height: var(--line-height-relaxed);
}

.coming-soon {
  padding: var(--spacing-2xl);
  text-align: center;
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

.actions {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.back-link {
  display: inline-block;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--color-accent-dark);
}
</style>
