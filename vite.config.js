import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { readFileSync } from 'fs'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes(paths, routes) {
      const allRoutes = []

      function flattenRoutes(routeList, parentPath = '') {
        for (const route of routeList) {
          // Skip redirects, but handle dynamic routes separately
          if (route.redirect) {
            continue
          }

          const fullPath = route.path.startsWith('/')
            ? route.path
            : parentPath
              ? `${parentPath}/${route.path}`.replace(/\/+/g, '/')
              : route.path

          // Include static routes
          if (fullPath && fullPath !== '' && !route.path.includes(':')) {
            allRoutes.push(fullPath)
          }

          if (route.children) {
            flattenRoutes(route.children, fullPath)
          }
        }
      }

      flattenRoutes(routes)

      // Add known dynamic routes (news articles)
      allRoutes.push('/news/introducing-sipm')

      // Add standards routes - read from built JSON files
      try {
        const standardsIndexPath = resolve(__dirname, 'src/content/standards/index.json')
        const standardsData = JSON.parse(readFileSync(standardsIndexPath, 'utf-8'))

        for (const standard of standardsData) {
          const category = standard.category || 'standards'
          const id = standard.id || standard.number
          if (id) {
            allRoutes.push(`/standards/${category}/${id}`)
          }
        }
      } catch (err) {
        // If standards JSON doesn't exist yet (first build), skip
        console.warn('Standards index not found, skipping standards routes')
      }

      return [...new Set(allRoutes)]
    },
    sitemap: {
      hostname: 'https://sipm.org',
      lastmod: new Date().toISOString()
    },
    crittersOptions: {
      reduceInlineStyles: false
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@unhead/vue', 'yaml']
  }
})
