---
title: "Actual Evapotranspiration for Australia (CMRSET Landsat V2.2)"
date: 2026-11-03 12:00:00
permalink: /pages/cb36cc12/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "australia"
  - "csiro"
  - "evaporation"
  - "evapotranspiration"
  - "landsat-derived"
  - "tern"
  - "viirs-derived"
  - "water-vapor"
---

# Actual Evapotranspiration for Australia (CMRSET Landsat V2.2)

## 数据集简介

This dataset provides accurate actual evapotranspiration (AET or ETa) for
Australia using the CMRSET algorithm. The AET band (named 'ETa') contains
the average daily value from the CMRSET model for all cloud-free Landsat
observations in that month (indicated with value 3 in the AET Data Source QA
bits). After the Landsat 7 ETM+ Scan Line Corrector (SLC) failed on 31 May
2003, Landsat 7 ETM+ data are only used if there are no cloud-free Landsat 5
TM or Landsat 8 OLI data for that month. If there is no cloud-free Landsat
data available, pixels are infilled with blended data. The blended data will
be blended Landsat-MODIS until Feb 2012, then blended Landsat-VIIRS onwards
(indicated with value 2 in the AET Data Source QA bits). If there is no
blended data available in a month, then missing monthly AET values are
linearly interpolated (indicated with value 1 in the AET Data Source QA
bits). This means monthly 30 m AET data covering all Australia, with no gaps
due to cloud, are available and ready to use.

Accurate AET information is important for irrigation, food security, and
environmental management. Like many other parts of the world, water
availability in Australia is limited and AET is the largest consumptive
component of the water balance. In Australia 70% of available water is used
for crop and pasture irrigation. Better monitoring will support improved
water use efficiency in this sector, with any water savings available as
environmental flows. Additionally, ground-water dependent ecosystems (GDE)
occupy a small area yet are "biodiversity hotspots". Knowing their water
needs enables enhanced management of these critical areas. AET can also be
used to model the catchment water balance. If used in water balance (mass
balance) calculations, then this AET value needs to be multiplied by the
number of days in the month.

To let the developers know you are using this dataset, to get information on
updates, or if you have any questions please contact: tim.mcvicar@csiro.au,
tom.vanniel@csiro.au, jamie.vleeshouwer@csiro.au.

## 基本信息

- 数据集编号（Earth Engine ID）：`TERN/AET/CMRSET_LANDSAT_V2_2`
- 数据类型：影像集合（ImageCollection）
- 提供方：TERN Landscapes / CSIRO Land and Water、Google Earth Engine
- 时间范围：2000-02-01 至 2026-06-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：agriculture, australia, csiro, evaporation, evapotranspiration, landsat-derived, tern, viirs-derived, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ETa | Average daily evapotranspiration | 30 |  |
| pixel_qa | Pixel QA attributes | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TERN/AET/CMRSET_LANDSAT_V2_2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TERN_AET_CMRSET_LANDSAT_V2_2
- 数据引用：Juan P. Guerschman, Tim R. McVicar, Jamie Vleeshower, Thomas G. Van Niel,
Jorge L. Peña-Arancibia, Yun Chen. Estimating actual evapotranspiration at
field-to-continent scales by calibrating the CMRSET algorithm with MODIS,
VIIRS, Landsat and Sentinel-2 data, Journal of Hydrology, Volume 605, 2022,
127318,
[doi:10.1016/j.jhydrol.2021.127318](
  https://doi.org/10.1016/j.jhydrol.2021.127318).

- DOI：10.1016/j.jhydrol.2021.127318

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
