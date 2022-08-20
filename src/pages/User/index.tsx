import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, PageHeader, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import fetchChartData from '@/services/web-back';
import _ from 'lodash';
import mockjs from 'mockjs';
import { formatOriginLineDataToComponents } from '@/utils/format';

import MyStatistic from '@/components/Chart/MyStatistic/MyStatistic';
import EchartDetailLine from '@/components/Chart/Line/EchartDetailLine';
import { LineChartOutlined } from '@ant-design/icons';
import EchartBar from '@/components/Chart/Bar/EchartBar';
import EchartPie from '@/components/Chart/Pie/EchartPie';



const { getStatistical, fetchLine } = fetchChartData.fetchChartData

const AccessPage: React.FC = () => {
  const [totalWebAccessData, setTotalWebAccessData] = useState<{ [key in string]: number }>({})
  const [location, setlocation] = useState({})
  const [useTime, setUseTime] = useState({})
  const [os, setOs] = useState<{ [key in string]: number }>({})
  const [date, setDate] = useState<string[]>([]);
  const [recentlyLineData, setRecentlyLineData] = useState<{
    [key: string]: any[];
  }>({});
  const [totalStaticData, setTotalStaticData] = useState<{
    [key: string]: any[];
  }>({});

  const [loading, setLoading] = useState(true)


  //获取用户行为数据

  const getUserPageData = async () => {
    if (!loading) {
      return;
    }

    // 获取连续一段时间的pv数据 
    const recentlyPVData = await fetchLine({
      type: 'user',
    });
    const {
      date: chartDate,
      classificationData,
      staticData,
    } = formatOriginLineDataToComponents(recentlyPVData, 3);


    // 获取统计数据
    const statistialData = await getStatistical();
    const { user_os, geo_loaciton, use_time, web_access } = statistialData.data;
    const ziplocation = _.zipObject(geo_loaciton.provience!, geo_loaciton.user_num!);
    // const ziplocation = _.zipObject(Array.from({ length: 34 }, v => mockjs.mock('@word(1)')), geo_loaciton.user_num!);
    const zipUseTime = _.zipObject(use_time.time!, use_time.user_num!)


    setTotalWebAccessData(web_access);
    setOs(user_os);
    setlocation(ziplocation);
    setUseTime(zipUseTime);
    setRecentlyLineData(classificationData);
    setDate(chartDate);
    setTotalStaticData(staticData);
    setLoading(prev => false)
  }

  useEffect(() => {
    getUserPageData();


  })

  return (
    <PageContainer
      ghost
      header={{
        title: '用户数据',
      }}
      style={{ minHeight: '88vh' }}
    >
      <Row>
        {Object.entries(totalStaticData).map((type) => {
          const [key, value] = type;
          return (
            <Col span={24} key={`static_${key}`}>
              <MyStatistic data={value} path={key} num={3} expand={true} title='数值卡片' />
            </Col>
          );
        })}

      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <PageHeader
            onBack={() => { }}
            backIcon={<LineChartOutlined />}
            title='波动图表'
          />
        </Col>
        {Object.entries(recentlyLineData).map((type) => {
          const [key, value] = type;
          return (
            <Col
              span={24}
              key={`lineChart_${key}`}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <EchartDetailLine key={key} title={'网站访问量波动图'} data={value} date={date} />
            </Col>
          );
        })}
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <PageHeader
            onBack={() => { }}
            backIcon={<LineChartOutlined />}
            title='统计图表'
          />
        </Col>
        <Col span={24}>
          <Card title='全国用户分布图'>
            <EchartBar data={location} title={''} />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }} gutter={20}>
        <Col span={16}>
          <Card title='用户停留时长分布'>
            <EchartBar data={useTime} title={''} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title='用户使用设备分布'>
            <EchartPie data={os} title={''} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AccessPage;
