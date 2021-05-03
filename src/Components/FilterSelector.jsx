import { Row, Col, Select } from 'antd';

const FilterSelector = () => {
  const { Option } = Select;

  const handleChange = function() {
    console.log(this);
  }

  const referrerOptions = [];
  for (let i = 10; i < 36; i++) {
    referrerOptions.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const deviceTypeOptions = [
    <Option key="Desktop">Desktop</Option>,
    <Option key="Mobile">Mobile</Option>,
  ];

  const countryOptions = [];
  for (let i = 10; i < 36; i++) {
    countryOptions.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const cityOptions = [];
  for (let i = 10; i < 36; i++) {
    cityOptions.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xs={12} md={6}>
        {/* Referrer Selector */}
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Referrers"
          onChange={handleChange}
        >
          {referrerOptions}
        </Select>
      </Col>
      <Col xs={12} md={6}>
        {/* Device Type Selector */}
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Device Type"
          onChange={handleChange}
        >
          {deviceTypeOptions}
        </Select>
      </Col>
      <Col xs={12} md={6}>
        {/* Country Selector */}
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Countries"
          onChange={handleChange}
        >
          {countryOptions}
        </Select>
      </Col>
      <Col xs={12} md={6}>
        {/* City Selector */}
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Cities"
          onChange={handleChange}
        >
          {cityOptions}
        </Select>
      </Col>
      
    </Row>
  )
}

export default FilterSelector
