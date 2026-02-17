<template>
  <div class="content-page">
    <h1 class="page-title">Collaboration & Liaison</h1>

    <div class="content-body">
      <p class="lead">
        SIPM is committed to collaborative engagement with other standards bodies,
        regulatory agencies, research institutions, and organizations working to
        advance phytomedicine and plant-based healthcare worldwide.
      </p>

      <h2>Our Collaborative Approach</h2>
      <p>
        The development of effective phytomedicine standards requires input from
        diverse stakeholders and benefits from coordination with other organizations
        working in related fields. SIPM recognizes that our mission is best achieved
        through cooperation, not competition, with other entities sharing similar goals.
      </p>
      <p>
        We are responsive to other standards bodies, regulatory agencies, academic
        institutions, and professional organizations that wish to work on phytomedicine
        standards or related areas. Our door is open to meaningful collaboration that
        advances the field and serves public health.
      </p>

      <h2>Liaison Relationships</h2>
      <p>
        SIPM welcomes the establishment of formal liaison relationships with other
        organizations. These relationships facilitate:
      </p>
      <ul>
        <li><strong>Information Exchange:</strong> Sharing of knowledge, research findings, and best practices between organizations.</li>
        <li><strong>Standards Harmonization:</strong> Coordinating standards development to avoid duplication and ensure consistency.</li>
        <li><strong>Joint Projects:</strong> Collaborating on specific initiatives that benefit from combined expertise.</li>
        <li><strong>Mutual Representation:</strong> Participation in each other's meetings and working groups as appropriate.</li>
      </ul>

      <h2>Types of Collaboration</h2>
      <p>
        We are open to various forms of collaboration, including but not limited to:
      </p>
      <ul>
        <li>Formal liaison agreements with standards development organizations</li>
        <li>Memoranda of understanding with regulatory agencies</li>
        <li>Research partnerships with academic institutions</li>
        <li>Joint working groups on topics of mutual interest</li>
        <li>Participation in each other's consultation processes</li>
        <li>Co-hosting of conferences, workshops, and educational events</li>
      </ul>

      <h2>Initiating Collaboration</h2>
      <p>
        Organizations interested in exploring collaboration or establishing a liaison
        relationship with SIPM are encouraged to contact us. We are happy to discuss
        how we might work together to advance phytomedicine standards and serve
        public health objectives.
      </p>

      <div class="contact-cta glass">
        <h3>Get in Touch</h3>
        <p>
          To discuss collaboration opportunities or liaison relationships, please contact:
        </p>
        <p class="contact-email">
          <a href="mailto:liaison@sipm.org">liaison@sipm.org</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Collaboration & Liaison',
  description: 'Learn about collaboration opportunities and liaison relationships with the International Society of Phytomedicine.',
  url: '/about/partners'
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

.contact-cta {
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-xl);
  text-align: center;
}

.contact-cta h3 {
  font-family: var(--font-serif);
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-sm);
}

.contact-cta p {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
}

.contact-email {
  margin: 0;
}

.contact-email a {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
}

.contact-email a:hover {
  color: var(--color-accent-dark);
}
</style>
