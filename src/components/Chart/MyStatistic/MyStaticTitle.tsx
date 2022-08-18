import { Col, Row, Typography } from 'antd';
import { ReactNode } from 'react';

export default function MyStaticTitle(props: {
  titleLevel?: 1 | 2 | 3 | 4 | 5 | undefined;
  title: string | number;
  subTitle: string | number;
  tags?: ReactNode | ReactNode[];
}) {
  const { Title, Text } = Typography;

  const { titleLevel, title, subTitle, tags } = props;
  return (
    <>
      <Row align="middle" gutter={[12, 12]} style={{ marginBottom: 5 }}>
        <Col>
          <Title level={titleLevel ?? 4} style={{ lineHeight: 1, margin: 0 }}>
            {title}
          </Title>
        </Col>
        <Col>
          <Text italic type="secondary">
            {subTitle}
          </Text>
        </Col>
        <Col>{tags}</Col>
      </Row>
    </>
  );
}
