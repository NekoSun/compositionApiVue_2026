<template>
  <div>
    <div>
      <h3 class="mb-4">POST</h3>
    </div>
    <div>
      <div>
        <div class="bg-white border border-gray-200 p-4">
          <h3 class="mb-4 text-lg">{{ postStore.post.title }}</h3>
          <p class="text-sm">{{ postStore.post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { usePostStore } from '@/stores/post';

defineOptions({
  name: 'show'
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

const postStore = usePostStore()

onMounted(() => {
  postStore.getPost()
})


</script>

<style scoped></style>
