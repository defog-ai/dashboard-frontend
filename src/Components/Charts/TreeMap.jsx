import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import heatmap from 'highcharts/modules/heatmap';
import treemap from 'highcharts/modules/treemap';

const TreeMap = () => {
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

  const data = {
    data: [
      {
        colorValue: 24.022,
        name: "Facebook",
        url: "/ref_dets?ref=Facebook&timerange=None",
        value: 4
      },
      {
        "colorValue": 112.84308849557517,
        "name": "Google",
        "url": "/ref_dets?ref=Google&timerange=None",
        "value": 123
      },
      {
        "colorValue": 42.383,
        "name": "Reddit",
        "url": "/ref_dets?ref=Reddit&timerange=None",
        "value": 1
      },
      {
        "colorValue": 450.38592727272726,
        "name": "Twitter",
        "url": "/ref_dets?ref=Twitter&timerange=None",
        "value": 60
      },
      {
        "colorValue": 63.945,
        "name": "app.raindrop.io",
        "url": "/ref_dets?ref=app.raindrop.io&timerange=None",
        "value": 1
      },
      {
        "colorValue": 181.5752735042735,
        "name": "commoncog.com",
        "url": "/ref_dets?ref=commoncog.com&timerange=None",
        "value": 123
      },
      {
        "colorValue": 145.33922097378286,
        "name": "direct",
        "url": "/ref_dets?ref=direct&timerange=None",
        "value": 294
      },
      {
        "colorValue": 59.997,
        "name": "duckduckgo.com",
        "url": "/ref_dets?ref=duckduckgo.com&timerange=None",
        "value": 1
      },
      {
        "colorValue": 27.1432,
        "name": "forum.commoncog.com",
        "url": "/ref_dets?ref=forum.commoncog.com&timerange=None",
        "value": 5
      },
      {
        "colorValue": 338.533,
        "name": "getpocket.com",
        "url": "/ref_dets?ref=getpocket.com&timerange=None",
        "value": 1
      },
      {
        "colorValue": 423.94649999999996,
        "name": "news.ycombinator.com",
        "url": "/ref_dets?ref=news.ycombinator.com&timerange=None",
        "value": 2
      },
      {
        "colorValue": 119.86433333333333,
        "name": "publish.obsidian.md",
        "url": "/ref_dets?ref=publish.obsidian.md&timerange=None",
        "value": 3
      },
      {
        "colorValue": 36.401,
        "name": "search.yahoo.com",
        "url": "/ref_dets?ref=search.yahoo.com&timerange=None",
        "value": 1
      },
      {
        "colorValue": 121.22125000000001,
        "name": "sive.rs",
        "url": "/ref_dets?ref=sive.rs&timerange=None",
        "value": 4
      },
      {
        "colorValue": 211.3895,
        "name": "tasshin.com",
        "url": "/ref_dets?ref=tasshin.com&timerange=None",
        "value": 5
      },
      {
        "colorValue": 41.418,
        "name": "www.bing.com",
        "url": "/ref_dets?ref=www.bing.com&timerange=None",
        "value": 1
      },
      {
        "colorValue": 80.526,
        "name": "www.educative.io",
        "url": "/ref_dets?ref=www.educative.io&timerange=None",
        "value": 1
      },
      {
        "colorValue": 30.385,
        "name": "www.googleapis.com",
        "url": "/ref_dets?ref=www.googleapis.com&timerange=None",
        "value": 1
      },
      {
        "colorValue": 20,
        "name": "yandex.ru",
        "url": "/ref_dets?ref=yandex.ru&timerange=None",
        "value": 1
      },
      {
        "colorValue": 418.96175,
        "name": "yihui.org",
        "url": "/ref_dets?ref=yihui.org&timerange=None",
        "value": 8
      }
    ],
    "maxColorValue": 450.38592727272726,
    "minColorValue": 27.1432
}

  const minColorValue = data.minColorValue;
  const maxColorValue = data.maxColorValue;

  // const colorRange = [
  //   [data.minColorValue, '#ef8a62'],
  //   [(data.minColorValue + data.maxColorValue)/2, '#f7f7f7'],
  //   [data.maxColorValue, '#67a9cf']
  // ];

  const colorRange = [
      [0, '#ef8a62'],
      [0.5, '#f7f7f7'],
      [1, '#67a9cf']
    ];

  const options = {
    colorAxis: {
      min: minColorValue,
      max: maxColorValue,
      stops: colorRange,
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      data: data.data
    }],
    title: {text: "Referrers by Seconds/PV"},
    tooltip: {
      formatter: function() {
        return "<b>" + this.point.name + "</b><br>Pageviews: " + this.point.value.toFixed(0) + "<br>" + "Seconds/PV" + ": " + this.point.colorValue.toFixed(1);
      }
    },
    credits: {enabled: false}
  }

  heatmap(Highcharts);
  treemap(Highcharts);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options} />
  )
}

export default TreeMap
