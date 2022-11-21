<script setup lang="ts">
import type { UploadUserFile } from 'element-plus';
import { uploadImage } from '@/api';

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

// 环境变量中定义的文件上传地址  从中结构
const { VITE_UPLOAD_IMAGE_NAME } = import.meta.env;

/** 文件列表      回显数据 即回显图片*/
const fileList = ref<UploadUserFile[]>(
  // 三元运算判断url是否为空 有则回显数据即图片路径 否则不显示
  props.modelValue[VITE_UPLOAD_IMAGE_NAME as string]
    ? [{ name: Date.now() + '', url: props.modelValue[VITE_UPLOAD_IMAGE_NAME as string] }]
    : []
);

const handleUpLoad = async (file: any, field: string) => {
  // 将获取到的文件数据uploadFile.raw  赋值给key [field]
  const data = await uploadImage({ [field]: file });
  // 将获取到的data赋给文件列表
  fileList.value = [data];
  // 拿到最终数据
  model.value = { ...model.value, [field]: data.url };
  // uploadImage({[]})
};
</script>

<template>
  {{ model }}
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
                list-type="picture-card"
                ref="uploadRef"
                :limit="1"
                :auto-upload="false"
                :on-change="( file: any) => handleUpLoad(file.raw!, item.field)"
                :on-exceed="( [file]: any) => handleUpLoad(file, item.field)"
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
