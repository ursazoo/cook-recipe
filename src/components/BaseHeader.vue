<template>
  <div class="base-header-container">
    <div>图标</div>
    <div class="action-container">
      <div>登录/注册</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>

.base-header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,.1);
  .flex;
  .align-center;
  .justify-between;
  color: @textColor;
}
</style>