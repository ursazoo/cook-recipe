<template>
  <div class="recipe-page-container">
    {{ recipe.name }}
    {{ recipe.id }}
  </div>
</template>

<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'
import { useRouter } from 'vue-router'
import { useRequest } from 'vue-request'
import { getRecipe } from '@/api/recipe'
import { reactive } from 'vue'

const router = useRouter()

const recipeName = useRouteParams('recipeName')
const recipeId = useRouteParams('recipeId')

const recipe = reactive({
  id: recipeId,
  name: recipeName,
})

useRequest(getRecipe, {
  manual: false,
  defaultParams: [
    {
      id: recipeId.value
    }
  ],
  onSuccess(data) {
    console.log(data)
  },
  onError(error: any) {
    console.log(error)
  }
})
</script>

<style lang="less" scoped>
.recipe-page-container {
  border-radius: 15px;
  padding: 30px 15px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
}
</style>