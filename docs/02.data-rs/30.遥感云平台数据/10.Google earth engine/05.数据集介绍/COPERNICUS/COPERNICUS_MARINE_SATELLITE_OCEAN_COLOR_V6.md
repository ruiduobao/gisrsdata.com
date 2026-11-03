---
title: "Copernicus Satellite Ocean Color Daily Data"
date: 2026-11-03 12:00:00
permalink: /pages/78b315c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chlorophyll-a"
  - "copernicus"
  - "daily"
  - "oceans"
---

# Copernicus Satellite Ocean Color Daily Data

## 数据集简介

This dataset provides global daily estimates of ocean surface chlorophyll-a
concentration and remote sensing reflectance derived from multiple satellite
sensors.

Remote-sensing reflectance (or Rrs) is defined as the ratio of water-leaving
radiance to downwelling irradiance and serves as the main input to
algorithms used to derive other ocean colour products. Chlorophyll-a (Chl-a)
is the main photosynthetic pigment found in phytoplankton, which form the
base of the marine food-web and are responsible for approximately half of
the global photosynthesis. Chl-a can be estimated from Rrs data using
different algorithms (see details in the Documentation). Here, we provide a
blended Chl-a estimate from multiple algorithms, where blending is based on
the suitability of each candidate algorithm to the optical typology of a
given pixel. This approach provides the best estimates of global Chl-a
across a range of water types.

The files from this dataset contain global daily composites of merged sensor
products: SeaWiFS, MERIS, MODIS Aqua, VIIRS, and (from version 5.0 onward)
OLCI. Note that Rrs and Chl-a data are only available over cloud- and
ice-free areas. As a result, more complete spatial coverage (as shown in the
map in the upper-right corner) can be achieved by aggregating data over
longer time periods.

This dataset is produced using the processing chain software developed by
the Ocean Colour component of the European Space Agency Climate Change
Initiative project (ESA OC-CCI). More details are available in the dataset
[documentation](https://dast.copernicus-climate.eu/documents/satellite-ocean-colour/v6.0/WP2-FDDP-2022-04_C3S2-Lot3_PUGS-of-v6.0-OceanColour-product_v1.1_FINAL.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：1997-01-01 至 2026-03-31
- 空间分辨率：4000 米
- 许可：CC-BY-4.0
- 关键词：chlorophyll-a, copernicus, daily, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MERIS_nobs | Number of observations from MERIS sensor | 4000 |  |
| MODISA_nobs | Number of observations from MODIS-A sensor | 4000 |  |
| OLCI-A_nobs | Number of observations from OLCI-A sensor | 4000 |  |
| OLCI-B_nobs | Number of observations from OLCI-B sensor | 4000 |  |
| SeaWiFS_nobs | Number of observations from SeaWiFS sensor | 4000 |  |
| VIIRS_nobs | Number of observations from VIIRS sensor | 4000 |  |
| chlor_a | Chlorophyll-a concentration | 4000 |  |
| total_nobs | Total number of observations | 4000 |  |
| Rrs_412 | Remote sensing reflectance at 412 nm | 4000 |  |
| Rrs_443 | Remote sensing reflectance at 443 nm | 4000 |  |
| Rrs_490 | Remote sensing reflectance at 490 nm | 4000 |  |
| Rrs_510 | Remote sensing reflectance at 510 nm | 4000 |  |
| Rrs_560 | Remote sensing reflectance at 560 nm | 4000 |  |
| Rrs_665 | Remote sensing reflectance at 665 nm | 4000 |  |
| Rrs_MERIS_nobs | Number of observations from MERIS sensor | 4000 |  |
| Rrs_MODISA_nobs | Number of observations from MODIS-A sensor | 4000 |  |
| Rrs_OLCI-A_nobs | Number of observations from OLCI-A sensor | 4000 |  |
| Rrs_OLCI-B_nobs | Number of observations from OLCI-B sensor | 4000 |  |
| Rrs_SeaWiFS_nobs | Number of observations from SeaWiFS sensor | 4000 |  |
| Rrs_VIIRS_nobs | Number of observations from VIIRS sensor | 4000 |  |
| Rrs_total_nobs | Total number of observations from RRS sensors | 4000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_SATELLITE_OCEAN_COLOR_V6
- 数据引用：Copernicus Climate Change Service (2019): Ocean colour daily data from 1997
to present derived from satellite observations. Copernicus Climate Change
Service (C3S) Climate Data Store (CDS). 
[doi:10.24381/cds.f85b319d](https://doi.org/10.24381/cds.f85b319d)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
