<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-container container">
      <!-- Logo -->
      <router-link to="/" class="header-logo">
        <img src="@/assets/images/sipm-logo.svg" alt="SIPM Logo" class="logo-img" />
        <div class="logo-text">
          <span class="logo-name">SIPM</span>
          <span class="logo-full">International Society of Phytomedicine</span>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="header-nav" :class="{ 'nav-open': mobileNavOpen }">
        <router-link to="/" class="nav-link" @click="closeMobileNav">Home</router-link>

        <div class="nav-dropdown">
          <router-link to="/about" class="nav-link nav-dropdown-trigger">
            About
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </router-link>
          <div class="dropdown-menu">
            <router-link to="/about/mission" class="dropdown-link" @click="closeMobileNav">Mission</router-link>
            <router-link to="/about/history" class="dropdown-link" @click="closeMobileNav">History</router-link>
            <router-link to="/about/leadership" class="dropdown-link" @click="closeMobileNav">Leadership</router-link>
            <router-link to="/about/partners" class="dropdown-link" @click="closeMobileNav">Partners</router-link>
          </div>
        </div>

        <div class="nav-dropdown">
          <a href="/standards/" class="nav-link nav-dropdown-trigger">
            Standards
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </a>
          <div class="dropdown-menu">
            <a href="/standards/foundation/" class="dropdown-link" @click="closeMobileNav">Foundation</a>
            <a href="/standards/quality/" class="dropdown-link" @click="closeMobileNav">Quality</a>
            <a href="/standards/science/" class="dropdown-link" @click="closeMobileNav">Science</a>
            <a href="/standards/governance/" class="dropdown-link" @click="closeMobileNav">Governance</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <a href="/herbapedia/" class="nav-link nav-dropdown-trigger">
            Herbapedia
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </a>
          <div class="dropdown-menu">
            <a href="/herbapedia/herbs/chinese-herbs" class="dropdown-link" @click="closeMobileNav">Chinese Herbs</a>
            <a href="/herbapedia/herbs/western-herbs" class="dropdown-link" @click="closeMobileNav">Western Herbs</a>
            <a href="/herbapedia/herbs/vitamins" class="dropdown-link" @click="closeMobileNav">Vitamins</a>
            <a href="/herbapedia/herbs/minerals" class="dropdown-link" @click="closeMobileNav">Minerals</a>
            <a href="/herbapedia/herbs/nutrients" class="dropdown-link" @click="closeMobileNav">Nutrients</a>
          </div>
        </div>

        <router-link to="/news" class="nav-link" @click="closeMobileNav">News</router-link>

        <div class="nav-dropdown">
          <router-link to="/members" class="nav-link nav-dropdown-trigger">
            Members
            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </router-link>
          <div class="dropdown-menu">
            <router-link to="/members/benefits" class="dropdown-link" @click="closeMobileNav">Benefits</router-link>
            <router-link to="/members/working-groups" class="dropdown-link" @click="closeMobileNav">Working Groups</router-link>
            <router-link to="/members/directory" class="dropdown-link" @click="closeMobileNav">Directory</router-link>
          </div>
        </div>
      </nav>

      <!-- CTA Button -->
      <router-link to="/members/benefits" class="header-cta">
        Join SIPM
      </router-link>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="toggleMobileNav" :aria-expanded="mobileNavOpen">
        <span class="hamburger" :class="{ 'hamburger-open': mobileNavOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileNavOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}

const closeMobileNav = () => {
  mobileNavOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 100;
  transition: all var(--transition-normal);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
}

.logo-img {
  width: 48px;
  height: 48px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-family: var(--font-serif);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1.2;
}

.logo-full {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  letter-spacing: 0.02em;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  text-decoration: none;
  padding: var(--spacing-sm) 0;
  position: relative;
  transition: color var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-fast);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.dropdown-arrow {
  transition: transform var(--transition-fast);
}

.nav-dropdown {
  position: relative;
}

.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-sm);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all var(--transition-fast);
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.dropdown-link:hover {
  background: var(--color-glass-dark);
  color: var(--color-primary);
}

.header-cta {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-inverse);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.header-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.mobile-toggle {
  display: none;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: all var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  transition: all var(--transition-fast);
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger-open {
  background: transparent;
}

.hamburger-open::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger-open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

@media (max-width: 1024px) {
  .header-cta {
    display: none;
  }

  .mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: stretch;
    padding: var(--spacing-xl);
    gap: 0;
    transform: translateX(100%);
    transition: transform var(--transition-normal);
  }

  .nav-open {
    transform: translateX(0);
  }

  .nav-link {
    font-size: var(--font-size-lg);
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid var(--color-border);
  }

  .nav-dropdown {
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    padding-left: var(--spacing-lg);
    background: transparent;
  }

  .dropdown-link {
    padding: var(--spacing-sm) 0;
  }
}

@media (max-width: 640px) {
  .logo-full {
    display: none;
  }
}
</style>
