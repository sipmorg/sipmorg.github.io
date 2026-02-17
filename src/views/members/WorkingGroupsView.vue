<template>
  <div class="content-page">
    <h1 class="page-title">Working Groups</h1>

    <div class="content-body">
      <p class="lead">
        SIPM working groups are the engine of standards development. Each group focuses
        on a specific area of phytomedicine, bringing together experts to create and
        maintain our comprehensive standards portfolio.
      </p>

      <div class="working-groups-grid">
        <div class="working-group-card glass" v-for="group in workingGroups" :key="group.name">
          <div class="group-header">
            <h3 class="group-name">{{ group.name }}</h3>
            <Badge variant="success">{{ group.status }}</Badge>
          </div>
          <p class="group-description">{{ group.description }}</p>
          <div class="group-meta">
            <span><strong>{{ group.members }}</strong> Members</span>
            <span>Chair: {{ group.chair }}</span>
          </div>
          <div class="group-projects" v-if="group.projects.length">
            <h4>Current Projects</h4>
            <ul>
              <li v-for="project in group.projects" :key="project">{{ project }}</li>
            </ul>
          </div>
          <GradientButton variant="outline" size="sm">Join Group</GradientButton>
        </div>
      </div>

      <h2>Join a Working Group</h2>
      <p>
        SIPM members are encouraged to participate in working groups relevant to their
        expertise. Working group participation provides opportunities to:
      </p>
      <ul>
        <li>Shape the development of international standards</li>
        <li>Network with leading experts in your field</li>
        <li>Stay at the forefront of phytomedicine developments</li>
        <li>Contribute to public health and scientific advancement</li>
      </ul>
      <p>
        To join a working group, contact us at
        <a href="mailto:workinggroups@sipm.org">workinggroups@sipm.org</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Badge from '@/components/ui/Badge.vue'
import GradientButton from '@/components/ui/GradientButton.vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Working Groups',
  description: 'Explore SIPM working groups and find opportunities to contribute to phytomedicine standards development.',
  url: '/members/working-groups'
})

const workingGroups = ref([
  {
    name: 'Terminology Working Group',
    status: 'Active',
    members: 12,
    chair: 'Dr. Hans Weber',
    description: 'Developing standardized vocabulary for phytomedicine across all disciplines and regulatory systems.',
    projects: [
      'SIPM-TERM-002: Traditional Medicine Terminology',
      'SIPM-TERM-003: Phytochemical Nomenclature'
    ]
  },
  {
    name: 'Quality Standards Working Group',
    status: 'Active',
    members: 18,
    chair: 'Dr. Sarah Johnson',
    description: 'Establishing agricultural and processing standards for medicinal plants.',
    projects: [
      'SIPM-PPAC-003: Organic Cultivation Guidelines',
      'SIPM-PSL-002: Cold Chain Requirements'
    ]
  },
  {
    name: 'Clinical Applications Working Group',
    status: 'Active',
    members: 15,
    chair: 'Dr. Elena Martinez',
    description: 'Developing evidence-based protocols for therapeutic applications of phytomedicines.',
    projects: [
      'SIPM-CLIN-002: Pediatric Dosing Guidelines',
      'SIPM-CLIN-003: Geriatric Considerations'
    ]
  },
  {
    name: 'Regulatory Harmonization Working Group',
    status: 'Active',
    members: 20,
    chair: 'Dr. Maria Santos',
    description: 'Working toward international alignment of phytomedicine regulations.',
    projects: [
      'SIPM-REG-002: Market Access Pathways',
      'SIPM-REG-003: Cross-Border Recognition'
    ]
  },
  {
    name: 'Traditional Medicine Integration Working Group',
    status: 'Active',
    members: 14,
    chair: 'Prof. Li Wei',
    description: 'Bridging traditional knowledge systems with contemporary regulatory frameworks.',
    projects: [
      'SIPM-TRAD-001: Traditional Use Documentation Standards'
    ]
  },
  {
    name: 'Pharmacovigilance Working Group',
    status: 'Active',
    members: 10,
    chair: 'Dr. Klaus Schmidt',
    description: 'Developing systems for monitoring safety and reporting adverse events.',
    projects: [
      'SIPM-PV-002: Herb-Drug Interaction Database'
    ]
  }
])
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
  margin-bottom: var(--spacing-lg);
}

.lead {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
}

.working-groups-grid {
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
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.group-meta {
  display: flex;
  gap: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.group-projects {
  margin-bottom: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.group-projects h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.group-projects ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.group-projects li {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  padding: var(--spacing-xs) 0;
}

.content-body ul {
  margin: var(--spacing-lg) 0;
  padding-left: var(--spacing-xl);
}

.content-body li {
  margin-bottom: var(--spacing-sm);
}

.content-body a {
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
