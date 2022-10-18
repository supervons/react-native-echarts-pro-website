---
sidebar_position: 3
sidebar_label: 'senior'
---
## Move, zoom and reset
Some countries/regions are small in the world, they may not be visible under the default zoom ratio, so `slide` or `zoom` is required to match the display, and `reset` is to reset the default zoom ratio.
### move & zoom
Use `roam` props, if you only want to enable zoom or move, you can set it to `'scale'` or `'move'`. Set to `true` to enable both.

### reset
After zooming or panning, restore the original position; use `restore` in `toolbox` to configure:

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

## Touch optimization
If the map is in a `FlatList` or `ScrollView`, `move&zoom` may conflict with `list scroll` (especially on the `Android` side), such as the following example:
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

The solution is to disable the scrolling state of the external list when the map area is touched, and resume scrolling when released, as follows:
```jsx
import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import RNEChartsPro from "react-native-echarts-pro";

export default function MapCharts() {
  const scrRef = useRef(null);
  const handleStop = state => {
    scrRef.current.setNativeProps({ scrollEnabled: state });
  };
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
    <View
      style={{ flex: 1 }}
      onStartShouldSetResponderCapture={() => {
        handleStop(true);
      }}>
      <ScrollView style={{ flex: 1 }} ref={scrRef}>
        <View style={{ height: 300, backgroundColor: "#965454" }}></View>
        <View
          onStartShouldSetResponderCapture={() => {
            handleStop(false);
          }}>
          <RNEChartsPro
            height={250}
            option={mapData}
            onPress={res => {
              alert(JSON.stringify(res));
            }}
          />
        </View>
        <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>
      </ScrollView>
    </View>
  );
}

```

## Customize data
The default data is the world map. If you need to customize the map json, you can download the map data from the following channels:

- China：[echarts-china-cities-js](https://github.com/echarts-maps/echarts-china-cities-js)
- Other：[geojson-io](https://geojson.io)
