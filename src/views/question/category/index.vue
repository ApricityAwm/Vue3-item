<script setup lang="ts">
// 在子组件中通过defineExpose将自己的方法导出暴露，后再父组件中先将子组件导入再用ref的方式导入相关方法
import Table from '@/components/table/index.vue';
import Modal from '@/components/modal/index.vue';

import { pageName, columns, searchForm, title, modalForm } from './config';

import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

onMounted(() => appStore.initCategorAction());

const category = computed(() => appStore.category);

searchForm.formItem.forEach((el) => {
  if (el.field === 'id') {
    el.options = category.value.map(({ name, id }) => ({ label: name, value: id }));
  }
});

/** 获取Table组件的实例导出的方法 */
const tableRef = ref<InstanceType<typeof Table>>();

/** 获取Modal组件的实例 */
const modalRef = ref<InstanceType<typeof Modal>>();

/** 条件查询与重置查询共用一个子向父传值的事件 */
const searchClick = (where: any) => {
  tableRef.value?.query({ where });
};

/** 展示模态框 */
const showModal = (data: any) => modalRef.value?.showModal(data); // 调用子组件暴露出的方法

/** 隐藏模态框 */
// const hiddenModal = () => modalRef.value?.hiddenModal();

/** 点击新增或修改 */
const okClick = (model: any) => tableRef.value?.editOrSave(model);
</script>

<template>
  <el-card :header="`${title}管理`">
    <SearchForm :form="searchForm" @search-click="searchClick" />
    <el-divider />
    <Table ref="tableRef" :columns="columns" :pageName="pageName" @show-modal="showModal"> </Table>
    <Modal ref="modalRef" :form="modalForm" :title="title" @ok-click="okClick" />
  </el-card>
</template>

<style scoped></style>
