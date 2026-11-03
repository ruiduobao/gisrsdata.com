---
title: "TOMS and OMI Merged Ozone Data v4"
date: 2026-11-03 12:00:00
permalink: /pages/c64a1cd2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "aura"
  - "climate"
  - "geophysical"
  - "ges-disc"
  - "goddard"
  - "nasa"
  - "omi"
  - "ozone"
  - "toms"
  - "weather-and-climate"
---

# TOMS and OMI Merged Ozone Data v4

## 数据集简介

The Total Ozone Mapping Spectrometer (TOMS) data represent the primary
long-term, continuous record of satellite-based observations available for
use in monitoring global and regional trends in total ozone over the past
25 years. The data are produced by the Laboratory for Atmospheres at NASA's
Goddard Space Flight Center. Version 8 TOMS data products include level 3
gridded data (1.0 x 1.25 deg). The Ozone Monitoring Instrument (OMI), aboard
the Aura satellite (July 2004 - current), has a higher resolution
(1.0 x 1.0 deg).

These data represent a merged ozone product from TOMS/EarthProbe,
TOMS/Nimbus-7, TOMS/Meteor-3, OMI/Aura and USGS-interpolated data for dates
with no data.


See [this document](https://acd-ext.gsfc.nasa.gov/anonftp/toms/omi/Changes_OMI_TO3_col4_col3.pdf) for a summary of changes between v3 and v4.

[Additional TOMS and OMI information](https://ozoneaq.gsfc.nasa.gov/missions/)

## 基本信息

- 数据集编号（Earth Engine ID）：`TOMS/MERGED_V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / GES DISC、Google Earth Engine
- 时间范围：1978-11-01 至 2026-10-30
- 空间分辨率：111000 米
- 许可：proprietary
- 关键词：atmosphere, aura, climate, geophysical, ges-disc, goddard, nasa, omi, ozone, toms, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ozone | Total column ozone | 111000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TOMS/MERGED_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TOMS_MERGED_V4
- 数据引用：The data set source should be properly cited when the data are used.
A formal reference of the form: \<authors\>, 2012, last updated 2013:
\<dataset name\>. NASA/GSFC, Greenbelt, MD, USA, NASA Goddard Earth Sciences
Data and Information Services Center (GES DISC). Accessed
\<enter user data access date\> at \<DOI\> is suggested following
Parsons et al. (2010),
[doi:10.1029/2010EO340001](https://doi.org/10.1029/2010EO340001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
