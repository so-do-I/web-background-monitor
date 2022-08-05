import { history, useModel } from '@umijs/max';
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';

const Login: React.FC = () => {
  const { setInitialState } = useModel('@@initialState');
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setInitialState({
      isLogin: true,
      user: values,
    });
    setTimeout(() => {
      history.push('/');
    }, 100);
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

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 10, span: 8 }}
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
              <Button type="primary" htmlType="submit">
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
