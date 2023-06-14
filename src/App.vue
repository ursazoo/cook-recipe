<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseSignInModal from "@/components/BaseSignInModal.vue";
import BaseLayout from "@/layout/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
  <BaseSignInModal />
</template>

<style scoped>
</style>