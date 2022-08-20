import useCharts from '@/utils/useChart';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { DetailBarProps } from '../type';


export default function EchartDetailBar(props: DetailBarProps) {
    const { title, data } = props;
    if (data.length === 0) {
        return <></>
    }
    console.log('data', data);
    const resourceArray: string[] = []
    const loadtimeArray: number[] = []
    const errorArray: number[] = []
    data.map(d => {
        resourceArray.push(d.resource)
        loadtimeArray.push(d.load_time)
        errorArray.push(d.total_error_num)
    })


    const chartRef = useRef(null);
    const options: EChartsOption = {
        title: {
            text: title,
        },
        // colorBy: 'data',
        legend: {
            type: 'scroll',
            data: ['平均加载时长(ms)', '总错误数']
        },
        dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            start: 100,
            end: 60,
            width: 15
        }],
        grid: {
            left: '7%',
            right: '7%',
            // containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: resourceArray,
        },
        series: [{
            name: '平均加载时长(ms)',
            type: 'bar',
            data: loadtimeArray
            ,
            label: {
                show: true,
                position: 'right'
            },
        },
        {
            name: '总错误数',
            type: 'bar',
            data: errorArray
            ,
            label: {
                show: true,
                position: 'right'
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
