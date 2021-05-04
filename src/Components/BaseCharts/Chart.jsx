import React from 'react'
import BaseChart from './BaseChart.jsx'

const Chart = (props) => {
  return (
    <BaseChart 
      constructorType={"chart"}
      options={props.options}
    />
  )
}

export default Chart
