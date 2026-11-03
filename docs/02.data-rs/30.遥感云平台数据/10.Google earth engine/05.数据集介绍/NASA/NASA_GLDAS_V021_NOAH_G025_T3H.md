---
title: "GLDAS-2.1: Global Land Data Assimilation System"
date: 2026-11-03 12:00:00
permalink: /pages/e49884e5/
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

# GLDAS-2.1: Global Land Data Assimilation System

## 数据集简介

NASA Global Land Data Assimilation System Version 2 (GLDAS-2) has three
components: GLDAS-2.0, GLDAS-2.1, and GLDAS-2.2. GLDAS-2.0 is forced entirely
with the Princeton meteorological forcing input data and provides a temporally
consistent series from 1948 through 2014. GLDAS-2.1 is forced with a combination
of model and observation data from 2000 to present. GLDAS-2.2 product suites use
data assimilation (DA), whereas the GLDAS-2.0 and GLDAS-2.1 products are
"open-loop" (i.e., no data assimilation). The choice of forcing data, as well as
DA observation source, variable, and scheme, vary for different GLDAS-2.2
products.GLDAS-2.1 is one of two components of the GLDAS Version 2 (GLDAS-2) dataset,
the second being GLDAS-2.0. GLDAS-2.1 is analogous to GLDAS-1 product stream,
with upgraded models forced by a combination of [GDAS, disaggregated GPCP,
and AGRMET radiation data sets](https://ldas.gsfc.nasa.gov/gldas/GLDASforcing.php).

The GLDAS-2.1 simulation started on January 1, 2000 using the
conditions from the GLDAS-2.0 simulation. This simulation was
forced with National Oceanic and Atmospheric Administration
(NOAA)/Global Data Assimilation System (GDAS) atmospheric analysis
fields (Derber et al., 1991), the disaggregated Global Precipitation
Climatology Project (GPCP) precipitation fields (Adler et al., 2003),
and the Air Force Weather Agency's AGRicultural METeorological
modeling system (AGRMET) radiation fields which became available
for March 1, 2001 onwards.

Documentation:

* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/GLDAS/GLDAS_NOAH025_3H.2.1/doc/README_GLDAS2.pdf)

* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)

* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

* [GES DISC Data Rods Documentation](https://disc.gsfc.nasa.gov/information/tools?title=Hydrology%20Data%20Rods)

Provider's Note: the names with extension _tavg are variables
averaged over the past 3-hours, the names with extension '_acc' are
variables accumulated over the past 3-hours, the names with extension
'_inst' are instantaneous variables, and the names with '_f' are
forcing variables.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GLDAS/V021/NOAH/G025/T3H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：2000-01-01 至 2026-10-15
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
var dataset = ee.ImageCollection('NASA/GLDAS/V021/NOAH/G025/T3H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V021_NOAH_G025_T3H
- 数据引用：Rodell, M., P.R. Houser, U. Jambor, J. Gottschalck, K. Mitchell,
C.-J. Meng, K. Arsenault, B. Cosgrove, J. Radakovich, M. Bosilovich,
J.K. Entin, J.P. Walker, D. Lohmann, and D. Toll, The Global Land Data
Assimilation System, Bull. Amer. Meteor. Soc., 85(3), 381-394, 2004.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
