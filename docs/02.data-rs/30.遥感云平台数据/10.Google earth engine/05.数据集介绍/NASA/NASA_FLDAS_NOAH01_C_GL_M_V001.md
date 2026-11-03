---
title: "FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System"
date: 2026-11-03 12:00:00
permalink: /pages/00ebbade/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "cryosphere"
  - "evapotranspiration"
  - "famine"
  - "fldas"
  - "humidity"
  - "ldas"
  - "monthly"
  - "nasa"
  - "precipitation"
  - "runoff"
  - "snow"
---

# FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System

## 数据集简介

The FLDAS dataset (McNally et al. 2017), was designed to assist with food
security assessments in data-sparse, developing country settings. It
includes information on many climate-related variables including moisture
content, humidity, evapotranspiration, average soil temperature, total
precipitation rate, etc.

There are multiple different FLDAS datasets; this one uses Noah version
3.6.1 surface model with CHIRPS-6 hourly rainfall that has been
downscaled using the [NASA Land Surface Data Toolkit](https://lis.gsfc.nasa.gov/software/ldt).
which is part of the [Land Information System
framework](LIS; [https://lis.gsfc.nasa.gov/](https://lis.gsfc.nasa.gov/)). Temporal desegregation is required so that daily
rainfall inputs can be used in both energy and water balance calculations

For forcing data, this simulation uses a combination of the new version of Modern-Era
Retrospective analysis for Research and Applications version 2 (MERRA-2) data and Climate
Hazards Group InfraRed Precipitation with Station data (CHIRPS), a quasi-global rainfall
dataset designed for seasonal drought monitoring and trend analysis (Funk et al., 2015).

Documentation:

* [Readme](https://hydro1.gesdisc.eosdis.nasa.gov/data/FLDAS/FLDAS_NOAH01_C_GL_M.001/doc/README_FLDAS.pdf)

* [How-to](https://disc.gsfc.nasa.gov/information/howto?tags=hydrology)

* [GES DISC Hydrology Documentation](https://disc.gsfc.nasa.gov/information/documents?title=Hydrology%20Documentation)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/FLDAS/NOAH01/C/GL/M/V001`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1982-01-01 至 2026-09-01
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：climate, cryosphere, evapotranspiration, famine, fldas, humidity, ldas, monthly, nasa, precipitation, runoff, snow, soil, soil-moisture, soil-temperature, temperature, water-vapor, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Evap_tavg | Evapotranspiration | 11132 |  |
| LWdown_f_tavg | Downward longwave radiation flux | 11132 |  |
| Lwnet_tavg | Net longwave radiation flux | 11132 |  |
| Psurf_f_tavg | Surface pressure | 11132 |  |
| Qair_f_tavg | Specific humidity | 11132 |  |
| Qg_tavg | Soil heat flux | 11132 |  |
| Qh_tavg | Sensible heat net flux | 11132 |  |
| Qle_tavg | Latent heat net flux | 11132 |  |
| Qs_tavg | Storm surface runoff | 11132 |  |
| Qsb_tavg | Baseflow-groundwater runoff | 11132 |  |
| RadT_tavg | Surface radiative temperature | 11132 |  |
| Rainf_f_tavg | Total precipitation rate | 11132 |  |
| SnowCover_inst | Snow cover fraction | 11132 |  |
| SnowDepth_inst | Snow depth | 11132 |  |
| Snowf_tavg | Snowfall rate | 11132 |  |
| SoilMoi00_10cm_tavg | Soil moisture (0 - 10 cm underground) | 11132 |  |
| SoilMoi10_40cm_tavg | Soil moisture (10 - 40 cm underground) | 11132 |  |
| SoilMoi100_200cm_tavg | Soil moisture (100 - 200 cm underground) | 11132 |  |
| SoilMoi40_100cm_tavg | Soil moisture (40 - 100 cm underground) | 11132 |  |
| SoilTemp00_10cm_tavg | Soil temperature (0 - 10 cm underground) | 11132 |  |
| SoilTemp10_40cm_tavg | Soil temperature (10 - 40 cm underground) | 11132 |  |
| SoilTemp100_200cm_tavg | Soil temperature (100 - 200 cm underground) | 11132 |  |
| SoilTemp40_100cm_tavg | Soil temperature (40 - 100 cm underground) | 11132 |  |
| SWdown_f_tavg | Surface downward shortwave radiation | 11132 |  |
| SWE_inst | Snow water equivalent | 11132 |  |
| Swnet_tavg | Net shortwave radiation flux | 11132 |  |
| Tair_f_tavg | Near surface air temperature | 11132 |  |
| Wind_f_tavg | Near surface wind speed | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/FLDAS/NOAH01/C/GL/M/V001');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_FLDAS_NOAH01_C_GL_M_V001
- 数据引用：If you use these data in your research or applications, please include a
reference in your publication(s) similar to the following example:
Amy McNally NASA/GSFC/HSL (2018), FLDAS Noah Land Surface Model L4 Global
Monthly 0.1 x 0.1 degree (MERRA-2 and CHIRPS), Greenbelt, MD, USA, Goddard
Earth Sciences Data and Information Services Center (GES DISC), Accessed:
[Data Access Date], [doi:10.5067/5NHC22T9375G](https://doi.org/10.5067/5NHC22T9375G)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
