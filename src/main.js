/**
 * Main entry point for SIPM website
 *
 * Configured for Static Site Generation (SSG) with vite-ssg
 */

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './styles/main.css'

import { preloadContent } from './composables/useContent.js'

// ViteSSG setup
export const createApp = ViteSSG(
  App,
  { routes, base: '/' },
  ({ app, router, isClient, initialState }) => {
    // Preload content during build
    if (!isClient) {
      return preloadContent()
    }

    // Client-side: restore from initialState if available
    if (initialState.content) {
      // Content was preloaded during SSG build
    }
  }
)
