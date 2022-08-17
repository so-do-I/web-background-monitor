import fetchChartData from '@/services/web-back';
import { formatOriginLineDataToComponents } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect } from 'react';

const { fetchLine, fetchErrorDetails } = fetchChartData.fetchChartData;
const fetchFrontErrorData = async () => {
  const frontEndErrorDetails = await fetchErrorDetails({
    event_name: 'front_end_exception',
    time_interval: 7,
  });
  const frontEndErrorLine = await fetchLine({
    event_name: 'front_end_exception',
    time_interval: 7,
  });
  const classifyData = formatOriginLineDataToComponents(frontEndErrorLine);
  console.log('details', frontEndErrorDetails);
  console.log('line', frontEndErrorLine);
  console.log(classifyData);
};

const AccessPage: React.FC = () => {
  useEffect(() => {
    // Update the document title using the browser API
    fetchFrontErrorData();
  });

  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      前端异常
    </PageContainer>
  );
};

export default AccessPage;
