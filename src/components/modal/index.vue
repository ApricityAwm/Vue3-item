<script setup lang="ts">
const props = defineProps<{ form: Form; title: string }>();

const emit = defineEmits(['ok-click']);

/** 根据表单选项获取原始数据 */
const rawData = Object.fromEntries(props.form.formItem.map(({ field }) => [field, undefined]));
const model = ref(rawData);

const visible = ref(false);

/** 展示模态框 */
const showModal = (data: any) => {
  visible.value = true;
  model.value = { ...data };
};

/** 隐藏模态框 */
const hiddenModal = () => (visible.value = false);

/** 点击确定添加或修改 */
const handleOk = () => emit('ok-click', { ...model.value });
// 将展示和隐藏模态框的方法导出
defineExpose({ showModal, hiddenModal });
</script>

<template>
  <el-dialog
    v-model="visible"
    :title="model.id ? '修改' + title : '新增' + title"
    width="30%"
    center
    align-center
    destroy-on-close
  >
    <Form v-bind="form" v-model="model" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleOk">确认</el-button>
        <el-button type="primary" @click="visible = false">取消 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
