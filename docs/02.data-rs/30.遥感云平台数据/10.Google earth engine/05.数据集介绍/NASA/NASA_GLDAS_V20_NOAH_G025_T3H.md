---
title: "Reprocessed GLDAS-2.0: Global Land Data Assimilation System"
date: 2026-11-03 12:00:00
permalink: /pages/e83800ec/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "3-hourly"
  - "climate"
  - "cryosphere"
  - "evaporation"
  - "forcing"
  - "geophysical"
  - "gldas"
  - "humidity"
  - "ldas"
  - "nasa"
  - "precipitation"
  - "pressure"
---

# Reprocessed GLDAS-2.0: Global Land Data Assimilation System

## 数据集简介

NASA Global Land Data Assimilation System Version 2 (GLDAS-2) has three
components: GLDAS-2.0, GLDAS-2.1, and GLDAS-2.2. GLDAS-2.0 is forced entirely
with the Princeton meteorological forcing input data and provides a temporally
consistent series from 1948 through 2014. GLDAS-2.1 is forced with a combination
of model and observation data from 2000 to present. GLDAS-2.2 product suites use
data assimilation (DA), whereas the GLDAS-2.0 and GLDAS-2.1 products are
"open-loop" (i.e., no data assimilation). The choice of forcing data, as well as
DA observation source, variable, and scheme, vary for different GLDAS-2.2
products.GLDAS-2.0 is one of two components of the GLDAS Version 2 (GLDAS-2)
dataset, the second being GLDAS-2.1. GLDAS-2.0 is reprocessed with
the updated Princeton Global Meteorological Forcing Dataset
(Sheffield et al., 2006) and upgraded Land Information System
Version 7 (LIS-7). It covers the period 1948-2010, and will be extended
to more recent years as corresponding forcing data become available.

The model simulation was initialized on January 1, 1948, using soil
moisture and other state fields from the LSM climatology for
that day of the year. The simulation used the common GLDAS datasets
for land cover (MCD12Q1: Friedl et al., 2010), land water mask
(MOD44W: Carroll et al., 2009), soil texture (Reynolds, 1999), and
elevation (GTOPO30). The MODIS based land surface parameters are used in
the current GLDAS-2.x products while the AVHRR base parameters were used
in GLDAS-1 and previous GLDAS-2 products (prior to October 2012).

Documentation:

* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/GLDAS/GLDAS_NOAH025_3H.2.0/doc/README_GLDAS2.pdf)

* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)

* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

Provider's Note: the names with extension _tavg are variables
averaged over the past 3-hours, the names with extension '_acc' are
variables accumulated over the past 3-hours, the names with extension
'_inst' are instantaneous variables, and the names with '_f' are
forcing variables.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GLDAS/V20/NOAH/G025/T3H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1948-01-01 至 2014-12-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：3-hourly, climate, cryosphere, evaporation, forcing, geophysical, gldas, humidity, ldas, nasa, precipitation, pressure, radiation, soil, soil-moisture, surface, temperature, water-vapor, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Albedo_inst | Albedo | 27830 |  |
| AvgSurfT_inst | Average surface skin temperature | 27830 |  |
| CanopInt_inst | Plant canopy surface water | 27830 |  |
| ECanop_tavg | Canopy water evaporation | 27830 |  |
| ESoil_tavg | Direct evaporation from bare soil | 27830 |  |
| Evap_tavg | Evapotranspiration | 27830 |  |
| LWdown_f_tavg | Downward long-wave radiation flux | 27830 |  |
| Lwnet_tavg | Net long-wave radiation flux | 27830 |  |
| PotEvap_tavg | Potential evaporation rate | 27830 |  |
| Psurf_f_inst | Pressure | 27830 |  |
| Qair_f_inst | Specific humidity | 27830 |  |
| Qg_tavg | Heat flux | 27830 |  |
| Qh_tavg | Sensible heat net flux | 27830 |  |
| Qle_tavg | Latent heat net flux | 27830 |  |
| Qs_acc | Storm surface runoff | 27830 |  |
| Qsb_acc | Baseflow-groundwater runoff | 27830 |  |
| Qsm_acc | Snow melt | 27830 |  |
| Rainf_f_tavg | Total precipitation rate | 27830 |  |
| Rainf_tavg | Rain precipitation rate | 27830 |  |
| RootMoist_inst | Root zone soil moisture | 27830 |  |
| SWE_inst | Snow depth water equivalent | 27830 |  |
| SWdown_f_tavg | Downward short-wave radiation flux | 27830 |  |
| SnowDepth_inst | Snow depth | 27830 |  |
| Snowf_tavg | Snow precipitation rate | 27830 |  |
| SoilMoi0_10cm_inst | Soil moisture | 27830 |  |
| SoilMoi10_40cm_inst | Soil moisture | 27830 |  |
| SoilMoi40_100cm_inst | Soil moisture | 27830 |  |
| SoilMoi100_200cm_inst | Soil moisture | 27830 |  |
| SoilTMP0_10cm_inst | Soil temperature | 27830 |  |
| SoilTMP10_40cm_inst | Soil temperature | 27830 |  |
| SoilTMP40_100cm_inst | Soil temperature | 27830 |  |
| SoilTMP100_200cm_inst | Soil temperature | 27830 |  |
| Swnet_tavg | Net short wave radiation flux | 27830 |  |
| Tair_f_inst | Air temperature | 27830 |  |
| Tveg_tavg | Transpiration | 27830 |  |
| Wind_f_inst | Wind speed | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GLDAS/V20/NOAH/G025/T3H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V20_NOAH_G025_T3H
- 数据引用：Rodell, M., P.R. Houser, U. Jambor, J. Gottschalck, K. Mitchell,
C.-J. Meng, K. Arsenault, B. Cosgrove, J. Radakovich, M. Bosilovich,
J.K. Entin, J.P. Walker, D. Lohmann, and D. Toll, The Global Land Data
Assimilation System, Bull. Amer. Meteor. Soc., 85(3), 381-394, 2004.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
