import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
}
const { Header } = Layout;

// 脚手架示例组件
const TopHeader: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { name } = props;
  const menu = (
    <Menu>
      <Menu.Item>{/* {roleName} */}超级管理员</Menu.Item>

      <Menu.Item
        danger
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
      >
        退出
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      <div style={{ float: 'right' }}>
        <span>
          欢迎<span style={{ color: '#1890ff' }}>{name}</span>回来
        </span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default TopHeader;
