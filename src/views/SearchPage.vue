<template>
  <div class="search-page-container">
    <!--        <BaseSearch :show-placeholder="false" :value="query.value" />-->
    <!--    <van-nav-bar class="fixed top-0 left-0 w-full" left-text="" right-text="搜索" left-arrow @click-left="router.back" @click-right="handleSearch">-->
    <!--      <template #title>-->
    <!--        <van-search v-model="search.content" placeholder="请输入搜索关键词" />-->
    <!--      </template>-->
    <!--    </van-nav-bar>-->
    <form action="/" class="fixed z-10 top-0 left-0 flex items-center w-full bg-[#e36226]">
      <van-icon name="arrow-left" class="w-6 translate-x-2 text-white" @click="router.back"/>
      <van-search
        class="w-full"
        show-action
        v-model="search.content"
        placeholder="请输入搜索关键词"
        shape="round"
        background="#e26226"
      >
        <template #action>
          <div @click="handleSearch" class="text-white">搜索</div>
        </template>
      </van-search>
    </form>
    <div class="w-72 xs:w-full flex mb-5 mx-5 xs:mx-auto bg-[#f8f9fa]">
      <!--        <div-->
      <!--          :class="activeTabPaneClass(EStuff.INGREDIENT)"-->
      <!--          @click="handleClickTab(EStuff.INGREDIENT)"-->
      <!--        >-->
      <!--          <div :class="activeTabTitleClass(EStuff.INGREDIENT)">-->
      <!--            {{ stuffNameConfig[EStuff.INGREDIENT] }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div :class="activeTabPaneClass(EStuff.RECIPE)" @click="handleClickTab(EStuff.RECIPE)">-->
      <!--          <div :class="activeTabTitleClass(EStuff.RECIPE)">-->
      <!--            {{ stuffNameConfig[EStuff.RECIPE] }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div-->
      <!--          :class="activeTabPaneClass(EStuff.COOK_WARE)"-->
      <!--          @click="handleClickTab(EStuff.COOK_WARE)"-->
      <!--        >-->
      <!--          <div :class="activeTabTitleClass(EStuff.COOK_WARE)">-->
      <!--            {{ stuffNameConfig[EStuff.COOK_WARE] }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div :class="activeTabLineClass"></div>-->
      <van-tabs
        v-model:active="search.activeTab"
        @change="handleClickTab"
        sticky
        offset-top="54px"
        class="w-full"
      >
        <van-tab :title="stuffNameConfig[EStuff.INGREDIENT]">
          <van-pull-refresh
            v-model="loading"
            @refresh="onRefresh"
            v-if="
              search.initialed &&
              search.activeTab === EStuff.INGREDIENT &&
              search.ingredientList?.length
            "
          >
            <div
              class="grid grid-cols-6 gap-7 px-5 xs:grid-cols-2 xs:gap-2 xs:px-1 xs:pt-2 bg-white"
            >
              <BaseRecipe
                v-for="recipe in search.ingredientList"
                :key="recipe.id"
                :recipe="recipe"
              />
            </div>
          </van-pull-refresh>
          <van-empty
            v-if="search.initialed && !search.ingredientList?.length"
            image="search"
            :description="`没有找到${search.content}相关的食材`"
          />
        </van-tab>
        <van-tab :title="stuffNameConfig[EStuff.RECIPE]">
          <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <div
              v-if="search.initialed && search.activeTab === EStuff.RECIPE"
              class="grid grid-cols-6 gap-7 px-5 xs:grid-cols-2 xs:gap-2 xs:px-1 xs:pt-2 bg-white"
            >
              <template v-if="search.recipeList?.length">
                <BaseRecipe v-for="recipe in search.recipeList" :key="recipe.id" :recipe="recipe" />
              </template>
              <van-empty v-else></van-empty>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab :title="stuffNameConfig[EStuff.COOK_WARE]">
          <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <div
              v-if="search.initialed && search.activeTab === EStuff.COOK_WARE"
              class="grid grid-cols-6 gap-7 px-5 xs:grid-cols-2 xs:gap-2 xs:px-1 xs:pt-2 bg-white"
            >
              <template v-if="search.recipeList?.length">
                <BaseRecipe v-for="recipe in search.recipeList" :key="recipe.id" :recipe="recipe" />
              </template>
              <van-empty v-else></van-empty>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab :title="stuffNameConfig[EStuff.USER]">
          <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <div
              v-if="search.initialed && search.activeTab === EStuff.USER"
              class="grid grid-cols-6 gap-7 px-5 xs:grid-cols-2 xs:gap-2 xs:px-1 xs:pt-2 bg-white"
            >
              <template v-if="search.recipeList?.length">
                <BaseRecipe v-for="recipe in search.recipeList" :key="recipe.id" :recipe="recipe" />
              </template>
              <van-empty v-else></van-empty>
            </div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
    <div
      v-if="!search.initialed"
      class="fixed top-24 grid grid-cols-6 gap-7 px-5 xs:grid-cols-2 xs:gap-2 xs:px-1 xs:pt-2 bg-white"
    >
      <van-skeleton v-for="index in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index" style="padding: 0">
        <template #template>
          <div class="w-full mb-2.5">
            <van-skeleton-image style="width: 180px; height: 180px" />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </template>
      </van-skeleton>
    </div>
    <van-config-provider :theme-vars="backTopTheme">
      <van-back-top>
        <div>再看一遍</div>
      </van-back-top>
    </van-config-provider>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUrlSearchParams } from '@vueuse/core'
import { EStuff, stuffNameConfig } from '@/types'
import BaseRecipe from '@/components/BaseRecipe.vue'
import { type BackTopThemeVars, showToast } from 'vant'

interface ISearch {
  content: string
  initialed: boolean
  activeTab: EStuff
  recipeList: any[]
  ingredientList: any[]
  cookWareList: any[]
}

interface IPagination {
  pageNum: number
  pageSize: number
}

const router = useRouter()

const params = useUrlSearchParams('history')

const query = computed(() => {
  const keys = Object.keys(params)
  const values = Object.values(params)
  return {
    key: `${keys?.[0]}` || '',
    value: `${values?.[0]}` || ''
  }
})

const backTopTheme: BackTopThemeVars = {
  backTopBackground: '#e26226'
}

const loading = ref(false)

const search = reactive<ISearch>({
  content: '', // 搜索内容
  initialed: false, // 是否初始化完成
  activeTab: EStuff.INGREDIENT,
  ingredientList: [],
  recipeList: [],
  cookWareList: []
})

const pagination = reactive<IPagination>({
  pageNum: 1,
  pageSize: 20
})

function handleClickTab(type: EStuff) {
  console.log(type)
  search.activeTab = type
}

async function onRefresh() {
  await handleSearch()
  showToast('刷新成功')
  loading.value = false
}

async function handleSearch() {
  console.log('搜索')
  setTimeout(() => {
    search.recipeList = [
      {
        id: 1,
        name: '小熊牌土豆炖牛腩',
        author: '小熊1',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 2,
        name: '【小熊牌】家庭版简易好吃的不得了土豆炖牛腩',
        author: '小熊头小熊头小熊头小熊头小熊头',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 3,
        name: '土豆炖牛腩',
        author: '小熊3',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 4,
        name: '土豆炖牛腩',
        author: '小熊4',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 5,
        name: '土豆炖牛腩',
        author: '小熊5',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 6,
        name: '土豆炖牛腩',
        author: '小熊6',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 1,
        name: '小熊牌土豆炖牛腩',
        author: '小熊1',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 2,
        name: '【小熊牌】家庭版简易好吃的不得了土豆炖牛腩',
        author: '小熊头小熊头小熊头小熊头小熊头',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 3,
        name: '土豆炖牛腩',
        author: '小熊3',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 4,
        name: '土豆炖牛腩',
        author: '小熊4',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 5,
        name: '土豆炖牛腩',
        author: '小熊5',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 6,
        name: '土豆炖牛腩',
        author: '小熊6',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 1,
        name: '小熊牌土豆炖牛腩',
        author: '小熊1',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 2,
        name: '【小熊牌】家庭版简易好吃的不得了土豆炖牛腩',
        author: '小熊头小熊头小熊头小熊头小熊头',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 3,
        name: '土豆炖牛腩',
        author: '小熊3',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 4,
        name: '土豆炖牛腩',
        author: '小熊4',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 5,
        name: '土豆炖牛腩',
        author: '小熊5',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      },
      {
        id: 6,
        name: '土豆炖牛腩',
        author: '小熊6',
        collected: false,
        collectedCount: 199,
        cover:
          'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg'
      }
    ]
    search.initialed = true
  }, 500)
}

onMounted(() => {
  handleSearch()
})
</script>

<style lang="less" scoped>
.tab-pane {
  flex: 1;
  cursor: pointer;
  text-align: center;
  border: 1.5px solid #fff;
  .tab-pane-title {
    color: @textColor;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 600;
  }
  .tab-pane-title.active {
    color: @primaryColor;
  }
}
.tab-pane.active {
  background: #fff;
  border: 1.5px solid rgb(255 145 94 / 60%);
}

.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}

:deep(.van-tabs__content) {
  background-color: #fff;
}

:deep(.van-search__action:active) {
  background-color: @primaryColor;
}
</style>
