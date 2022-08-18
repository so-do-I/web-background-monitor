import Lines from '@/components/Chart/Line/EchartLine';
import fetchChartData from '@/services/web-back';
import { formatOriginLineDataToComponents } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
const { fetchLine } = fetchChartData.fetchChartData;

const AccessPage: React.FC = () => {
  const [totalLineData, setTotalLineData] = useState<{ [key: string]: any[] }>(
    {},
  );
  const [date, setDate] = useState<string[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // 副作用 获取总的统计数据
  // 当有值时不再请求后端，直接返回
  const fetchTotalLineData = async () => {
    if (Object.keys(totalLineData).length > 0) {
      console.log('has keys', Object.keys(totalLineData));
      console.log(totalLineData);
      return;
    }
    const totalLine = await fetchLine({
      // event_name: 'front_end_exception',
      time_interval: 7,
    });

    if (totalLine.code === 0) {
      const { date: chartDate, classificationData } =
        formatOriginLineDataToComponents(totalLine);
      console.log('classifyData', classificationData);
      setTotalLineData(classificationData);
      setDate(chartDate);
      // setIsLoading(false)
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    fetchTotalLineData();
  });

  return (
    <PageContainer
      ghost
      header={{
        title: '数据看板',
      }}
    >
      {/* {isLoading ?
        <Spin size="large" /> : */}
      <Row gutter={[30, 30]}>
        {Object.entries(totalLineData).map((type) => {
          console.log('type', type);
          const [key, value] = type;
          return (
            <Col span={12} key={key}>
              <Lines key={key} title={key} data={value} date={date} />
            </Col>
          );
        })}
      </Row>
    </PageContainer>
  );
};

export default AccessPage;
