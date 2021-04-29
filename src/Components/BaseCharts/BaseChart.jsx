import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BaseChart = (props) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={props.options}
      constructorType={props.chartType}
    />
  )
}

export default BaseChart