<template>
<div>
  <div><h3>POSTS</h3></div>
  <div>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.content }}</td>
            <td>{{ post.actions }}</td>
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

const getPosts = function() {
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

<style scoped>
</style>
