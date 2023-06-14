<template>
  <div class="base-search-container">
    <input class="base-search" type="text" ref="inputRef" v-model.trim="search.text" @keydown.enter="handleSearch" />
    <div class="search-icon" @click="handleSearch">
      <icon-search :size="20"/>
    </div>
  </div>
  <div class="search-label-container">
    {{ placeholder }}
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
interface IProps {
  [key: string]: any
}
// const props = defineProps<IProps>({});

const search = reactive({
  text: '',
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
  ]
})
const inputRef = ref<HTMLInputElement | null>(null)
const placeholder = computed(() => search.placeholderConfig[search.placeholderIndex])

onMounted(() => {
  inputRef.value?.focus();
  setInterval(() => {
    if (search.placeholderIndex > 9) search.placeholderIndex = 0
    search.placeholderIndex++
  }, 3000)
})

function handleSearch() {
  console.log(search.text)
}
</script>

<style lang="less" scoped>
.base-search-container {
  position: relative;
  width: 520px;
  height: 56px;
  margin: 50px auto 10px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
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
    font-size: 22px;
  }
  .search-icon {
    width: 10%;
    height: 54px;
    line-height: 64px;
    cursor: pointer;
    text-align: center;
  }
}
.search-label-container {
  width: 520px;
  margin: 0 auto;
  transform: translateX(10px);
}
</style>