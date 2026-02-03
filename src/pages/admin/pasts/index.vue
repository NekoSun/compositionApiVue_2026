<template>
  <div>
    <div>
      <h3 class="mb-4">POSTS</h3>
    </div>
    <div class="md-4">
      <RouterLink class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white" :to="{name: 'admin.posts.create'}">CREATE POST</RouterLink>
    </div>
    <div>
      <div>
        <table class="w-full border border-gray-200">
          <thead>
            <tr>
              <th class="bg-white border-b border-gray-200rey text-left p-2">ID</th>
              <th class="bg-white border-b border-gray-200rey text-left p-2">TITLE</th>
              <th class="bg-white border-b border-gray-200rey text-left p-2">CONTENT</th>
              <th class="bg-white border-b border-gray-200rey text-left p-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts">
              <td class="bg-white border-b border-gray-200rey text-left p-2">{{ post.id }}</td>
              <td class="bg-white border-b border-gray-200rey text-left p-2">
                <RouterLink :to="{ name: 'admin.posts.show', params: { id: post.id } }">{{ post.title }}</RouterLink>
              </td>
              <td class="bg-white border-b border-gray-200rey text-left p-2">{{ post.content }}</td>
              <td class="bg-white border-b border-gray-200rey text-left p-2">{{ post.actions }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Post {
  id: number
  title: string
  content: string
  actions?: string
}

defineOptions({
  name: 'pasts'
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
const posts = ref<Post[]>([])

onMounted(() => {
  getPosts()
})

const getPosts = function () {
  fetch('http://localhost:3000/posts', {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => {
      return res.json()
    })
    .then((data) => {
      posts.value = data
    })
    .catch()
    .finally()
}
</script>

<style scoped></style>
