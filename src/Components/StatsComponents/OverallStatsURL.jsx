import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { Statistic, Row, Col, Card, Spin } from 'antd';
import TrendChart from '../Charts/TrendChart';

const OverallStats = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [context] = useContext(Context);

  const timeFrom = context.inputDateRange[0].format("YYYY-MM-DD-HH");
  const timeTo = context.inputDateRange[1].format("YYYY-MM-DD-HH");
  const clientId = "dn_app";
  const referrers = context.referrers;
  const deviceTypes = context.deviceTypes;
  const countries = context.countries;
  const cities = context.cities;
  const url = context.url;

  const getData = async() => {
    const urlToFetch = "https://asia-south1-the-broadline.cloudfunctions.net/get-sql-data";
    const response = await fetch(urlToFetch, {
      method: "POST",
      body: JSON.stringify({
        endpoint: "overall_url",
        client_id: clientId,
        time_from: timeFrom,
        time_to: timeTo,
        url: url,
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
      <Card title="Overview" >
        <Spin />
      </Card>
    )
  } else {
    return (
      <Card title="Overview" >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <Statistic title="Pageviews" value={data.pvs} />
          </Col>
          <Col span={8}>
            <Statistic title="Mins/PV" value={data.mins_per_pv} />
          </Col>
          <Col span={8}>
            <Statistic title="First Visits" value={data.first_visits} suffix="%" />
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

export default OverallStats
