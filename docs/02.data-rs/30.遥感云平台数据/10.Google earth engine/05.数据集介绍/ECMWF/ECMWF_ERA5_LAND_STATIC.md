---
title: "ERA5-Land Static - ECMWF Climate Reanalysis"
date: 2026-11-03 12:00:00
permalink: /pages/1932ca55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cds"
  - "climate"
  - "copernicus"
  - "ecmwf"
  - "era5-land"
  - "evaporation"
  - "heat"
  - "lakes"
  - "precipitation"
  - "pressure"
  - "radiation"
  - "reanalysis"
---

# ERA5-Land Static - ECMWF Climate Reanalysis

## 数据集简介

ERA5-Land is a reanalysis dataset providing a consistent view of the
evolution of land variables over several decades at an enhanced resolution
compared to ERA5. ERA5-Land has been produced by replaying the land
component of the ECMWF ERA5 climate reanalysis. Reanalysis combines model
data with observations from across the world into a globally complete and
consistent dataset using the laws of physics. Reanalysis produces data that
goes several decades back in time, providing an accurate description of the
climate of the past. This dataset includes all 50 variables as available on
CDS.

ERA5-Land data is available from 1950 to three months from real-time.

Please consult [the ERA5-Land "Known Issues" section](https://confluence.ecmwf.int/display/CKB/ERA5-Land%3A+data+documentation). In particular, note that three components of the total evapotranspiration have values swapped as follows:

* variable "Evaporation from bare soil" (mars parameter code 228101 (evabs)) has the values corresponding to the "Evaporation from vegetation transpiration" (mars parameter 228103 (evavt)),
* variable "Evaporation from open water surfaces excluding oceans (mars parameter code 228102 (evaow)) has the values corresponding to the "Evaporation from bare soil" (mars parameter code 228101 (evabs)),
* variable "Evaporation from vegetation transpiration" (mars parameter code 228103 (evavt)) has the values corresponding to the "Evaporation from open water surfaces excluding oceans" (mars parameter code 228102 (evaow)).

This dataset contains the static variables of ERA5-Land.
These variables do not vary in time.

## 基本信息

- 数据集编号（Earth Engine ID）：`ECMWF/ERA5_LAND/STATIC`
- 数据类型：影像（Image）
- 提供方：Copernicus Climate Data Store、Google Earth Engine
- 时间范围：1950-01-01 至 至今
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：cds, climate, copernicus, ecmwf, era5-land, evaporation, heat, lakes, precipitation, pressure, radiation, reanalysis, runoff, snow, soil-water, temperature, vegetation, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| glacier_mask | Fraction of the grid box covered by ice (glacier or ice cap). The values vary between 0 and 1 but do not vary in time.  | 11132 |  |
| lake_cover | Fraction of the grid box that is occupied by lake (inland water). The values vary between 0 and 1 but do not vary in time.  | 11132 |  |
| high_vegetation_cover | Fraction of the grid box that is covered with vegetation that is classified as "high". The values vary between 0 and 1 but do not vary in time. "High vegetation" consists of evergreen trees, deciduous trees, mixed forest/woodland, and interrupted forest.  | 11132 |  |
| low_vegetation_cover | Fraction of the grid box that is covered with vegetation that is classified as "low". The values vary between 0 and 1 but do not vary in time. "Low vegetation" consists of crops and mixed farming, irrigated crops, short grass, tall grass, tundra, semidesert, bogs and marshes, evergreen shrubs, deciduous shrubs, and water and land mixtures.  | 11132 |  |
| lake_total_depth | Total depth of the lake (both the water and ice part). This parameter does not vary in time.  | 11132 |  |
| land_sea_mask | Fraction of the grid box that is land. The values vary between 0 and 1 but do not vary in time.  | 11132 |  |
| soil_type | Texture (or classification) of soil used by the land surface scheme of the ECMWF Integrated Forecasting System (IFS) to predict the water holding capacity of soil in soil moisture and runoff calculations. It is derived from the root zone data (30-100 cm below the surface) of the FAO/UNESCO Digital Soil Map of the World, DSMW (FAO, 2003).  | 11132 |  |
| type_of_high_vegetation | Indicates the types of high vegetation recognised by the ECMWF Integrated Forecasting System. Vegetation types are used to calculate the surface energy balance and snow albedo. This parameter does not vary in time.  | 11132 |  |
| type_of_low_vegetation | Indicates the types of low vegetation recognised by the ECMWF Integrated Forecasting System. Vegetation types are used to calculate the surface energy balance and snow albedo. This parameter does not vary in time.  | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('ECMWF/ERA5_LAND/STATIC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_STATIC
- 数据引用：Mu&ntilde;oz Sabater, J., (2019): ERA5-Land monthly averaged data from 1981
to present. Copernicus Climate Change Service (C3S) Climate Data Store
(CDS). (&lt;date of access&gt;),
[doi:10.24381/cds.68d2bb30](https://doi.org/10.24381/cds.68d2bb30)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
