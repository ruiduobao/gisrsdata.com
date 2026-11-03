---
title: "NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1"
date: 2026-11-03 12:00:00
permalink: /pages/8b7e1f94/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cdr"
  - "daily"
  - "fapar"
  - "lai"
  - "land"
  - "noaa"
  - "plant-productivity"
  - "viirs"
---

# NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1

## 数据集简介

This Climate Data Record (CDR) combines datasets for Leaf Area Index (LAI)
and Fraction of Absorbed Photosynthetically Active Radiation (FAPAR), two
biophysical variables that can be used to evaluate vegetation stress,
forecast agricultural yields, and other modeling and resource management
applications. LAI tracks the one-sided green leaf area per unit of ground
surface area, while FAPAR quantifies the solar radiation absorbed by plants
within the photosynthetically active radiation (PAR) spectral region.
The LAI/FAPAR CDR generates a daily product on a .05&deg; by .05&deg; grid.
The data is generated from the Visible Infrared Imaging Radiometer Suite
(VIIRS) sensors from 2014 onward.

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Leaf_Area_Index_and_FAPAR/VIIRS/AlgorithmDescriptionVIIRS_01B-20c.pdf).

Provider's note: the orbital drift of N-19 (the last NOAA satellite
carrying the AVHRR sensor) began to severely degrade the retrieved
product quality. Therefore, VIIRS is now the primary sensor being used for
these products from 2014-present.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/VIIRS/LAI_FAPAR/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：2014-01-01 至 2026-10-29
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：cdr, daily, fapar, lai, land, noaa, plant-productivity, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LAI | Leaf area index | 5566 |  |
| FAPAR | Fraction of absorbed photosynthetic active radiation | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/VIIRS/LAI_FAPAR/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_VIIRS_LAI_FAPAR_V1
- 数据引用：Cite as: Claverie, Martin; Vermote, Eric; Justice, Chris; Csiszar, Ivan;
Myneni, Ranga; Baret, Frederic; Masuoka, Ed; Wolfe, Robert; Ray, James P.;
NOAA CDR Program. (2023): NOAA Climate Data Record (CDR) of VIIRS Leaf Area
Index (LAI) and Fraction of Absorbed Photosynthetically Active Radiation
(FAPAR), Version 1. [indicate subset used]. NOAA National Centers for
Environmental Information. [https://doi.org/10.25921/9x3m-0e02](https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C01706/html).

- DOI：10.25921/9x3m-0e02

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
