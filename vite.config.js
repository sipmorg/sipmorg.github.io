import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

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

      return allRoutes
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
