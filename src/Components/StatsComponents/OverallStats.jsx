import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { Statistic, Row, Col, Card, Spin } from 'antd';
import TrendChart from '../Charts/TrendChart';

const OverallStatsURL = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [context] = useContext(Context);

  const timeFrom = context.inputDateRange[0].format("YYYY-MM-DD-HH");
  const timeTo = context.inputDateRange[1].format("YYYY-MM-DD-HH");
  const clientId = "popper_covid";
  const referrers = context.referrers;
  const deviceTypes = context.deviceTypes;
  const countries = context.countries;
  const cities = context.cities;
  // add others to this, like referrers, devices, countries, cities etc later on

  const getData = async() => {
    const urlToFetch = "https://asia-south1-the-broadline.cloudfunctions.net/get-sql-data";
    const response = await fetch(urlToFetch, {
      method: "POST",
      body: JSON.stringify({
        endpoint: "overall",
        client_id: clientId,
        time_from: timeFrom,
        time_to: timeTo,
        referrer: referrers,
        device_type: deviceTypes,
        country: countries,
        city: cities
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, [context]);

  if (loading) {
    return (
      <Card title="Overview">
        <Spin />
      </Card>
    )
  } else {
    return (
      <Card title="Overview" >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <Statistic title="Visits" value={data.sessions} />
          </Col>
          <Col span={8}>
            <Statistic title="Mins/Visit" value={data.mins_per_visit} />
          </Col>
          <Col span={8}>
            <Statistic title="% first time visits" value={data.first_visits} suffix={"%"} />
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
}

export default OverallStatsURL
