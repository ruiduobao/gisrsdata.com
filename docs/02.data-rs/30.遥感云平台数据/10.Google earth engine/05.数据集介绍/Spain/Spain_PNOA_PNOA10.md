---
title: "西班牙 RGB 正射影像 10 厘米"
date: 2026-11-03 12:00:00
permalink: /pages/8464b62b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "orthophotos"
  - "pnoa"
  - "rgb"
  - "spain"
---

# 西班牙 RGB 正射影像 10 厘米

英文原名：Spain RGB orthophotos 10 cm

## 这是什么数据

2007 至 2018 年间由各公共管理机构执行的航飞正射影像镶嵌，像元分辨率 10 厘米。此数据由西班牙国家航摄正射计划（[PNOA](https://pnoa.ign.es)）提供。

更多信息见 [西班牙正射影像文档](https://pnoa.ign.es/web/portal/pnoa-imagen/proceso-fotogrametrico)。

## 覆盖范围与时间

- 覆盖范围：空间：西班牙全国；时间：2007 年至 2019 年；分辨率：0.1 米。
- 时间范围：2007-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 0.1 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红 | 0.1 |  |
| G | 绿 | 0.1 |  |
| B | 蓝 | 0.1 |  |

## 能拿来做什么

- 作为高分辨率地图底图与实景核查参考。
- 做城市、农田与基础设施的精细制图。
- 为变化检测提供厘米级影像样本。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Spain/PNOA/PNOA10');
```

- 数据集编号（Earth Engine ID）：`Spain/PNOA/PNOA10`
- 提供方：Spain orthophotos、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Spain_PNOA_PNOA10

## 许可与引用

- 许可：proprietary
- 关键词：orthophotos, pnoa, rgb, spain
- 数据引用：National Geographic Institute Spain

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
