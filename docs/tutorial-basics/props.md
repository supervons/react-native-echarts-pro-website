---
sidebar_position: 1
---

# Props

|       Prop        |  Type  |   Default   | Require |                         Description                          |
| :---------------: | :----: | :---------: | :-----: | :----------------------------------------------------------: |
|      height       | number |     400     |    Y    |                      Chart area height                       |
|      width       | number |     auto     |    Y    |                      Chart area auto                       |
|      option       | object |    null     |    Y    | Chart data configuration items, see details：https://echarts.apache.org/en/option.html#title |
|  backgroundColor  | string | transparent |    N    |                    Chart background color                    |
|     themeName     | string |      -      |    N    | There are only six officially available themes:<br />vintage \|\| dark \|\| macarons \|\| infographic \|\| shine \|\| roma |
|  webViewSettings  | object |    null     |    N    |            Customize WebView container properties            |
| formatterVariable | object |    null     |    N    |   If option’formatter function need variable,can use this.   |
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
