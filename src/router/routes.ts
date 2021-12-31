import { RouteRecordRaw } from "vue-router"
import Layout from '@/views/Layout.vue'
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/Users.vue')
      },
      {
        path: '/resource',
        name: 'Resource',
        component: () => import('@/views/Resource.vue'),
        children: [
          {
            path: '/resource/article',
            name: 'Article',
            component: () => import('@/views/Article.vue')
          },
          {
            path: '/resource/category',
            name: 'Category',
            component: () => import('@/views/Category.vue')
          }
        ]
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes