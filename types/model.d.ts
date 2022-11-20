// 全局类型声明
declare type User = {
  id: number;
  account: string;
  password: string;
  nickName: string;
  avatar: string;
  gender: number;
  createAt: Date;
};

declare type Menu = {
  id: number;
  name: string;
  title: string;
  url: string;
  pid: number;
  icon: string;
  createAt: Date;
  updateAt: Date;
  children?: Menu[];
};

declare type Category = {
  id: number;
  name: string;
  image: string;
  createAt: Date;
  updateAt: Date;
};

declare type Problem = {
  id: number;
  name: string;
  answer: string;
  difficulty: number;
  createAt: Date;
  updateAt: Date;
  category: Category;
};

declare type QueryParams = {
  page?: number;
  take?: number;
  where?: Object | string;
};
