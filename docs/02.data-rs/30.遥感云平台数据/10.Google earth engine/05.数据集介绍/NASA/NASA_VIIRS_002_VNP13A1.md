---
title: "VNP13A1.002: VIIRS Vegetation Indices 16-Day 500m"
date: 2026-11-03 12:00:00
permalink: /pages/fed65b36/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "nasa"
  - "ndvi"
  - "noaa"
  - "npp"
  - "vegetation"
  - "vegetation-indices"
  - "viirs"
  - "vnp13a1"
---

# VNP13A1.002: VIIRS Vegetation Indices 16-Day 500m

## 数据集简介

The Suomi National Polar-Orbiting Partnership (S-NPP) NASA Visible
Infrared Imaging Radiometer Suite (VIIRS) Vegetation Indices (VNP13A1)
data product provides vegetation indices by a process of
selecting the best available pixel over a 16-day acquisition period
at 500 meter resolution. The VNP13 data products are designed
after the Moderate Resolution Imaging Spectroradiometer (MODIS)
Terra and Aqua Vegetation Indices product suite to promote the
continuity of the Earth Observation System (EOS) mission.

The VNP13 algorithm process produces three vegetation indices: (1)
Normalized Difference Vegetation Index (NDVI), (2) the Enhanced
Vegetation Index (EVI), and (3) Enhanced Vegetation Index-2 (EVI2).
(1) NDVI is one of the longest continual remotely sensed time series
observations, using both the red and near-infrared (NIR) bands.
(2) EVI is a slightly different vegetation index that is more sensitive
to canopy cover, while NDVI is more sensitive to chlorophyll. (3) EVI2
is a reformation of the standard 3-band EVI, using the red band and
NIR band. This reformation addresses arising issues when comparing
VIIRS EVI to other EVI models that do not include a blue band. EVI2
will eventually become the standard EVI.

Along with the three Vegetation Indices layers, this product also
includes layers for near-infrared (NIR) reflectance; three shortwave
infrared (SWIR) reflectance-red, blue, and green reflectance; composite
day of year; pixel reliability; view and sun angles, and a quality layer.

For additional information, visit the VIIRS [Land Product Quality
Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP) and see
the [User Guide](https://lpdaac.usgs.gov/documents/1372/VNP13_User_Guide_ATBD_V2.1.2.pdf).

Documentation:

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/VIIRS/1/VNP13A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP13A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-17 至 2026-10-08
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：16-day, evi, nasa, ndvi, noaa, npp, vegetation, vegetation-indices, viirs, vnp13a1

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| EVI | 3 band Enhanced Vegetation Index | 500 |  |
| EVI2 | 2 band Enhanced Vegetation Index | 500 |  |
| NDVI | Normalized Difference Vegetation Index | 500 |  |
| NIR_reflectance | Near-infrared Radiation reflectance | 500 | 846-885nm |
| SWIR1_reflectance | Shortwave Infrared Radiation reflectance | 500 | 1230-1250nm |
| SWIR2_reflectance | Shortwave Infrared Radiation reflectance | 500 | 1580-1640nm |
| SWIR3_reflectance | Shortwave Infrared Radiation reflectance | 500 | 2225-2275nm |
| VI_Quality | Quality Assessment (QA) bit-field. | 500 |  |
| red_reflectance | Red band reflectance | 500 | 600-680nm |
| green_reflectance | Green band reflectance | 500 | 545-656nm |
| blue_reflectance | Blue band reflectance | 500 | 478-498nm |
| composite_day_of_the_year | Julian day of year | 500 |  |
| pixel_reliability | Pixel usefulness using a simple rank class | 500 |  |
| relative_azimuth_angle | Relative azimuth angle for each pixel | 500 |  |
| sun_zenith_angle | Sun zenith angle for each pixel | 500 |  |
| view_zenith_angle | View zenith angle for each pixel | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP13A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP13A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP13A1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
