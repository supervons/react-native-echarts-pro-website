---
sidebar_position: 1
---

# Props

|       Prop        |  Type  |   Default   | Require |                         Description                          |
| :---------------: | :----: | :---------: | :-----: | :----------------------------------------------------------: |
|      height       | number |     400     |    Y    |                      Chart area height                       |
|      width       | number |     auto     |    N    |                      Chart area auto                       |
|      option       | object |    null     |    Y    | Chart configuration, see more：[Apache ECharts - options](https://echarts.apache.org/en/option.html#title) |
|  backgroundColor  | string | transparent |    N    |                    Chart background color                    |
|     themeName     | string |      -      |    N    | There are only six officially available themes:<br />vintage \|\| dark \|\| macarons \|\| infographic \|\| shine \|\| roma |
|  webViewSettings  | object |    null     |    N    |            Customize WebView container properties            |
| formatterVariable | object |    null     |    N    |   If option’formatter function need variable,can use this.   |
| extension | object |    null     |    N    |   Dynamic support for tripartite expansion, such as word cloud, water polo map, etc. example.   |
|   customMapData   | object |    null     |    N    | For custom maps, null is a world map. See the following usage examples |

## height

Chart area height
```jsx
// ...
<RNEChartsPro height={250} {...other-props}/>
// ...
```
If you want **resize height**, you can do this:
```jsx
export default function Demo() {
  const echartsRef = new useRef(null);
  const pieOption = {...options};

  function resizeHeight() {
    echartsRef.current.getInstance('resize', {height: 250})
  }
  
  return (
      <View style={{ height: 300, paddingTop: 25 }}>
        <RNEChartsPro ref={echartsRef} height={200} option={pieOption} />
        <Button title={'Resize'} onPress={resizeHeight}/>
      </View>
  );
}
```
More on `getInstance` later.

## width
Chart area height, usually you don't need setting, it will follow parent container.


```jsx title='This code echarts width will follow the parent view=200：'
export default function Demo() {
  const pieOption = {...options};
  return (
      <View style={{ height: 300, width: 200, paddingTop: 25 }}>
        <RNEChartsPro height={200} option={pieOption} />
      </View>
  );
}
```
If you want **resize width**, like resize height.

## option
Chart configuration, see more : [Apache ECharts - options](https://echarts.apache.org/en/option.html#title)

## backgroundColor
Chart's WebView container background color, default `transparent`.

## themeName
Chart’s built-in theme:

vintage || dark || macarons || infographic || shine || roma

## webViewSettings
Chart's WebView container settings.

## formatterVariable
If the method in `option` uses variables, it can be passed through this attribute
```jsx
  // ...
  const pieOption = {
    yAxis: {
      axisLabel: {
        formatter(value) {
          return value + formatterVariable.unit;
        }
      }
    },
  }
  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <RNEChartsPro
        formatterVariable={{ unit: "dollar" }}
        option={pieOption}
      />
    </View>
  )
  // ...
```
## extension
Dynamic support for tripartite expansion, such as word cloud, water polo map, etc. example（echarts-liquidfill）：
```jsx
  const liquidOption = {
    title: {
      text: "水球图",
      left: "center",
    },
    series: [
      {
        type: "liquidFill",
        data: [0.6],
        color: ["#afb11b"],
        itemStyle: {
          opacity: 0.6,
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9,
          },
        },
      },
    ],
  };
  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <RNEChartsPro
        extension={[ // Dynamically import third-party CDN or import min.js file
          "https://cdn.jsdelivr.net/npm/echarts-liquidfill@3.0.0/dist/echarts-liquidfill.min.js",
        ]}
        option={liquidOption}
      />
    </View>
  );
```
[Extension-Demo](https://github.com/supervons/ExploreRN/blob/master/src/components/charts/chartsExtension.js)

## customMapData
Custom map data, default world map.

```jsx
import ChinaJsonData from "./ChinaJsonData.js";
  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <RNEChartsPro
        {...props}
        customMapData={ChinaJsonData}
      />
    </View>
  );
```

[ChinaJsonData.js](https://github.com/supervons/react-native-echarts-pro/blob/master/src/components/Echarts/map/chinaJson.js)
