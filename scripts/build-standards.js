/**
 * Build script to convert AsciiDoc standards to JSON
 * Run: node scripts/build-standards.js
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'
import Asciidoctor from '@asciidoctor/core'

const __dirname = dirname(fileURLToPath(import.meta.url))
const asciidoctor = Asciidoctor()

// Allow overriding standards path via environment variable (for CI)
const STANDARDS_SRC = process.env.STANDARDS_PATH || join(__dirname, '../../standards')
const OUTPUT_DIR = join(__dirname, '../src/content/standards')
const PUBLIC_DIR = join(__dirname, '../public/content/standards')

// Parse AsciiDoc and extract structured content
function parseAdocFile(content, filePath) {
  const baseDir = dirname(filePath)

  const doc = asciidoctor.load(content, {
    base_dir: baseDir,
    safe: 'safe',
    attributes: {
      'skip-front-matter': true,
      'sectnums': true,
      'toc': 'left',
      'linkcss': false,
      'copycss': false
    }
  })

  // Extract document attributes
  const attributes = {}
  const attrNames = [
    'docnumber', 'partnumber', 'edition', 'revdate', 'copyright-year',
    'language', 'title-intro-en', 'title-main-en', 'title-part-en',
    'doctype', 'docstage', 'docsubstage', 'technical-committee',
    'workgroup', 'library-ics'
  ]

  for (const name of attrNames) {
    const value = doc.getAttribute(name)
    if (value) attributes[name] = value
  }

  // Build title
  const title = doc.getTitle() || attributes['title-main-en'] || 'Untitled Standard'

  // Convert to HTML with full content
  const html = doc.convert()

  // Extract sections for TOC
  function extractSections(blocks) {
    const sections = []
    for (const block of blocks) {
      if (block.getContext() === 'section') {
        const section = {
          id: block.getId(),
          title: block.getTitle(),
          level: block.getLevel(),
          children: extractSections(block.getBlocks())
        }
        sections.push(section)
      }
    }
    return sections
  }

  const toc = extractSections(doc.getBlocks())

  return {
    id: basename(dirname(filePath)),
    title,
    attributes,
    html,
    toc,
    raw: content
  }
}

async function processStandards() {
  console.log('Building standards content...')

  // Ensure output directories exist
  await mkdir(OUTPUT_DIR, { recursive: true })
  await mkdir(PUBLIC_DIR, { recursive: true })

  const standards = []
  const standardDirs = await readdir(STANDARDS_SRC)

  for (const dir of standardDirs) {
    if (!dir.startsWith('SIPM-')) continue

    const standardPath = join(STANDARDS_SRC, dir, 'document.adoc')
    try {
      const content = await readFile(standardPath, 'utf-8')
      const parsed = parseAdocFile(content, standardPath)

      // Write individual standard JSON to both locations
      const jsonStr = JSON.stringify(parsed, null, 2)

      await writeFile(join(OUTPUT_DIR, `${dir}.json`), jsonStr)
      await writeFile(join(PUBLIC_DIR, `${dir}.json`), jsonStr)

      standards.push({
        id: parsed.id,
        title: parsed.title,
        number: dir,
        category: getCategory(dir),
        status: parsed.attributes.docstage === '60' ? 'published' : 'draft',
        date: parsed.attributes.revdate || new Date().toISOString().split('T')[0]
      })

      console.log(`  Processed: ${dir} - ${parsed.title}`)
    } catch (err) {
      console.log(`  Skipped: ${dir} (${err.message})`)
    }
  }

  // Write index file to both locations
  const indexJson = JSON.stringify(standards, null, 2)
  await writeFile(join(OUTPUT_DIR, 'index.json'), indexJson)
  await writeFile(join(PUBLIC_DIR, 'index.json'), indexJson)

  console.log(`\nBuilt ${standards.length} standards to ${OUTPUT_DIR}`)
  console.log(`Also copied to ${PUBLIC_DIR}`)

  return standards
}

function getCategory(number) {
  const num = parseInt(number.replace('SIPM-', ''))
  if (num < 100) return 'foundation'
  if (num < 200) return 'governance'
  if (num < 300) return 'quality'
  if (num < 400) return 'science'
  if (num < 500) return 'science'
  return 'governance'
}

// Run if called directly
processStandards().catch(console.error)

export { parseAdocFile, processStandards }
