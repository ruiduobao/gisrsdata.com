---
title: "巴西 SPOT 全色锐化伪自然色影像（2007–2009）"
date: 2026-11-03 12:00:00
permalink: /pages/592f745a/
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

# 巴西 SPOT 全色锐化伪自然色影像（2007–2009）

英文原名：SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil

## 这是什么数据

这是 2008 年前后巴西上空的高分辨率 SPOT 伪自然色影像，来自 SPOT 2、4、5，并做了全色锐化（把细节更清楚的全色影像与彩色多光谱影像融合）。有对应高分辨率全色影像的地方，融合了[多光谱数据](https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1)，细节达到 SPOT 5 约 5 米、SPOT 2/4 约 10 米。适合历史环境的可视化与目视判读。另见 [Brazil Forest Imagery Dataset 2008: Visual Basemap](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_VISUAL)。

Google 还给每景影像手工勾绘了云、薄云和云影的范围，转成掩膜作为附加波段（cloud_mask）。获取这份数据需先填写[申请表](https://forms.gle/jQmCbWgarjENQBYz6)。

## 覆盖范围与时间

- 覆盖范围：巴西
- 时间范围：2007-01-01 至 2009-11-26

## 分辨率与规格

- 空间分辨率：约 10 米（SPOT 5 可达 5 米，SPOT 2/4 为 10 米）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红光反射率 | 10 |  |
| G | 绿光反射率 | 10 |  |
| B | 全色锐化后的蓝光反射率：SPOT 2、4、5 伪自然色产品合成的蓝通道 | 10 |  |
| cloud_mask | 云掩膜：0 = 云/阴影，1 = 晴空 | 10 |  |

## 能拿来做什么

- 高细节目视判读 2008 年前后巴西的土地覆盖
- 做历史环境分析的自然色底图
- 多光谱分辨率不够时做精细制图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PMS_NC/V1');
```

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PMS_NC/V1`
- 提供方：Google/CNES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1

## 许可与引用

- 许可：proprietary
- 关键词：brazil, forest-code, google, rgb, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [巴西 SPOT 全色影像（2007–2009）](/pages/1b153ba6/)
- [巴西 SPOT 多光谱伪自然色影像（2007–2009）](/pages/1f2f6c63/)
- [巴西 SPOT 多光谱影像（2007–2009，原始）](/pages/0f610d9b/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
