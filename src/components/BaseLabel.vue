<template>
  <div :class="clsx(['flex align-top ml-1 text-xs', classNames])">
    <slot name="default"></slot>
    <SvgView class="w-4 h-4" name="recipe" />
  </div>
</template>

<script setup lang="ts">
import { EStuff } from '@/types'
import { computed } from 'vue'
import SvgView from "@/components/SvgView.vue";
import clsx from "clsx";

interface IProps {
  type: EStuff
}
const props = defineProps<IProps>()

const classNames = computed(() => {
  switch (props.type) {
    case EStuff.INGREDIENT: return 'ingredient';
    case EStuff.RECIPE: return 'recipe';
    case EStuff.COOK_WARE: return 'cook-ware';
    default: return '';
  }
})
</script>

<style lang="less" scoped>
</style>