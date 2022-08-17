import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Carousel, PageHeader, Space, Statistic } from 'antd';
import { MyStatProps } from '../type';

export default function MyStatistic(props: MyStatProps[]) {
  return (
    <Space wrap size={[8, 16]}>
      {props.map((d) => {
        const todayValue = d.data.at(-1) as number;
        const yesterdayValue = d.data.at(-2) as number;
        const diffValue =
          yesterdayValue === 0
            ? todayValue * 100
            : ((todayValue - yesterdayValue) / yesterdayValue) * 100;
        const avg = d.data.reduce((a, b) => a + b) / d.data.length;
        return (
          <Carousel autoplay key={d.title} dotPosition="right">
            <Statistic
              title={<PageHeader title={d.title} subTitle={'今日数据'} />}
              value={d.data.at(-1)}
            />
            <Statistic
              title={<PageHeader title={d.title} subTitle={'与昨日相比'} />}
              value={diffValue >= 0 ? diffValue : -diffValue}
              prefix={
                diffValue > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
              valueStyle={
                diffValue > 0 ? { color: '#3f8600' } : { color: '#cf1322' }
              }
              suffix="%"
              precision={2}
            />
            <Statistic
              title={<PageHeader title={d.title} subTitle={'均值'} />}
              value={avg}
              precision={2}
            />
          </Carousel>
        );
      })}
    </Space>
  );
}
