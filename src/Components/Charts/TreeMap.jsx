import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../Context";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import heatmap from 'highcharts/modules/heatmap';
import treemap from 'highcharts/modules/treemap';
import { Spin } from 'antd';

const TreeMap = () => {
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
  const url = context.url;
  
  const getData = async() => {
    const urlToFetch = "https://asia-south1-the-broadline.cloudfunctions.net/get-sql-data";
    const response = await fetch(urlToFetch, {
      method: "POST",
      body: JSON.stringify({
        endpoint: "macro_agg",
        client_id: clientId,
        time_from: timeFrom,
        time_to: timeTo,
        referrer: referrers,
        device_type: deviceTypes,
        country: countries,
        city: cities,
        url: url,
        groupby: "session_referrer",
        metric: "secs_per_visit"
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

  const colorRange = [
      [0, '#ef8a62'],
      [0.5, '#f7f7f7'],
      [1, '#67a9cf']
    ];

  const options = {
    colorAxis: {
      stops: colorRange,
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      data: data.data
    }],
    title: {text: "Referrers by Seconds/PV"},
    tooltip: {
      formatter: function() {
        return "<b>" + this.point.name + "</b><br>Pageviews: " + this.point.value.toFixed(0) + "<br>" + "Seconds/PV" + ": " + this.point.colorValue.toFixed(1);
      }
    },
    credits: {enabled: false}
  }

  if (loading) {
    return (
      <Spin />
    )
  } else {
    heatmap(Highcharts);
    treemap(Highcharts);
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options} />
    )
  }
}

export default TreeMap
