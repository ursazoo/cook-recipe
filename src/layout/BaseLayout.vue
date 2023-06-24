<template>
  <div class="w-screen min-h-screen pt-28 xs:pt-16 bg-layout xs:bg-white bg-repeat bg-auto">
    <BaseHeader>
      <BaseSearchInput v-if="isSearchPage" />
    </BaseHeader>
    <div class="container min-h-screen mx-auto mb-10 rounded px-3.5 xs:px-0 py-5 xs:py-0 bg-white shadow-lg xs:shadow-none">
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