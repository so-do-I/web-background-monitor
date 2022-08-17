import * as echarts from 'echarts';
import { RefObject, useEffect } from 'react';

function useCharts(
  chartRef: RefObject<HTMLDivElement>,
  options: echarts.EChartsOption,
) {
  let myChart: echarts.ECharts;

  function renderChart() {
    const chart = echarts.getInstanceByDom(chartRef.current!);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current!);
    }
    myChart.setOption(options);
  }

  useEffect(() => {
    renderChart();
  }, [options]);

  useEffect(() => {
    return () => {
      return myChart && myChart.dispose();
    };
  }, []);

  return;
}

export default useCharts;
