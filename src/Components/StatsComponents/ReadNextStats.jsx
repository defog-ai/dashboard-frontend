import React from 'react';
import DataTable from './DataTable'
import { Card } from 'antd';

const ReadNextStats = () => {
  const columns = [
    {title: "URL", key: "url", urlPrefix: "/url", search: true, sort: false},
    {title: "PVs", key: "pvs", search: false, sort: true}
  ]
  const data = [
    {
      key: '3',
      url: "/blog/",
      pvs: 34
    },
    {
      key: '4',
      url: "/blog/so-good-they-cant-ignore-you/",
      pvs: 20
    },
    {
      key: '5',
      url: "/blog/working-backwards/",
      pvs: 14
    }
  ];
  
  return (
    <Card title="Next URL">
      <DataTable data={data} columns={columns}></DataTable>
    </Card>
  )
}

export default ReadNextStats
