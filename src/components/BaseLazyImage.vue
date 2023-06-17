<template>
  <img :src="imageSrc" :alt="alt" ref="lazyImageRef" class="lazy-image-container" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const imageSrc = ref('https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg');
const alt = ref('');
const lazyImageRef = ref(null);
let observer = null;

const handleIntersection = (entries) => {
  if (entries[0].isIntersecting) {
    lazyImageRef.value.setAttribute('src', imageSrc.value);
    observer && observer.disconnect();
  }
};

const loadImage = () => {
  const img = new Image();
  img.onload = () => {
    observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '50px',
      threshold: 0.01,
    });
    observer.observe(lazyImageRef.value);
  };
  img.src = imageSrc.value;
};

onMounted(() => {
  loadImage();
});

onBeforeUnmount(() => {
  observer && observer.disconnect();
});
</script>

<style lang="less" scoped>
.lazy-image-container {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>