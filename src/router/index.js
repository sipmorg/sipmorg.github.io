/**
 * Vue Router Configuration
 *
 * Route definitions for SSG with vite-ssg
 * Structure: About, Standards, News, Members
 */

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },

  // About section
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    children: [
      {
        path: '',
        name: 'about-index',
        redirect: '/about/mission'
      },
      {
        path: 'mission',
        name: 'mission',
        component: () => import('@/views/about/MissionView.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/about/HistoryView.vue')
      },
      {
        path: 'leadership',
        name: 'leadership',
        component: () => import('@/views/about/LeadershipView.vue')
      },
      {
        path: 'partners',
        name: 'partners',
        component: () => import('@/views/about/PartnersView.vue')
      }
    ]
  },

  // Standards section
  {
    path: '/standards',
    name: 'standards',
    component: () => import('@/views/StandardsView.vue'),
    children: [
      {
        path: '',
        name: 'standards-index',
        redirect: '/standards/foundation'
      },
      {
        path: 'foundation',
        name: 'foundation',
        component: () => import('@/views/standards/FoundationView.vue')
      },
      {
        path: 'quality',
        name: 'quality',
        component: () => import('@/views/standards/QualityView.vue')
      },
      {
        path: 'science',
        name: 'science',
        component: () => import('@/views/standards/ScienceView.vue')
      },
      {
        path: 'governance',
        name: 'governance',
        component: () => import('@/views/standards/GovernanceView.vue')
      }
    ]
  },

  // Individual standard pages (AsciiDoc rendering)
  {
    path: '/standards/:id',
    name: 'standard-view',
    component: () => import('@/views/standards/StandardView.vue')
  },

  // News section
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue')
  },
  {
    path: '/news/:slug',
    name: 'news-article',
    component: () => import('@/views/news/ArticleView.vue')
  },

  // Members section
  {
    path: '/members',
    name: 'members',
    component: () => import('@/views/MembersView.vue'),
    children: [
      {
        path: '',
        name: 'members-index',
        redirect: '/members/benefits'
      },
      {
        path: 'benefits',
        name: 'benefits',
        component: () => import('@/views/members/BenefitsView.vue')
      },
      {
        path: 'working-groups',
        name: 'working-groups',
        component: () => import('@/views/members/WorkingGroupsView.vue')
      },
      {
        path: 'directory',
        name: 'directory',
        component: () => import('@/views/members/DirectoryView.vue')
      }
    ]
  },

  // Legal pages
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/TermsView.vue')
  },

  // 404 - must be last
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]

export default routes
