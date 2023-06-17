<template>
  <img :src="imageSrc" :alt="alt" ref="lazyImageRef" class="lazy-image-container" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const imageSrc = ref('https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg');
const alt = ref('');
const lazyImageRef = ref<any>(null);
const observer = ref<any>(null);

const handleIntersection = (entries: any[]) => {
  if (entries[0].isIntersecting) {
    lazyImageRef.value?.setAttribute('src', imageSrc.value);
    observer.value && observer.value.disconnect();
  }
};

const loadImage = () => {
  const img = new Image();
  img.onload = () => {
    observer.value = new IntersectionObserver(handleIntersection, {
      rootMargin: '50px',
      threshold: 0.01,
    });
    observer.value.observe(lazyImageRef.value);
  };
  img.src = imageSrc.value;
};

onMounted(() => {
  loadImage();
});

onBeforeUnmount(() => {
  observer.value && observer.value.disconnect();
});
</script>

<style lang="less" scoped>
.lazy-image-container {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>