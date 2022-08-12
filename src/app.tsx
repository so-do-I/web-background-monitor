// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import { RunTimeLayoutConfig } from '@umijs/max';
import { history } from 'umi';
import TopHeader from '../src/components/TopHeader/TopHeader';

//登录状态
interface userState {
  isLogin: boolean;
  username: string | null;
}

//设置初始登录状态
export async function getInitialState(): Promise<userState> {
  let userState: userState = {
    // isLogin: true,
    //   username: 'admin',
    isLogin: false,
    username: null,
  };
  return userState;
}

//layout布局设置
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    //未登录则跳转至login页面
    onPageChange: () => {
      if (!initialState!.isLogin) {
        history.push('/login');
      }
    },
    rightContentRender: () => {
      return <TopHeader />;
    },
    layout: 'mix',
    contentWidth: 'Fluid',
  };
};