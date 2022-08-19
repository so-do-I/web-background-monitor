import { clacDiff, formatRouteToKeyPath } from '@/utils/format';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Card, Col, PageHeader, Row, Statistic, Tag } from 'antd';
import { useState } from 'react';
import { MyStatProps } from '../type';
import MyStaticTitle from './MyStaticTitle';

export default function MyStatistic(props: MyStatProps) {
  const { data, path, num } = props;
  console.log('static data', data)
  let limitData;
  if (num) {
    limitData = data?.sort((a, b) => clacDiff(b.data, true) - clacDiff(a.data, true)).slice(0, num)
  } else {
    limitData = data
  }


  const [activeTabKey2, setActiveTabKey2] = useState<string>('today');
  const tabListNoTitle = [
    {
      key: 'today',
      tab: '今日数据',
    },
    {
      key: 'diff',
      tab: '与昨日相比',
    },
    {
      key: 'avg',
      tab: '均值',
    },
  ];

  const keyPathDict = formatRouteToKeyPath();

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  const handleClickMore = (e: any) => {
    const key = e.currentTarget.id ?? '/';
    history.push(keyPathDict[key]?.path ?? '');
  };

  if (limitData) {
    return (
      <>
        <Row>
          <Col span={24}>
            <PageHeader
              onBack={() => { }}
              backIcon={<BarChartOutlined />}
              title={keyPathDict[path!]?.name ?? path}
              tags={<Tag color="blue">{path}</Tag>}
              subTitle={`数值波动TOP${num ? num : limitData.length}`}
              extra={
                <Button type="text" onClick={handleClickMore} id={path}>
                  More
                </Button>
              }
            />
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
          {limitData.map((d) => {
            const diffValue = clacDiff(d.data);
            const avg = d.data.reduce((a, b) => a + b) / d.data.length;

            const contentListNoTitle: Record<string, React.ReactNode> = {
              today: (
                <Statistic
                  value={d.data.at(-1)}
                  precision={2}
                  suffix={d.units}
                />
              ),
              diff: (
                <Statistic
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
              ),
              avg: <Statistic value={avg} precision={2} suffix={d.units} />,
            };

            return (
              <Col key={d.title} span={6}>
                <Card
                  title={
                    <MyStaticTitle title={d.title} subTitle={d.subTitle} />
                  }
                  headStyle={{
                    marginTop: 5,
                  }}
                  style={{ width: '100%' }}
                  tabList={tabListNoTitle}
                  // hoverable={true}
                  tabProps={{
                    size: 'small',
                  }}
                  activeTabKey={activeTabKey2}
                  // tabBarExtraContent={<a href="#">More</a>}
                  onTabChange={(key) => {
                    onTab2Change(key);
                  }}
                >
                  {contentListNoTitle[activeTabKey2]}
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  } else {
    return <></>;
  }
}
