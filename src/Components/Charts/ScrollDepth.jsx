// import { useState, useEffect } from 'react'
import Chart from '../BaseCharts/Chart.jsx';

const ScrollDepth = () => {
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
  const data = [51, 5, 0, 15, 28];
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
    series: [{name: 'timespent', data: data, color: '#337ab7'}]
  };

  return (
    <Chart options={options} />
  )
}

export default ScrollDepth
