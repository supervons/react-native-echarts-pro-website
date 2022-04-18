---
sidebar_position: 1
---

# Props

|       属性名        |  类型  |   默认值   | 必填 |                         描述                          |
| :---------------: | :----: | :---------: | :-----: | :----------------------------------------------------------: |
|      height       | number |     400     |    Y    |                      图表区域高度                       |
|      width       | number |     auto     |    N    |                      图表区域宽度                       |
|      option       | object |    null     |    Y    | 图表核心配置项，请参考：[Apache ECharts - options](https://echarts.apache.org/en/option.html#title) |
|  backgroundColor  | string | transparent |    N    |                      背景颜色                    |
|     themeName     | string |      -      |    N    | 内置主题 ，六种可选:<br />vintage \|\| dark \|\| macarons \|\| infographic \|\| shine \|\| roma |
|  webViewSettings  | object |    null     |    N    |            自定义 WebView 容器属性            |
| formatterVariable | object |    null     |    N    |   如果 formatter 使用了动态单位变量，使用此属性传入   |
| extension | object |    null     |    N    |   动态扩展支持，如词云、水球图等   |
|   customMapData   | object |    world JSON     |    N    | 自定义地图数据，默认为世界地图 JSON |

## height

图表区域高度。
```jsx
// ...
<RNEChartsPro height={250} {...other-props}/>
// ...
```
如果你想 **动态设置高度**, 参考:
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
更多的探索后续在 `getInstance` 中介绍。

## width
图表宽度, 通常不需要设置, 会自动适应容器宽度。


```jsx title='下面的代码中，图表宽度跟随父容器 View = 200：'
export default function Demo() {
  const pieOption = {...options};
  return (
      <View style={{ height: 300, width: 200, paddingTop: 25 }}>
        <RNEChartsPro height={200} option={pieOption} />
      </View>
  );
}
```
如果你想动态设置宽度，参考**动态设置高度**。

## option
图表核心配置项，非常重要，请参考 : [Apache ECharts - options](https://echarts.apache.org/en/option.html#title)

## backgroundColor
图表容器背景颜色, 默认为 `transparent`。

## themeName
图表内置六种可选主题:

vintage || dark || macarons || infographic || shine || roma

## webViewSettings
自定义 WebView 容器属性，如禁止滚动等等。

## formatterVariable
如果配置项 `option` 中使用动态单位变量, 可以作为参数传入：
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
动态扩展支持，如词云、水球图等，下面为水球图的例子（echarts-liquidfill）：
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
[完整示例-Demo](https://github.com/supervons/ExploreRN/blob/master/src/components/charts/chartsExtension.js)

## customMapData
自定义地图数据.

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

[地图数据-Demo.js](https://github.com/supervons/react-native-echarts-pro/blob/master/src/components/Echarts/map/chinaJson.js)
