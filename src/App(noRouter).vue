<template>
  <div
    v-if="isModalOpen"
    @click="isModalOpen = false"
    class="modal-shadow"
  >
    <div
      @click.stop
      class="modal bg-white border border-gray-200 p-4"
    >
      <div class="mb-4"><input
          v-model="editedPost.title"
          type="text"
          placeholder="title"
          class="p-4 border border-gray-200 w-full"
        ></div>
      <div class="mb-4">
        <textarea
          v-model="editedPost.content"
          placeholder="textarea"
          class="p-4 border border-gray-200 w-full"
        ></textarea>
      </div>
      <div>
        <a
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
          @click.prevent="updatePost"
        >Update Post</a>
      </div>
    </div>
  </div>
  <div class="w-1/2 mx-auto p-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4"><input
          v-model="post.title"
          type="text"
          placeholder="title"
          class="p-4 border border-gray-200 w-full"
        ></div>
      <div class="mb-4">
        <textarea
          v-model="post.content"
          placeholder="textarea"
          class="p-4 border border-gray-200 w-full"
        ></textarea>
      </div>
      <div
        v-if="errors.length > 0"
        class="mb4"
      >
        <div
          v-for="error in errors"
          class="text-red-600"
        >
          {{ error }}
        </div>
      </div>
      <div>
        <a
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
          @click.prevent="storePost"
        >Store Post</a>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 mr-4">
        <h3 class="mb-4">Posts</h3>        
        <PostItem
          @delete-post="deletePost"
          @edit-post="editPost"
          v-for="post in posts"
          :post="post"
        />
      </div>
      <div class="w-1/2 mr-4">
        <h3 class="mb-4">Favored Posts</h3>        
        <PostItem
          @delete-post="deletePost"
          @edit-post="editPost"
          v-for="post in favoredPosts"
          :post="post"
        />
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from 'vue';
import PostItem from '@/components/post/PostItem.vue'

interface Post {
  title: string
  content: string
  isFavored?: boolean
}

interface EditedPost {
  title: string
  content: string
  index: number
}


/* 
* options
* hook
* data
* computed
* provide/inject
* method
* watch
*/

onBeforeMount(() => {
  console.log('2222222222222222222');
  
})

onMounted(() => {
  console.log('111111111111111111111111');
  
})

const posts = ref<Post[]>([]);
const isModalOpen = ref<boolean>(false);
const errors = ref<string[]>([]);

const post = reactive<Post>({
  title: '',
  content: '',
  isFavored: false
});

const favoredPosts = computed(() => posts.value.filter(postItem => postItem.isFavored === true))

const editedPost = reactive<EditedPost>({
  title: '',
  content: '',
  index: 0
});


const storePost = function () {
  if (isNotValidated()) return;

  posts.value.unshift({
    title: post.title,
    content: post.content
  });

  Object.assign(post, {
    title: '',
    content: ''
  })
}

const updatePost = function () {
  Object.assign(posts.value[editedPost.index]!, {
    title: editedPost.title,
    content: editedPost.content
  })
  isModalOpen.value = false;
}

const editPost = function (post: Post) {
  isModalOpen.value = true;
  Object.assign(editedPost, {
    index: posts.value.indexOf(post),
    title: post.title,
    content: post.content
  })

}

const deletePost = function (post: Post) {
  posts.value = posts.value.filter(postItem => postItem !== post);
}

const isNotValidated = function () {
  errors.value = [];

  if (post.title === '') errors.value.push('The title field is required');
  if (post.content === '') errors.value.push('The content field is required');
  return errors.value.length > 0;
}

watch(post, () => {
  errors.value = [];
})

</script>

<style scoped>
.modal-shadow {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 50%;
}
</style>
