<template>
  <div class="members-page">
    <div class="container">
      <TheBreadcrumbs :items="breadcrumbs" />

      <div class="page-layout">
        <aside class="page-sidebar">
          <nav class="sidebar-nav">
            <router-link to="/members/benefits" class="sidebar-link" :class="{ active: isActive('/members/benefits') }">
              Benefits
            </router-link>
            <router-link to="/members/working-groups" class="sidebar-link" :class="{ active: isActive('/members/working-groups') }">
              Working Groups
            </router-link>
            <router-link to="/members/directory" class="sidebar-link" :class="{ active: isActive('/members/directory') }">
              Directory
            </router-link>
          </nav>
        </aside>

        <main class="page-content">
          <router-view />
        </main>
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

useSeo({
  title: 'Members',
  description: 'Join SIPM and become part of the global community advancing phytomedicine standards.',
  url: '/members'
})

const breadcrumbs = computed(() => {
  const items = []
  if (route.name && route.name !== 'members-index') {
    items.push({
      label: route.meta?.title || route.name?.charAt(0).toUpperCase() + route.name?.slice(1),
      path: route.path
    })
  }
  return items
})

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
.members-page {
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
}

.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-2xl);
}

.page-sidebar {
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-xl));
  height: fit-content;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.sidebar-link {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.sidebar-link:hover {
  background: var(--color-glass-dark);
  color: var(--color-primary);
}

.sidebar-link.active {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

@media (max-width: 1024px) {
  .page-layout {
    grid-template-columns: 1fr;
  }

  .page-sidebar {
    position: static;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
  }
}
</style>
