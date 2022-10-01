---
sidebar_position: 2
---

# Method

| Method name  |             Params             |                     Description                     |
| :----------: | :----------------------------: | :-------------------------------------------------: |
| setNewOption | option(require), optionSetting? |           Reassign and render the chart.            |
| getInstance | functionName, params? |           Get chart instance.            |
|   dispatchAction    |          callbackData?          | Chart click event,callbackData is the clicked data. |

## setNewOption
### option

```jsx
<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>

// use, no optionSetting
this.echarts.setNewOption({...})
```

### optionSetting
If you don't want to merge options, you can do this:

```jsx
<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>

this.echarts.setNewOption({...}, {
    notMerge?: boolean,
    replaceMerge?: string | string[],
    lazyUpdate?: boolean,
})
```
See more => [setOption](https://echarts.apache.org/en/api.html#echartsInstance.setOption)

## getInstance
Get the chart instance.
### usage
```jsx
function resizeHeight() {
    echartsRef.current.getInstance('getHeight').then(res=>{
        console.log(res) // 200
    })
}
return (
    <View style={{ height: 300, paddingTop: 25 }}>
        <RNEChartsPro ref={echartsRef} height={200} option={pieOption} />
        <Button title={'Resize'} onPress={resizeHeight}/>
    </View>
);
```

### getWidth
`promise`

Get the charts weight.
```jsx
echartsRef.current.getInstance('getWeight').then(res=>{
  console.log(res)
})
```

### getHeight
`promise`

Get the charts height.
```jsx
echartsRef.current.getInstance('getHeight').then(res=>{
  console.log(res)
})
```

### getOption
`promise`

Get the charts option.
```jsx
echartsRef.current.getInstance('getOption').then(res=>{
  console.log(res)
})
```

### resize
`void`

Resizes chart, which should be called manually when container size changes.
```jsx
echartsRef.current.getInstance('resize', {height: 300, ...other})
```

### dispatchAction
`void`

Triggers chart action, like chart switch legendToggleSelect,zoom data area dataZoom, show tooltip showTip and so on. See action and events for more information.
```jsx
echartsRef.current.getInstance('dispatchAction', {
  type: "showTip",
  seriesIndex: 0,
  dataIndex: 0,
})
```
See more => [EchartsInstance](https://echarts.apache.org/en/api.html#echartsInstance)

## dispatchAction
Will be merged to [getInstance](#getinstance).
```jsx
echartsRef.current.dispatchAction({
  type: "showTip",
  seriesIndex: 0,
  dataIndex: 0,
})
```

`datazoom` Demo:
```jsx
import React, { useRef } from "react";
import { Text, View } from "react-native";
import Echarts from "react-native-echarts-pro";
export default function StockInDetail() {
  const echartsRef = new useRef(null);
  function highlight() {
    echartsRef.current.dispatchAction({
      // This line
      batch: [
        {
          animation: {},
          batch: null,
          end: 80,
          start: 30,
          type: "datazoom",
        },
      ],
      type: "dataZoom",
    });
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Echarts
        ref={echartsRef}
        option={{
          xAxis: {
            type: "category",
            boundaryGap: false,
            inverse: true,
            data: [
              "2022/9/30",
              "2022/9/29",
              "2022/9/28",
              "2022/9/27",
              "2022/9/26",
              "2022/9/25",
              "2022/9/24",
              "2022/9/23",
              "2022/9/22",
              "2022/9/21",
            ],
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
          yAxis: {
            type: "value",
            position: "right",
            offset: 4,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#ccc",
              },
            },
            min: 0,
            max: 150,
            boundaryGap: [0, "100%"],
          },
          animation: false,
          dataZoom: [
            {
              type: "inside",
              minValueSpan: 5,
              start: 0,
              throttle: 0,
              end: 10,
            },
            {
              start: 0,
              end: 10,
            },
          ],
          series: [
            {
              name: "Fake Data",
              type: "line",
              symbol: "none",
              sampling: "lttb",
              itemStyle: {
                color: "rgb(255, 70, 131)",
              },
              data: [50, 70, 80, 90, 30, 40, 56, 67, 78, 87],
            },
          ],
        }}
        height={300}
        eventActions={{
          dataZoom: params => {
            console.log(params);
          },
        }}
      />
      <Text onPress={highlight}>Click action</Text>
    </View>
  );
}
```
