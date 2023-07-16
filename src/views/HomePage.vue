<template>
  <div class="home-page-container">
    <div v-if="sharedStore.isMobile" class="container h-12 p-3 rounded-md border border-solid shadow" @click="handleToSearch">
      <span class="text-light">点击解锁更多菜谱</span>
    </div>
    <BaseSearch v-else />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useModalStore } from "@/stores/modal";
import { useSharedStore } from "@/stores/shared";
import BaseSearch from "@/components/BaseSearchInput.vue";
import Test from "@/components/async/test.vue";

const sharedStore = useSharedStore();
const modalStore = useModalStore();
const router = useRouter();

function handleToSearch() {
  router.push('/search')
}

</script>

<style lang="less" scoped>
.home-page-container{
  padding: 20px;
}
</style>
