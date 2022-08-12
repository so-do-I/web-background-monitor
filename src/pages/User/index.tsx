import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { request } from 'umi';

interface DataType {
  pv: number;
  uv: number;
  ip: number;
}

const AccessPage: React.FC = () => {
  const [allData, setAllData] = useState<DataType>();
  const [todayData, setTodayData] = useState<DataType>();

  //获取用户行为数据
  useEffect(() => {
    async function getUserData() {
      let res = await request(
        'https://mock.apifox.cn/m1/1411666-0-default/api/users/behavior',
      );
      setAllData(res.data.all_data);
      setTodayData(res.data.today_data);
    }
    getUserData();
  }, []);

  return (
    <PageContainer
      ghost
      header={{
        title: '用户行为数据',
      }}
    >
      <Card title="累计数据" style={{ width: 300, fontSize: '20px' }}>
        <p>PV:{allData?.pv}</p>
        <p>UV:{allData?.uv}</p>
        <p>IP:{allData?.ip}</p>
      </Card>
      <Card title="今日新增" style={{ width: 300, fontSize: '20px' }}>
        <p>PV:{todayData?.pv}</p>
        <p>UV:{todayData?.uv}</p>
        <p>IP:{todayData?.ip}</p>
      </Card>
    </PageContainer>
  );
};

export default AccessPage;
