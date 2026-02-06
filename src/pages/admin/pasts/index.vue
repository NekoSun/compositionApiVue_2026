<template>
  <div>
    <div>
      <h3 class="mb-4">POSTS</h3>
    </div>
    <div class="md-4">
      <RouterLink
        class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
        :to="{ name: 'admin.posts.create' }"
      >CREATE POST</RouterLink>
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
              <td class="bg-white border-b border-gray-200rey text-left p-2">
                <div class="flex justify-around">
                  <RouterLink :to="{name: 'admin.posts.edit', params: {id: post.id}}">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4 cursor-pointer stroke-emerald-600"
                    >
                      <path
                        d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </RouterLink>
                  <RouterLink>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 cursor-pointer stroke-red-600"
                    >
                      <path
                        d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </RouterLink>
                </div>
              </td>
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
