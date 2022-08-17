import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { Props } from '../type';

function Lines(props: Props) {
  const chartRef = useRef(null);

  const { title, date, data } = props;
  const options: EChartsOption = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: date,
    },
    yAxis: {
      type: 'value',
    },
    series: data.map((d) => {
      return {
        type: 'line',
        data: d,
      };
    }),
  };
  useCharts(chartRef, options);

  return (
    <>
      <div ref={chartRef} className={styles.detailchart} />
    </>
  );
}

export default Lines;
