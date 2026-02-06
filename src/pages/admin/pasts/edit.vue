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
        @click.prevent="updatePost"
        href="#"
        class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
      >UPDATE POST</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

interface Post {
  id: number | null
  title: string
  content: string
};

defineOptions({
  name: 'Edit'
})

onMounted(() => {
  getPost()
})

const post = reactive<Post>({
  id: null,
  title: '',
  content: ''
})

const route = useRoute();

const getPost = function () {
  fetch(`http://localhost:3000/posts/${route.params.id}`, {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => {
      return res.json()
    })
    .then((data) => {
      Object.assign(post, data);
    })
    .catch()
    .finally()
}

const updatePost = function () {
  fetch(`http://localhost:3000/posts/${route.params.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...post }),
  })
  .catch(error => {
    console.error(error)
  })
}
</script>

<style scoped lang="scss"></style>