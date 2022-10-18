---
sidebar_position: 2
sidebar_label: 'events'
---
Use `onPress` ：
```jsx
...
<RNEChartsPro height={250} option={mapData} onPress={(res)=>alert(JSON.stringify(res))}/>
...
```
Callback data：
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
`name` is the selected country/region, and `value` is the selected value (such as heat map).
