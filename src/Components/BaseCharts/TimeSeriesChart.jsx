import React from 'react'
import BaseChart from './BaseChart.jsx'

const TimeSeriesChart = (props) => {
  return (
    <BaseChart 
      constructorType={"stockChart"}
      options={props.options}
    />
  )
}

export default TimeSeriesChart
