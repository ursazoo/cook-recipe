<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="props?.color || '#333'" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface  IProps {
  prefix?: string;
  color?: string;
  name: string;
}

const props = defineProps<IProps>()

const symbolId = computed(() => `#${props.prefix || 'icon'}-${props.name}`)
</script>