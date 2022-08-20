import { ExclamationCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Form, Input, Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { request } from 'umi';

const { confirm } = Modal;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface DataType {
  name: string;
}

const Manager: React.FC = () => {
  const [form] = Form.useForm();
  const { initialState } = useModel('@@initialState');
  const [dataSource, setdataSource] = useState<DataType[]>([]);

  //获取其他用户名
  useEffect(() => {
    async function getOtherAdmin(username: string) {
      let res = await request(
        `https://mock.apifox.cn/m1/1411666-0-default/api/admin/show-all-account?admin_name=${username}`,
      );
      setdataSource(res.data);
    }
    getOtherAdmin(initialState!.username!);
  }, []);

  //删除用户
  const deleteMethod = async (item: any) => {
    await request(
      `https://mock.apifox.cn/m1/1411666-0-default/api/admin/delete?user_name=${item.name}`,
      {
        method: 'delete',
      },
    );
    setdataSource(dataSource.filter((val) => val.name !== item.name));
  };

  const confirmMethod = (item: any) => {
    confirm({
      title: '您确定要进行删除操作吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        deleteMethod(item);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '账户名',
      dataIndex: 'name',
      key: 'username',
      render: (username) => <a>{username}</a>,
    },
    {
      title: '操作',
      key: 'action',
      render: (item) => {
        return (
          <div>
            <Button onClick={() => confirmMethod(item)}>删除</Button>
          </div>
        );
      },
    },
  ];

  //创建用户
  const onFinish = async (values: any) => {
    await request(
      'https://mock.apifox.cn/m1/1411666-0-default/api/admin/create',
      {
        method: 'post',
        data: {
          user_name: values.username,
          password: values.password,
        },
      },
    );
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <PageContainer
      ghost
      header={{
        title: '账户管理',
      }}
      style={{ minHeight: '88vh' }}
    >
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="username"
          label="账户名称"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="账户密码"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            创建账户
          </Button>
          <Button htmlType="button" onClick={onReset}>
            清空输入
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
    </PageContainer>
  );
};

export default Manager;
