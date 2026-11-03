---
title: "MERRA-2 M2T1NXLND: Land Surface Diagnostics V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/fe806e47/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "cryosphere"
  - "evaporation"
  - "ice"
  - "merra"
  - "precipitation"
  - "soil"
  - "temperature"
  - "water-vapor"
  - "weather-and-climate"
---

# MERRA-2 M2T1NXLND: Land Surface Diagnostics V5.12.4

## 数据集简介

M2T1NXLND (or tavg1_2d_lnd_Nx) is an hourly time-averaged data
collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of land
surface diagnostics, such a baseflow flux, runoff, surface soil wetness,
root zone soil wetness, water at surface layer, water at root zone
layer, and soil temperature at six layers. The data field is
time-stamped with the central time of an hour starting from 00:30 UTC,
e.g.: 00:30, 01:30, ... , 23:30 UTC.

MERRA-2 is the latest version of global atmospheric reanalysis for the
satellite era produced by NASA Global Modeling and Assimilation Office
(GMAO) using the Goddard Earth Observing System Model (GEOS) version
5.12.4. The dataset covers the period of 1980-present with the latency
of ~3 weeks after the end of a month.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/lnd/2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA/MERRA、Google Earth Engine
- 时间范围：1980-01-01 至 2026-10-01
- 空间分辨率：69375 米
- 许可：proprietary
- 关键词：climate, cryosphere, evaporation, ice, merra, precipitation, soil, temperature, water-vapor, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BASEFLOW | Baseflow flux | 69375 |  |
| ECHANGE | Rate of change of total land energy | 69375 |  |
| EVLAND | Evaporation land | 69375 |  |
| EVPINTR | Interception loss energy flux | 69375 |  |
| EVPSBLN | Snow ice evaporation energy flux | 69375 |  |
| EVPSOIL | Baresoil evaporation energy flux | 69375 |  |
| EVPTRNS | Transpiration energy flux | 69375 |  |
| FRSAT | Fractional area of saturated zone | 69375 |  |
| FRSNO | Fractional area of land snowcover | 69375 |  |
| FRUNST | Fractional area of unsaturated zone | 69375 |  |
| FRWLT | Fractional area of wilting zone | 69375 |  |
| GHLAND | Ground heating land | 69375 |  |
| GRN | Greeness fraction | 69375 |  |
| GWETPROF | Average prof soil moisture | 69375 |  |
| GWETROOT | Root zone soil wetness | 69375 |  |
| GWETTOP | Surface soil wetness | 69375 |  |
| LAI | Leaf area index | 69375 |  |
| LHLAND | Latent heat flux land | 69375 |  |
| LWLAND | Net longwave land | 69375 |  |
| PARDFLAND | Surface downwelling photosynthetic active radiation diffuse flux  | 69375 |  |
| PARDRLAND | Surface downwelling par beam flux | 69375 |  |
| PRECSNOLAND | Snowfall land | 69375 |  |
| PRECTOTLAND | Total precipitation land | 69375 |  |
| PRMC | Water profile | 69375 |  |
| QINFIL | Soil water infiltration rate | 69375 |  |
| RUNOFF | Overland runoff including throughflow | 69375 |  |
| RZMC | Water root zone | 69375 |  |
| SFMC | Water surface layer | 69375 |  |
| SHLAND | Sensible heat flux land | 69375 |  |
| SMLAND | Snowmelt flux land | 69375 |  |
| SNODP | Snow depth | 69375 |  |
| SNOMAS | Total snow storage land | 69375 |  |
| SPLAND | Rate of spurious land energy source | 69375 |  |
| SPSNOW | Rate of spurious snow energy | 69375 |  |
| SPWATR | Rate of spurious land water source | 69375 |  |
| SWLAND | Net shortwave land | 69375 |  |
| TELAND | Total energy storage land | 69375 |  |
| TPSNOW | Surface temperature of snow | 69375 |  |
| TSAT | Surface temperature of saturated zone | 69375 |  |
| TSOIL1 | Soil temperatures layer 1 | 69375 |  |
| TSOIL2 | Soil temperatures layer 2 | 69375 |  |
| TSOIL3 | Soil temperatures layer 3 | 69375 |  |
| TSOIL4 | Soil temperatures layer 4 | 69375 |  |
| TSOIL5 | Soil temperatures layer 5 | 69375 |  |
| TSOIL6 | Soil temperatures layer 6 | 69375 |  |
| TSURF | Surface temperature of land incl snow | 69375 |  |
| TUNST | Surface temperature of unsaturated zone | 69375 |  |
| TWLAND | Available water storage land | 69375 |  |
| TWLT | Surface temperature of wilted zone | 69375 |  |
| WCHANGE | Rate of change of total land water | 69375 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/lnd/2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_lnd_2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
