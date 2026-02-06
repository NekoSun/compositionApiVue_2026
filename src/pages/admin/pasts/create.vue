<template>
  <div class="mb4 bg-white border border-gray-200 p-4">
    <div class="md-4">
      <input
        v-model="postStore.post.title"
        type="text"
        class="border border-gray-200 p-4 w-full"
        placeholder="title"
      >
    </div>
    <div class="md-4">
      <textarea
        v-model="postStore.post.content"
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
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'Crete'
})

const router = useRouter();

onMounted(() =>{
  postStore.post = {};
})

const postStore = usePostStore()

const storePost = async function() {
    await postStore.storePost();
    
    if (postStore.isLoading) {
      router.push({name: 'admin.posts.index'})
    }
}

</script>

<style scoped lang="scss"></style>