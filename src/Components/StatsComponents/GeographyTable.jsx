import React from 'react';
import DataTable from './DataTable'
import { Card } from 'antd';

const GeographyTable = () => {
  // const [data, setData] = useState([]);
  // const [context] = useContext(Context);

  // const timerange = context.inputDateRange[0].format("YYYY-MM-DD-HH-00") + "to" + context.inputDateRange[1].format("YYYY-MM-DD-HH-00");
  // add others to this, like referrers, devices, countries, cities etc later on

  // const getData = async() => {
  //   const url = "https://dashboard.loki.ai/get_pv_trend_data?" + new URLSearchParams({
  //     timerange: timerange,
  //     // ref: ref,
  //     // deviceTypes: deviceTypes,
  //     // countries: countries,
  //     // cities: cities,
  //     // url: url
  //   });
  //   const response = await fetch(url, {
  //     // method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Cookie": "client_id=cedric; login_cookie=319633a0b01b255819cb18457153eba1caa075de7984c515039733cb24d138e0"
  //     }
  //   });
  //   const data = await response.json();
  //   setData(data);
  // }

  // useEffect(() => {
  //   const data = getData();
  // }, [context]);
  
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