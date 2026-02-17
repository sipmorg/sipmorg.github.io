<template>
  <div class="content-page">
    <h1 class="page-title">Privacy Policy</h1>

    <div class="content-body">
      <p class="lead">
        Last updated: February 2026
      </p>

      <h2>Introduction</h2>
      <p>
        The International Society of Phytomedicine (SIPM) is committed to protecting
        your privacy. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website or engage with
        our services.
      </p>

      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <p>We may collect personal information that you voluntarily provide, including:</p>
      <ul>
        <li>Name and contact information (email address, postal address, phone number)</li>
        <li>Professional affiliations and credentials</li>
        <li>Membership application details</li>
        <li>Communications you send to us</li>
        <li>Payment information for membership fees (processed securely by third-party providers)</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our website, we may automatically collect certain information,
        including:
      </p>
      <ul>
        <li>IP address and geographic location</li>
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website addresses</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and manage your membership</li>
        <li>Communicate with you about standards development, events, and news</li>
        <li>Provide access to standards and member resources</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
        <li>Protect against fraudulent or unauthorized activity</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties.
        We may share your information in the following circumstances:
      </p>
      <ul>
        <li><strong>Service Providers:</strong> With vendors who assist us in operating our website and providing services</li>
        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
      </ul>

      <h2>Member Directory</h2>
      <p>
        Members may choose to be listed in our public member directory. Participation
        is optional, and you may opt out at any time by contacting us at
        <a href="mailto:membership@sipm.org">membership@sipm.org</a>.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect
        your personal information. However, no method of transmission over the
        Internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Request data portability</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>
        To exercise these rights, please contact us at
        <a href="mailto:privacy@sipm.org">privacy@sipm.org</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website uses cookies to enhance your browsing experience. You can
        control cookie preferences through your browser settings. Disabling cookies
        may affect some website functionality.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible
        for the privacy practices of these external sites. We encourage you to read
        their privacy policies.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under 18 years of age. We do
        not knowingly collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of
        significant changes by posting the new policy on this page and updating the
        "Last updated" date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us:
      </p>
      <ul>
        <li>Email: <a href="mailto:privacy@sipm.org">privacy@sipm.org</a></li>
        <li>Address: International Society of Phytomedicine</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Privacy Policy',
  description: 'SIPM Privacy Policy - How we collect, use, and protect your personal information.',
  url: '/privacy'
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
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}

.lead {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
}

.content-body ul {
  margin: var(--spacing-md) 0;
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
