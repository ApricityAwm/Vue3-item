<script setup lang="ts">
import useTable from '@/hooks/uesTable'; // 导入useTable从中解构出data表格数据, total表格数量, page分页页码数, pageSize当前分页的数量

const emit = defineEmits(['show-modal']);

/** 组件父传子得到父组件传来的表格列数据和页面名称 */
const props = withDefaults(defineProps<{ columns: Column[]; pageName: string }>(), {
  columns: () => [],
});

const { data, total, page, pageSize, query, del, editOrSave } = useTable(props.pageName);

const addClick = () => emit('show-modal');
const editClick = (data: any) => emit('show-modal', data);

// 将query暴露出去  后父组件就可通过ref调用此方法
defineExpose({ query, editOrSave });
</script>

<template>
  <TableBase :data="data" :columns="columns">
    <template #header>
      <div>
        <el-button type="primary" icon="plus" plain size="small" @click="addClick">新增</el-button>
        <el-button type="info" icon="upload" plain size="small">批量导入</el-button>
      </div>
      <div>
        <el-button type="info" icon="download" plain size="small">下载</el-button>
        <el-button type="danger" icon="delete" plain size="small">删除</el-button>
      </div>
    </template>

    <template #image="{ data }">
      <el-image
        fit="cover"
        style="width: 25px; height: 25px"
        :src="data.image"
        :initial-index="0"
        :preview-src-list="[data.image]"
      />
    </template>

    <template #createAt="{ data }">
      <span v-time="data.createAt"></span>
    </template>
    <template #updateAt="{ data }">
      <span v-time="data.updateAt"></span>
    </template>

    <template #handler="{ data }">
      <el-button icon="edit" text size="small" type="primary" @click="editClick(data)"></el-button>
      <el-button icon="delete" text size="small" type="danger" @click="del(data.id)"></el-button>
    </template>

    <template #footer>
      <el-pagination
        background
        small
        layout="total, sizes, prev, pager, next, jumper"
        v-model:current-page="page"
        v-model:page-size="pageSize"
        :total="total"
        :page-sizes="[10, 20, 30, 40]"
      />
    </template>
  </TableBase>
</template>
