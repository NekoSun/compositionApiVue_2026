<template>
  <div>
    <div>
      <h3>POSTS</h3>
    </div>
    <div>
      <table class="w-full border border-gray-200">
        <thead>
          <tr>
            <th class="bg-white border-b border-gray-200rey text-left p-2">ID</th>
            <th class="bg-white border-b border-gray-200rey text-left p-2">TITLE</th>
            <th class="bg-white border-b border-gray-200rey text-left p-2">CONTENT</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in postStore.posts">
            <td class="bg-white border-b border-gray-200rey text-left p-2">{{ post.id }}</td>
            <td class="bg-white border-b border-gray-200rey text-left p-2">
              <RouterLink :to="{ name: 'admin.posts.show', params: { id: post.id } }">{{ post.title }}</RouterLink>
            </td>
            <td class="bg-white border-b border-gray-200rey text-left p-2">{{ post.content }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { usePostStore } from '@/stores/post';

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

onMounted(() => {
  postStore.getPosts()
})

const postStore = usePostStore()

</script>

<style scoped></style>
