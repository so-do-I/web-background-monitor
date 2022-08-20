import { PoweroffOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Dropdown, Menu, Space } from 'antd';
import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  useEffect(() => {
    //退出登录，清空存储并跳转至登录页面
    if (!initialState?.isLogin) {
      localStorage.removeItem('userInfo');
      sessionStorage.removeItem('userInfo');
      history.push('/login');
    }
  }, [initialState]);

  const handleMenuClick: MenuProps['onClick'] = () => {
    setInitialState({
      isLogin: false,
      username: null,
    });
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '退出',
          key: '1',
          icon: <PoweroffOutlined />,
        },
      ]}
    />
  );
  return (
    <Space wrap>
      <Dropdown.Button overlay={menu}>
        {initialState!.isLogin ? initialState!.username : ''}
      </Dropdown.Button>
    </Space>
  );
};

export default Footer;
