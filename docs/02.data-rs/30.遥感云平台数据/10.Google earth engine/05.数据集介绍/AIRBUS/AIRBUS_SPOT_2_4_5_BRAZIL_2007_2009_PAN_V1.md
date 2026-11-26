---
title: "巴西 SPOT 全色影像（2007–2009）"
date: 2026-11-03 12:00:00
permalink: /pages/1b153ba6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "forest-code"
  - "google"
  - "imagery"
  - "satellite-imagery"
  - "spot"
---

# 巴西 SPOT 全色影像（2007–2009）

英文原名：SPOT Panchromatic Imagery 5-10m, Brazil

## 这是什么数据

这是 SPOT 2、4、5 卫星在 2008 年前后拍摄的巴西全色（PAN）波段原始影像。全色传感器是这几颗星上空间分辨率最高的载荷，在一段较宽的可见光谱段内成像（SPOT 2 为 0.51–0.73 µm，SPOT 4 为 0.61–0.68 µm，SPOT 5 为 0.48–0.71 µm）。这类波段面向高级摄影测量分析和自定义融合流程：SPOT 5 的像元为 5 米，SPOT 2、4 为 10 米。

获取这份数据需先填写[申请表](https://forms.gle/jQmCbWgarjENQBYz6)。

## 覆盖范围与时间

- 覆盖范围：巴西
- 时间范围：2007-01-01 至 2009-11-26

## 分辨率与规格

- 空间分辨率：约 10 米（SPOT 5 为 5 米，SPOT 2/4 为 10 米）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| P | 全色波段 | 10 |  |

## 能拿来做什么

- 做需要 SPOT 最高原生分辨率的摄影测量分析
- 与多光谱影像融合（自定义全色锐化）
- 2008 年前后巴西土地覆盖的历史制图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1');
```

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1`
- 提供方：Google/CNES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1

## 许可与引用

- 许可：proprietary
- 关键词：brazil, forest-code, google, imagery, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [巴西 SPOT 全色锐化伪自然色影像（2007–2009）](/pages/592f745a/)
- [巴西 SPOT 多光谱伪自然色影像（2007–2009）](/pages/1f2f6c63/)
- [巴西 SPOT 多光谱影像（2007–2009，原始）](/pages/0f610d9b/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
