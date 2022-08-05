import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import { useRef } from 'react';

function Chart() {
  const chartRef = useRef(null);
  const options: EChartsOption = {
    title: {
      text: '测试表格 react-hook 抽离',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };
  useCharts(chartRef, options);

  return (
    <>
      <div style={{ width: '400px', height: '400px' }} ref={chartRef} />
    </>
  );
}

export default Chart;
