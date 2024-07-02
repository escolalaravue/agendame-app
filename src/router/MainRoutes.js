import { auth } from '@/router/guards';

export default [
  {
    path: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    beforeEnter: auth,
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        name: 'teams',
        path: '/times',
        component: () => import('@/views/teams/index.vue')
      },
      {
        name: 'plans',
        path: '/planos',
        component: () => import('@/views/plans/index.vue')
      },
      {
        name: 'agenda',
        path: '/agenda',
        component: () => import('@/views/agenda/index.vue')
      },
      {
        name: 'clients',
        path: '/clientes',
        component: () => import('@/views/clients/index.vue')
      },
    ]
  },
  {
    path: '/stripe',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
      {
        name: 'stripeError',
        path: 'erro',
        component: () => import('@/views/stripe/error.vue'),
      },
      {
        name: 'stripeSuccess',
        path: 'sucesso',
        component: () => import('@/views/stripe/success.vue'),
      }
    ]
  }
];
