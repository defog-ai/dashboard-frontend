import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Context'
import Chart from '../BaseCharts/Chart.jsx';

const TrendChart = () => {
  const [data, setData] = useState([]);
  const [context] = useContext(Context);

  const timerange = context.inputDateRange[0].format("YYYY-MM-DD-HH-00") + "to" + context.inputDateRange[1].format("YYYY-MM-DD-HH-00");
  // add others to this, like referrers, devices, countries, cities etc later on

  const getData = async() => {
    const url = "https://dashboard.loki.ai/get_pv_trend_data?" + new URLSearchParams({
      timerange: timerange,
      // ref: ref,
      // deviceTypes: deviceTypes,
      // countries: countries,
      // cities: cities,
      // url: url
    });
    const response = await fetch(url, {
      // method: "POST",
      credentials: "include",
      headers: {
        "Cookie": "client_id=cedric; login_cookie=319633a0b01b255819cb18457153eba1caa075de7984c515039733cb24d138e0"
      }
    });
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    const data = getData();
  }, [context]);

  // TODO: make this repeatable for all trend charts (referrer view, URL view, geography view etc)
  const series_to_plot = [
    {
      type: 'area',
      name: 'Google',
      data: data.google_trend,
      color: '#7fc97f'
    },
    {
      type: 'area',
      name: 'Direct',
      data: data.direct_trend,
      color: '#fdc086'
    },
    {
      type: 'area',
      name: 'Other',
      data: data.other_trend,
      color: '#d95f02'
    },
    {
      type: 'area',
      name: 'Facebook',
      data: data.facebook_trend,
      color: '#386cb0'
    },
    {
      type: 'line',
      name: '7 days ago',
      data: data.typical_day,
      color:'#e0e0e0'
    }, 
  ];

  const options = {
    chart: {
      marginRight: 10,
      backgroundColor: 'transparent'
    },
    time: {
      useUTC: false
    },
    title: {text: 'Pageviews compared to the typical day' },
    xAxis: {type: 'datetime', tickPixelInterval: 50},
    yAxis: {
      title: {text: null},
      plotLines: [{value: 0, width: 1, color: '#808080'}]
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 0,
        marker: {
          lineColor: '#666666'
        }
      },
      series: {
        marker: {enabled: false}
      }
    },        
    exporting: {enabled: false},
    credits: {enabled: false},
    series: series_to_plot
  }

  

  // Then, construct chart
  return (
    <Chart options={options}/>
  )
}

export default TrendChart
