<template>
  <div class="search-page-container">
    <BaseSearch :show-placeholder="false" :value="query.value" />

    <div class="search-result-container">
      <div class="tabs-title-container">
        <div class="tab-pane" @click="handleClickTab(EStuff.INGREDIENT)">
          <div :class="activeTabTitleClass(EStuff.INGREDIENT)">{{ stuffNameConfig[EStuff.INGREDIENT] }}</div>
        </div>
        <div class="tab-pane" @click="handleClickTab(EStuff.RECIPE)">
          <div :class="activeTabTitleClass(EStuff.RECIPE)">{{ stuffNameConfig[EStuff.RECIPE] }}</div>
        </div>
        <div class="tab-pane" @click="handleClickTab(EStuff.COOK_WARE)">
          <div :class="activeTabTitleClass(EStuff.COOK_WARE)">{{ stuffNameConfig[EStuff.COOK_WARE] }}</div>
        </div>
        <div :class="activeTabLineClass"></div>
      </div>
      <div  class="tabs-content-container">
        <template v-if="search.activeType === EStuff.RECIPE" >
          <BaseRecipe v-for="(recipe) in search.recipeList" :key="recipe.id" :recipe="recipe" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSearch from '@/components/BaseSearchInput.vue'
import { computed, reactive } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'
import { EStuff, stuffNameConfig } from '@/types'
import BaseRecipe from "@/components/BaseRecipe.vue";

const params = useUrlSearchParams('history')

const query = computed(() => {
  const keys = Object.keys(params)
  const values = Object.values(params)
  return {
    key: `${keys?.[0]}` || '',
    value: `${values?.[0]}` || ''
  }
})

interface ISearch {
  activeType: EStuff
  recipeList: any[]
  ingredientList: any[]
  cookWareList: any[]
}

interface IPagination {
  pageNum: number
  pageSize: number
}

const activeTabLineClass = computed(() => {
  return `tab-active-line translate-${search.activeType}`
})

const activeTabTitleClass = computed(() => {
  return (type: EStuff) => {
    return `tab-pane-title ${search.activeType === type ? 'active' : ''}`
  }
})

const search = reactive<ISearch>({
  activeType: EStuff[query.value.key.toUpperCase() as any] as any,
  ingredientList: [],
  recipeList: [
    {
      id: 1,
      name: '小熊牌土豆炖牛腩',
      author: '小熊1',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 2,
      name: '【小熊牌】家庭版简易好吃的不得了土豆炖牛腩',
      author: '小熊头小熊头小熊头小熊头小熊头',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 3,
      name: '土豆炖牛腩',
      author: '小熊3',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 4,
      name: '土豆炖牛腩',
      author: '小熊4',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 5,
      name: '土豆炖牛腩',
      author: '小熊5',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 6,
      name: '土豆炖牛腩',
      author: '小熊6',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 1,
      name: '小熊牌土豆炖牛腩',
      author: '小熊1',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 2,
      name: '【小熊牌】家庭版简易好吃的不得了土豆炖牛腩',
      author: '小熊头小熊头小熊头小熊头小熊头',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 3,
      name: '土豆炖牛腩',
      author: '小熊3',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 4,
      name: '土豆炖牛腩',
      author: '小熊4',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 5,
      name: '土豆炖牛腩',
      author: '小熊5',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 6,
      name: '土豆炖牛腩',
      author: '小熊6',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 1,
      name: '小熊牌土豆炖牛腩',
      author: '小熊1',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 2,
      name: '【小熊牌】家庭版简易好吃的不得了土豆炖牛腩',
      author: '小熊头小熊头小熊头小熊头小熊头',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 3,
      name: '土豆炖牛腩',
      author: '小熊3',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 4,
      name: '土豆炖牛腩',
      author: '小熊4',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 5,
      name: '土豆炖牛腩',
      author: '小熊5',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    },
    {
      id: 6,
      name: '土豆炖牛腩',
      author: '小熊6',
      collected: false,
      collectedCount: 199,
      cover: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
    }
  ],
  cookWareList: []
})

const pagination = reactive<IPagination>({
  pageNum: 1,
  pageSize: 20
})

function handleClickTab(type: EStuff) {
  search.activeType=  type;
}
</script>

<style lang="less" scoped>
.search-page-container {
  border-radius: 15px;
  padding: 30px 0;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
}

.search-result-container {
}

.tabs-title-container {
  position: relative;
  width: 520px;
  margin: 20px auto 10px;
  .flex;
  .align-top;
  .tab-pane {
    .flex(1);
    .text-center;
    .pointer;
    .tab-pane-title {
      color: @textColor;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 600;
    }
    .tab-pane-title.active {
      color: @themeColor;
    }
  }
  .tab-active-line {
    position: absolute;
    top: 30px;
    left: 0;
    width: 16.5%;
    height: 3px;
    border-radius: 10px;
    background: @themeColor;
    transition: .2s linear all;
  }

  .translate-0 {
    transform: translateX(50%);
  }

  .translate-1 {
    transform: translateX(250%);
  }

  .translate-2 {
    transform: translateX(450%);
  }
}

.tabs-content-container {
  .flex;
  flex-wrap: wrap;
}
</style>