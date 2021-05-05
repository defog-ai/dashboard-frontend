import DataTable from './DataTable'
import { Card } from 'antd';

const GeographyTable = () => {
  const columns = [
    {title: "Country", key: "country", search: true, sort: false},
    {title: "City", key: "city", search: true, sort: false},
    {title: "PVs", key: "pvs", search: false, sort: true}
  ]
  const data = [
    {
      key: '1',
      country: "United States",
      city: "New York",
      pvs: 281
    },
    {
      key: '2',
      country: "United States",
      city: "San Francisco",
      pvs: 259
    },
    {
      key: '3',
      country: "Singapore",
      city: "Singapore",
      pvs: 82
    },
    {
      key: '4',
      country: "India",
      city: "Delhi",
      pvs: 75
    }
  ];
  
  return (
    <Card title="Top Geographies">
      <DataTable data={data} columns={columns}></DataTable>
    </Card>
  )
}

export default GeographyTable