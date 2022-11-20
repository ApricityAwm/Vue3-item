import http from '@/plugins/axios';

/** 查询表格全部数据 */
export const findAll = (url: string, params: QueryParams) => {
  return http.get({ url, params });
};

/** 删除表格某一条数据 */
export const del = (url: string, data: { id: number | number[] }) => {
  return http.delete({ url, data });
};

/** 图片上传 */
export const uploadImage = (data: any) => {
  return http.upload({ url: '/upload/image', data });
};
