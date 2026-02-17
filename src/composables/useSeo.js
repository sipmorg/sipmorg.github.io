/**
 * useSeo Composable
 *
 * Provides SEO metadata management using @unhead/vue
 */

import { useHead } from '@unhead/vue'
import { computed } from 'vue'

const defaultConfig = {
  siteName: 'SIPM - International Society of Phytomedicine',
  siteUrl: 'https://sipm.org',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@sipm_org'
}

/**
 * Use SEO for a page
 */
export function useSeo(options) {
  const {
    title,
    description,
    image,
    url,
    type = 'website',
    article
  } = options

  const fullTitle = computed(() => {
    if (!title) return defaultConfig.siteName
    return `${title} | SIPM`
  })

  const fullImage = computed(() => {
    if (!image) return defaultConfig.defaultImage
    return image.startsWith('http') ? image : `${defaultConfig.siteUrl}${image}`
  })

  const fullUrl = computed(() => {
    if (!url) return defaultConfig.siteUrl
    return url.startsWith('http') ? url : `${defaultConfig.siteUrl}${url}`
  })

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: fullImage },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: defaultConfig.siteName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImage },
      { name: 'twitter:site', content: defaultConfig.twitterHandle }
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  })
}

/**
 * Use global SEO defaults
 */
export function useGlobalSeo() {
  useHead({
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#3b7e80' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  })
}
