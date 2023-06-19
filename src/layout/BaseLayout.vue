<template>
  <div class="base-layout-container">
    <BaseHeader>
      <BaseSearchInput v-if="!isHomePage" />
    </BaseHeader>
    <div class="content-container">
      <slot name="default"></slot>
    </div>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import BaseSearchInput from "@/components/BaseSearchInput.vue";

import {useRoute} from "vue-router";
import { computed } from "vue";
const route = useRoute();

const isHomePage = computed(() => route.path === '/')
</script>

<style lang="less" scoped>
.base-layout-container {
  width: 100vw;
  min-height: 100vh;
  padding-top: 100px;
  //padding-bottom: 380px;
  background-image: url('@/assets/images/shared/background.webp');
  background-repeat: repeat;
  background-size: 10%;
  //backdrop-filter: blur(2px);
}

.content-container {
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto 40px;
  //background: #fff;
  //box-shadow: 0 1px 5px 1px rgba(0,0,0,.1);
  border-radius: 20px;
}
</style>