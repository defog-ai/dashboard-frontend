import { Row, Col } from 'antd';
import OverallStats from './StatsComponents/OverallStats';
import SummaryTable from './StatsComponents/SummaryTable';
import AggTreechart from './StatsComponents/AggTreechart';
import GeographyTable from './StatsComponents/GeographyTable';

const MainStats = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} md={10}>
          <OverallStats />
        </Col>
        <Col xs={24} md={14}>
          <SummaryTable />
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
    </div>
  )
}

export default MainStats
