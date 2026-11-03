---
title: "NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1"
date: 2026-11-03 12:00:00
permalink: /pages/ea9a554f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cdr"
  - "daily"
  - "land"
  - "ndvi"
  - "noaa"
  - "vegetation-indices"
  - "viirs"
---

# NOAA CDR VIIRS NDVI: Normalized Difference Vegetation Index, Version 1

## 数据集简介

This dataset contains gridded daily Normalized Difference Vegetation Index
(NDVI) derived from the NOAA Climate Data Record (CDR) of Visible Infrared
Imaging Radiometer Suite (VIIRS) Surface Reflectance. The data record spans
from 2014 onward using data from NOAA polar orbiting
satellites. The data are projected on a 0.05 degree x 0.05 degree global
grid. This dataset is one of the Land Surface CDR products produced by the
NASA Goddard Space Flight Center (GSFC) and the University of Maryland
(UMD).

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Normalized_Difference_Vegetation_Index/VIIRS/AlgorithmDescriptionVIIRS_01B-20b.pdf).

Provider's note: the orbital drift of N-19 (the last NOAA satellite
carrying the AVHRR sensor) began to severely degrade the retrieved
product quality. Therefore, VIIRS is now the primary sensor being used for
these products from 2014-present.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/VIIRS/NDVI/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：2014-01-01 至 2026-10-29
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：cdr, daily, land, ndvi, noaa, vegetation-indices, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | Normalized difference vegetation index | 5566 |  |
| TIMEOFDAY | Hours since start of day | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/VIIRS/NDVI/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_VIIRS_NDVI_V1
- 数据引用：Cite as: Vermote, Eric; NOAA CDR Program. (2022): NOAA Climate Data Record
(CDR) of VIIRS Normalized Difference Vegetation Index (NDVI), Version 1.
[indicate subset used]. NOAA National Centers for Environmental Information.
[https://doi.org/10.25921/gakh-st76](https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C01677/html)

- DOI：10.25921/gakh-st76

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
