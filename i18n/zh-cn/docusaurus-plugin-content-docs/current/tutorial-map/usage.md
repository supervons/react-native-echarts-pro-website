---
sidebar_position: 1
sidebar_label: '基础用法'
---

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
