import { history, useModel } from '@umijs/max';
import { Button, Card, Col, Form, Input, notification, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { request } from 'umi';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //判断是否登录决定是否跳转至登录页
  useEffect(() => {
    if (initialState?.isLogin) {
      history.push('/view-presentation');
    }
  }, [initialState]);

  //登录失败提示
  const openNotification = () => {
    notification.open({
      message: '登录失败',
      description: '用户名或密码错误，请重试！',
    });
  };

  //提交用户名与密码的逻辑
  const onFinish = async (values: any) => {
    setIsLoading(true);
    let res = await request(
      'https://mock.apifox.cn/m1/1411666-0-default/api/admin/login',
      {
        method: 'post',
        data: {
          user_name: values.username,
          password: values.password,
        },
      },
    );
    setIsLoading(false);
    //根据返回信息设置登录信息
    if (res.loginSuccess) {
      // if (1) {
      setInitialState({
        isLogin: true,
        username: values.username,
      });
    } else {
      openNotification();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row align="middle" style={{ height: '100vh', background: '#f6f6f6' }}>
      <Col span={6} offset={9}>
        <Card title="请登录">
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
