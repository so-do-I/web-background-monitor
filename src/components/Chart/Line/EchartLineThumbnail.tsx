import React from 'react'
import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { Props } from '../type';

export default function EchartLineThumbnail(props: Props) {
    const chartRef = useRef(null);

    const { date, data } = props;
    const options: EChartsOption = {

        xAxis: {
            type: 'category',
            data: date,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                type: 'line',
                data: data
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
