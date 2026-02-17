<template>
  <div class="article-page">
    <div class="container container-narrow">
      <TheBreadcrumbs :items="breadcrumbs" />

      <article class="article" v-if="article">
        <header class="article-header">
          <span class="article-category" v-if="article.category">{{ article.category }}</span>
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-meta">
            <time class="article-date">{{ formattedDate }}</time>
            <span class="article-author" v-if="article.author">By {{ article.author }}</span>
          </div>
        </header>

        <div class="article-content" v-html="article.html"></div>

        <footer class="article-footer">
          <div class="share-section">
            <h4>Share this article</h4>
            <div class="share-buttons">
              <a :href="twitterUrl" target="_blank" rel="noopener" class="share-button">Twitter</a>
              <a :href="linkedinUrl" target="_blank" rel="noopener" class="share-button">LinkedIn</a>
              <a :href="emailUrl" class="share-button">Email</a>
            </div>
          </div>
        </footer>
      </article>

      <div v-else class="not-found">
        <h1>Article Not Found</h1>
        <p>The requested article could not be found.</p>
        <router-link to="/news">← Back to News</router-link>
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

// Article data - in production, this would come from content files
const articlesData = {
  'introducing-sipm': {
    title: 'Introducing SIPM: A New Era for Phytomedicine Standards',
    category: 'Announcement',
    date: '2026-02-05',
    author: 'SIPM Founding Committee',
    html: `
      <p>We are pleased to announce the establishment of the International Society of Phytomedicine (SIPM), a new non-profit organization dedicated to developing and promoting science-based standards for plant-based medicines worldwide. Founded by a coalition of phytomedicine experts from the United States, Switzerland, and Hong Kong, SIPM addresses a critical gap in the global healthcare landscape: the need for unified, rigorous standards that ensure the safety, efficacy, and quality of phytomedicines.</p>

      <h2>The Need for SIPM</h2>
      <p>Phytomedicine—the use of plant-based medicines for health—has experienced remarkable growth in recent decades. From traditional herbal remedies used for centuries to modern pharmaceutical preparations derived from botanical sources, plant-based medicines represent a significant and expanding segment of global healthcare. The World Health Organization estimates that approximately 80% of the world's population relies on traditional medicine, much of which is plant-based, for some aspect of primary healthcare.</p>
      <p>Yet despite this widespread use, the field of phytomedicine faces significant challenges that compromise its potential to contribute optimally to public health:</p>
      <ul>
        <li><strong>Inconsistent Quality:</strong> The natural variability of plant materials, combined with diverse processing and manufacturing practices, leads to significant variations in product quality and therapeutic outcomes.</li>
        <li><strong>Regulatory Fragmentation:</strong> Different countries and regions maintain vastly different regulatory approaches to phytomedicines, creating barriers to international trade and complicating access for patients.</li>
        <li><strong>Terminological Confusion:</strong> The absence of standardized vocabulary across disciplines, cultures, and regulatory systems impedes clear communication in research, regulation, and clinical practice.</li>
        <li><strong>Evidence Gaps:</strong> While many phytomedicines have extensive histories of traditional use, rigorous scientific evaluation remains inconsistent, limiting integration into mainstream healthcare.</li>
        <li><strong>Sustainability Concerns:</strong> Increasing demand for medicinal plants raises questions about sustainable sourcing and the preservation of biodiversity.</li>
      </ul>
      <p>These challenges are not merely academic. They have real consequences for patients who rely on phytomedicines, for healthcare providers who recommend them, for researchers who study them, and for regulators who oversee them. The time has come for a coordinated, international effort to address these challenges systematically.</p>

      <h2>Our Mission and Scope</h2>
      <p>SIPM's mission is to establish and advance comprehensive global standards for medicinal plants and phytotherapeutic products through scientific excellence, cross-cultural collaboration, and commitment to public health.</p>
      <p>To achieve this mission, SIPM will develop standards across twelve interconnected areas that span the entire phytomedicine lifecycle:</p>
      <p><strong>Foundation:</strong> We will establish standardized terminology and classification systems that provide a common language for all stakeholders in the phytomedicine community.</p>
      <p><strong>Quality:</strong> We will develop guidelines for agricultural practices, processing methods, and storage logistics that ensure product quality from seed to patient.</p>
      <p><strong>Science:</strong> We will create frameworks for evaluating medicinal properties, standardizing test methods, establishing clinical protocols, and optimizing formulations.</p>
      <p><strong>Governance:</strong> We will work toward regulatory harmonization, establish educational standards, and develop pharmacovigilance systems to monitor safety.</p>

      <h2>A Collaborative Approach</h2>
      <p>SIPM is built on the principle that effective standards must be developed through inclusive, transparent collaboration. Our working groups bring together experts from academia, industry, regulatory agencies, and traditional medicine practice. We believe that meaningful progress requires bridging diverse perspectives—combining the rigor of modern science with respect for traditional knowledge, balancing commercial interests with public health priorities, and harmonizing different regulatory philosophies while respecting cultural contexts.</p>
      <p>We are committed to an open, consensus-based standards development process that welcomes participation from all qualified stakeholders. Our members will have opportunities to contribute to working groups, review draft standards, and participate in the governance of the organization.</p>

      <h2>Looking to the Future</h2>
      <p>As we begin this journey, we are mindful of the significant work ahead. Developing comprehensive standards for phytomedicine is not a simple task—it requires sustained effort, scientific rigor, and genuine collaboration across borders and disciplines. But we are optimistic about what we can achieve together.</p>
      <p>In the coming months, SIPM will establish working groups in each of our standards development areas, begin recruiting members from around the world, and initiate the process of developing our first foundational standards. We will engage with regulatory agencies, research institutions, and industry stakeholders to ensure that our work meets real-world needs.</p>
      <p>Our ultimate vision is a world where phytomedicines are trusted, accessible, and effective components of healthcare systems worldwide—where patients can rely on the quality of the plant-based medicines they use, where healthcare providers can recommend them with confidence, and where the healing power of plants is available to all who need it.</p>

      <h2>Join Us</h2>
      <p>We invite researchers, clinicians, industry professionals, regulators, traditional medicine practitioners, and all those committed to advancing phytomedicine to join us in this important work. Together, we can build the standards infrastructure that phytomedicine needs to fulfill its potential in promoting human health and well-being.</p>
      <p>For more information about membership opportunities, working group participation, or partnership arrangements, please contact us at <a href="mailto:info@sipm.org">info@sipm.org</a>.</p>
      <p>The future of phytomedicine is bright. Let us shape it together.</p>
    `
  }
}

const slug = computed(() => route.params.slug)
const article = computed(() => articlesData[slug.value])

const formattedDate = computed(() => {
  if (!article.value?.date) return ''
  const date = new Date(article.value.date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const breadcrumbs = computed(() => [
  { label: 'News', path: '/news' },
  { label: article.value?.title || 'Article', path: route.path }
])

const pageUrl = computed(() => `https://sipm.org${route.path}`)

const twitterUrl = computed(() =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.value?.title || '')}&url=${encodeURIComponent(pageUrl.value)}`
)

const linkedinUrl = computed(() =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`
)

const emailUrl = computed(() =>
  `mailto:?subject=${encodeURIComponent(article.value?.title || '')}&body=${encodeURIComponent(pageUrl.value)}`
)

useSeo({
  title: article.value?.title,
  description: article.value?.excerpt || `Read about ${article.value?.title}`,
  url: route.path,
  type: 'article'
})
</script>

<style scoped>
.article-page {
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
}

.article-header {
  margin-bottom: var(--spacing-xl);
}

.article-category {
  display: inline-block;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent-dark);
  margin-bottom: var(--spacing-sm);
}

.article-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-md);
}

.article-meta {
  display: flex;
  gap: var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.article-content {
  line-height: var(--line-height-relaxed);
}

.article-content :deep(h2) {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
}

.article-content :deep(p) {
  margin-bottom: var(--spacing-md);
}

.article-content :deep(ul) {
  margin: var(--spacing-md) 0;
  padding-left: var(--spacing-xl);
}

.article-content :deep(li) {
  margin-bottom: var(--spacing-sm);
}

.article-content :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
}

.article-footer {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.share-section h4 {
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
}

.share-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.share-button {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-glass-dark);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.share-button:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

.not-found {
  text-align: center;
  padding: var(--spacing-3xl) 0;
}
</style>
