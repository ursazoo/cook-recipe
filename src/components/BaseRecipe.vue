<template>
  <div class="base-recipe-container">
    <div class="recipe-cover-container" :style="{backgroundImage: `url(${recipe.cover})`}"></div>
    <div class="recipe-info-container">
      <div class="recipe-info">
        <div>{{recipe?.name}}</div>
        <div>{{recipe?.author}}</div>
      </div>
      <div class="recipe-collected-count">
        <div>{{recipe?.collectedCount}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface IProps {
  recipe: {
    name: string;
    cover: string;
    author: string;
    collected: boolean;
    collectedCount: number;
  }
}
const props = defineProps<IProps>()

const {recipe} = toRefs(props);
</script>

<style lang="less" scoped>
.base-recipe-container {
  width: 20%;
  padding: 10px 15px;
  .text-center;
}
.recipe-cover-container {
  width: 200px;
  height: 200px;
  margin-bottom: 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: lightgoldenrodyellow;
  .font-size(0);
}
.recipe-info-container {
  .flex;
  .align-top;
  .recipe-info {
    flex: 8;
    background-color: crimson;
  }
  .recipe-collected-count {
    flex: 2;
    background-color: lightblue;
  }
}
</style>