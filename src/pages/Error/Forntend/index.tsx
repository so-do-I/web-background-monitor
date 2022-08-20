import EchartDetailLine from '@/components/Chart/Line/EchartDetailLine';
import MyStatistic from '@/components/Chart/MyStatistic/MyStatistic';
import fetchChartData from '@/services/web-back';
import { formatOriginErrorDetailToComponets, formatOriginLineDataToComponents } from '@/utils/format';
import { LineChartOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, PageHeader, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.min.css'
import EchartBar from '@/components/Chart/Bar/EchartBar';
import MyTabs from '@/components/Chart/MyTabs/MyTabs';

const { fetchLine, fetchErrorDetails } = fetchChartData.fetchChartData;

const AccessPage: React.FC = () => {
  const [date, setDate] = useState<string[]>([]);
  const [realStaticData, setRealStaticData] = useState<{
    [key: string]: any[];
  }>({});
  const [frontendLineData, setFrontendLineData] = useState<{ [key: string]: any[] }>(
    {},
  );
  const [errorDetails, setErrorDetails] = useState<{ [key: string]: any[] }>(
    {},
  );
  const [errorDetailCount, setErrorDetailCount] = useState<{ [key: string]: number }>(
    {},
  );
  const fetchFrontErrorData = async () => {
    if (Object.keys(frontendLineData).length > 0) {
      // console.log('has keys', Object.keys(totalLineData));
      // console.log(totalLineData);
      return;
    }
    const frontEndErrorDetails = await fetchErrorDetails({
      event_name: 'front_end_exception',
      time_interval: 7,
    });
    const frontEndErrorLine = await fetchLine({
      event_name: 'frontend',
      time_interval: 14,
    });
    const { date: chartDate, classificationData, staticData } = formatOriginLineDataToComponents(frontEndErrorLine);
    const { errorNum, classifiedErrorDetail } = formatOriginErrorDetailToComponets(frontEndErrorDetails)
    console.log('errorNum', errorNum);
    console.log('classifiedErrorDetail', classifiedErrorDetail)
    setRealStaticData(staticData);
    setFrontendLineData(classificationData);
    setDate(chartDate);
    setErrorDetailCount(errorNum);
    setErrorDetails(classifiedErrorDetail);
  };


  useEffect(() => {
    // Update the document title using the browser API
    fetchFrontErrorData();
  });

  return (
    <PageContainer
      ghost
      header={{
        title: '前端异常',
      }}
    >
      <Row>
        {Object.entries(realStaticData).map((type) => {
          const [key, value] = type;
          return (
            <Col span={24} key={`static_${key}`}>
              <MyStatistic data={value} path={key} num={4} expand={true} title='数值卡片' />
            </Col>
          );
        })}

      </Row>

      <Row style={{ marginTop: 20 }} gutter={20}>
        <Col span={24}>
          <PageHeader
            onBack={() => { }}
            backIcon={<LineChartOutlined />}
            title='波动图表'
          />
        </Col>
        {Object.entries(frontendLineData).map((type) => {
          // console.log('type', type);
          const [key, value] = type;
          return (
            <Col
              span={16}
              key={`lineChart_${key}`}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <EchartDetailLine key={key} title={key} data={value} date={date} />
            </Col>
          );
        })}
        <Col span={8}>
          {/* <MyDescriptions></MyDescriptions> */}
          <Card title='今日错误数分类统计'><EchartBar data={errorDetailCount} title={''} /></Card>

        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <PageHeader
            onBack={() => { }}
            backIcon={<LineChartOutlined />}
            title='错误详情'
          />
        </Col>
        <Col span={24}>
          <MyTabs errorDetails={errorDetails} />

        </Col>
      </Row>
    </PageContainer>
  );
};

export default AccessPage;
