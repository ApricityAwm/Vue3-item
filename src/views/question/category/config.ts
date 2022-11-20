const title = '分类';

/** 要渲染的不同页面名称 */
const pageName = 'category';

/** 表格列的相关数据 */
const columns: Column[] = [
  {
    prop: 'id',
    label: 'id',
    width: '180',
    align: 'center',
  },
  {
    prop: 'name',
    label: '名称 ',
    width: '180',
  },
  {
    prop: 'image',
    label: '图标',
    slotName: 'image',
  },
  {
    prop: 'createAt',
    label: '新增时间',
    slotName: 'createAt',
  },
  {
    prop: 'updateAt',
    label: '修改时间',
    slotName: 'updateAt',
  },
  {
    prop: 'id',
    label: '操作',
    slotName: 'handler',
    width: '130',
  },
];

/** 搜索表单 */
const searchForm: Form = {
  formItem: [
    {
      label: '分类名称',
      field: 'id',
      type: 'select',
      placeholder: '请选择分类名称',
      options: [],
    },
    {
      label: '新增时间',
      field: 'createAt',
      type: 'date',
    },
    // {
    //   label: '难度',
    //   labelWidth: '80',
    //   field: 'diff',
    //   type: 'rate',
    //   options: ['简单', '普通', '一般', '困难', '炼狱'],
    // },
  ],
  labelWidth: 100,
  layout: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 8,
  },
};

/** 模态框表单 */
const modalForm: Form = {
  formItem: [
    {
      label: '分类名称',
      field: 'name',
      type: 'input',
      placeholder: '请输入分类名称',
    },
    {
      label: '图标',
      field: 'image',
      type: 'upload',
    },
  ],
  labelWidth: 80,
  layout: {},
};

export { pageName, columns, searchForm, title, modalForm };
