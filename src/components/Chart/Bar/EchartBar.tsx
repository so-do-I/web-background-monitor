import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { BarProps } from '../type';

import React from 'react'

export default function EchartBar(props: BarProps) {
    const { title, data } = props;

    const chartRef = useRef(null);
    const options: EChartsOption = {
        title: {
            text: title,
        },
        dataZoom: {
            type: 'slider',
        },
        // legend: {
        //     show: true,
        //     type: 'scroll',
        //     left: '20%',
        //     right: '20%',
        // },
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
        }]

    };
    useCharts(chartRef, options);

    return (
        <>
            <div ref={chartRef} className={styles.detailchart} />
        </>
    );
}
