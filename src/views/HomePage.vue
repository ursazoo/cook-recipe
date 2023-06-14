<template>
  <main>
    <a-button type="primary" @click="modalStore.isSignInModalShow = true">一个按钮</a-button>
    <a-button type="primary" @click="router.push('/about')">关闭</a-button>
  </main>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/modal";
import { useRouter } from "vue-router";

const modalStore = useModalStore();
const router = useRouter();

</script>