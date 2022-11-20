<script setup lang="ts">
/** 组件父传子得到父组件传来的表格列数据 */
withDefaults(defineProps<{ data: any[]; columns: Column[] }>(), {
  data: () => [],
  columns: () => [] as Column[],
});
</script>

<template>
  <div class="flex justify-between mb-4">
    <slot name="header"></slot>
  </div>

  <el-table :data="data" border style="width: 100%" size="small">
    <template v-for="item in columns" :key="item.prop">
      <template v-if="item.slotName">
        <el-table-column align="center" v-bind="item">
          <template #default="{ row }">
            <slot :name="item.slotName" :data="row">{{ row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>

      <template v-else>
        <el-table-column align="center" v-bind="item"></el-table-column>
      </template>
    </template>
  </el-table>

  <div class="flex justify-center my-4">
    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
