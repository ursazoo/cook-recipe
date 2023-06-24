<template>
  <div class="p-3 transition cursor-pointer border rounded border-solid border-[#f7f9fa] bg-[#f7f9fa] hover:bg-white hover:border-[#ff915e99]">
    <div class="h-52 xs:h-32 rounded bg-[rgba(27, 23, 67, 0.03)]" @click="handleToRecipePage({name: recipe.name, id: recipe.id})">
      <img ref="coverRef" class="h-full rounded object-cover" :alt="recipe.name" :src="loadingCover" />
    </div>
    <div class="grid grid-cols-5 items-start text-left mt-2.5">
      <div class="col-span-4 xs:col-span-3.5 h-12 mb-2 text-[#333] leading-normal text-base font-semibold transition ellipsis-2 hover:text-[#e26226]" @click="handleToRecipePage({name: recipe.name, id: recipe.id})">{{recipe?.name}}</div>
      <div
        :class="clsx(['col-span-1 xs:col-span-1 w-10 xs:w-8 h-10 xs:h-8 rounded-full transition', recipe.collected ? 'bg-white border-2 border-solid border-[#e26226]' : 'bg-[#e26226] border-2 border-solid border-transparent'])"
        @click="recipe.collected = !recipe.collected"
      >
        <img v-if="!recipe.collected" class="w-full h-full" alt="not collected" :src="yum" />
        <img v-else alt="collected" class="w-full h-full" :src="yumed" />
      </div>
    </div>
    <div class="grid grid-cols-5 items-start text-left mt-2.5">
      <div class="col-span-4 text-xs text-[#707070] transition ellipsis-1 hover:text-[#e26226]" @click="handleToAuthorPage(recipe.author)">{{recipe?.author}}</div>
      <div class="col-span-1 text-xs text-center text-[#707070] font-semibold leading-tight">{{recipe?.collectedCount}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { useIntersectionObserver } from '@vueuse/core'
import clsx from "clsx";

interface IProps {
  recipe: {
    id: string;
    name: string;
    cover: string;
    author: string;
    collected: boolean;
    collectedCount: number;
  }
}

const loadingCover = ref('https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images/test/cook-ware-loading.png');
const yum = 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images/test/yum-white.webp';
const yumed = 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images/test/yumd-orange.webp'
const props = defineProps<IProps>()

const { recipe } = toRefs(props);
const coverRef = ref<HTMLImageElement | any>()
const isShowCover = ref(false);

useIntersectionObserver(
  coverRef,
  ([{ isIntersecting }]) => {
    if(!isIntersecting) {
    //   不加载
    } else {
      // 加载
      setTimeout(() => {
        isShowCover.value = true;
        if(coverRef.value) {
          coverRef.value.src = recipe.value.cover;
        }
      }, 200)
    }
  },
)

function handleToRecipePage({name, id}: {name: string; id: string}) {
  window.open(`/recipe/${name}/${id}`)
}

function handleToAuthorPage(name: string) {
  window.open(`/author/${name}`)
}
</script>

<style lang="less" scoped>
</style>