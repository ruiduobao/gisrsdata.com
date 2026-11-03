---
title: "SPOT Panchromatic Imagery 5-10m, Brazil"
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

# SPOT Panchromatic Imagery 5-10m, Brazil

## 数据集简介

This collection contains the raw panchromatic (PAN) bands from the SPOT 2, 4, and 5 satellites for Brazil circa 2008. The panchromatic sensor provides the highest native spatial resolution of the missions, capturing light across a broad visible spectrum (0.51-0.73 µm for SPOT 2, 0.61-0.68 µm for SPOT 4, and 0.48-0.71 µm for SPOT 5). These bands are intended for advanced photogrammetric analysis and custom fusion workflows. Assets from SPOT 5 have a pixel size of 5m and assets from SPOT 2 and 4 have a pixel size of 10m.


### Data access

To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## 基本信息

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google/CNES、Google Earth Engine
- 时间范围：2007-01-01 至 2009-11-26
- 空间分辨率：10 米
- 许可：proprietary
- 关键词：brazil, forest-code, google, imagery, satellite-imagery, spot

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| P | Panchromatic | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/PAN/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
