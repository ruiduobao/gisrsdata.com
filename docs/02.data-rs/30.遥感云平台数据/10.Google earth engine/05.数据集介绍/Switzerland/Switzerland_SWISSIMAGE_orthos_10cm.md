---
title: "SWISSIMAGE 10 厘米 RGB 影像"
date: 2026-11-03 12:00:00
permalink: /pages/b8e806f0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "orthophotos"
  - "rgb"
  - "swissimage"
  - "swisstopo"
---

# SWISSIMAGE 10 厘米 RGB 影像

英文原名：SWISSIMAGE 10 cm RGB imagery

## 这是什么数据

SWISSIMAGE 10 厘米正射影像镶嵌是覆盖全瑞士的新彩色数字航片集合，平原与主要高山河谷地面分辨率 10 厘米、阿尔卑斯地区 25 厘米。每年更新。

更多信息见 [SWISSIMAGE10cm_FR 文档](https://backend.swisstopo.admin.ch/fileservice/sdweb-docs-prod-swisstopoch-files/files/2023/11/14/a84642dc-5feb-48e5-af6b-55df4ae7a10b.pdf)。

此 RGB 集合包含三个波段的数字航片。位置精度标准差：地面采样距离 0.1 米时为 +/- 0.15 米。

## 覆盖范围与时间

- 覆盖范围：空间：瑞士全国；时间：2017 年至 2021 年（逐年更新）；分辨率：0.1 米。
- 时间范围：2017-01-01 至 2021-01-01

## 分辨率与规格

- 空间分辨率：约 0.1 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红 | 0.1 | 619-651nm |
| G | 绿 | 0.1 | 525-585nm |
| B | 蓝 | 0.1 | 435-495nm |

## 能拿来做什么

- 作为高分辨率地图底图与实景核查参考。
- 做城市、农田与基础设施的精细制图。
- 为变化检测提供厘米级影像样本。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Switzerland/SWISSIMAGE/orthos/10cm');
```

- 数据集编号（Earth Engine ID）：`Switzerland/SWISSIMAGE/orthos/10cm`
- 提供方：Topography swisstopo、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Switzerland_SWISSIMAGE_orthos_10cm

## 许可与引用

- 许可：proprietary
- 关键词：orthophotos, rgb, swissimage, swisstopo
- 数据引用：Copyright Federal Office of Topography swisstopo

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
