<template>
  <div class="base-layout-container">
    <BaseHeader />
    <div class="content-container">
      <slot name="default"></slot>
    </div>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
</script>

<style lang="less" scoped>
.base-layout-container {
  width: 100vw;
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 380px;
  background-image: url('@/assets/images/shared/background.webp');
  background-repeat: repeat;
  background-size: 10%;
  backdrop-filter: blur(2px);
}

.content-container {
  width: 1200px;
  min-height: 50vh;
  margin: 0 auto;
  //background: #fff;
  //box-shadow: 0 1px 5px 1px rgba(0,0,0,.1);
  border-radius: 20px;
}
</style>