import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Descriptions } from 'antd';
import { useState } from 'react';
import { MyDescProps } from '../type';

export default function MyDescriptions(props: MyDescProps[]) {
  const [index, setIndex] = useState(0);
  const total = props.length;

  const prevDesc = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextDesc = () => {
    if (index < total - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<CaretLeftOutlined />}
        onClick={prevDesc}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<CaretRightOutlined />}
        onClick={nextDesc}
      />

      <Descriptions title={props[index].title}>
        {Object.entries(props[index].data).map((entry) => {
          const [key, value] = entry;
          return (
            <Descriptions.Item key={key} label={key}>
              {value}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    </>
  );
}
