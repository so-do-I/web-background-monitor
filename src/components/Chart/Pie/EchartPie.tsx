import React from 'react'
import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { BarProps } from '../type';

export default function EchartPie(props: BarProps) {
    const { title, data } = props;

    const chartRef = useRef(null);
    const options: EChartsOption = {
        title: {
            text: title,
        },
        colorBy: 'data',
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        dataZoom: {
            type: 'slider',
            start: 150
        },
        grid: {
            left: '7%',
            right: '7%',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        series: [
            {
                // name: 'Area Mode',
                type: 'pie',
                radius: [50, 140],
                // center: ['50', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },


                data: Object.entries(data).map(d => ({
                    name: d[0],
                    value: d[1]
                }))

            }
        ],

    };
    useCharts(chartRef, options);

    return (
        <>
            <div ref={chartRef} className={styles.detailchart} />
        </>
    );
}
