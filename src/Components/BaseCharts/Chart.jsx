import React from 'react'
import BaseChart from './BaseChart.jsx'

const Chart = (props) => {
  const options = {
    title: {
      text: props.title
    },
    series: [{
      data: props.data
    }]
  }
  return (
    <BaseChart 
      constructorType={"chart"}
      options={options}
    />
  )
}

export default Chart
