<template>
  <div class="base-header-container">
    <div class="icon-container" @click="handleToHome">图标</div>
    <div class="base-header-center-container">
      <slot name="default"></slot>
    </div>
    <div class="action-container">
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

<style lang="less" scoped>
.base-header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  .flex;
  .align-center;
  .justify-between;
  color: @textColor;
}

.icon-container {
  min-width: 10%;
  .pointer;
}

.base-header-center-container {
  height: 60px;
}

.action-container {
  min-width: 10%;
}
</style>