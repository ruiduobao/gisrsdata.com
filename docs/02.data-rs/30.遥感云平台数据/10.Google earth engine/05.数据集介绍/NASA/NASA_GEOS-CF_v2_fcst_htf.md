---
title: "GEOS-CF fcst htf v2: Goddard Earth Observing System Composition Forecast"
date: 2026-11-03 12:00:00
permalink: /pages/09c96d14/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "composition"
  - "forecast"
  - "geos"
  - "geos-cf"
  - "gmao"
  - "nasa"
---

# GEOS-CF fcst htf v2: Goddard Earth Observing System Composition Forecast

## 数据集简介

This dataset contains forecast (fcst) of high-temporal frequency data (htf) at 15 minute intervals. 
It is created from the original GEOS-CF collection htf_inst_15mn_glo_L1440x721_slv. 
Use the 'creation_time' and 'forecast_time' properties to select data of interest.
The Goddard Earth Observing System Composition Forecast (GEOS-CF) system is
a global constituent prediction system from
NASA's [Global Modeling and Assimilation Office(GMAO)](
https://gmao.gsfc.nasa.gov/). 

GEOS-CF offers a tool for atmospheric chemistry research, with the goal
to supplement NASA's broad range of space-based and in-situ observations.
GEOS-CF expands on the GEOS weather and aerosol modeling system by
introducing the [GEOS-Chem](http://wiki.seas.harvard.edu/geos-chem/)
chemistry module to provide hindcasts and 5-days forecasts of atmospheric
constituents including ozone (O<sub>3</sub>), carbon monoxide (CO), nitrogen dioxide
(NO<sub>2</sub>), sulfur dioxide (SO<sub>2</sub>), coarse particulate matter 
(PM<sub>10</sub>), and fine particulate matter (PM<sub>2.5</sub>). The
chemistry module integrated in GEOS-CF is identical to the offline GEOS-Chem
model and readily benefits from the innovations provided by the GEOS-Chem
community. Outputs are provided globally at 0.25&deg; horizontal resolution. 
Please refer to the [GEOS-CF Product Page](https://gmao.gsfc.nasa.gov/gmao-products/geos-cf/) for more details.

In October 2025, a major update to the GEOS-CF system was introduced as 
GEOS-CF v2. This change included updates to the GEOS atmospheric general 
circulation model and the GEOS-Chem chemical model, replaying meteorology to 
[GEOS IT](https://gmao.gsfc.nasa.gov/gmao-products/geos-it/), direct assimilation 
of stratospheric profiles and column ozone from NASA Aura OMI and MLS instruments, 
and updates to the anthropogenic emission source. Evaluation of these updates is 
ongoing; results will be added into this description as they become available. 
[Preliminary results](https://gmao.gsfc.nasa.gov/science-snapshots/improved-atmospheric-composition-forecasting-in-geos-cf-version-2/) 
suggest that, in relation to GEOS-CF v1, GEOS-CF v2 dramatically 
improves the representation of PM<sub>2.5</sub> and SO<sub>2</sub> near the surface. 
Representations of O<sub>3</sub> and NO<sub>2</sub> are generally improved throughout
most of the atmospheric column, with and NO<sub>2</sub> being substantially lower in GEOS-CF v2 compared with v1. 
While representation of near-surface O<sub>3</sub> is improved compared to GEOS-CF v1, 
there remain high biases compared with ozone monitor data from the US Environmental Protection Agency.

Users of GEOS-CF are encouraged to treat outputs from the original system (v1) 
and the new system (v2) separately in their analysis, due to the extensive changes 
between the systems.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v2/fcst/htf`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / GMAO、Google Earth Engine
- 时间范围：2025-08-04 至 2026-11-01
- 空间分辨率：27750 米
- 许可：proprietary
- 关键词：atmosphere, composition, forecast, geos, geos-cf, gmao, nasa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CO | Carbon monoxide (CO, MW = 28.01 g mol-1) mole fraction in dry air | 27750 |  |
| NO2 | Nitrogen dioxide (NO2, MW = 46.01 g mol-1) mole fraction in dry air | 27750 |  |
| O3 | Ozone (O3, MW = 48.0 g mol-1) volume mixing ratio dry air | 27750 |  |
| PM25_RH35 | Particulate matter with diameter below 2.5 um mass at RH 35% (includes water) mass concentration in dry air | 27750 |  |
| SLP | Sea level pressure | 27750 |  |
| SO2 | Sulfur dioxide (SO2, MW = 64.04 g mol-1) mole fraction in dry air | 27750 |  |
| U | Eastward wind | 27750 |  |
| V | Northward wind | 27750 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v2/fcst/htf');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v2_fcst_htf
- 数据引用：Keller, C. A., Knowland, K. E., Duncan, B. N., Liu, J., Anderson, D. C.,
Das, S., ... & Pawson, S. (2021). Description of the NASA GEOS composition
forecast modeling system GEOS-CF v1.0. Journal of Advances in Modeling
Earth Systems, 13(4), e2020MS002413.
[doi:10.1029/2020MS002413](https://doi.org/10.1029/2020MS002413)

Knowland, K. E., Keller, C. A., Wales, P. A., Wargan, K., Coy, L., 
Johnson, M.S., ... & Pawson, S. (2022). NASA GEOS Composition Forecast Modeling 
System GEOS‐CF v1.0: Stratospheric Composition. Journal of Advances in Modeling
Earth Systems, 14, e2021MS002852. 
[doi:10.1029/2021MS002852](https://doi.org/10.1029/2021MS002852)

Note: these citations refer to the original GEOS-CF (v1) system; citations describing 
the new (v2) system will be added following publication.

- DOI：10.1029/2020MS002413

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
