import React from 'react';
import { Row, Col } from 'antd';
import OverallStatsURL from './StatsComponents/OverallStatsURL';
import AggTreechart from './StatsComponents/AggTreechart';
import GeographyTable from './StatsComponents/GeographyTable';
import URLEngagementStats from './StatsComponents/URLEngagementStats';
import EventSummary from './StatsComponents/EventSummary';
import ReadNextStats from './StatsComponents/ReadNextStats';

const URLStats = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={10}>
          <OverallStatsURL />
        </Col>
        <Col xs={24} md={14}>
          <URLEngagementStats />
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={10}>
          <AggTreechart />
        </Col>
        <Col xs={24} md={14}>
          <GeographyTable />
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={10}>
        <ReadNextStats />
        </Col>
        <Col xs={24} md={14}>
        <EventSummary />
        </Col>
      </Row>
    </div>
  )
}

export default URLStats
