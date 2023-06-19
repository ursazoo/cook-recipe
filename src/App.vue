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
</script>

<style scoped>
</style>