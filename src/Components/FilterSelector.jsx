import React, { useContext } from 'react';
import { Row, Col, Select } from 'antd';
import {Context} from '../Context';

const FilterSelector = () => {
  const { Option } = Select;

  const [context, setContext] = useContext(Context);

  const handleReferrerChange = function(value, option) {
    setContext({
      ...context,
      referrers: value
    });
  }

  const handleDeviceTypeChange = function(value, option) {
    setContext({
      ...context,
      deviceTypes: value
    });
  }

  const handleCountryChange = function(value, option) {
    setContext({
      ...context,
      countries: value
    });
  }

  const handleCityChange = function(value, option) {
    setContext({
      ...context,
      cities: value
    });
  }

  const referrerOptions = [];
  for (let i = 10; i < 36; i++) {
    referrerOptions.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const deviceTypeOptions = [
    <Option key="Desktop">Desktop</Option>,
    <Option key="Mobile">Mobile</Option>
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
          onChange={handleReferrerChange}
          value={context.referrers}
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
          onChange={handleDeviceTypeChange}
          value={context.deviceTypes}
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
          onChange={handleCountryChange}
          value={context.countries}
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
          onChange={handleCityChange}
          value={context.cities}
        >
          {cityOptions}
        </Select>
      </Col>
      
    </Row>
  )
}

export default FilterSelector
