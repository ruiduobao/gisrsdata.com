---
title: "GRIDMET DROUGHT: CONUS Drought Indices"
date: 2026-11-03 12:00:00
permalink: /pages/f6533466/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "climatic-water-balance"
  - "conus"
  - "crop"
  - "drought"
  - "eddi"
  - "evapotranspiration"
  - "geophysical"
  - "gridmet"
  - "merced"
  - "metdata"
  - "palmer"
---

# GRIDMET DROUGHT: CONUS Drought Indices

## 数据集简介

This dataset contains drought indices derived from the 4-km daily Gridded
Surface Meteorological (GRIDMET) dataset. The drought indices provided include
the standardized precipitation index (SPI), the evaporative drought demand
index (EDDI), the standardized precipitation evapotranspiration index (SPEI),
the Palmer Drought Severity Index (PDSI) and Palmer Z Index (Z).

SPI, EDDI, and SPEI are supplied on different time scales corresponding to the
time aggregation of precipitation, reference evapotranspiration, and
precipitation minus reference evapotranspiration, respectively. The time scales
include 14 day, 30 day, 90 day, 180 day, 270 day, 1 year, 2 years and 5 years.
The standardization is done by using a non-parametric standardized probability
based method where plotting positions are used to obtain probabilities which
are transformed to indices assuming an inverse-normal distribution. All data
are standardized over a common time period of 1981-2016.

PDSI and Z are calculated using a modified version of the Palmer formula which
uses reference evapotranspiration and precipitation from GRIDMET, and a static
soil water holding capacity layer (top 1500mm) from STATSGO. Modifications to
the coefficients of the original Palmer formula are applied to calculate PDSI.
The baseline period for PDSI and Z calculations is 1979-2018.

Interpretation of the drought indices in this dataset is different for PDSI and
Z than for SPI, SPEI and EDDI. Utilizing the interpretation from the US Drought
monitor, values of these drought indices have the following meaning:

PDSI and z:

  * 5.0 or more (extremely wet)
  * 4.0 to 4.99 (very wet)
  * 3.0 to 3.99 (moderately wet),
  * 2.0 to 2.99 (slightly wet)
  * 1.0 to 1.99 (incipient wet spell)
  * -0.99 to 0.99(near normal)
  * -1.99 to -1.00 (incipient dry spell)
  * -2.99 to -2.00 (mild drought)
  * -3.99 to -3.00 (moderate drought)
  * -4.99 to -4.00 (severe drought)
  * -5.0 or less (extreme drought)

SPI/SPEI/EDDI:

  * 2.0 or more (extremely wet)
  * 1.6 to 1.99 (very wet)
  * 1.3 to 1.59 (moderately wet),
  * 0.8 to 1.29 (slightly wet)
  * 0.5 to 0.79 (incipient wet spell)
  * -0.49 to 0.49(near normal),
  * -0.79 to -0.5 (incipient dry spell)
  * -1.29 to -0.8 (mild drought)
  * -1.59 to -1.3 (moderate drought)
  * -1.99 to -1.6 (severe drought)
  * -2.0 or less (extreme drought).

This dataset contains provisional products that are replaced with
updated versions when the complete source data become available.
Products can be distinguished by the value of the 'status' property.
At first, assets are ingested with status='early'. After several
days, they are replaced by assets with status='provisional'.
After about 2 months, they are replaced by the final assets with
status='permanent'.

## 基本信息

- 数据集编号（Earth Engine ID）：`GRIDMET/DROUGHT`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of California Merced、Google Earth Engine
- 时间范围：1980-01-05 至 2026-10-22
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：climate, climatic-water-balance, conus, crop, drought, eddi, evapotranspiration, geophysical, gridmet, merced, metdata, palmer, pdsi, precipitation, spei, spi, surface-ground-water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| spi14d | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 14 days | 4638.3 |  |
| spi30d | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 30 days | 4638.3 |  |
| spi90d | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 90 days | 4638.3 |  |
| spi180d | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 180 days | 4638.3 |  |
| spi270d | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 270 days | 4638.3 |  |
| spi1y | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 1 year | 4638.3 |  |
| spi2y | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 2 years | 4638.3 |  |
| spi5y | Standardized Precipitation Index (SPI) where precipitation was aggregated for the last 5 years | 4638.3 |  |
| eddi14d | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 14 days  | 4638.3 |  |
| eddi30d | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 30 days  | 4638.3 |  |
| eddi90d | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 90 days  | 4638.3 |  |
| eddi180d | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 180 days  | 4638.3 |  |
| eddi270d | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 270 days  | 4638.3 |  |
| eddi1y | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 1 year  | 4638.3 |  |
| eddi2y | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 2 years  | 4638.3 |  |
| eddi5y | Evaporative Drought Demand Index (EDDI) where potential evapotranspiration was aggregated for the last 5 years  | 4638.3 |  |
| spei14d | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 14 days  | 4638.3 |  |
| spei30d | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 30 days  | 4638.3 |  |
| spei90d | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 90 days  | 4638.3 |  |
| spei180d | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 180 days  | 4638.3 |  |
| spei270d | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 270 days  | 4638.3 |  |
| spei1y | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 1 year  | 4638.3 |  |
| spei2y | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 2 years  | 4638.3 |  |
| spei5y | Standardized Precipitation Evapotranspiration Index (SPEI) where climatic water balance was aggregated for the last 5 years  | 4638.3 |  |
| pdsi | Palmer Drought Severity Index | 4638.3 |  |
| z | Palmer Z Index | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GRIDMET/DROUGHT');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GRIDMET_DROUGHT
- 数据引用：Abatzoglou J. T., Development of gridded surface meteorological data for
ecological applications and modelling, International Journal of
Climatology. (2012)
[doi:10.1002/joc.3413](https://doi.org/10.1002/joc.3413)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
