<template>
  <div class="w-screen min-h-screen pt-28 bg-layout bg-repeat bg-auto">
    <BaseHeader>
      <BaseSearchInput v-if="isSearchPage" />
    </BaseHeader>
    <div class="container min-h-screen mx-auto mb-10 px-3.5 py-5 bg-white shadow-lg">
      <slot name="default"></slot>
    </div>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import BaseSearchInput from "@/components/BaseSearchInput.vue";

import {useRoute} from "vue-router";
import { computed } from "vue";
const route = useRoute();

const isSearchPage = computed(() => route.path === '/search')
</script>