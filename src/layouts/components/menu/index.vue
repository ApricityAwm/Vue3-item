<script setup lang="ts">
import { useAppStore } from '@/stores/app';

// withDefaults TS中放默认值的  defineProps 接收参数的 后跟指定接受参数类型
withDefaults(defineProps<{ collapse: boolean }>(), { collapse: false });

const appStore = useAppStore();

const menus = computed(() => appStore.menus);
</script>

<template>
  <el-menu default-active="1-0" class="menu" :collapse="collapse" router>
    <template v-for="(item, index) in menus" :key="item.id">
      <el-sub-menu :index="`${index}`">
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <template v-for="(menu, idx) in item.children" :key="menu.id">
          <el-menu-item :index="`${item.id}-${idx}`" :route="{ name: menu.name }">
            <span class="ml-[10px]">{{ menu.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped>
.menu {
  border-right: 0;
}
</style>
