<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <img src="@/assets/images/sipm-logo.svg" alt="SIPM Logo" class="footer-logo-img" />
            <div class="footer-logo-text">
              <span class="footer-logo-name">SIPM</span>
              <span class="footer-logo-full">International Society of Phytomedicine</span>
            </div>
          </router-link>
          <p class="footer-tagline">
            Advancing phytomedicine through science, international collaboration,
            and commitment to public health.
          </p>
          <div class="footer-social">
            <a href="https://github.com/sipmorg" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Columns -->
        <div class="footer-nav">
          <h4 class="footer-heading">About</h4>
          <ul class="footer-links">
            <li><router-link to="/about/mission">Mission</router-link></li>
            <li><router-link to="/about/history">History</router-link></li>
            <li><router-link to="/about/leadership">Leadership</router-link></li>
            <li><router-link to="/about/partners">Partners</router-link></li>
          </ul>
        </div>

        <div class="footer-nav">
          <h4 class="footer-heading">Standards</h4>
          <ul class="footer-links">
            <li><a href="/standards/foundation/">Foundation</a></li>
            <li><a href="/standards/quality/">Quality</a></li>
            <li><a href="/standards/science/">Science</a></li>
            <li><a href="/standards/governance/">Governance</a></li>
          </ul>
        </div>

        <div class="footer-nav">
          <h4 class="footer-heading">Herbapedia</h4>
          <ul class="footer-links">
            <li><a href="/herbapedia/herbs/chinese-herbs">Chinese Herbs</a></li>
            <li><a href="/herbapedia/herbs/western-herbs">Western Herbs</a></li>
            <li><a href="/herbapedia/herbs/vitamins">Vitamins</a></li>
            <li><a href="/herbapedia/">Browse All</a></li>
          </ul>
        </div>

        <div class="footer-nav">
          <h4 class="footer-heading">Get Involved</h4>
          <ul class="footer-links">
            <li><router-link to="/members/benefits">Membership</router-link></li>
            <li><router-link to="/members/working-groups">Working Groups</router-link></li>
            <li><router-link to="/news">News</router-link></li>
            <li><a href="mailto:info@sipm.org">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} International Society of Phytomedicine. All rights reserved.
        </p>
        <div class="footer-legal">
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/terms">Terms of Use</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: var(--color-text-inverse);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  margin-bottom: var(--spacing-md);
}

.footer-logo-img {
  width: 48px;
  height: 48px;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
}

.footer-logo-name {
  font-family: var(--font-serif);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-inverse);
  line-height: 1.2;
}

.footer-logo-full {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.7);
}

.footer-tagline {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--color-text-inverse);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--color-accent);
  color: var(--color-text);
}

.footer-heading {
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-md);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--spacing-sm);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-copyright {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: var(--spacing-lg);
}

.footer-legal a {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--color-accent);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}
</style>
