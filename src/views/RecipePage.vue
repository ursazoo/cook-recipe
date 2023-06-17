<template>
<div class="recipe-page-container">
  {{recipeName}}
</div>
</template>

<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'

const recipeName = useRouteParams('recipeName')
</script>

<style lang="less" scoped>
.recipe-page-container {
  border-radius: 15px;
  padding: 30px 15px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
}

</style>