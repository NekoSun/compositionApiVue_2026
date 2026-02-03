<template>
  <div>
    <div>
      <AdminLayout>
        <RouterView />
      </AdminLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import { ref } from 'vue'
import {useRoute, useRouter} from 'vue-router'
defineOptions({
  name: 'App'
})

const router = useRouter()
const route = useRoute()
const isAdmin = ref<boolean>(false)

router.isReady().then(() => {
  const routeName = route.name
  if (routeName && typeof routeName === 'string') {
    isAdmin.value = routeName.split('.')[0] === 'admin'
  }
})


</script>

<style scoped></style>
