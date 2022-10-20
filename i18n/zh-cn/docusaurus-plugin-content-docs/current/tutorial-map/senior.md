---
sidebar_position: 3
sidebar_label: '高级'
---
## 滑动，缩放及归位
考虑到某些国家或地区在世界范围内较小，可能在默认缩放比例下不可见，故需要`滑动`或`缩放`来配合显示，`归位`则为复位默认缩放比例。
### 滑动 & 缩放
使用 `roam` 属性进行配置，如果只想要开启缩放或者平移，可以设置成 `'scale'` 或者 `'move'`。设置成 `true` 为都开启。

### 归位
缩放或平移后，恢复初始位置；使用`toolbox`中的 `restore` 进行配置：
```json
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
  }
```

### 列表优化
如果地图处于 `FlatList` 或 `ScrollView` 中，`滑动&缩放`可能会和`列表滚动`存在冲突（尤其是 `Android` 端），例如如下示例：
```jsx
import React from "react";
import { ScrollView, View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function MapCharts() {
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
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 300, backgroundColor: "#965454" }}></View>
      <RNEChartsPro
        height={250}
        option={mapData}
        onPress={res => {
          alert(JSON.stringify(res));
        }}
      />
      <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>
    </ScrollView>
  );
}
```

解决的办法就是，设置 `WebView` 的 `nestedScrollEnabled` 属性为 `true` 即可兼容：
```jsx
import React from "react";
import { ScrollView, View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function MapCharts() {
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
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: 300, backgroundColor: "#965454" }}></View>
      <RNEChartsPro
        height={250}
        option={mapData}
        webViewSettings={{
          nestedScrollEnabled: true,
        }}
        onPress={res => {
          alert(JSON.stringify(res));
        }}
      />
      <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>
    </ScrollView>
  );
}
```

## 自定义数据
默认数据为世界地图，若需要自定义展示，可以前往以下渠道下载地图数据：

- 中国数据：[echarts-china-cities-js](https://github.com/echarts-maps/echarts-china-cities-js)
- 其他自定义：[geojson-io](https://geojson.io)
