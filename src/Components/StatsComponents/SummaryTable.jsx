import DataTable from './DataTable'
import { Card } from 'antd';

const SummaryTable = () => {
  const columns = [
    {title: "URL", key: "url", urlPrefix: "/url", search: true, sort: false},
    {title: "PVs", key: "pvs", search: false, sort: true},
    {title: "Avg Secs", key: "secs", search: false, sort: true},
    {title: "Aff Idx", key: "affidx", search: false, sort: true},
    {title: "New Users %", key: "newusers", search: false, sort: true}
  ]
  const data = [
    {
      key: '1',
      url: "/blog/highest-order-bit/",
      pvs: 67,
      secs: 259,
      affidx: 70,
      newusers: 62
    },
    {
      key: '2',
      url: "/blog/cash-flow-games/",
      pvs: 60,
      secs: 281,
      affidx: 51,
      newusers: 56
    },
    {
      key: '3',
      url: "/blog/",
      pvs: 22,
      secs: 23,
      affidx: 82,
      newusers: 36
    },
    {
      key: '4',
      url: "/blog/so-good-they-cant-ignore-you/",
      pvs: 20,
      secs: 110,
      affidx: 26,
      newusers: 75
    },
    {
      key: '5',
      url: "/blog/working-backwards/",
      pvs: 14,
      secs: 153,
      affidx: 89,
      newusers: 64
    }
  ];
  
  return (
    <Card title="Top URLs">
      <DataTable data={data} columns={columns}></DataTable>
    </Card>
  )
}

export default SummaryTable
