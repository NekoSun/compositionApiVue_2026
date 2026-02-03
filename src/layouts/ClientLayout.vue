<template>
    <section class="bg-white p-4">
        <header>
            CLIENT PANEL
        </header>
    </section>
    <section class="flex">
        <article class="bg-gray-50 w-3/4 p-4"><slot /></article>
    </section>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ClientLayout'
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
