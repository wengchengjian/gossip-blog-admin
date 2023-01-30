import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layouts/index.vue')

const routes: RouteRecordRaw = {
  path: '/jsx_example',
  component: Layout,
  redirect: '/jsx_example/index',
  name: 'jsxExample',
  meta: {
    title: 'JSX',
    icon: 'sidebar-jsx',
  },
  children: [
    {
      path: 'index',
      name: 'jsxExampleIndex',
      component: () => import('@/views/jsx_example/index.jsx'),
      meta: {
        title: 'JSX',
        sidebar: false,
        breadcrumb: false,
        activeMenu: '/jsx_example',
      },
    },
  ],
}

export default routes
