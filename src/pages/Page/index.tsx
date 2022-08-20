import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, PageHeader, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import fetchChartData from '@/services/web-back';
import _ from 'lodash';
import { formatOriginLineDataToComponents } from '@/utils/format';

import MyStatistic from '@/components/Chart/MyStatistic/MyStatistic';
import EchartDetailLine from '@/components/Chart/Line/EchartDetailLine';
import { LineChartOutlined } from '@ant-design/icons';
import EchartBar from '@/components/Chart/Bar/EchartBar';
import EchartPie from '@/components/Chart/Pie/EchartPie';
import EchartDetailBar from '@/components/Chart/Bar/EchartDetailBar';

const { fetchLine, getStatistical } = fetchChartData.fetchChartData
const AccessPage: React.FC = () => {
  const [bundleData, setBundleData] = useState([])

  const [date, setDate] = useState<string[]>([]);
  const [recentlyLineData, setRecentlyLineData] = useState<{
    [key: string]: any[];
  }>({});
  const [totalStaticData, setTotalStaticData] = useState<{
    [key: string]: any[];
  }>({});

  const [loading, setLoading] = useState(true)


  //获取用户行为数据

  const getPagePrefData = async () => {
    if (!loading) {
      return;
    }

    // 获取连续一段时间的pv数据 
    const recentlyPerfData = await fetchLine({
      type: 'page',
    });
    const statistialData = await getStatistical({
      params: {
        query: 'bundle_pref'
      }
    });
    console.log('statistialData', statistialData)
    const { bundle_pref } = statistialData.data
    const {
      date: chartDate,
      classificationData,
      staticData,
    } = formatOriginLineDataToComponents(recentlyPerfData);
    console.log('bundle_pref', bundle_pref);
    setRecentlyLineData(classificationData);
    setDate(chartDate);
    setTotalStaticData(staticData);
    setBundleData(bundle_pref);
    setLoading(prev => false)

  }

  useEffect(() => {
    getPagePrefData();


  })

  return (
    <PageContainer
      ghost
      header={{
        title: '页面性能',
      }}
      style={{ minHeight: '88vh' }}
    >
      <Row>
        {Object.entries(totalStaticData).map((type) => {
          const [key, value] = type;
          return (
            <Col span={24} key={`static_${key}`}>
              <MyStatistic data={value} path={key} num={4} expand={true} title='数值卡片' />
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
              <EchartDetailLine key={key} title={'页面性能'} data={value} date={date} />
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
          <Card title='资源平均加载耗时'>
            <EchartDetailBar data={bundleData.sort((a, b) => { return a.load_time - b.load_time })} title={''} />
          </Card>
        </Col>


      </Row>
    </PageContainer>
  );
};

export default AccessPage;
