<template>
  <div class="base-footer-container">
    <div class="content-container">
      <div class="info-container">
        <div class="about-container">
          <div class="about-title">关于我</div>
          <div class="about-text">在 Cookpad，我們的使命是 天天享受烹飪趣！因為我們相信，烹飪能讓人們、社群以及地球更快樂且健康。我們的服務讓全世界的廚友透過分享食譜與下廚秘訣幫助彼此。</div>
          <div class="about-title">关于cook recipe</div>
          <div class="about-text">在 Cookpad，我們的使命是 天天享受烹飪趣！因為我們相信，烹飪能讓人們、社群以及地球更快樂且健康。我們的服務讓全世界的廚友透過分享食譜與下廚秘訣幫助彼此。</div>
        </div>
        <div class="links-container">
          <div class="link">github.</div>
          <div class="link">bilibili.</div>
          <div class="link">juejin.</div>
        </div>
      </div>
      <div class="copyright">Copyright © ursazoo. 保留所有權利</div>
      <img alt="foot-image" class="foot-image" src="@/assets/images/shared/foot.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>

.base-footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: 100px;
  padding: 10px 20px 70px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,.1);
  .flex;
  .align-center;
  .justify-between;
  color: @textColor;
}

.content-container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  .copyright {
    margin-top: 10px;
    text-align: center;
  }
  .foot-image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
  }
}

.info-container {
  .flex;
  .align-top;
}

.about-container {
  flex: 7;
  margin-right: 10px;

  .about-title {
    margin: 10px 0;
    font-weight: 600;
  }
  .about-text {
    margin-bottom: 5px;
  }
}

.links-container {
  flex: 3;
  text-align: center;
  margin-left: 10px;
}
</style>