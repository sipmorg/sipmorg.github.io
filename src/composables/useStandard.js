// Composable for loading standards data
// Supports both SSG (build-time) and CSR (runtime) loading

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Import all standards JSON files at build time for SSG
// Using Vite's glob import
const standardsModules = import.meta.glob('/src/content/standards/*.json', { eager: true })

// Build a lookup map from the imported modules
const standardsMap = {}
for (const path in standardsModules) {
  const match = path.match(/\/(SIPM-\d+)\.json$/)
  if (match) {
    standardsMap[match[1]] = standardsModules[path].default || standardsModules[path]
  }
}

export function useStandard() {
  const route = useRoute()
  const loading = ref(false)
  const error = ref(null)

  const standardId = computed(() => route.params.id)

  // For SSG, try to get data from pre-loaded modules first
  const standard = computed(() => {
    const id = standardId.value
    if (id && standardsMap[id]) {
      return standardsMap[id]
    }
    return null
  })

  // Check if we have static data (for SSG)
  const hasStaticData = computed(() => !!standard.value)

  // For CSR fallback or when static data isn't available
  async function loadStandard() {
    // If we already have static data, no need to fetch
    if (standard.value) {
      return standard.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await fetch(`/content/standards/${standardId.value}.json`)
      if (!response.ok) {
        throw new Error('Standard not found')
      }
      const data = await response.json()
      // Update the map for future use
      standardsMap[standardId.value] = data
      return data
    } catch (err) {
      error.value = err.message || 'Failed to load standard'
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    standard,
    standardId,
    loading,
    error,
    hasStaticData,
    loadStandard
  }
}

// Export the standards map for route generation
export function getAllStandards() {
  return Object.values(standardsMap)
}

export function getStandardById(id) {
  return standardsMap[id] || null
}
