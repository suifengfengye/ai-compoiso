<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'

const size = 'default'
const zIndex = 3000
console.log('@@@@权限问题测试')
</script>

<template>
  <div class="home">
    <el-config-provider :size="size" :z-index="zIndex">
      <RouterView />
    </el-config-provider>
  </div>
</template>

<style scoped>
.home {
  /* padding: 24px 0; */
  background-color: #ccc;
}
</style>
