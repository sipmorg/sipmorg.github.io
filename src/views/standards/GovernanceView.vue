<template>
  <div class="content-page">
    <h1 class="page-title">Governance Standards</h1>

    <div class="content-body">
      <p class="lead">
        Harmonizing regulations, establishing educational standards, and ensuring safety
        through pharmacovigilance.
      </p>

      <h2>Working Groups</h2>
      <p>
        Governance standards are developed by specialized working groups that focus
        on regulatory, educational, and safety aspects of phytomedicine. Each working group is
        responsible for developing and maintaining standards within their area of expertise.
      </p>

      <div class="working-groups-list">
        <div class="working-group-card glass">
          <div class="group-header">
            <h3 class="group-name">Regulatory Harmonization Working Group</h3>
            <Badge variant="info">Active</Badge>
          </div>
          <p class="group-description">
            Developing frameworks for international alignment of phytomedicine regulations,
            facilitating market access while maintaining safety and quality standards
            across different regulatory jurisdictions.
          </p>
          <div class="group-meta">
            <span>Regulatory harmonization reduces barriers to trade and improves access to quality phytomedicines globally.</span>
          </div>
          <p class="standards-note">
            <em>Standards from this working group will be published here as they are developed.</em>
          </p>
        </div>

        <div class="working-group-card glass">
          <div class="group-header">
            <h3 class="group-name">Education Working Group</h3>
            <Badge variant="info">Active</Badge>
          </div>
          <p class="group-description">
            Establishing curricula standards for phytomedicine education, professional
            certification programs, and continuing education requirements for
            healthcare practitioners and researchers.
          </p>
          <div class="group-meta">
            <span>Standardized education ensures that practitioners have the knowledge and skills necessary for safe and effective phytomedicine practice.</span>
          </div>
          <p class="standards-note">
            <em>Standards from this working group will be published here as they are developed.</em>
          </p>
        </div>

        <div class="working-group-card glass">
          <div class="group-header">
            <h3 class="group-name">Pharmacovigilance Working Group</h3>
            <Badge variant="info">Active</Badge>
          </div>
          <p class="group-description">
            Creating systems for monitoring safety, reporting adverse reactions,
            identifying herb-drug interactions, and implementing risk management
            strategies for phytomedicine products.
          </p>
          <div class="group-meta">
            <span>Effective pharmacovigilance is essential for protecting public health and maintaining confidence in phytomedicines.</span>
          </div>
          <p class="standards-note">
            <em>Standards from this working group will be published here as they are developed.</em>
          </p>
        </div>
      </div>

      <h2>Get Involved</h2>
      <p>
        SIPM members can participate in working groups to contribute to standards development.
        If you have expertise in regulatory affairs, education, or pharmacovigilance for
        phytomedicine, we invite you to <router-link to="/members/working-groups">join our working groups</router-link>.
      </p>
    </div>
  </div>
</template>

<script setup>
import Badge from '@/components/ui/Badge.vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Governance Standards',
  description: 'SIPM Governance Standards - Working groups for regulatory harmonization, education, and pharmacovigilance in phytomedicine.',
  url: '/standards/governance'
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

.working-groups-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
}

.working-group-card {
  padding: var(--spacing-lg);
}

.group-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
}

.group-name {
  font-family: var(--font-serif);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0;
}

.group-description {
  font-size: var(--font-size-base);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.group-meta {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.standards-note {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin: 0;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.content-body a {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
