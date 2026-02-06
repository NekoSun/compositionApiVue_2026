<template>
  <div class="mb4 bg-white border border-gray-200 p-4">
    <div class="md-4">
      <input
        v-model="post.title"
        type="text"
        class="border border-gray-200 p-4 w-full"
        placeholder="title"
      >
    </div>
    <div class="md-4">
      <textarea
        v-model="post.content"
        class="border border-gray-200 p-4 w-full"
        placeholder="content"
      ></textarea>
    </div>
    <div class="md-4">
      <a
        @click.prevent="storePost"
        href="#"
        class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
      >STORE POST</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import type { Post } from '@/types/Post';

defineOptions({
  name: 'Crete'
})

const post: Post = reactive({
  id: '',
  title: '',
  content: ''
});

const storePost = function () {
  fetch('http://localhost:3000/posts', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...post }),
  },)
    .then((res) => {
      console.log(res);

    })
};
</script>

<style scoped lang="scss"></style>