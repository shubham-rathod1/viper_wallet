import { lazy } from 'react';

export const openRoutes = [
  {
    path: '/',
    exact: true,
    element: lazy(() => import('../container/home')),
  },
  {
    path: '/deposit',
    exact: false,
    element: lazy(() => import('../components/deposit')),
  },
  {
    path: '/send',
    exact: true,
    element: lazy(() => import('../components/send')),
  },
  {
    path: '/recent',
    exact: false,
    element: lazy(() => import('../container/recent')),
  },
  {
    path: '/settings',
    exact: false,
    element: lazy(() => import('../container/settings')),
  },
  {
    path: '/wallet',
    exact: false,
    element: lazy(() => import('../components/walletMenu')),
  },
  {
    path: '/network',
    exact: false,
    element: lazy(() => import('../components/network')),
  },
  {
    path: '/confirm',
    exact: false,
    element: lazy(() => import('../components/send/confirm')),
  },
];
