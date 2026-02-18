<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection
      title="Advancing Phytomedicine Through Science"
      subtitle="International Society of Phytomedicine"
      description="Promoting the scientific study, development, and standardization of plant-based medicines through international collaboration and commitment to public health."
      cta-text="Explore Standards"
      cta-link="/standards/"
      cta-secondary-text="Browse Herbapedia"
      cta-secondary-link="https://www.herbapedia.com/"
    />

    <!-- Mission Preview -->
    <section class="section">
      <div class="container">
        <div class="mission-preview">
          <div class="mission-content">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-text">
              The International Society of Phytomedicine is dedicated to establishing and
              advancing comprehensive global standards for medicinal plants and phytotherapeutic
              products through scientific excellence, cross-cultural collaboration, and
              commitment to public health.
            </p>
            <router-link to="/about/mission" class="mission-link">
              Learn more about our mission →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Standards Overview -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Standards Development Areas</h2>
          <p class="section-subtitle">
            SIPM develops comprehensive standards covering the entire phytomedicine lifecycle
          </p>
        </div>

        <div class="standards-grid">
          <StandardCard
            title="Foundation"
            description="Terminology and classification systems that establish a common vocabulary for phytomedicine across disciplines and cultures."
            icon="book"
            link="/standards/foundation/"
          />
          <StandardCard
            title="Quality"
            description="Agricultural practices, processing, and logistics standards ensuring quality from seed to patient."
            icon="leaf"
            link="/standards/quality/"
          />
          <StandardCard
            title="Science"
            description="Evidence-based evaluation and documentation of medicinal properties, testing methods, and clinical applications."
            icon="flask"
            link="/standards/science/"
          />
          <StandardCard
            title="Governance"
            description="Regulatory harmonization, education standards, and pharmacovigilance for safe implementation."
            icon="certificate"
            link="/standards/governance/"
          />
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest News</h2>
        </div>

        <div class="news-single">
          <NewsCard
            :title="featuredNews.title"
            :excerpt="featuredNews.excerpt"
            :date="featuredNews.date"
            :category="featuredNews.category"
            :link="`/news/${featuredNews.slug}`"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="section">
      <div class="container container-narrow">
        <div class="newsletter glass">
          <h3 class="newsletter-title">Stay Updated</h3>
          <p class="newsletter-text">
            Subscribe to our newsletter for the latest standards updates, events, and news.
          </p>
          <form class="newsletter-form" @submit.prevent="handleNewsletterSubmit">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="newsletter-input"
              required
            />
            <GradientButton variant="gold" type="submit">
              Subscribe
            </GradientButton>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '@/components/ui/HeroSection.vue'
import StandardCard from '@/components/ui/StandardCard.vue'
import NewsCard from '@/components/ui/NewsCard.vue'
import GradientButton from '@/components/ui/GradientButton.vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Home',
  description: 'International Society of Phytomedicine - Promoting the scientific study and standardization of plant-based medicines.',
  url: '/'
})

const email = ref('')

const featuredNews = ref({
  title: 'Introducing SIPM: A New Era for Phytomedicine Standards',
  excerpt: 'The International Society of Phytomedicine (SIPM) has been established to address the critical need for unified, science-based standards in the rapidly growing field of plant-based medicine.',
  date: '2026-02-05',
  category: 'Announcement',
  slug: 'introducing-sipm'
})

const handleNewsletterSubmit = () => {
  // Handle newsletter submission
  console.log('Newsletter signup:', email.value)
  email.value = ''
  alert('Thank you for subscribing!')
}
</script>

<style scoped>
.section {
  padding: var(--spacing-3xl) 0;
}

.section--alt {
  background: var(--color-glass-dark);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-top: var(--spacing-sm);
}

.section-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.section-link:hover {
  color: var(--color-accent-dark);
}

/* Mission Preview */
.mission-preview {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mission-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.mission-link {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.mission-link:hover {
  color: var(--color-accent-dark);
}

/* Standards Grid */
.standards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

/* News */
.news-single {
  max-width: 600px;
  margin: 0 auto;
}

/* Newsletter */
.newsletter {
  padding: var(--spacing-2xl);
  text-align: center;
}

.newsletter-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.newsletter-text {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

.newsletter-form {
  display: flex;
  gap: var(--spacing-sm);
  max-width: 400px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: var(--color-surface);
  outline: none;
  transition: border-color var(--transition-fast);
}

.newsletter-input:focus {
  border-color: var(--color-primary);
}

@media (max-width: 1024px) {
  .standards-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .newsletter-form {
    flex-direction: column;
  }
}
</style>
