<template>
    <section class="bg-white p-4">
        <header>
            ADMIN PANEL
        </header>
    </section>
    <section class="flex">
        <asida class="bg-gray-700 w-1/4 min-h-screen">
            <RouterLink :to="{name: 'admin.dashboard.index'}" class="block text-gray-200 p-4 border-gray-500">DASHBOARD</RouterLink>
            <RouterLink :to="{name: 'admin.posts.index'}" class="block text-gray-200 p-4 border-gray-500">POSTS</RouterLink>
        </asida>
        <article class="bg-gray-50 w-3/4 p-4"><slot /></article>
    </section>
</template>

<script setup lang="ts">
defineOptions({
    name: 'AdminLayout'
})
/* 
* options
* hook
* data
* computed
* provide/inject
* method
* watch
*/
 

</script>

<style scoped></style>
