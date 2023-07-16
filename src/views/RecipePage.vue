<template>
  <div
    class="grid grid-cols-2 xs:grid-cols-1 gap-32 xs:gap-7 px-10 xs:px-1 py-10 xs:py-1 rounded-lg"
  >
    <div class="text-[0]">
      <van-swipe class="w-[560px] h-[560px] xs:w-full xs:h-full" :autoplay="3000" :show-indicators="false">
        <van-swipe-item>
          <img
            :alt="String(recipe.name)"
            src="https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg"
            class="w-[560px] h-[560px] xs:w-full xs:h-full object-cover mx-auto rounded-lg"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            :alt="String(recipe.name)"
            src="@/assets/images/shared/background.webp"
            class="w-[560px] h-[560px] xs:w-full xs:h-full object-cover mx-auto rounded-lg"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <div class="text-3xl leading-[1.5] ellipsis-2 font-semibold text-black">
        {{ recipe.name }}
      </div>
      <div class="flex items-center xs:justify-between text-normal font-semibold text-light my-5">
        <div class="mr-5 cursor-pointer">{{ recipe.author }}</div>
        <div
          class="rounded bg-[#e26226] text-white border border-solid border-transparent px-2 py-1 cursor-pointer text-xs transition hover:bg-white hover:text-[#e26226] hover:border-[#ff915e99]"
        >
          关注
        </div>
      </div>
      <div class="text-normal leading-[2] text-black m-5">{{ `" ${recipe.introduction} "` }}</div>
      <div class="grid grid-cols-4 gap-2 my-5 py-5 divide-x">
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
        <div>
          <div class="text-center text-3xl font-semibold">初级</div>
          <div class="text-center text-sm mt-2 text-light">难度</div>
        </div>
      </div>
      <div v-if="sharedStore.screenSize !== EScreenSize.XS" class="pt-6 xs:pt-3">
        <div class="grid grid-rows-4 gap-8 xs:gap-2">
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">主料：</div>
<!--            <div v-for="item in recipe.mainIngredients" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">-->
<!--              {{ item.name }}-->
<!--            </div>-->
          </div>
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">辅料：</div>
<!--            <div v-for="item in recipe.secondaryIngredients" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">-->
<!--              {{ item.name }}-->
<!--            </div>-->
<!--            <div v-if="!recipe.secondaryIngredients.length">/</div>-->
          </div>
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">调料：</div>
<!--            <div v-for="item in recipe.seasonings" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">{{ item.name }}</div>-->
          </div>
          <div class="flex items-center flex-wrap leading-1">
            <div class="text-center text-xl xs:text-sm font-semibold">烹饪方式：</div>
            <div class="flex items-center divide-x">
<!--              <div v-for="item in recipe.cookingMethods" :key="item.id" class="mr-2 cursor-pointer transition hover:text-[#e26226]">-->
<!--                {{ item.name }}-->
<!--              </div>-->
              <div class="text-center pl-2">{{ difficultyConfig[recipe.difficulty] }}</div>
            </div>
          </div>
        </div>
      </div>
      <template v-else >
        <div>
          <div class="flex justify-between my-3">
            <div class="text-base	font-bold">食材清单</div>
            <div class="text-xs text-[#e26226]">加入待购清单</div>
          </div>
          <div class="flex justify-between items-center my-1" v-for="(ingredient) in recipe.ingredients" :key="ingredient.id">
            <div>{{ingredient.name}}</div>
            <div>{{ingredient.quantity}}</div>
          </div>
        </div>
        <div>
          <div class="flex justify-between my-3">
            <div class="text-base	font-bold">烹饪步骤</div>
            <div class="text-xs text-[#e26226]">点击进入烹饪模式</div>
          </div>
          <div class="my-2" v-for="(process, index) in recipe.cookingProcess" :key="index">
            <div class="font-bold">
              {{ index === recipe.cookingProcess.length - 1 ? '最后一步' : `步骤 ${index+1}/${recipe.cookingProcess.length}`}}
            </div>
            <img class="xs:w-full xs:h-full xs:my-1 object-cover mx-auto rounded-lg" :alt="`步骤${index+1}`" :src="process.image"/>
            <div>{{process.text}}</div>
          </div>
        </div>
        <div>
          <div>tips</div>
          <div>tips的内容</div>
        </div>
<!--        <van-tabs active="{{ activeTab }}" swipeable>-->
<!--          <van-tab title="概览">-->
<!--            <div class="py-2">-->
<!--              家里有兔子，所以做饭就要特别上心，既要营养丰富，又要容易消化，那么就用炖吧，口感软烂鲜美又容易消化，营养全面不流失。-->
<!--            </div>-->
<!--          </van-tab>-->
<!--          <van-tab title="食材">-->
<!--            <div  class="py-2">总览</div>-->
<!--          </van-tab>-->
<!--          <van-tab title="详细过程">-->
<!--            <div  class="py-2">总览</div>-->
<!--          </van-tab>-->
<!--          <van-tab title="备注">-->
<!--            <div  class="py-2">总览</div>-->
<!--          </van-tab>-->
<!--        </van-tabs>-->
        <!--        <div class="grid grid-cols-4">-->
        <!--          <div @click="handleSetTab('mainIngredients')">主料</div>-->
        <!--          <div @click="handleSetTab('secondaryIngredients')">辅料</div>-->
        <!--          <div @click="handleSetTab('seasonings')">调料</div>-->
        <!--          <div @click="handleSetTab('cookingMethods')">烹饪方式</div>-->
        <!--        </div>-->
        <!--        <div v-if="activeTab === 'mainIngredients'" class="">-->
        <!--          主料-->
        <!--        </div>-->
        <!--        <div v-if="activeTab === 'secondaryIngredients'" class="">-->
        <!--          辅料-->
        <!--        </div>-->
        <!--        <div v-if="activeTab === 'seasonings'" class="">-->
        <!--          调料-->
        <!--        </div>-->
        <!--        <div v-if="activeTab === 'cookingMethods'" class="">-->
        <!--          烹饪方式-->
        <!--        </div>-->
      </template>
    </div>
    <div v-if="sharedStore.isMobile" class="fixed bottom-0 left-0 flex items-center justify-between w-full h-10 px-5 shadow-md bg-white">
      <div class="">说点什么</div>
      <div class="">喜欢</div>
      <div class="">收藏</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouteParams } from '@vueuse/router'
import { useRouter } from 'vue-router'
import { useRequest } from 'vue-request'
import { getRecipe } from '@/api/recipe'
import { onMounted, reactive, ref } from "vue";
import { difficultyConfig, EDifficulty, EScreenSize } from "@/types";
import { useSharedStore } from "@/stores/shared";
import SvgView from "@/components/SvgView.vue";
import { isMobile } from "vant/es/utils";

const sharedStore = useSharedStore();

const router = useRouter()

const recipeName = useRouteParams<string>('recipeName');
const recipeId = useRouteParams<string>('recipeId');

const recipe = reactive({
  id: recipeId,
  name: recipeName,
  author: '小熊头',
  introduction:
    'Sharma Jain: So satisfying!! Made it as it is, turned out supe…，好吃真好吃，好吃真好吃好吃真好吃好吃真好吃',
  ingredients: [
    {
      id: 'shredded-pork',
      name: '猪肉丝',
      quantity: '200克'
    },
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
    },
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
  ], // 食材
  cookware: [
    {
      id: 'wok',
      name: '万能的炒锅'
    }
  ],
  cookingMethods: [
    {
      id: 'stew',
      name: '炖'
    }
  ], // 烹饪方式
  cookingProcess: [
    {
      image: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg',
      text: '准备好所有食材',
    },
    {
      image: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg',
      text: '平底锅内放入一勺食用油。在油微热之后，将饺子放入锅中',
    },
    {
      image: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg',
      text: '中小火加热，将饺子底部煎至颜色微微发黄',
    },
    {
      image: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg',
      text: '倒入适量清水，水量需要没过饺子三分之一的位置',
    },
    {
      image: 'https://cook-recipe-1315803049.cos.ap-nanjing.myqcloud.com/images%2Ftest%2FWechatIMG377.jpeg',
      text: '盖上锅盖，中火继续焖煮',
    }
  ],
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

onMounted(()=> {
  document.title = recipeName.value;
})
</script>

<style lang="less" scoped></style>
