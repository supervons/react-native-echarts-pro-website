---
sidebar_position: 1
---

# Props

```jsx
  return (
    <View style={{ height: 300, paddingTop: 25 }}>
      <RNEChartsPro
        eventActions={{
          finished:()=>{
            alert(1)
          },
        }}
        {...props}
      />
    </View>
  );
```
