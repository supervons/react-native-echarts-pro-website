---
sidebar_position: 2
sidebar_label: '自定义'
---
自定义字体可以让你的图表拥有更丰富的展示能力。

核心是让`WebView`容器加载字体，然后让`Echarts`能够进行调用，下面，将详细介绍如何接入自定义字体！

## 步骤
1. 下载你所需要的字体文件；
2. 转换成 `base64` 格式的 `css` 文件；（打开 `Base64 encode` 选项）
3. 使用属性 `fontFamilies` 引入；
4. `Echarts options` 中使用即可；

### 文件格式转换
[点此跳转转换](https://transfonter.org/)

首先，你需要勾选 `Base64 encode` 选项，然后点击 `Convert` 转换。
<img style={{height:600}} src="https://raw.githubusercontent.com/supervons/ImageLibrary/master/react-native-echarts-pro-website/font/trans_1.png" alt="字体转换工具" height="500" align="bottom" />

生成的文件就会包含 `CSS` 格式：
<img style={{height:200}} src="https://raw.githubusercontent.com/supervons/ImageLibrary/master/react-native-echarts-pro-website/font/trans_2.png" alt="CSS文件" height="500" align="bottom" />

### 属性引入

### 使用
