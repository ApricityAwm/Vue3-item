import { useBaseStore } from '@/stores/base';

export default function useTable(pageName: string) {
  /** 当前分页的页码数 */
  const page = ref(1);

  /** 一页展示的数量   分页数量 */
  const pageSize = ref(10);

  /** 查询条件，当查询时对其赋值，重置时清空 */
  let where: string | Object | undefined = undefined;

  const store = useBaseStore();

  /** 表格数据 */
  const data = computed(() => store[pageName]);

  /** 表格数据数量 */
  const total = computed(() => store[`${pageName}Count`]);

  /** 查询 */
  const query = (queryParams?: QueryParams) => {
    where = queryParams?.where;
    store.findAllAction(pageName, queryParams);
  };

  /** 删除时间==事件 */
  const del = async (id: number | number[]) => {
    await store.delAction(pageName, id);
    await store.findAllAction(pageName, { page: page.value, take: pageSize.value, where });
  };

  /** 修改或新增 */
  const editOrSave = (model: any) => {
    console.log(model);
  };

  /** 在挂在前将父组件传过来的页面名称传给pinia，后再通过pinia将页面名称传给其调用的findAll()请求方法，通过传入的页面来定义url，从而拿到不同页面的数据，大大增加了组件的复用性  */
  onMounted(() => query());

  /** 侦听页码数和分页数量的变化 */
  watchEffect(() => query({ page: page.value, take: pageSize.value, where }));

  return { data, total, page, pageSize, query, del, editOrSave };
}
