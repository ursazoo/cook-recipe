<template>
  <div class="base-recipe-container">
    <div class="recipe-cover-container" @click="handleToRecipePage(recipe.name)">
      <img ref="coverRef" class="recipe-cover" :alt="recipe.name" :src="loadingCover" />
    </div>
    <div class="recipe-info-container">
      <div class="recipe-info">
        <div class="recipe-info-title" @click="handleToRecipePage(recipe.name)">{{recipe?.name}}</div>
        <div class="recipe-info-author" @click="handleToAuthorPage(recipe.author)">{{recipe?.author}}</div>
      </div>
      <div class="recipe-collected-container">
        <div
          :class="clsx(recipe?.collected ? 'recipe-collected' : 'recipe-collect')"
          @click="recipe.collected = !recipe.collected"
        >
          <img v-if="!recipe.collected" class="recipe-collect-icon" alt="not collected" :src="yum" />
          <img v-else alt="collected" class="recipe-collect-icon" :src="yumed" />
        </div>
        <div class="recipe-collected-count">{{recipe?.collectedCount}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watchEffect } from "vue";
import { useIntersectionObserver } from '@vueuse/core'
import clsx from "clsx";

interface IProps {
  recipe: {
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
  ([{ isIntersecting }], observerElement) => {
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

function handleToRecipePage(name: string) {
  window.open(`/recipe/${name}`)
}

function handleToAuthorPage(name: string) {
  window.open(`/author/${name}`)
}
</script>

<style lang="less" scoped>
.base-recipe-container {
  width: 220px;
  margin: 0 0 20px 16px;
  padding: 11px;
  background-color: #f7f9fa;
  border: 1.5px solid #f7f9fa;
  border-radius: 12px;
  transition: .5s all;
  .text-center;
  .pointer;

  &:hover {
    background-color: #fff;
    border-color: rgb(255 145 94 / 60%);
    box-shadow: 0 8px 12px 0 rgba(255, 80, 0, 0.06);
  }
}
.recipe-cover-container {
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(27, 23, 67, 0.03);
  .font-size(0);
  .recipe-cover {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  .default-cover {
    width: 200px;
    height: 200px;
    background-color: red;
  }
}

.recipe-info-container {
  margin-top: 10px;
  .flex;
  .align-top;
  .text-left;
  .recipe-info {
    width: 161px;

    &-title {
      height: 48px;
      color: #333;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 10px;
      transition: .2s linear all;
      .ellipsis(2);
      &:hover {
        color: @themeColor;
      }
    }

    &-author {
      font-size: 12px;
      color: #707070;
      transition: .2s linear all;
      .ellipsis(1);
      &:hover {
        color: @themeColor;
      }
    }
  }
  .recipe-collected-container {
    margin-left: 10px;
    .recipe-collect,.recipe-collected {
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
      border-radius: 50%;
      transition: .2s all;
      text-align: center;
      line-height: 36px;
      font-size: 14px;
      font-weight: 600;
    }
    .recipe-collect {
      background-color: @themeColor;
      border: 2px solid transparent;
      color: #fff;
    }

    .recipe-collected {
      background-color: #fff;
      border: 2px solid @themeColor;
      color: @themeColor;
    }

    .recipe-collect-icon {
      width: 38px;
      height: 38px;
      font-size: 0;
    }

    .recipe-collected-count {
      width: 40px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
      color: #707070;
      .text-center;
    }
  }

}
</style>