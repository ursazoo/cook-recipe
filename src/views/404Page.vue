<template>
  <div class="not-found-page-container">
    <div class="not-found-title">"你来到了厨房的角落"</div>
    <Vue3Lottie :animationData="NotFoundJson" :width="350" :height="350" />
    <div class="back-to-home" @click="handleToHome">看看别的</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// @ts-ignore
import { Vue3Lottie } from 'vue3-lottie'
import NotFoundJson from '@/assets/json/not-found.json';

const router = useRouter();
function handleToHome() {
  router.replace('/')
}
</script>

<style lang="less" scoped>
.not-found-page-container {
  border-radius: 15px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);

  .not-found-title {
    margin: 15px 0;
    color: #f17a35;
    font-weight: 600;
    .font-size(20px);
    .text-center;
  }

  .back-to-home {
    position: relative;
    margin: 10px auto;
    width: 150px;
    height: 34px;
    line-height: 34px;
    color: #fff;
    background-color: #f17a35;
    border: 1.5px solid #f17a35;
    border-radius: 15px;
    transition: .2s all;
    .text-center;
    .pointer;
    .font-size(14px);
    &:hover {
      color: #f17a35;
      background-color: #fff;
      border: 1.5px solid #f17a35;
    }
  }
}
</style>