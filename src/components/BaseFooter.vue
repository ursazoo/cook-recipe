<template>
  <div class="relative min-h-[100px] flex align-middle justify-between pt-2.5 bg-white shadow-lg text-[#4a4a4a] xs:border xs:border-solid xs:border-[#f0f0f0]">
    <div class="container h-full mx-auto">
      <div class="flex align-top">
        <div class="basis-2/3 mr-2.5">
          <div class="my-2.5 font-semibold">关于我</div>
          <div class="mb-1">在 Cookpad，我們的使命是 天天享受烹飪趣！因為我們相信，烹飪能讓人們、社群以及地球更快樂且健康。我們的服務讓全世界的廚友透過分享食譜與下廚秘訣幫助彼此。</div>
          <div class="my-2.5 font-semibold">关于cook recipe</div>
          <div class="mb-1">在 Cookpad，我們的使命是 天天享受烹飪趣！因為我們相信，烹飪能讓人們、社群以及地球更快樂且健康。我們的服務讓全世界的廚友透過分享食譜與下廚秘訣幫助彼此。</div>
        </div>
        <div class="basis-1/3 text-center ml-2.5 py-2.5">
          <div class="link">github.</div>
          <div class="link">bilibili.</div>
          <div class="link">juejin.</div>
        </div>
      </div>
      <div class="mt-2.5 text-center">
        <div>Copyright©ursazoo保留所有權利</div>
        <a class="text-xs text-center" href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023019487号</a>
      </div>

      <img alt="" class="w-1/3 xs:w-full mx-auto mt-4" src="@/assets/images/shared/foot.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
function handleOpenWindow() {
  window.open()
}
</script>

<style lang="less" scoped>

</style>
