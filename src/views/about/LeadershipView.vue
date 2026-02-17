<template>
  <div class="content-page">
    <h1 class="page-title">Leadership</h1>

    <div class="content-body">
      <p class="lead">
        SIPM is led by a distinguished group of experts from academia, industry, and
        regulatory bodies who share a commitment to advancing phytomedicine standards.
      </p>

      <h2>Board of Directors</h2>
      <div class="leaders-grid">
        <div class="leader-card glass" v-for="leader in boardMembers" :key="leader.name">
          <div class="leader-avatar">{{ leader.initials }}</div>
          <h3 class="leader-name">{{ leader.name }}</h3>
          <p class="leader-title">{{ leader.title }}</p>
          <p class="leader-org">{{ leader.organization }}</p>
        </div>
      </div>

      <h2>Executive Committee</h2>
      <div class="leaders-grid">
        <div class="leader-card glass" v-for="member in executiveCommittee" :key="member.name">
          <div class="leader-avatar">{{ member.initials }}</div>
          <h3 class="leader-name">{{ member.name }}</h3>
          <p class="leader-title">{{ member.title }}</p>
          <p class="leader-org">{{ member.organization }}</p>
        </div>
      </div>

      <h2>Working Group Chairs</h2>
      <p>
        Our working groups are led by experts in their respective fields, ensuring that
        each standards development area benefits from specialized knowledge and experience.
      </p>

      <div class="chairs-list">
        <div class="chair-item" v-for="chair in workingGroupChairs" :key="chair.group">
          <strong>{{ chair.group }}</strong>
          <span>{{ chair.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Leadership',
  description: 'Meet the leadership team of the International Society of Phytomedicine.',
  url: '/about/leadership'
})

const boardMembers = ref([
  { name: 'Dr. Elena Martinez', title: 'President', organization: 'University of Geneva', initials: 'EM' },
  { name: 'Prof. James Chen', title: 'Vice President', organization: 'Shanghai University of TCM', initials: 'JC' },
  { name: 'Dr. Yuki Tanaka', title: 'Secretary', organization: 'Tokyo University of Pharmacy', initials: 'YT' },
  { name: 'Dr. Hans Weber', title: 'Treasurer', organization: 'European Medicines Agency', initials: 'HW' }
])

const executiveCommittee = ref([
  { name: 'Dr. Amara Diallo', title: 'Director of Standards', organization: 'WHO Traditional Medicine', initials: 'AD' },
  { name: 'Prof. Sarah Johnson', title: 'Director of Research', organization: 'University of California', initials: 'SJ' },
  { name: 'Dr. Raj Patel', title: 'Director of Education', organization: 'Banaras Hindu University', initials: 'RP' },
  { name: 'Dr. Maria Santos', title: 'Director of Communications', organization: 'Brazilian Health Regulatory Agency', initials: 'MS' }
])

const workingGroupChairs = ref([
  { group: 'Terminology Working Group', name: 'Dr. Hans Weber' },
  { group: 'Taxonomy Working Group', name: 'Prof. Li Wei' },
  { group: 'Agricultural Practices Working Group', name: 'Dr. Sarah Johnson' },
  { group: 'Processing Standards Working Group', name: 'Dr. Klaus Schmidt' },
  { group: 'Clinical Applications Working Group', name: 'Dr. Elena Martinez' },
  { group: 'Regulatory Harmonization Working Group', name: 'Dr. Maria Santos' }
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

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.leader-card {
  padding: var(--spacing-lg);
  text-align: center;
}

.leader-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-text-inverse);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin: 0 auto var(--spacing-md);
}

.leader-name {
  font-family: var(--font-serif);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
}

.leader-title {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  margin: 0 0 var(--spacing-xs);
}

.leader-org {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.chairs-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.chair-item {
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-glass-dark);
  border-radius: var(--radius-md);
}

.chair-item strong {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .leaders-grid {
    grid-template-columns: 1fr;
  }

  .chair-item {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
}
</style>
