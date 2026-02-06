import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/dashboard',
            component: () => import('@/pages/admin/dashboard/index.vue'),
            name: 'admin.dashboard.index'
        },
        {
            path: '/admin/posts',
            component: () => import('@/pages/admin/pasts/index.vue'),
            name: 'admin.posts.index'

        },
        {
            path: '/admin/posts/create',
            component: () => import('@/pages/admin/pasts/create.vue'),
            name: 'admin.posts.create'

        },
        {
            path: '/admin/posts/:id',
            component: () => import('@/pages/admin/pasts/show.vue'),
            name: 'admin.posts.show'

        },
        {
            path: '/admin/posts/:id/edit',
            component: () => import('@/pages/admin/pasts/edit.vue'),
            name: 'admin.posts.edit'

        },
        {
            path: '/dashboard',
            component: () => import('@/pages/dashboard/index.vue'),
            name: 'posts.index'
        },
        {
            path: '/posts',
            component: () => import('@/pages/pasts/index.vue'),
            name: 'posts.index'
        }
    ]
})

export default router;