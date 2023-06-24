<template>
<!--  base-header-container-->
  <div class="container max-w-full w-screen h-14 mx-auto fixed z-10 top-0 left-1/2 -translate-x-1/2 px-5 flex align-center justify-between bg-white shadow-lg">
    <div class="text-center cursor-pointer" @click="handleToHome">图标</div>
    <div>
      <slot name="default"></slot>
    </div>
    <div class="flex align-center cursor-pointer">
      <div>登录/注册</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
const router = useRouter()
const searchStore = useSearchStore()

function handleToHome() {
  searchStore.keyword = ''
  router.replace('/')
}
</script>