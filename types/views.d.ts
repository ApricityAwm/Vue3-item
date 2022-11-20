/** 表格类型 */
declare type Column = {
  /** key */
  prop: string;
  /** 表格标题 */
  label: string;
  /** 表格宽度 */
  width?: string;
  /** 单元格内容对齐方式 */
  align?: 'left' | 'center' | 'right';
  /** 插槽名称 */
  slotName?: string;
};

/** 表单类型 */
declare type FormItem = {
  /** 标题 */
  label: string;
  /** label的宽度 */
  labelWidth?: string | number;
  /** 每个输入框的key值 */
  field: string;
  /** 表单控件类型 */
  type: 'input' | 'select' | 'date' | 'upload' | 'rate';
  /** 控件提示 */
  placeholder?: string;
  // options?: string[];
  options?:
    | {
        label: string;
        value: string | number;
      }[]
    | string[];
};

/** 表单为栅格布局，Layout定义栅格布局的憨占比 */
declare type Layout = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

/** 总表单 */
declare type Form = {
  formItem: FormItem[];
  /** 布局选项 */
  layout?: Layout;
  labelPosition?: 'left' | 'right' | 'top';
  labelWidth?: number;
};
