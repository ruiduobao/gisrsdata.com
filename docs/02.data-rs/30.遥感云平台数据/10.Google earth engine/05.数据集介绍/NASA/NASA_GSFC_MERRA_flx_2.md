---
title: "MERRA-2 M2T1NXFLX: Surface Flux Diagnostics V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/ccd67e09/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "merra"
  - "precipitation"
  - "sea-salt"
  - "so2"
  - "so4"
  - "soil-moisture"
  - "weather-and-climate"
---

# MERRA-2 M2T1NXFLX: Surface Flux Diagnostics V5.12.4

## 数据集简介

M2T1NXFLX (or tavg1_2d_flx_Nx) is an hourly time-averaged data
collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of
assimilated surface flux diagnostics, such as total precipitation, bias
corrected total precipitation, surface air temperature, surface specific
humidity, surface wind speed, and evaporation from turbulence. The
"surface" in this data collection is the model surface layer. The
heights of the model surface layer (HLML) vary with time and location,
with the value of ~60 meters above ground. The data field is time-stamped
with the central time of an hour starting from 00:30 UTC, e.g.: 00:30,
01:30, ... , 23:30 UTC.

MERRA-2 is the latest version of global atmospheric reanalysis for the
satellite era produced by [NASA Global Modeling and Assimilation Office
(GMAO)](https://gmao.gsfc.nasa.gov/) using the [Goddard Earth Observing
System Model (GEOS)](https://gmao.gsfc.nasa.gov/GEOS_systems/) version
5.12.4. The dataset covers the period of 1980-present with the latency
of ~3 weeks after the end of a month.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/flx/2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA/MERRA、Google Earth Engine
- 时间范围：1980-01-01 至 2026-10-01
- 空间分辨率：69375 米
- 许可：proprietary
- 关键词：climate, merra, precipitation, sea-salt, so2, so4, soil-moisture, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BSTAR | Surface buoyancy scale | 69375 |  |
| CDH | Surface exchange coefficient for heat | 69375 |  |
| CDM | Surface exchange coefficient for momentum | 69375 |  |
| CDQ | Surface exchange coefficient for moisture | 69375 |  |
| CN | Surface neutral drag coefficient | 69375 |  |
| DISPH | Zero plane displacement height | 69375 |  |
| EFLUX | Total latent energy flux | 69375 |  |
| EVAP | Evaporation from turbulence | 69375 |  |
| FRCAN | Areal fraction of anvil showers | 69375 |  |
| FRCCN | Areal fraction of convective showers | 69375 |  |
| FRCLS | Areal fraction of nonanvil large scale showers | 69375 |  |
| FRSEAICE | Ice covered fraction of tile | 69375 |  |
| GHTSKIN | Ground heating for skin temperature | 69375 |  |
| HFLUX | Sensible heat flux from turbulence | 69375 |  |
| HLML | Surface layer height | 69375 |  |
| NIRDF | Surface downwelling nearinfrared diffuse flux | 69375 |  |
| NIRDR | Surface downwelling nearinfrared beam flux | 69375 |  |
| PBLH | Planetary boundary layer height | 69375 |  |
| PGENTOT | Total column production of precipitation | 69375 |  |
| PRECANV | Anvil precipitation | 69375 |  |
| PRECCON | Convective precipitation | 69375 |  |
| PRECLSC | Nonanvil large scale precipitation | 69375 |  |
| PRECSNO | Snowfall | 69375 |  |
| PRECTOTCORR | Total precipitation | 69375 |  |
| PRECTOT | Total precipitation | 69375 |  |
| PREVTOT | Total column re-evaporation/sublimation of precipitation  | 69375 |  |
| QLML | Surface specific humidity | 69375 |  |
| QSH | Effective surface specific humidity | 69375 |  |
| QSTAR | Surface moisture scale | 69375 |  |
| RHOA | Air density at surface | 69375 |  |
| RISFC | Surface bulk Richardson number | 69375 |  |
| SPEEDMAX | Surface wind speed | 69375 |  |
| SPEED | Surface wind speed | 69375 |  |
| TAUGWX | Surface eastward gravity wave stress | 69375 |  |
| TAUGWY | Surface northward gravity wave stress | 69375 |  |
| TAUX | Eastward surface stress | 69375 |  |
| TAUY | Northward surface stress | 69375 |  |
| TCZPBL | Transcom planetary boundary layer height | 69375 |  |
| TLML | Surface air temperature | 69375 |  |
| TSH | Effective surface skin temperature | 69375 |  |
| TSTAR | Surface temperature scale | 69375 |  |
| ULML | Surface eastward wind | 69375 |  |
| USTAR | Surface velocity scale | 69375 |  |
| VLML | Surface northward wind | 69375 |  |
| Z0H | Surface roughness for heat | 69375 |  |
| Z0M | Surface roughness | 69375 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/flx/2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_flx_2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
