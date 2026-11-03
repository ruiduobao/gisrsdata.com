---
title: "GLDAS-2.2: Global Land Data Assimilation System"
date: 2026-11-03 12:00:00
permalink: /pages/9e033fa6/
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

# GLDAS-2.2: Global Land Data Assimilation System

## 数据集简介

NASA Global Land Data Assimilation System Version 2 (GLDAS-2) has three
components: GLDAS-2.0, GLDAS-2.1, and GLDAS-2.2. GLDAS-2.0 is forced entirely
with the Princeton meteorological forcing input data and provides a temporally
consistent series from 1948 through 2014. GLDAS-2.1 is forced with a combination
of model and observation data from 2000 to present. GLDAS-2.2 product suites use
data assimilation (DA), whereas the GLDAS-2.0 and GLDAS-2.1 products are
"open-loop" (i.e., no data assimilation). The choice of forcing data, as well as
DA observation source, variable, and scheme, vary for different GLDAS-2.2
products.GLDAS-2.2 is new to the GES DISC archive and currently includes a main
product from CLSM-F2.5 with Data Assimilation for the Gravity Recovery and
Climate Experiment (GRACE-DA) from February 2003 to present. The GLDAS-2.2
data are available in two production streams: main and Early, only main one
is ingested.

The GLDAS-2.2 GRACE-DA product was simulated with Catchment-F2.5 in Land
Information System (LIS) Version 7. The data product contains 24 land
surface fields from February 1, 2003 to present.

The simulation started on February 1, 2003 using the conditions from the
GLDAS-2.0 Daily Catchment model simulation, forced with the meteorological
analysis fields from the operational European Centre for Medium-Range
Weather Forecasts (ECMWF) Integrated Forecasting System. The total
terrestrial water anomaly observation from GRACE satellite was assimilated
(Li et al, 2019). Due to the data agreement with ECMWF, this GLDAS-2.2 daily
product does not include the meteorological forcing fields.

Documentation:

* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/GLDAS/GLDAS_CLSM025_DA1_D.2.2/doc/README_GLDAS2.pdf)

* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)

* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

Provider's Note: the names with extension _tavg are variables
averaged over the past 3-hours, the names with extension '_acc' are
variables accumulated over the past 3-hours, the names with extension
'_inst' are instantaneous variables, and the names with '_f' are
forcing variables.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GLDAS/V022/CLSM/G025/DA1D`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Earth Sciences Data and Information Services Center、Google Earth Engine
- 时间范围：2003-01-01 至 2026-08-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：3-hourly, climate, cryosphere, evaporation, forcing, geophysical, gldas, humidity, ldas, nasa, precipitation, pressure, radiation, soil, soil-moisture, surface, temperature, water-vapor, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ACond_tavg | Aerodynamic conductance | 27830 |  |
| AvgSurfT_tavg | Average surface skin temperature | 27830 |  |
| CanopInt_tavg | Plant canopy surface water | 27830 |  |
| ECanop_tavg | Canopy water evaporation | 27830 |  |
| ESoil_tavg | Direct evaporation from bare soil | 27830 |  |
| EvapSnow_tavg | Snow Evaporation | 27830 |  |
| Evap_tavg | Evapotranspiration | 27830 |  |
| GWS_tavg | Ground water storage | 27830 |  |
| Lwnet_tavg | Net long-wave radiation flux | 27830 |  |
| Qg_tavg | Heat flux | 27830 |  |
| Qh_tavg | Sensible heat net flux | 27830 |  |
| Qle_tavg | Latent heat net flux | 27830 |  |
| Qsb_tavg | Baseflow-groundwater runoff | 27830 |  |
| Qsm_tavg | Snow melt | 27830 |  |
| Qs_tavg | Storm surface runoff | 27830 |  |
| SnowDepth_tavg | Snow depth | 27830 |  |
| SnowT_tavg | Snow Surface temperature | 27830 |  |
| SoilMoist_P_tavg | Profile Soil moisture | 27830 |  |
| SoilMoist_RZ_tavg | Root Zone Soil moisture | 27830 |  |
| SoilMoist_S_tavg | Surface Soil moisture | 27830 |  |
| SWE_tavg | Snow depth water equivalent | 27830 |  |
| Swnet_tavg | Net short wave radiation flux | 27830 |  |
| TVeg_tavg | Transpiration | 27830 |  |
| TWS_tavg | Terrestrial water storage | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GLDAS/V022/CLSM/G025/DA1D');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V022_CLSM_G025_DA1D
- 数据引用：Li, B., M. Rodell, S. Kumar, H. Beaudoing, A. Getirana, B. F. Zaitchik, et
al. (2019) Global GRACE data assimilation for groundwater and drought
monitoring: Advances and challenges. Water Resources Research, 55,
7564-7586.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
