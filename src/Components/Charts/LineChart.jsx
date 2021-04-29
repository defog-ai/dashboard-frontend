import React, { useState, useEffect } from 'react'
import Chart from '../BaseCharts/Chart.jsx'

const LineChart = (props) => {
  // First, get data from URL
  const [data, setData] = useState([]);
  
  const getData = async() => {
    const response = await fetch(props.url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    const data = getData();
  }, []);

  // Then, construct chart
  return (
    <Chart options={props.options}/>
  )
}

export default LineChart
