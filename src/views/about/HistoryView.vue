<template>
  <div class="content-page">
    <h1 class="page-title">Our History</h1>

    <div class="content-body">
      <p class="lead">
        The International Society of Phytomedicine was established in the United States
        as a non-profit organization by a coalition of phytomedicine experts from the
        United States, Switzerland, and Hong Kong.
      </p>

      <h2>Establishment</h2>
      <p>
        SIPM was founded to address the growing global need for unified, science-based
        standards in the field of plant-based medicine. Recognizing that phytomedicine
        faces unique challenges—natural variability of plant materials, complexity of
        multi-constituent preparations, diversity of traditional knowledge systems, and
        the need to bridge ancient practices with contemporary regulatory frameworks—a
        group of leading experts came together to create an organization dedicated to
        developing comprehensive standards for the entire phytomedicine lifecycle.
      </p>

      <h2>Founding Vision</h2>
      <p>
        The founders recognized that as the use of phytomedicines continues to grow
        globally—spanning from time-honored traditional medicine systems to cutting-edge
        pharmaceutical applications—the need for unified, science-based standards has
        never been more critical. SIPM was created to serve as a global platform for
        collaboration among researchers, clinicians, industry stakeholders, regulators,
        and traditional practitioners.
      </p>

      <h2>Global Perspective</h2>
      <p>
        From its inception, SIPM has been committed to fostering international
        collaboration and advancing the field of phytomedicine across diverse cultures
        and languages. Our name reflects this commitment:
      </p>

      <ul>
        <li><strong>English:</strong> International Society of Phytomedicine</li>
        <li><strong>French:</strong> Société Internationale de Phytomédecine</li>
        <li><strong>Chinese:</strong> 國際植物藥學會 / 国际植物药学会</li>
        <li><strong>Japanese:</strong> 国際植物医薬学会</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>
        As we look to the future, SIPM remains committed to our founding vision: advancing
        phytomedicine as a safe, effective, and integral component of global healthcare
        through rigorous science, inclusive collaboration, and respect for both traditional
        wisdom and modern innovation.
      </p>
      <p>
        We invite researchers, clinicians, industry professionals, regulators, and
        traditional medicine practitioners from around the world to join us in this
        important work.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'History',
  description: 'Learn about the establishment of the International Society of Phytomedicine.',
  url: '/about/history'
})
</script>

<style scoped>
.content-page {
  max-width: 800px;
}

.page-title {
  font-family: var(--font-serif);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.content-body {
  line-height: var(--line-height-relaxed);
}

.content-body h2 {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
}

.lead {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
}

.content-body ul {
  margin: var(--spacing-lg) 0;
  padding-left: var(--spacing-xl);
}

.content-body li {
  margin-bottom: var(--spacing-sm);
}
</style>
