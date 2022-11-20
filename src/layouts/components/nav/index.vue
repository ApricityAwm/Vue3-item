<script setup lang="ts">
import { useFullscreen, useDark, useToggle } from '@vueuse/core';

import { useLoginStore } from '@/stores/login';

// useFullscreen从插件中导出判断是否是全屏的方法 绑定使用
const { toggle } = useFullscreen();

// 控制是否为暗黑模式
const isDark = useDark();
const toggleDark = useToggle(isDark);

const { userInfo, logoutAction } = useLoginStore();
</script>

<template>
  <div class="w-full h-full flex items-center justify-end">
    <el-button icon="search" circle></el-button>
    <el-button icon="fullScreen" circle @click="toggle"></el-button>
    <el-button :icon="isDark ? 'sunny' : 'moon'" circle @click="toggleDark()"></el-button>

    <el-button icon="setting" circle></el-button>
    <el-dropdown class="ml-3">
      <span class="el-dropdown-link">
        <el-avatar :size="32" :src="userInfo.avatar" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="user">个人信息</el-dropdown-item>
          <el-dropdown-item icon="switchButton" @click="logoutAction">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped></style>
