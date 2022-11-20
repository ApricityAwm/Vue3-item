<script setup lang="ts">
// 折叠
const collapse = ref(false);
// 宽度
const asideWidth = ref('200px');

/** 折叠菜单 */
const handleCollapse = () => {
  collapse.value = !collapse.value;
  asideWidth.value = collapse.value ? '65px' : '200px';
};

onMounted(() => {
  // 挂载前判断一次
  collapse.value = innerWidth <= 1200;
  asideWidth.value = collapse.value ? '65px' : '200px';
  /** 监听当前页面的宽度 */
  window.addEventListener('resize', () => {
    collapse.value = innerWidth <= 1200;
    asideWidth.value = collapse.value ? '65px' : '200px';
  });
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <aside class="aside">
        <Logo :collapse="collapse" />
        <Menu :collapse="collapse" />
        <el-button
          circle
          class="collapse-btn"
          size="small"
          :icon="collapse ? 'arrow-right' : 'arrow-left'"
          @click="handleCollapse"
        />
      </aside>
      <el-container>
        <el-header class="header">
          <Nav />
        </el-header>
        <el-main class="main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.aside {
  @apply w-[v-bind(asideWidth)] h-screen relative;
  border-right: solid 1px var(--el-menu-border-color);
  transition: all var(--el-transition-duration);
}
.collapse-btn {
  background: var(--el-bg-color);
  @apply absolute -right-3 top-1/2 z-50;
}
.header {
  border-bottom: solid 1px var(--el-menu-border-color);
}
.main {
  height: 0;
  overflow-y: scroll;
}
.main::-webkit-scrollbar {
  display: none;
}
</style>
