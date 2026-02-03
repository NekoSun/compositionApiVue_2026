<template>
  <div>
    <div>
      <h3 class="mb-4">POSTS</h3>
    </div>
    <div>
      <div>
        <div class="bg-white border border-gray-200 p-4">
          <h3 class="mb-4 text-lg">{{ post.title }}</h3>
          <p class="text-sm">{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

interface Post {
  id: number | null
  title: string
  content: string
  actions?: string
}

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
</script>

<style scoped></style>
