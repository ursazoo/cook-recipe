<template>
  <div :class="classNames">
    <slot name="default"></slot>
    <SvgView class="label-icon" name="recipe" />
  </div>
</template>

<script setup lang="ts">
import { EStuff } from '@/types'
import { computed } from 'vue'
import SvgView from "@/components/SvgView.vue";

interface IProps {
  type: EStuff
}
const props = defineProps<IProps>()

const classNames = computed(() => {
  switch (props.type) {
    case EStuff.INGREDIENT: return 'base-label-container ingredient';
    case EStuff.RECIPE: return 'base-label-container recipe';
    case EStuff.COOK_WARE: return 'base-label-container cook-ware';
    default: return '';
  }
})
</script>

<style lang="less" scoped>
.base-label-container {
  .font-size(12px);
  .flex;
  .align-center;
  margin-left: 5px;
}

.label-icon {
  width: 16px;
  height: 16px;
}
</style>