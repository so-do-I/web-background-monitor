import { PageContainer } from '@ant-design/pro-components';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { request } from 'umi';

interface DataType {
  id: number;
  redirect_time: string;
  dns_time: string;
  tcp_time: string;
  ssl_time: string;
  ttfb_time: string;
  data_trans_time: string;
  resource_load_time: string;
  interface_info: string;
}

const Web: React.FC = () => {
  const [dataSource, setdataSource] = useState<DataType[]>([]);

  useEffect(() => {
    async function getData() {
      let res = await request(
        'https://mock.apifox.cn/m1/1411666-0-default/api/web/time-comsumption',
      );
      setdataSource(res.data);
    }
    getData();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <p>{id}</p>,
    },
    {
      title: '重定向耗时',
      dataIndex: 'redirect_time',
      key: 'redirect_time',
      render: (redirect_time) => <p>{redirect_time}</p>,
    },
    {
      title: 'dns耗时',
      dataIndex: 'dns_time',
      key: 'dns_time',
      render: (dns_time) => <p>{dns_time}</p>,
    },
    {
      title: 'tcp耗时',
      dataIndex: 'tcp_time',
      key: 'tcp_time',
      render: (tcp_time) => <p>{tcp_time}</p>,
    },
    {
      title: 'ssl耗时',
      dataIndex: 'ssl_time',
      key: 'ssl_time',
      render: (ssl_time) => <p>{ssl_time}</p>,
    },
    {
      title: 'ttfb耗时',
      dataIndex: 'ttfb_time',
      key: 'ttfb_time',
      render: (ttfb_time) => <p>{ttfb_time}</p>,
    },
    {
      title: '数据传输耗时',
      dataIndex: 'data_trans_time',
      key: 'data_trans_time',
      render: (data_trans_time) => <p>{data_trans_time}</p>,
    },
    {
      title: '资源加载耗时',
      dataIndex: 'resource_load_time',
      key: 'resource_load_time',
      render: (resource_load_time) => <p>{resource_load_time}</p>,
    },
    {
      title: '接口信息',
      dataIndex: 'interface_info',
      key: 'interface_info',
      render: (interface_info) => <p>{interface_info}</p>,
    },
  ];

  return (
    <PageContainer
      ghost
      header={{
        title: '网络性能',
      }}
      style={{ minHeight: '88vh' }}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
      />
    </PageContainer>
  );
};

export default Web;
