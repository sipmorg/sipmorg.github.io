/**
 * useContent Composable
 *
 * Provides reactive access to YAML/MD content files with caching and SSG support.
 */

import { ref, readonly } from 'vue'
import { loadContent, loadMarkdown, loadSiteConfig, preloadAllContent } from '@/utils/contentLoader.js'

// Global content cache
const contentCache = ref(new Map())
const siteConfig = ref(null)
const isLoaded = ref(false)
const loadPromise = ref(null)

/**
 * Load and cache content from a YAML file
 */
export async function useContent(path) {
  if (contentCache.value.has(path)) {
    return contentCache.value.get(path)
  }

  const content = await loadContent(path)
  contentCache.value.set(path, content)

  return content
}

/**
 * Load and cache content from a Markdown file
 */
export async function useMarkdown(path) {
  const cacheKey = `md:${path}`

  if (contentCache.value.has(cacheKey)) {
    return contentCache.value.get(cacheKey)
  }

  const content = await loadMarkdown(path)
  contentCache.value.set(cacheKey, content)

  return content
}

/**
 * Get site configuration (synchronous if already loaded)
 */
export function useSiteConfig() {
  if (!siteConfig.value && !loadPromise.value) {
    loadPromise.value = loadSiteConfig().then(config => {
      siteConfig.value = config
      return config
    })
  }

  return readonly(siteConfig)
}

/**
 * Preload all content for SSG builds
 */
export async function preloadContent() {
  if (isLoaded.value) return

  const allContent = await preloadAllContent()

  for (const [path, content] of Object.entries(allContent)) {
    const key = path.startsWith('md:') ? path : path
    contentCache.value.set(key, content)
  }

  // Set site config
  if (allContent.site) {
    siteConfig.value = allContent.site
  }

  isLoaded.value = true
  loadPromise.value = Promise.resolve(allContent.site)
}

/**
 * Get cached content synchronously (for use after preload)
 */
export function getCachedContent(path) {
  return contentCache.value.get(path) || null
}

/**
 * Get cached site config synchronously
 */
export function getCachedSiteConfig() {
  return siteConfig.value
}

/**
 * Clear content cache (useful for development hot reload)
 */
export function clearContentCache() {
  contentCache.value.clear()
  siteConfig.value = null
  isLoaded.value = false
  loadPromise.value = null
}
