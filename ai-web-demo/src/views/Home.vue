<script setup lang="ts">

</script>
<template>
<div class="home-page">
  <RouterLink class="docs-icons" to="/doc">
    <svg t="1727407425077" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5157" width="200" height="200"><path d="M96 1024V0h448v384h384v640H96z m96-256a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-96a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v96z m160-416a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-96z m128 160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-96z m0 320a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-96z" fill="#3CC451" p-id="5158"></path><path d="M608 0l320 320H608V0z" fill="#B0E7B8" p-id="5159"></path></svg>
    <div class="docs-text">
      文档
    </div>
  </RouterLink>
</div>
</template>
<style scoped lang="less">
.home-page {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  .docs-icons {
    display: inline-block;
    padding: 20px 30px 10px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
    // box-shadow: 1px 2px red;
    &:hover {
      box-shadow: 0 2px 7px rgba(55, 84, 104, 0.35);
      background-color: lighten(rgb(60, 196, 81), 40%);
    }
    svg {
      width: 100px;
      height: 100px;
    }
    .docs-text {
      text-align: center;
    }
  }
}
</style>
