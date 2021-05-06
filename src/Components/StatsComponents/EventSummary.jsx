import React from 'react';
import { Card } from 'antd';
import DataTable from './DataTable'

const EventSummary = () => {
  const columns = [
    {title: "Category", key: "cat", search: true, sort: false},
    {title: "Name", key: "name", search: true, sort: false},
    {title: "Counts", key: "count", search: false, sort: true}
  ]
  const data = [
    {
      key: '1',
      cat: "Dropdown",
      name: "Country_USA",
      count: 18
    },
    {
      key: '2',
      cat: "Dropdown",
      name: "Country_India",
      count: 14
    },
    {
      key: '3',
      cat: "Dropdown",
      name: "State_Uttar Pradesh",
      count: 11
    }
  ];
  
  return (
    <Card title="Top Events">
      <DataTable data={data} columns={columns}></DataTable>
    </Card>
  )
}

export default EventSummary
