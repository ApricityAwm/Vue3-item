import { useLoginStore } from '@/stores/login'; // 导入pinia中保存的用户信息方法
import type { FormRules, FormInstance } from 'element-plus';

export default function useLogin() {
  const loginStore = useLoginStore(); // 使用pinia的方法

  /** 登录用户的信息 */
  const loginInfo = ref({ account: '', password: '' }); // 定义用户信息

  /** 标记组件/标识登录表单 */
  const loginRef = ref<FormInstance>();

  // 登录  loginInfo.value为ref响应式对象  pinia用普通即可 所以需结构 将loginInfo传入store中保存
  const handleLogin = async () => {
    // 在登陆之前先进行表单校验
    const valid = await loginRef.value?.validate();
    if (!valid) return;
    await loginStore.loginAction({ ...loginInfo.value });
  };

  /** 登录表单提交的校验规则 */
  const loginRule: FormRules = {
    account: [
      { required: true, message: '账号不能为空', trigger: 'blur' },
      { min: 5, max: 10, message: '长度在6到1个字符', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 6, max: 16, message: '长度在6到1个字符', trigger: 'blur' },
    ],
  };
  return { loginInfo, loginRule, loginRef, handleLogin };
}
