---
title: "Canada AAFC Annual Crop Inventory"
date: 2026-11-03 12:00:00
permalink: /pages/ad6873e3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aafc"
  - "agriculture"
  - "canada"
  - "crop"
  - "landcover"
---

# Canada AAFC Annual Crop Inventory

## 数据集简介

Starting in 2009, the Earth Observation Team of the Science and Technology
Branch (STB) at Agriculture and Agri-Food Canada (AAFC) began the process
of generating annual crop type digital maps. Focusing on the Prairie
Provinces in 2009 and 2010, a Decision Tree (DT) based methodology was
applied using optical (Landsat-5, AWiFS, DMC) and radar (Radarsat-2) based
satellite images. Beginning with the 2011 growing season, this activity has
been extended to other provinces in support of a national crop inventory.
To date this approach can consistently deliver a crop inventory that meets
the overall target accuracy of at least 85% at a final spatial resolution of
30m (56m in 2009 and 2010).

## 基本信息

- 数据集编号（Earth Engine ID）：`AAFC/ACI`
- 数据类型：影像集合（ImageCollection）
- 提供方：Agriculture and Agri-Food Canada、Google Earth Engine
- 时间范围：2009-01-01 至 2025-01-01
- 空间分辨率：30 米
- 许可：OGL-Canada-2.0
- 关键词：aafc, agriculture, canada, crop, landcover

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | Main crop-specific land cover classification. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('AAFC/ACI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AAFC_ACI
- 数据引用：Agriculture and Agri-Food Canada Annual Crop Inventory. {YEAR}

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
