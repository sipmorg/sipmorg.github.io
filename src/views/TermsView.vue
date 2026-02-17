<template>
  <div class="content-page">
    <h1 class="page-title">Terms of Use</h1>

    <div class="content-body">
      <p class="lead">
        Last updated: February 2026
      </p>

      <h2>Agreement to Terms</h2>
      <p>
        By accessing or using the International Society of Phytomedicine (SIPM)
        website and services, you agree to be bound by these Terms of Use. If you
        do not agree to these terms, please do not use our website or services.
      </p>

      <h2>Description of Services</h2>
      <p>
        SIPM provides standards development, publication, and related services
        for the phytomedicine community. Our services include access to standards
        documents, membership programs, working group participation, and
        educational resources.
      </p>

      <h2>User Accounts</h2>
      <h3>Registration</h3>
      <p>
        To access certain features, you may need to create an account or become
        a member. You agree to provide accurate, current, and complete information
        during registration and to update such information as necessary.
      </p>

      <h3>Account Security</h3>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account. You agree
        to notify us immediately of any unauthorized use of your account.
      </p>

      <h3>Account Termination</h3>
      <p>
        We reserve the right to suspend or terminate your account if you violate
        these Terms of Use or for any other reason at our discretion.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use our services for any unlawful purpose</li>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on the intellectual property rights of others</li>
        <li>Transmit viruses, malware, or other harmful code</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with the operation of our services</li>
        <li>Harass, abuse, or harm other users</li>
        <li>Use automated systems to access our services without permission</li>
      </ul>

      <h2>Intellectual Property</h2>
      <h3>SIPM Content</h3>
      <p>
        All content on this website, including text, graphics, logos, and software,
        is the property of SIPM or its content suppliers and is protected by
        intellectual property laws.
      </p>

      <h3>Standards Documents</h3>
      <p>
        SIPM standards are published under the Creative Commons Attribution 4.0
        International License (CC BY 4.0), unless otherwise specified. You may:
      </p>
      <ul>
        <li>Share and adapt the material for any purpose</li>
        <li>Use the material commercially</li>
      </ul>
      <p>
        Provided you give appropriate credit to SIPM, provide a link to the license,
        and indicate if changes were made.
      </p>

      <h3>User Submissions</h3>
      <p>
        By submitting content to SIPM (such as comments on draft standards), you
        grant SIPM a non-exclusive, royalty-free, worldwide license to use,
        reproduce, and distribute such content for standards development purposes.
      </p>

      <h2>Membership</h2>
      <h3>Membership Fees</h3>
      <p>
        Membership fees are due annually and are non-refundable except as required
        by law. We reserve the right to change membership fees with reasonable
        notice.
      </p>

      <h3>Membership Benefits</h3>
      <p>
        Membership benefits are subject to the terms of your membership tier.
        Benefits may be modified or discontinued with reasonable notice.
      </p>

      <h2>Working Groups</h2>
      <p>
        Participation in SIPM working groups is subject to additional terms and
        procedures established by SIPM. Working group participants agree to:
      </p>
      <ul>
        <li>Contribute in good faith to standards development</li>
        <li>Disclose any conflicts of interest</li>
        <li>Maintain confidentiality of draft documents until publication</li>
        <li>Follow SIPM's consensus-based decision-making process</li>
      </ul>

      <h2>Disclaimer of Warranties</h2>
      <p>
        OUR SERVICES AND CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT.
      </p>
      <p>
        SIPM DOES NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
        OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIPM SHALL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
        LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR
        ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless SIPM, its officers, directors,
        employees, and agents from any claims, damages, losses, or expenses
        arising from your use of our services or violation of these Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Use shall be governed by and construed in accordance with
        the laws of the State of Delaware, United States, without regard to its
        conflict of law provisions.
      </p>

      <h2>Dispute Resolution</h2>
      <p>
        Any disputes arising from these Terms of Use shall be resolved through
        binding arbitration in accordance with the rules of the American Arbitration
        Association. The arbitration shall take place in Wilmington, Delaware.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may modify these Terms of Use at any time. We will notify users of
        material changes by posting the updated terms on this page. Your continued
        use of our services after changes become effective constitutes acceptance
        of the new terms.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision of these Terms of Use is found to be unenforceable, the
        remaining provisions shall continue in full force and effect.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about these Terms of Use, please contact us:
      </p>
      <ul>
        <li>Email: <a href="mailto:legal@sipm.org">legal@sipm.org</a></li>
        <li>Address: International Society of Phytomedicine</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Terms of Use',
  description: 'SIPM Terms of Use - Terms and conditions for using our website and services.',
  url: '/terms'
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
