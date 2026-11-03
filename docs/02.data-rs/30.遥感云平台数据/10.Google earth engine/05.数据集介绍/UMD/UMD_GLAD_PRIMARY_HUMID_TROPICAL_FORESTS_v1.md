---
title: "Primary Humid Tropical Forests"
date: 2026-11-03 12:00:00
permalink: /pages/9498083c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "glad"
  - "global"
  - "landsat-derived"
  - "umd"
---

# Primary Humid Tropical Forests

## 数据集简介

Primary humid tropical forests provide numerous global ecosystem services,
but are under continuing threat of clearing from economic drivers. To facilitate
national land use planning and balancing the goals of economic development and
maintenance of ecosystem services, a primary humid tropical forest map was
created by the UMD GLAD team. The primary forest extent was mapped
for the year 2001 at a spatial resolution of 30 meters using globally acquired,
free-of-charge, and consistently processed Landsat imagery.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：UMD/GLAD、Google Earth Engine
- 时间范围：2001-01-01 至 2002-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：forest, forest-biomass, glad, global, landsat-derived, umd

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Primary_HT_forests | Primary Humid Tropical Forests | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMD_GLAD_PRIMARY_HUMID_TROPICAL_FORESTS_v1
- 数据引用：Turubanova S., Potapov P., Tyukavina, A., and Hansen M. (2018) Ongoing primary forest
loss in Brazil, Democratic Republic of the Congo, and Indonesia. Environmental
Research Letters.
[https://doi.org/10.1088/1748-9326/aacd1c](https://doi.org/10.1088/1748-9326/aacd1c)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
