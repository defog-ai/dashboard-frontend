import React, { useContext } from 'react';
import {Context} from '../Context';
import { Row, Col, DatePicker } from 'antd';
import moment from 'moment';

const TimeSelector = () => {
  const { RangePicker } = DatePicker;
  
  const [context, setContext] = useContext(Context);  
  const getDateRange = (dates, dateStrings, info) => {
    setContext({
      ...context,
      inputDateRange: dates
    });
  }

  return (
    <Row>
      <Col span={24}>
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
          onCalendarChange={getDateRange}
          />
      </Col>
    </Row>
  )
}

export default TimeSelector
