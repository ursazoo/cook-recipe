<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="wow-text">wow!</div>
  </div>
</template>

<style lang="less" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.wow-text {
  color: red;
}
</style>