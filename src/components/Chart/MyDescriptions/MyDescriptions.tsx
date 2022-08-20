import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Descriptions } from 'antd';
import { useState } from 'react';
import { MyDescProps } from '../type';

export default function MyDescriptions(props: MyDescProps) {
  const [index, setIndex] = useState(0);
  const { descData } = props;
  console.log('descData', descData)


  if (!descData || descData.length === 0) {
    return <></>
  }
  const total = descData.length;
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

      <Descriptions title={descData[index].error_type}
        extra={<Button.Group>      <Button
          type="primary"
          shape="circle"
          icon={<CaretLeftOutlined />}
          onClick={prevDesc}
          disabled={index === 0}
        />
          <Button
            type="primary"
            shape="circle"
            icon={<CaretRightOutlined />}
            onClick={nextDesc}
            disabled={index === total - 1}
          /></Button.Group>
        }
      >
        {Object.keys(descData[index]).sort().map((key) => {
          const value = descData[index][key]
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
