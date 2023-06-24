<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
<!--  <BaseSignInModal />-->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import BaseSignInModal from "@/components/BaseSignInModal.vue";
import BaseLayout from "@/layout/BaseLayout.vue";
import { useSharedStore } from "@/stores/shared";
import getCurrentScreenSize from "@/utils/getCurrentScreenSize";

const sharedStore = useSharedStore();
window.addEventListener('resize', () => {
  sharedStore.screenSize = getCurrentScreenSize();
})
</script>

<style scoped>
</style>