import { PageContainer } from '@ant-design/pro-components';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { request } from 'umi';

interface DataType {
  id: number;
  fp: string;
  fcp: string;
  lcp: string;
  fmp: string;
  dcl: string;
  l: string;
  tti: string;
  fid: string;
}

const Page: React.FC = () => {
  const [dataSource, setdataSource] = useState<DataType[]>([]);

  useEffect(() => {
    async function getData() {
      let res = await request(
        'https://mock.apifox.cn/m1/1411666-0-default/api/pages/performance',
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
      title: '首次绘制',
      dataIndex: 'fp',
      key: 'fp',
      render: (fp) => <p>{fp}</p>,
    },
    {
      title: '首次内容绘制',
      dataIndex: 'fcp',
      key: 'fcp',
      render: (fcp) => <p>{fcp}</p>,
    },
    {
      title: '最大内容渲染',
      dataIndex: 'lcp',
      key: 'lcp',
      render: (lcp) => <p>{lcp}</p>,
    },
    {
      title: '首次有效绘制',
      dataIndex: 'fmp',
      key: 'fmp',
      render: (fmp) => <p>{fmp}</p>,
    },
    {
      title: '文档内容全部载入',
      dataIndex: 'dcl',
      key: 'dcl',
      render: (dcl) => <p>{dcl}</p>,
    },
    {
      title: '依赖资源全部载入',
      dataIndex: 'l',
      key: 'l',
      render: (l) => <p>{l}</p>,
    },
    {
      title: '可交互时间',
      dataIndex: 'tti',
      key: 'tti',
      render: (tti) => <p>{tti}</p>,
    },
    {
      title: '首次输入延迟',
      dataIndex: 'fid',
      key: 'fid',
      render: (fid) => <p>{fid}</p>,
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

export default Page;
