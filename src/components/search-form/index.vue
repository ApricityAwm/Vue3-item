<script setup lang="ts">
/** 接收父组件传过来的值 并将其保存起来 */
const props = defineProps<{ form: Form }>();
/** 自定义事件类型  向父组件传值 */
const emit = defineEmits(['search-click']);

/** 根据表单选项获取原始数据 */
const rawData = Object.fromEntries(props.form.formItem.map(({ field }) => [field, undefined]));

/** 将原始数据转换为响应式数据 */
const model = ref(rawData);

/** 重置查询数据 */
const handleReset = () => {
  model.value = {};

  // emit('reset-click');
  emit('search-click', {});
};

/** 条件查询 */
const handleSearch = () => {
  // 提交自定义事件类型， 后跟提交携带的数据
  emit('search-click', { ...model.value });
};
</script>

<template>
  <Form v-bind="form" v-model="model"></Form>
  <div class="flex justify-end">
    <el-button type="" icon="search" size="small" @click="handleSearch">查询</el-button>
    <el-button type="primary" icon="refresh" size="small" @click="handleReset">重置</el-button>
  </div>
</template>

<style scoped></style>
