---
sidebar_position: 2
---

# Method

| Method name  |             Params             |                     Description                     |
| :----------: | :----------------------------: | :-------------------------------------------------: |
| setNewOption | option(require), optionSetting? |          重新设置图表 option.            |
| getInstance | functionName, params? |           获取图表 instance.            |
|   dispatchAction    |          callbackData?          | 图表事件监听. |

## setNewOption
### option
图表核心配置项。

```jsx
<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>

// use, no optionSetting
this.echarts.setNewOption({...})
```

### optionSetting
默认是会合并每次更新的数据，如果不想合并可以参考：

```jsx
<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>

this.echarts.setNewOption({...}, {
    notMerge?: boolean,
    replaceMerge?: string | string[],
    lazyUpdate?: boolean,
})
```
参考更多 => [setOption](https://echarts.apache.org/en/api.html#echartsInstance.setOption)

## getInstance
获取图表实例 instance，以便做更多的操作.

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

获取图表实例宽度：
```jsx
echartsRef.current.getInstance('getWeight').then(res=>{
  console.log(res)
})
```

### getHeight
`promise`

获取图表实例高度：
```jsx
echartsRef.current.getInstance('getHeight').then(res=>{
  console.log(res)
})
```

### getOption
`promise`

获取图表 option 配置项：
```jsx
echartsRef.current.getInstance('getOption').then(res=>{
  console.log(res)
})
```

### resize
`void`

重新设置图表高度、宽度等属性：
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
查看更多 => [EchartsInstance](https://echarts.apache.org/en/api.html#echartsInstance)

## dispatchAction
功能同： [getInstance](#getinstance).
```jsx
echartsRef.current.dispatchAction({
  type: "showTip",
  seriesIndex: 0,
  dataIndex: 0,
})
```
