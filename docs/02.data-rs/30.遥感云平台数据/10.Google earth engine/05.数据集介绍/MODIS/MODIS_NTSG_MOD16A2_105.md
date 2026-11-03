---
title: "MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km"
date: 2026-11-03 12:00:00
permalink: /pages/ad457568/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "mod16a2"
  - "modis"
  - "water-vapor"
---

# MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km

## 数据集简介

The MOD16A2 V105 product provides information about
8-day global terrestrial evapotranspiration at 1km pixel resolution.
Evapotranspiration (ET) is the sum of evaporation and plant transpiration
from the Earth's surface to the atmosphere. With long-term ET
data, the effects of changes in climate, land use, and ecosystems
disturbances can be quantified.

The MOD16A2 product is produced by the Numerical Terradynamic Simulation
Group [NTSG](https://www.ntsg.umt.edu/),
University of Montana (UMT) in conjunction with NASA Earth Observing
System. For more details about the algorithm used see the [algorithm
theoretical basis document](https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=1267&context=ntsg_pubs).

* The period of coverage is 8 days with the exception of
the last period at the end of the year which is either 5 or 6 days.
ET/PET units are 0.1mm/5-day for December 27-31 of 2001, 2002,
2003, 2005, 2006, 2007, 2009, 2010, and 0.1mm/6-day for December
26-31 of 2000, 2004, 2008 (leap years).

** For some pixels in African
rainforest, the MODIS albedo data from MCD43B2/MCD43B3 have no
cloud-free data throughout an entire year. As a result, pixels
for that year in all data bands are masked out.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/NTSG/MOD16A2/105`
- 数据类型：影像集合（ImageCollection）
- 提供方：Numerical Terradynamic Simulation Group, The University of Montana、Google Earth Engine
- 时间范围：2000-01-01 至 2014-12-27
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, mod16a2, modis, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ET | Evapotranspiration, aggregated for period of coverage. | 1000 |  |
| LE | Latent heat flux, averaged daily over the period of coverage. | 1000 |  |
| PET | Potential evapotranspiration, aggregated for period of coverage. | 1000 |  |
| PLE | Potential Latent Heat Flux, averaged daily over the period ofcoverage. | 1000 |  |
| ET_QC | ET quality control. | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/NTSG/MOD16A2/105');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_NTSG_MOD16A2_105
- 数据引用：Qiaozhen Mu, Maosheng Zhao, Steven W. Running and Numerical Terradynamic
Simulation Group (2014): MODIS Global Terrestrial Evapotranspiration
(ET) Product MOD16A2 Collection 5.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
