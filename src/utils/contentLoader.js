/**
 * Content Loader Utility
 *
 * Loads YAML/MD content files for use in Vue components.
 * Works with both Vite dev server and SSG builds.
 */

import { parse as parseYaml } from 'yaml'
import { marked } from 'marked'

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true
})

// Cache for loaded content
const contentCache = new Map()

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (match) {
    const frontmatter = parseYaml(match[1])
    const body = match[2].trim()
    return { frontmatter, body }
  }

  return { frontmatter: {}, body: content }
}

/**
 * Load a YAML content file
 */
export async function loadContent(path) {
  const cacheKey = path

  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)
  }

  try {
    const modules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
    const fullPath = `/src/content/${path}.yaml`

    if (!modules[fullPath]) {
      console.warn(`Content file not found: ${fullPath}`)
      return null
    }

    const raw = await modules[fullPath]()
    const content = parseYaml(raw)

    contentCache.set(cacheKey, content)
    return content
  } catch (error) {
    console.error(`Failed to load content: ${path}`, error)
    return null
  }
}

/**
 * Load a Markdown content file with frontmatter
 */
export async function loadMarkdown(path) {
  const cacheKey = `md:${path}`

  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)
  }

  try {
    const modules = import.meta.glob('/src/content/**/*.md', { query: '?raw', import: 'default' })
    const fullPath = `/src/content/${path}.md`

    if (!modules[fullPath]) {
      console.warn(`Markdown file not found: ${fullPath}`)
      return null
    }

    const raw = await modules[fullPath]()
    const { frontmatter, body } = parseFrontmatter(raw)
    const html = marked(body)

    const content = {
      ...frontmatter,
      body,
      html
    }

    contentCache.set(cacheKey, content)
    return content
  } catch (error) {
    console.error(`Failed to load markdown: ${path}`, error)
    return null
  }
}

/**
 * Load site configuration
 */
export async function loadSiteConfig() {
  return loadContent('site')
}

/**
 * Load all content files in a directory
 */
export async function loadDirectory(directory, type = 'yaml') {
  const glob = type === 'md'
    ? import.meta.glob('/src/content/**/*.md', { query: '?raw', import: 'default' })
    : import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })

  const contents = []

  for (const [path, loader] of Object.entries(glob)) {
    if (path.includes(`/${directory}/`) && !path.endsWith('site.yaml')) {
      try {
        const raw = await loader()

        if (type === 'md') {
          const { frontmatter, body, html } = { ...parseFrontmatter(raw), html: marked(parseFrontmatter(raw).body) }
          contents.push({
            ...frontmatter,
            body,
            html,
            _path: path.replace('/src/content/', '').replace('.md', '')
          })
        } else {
          const content = parseYaml(raw)
          contents.push({
            ...content,
            _path: path.replace('/src/content/', '').replace('.yaml', '')
          })
        }
      } catch (error) {
        console.error(`Failed to load: ${path}`, error)
      }
    }
  }

  // Sort by date if available
  contents.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date)
    }
    return 0
  })

  return contents
}

/**
 * Preload all content for SSG
 */
export async function preloadAllContent() {
  const yamlModules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
  const mdModules = import.meta.glob('/src/content/**/*.md', { query: '?raw', import: 'default' })
  const allContent = {}

  for (const [path, loader] of Object.entries(yamlModules)) {
    try {
      const raw = await loader()
      const content = parseYaml(raw)
      const key = path.replace('/src/content/', '').replace('.yaml', '')
      allContent[key] = content
      contentCache.set(key, content)
    } catch (error) {
      console.error(`Failed to preload: ${path}`, error)
    }
  }

  for (const [path, loader] of Object.entries(mdModules)) {
    try {
      const raw = await loader()
      const { frontmatter, body } = parseFrontmatter(raw)
      const html = marked(body)
      const key = path.replace('/src/content/', '').replace('.md', '')
      allContent[key] = { ...frontmatter, body, html }
      contentCache.set(`md:${key}`, allContent[key])
    } catch (error) {
      console.error(`Failed to preload: ${path}`, error)
    }
  }

  return allContent
}
