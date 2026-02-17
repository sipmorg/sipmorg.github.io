<template>
  <div class="content-page">
    <h1 class="page-title">Membership Benefits</h1>

    <div class="content-body">
      <p class="lead">
        Join SIPM and become part of the global community advancing phytomedicine standards.
        Our members enjoy exclusive access to resources, networking opportunities, and the
        chance to shape the future of plant-based medicine.
      </p>

      <div class="tiers-grid">
        <div class="tier-card glass">
          <h2 class="tier-name">Individual Member</h2>
          <div class="tier-price">$500<span>/year</span></div>
          <ul class="tier-features">
            <li>Access to all published standards (PDF)</li>
            <li>Participate in standards development</li>
            <li>Discounts on conferences and events</li>
            <li>Voting rights at general assemblies</li>
            <li>Member directory access</li>
            <li>Quarterly newsletter</li>
            <li>Networking opportunities</li>
          </ul>
          <GradientButton variant="gold" class="tier-cta">Join Now</GradientButton>
        </div>

        <div class="tier-card glass tier-card--featured">
          <div class="tier-badge">Most Popular</div>
          <h2 class="tier-name">Corporate / Government Member</h2>
          <div class="tier-price">$5,000<span>/year</span></div>
          <ul class="tier-features">
            <li>All individual member benefits</li>
            <li>Participate in standards development</li>
            <li>Eligible for positions of leadership</li>
            <li>Early access to draft standards</li>
            <li>Company logo on partners page</li>
            <li>Exclusive networking events</li>
            <li>Multiple member seats</li>
          </ul>
          <GradientButton variant="gold" class="tier-cta">Apply Now</GradientButton>
        </div>

        <div class="tier-card glass tier-card--premium">
          <div class="tier-badge tier-badge--gold">Steering Committee</div>
          <h2 class="tier-name">Steering Committee Member</h2>
          <div class="tier-price">$20,000<span>/year</span></div>
          <ul class="tier-features">
            <li>All corporate member benefits</li>
            <li>Seat at the Steering Committee</li>
            <li>Voting rights on standards</li>
            <li>Strategic direction influence</li>
            <li>Priority in working group leadership</li>
            <li>Dedicated account manager</li>
            <li>Custom research collaboration</li>
          </ul>
          <GradientButton variant="outline" class="tier-cta">Contact Us</GradientButton>
        </div>
      </div>

      <h2>How to Join</h2>
      <ol>
        <li><strong>Choose your membership tier</strong> - Select the level that best fits your needs and organization.</li>
        <li><strong>Complete the application</strong> - Fill out our online application form with your details.</li>
        <li><strong>Payment</strong> - Submit your membership fee securely online.</li>
        <li><strong>Welcome</strong> - Receive your member credentials and start enjoying benefits immediately.</li>
      </ol>

      <p>
        For membership inquiries, please contact us at
        <a href="mailto:membership@sipm.org">membership@sipm.org</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import GradientButton from '@/components/ui/GradientButton.vue'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Membership Benefits',
  description: 'Join SIPM and enjoy exclusive access to standards, networking, and professional development opportunities.',
  url: '/members/benefits'
})
</script>

<style scoped>
.content-page {
  max-width: 900px;
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

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.tier-card {
  padding: var(--spacing-xl);
  text-align: center;
  position: relative;
}

.tier-card--featured {
  border: 2px solid var(--color-accent);
}

.tier-card--premium {
  border: 2px solid var(--color-secondary);
}

.tier-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent);
  color: var(--color-text);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
}

.tier-badge--gold {
  background: var(--color-secondary);
  color: var(--color-text-inverse);
}

.tier-name {
  font-family: var(--font-serif);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: var(--spacing-md) 0 var(--spacing-md);
}

.tier-price {
  font-family: var(--font-serif);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);
}

.tier-price span {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  color: var(--color-text-light);
}

.tier-features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-xl);
  text-align: left;
}

.tier-features li {
  padding: var(--spacing-sm) 0;
  font-size: var(--font-size-sm);
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}

.tier-features li:last-child {
  border-bottom: none;
}

.tier-cta {
  width: 100%;
}

.content-body ol {
  margin: var(--spacing-lg) 0;
  padding-left: var(--spacing-xl);
}

.content-body li {
  margin-bottom: var(--spacing-md);
}

.content-body a {
  color: var(--color-primary);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .tiers-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
