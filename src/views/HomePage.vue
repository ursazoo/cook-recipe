<template>
  <div class="home-page-container">
    <BaseSearch />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/modal";
import { useRouter } from "vue-router";
import BaseSearch from "@/components/BaseSearchInput.vue";

const modalStore = useModalStore();
const router = useRouter();

</script>

<style lang="less" scoped>
.home-page-container{
  padding: 20px;
}
</style>