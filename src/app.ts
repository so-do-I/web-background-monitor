// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import { RunTimeLayoutConfig } from '@umijs/max';
import { history } from 'umi';

interface userState {
  isLogin: boolean;
  user: userInfo | null;
}
interface userInfo {
  name: string;
  rightId: number;
}

export async function getInitialState(): Promise<userState> {
  let userState: userState = {
    isLogin: true,
    user: null,
  };
  return userState;
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    onPageChange: () => {
      if (!initialState?.isLogin) {
        history.push('/login');
      }
    },
    // rightContentRender: () => {
    //   return <TopHeader />
    // }
  };
};
