---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **react-native-echarts-pro in less than 5 minutes**.

## Getting Started

```bash
npm install react-native-echarts-pro --save
```
or
```bash
yarn add react-native-echarts-pro
```
### What you'll need
- [react-native](https://reactnative.dev/) version 0.59 or above.

- [react-native-webview](https://github.com/react-native-webview/react-native-webview/) version 6.9.0 or above.

## Usage
### Base
<img style={{height:400}} src="https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/pieDemo.png" alt="iOS基本使用"/><img style={{height:400}} src="https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/pieDemo_android.png" alt="androd基本使用" />

```jsx
import React from "react";
import { View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function RNEPDemo() {
  const pieOption = {
    series: [
      {
        name: "Source",
        type: "pie",
        legendHoverLink: true,
        hoverAnimation: true,
        avoidLabelOverlap: true,
        startAngle: 180,
        radius: "55%",
        center: ["50%", "35%"],
        data: [
          { value: 105.2, name: "android" },
          { value: 310, name: "iOS" },
          { value: 234, name: "web" },
        ],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: "#23273C",
            },
          },
        },
      },
    ],
  };
  return (
          <View style={{ height: 300, paddingTop: 25 }}>
            <RNEChartsPro height={250} option={pieOption} />
          </View>
  );
}
```

### Map
<img style={{height:400}} src="https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/mapDemo.png" alt="iOS地图图片" height="500" align="bottom" /><img style={{height:400}} src="https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/mapDemo_android.png" alt="android地图图片" height="500" align="bottom" />

```jsx
import React from "react";
import { View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function Demo() {
  const mapData = {
    visualMap: {
      show: true ,
      left: "right",
      top: "center",
      min: 1,
      max: 3,
      calculable: true,
    },
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
    toolbox: {
      show: true,
      orient: "horizontal",
      x: "left",
      y: "bottom",
      backgroundColor: "#1e90ff60",
      itemGap: 10,
      itemSize: 10,
      color: "#ffffff",
      showTitle: false,
      feature: {
        restore: {
          show: true,
          title: "Reset",
        },
      },
    },
  };

  return (
          <View style={{ height: 300 }}>
            <RNEChartsPro height={250} option={mapData} />
          </View>
  );
}
```
