<template>
  <div :class="clsx(['base-search-container', searchInput.isShowResult || searchInput.isShowHistory ? 'on-focus' : ''])" ref="containerRef">
    <div class="search-container">
      <input class="base-search" type="text" ref="inputRef"
             v-model.trim="searchInput.text"
             @keydown.enter="handleSearch"
             @focusin="searchInput.isFocus=true; searchInput.isShowHistory = true; searchInput.isShowResult = true"
             @focusout="searchInput.isFocus=false;"
      />
      <div class="search-icon" @click="handleSearch">
<!--        <icon-search :size="20"/>-->
      </div>
    </div>
    <div v-if="props.showPlaceholder" class="search-label-container">
      {{ placeholder }}
    </div>
    <div v-if="searchInput.isShowResult && searchInput.text && searchInput.searchResult.length" class="search-result-container">
      <div class="search-result-header">
        <div class="search-result-title">搜索相关</div>
      </div>

      <div class="search-result-content">
        <div class="search-result-item" v-for="(item, index) in searchInput.searchResult" :key="index" @click="handleSearch($event, item)">
          {{ item.name }}
          <BaseLabel :type="item.type" />
        </div>
      </div>

    </div>
    <div v-if="searchInput.isShowHistory && !searchInput.text && searchInput.searchHistory.length"  class="search-result-container">
      <div class="search-result-header">
        <div class="search-result-title">搜索历史</div>
        <div class="search-result-title pointer" @click="handleClearHistory">
<!--          <icon-delete class="delete-icon"/>清除全部-->
        </div>
      </div>
      <div class="search-result-content">
        <div
            class="search-result-item"
             v-for="(item, index) in searchInput.searchHistory"
             :key="index"
             @click="handleSearch($event, item)"
             @mouseenter="searchInput.hoverIndex = index"
             @mouseleave="searchInput.hoverIndex = null"
        >
          <div class="search-result-item-info">
            {{ item.name }}
            <BaseLabel :type="item.type" />
          </div>
          <div v-if="searchInput.hoverIndex === index" class="search-result-item-action" @click="searchInput.searchHistory.slice(index, 1)">
<!--            <icon-close class="close-icon"/>删除-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import clsx from "clsx";

import {useSearchStore} from "@/stores/search";
import { EStuff } from "@/types";
import BaseLabel from "@/components/BaseLabel.vue";
import { useRouter } from "vue-router";

interface IProps {
  showPlaceholder?: boolean;
  value?: string;
}

interface ISearchLabel {
  name: string;
  type: EStuff;
}

interface ISearchInput {
  text: string;
  isFocus: boolean;
  isShowHistory: boolean;
  isShowResult: boolean;
  hoverIndex: null | number;
  placeholderIndex: number;
  placeholderConfig: string[];
  searchResult: ISearchLabel[];
  searchHistory: ISearchLabel[];
}

const router = useRouter();
const searchStore = useSearchStore();
const props = defineProps<IProps>();

console.log(searchStore.keyword)

const searchInput = reactive<ISearchInput>({
  text: searchStore.keyword || '',
  isFocus: false,
  isShowHistory: false,
  isShowResult: false,
  hoverIndex: null,
  placeholderIndex: 0,
  placeholderConfig: [
    '搜索食谱和食材', // 中文（简体）
    '搜尋食譜和食材', // 中文（繁体）
    'Search for recipes and ingredients', // 英语
    'Busque recetas e ingredientes', // 西班牙语
    'Recherchez des recettes et des ingrédients', // 法语
    'Suche nach Rezepten und Zutaten', // 德语
    'Cerca ricette e ingredienti', // 意大利语
    'レシピと材料を検索します', // 日语
    '레시피와 재료를 검색합니다', // 韩语
    'Ищите рецепты и ингредиенты', // 俄语
    'Pesquise por receitas e ingredientes', // 葡萄牙语
    '搜索食谱和食材' // 中文（简体）
  ],
  searchResult: [
    {
      name: '土豆',
      type: EStuff.INGREDIENT,
    },
    {
      name: '番茄',
      type: EStuff.INGREDIENT,
    },
    {
      name: '土豆炖牛肉',
      type: EStuff.RECIPE,
    },
    {
      name: '土豆烧排骨',
      type: EStuff.RECIPE,
    },
    {
      name: '铁锅',
      type: EStuff.COOK_WARE,
    }
  ],
  searchHistory: [
    {
      name: '土豆',
      type: EStuff.INGREDIENT,
    },
  ],
})
const inputRef = ref<HTMLInputElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const placeholder = computed(() => searchInput.placeholderConfig[searchInput.placeholderIndex])

onClickOutside(
  containerRef,
  () => {
    searchInput.isShowHistory = false;
    searchInput.isShowResult = false;
  },
)

onMounted(() => {
  // inputRef.value?.focus();
  setInterval(() => {
    if (searchInput.placeholderIndex > 9) searchInput.placeholderIndex = 0
    searchInput.placeholderIndex++
  }, 3000)
})

function handleSearch($event: any, params?: any) {
  searchInput.isShowResult = false;
  searchInput.isShowHistory = false;
  if(params) {
    searchInput.searchHistory.push(params)
    router.push(`/search?${EStuff[params.type].toLowerCase()}=${params.name}`)
  } else {
    searchStore.keyword = searchInput.text;
    console.log(searchStore.keyword)
    searchInput.searchHistory.push({
      name: searchInput.text,
      type: EStuff.INGREDIENT,
    })

    router.push(`/search?ingredient=${searchInput.text}1111`)
  }
}

function handleClearHistory() {
  searchInput.searchHistory = [];
}
</script>

<style lang="less" scoped>
.base-search-container {
  position: relative;
  width: 520px;
  height: 50px;
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #e36226;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  //transition: .2s linear all;
}
.on-focus {
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #f0f0f0;
}
.search-container {
  .flex;
  .align-center;
  .base-search {
    display: block;
    min-width: 90%;
    height: 100%;
    border: none;
    border-radius: 15px;
    outline: none;
    padding-left: 15px;
    font-size: 16px;
  }
  .search-icon {
    width: 10%;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    text-align: center;
  }
}
.search-label-container {
  width: 520px;
  margin: 10px auto;
  transform: translateX(10px);
}

.search-result-container {
  z-index: 1;
  position: absolute;
  width: 520px;
  min-height: 200px;
  max-height: 300px;
  overflow-y: auto;
  background: #fff;
  border-radius: 0 0 15px 15px;
  top: 48px;
  left: -1px;
  box-shadow: 0 6px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border: 1px solid #e36226;
  border-top: 0;

  .search-result-header {
    .flex;
    .align-center;
    .justify-between;
    .search-result-title {
      .font-size(12px);
      padding: 5px;
    }
  }
  .search-result-content {
    .search-result-item {
      .flex;
      .align-center;
      .justify-between;
      cursor: pointer;
      background: #fff;
      padding: 10px 5px;
      border-radius: 10px;
      &:hover {
        background: #F8F6F2;
      }
      .search-result-item-info, .search-result-item-action {
        .flex;
        .align-center;
      }

      .search-result-item-action {
        .font-size(12px);
        padding-right: 5px;
        transition: .2s linear all;
        &:hover {
          color: crimson;
          fill: crimson;
        }
      }
    }
  }

  .delete-icon {
    margin-right: 5px;
    transition: .2s linear all;
  }

  .close-icon {
    margin-right: 5px;
    transition: .2s linear all;
    &:hover {
      color: crimson;
      fill: crimson;
    }
  }
}
</style>