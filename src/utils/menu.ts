/** 处理菜单数据 */
export const treeMenuData = (menus: Omit<Menu, 'children'>[], pid: number = 0): Menu[] => {
  // Omit<Menu, 'children'>[]  Omit是TS提供的剔除某一属性的方法
  return menus
    .filter((menu) => menu.pid === pid)
    .map((menu) => {
      const children = treeMenuData(menus, menu.id);
      return children.length ? { ...menu, children } : menu;
    });
};
