<template>
  <div class="content-page">
    <h1 class="page-title">Quality Standards</h1>

    <div class="content-body">
      <p class="lead">
        Ensuring quality from seed to patient through standardized agricultural practices,
        processing methods, and logistics.
      </p>

      <h2>Working Groups</h2>
      <p>
        Quality standards are developed by specialized working groups that focus
        on specific areas of phytomedicine quality assurance. Each working group is
        responsible for developing and maintaining standards within their area of expertise.
      </p>

      <div class="working-groups-list">
        <div class="working-group-card glass">
          <div class="group-header">
            <h3 class="group-name">Agricultural and Collection Practices Working Group</h3>
            <Badge variant="info">Active</Badge>
          </div>
          <p class="group-description">
            Developing guidelines for growing, harvesting, and collecting medicinal plants
            to ensure quality, efficacy, and sustainability of the phytomedicine supply chain.
          </p>
          <div class="group-meta">
            <span>Standardized agricultural practices are essential for ensuring consistent quality of medicinal plant materials from cultivation to harvest.</span>
          </div>
          <p class="standards-note">
            <em>Standards from this working group will be published here as they are developed.</em>
          </p>
        </div>

        <div class="working-group-card glass">
          <div class="group-header">
            <h3 class="group-name">Preparation and Processing Working Group</h3>
            <Badge variant="info">Active</Badge>
          </div>
          <p class="group-description">
            Establishing best practices for transforming raw plant materials into safe,
            effective, and high-quality phytomedicines through standardized processing techniques.
          </p>
          <div class="group-meta">
            <span>Processing methods significantly impact the therapeutic properties and safety profile of phytomedicine products.</span>
          </div>
          <p class="standards-note">
            <em>Standards from this working group will be published here as they are developed.</em>
          </p>
        </div>

        <div class="working-group-card glass">
          <div class="group-header">
            <h3 class="group-name">Preservation, Storage and Logistics Working Group</h3>
            <Badge variant="info">Active</Badge>
          </div>
          <p class="group-description">
            Developing standards for storage conditions, packaging requirements, cold chain
            management, and traceability systems to maintain product integrity throughout
            the distribution chain.
          </p>
          <div class="group-meta">
            <span>Proper preservation and logistics are critical for maintaining the quality and efficacy of phytomedicines from production to patient.</span>
          </div>
          <p class="standards-note">
            <em>Standards from this working group will be published here as they are developed.</em>
          </p>
        </div>
      </div>

      <h2>Get Involved</h2>
      <p>
        SIPM members can participate in working groups to contribute to standards development.
        If you have expertise in agricultural practices, processing methods, or logistics for
        phytomedicine, we invite you to <router-link to="/members/working-groups">join our working groups</router-link>.
      </p>
    </div>
  </div>
</template>

<script setup>
import Badge from '@/components/ui/Badge.vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Quality Standards',
  description: 'SIPM Quality Standards - Working groups for agricultural practices, processing, and logistics in phytomedicine.',
  url: '/standards/quality'
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
