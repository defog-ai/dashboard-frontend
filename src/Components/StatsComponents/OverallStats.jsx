import React from 'react';
import { Statistic, Row, Col, Card} from 'antd';
import TrendChart from '../Charts/TrendChart';

const OverallStatsURL = () => {
  return (
    <Card title="Overview" >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <Statistic title="Pageviews" value={1092} />
        </Col>
        <Col span={8}>
          <Statistic title="Mins/PV" value={"2:50"} />
        </Col>
        <Col span={8}>
          <Statistic title="% first time pvs" value={"24"} suffix={"%"} />
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <TrendChart />
        </Col>
      </Row>
    </Card>
  )
}

export default OverallStatsURL
