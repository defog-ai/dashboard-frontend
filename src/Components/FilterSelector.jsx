import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Select } from 'antd';
import {Context} from '../Context';

const FilterSelector = () => {
  const [data, setData] = useState([
    {referrers: [], countries: [], cities: []}
  ]);
  const [context, setContext] = useContext(Context);

  const timeFrom = context.inputDateRange[0].format("YYYY-MM-DD-HH");
  const timeTo = context.inputDateRange[1].format("YYYY-MM-DD-HH");
  const clientId = "dn_app";
  
  const getData = async() => {
    const urlToFetch = "https://asia-south1-the-broadline.cloudfunctions.net/get-sql-data";
    const response = await fetch(urlToFetch, {
      method: "POST",
      body: JSON.stringify({
        endpoint: "get_options",
        client_id: clientId,
        time_from: timeFrom,
        time_to: timeTo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [context]);

  const { Option } = Select;

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
  if ('referrers' in data) {
    for (const option of data.referrers) {
      referrerOptions.push(<Option key={option}>{option}</Option>);
    }  
  }
  
  const deviceTypeOptions = [
    <Option key="desktop">desktop</Option>,
    <Option key="mobile">mobile</Option>
  ];

  const countryOptions = [];
  if ('countries' in data) {
    for (const option of data.countries) {
      countryOptions.push(<Option key={option}>{option}</Option>);
    }
  }

  const cityOptions = [];
  if ('cities' in data) {
    for (const option of data.cities) {
      cityOptions.push(<Option key={option}>{option}</Option>);
    }
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
