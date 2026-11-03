---
title: "GFPLAIN250m: Global 250m Floodplain Dataset"
date: 2026-11-03 12:00:00
permalink: /pages/fcae03ea/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "flood"
  - "monitoring"
  - "surface-ground-water"
---

# GFPLAIN250m: Global 250m Floodplain Dataset

## 数据集简介

The GFPLAIN250m includes raster data of Earth's floodplains identified
using a geomorphic approach presented in Nardi et al. (2006, 2018).
The 250m floodplain dataset is derived by processing the NASA SRTM
Digital Elevation model gathered from
[http://srtm.csi.cgiar.org/](http://srtm.csi.cgiar.org/),
and in particular the 250-m SRTM version 4.1 DTM. The coding used
for each continent and additional information are detailed in the
metadata included in the GFPLAIN250m data repository.

The elevation data are processed by a fast geospatial tool for floodplain
mapping available for download at
[https://github.com/fnardi/GFPLAIN](https://github.com/fnardi/GFPLAIN).
The tool first preprocesses DEM to derive hydrologic features
(filled DEM, flow direction, flow accumulation, stream network),
then computes floodplain extents.

This dataset is applicable in regions where water-driven erosion and
depositional processes govern the morphology of floodplain landscape
features, and excludes deserts with low water availability and
ice-covered regions with insignificant river flows. It is fit for
river basins with a contributing area greater than 1000 km2.
The GFPLAIN250m dataset can be used in combination with global
datasets of human settlements to support large-scale studies of
human-flood interactions, human pressure on rivers, and changes
over time of floodplain and wetland habitats at risk.

## 基本信息

- 数据集编号（Earth Engine ID）：`IAHS/GFPLAIN250/v0`
- 数据类型：影像（Image）
- 提供方：IAHS、Google Earth Engine
- 时间范围：2018-11-11 至 2018-11-12
- 空间分辨率：250 米
- 许可：CC-BY-4.0
- 关键词：flood, monitoring, surface-ground-water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| flood | Flood plain | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('IAHS/GFPLAIN250/v0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IAHS_GFPLAIN250_v0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
