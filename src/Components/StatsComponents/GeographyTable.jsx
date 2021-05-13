import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import DataTable from './DataTable'
import { Card, Spin } from 'antd';

const GeographyTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [context] = useContext(Context);

  const timeFrom = context.inputDateRange[0].format("YYYY-MM-DD-HH");
  const timeTo = context.inputDateRange[1].format("YYYY-MM-DD-HH");
  const clientId = "popper_covid";
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
        endpoint: "geo",
        client_id: clientId,
        time_from: timeFrom,
        time_to: timeTo,
        referrer: referrers,
        device_type: deviceTypes,
        country: countries,
        city: cities,
        url: url
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
  
  const columns = [
    {title: "Country", key: "country", search: true, sort: false},
    {title: "City", key: "city", search: true, sort: false},
    {title: "Visits", key: "visits", search: false}
  ]
  if (loading) {
    return (
      <Card title="Top Geographies">
        <Spin />
      </Card>
    )
  } else {
    return (
      <Card title="Top Geographies">
        <DataTable data={data.data} columns={columns}></DataTable>
      </Card>
    )
  }
}

export default GeographyTable