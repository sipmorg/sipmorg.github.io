<template>
  <section class="hero" :class="heroClasses">
    <div class="hero-background" v-if="image">
      <img :src="image" :alt="imageAlt" class="hero-image" />
      <div class="hero-overlay"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle" v-if="subtitle">{{ subtitle }}</p>
        <p class="hero-description" v-if="description">{{ description }}</p>
        <div class="hero-actions" v-if="ctaText || ctaSecondaryText">
          <GradientButton
            v-if="ctaText"
            :href="ctaLink?.startsWith('http') ? ctaLink : undefined"
            variant="gold"
            size="lg"
          >
            <router-link v-if="ctaLink && !ctaLink?.startsWith('http')" :to="ctaLink" class="hero-cta-link">
              {{ ctaText }}
            </router-link>
            <template v-else>{{ ctaText }}</template>
          </GradientButton>
          <GradientButton
            v-if="ctaSecondaryText"
            :href="ctaSecondaryLink?.startsWith('http') ? ctaSecondaryLink : undefined"
            variant="outline"
            size="lg"
          >
            <router-link v-if="ctaSecondaryLink && !ctaSecondaryLink?.startsWith('http')" :to="ctaSecondaryLink" class="hero-cta-link">
              {{ ctaSecondaryText }}
            </router-link>
            <template v-else>{{ ctaSecondaryText }}</template>
          </GradientButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import GradientButton from './GradientButton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: ''
  },
  ctaText: {
    type: String,
    default: ''
  },
  ctaLink: {
    type: String,
    default: ''
  },
  ctaSecondaryText: {
    type: String,
    default: ''
  },
  ctaSecondaryLink: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'centered',
    validator: (value) => ['centered', 'split', 'full'].includes(value)
  }
})

const heroClasses = computed(() => [
  `hero--${props.variant}`,
  { 'hero--has-image': props.image }
])
</script>

<style scoped>
.hero {
  position: relative;
  padding: var(--spacing-3xl) 0;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.hero--centered {
  text-align: center;
}

.hero--centered .hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero--split {
  min-height: 500px;
}

.hero--full {
  min-height: 600px;
}

.hero--has-image {
  color: var(--color-text-inverse);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 126, 128, 0.9), rgba(62, 108, 105, 0.8));
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-inverse);
}

.hero--centered:not(.hero--has-image) .hero-title {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
}

.hero--centered:not(.hero--has-image) .hero-subtitle {
  color: var(--color-secondary);
}

.hero-description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  opacity: 0.9;
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
}

.hero--centered .hero-description {
  margin-left: auto;
  margin-right: auto;
}

.hero--centered:not(.hero--has-image) .hero-description {
  color: var(--color-text-light);
  opacity: 1;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-cta-link {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 640px) {
  .hero {
    padding: var(--spacing-2xl) 0;
    min-height: 300px;
  }

  .hero--full {
    min-height: 400px;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .hero-description {
    font-size: var(--font-size-base);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
