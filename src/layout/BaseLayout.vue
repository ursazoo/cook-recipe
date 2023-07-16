<template>
  <div class="min-h-screen pt-28 xs:pt-[54px] bg-layout xs:bg-white bg-repeat bg-auto">
<!--    <BaseHeader>-->
<!--      <BaseSearchInput v-if="isSearchPage" />-->
<!--    </BaseHeader>-->
    <div class="container mx-auto mb-10 rounded px-3.5 xs:px-0 py-5 xs:py-0 bg-white shadow-lg xs:shadow-none">
      <slot name="default"></slot>
    </div>
    <BaseFooter v-if="isHomePage"/>
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
const isHomePage = computed(() => route.path === '/')
</script>
