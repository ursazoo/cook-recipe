<template>
  <div
    class="grid grid-cols-2 xs:grid-cols-1 gap-32 xs:gap-7 px-10 xs:px-1 py-10 xs:py-1 rounded-lg"
  >
    <div class="text-[0]">
      <img
        :alt="String(recipe.name)"
        src="@/assets/images/shared/background.webp"
        class="w-[560px] h-[560px] xs:w-full xs:h-full object-cover mx-auto rounded-lg"
      />
    </div>
    <div>
      <div class="text-3xl leading-[1.5] ellipsis-2 font-semibold text-black">
        {{ recipe.name }}
      </div>
      <div class="flex items-center xs:justify-between text-normal font-semibold text-light m-5">
        <div class="mr-5 cursor-pointer">{{ recipe.author }}</div>
        <div
          class="rounded bg-[#e26226] text-white border border-solid border-transparent px-2 py-1 cursor-pointer text-xs transition hover:bg-white hover:text-[#e26226] hover:border-[#ff915e99]"
        >
          关注
        </div>
      </div>
      <div class="text-normal leading-[2] text-black m-5">{{ `" ${recipe.introduction} "` }}</div>
      <div class="grid grid-cols-3 gap-2 my-5 pt-5 divide-x">
        <div>
          <div class="text-center text-3xl font-semibold">10</div>
          <div class="text-center text-sm mt-2 text-light">种食材</div>
        </div>
        <div class="">
          <div class="text-center text-3xl font-semibold">2</div>
          <div class="text-center text-sm mt-2 text-light">小时</div>
        </div>
        <div>
          <div class="text-center text-3xl font-semibold">咸甜</div>
          <div class="text-center text-sm mt-2 text-light">口味</div>
        </div>
      </div>
      <div v-if="sharedStore.screenSize !== EScreenSize.XS" class="pt-6 xs:pt-3">
        <div class="grid grid-rows-4 gap-8 xs:gap-2">
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">主料：</div>
            <div v-for="item in recipe.mainIngredients" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">
              {{ item.name }}
            </div>
          </div>
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">辅料：</div>
            <div v-for="item in recipe.secondaryIngredients" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">
              {{ item.name }}
            </div>
            <div v-if="!recipe.secondaryIngredients.length">/</div>
          </div>
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">调料：</div>
            <div v-for="item in recipe.seasonings" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">{{ item.name }}</div>
          </div>
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">烹饪方式：</div>
            <div class="flex items-center divide-x">
              <div v-for="item in recipe.cookingMethods" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">
                {{ item.name }}
              </div>
              <div class="text-center pl-2">{{ difficultyConfig[recipe.difficulty] }}</div>
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <div class="grid grid-cols-4">
          <div @click="handleSetTab('mainIngredients')">主料</div>
          <div @click="handleSetTab('secondaryIngredients')">辅料</div>
          <div @click="handleSetTab('seasonings')">调料</div>
          <div @click="handleSetTab('cookingMethods')">烹饪方式</div>
        </div>
        <div v-if="activeTab === 'mainIngredients'" class="">
          主料
        </div>
        <div v-if="activeTab === 'secondaryIngredients'" class="">
          辅料
        </div>
        <div v-if="activeTab === 'seasonings'" class="">
          调料
        </div>
        <div v-if="activeTab === 'cookingMethods'" class="">
          烹饪方式
        </div>
      </template>
    </div>
  </div>
  <div class="px-10 xs:px-1 py-5 xs:py-1 rounded-lg">
    <div class="text-left text-xl font-semibold">具体步骤</div>
    <div></div>
  </div>
  <div class="px-10 xs:px-1 py-5 xs:py-1 rounded-lg">
    <div class="text-left text-xl font-semibold">相关推荐</div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'
import { useRouter } from 'vue-router'
import { useRequest } from 'vue-request'
import { getRecipe } from '@/api/recipe'
import { reactive, ref } from 'vue'
import { difficultyConfig, EDifficulty, EScreenSize } from "@/types";
import { useSharedStore } from "@/stores/shared";

const sharedStore = useSharedStore();

const router = useRouter()

const recipeName = useRouteParams('recipeName');
const recipeId = useRouteParams('recipeId') || '';

const recipe = reactive({
  id: recipeId,
  name: recipeName,
  author: '小熊头',
  introduction:
    'Sharma Jain: So satisfying!! Made it as it is, turned out supe…，好吃真好吃，好吃真好吃好吃真好吃好吃真好吃',
  mainIngredients: [
    {
      id: 'shredded-pork',
      name: '猪肉丝',
      quantity: '200克'
    }
  ], // 主料
  secondaryIngredients: [
    {
      id: 'shredded-carrots',
      name: '胡萝卜',
      quantity: '100克'
    },
    {
      id: 'shredded-bamboo-shoots',
      name: '笋丝',
      quantity: '50克'
    },
    {
      id: 'shredded-black-fungus',
      name: '黑木耳',
      quantity: '50克'
    }
  ], // 辅料
  seasonings: [
    {
      id: 'salt',
      name: '盐',
      quantity: '适量'
    },
    {
      id: 'butter',
      name: '黄油',
      quantity: '50克'
    }
  ], // 调料
  cookingMethods: [
    {
      id: 'stew',
      name: '炖'
    }
  ], // 烹饪方式
  difficulty: EDifficulty.EASY // 难度
})

const activeTab = ref('mainIngredients');

function handleSetTab(type: string) {
  activeTab.value = type;
}

useRequest(getRecipe, {
  manual: false,
  defaultParams: [
    {
      id: String(recipeId.value)
    }
  ],
  onSuccess(data) {
    console.log(data)
  },
  onError(error: any) {
    console.log(error)
  }
})
</script>

<style lang="less" scoped></style>