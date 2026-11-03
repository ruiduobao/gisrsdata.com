---
title: "NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 4 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/18fe53c5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "cdr"
  - "daily"
  - "fapar"
  - "lai"
  - "land"
  - "noaa"
  - "plant-productivity"
---

# NOAA CDR AVHRR LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 4 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The NOAA Climate Data Record (CDR) of AVHRR Leaf Area Index (LAI) and
Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) dataset
contains derived values that characterize the canopy and photosynthetic
activity of plants. This dataset is derived from the NOAA AVHRR Surface
Reflectance product and is gridded at a resolution of 0.05° on a daily
basis. The values are computed globally over land surfaces, but not over
bare or very sparsely vegetated areas, permanent ice or snow, permanent
wetland, urban areas, or water bodies.

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www1.ncdc.noaa.gov/pub/data/sds/cdr/CDRs/AVHRR%20Surface%20Reflectance/TechNote.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/AVHRR/LAI_FAPAR/V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1981-06-24 至 2019-05-16
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：avhrr, cdr, daily, fapar, lai, land, noaa, plant-productivity

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LAI | Leaf area index | 5566 |  |
| FAPAR | Fraction of absorbed photosynthetic active radiation | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/LAI_FAPAR/V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_LAI_FAPAR_V4
- 数据引用：Martin Claverie, Eric Vermote, and NOAA CDR Program (2014): NOAA Climate
Data Record (CDR) of Leaf Area Index (LAI) and Fraction of Absorbed
Photosynthetically Active Radiation (FAPAR), Version 4. [indicate subset
used]. NOAA National Climatic Data Center.
[doi:10.7289/V5M043BX](https://data.nodc.noaa.gov/cgi-bin/iso?id=gov.noaa.ncdc:C00898)

- DOI：10.7289/V5M043BX

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
