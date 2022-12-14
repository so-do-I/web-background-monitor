import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { BarProps } from '../type';


export default function EchartBar(props: BarProps) {
    const { title, data } = props;
    console.log(data)
    console.log(Object.keys(data))
    const chartRef = useRef(null);
    const options: EChartsOption = {
        title: {
            text: title,
        },
        colorBy: 'data',
        legend: {
            type: 'scroll',
        },
        dataZoom: {
            type: 'slider',
        },
        grid: {
            left: '7%',
            right: '7%',
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: Object.keys(data),
        },
        yAxis: {
            type: 'value',
        },
        series: [{
            type: 'bar',
            data: Object.entries(data),
            label: {
                show: true,
                position: 'top'
            },
        }]

    };
    useCharts(chartRef, options);

    return (
        <>
            <div ref={chartRef} className={styles.detailchart} />
        </>
    );
}
