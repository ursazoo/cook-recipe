<template>
  <BaseLayout>
    <router-view v-slot="{ Component }">
      <!-- 使用任何自定义过渡和回退到 `fade` -->
<!--      <transition name="fade">-->
        <component :is="Component" />
<!--      </transition>-->
    </router-view>
<!--    <van-floating-bubble-->
<!--      v-if="!isHomePage"-->
<!--      axis="xy"-->
<!--      icon="arrow-left"-->
<!--      magnetic="x"-->
<!--      @click="router.back()"-->
<!--    />-->
  </BaseLayout>
</template>

<script setup lang="ts">
import { useRoute, useRouter, RouterView } from 'vue-router'
// import BaseSignInModal from "@/components/BaseSignInModal.vue";
import BaseLayout from '@/layout/BaseLayout.vue'
import { useSharedStore } from '@/stores/shared'
import getCurrentScreenSize from '@/utils/getCurrentScreenSize'
import { computed } from "vue";

const route = useRoute();
const router = useRouter()
const sharedStore = useSharedStore()

const isHomePage = computed(() => route.path === '/');

window.addEventListener('resize', () => {
  sharedStore.screenSize = getCurrentScreenSize()
})
</script>

<style lang="less" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease-in-out;
}
</style>
