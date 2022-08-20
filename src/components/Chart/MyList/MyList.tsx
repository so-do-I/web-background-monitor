import React from 'react'
import { Divider, List, Typography } from 'antd';
import styles from '../ChartCommenStyle.less';
export default function MyList() {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  return (
    <List
      className={styles.myList}
      size="large"
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  )
}
