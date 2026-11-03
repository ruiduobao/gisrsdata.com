---
title: "NLDAS-2: North American Land Data Assimilation System Forcing Fields"
date: 2026-11-03 12:00:00
permalink: /pages/4a88073a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "evaporation"
  - "forcing"
  - "geophysical"
  - "hourly"
  - "humidity"
  - "ldas"
  - "nasa"
  - "nldas"
  - "precipitation"
  - "pressure"
  - "radiation"
---

# NLDAS-2: North American Land Data Assimilation System Forcing Fields

## 数据集简介

Land Data Assimilation System (LDAS) combines multiple
sources of observations (such as precipitation gauge data, satellite
data, and radar precipitation measurements) to produce estimates
of climatological properties at or near the Earth''s surface.

This dataset is the primary (default) forcing file (File A) for
Phase 2 of the North American Land Data Assimilation System (NLDAS-2).
The data are in 1/8th-degree grid spacing; the temporal resolution
is hourly.

NLDAS is a collaboration project among several groups: NOAA/NCEP''s
Environmental Modeling Center (EMC), NASA''s Goddard Space Flight
Center (GSFC), Princeton University, the University of Washington,
the NOAA/NWS Office of Hydrological Development (OHD), and the
NOAA/NCEP Climate Prediction Center (CPC). NLDAS is a core project
with support from NOAA''s Climate Prediction Program for the Americas
(CPPA).

Documentation:

* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/NLDAS/README.NLDAS2.pdf)

* [How-To](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)

* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

* [GES DISC Data Rods Documentation](https://disc.gsfc.nasa.gov/information/tools?title=Hydrology%20Data%20Rods)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/NLDAS/FORA0125_H002`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1979-01-01 至 2026-10-30
- 空间分辨率：13915 米
- 许可：proprietary
- 关键词：climate, evaporation, forcing, geophysical, hourly, humidity, ldas, nasa, nldas, precipitation, pressure, radiation, soil, temperature, water-vapor, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| temperature | Air temperature at 2 meters above the surface | 13915 |  |
| specific_humidity | Specific humidity at 2 meters above the surface | 13915 |  |
| pressure | Surface pressure | 13915 |  |
| wind_u | U wind component at 10 meters above the surface | 13915 |  |
| wind_v | V wind component at 10 meters above the surface | 13915 |  |
| longwave_radiation | Surface downward longwave radiation | 13915 |  |
| convective_fraction | Fraction of total precipitation that is convective: from NARR | 13915 |  |
| potential_energy | Convective available potential energy (J/kg): from NARR | 13915 |  |
| potential_evaporation | Potential evaporation: from NARR | 13915 |  |
| total_precipitation | Hourly total precipitation | 13915 |  |
| shortwave_radiation | Surface downward shortwave radiation - bias corrected | 13915 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/NLDAS/FORA0125_H002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NLDAS_FORA0125_H002
- 数据引用：The data set source should be properly cited when the data are
used. A formal reference of the form: \\<authors\\>, 2012, last updated
2013: \\<dataset name\\>. NASA/GSFC, Greenbelt, MD, USA, NASA Goddard
Earth Sciences Data and Information Services Center (GES DISC).
Accessed \\<enter user data access date\\> at \\<DOI\\> is suggested following
Parsons et al. (2010), [doi:10.1029/2010EO340001](https://doi.org/10.1029/2010EO340001).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
