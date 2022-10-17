---
sidebar_position: 2
sidebar_label: '事件'
---
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
