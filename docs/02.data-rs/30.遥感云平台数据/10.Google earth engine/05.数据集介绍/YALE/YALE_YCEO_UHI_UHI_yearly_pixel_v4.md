---
title: "YCEO Surface Urban Heat Islands: Pixel-Level Annual Daytime and Nighttime Intensity"
date: 2026-11-03 12:00:00
permalink: /pages/2bf0c0f9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "uhi"
  - "urban"
  - "weather-and-climate"
  - "yale"
---

# YCEO Surface Urban Heat Islands: Pixel-Level Annual Daytime and Nighttime Intensity

## 数据集简介

This dataset contains annual, summertime, and wintertime surface urban
heat island (SUHI) intensities for day and night for over 10,000 urban clusters
throughout the world. The dataset was created using the MODIS 8-day TERRA and
AQUA land surface temperature (LST) products, the Landscan urban extent
database, the Global Multi-resolution Terrain Elevation Data 2010, and the
European Space Agency (ESA) Climate Change Initiative (CCI) land cover data
using the Simplified Urban-Extent Algorithm. The product is available both at
the pixel level (at 300 m resolution after downscaling) and as urban cluster
means from 2003 to 2018. The monthly composites are only available as urban
cluster means.

A summary of older versions,
including changes from the dataset created and analyzed in the originally
published manuscript can be found on the
[Yale Center for Earth Observation website](https://yceo.yale.edu/research/global-surface-uhi-explorer).
The dataset can also be explored using the [Global Surface UHI
Explorer web application](https://yceo.users.earthengine.app/view/uhimap).

The dataset is split into the following six components:

1. **UHI_all_averaged:** Image containing cluster-mean
composite daytime and nighttime SUHI intensity for annual, summer,
and winter.

2. **UHI_monthly_averaged:** Image containing cluster-mean
monthly composites of daytime and nighttime SUHI intensity.

3. **UHI_yearly_averaged:** Image collection of cluster-mean
yearly composites of daytime and nighttime SUHI intensity from 2003.
to 2018.

4. **UHI_yearly_pixel:** Image collection of spatially
disaggregated (nominal scale of 300 m) annual daytime and nighttime
SUHI intensity from 2003 to 2018.

5. **Summer_UHI_yearly_pixel:** Image collection of spatially
disaggregated (nominal scale of 300 m) summertime daytime and
nighttime SUHI intensity from 2003 to 2018.

6. **Winter_UHI_yearly_pixel:** Image collection of spatially
disaggregated (nominal scale of 300 m) wintertime daytime and
nighttime SUHI intensity from 2003 to 2018.

This asset is the fourth component.

## 基本信息

- 数据集编号（Earth Engine ID）：`YALE/YCEO/UHI/UHI_yearly_pixel/v4`
- 数据类型：影像集合（ImageCollection）
- 提供方：Yale Center for Earth Observation (YCEO)、Google Earth Engine
- 时间范围：2003-01-01 至 2018-12-31
- 空间分辨率：300 米
- 许可：CC-BY-4.0
- 关键词：climate, uhi, urban, weather-and-climate, yale

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Daytime | Daytime UHI | 300 |  |
| Nighttime | Nighttime UHI | 300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('YALE/YCEO/UHI/UHI_yearly_pixel/v4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/YALE_YCEO_UHI_UHI_yearly_pixel_v4
- 数据引用：Chakraborty, T., & Lee, X. (2019). A simplified urban-extent algorithm
to characterize surface urban heat islands on a global scale and examine
vegetation control on their spatiotemporal variability. International
Journal of Applied Earth Observation and Geoinformation, 74, 269-280.
[doi:10.1016/j.jag.2018.09.015](https://doi.org/10.1016/j.jag.2018.09.015)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
