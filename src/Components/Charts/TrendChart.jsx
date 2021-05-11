import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Context'
import Chart from '../BaseCharts/Chart.jsx';

const TrendChart = () => {
  const [data, setData] = useState([]);
  const [context] = useContext(Context);

  const timeFrom = context.inputDateRange[0].format("YYYY-MM-DD-HH");
  const timeTo = context.inputDateRange[1].format("YYYY-MM-DD-HH");
  const clientId = "popper_covid";
  const referrers = context.referrers;
  const deviceTypes = context.deviceTypes;
  const countries = context.countries;
  const cities = context.cities;
  const url = context.url;
  // add others to this, like referrers, devices, countries, cities etc later on

  const getData = async() => {
    const urlToFetch = "https://asia-south1-the-broadline.cloudfunctions.net/get-sql-data";
    const response = await fetch(urlToFetch, {
      method: "POST",
      body: JSON.stringify({
        endpoint: "trends",
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
  }

  useEffect(() => {
    const data = getData();
  }, [context]);

  // TODO: make this repeatable for all trend charts (referrer view, URL view, geography view etc)
  const series_to_plot = [
    {
      type: 'area',
      name: 'Google',
      data: data.search_pvs,
      color: '#7fc97f'
    },
    {
      type: 'area',
      name: 'Direct',
      data: data.direct_pvs,
      color: '#fdc086'
    },
    {
      type: 'area',
      name: 'Other',
      data: data.other_pvs,
      color: '#d95f02'
    },
    {
      type: 'area',
      name: 'Facebook',
      data: data.social_pvs,
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
