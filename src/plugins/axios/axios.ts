import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { ElNotification, ElLoading } from 'element-plus';
import { useLoginStore } from '@/stores/login';

type Result<T = any> = {
  code: number;
  message: string;
  data?: T;
  statusCode?: number;
};

export class Axios {
  /**axios  实例  创建出的axios对象*/
  private axiosIntance: AxiosInstance;
  private loadingInstance: typeof ElLoading | any;

  constructor(config: AxiosRequestConfig) {
    this.axiosIntance = axios.create(config);

    this.requstInterceptor();
    this.responseInterceptor();
  }

  /** 请求拦截器 */
  private requstInterceptor() {
    this.axiosIntance.interceptors.request.use(
      (config) => {
        // 请求拦截
        this.loadingInstance = ElLoading.service();
        // 配置token
        const { token } = useLoginStore();
        config.headers!.Authorization = token;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  /** 响应拦截器 */
  private responseInterceptor() {
    this.axiosIntance.interceptors.response.use(
      (response: AxiosResponse) => {
        return this.handleResponse(response.data);
      },
      (error: any) => {
        return this.handleResponse(error.response!.data); // ！确定有值
      }
    );
  }
  /** 状态码的及数据的处理 */
  private handleResponse(
    data: Result
  ): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | any {
    const { code, message, data: dataAxios, statusCode } = data;

    // 关闭loading
    this.loadingInstance.close();
    if (code === 200) {
      // message有值的弹窗提示
      if (message) ElNotification({ message, type: 'success', showClose: false });
      return dataAxios;
    }

    // const 定义的变量无法更改值  所以须用let定义一个并将message重新复赋值
    let msg = '';

    switch (code || statusCode) {
      case 400:
        msg = message || '请求错误';
        break;
      case 401:
        msg = message || '未授权，请重新登录';
        break;
      case 403:
        msg = message || '拒绝访问';
        break;
      case 500:
        msg = '服务器错误';
        break;
      default:
        msg = message || '未知错误';
        break;
    }
    ElNotification({ message: msg, type: 'error', showClose: false });
  }
  /** request 请求 */
  private request<T = any>(config: AxiosRequestConfig) {
    return this.axiosIntance.request<T, T>(config);
  }

  /** get 请求 */
  get<T = any>(config?: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' });
  }
  /** post 请求 */
  post<T = any>(config?: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' });
  }
  /** delete 请求 */
  delete<T = any>(config?: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  /** patch 请求 */
  patch<T = any>(config?: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' });
  }
  /** 图片上传 */
  upload<T = any>(config?: AxiosRequestConfig) {
    // 转换为表单数据
    const formData = new FormData();
    for (const key in config?.data) {
      formData.set(key, config?.data[key]);
    }

    return this.request<T>({
      ...config,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    });
  }
}
