import React from 'react'
import BaseChart from './BaseChart.jsx'

const MapChart = (props) => {
  return (
    <BaseChart 
      constructorType={"mapChart"}
      options={props.options}
    />
  )
}

export default MapChart
