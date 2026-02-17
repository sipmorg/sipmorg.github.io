<template>
  <div class="content-page">
    <h1 class="page-title">Our Mission</h1>

    <div class="content-body">
      <p class="lead">
        The International Society of Phytomedicine (SIPM) is dedicated to establishing and
        advancing comprehensive global standards for medicinal plants and phytotherapeutic
        products through scientific excellence, cross-cultural collaboration, and commitment
        to public health.
      </p>

      <h2>Purpose</h2>
      <p>
        SIPM promotes the scientific study, development, and standardization of phytomedicine,
        including pharmacognosy, phytochemistry, ethnobotany, and the integration of plant-based
        medicines into modern healthcare systems.
      </p>

      <p>
        We serve as a global platform for collaboration among researchers, clinicians, industry
        stakeholders, regulators, and traditional practitioners to advance the field of
        phytomedicine through the development of comprehensive standards that ensure the safety,
        efficacy, quality, and sustainability of plant-based medicine.
      </p>

      <h2>Our Values</h2>

      <div class="values-grid">
        <div class="value-item glass">
          <h3>Scientific Excellence</h3>
          <p>We uphold rigorous scientific standards in all our work, ensuring that phytomedicine standards are evidence-based and methodologically sound.</p>
        </div>

        <div class="value-item glass">
          <h3>Cross-cultural Collaboration</h3>
          <p>We bridge traditional knowledge systems with contemporary science, respecting diverse cultural perspectives while maintaining scientific rigor.</p>
        </div>

        <div class="value-item glass">
          <h3>Public Health Commitment</h3>
          <p>Our ultimate goal is to ensure that plant-based medicines are safe, effective, and accessible to populations worldwide.</p>
        </div>

        <div class="value-item glass">
          <h3>Sustainability</h3>
          <p>We promote sustainable practices in the cultivation, harvesting, and use of medicinal plants to protect biodiversity and ensure long-term availability.</p>
        </div>
      </div>

      <h2>Global Reach</h2>
      <p>
        Our name reflects our commitment to fostering international collaboration and advancing
        the field of phytomedicine across diverse cultures and languages:
      </p>

      <ul>
        <li><strong>English:</strong> International Society of Phytomedicine</li>
        <li><strong>French:</strong> Société Internationale de Phytomédecine</li>
        <li><strong>Chinese:</strong> 國際植物藥學會 / 国际植物药学会</li>
        <li><strong>Japanese:</strong> 国際植物医薬学会</li>
      </ul>

      <h2>Our Commitment</h2>
      <p>
        Through rigorous science, inclusive collaboration, and respect for both traditional
        wisdom and modern innovation, SIPM advances phytomedicine as a safe, effective, and
        integral component of global healthcare and medical practice.
      </p>
      <p>
        We serve humanity by ensuring that plant-based medicines meet the highest standards
        of quality, safety, and efficacy, making the healing power of plants accessible and
        trustworthy for generations to come.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Mission',
  description: 'Learn about SIPM\'s mission to establish and advance comprehensive global standards for medicinal plants and phytotherapeutic products.',
  url: '/about/mission'
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

.content-body h3 {
  font-family: var(--font-serif);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
}

.lead {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
}

.value-item {
  padding: var(--spacing-lg);
}

.value-item h3 {
  margin-top: 0;
}

.value-item p {
  margin-bottom: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.content-body ul {
  margin: var(--spacing-lg) 0;
  padding-left: var(--spacing-xl);
}

.content-body li {
  margin-bottom: var(--spacing-sm);
}

@media (max-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
