import React, { useContext } from 'react';
import {Context} from '../Context';
import { Row, Col, DatePicker, Select } from 'antd';
import moment from 'moment';

const TimeSelector = () => {
  const { RangePicker } = DatePicker;
  
  const [context, setContext] = useContext(Context);  
  const setDateRange = (dates, dateStrings, info) => {
    setContext({
      ...context,
      inputDateRange: dates
    });
  }

  const setChartResolution = (value, option) => {
    setContext({
      ...context,
      chartResolution: value
    });
  }

  const { Option } = Select;

  return (
    <Row>
      <Col span={12}>
        <RangePicker
          showTime={{ format: 'HH' }}
          format="YYYY-MM-DD HH"
          value={context.inputDateRange}
          ranges={{
            Today: [moment().startOf('day'), moment().endOf('day')],
            Yesterday: [moment().subtract(1,'d').startOf('day'), moment().subtract(1,'d').endOf('day')],
            'Last 7d': [moment().subtract(7,'d').startOf('day'), moment().endOf('day')],
            'Last 30d': [moment().subtract(30, 'd').startOf('day'), moment().endOf('day')],
          }}
          onCalendarChange={setDateRange}
          />
      </Col>
      <Col span={12}>
        <Select value={context.chartResolution} style={{width: 120}} onChange={setChartResolution}>
          <Option value="h">Hour</Option>
          <Option value="d">Day</Option>
          <Option value="m">Month</Option>
        </Select>
      </Col>
    </Row>
  )
}

export default TimeSelector
