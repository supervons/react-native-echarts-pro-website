---
sidebar_position: 1
---

# usage
本章将详细介绍地图的一系列操作，如果有未覆盖的场景，欢迎前往[问题专区](https://github.com/supervons/react-native-echarts-pro/issues)留言讨论。
## 基础用法
以下为地图最小示例，后续操作将在该示例上进行增改：
```jsx
import React from "react";
import { View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function Demo() {
  const mapData = {
    geo: [
      {
        type: "map",
        map: "world",
        mapType: "world",
        selectedMode: "single",
        itemStyle: {
          normal: {
            areaStyle: { color: "#B1D0EC" },
            color: "#eeeeee",
            borderColor: "#dadfde",
          },
          emphasis: {
            //mouse hover style
            label: {
              show: true,
              textStyle: {
                color: "#000000",
              },
            },
          },
        },
        roam: true,
      },
    ],
    series: {
      type: "effectScatter",
      coordinateSystem: "geo",
      geoIndex: 0,
      itemStyle: {
        color: "red",
      },
      data: [[116.4551, 40.2539, 10]],
    },
  };

  return (
          <View style={{ height: 300 }}>
            <RNEChartsPro height={250} option={mapData} />
          </View>
  );
}
```

## 事件触发
使用 `onPress` ：
```jsx
...
<RNEChartsPro height={250} option={mapData} onPress={(res)=>alert(JSON.stringify(res))}/>
...
```
回调数据格式如下：
```json
{
  "color": "", 
  "componentType": "geo", 
  "data": {}, 
  "dataIndex": 0, 
  "dataType": "", 
  "name": "China", 
  "seriesIndex": 0, 
  "seriesName": "", 
  "seriesType": "", 
  "type": "click", 
  "value": 0
}
```
其中，`name` 为选中国家/地区，`value` 为选中值（若为热力图等）。

[//]: #补充示例 (TODO)
## 滑动，缩放及归位
考虑到某些国家或地区在世界范围内较小，故可能在默认缩放比例下不可见，故需要滑动，缩放来配合显示，归位则为复位默认缩放比例。
### 滑动

### 缩放

### 归位

### 列表优化
如果地图处于 `FlatList` 或 `ScrollView` 中，滑动可能会存在冲突，可以考虑优化。

## 自定义数据
默认数据为世界地图，若需要自定义展示，可以前往
[//]: #补充示例 (TODO)

## 地图下钻
