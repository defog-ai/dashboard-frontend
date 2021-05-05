// import { useState, useEffect } from 'react'
import Chart from '../BaseCharts/Chart.jsx';

const EngagedTime = () => {
  // First, get data from URL
  // const [data, setData] = useState([]);
  
  // const getData = async() => {
  //   const response = await fetch("https://popper.ai/ncov19/trend_data_india.json");
  //   const data = await response.json();
  //   setData(data);
  // }

  // useEffect(() => {
  //   const data = getData();
  // }, []);

  // TODO: get this directly from URL
  const data = [39, 3, 14, 8, 5, 0, 31];
  const options = {
    chart: {type: 'areaspline'},
    title: {text: 'Engaged Time Distribution'},
    xAxis: {categories: ['0-30', '30-60', '60-90', '90-120', '120-150', '150-180', '180+'],title: {text: 'seconds'}},
    yAxis: {title: {text: '%age of pageviews'}, labels: {formatter: function () {return this.value + '%';}}},
    credits: {enabled: false},
    tooltip: {formatter:function(){return '<b>' + this.y + '%</b> pageviews <br/>' + this.key + ' seconds';}},
    plotOptions: {area: {marker: {enabled: false, symbol: 'circle', radius: 2, states: {hover: {enabled: true}}}}},
    legend: {enabled: false},
    exporting: {enabled: false},
    series: [{name: 'timespent', data: data, color: '#337ab7'}]
  };

  return (
    <Chart options={options} />
  )
}

export default EngagedTime
