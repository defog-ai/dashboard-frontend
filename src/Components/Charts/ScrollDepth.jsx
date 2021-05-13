import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import Chart from '../BaseCharts/Chart.jsx';
import { Spin } from 'antd';

const ScrollDepth = () => {
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
        endpoint: "scroll_depth",
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

  const options = {
    chart: {type: 'areaspline', inverted: true},
    title: {text: 'Scroll Depth Distribution'},
    xAxis: {categories: ['0-20', '20-40', '40-60', '60-80', '80+'],title: {text: 'Scroll Depth'}},
    yAxis: {title: {text: '%age of pageviews'}, labels: {formatter: function () {return this.value + '%';}}},
    credits: {enabled: false},
    tooltip: {formatter:function(){return '<b>' + this.y + '%</b> pageviews <br/>' + this.key + ' seconds';}},
    plotOptions: {area: {marker: {enabled: false, symbol: 'circle', radius: 2, states: {hover: {enabled: true}}}}},
    legend: {enabled: false},
    exporting: {enabled: false},
    series: [{name: 'timespent', data: data.data, color: '#337ab7'}]
  };

  if (loading) {
    return (
      <Spin />
    )
  } else {
    return (
      <Chart options={options} />
    )
  }
}

export default ScrollDepth
