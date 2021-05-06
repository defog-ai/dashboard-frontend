import React from 'react';
import { Card, Row, Col } from 'antd';
import EngagedTime from '../Charts/EngagedTime'
import ScrollDepth from '../Charts/ScrollDepth'

const URLEngagementStats = () => {
  return (
    <Card title="Engagement Stats">
      <Row>
        <Col xs={24} sm={12}>
          <EngagedTime />
        </Col>
        <Col xs={24} sm={12}>
          <ScrollDepth />
        </Col>
      </Row>
    </Card>
  )
}

export default URLEngagementStats
