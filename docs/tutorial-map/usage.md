---
sidebar_position: 1
sidebar_label: 'basic'
---
This chapter will introduce a series of operations on the map in detail. If there are scenes that are not covered, please go to [issues](https://github.com/supervons/react-native-echarts-pro/issues).
## example
The following is a minimal example of a map, which will be added and modified in subsequent operations:
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
