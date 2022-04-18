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
