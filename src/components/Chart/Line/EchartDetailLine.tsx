import useCharts from '@/utils/useChart';
import { Card } from 'antd';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
import { useRef } from 'react';
import styles from '../ChartCommenStyle.less';
import { Props } from '../type';


function EchartDetailLine(props: Props) {
    const chartRef = useRef(null);

    const { date, data, title } = props;
    const options: EChartsOption = {
        // title: {
        //     text: title,
        // },
        dataZoom: {
            type: 'slider',
        },
        legend: {
            show: true,
            type: 'scroll',
            // left: '20%',
            // right: '20%',
            // orient: 'vertical',
            data: data.map((d) => d.event_name),
            selected: _.zipObject(
                data.map((d) => d.event_name),
                _.fill(Array(data.length).fill(true), false, 5),
            ),
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
            data: date,
        },
        yAxis: {
            type: 'value',
        },
        series: data.map((d) => {
            return {
                name: d.event_name,
                type: 'line',
                data: d.data,
                smooth: true,
            };
        }),
    };
    useCharts(chartRef, options);

    return (
        <Card
            style={{ width: '100%' }}
            title={title}
        >

            <div ref={chartRef} className={styles.detailchart} />
        </Card>



    );
}

export default EchartDetailLine;
