<script setup lang="ts">
import { genFileId } from 'element-plus';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';

const props = withDefaults(
  defineProps<{
    formItem: FormItem[];
    modelValue: any;
    layout: Layout;
    labelWidth: number;
    labelPosition?: 'left' | 'right' | 'top';
  }>(),
  {
    formItem: () => [],
    layout: () => ({ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }),
    labelWidth: () => 70,
    labelPosition: () => 'right',
  }
);

/** 自定义事件类型 */
const emit = defineEmits(['update:modelValue']);
// 将modelValue转换为响应式数据
const model = ref({ ...props.modelValue });

/** 监听model的值并重新赋值 */
watchEffect(() => emit('update:modelValue', { ...model.value }));

const fileList = ref([]);

/** 上传文件组件的实例 */
const upload = ref<UploadInstance>();
/** 替换上一次 */
const handleExceed: UploadProps['onExceed'] = (files) => {
  fileList.value = [];
  console.log(files);

  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};
</script>

<template>
  <el-form :label-position="labelPosition" :model="modelValue" :label-width="labelWidth">
    <el-row :gutter="30">
      <template v-for="item in formItem" :key="item.field">
        <el-col v-bind="layout">
          <el-form-item :label="item.label">
            <template v-if="item.type === 'input'">
              <el-input :placeholder="item.placeholder" v-model="model[item.field]"></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                style="width: 100%"
                :placeholder="item.placeholder"
                v-model="model[item.field]"
              >
                <template v-for="option in item.options" :key="option.label">
                  <el-option v-bind="option"></el-option>
                </template>
              </el-select>
            </template>
            <template v-if="item.type === 'date'">
              <el-date-picker
                type="daterange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                v-model="model[item.field]"
              />
            </template>
            <template v-if="item.type === 'rate'">
              <el-rate
                size="small"
                allow-half
                v-model="model[item.field]"
                :show-text="item.options?.toString()"
                :texts="item.options"
              />
            </template>
            <template v-if="item.type === 'upload'">
              <el-upload
                class="w-full"
                action="http://localhost:3000/upload/image"
                list-type="picture-card"
                name="image"
                :limit="1"
                :on-exceed="handleExceed"
                v-model:file-list="fileList"
              >
                <el-icon><Plus /></el-icon>
              </el-upload>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<style scoped></style>
