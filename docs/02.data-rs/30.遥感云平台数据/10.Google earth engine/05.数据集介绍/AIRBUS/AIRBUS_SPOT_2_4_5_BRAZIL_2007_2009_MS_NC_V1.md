---
title: "巴西 SPOT 多光谱伪自然色影像（2007–2009）"
date: 2026-11-03 12:00:00
permalink: /pages/1f2f6c63/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "forest-code"
  - "google"
  - "rgb"
  - "satellite-imagery"
  - "spot"
---

# 巴西 SPOT 多光谱伪自然色影像（2007–2009）

英文原名：SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil

## 这是什么数据

这是 2008 年前后巴西上空的 SPOT 2、4、5 卫星影像，处理成了接近肉眼颜色的「伪自然色」RGB 图。SPOT 的 HRV、HRG 传感器没有原生蓝波段，所以这套产品用多光谱波段合成出近似自然外观的彩色图，方便直观判读土地利用与覆盖。空间分辨率保持原生多光谱尺度：SPOT 5 为 10 米，SPOT 2、4 为 20 米。另见 [Brazil Forest Imagery Dataset 2008: Visual Basemap](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_VISUAL)。

Google 还给每景影像手工勾绘了云、薄云和云影的范围，转成掩膜作为附加波段（cloud_mask）。获取这份数据需先填写[申请表](https://forms.gle/jQmCbWgarjENQBYz6)。

## 覆盖范围与时间

- 覆盖范围：巴西
- 时间范围：2007-01-01 至 2009-11-26

## 分辨率与规格

- 空间分辨率：约 20 米（SPOT 5 为 10 米，SPOT 2/4 为 20 米）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红光反射率 | 20 |  |
| G | 绿光反射率 | 20 |  |
| B | 蓝光反射率：伪自然色产品合成的蓝通道 | 20 |  |
| cloud_mask | 云掩膜：0 = 云/阴影，1 = 晴空 | 20 |  |

## 能拿来做什么

- 直观判读 2008 年前后巴西的土地利用与森林状况
- 做历史环境变化分析的彩色底图
- 结合巴西森林法等历史时点做合规核查

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1');
```

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1`
- 提供方：Google/CNES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1

## 许可与引用

- 许可：proprietary
- 关键词：brazil, forest-code, google, rgb, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [巴西 SPOT 全色影像（2007–2009）](/pages/1b153ba6/)
- [巴西 SPOT 全色锐化伪自然色影像（2007–2009）](/pages/592f745a/)
- [巴西 SPOT 多光谱影像（2007–2009，原始）](/pages/0f610d9b/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
