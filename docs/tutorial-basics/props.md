---
sidebar_position: 1
---

# Props

|       Prop        |  Type  |   Default   | Require |                                                  Description                                                   |
| :---------------: |:------:|:-----------:| :-----: |:--------------------------------------------------------------------------------------------------------------:|
|      height       | Number |     400     |    Y    |                                               Chart area height                                                |
|      width       | Number |    auto     |    N    |                                                Chart area auto                                                 |
|      option       | Object |    null     |    Y    |   Chart configuration, see more：[Apache ECharts - options](https://echarts.apache.org/en/option.html#title)    |
|  backgroundColor  | String | transparent |    N    |                                             Chart background color                                             |
|     themeName     | String |      -      |    N    | There are only six officially available themes:<br />`vintage` `dark`  `macarons` `infographic` `shine` `roma` |
|  webViewSettings  | Object |    null     |    N    |                                     Customize WebView container properties                                     |
| formatterVariable | Object |    null     |    N    |                            If option’formatter function need variable,can use this.                            |
| extension | object |    Null     |    N    |          Dynamic support for tripartite expansion, such as word cloud, water polo map, etc. example.           |
|   customMapData   | Object |    null     |    N    |                     For custom maps, null is a world map. See the following usage examples                     |
|   eventActions   | Object |    null     |    N    |                                             Custom charts events.                                              |
|   fontFamilies   | Array  |     []      |    N    |                                             Custom font families.                                              |
|   enableParseStringFunction   | Boolean |    false    |  N  |                                   If enabled, function are parse as strings                                    |

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
Chart area width, usually you don't need setting, it will follow parent container.


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

You can go to this page to download custom map JSON:

https://geojson.io/

## eventActions
Custom charts events.

See more [Event List](https://echarts.apache.org/en/api.html#events)

```jsx
  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <RNEChartsPro
        eventActions={{
          finished:()=>{
            alert(1)
          },
        }}
        {...props}
      />
    </View>
  );
```
## fontFamilies
Custom font families.

See more：[Usage](/react-native-echarts-pro-docs/docs/tutorial-fontfamily/custom)

```jsx
import TESTCSS from './TEST';
import TESTCSS2 from './TEST2';
return (
  <View style={{ height: 300, paddingTop: 25 }}>
    <RNEChartsPro
      fontFamilies={[
        { fontName: "TEST", fontFile: TESTCSS },
        { fontName: "TEST2", fontFile: TESTCSS2 },
      ]},
      {...props}
    />
  </View>
);
```

## enableParseStringFunction
`> 1.9.0`

In most cases, the `formatter` use `function` type. But the `Hermes` engine compiles it into bytecode and cannot run when injected into a `webview`, enabled this property parse the `function` as a string.

```javascript
// Echarts option
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      formatter: `function (val) {
        return val + '\\n' + '(week)';
      }`,
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: `function (val) {
        return val;
      }`,
      textStyle: {
        color: `function (value, index) {
          return value >= 200 ? 'green' : 'red';
        }`,
      },
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

// Echarts view
<RNEChartsPro
  style={{width: Dimensions.get('window').width}}
  option={option}
  enableParseStringFunction
/>
```
