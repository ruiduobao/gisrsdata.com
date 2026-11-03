---
title: "GEOS-CF rpl htf v1: Goddard Earth Observing System Composition Forecast"
date: 2026-11-03 12:00:00
permalink: /pages/9a7ef21b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "composition"
  - "forecast"
  - "geos"
  - "gmao"
  - "nasa"
---

# GEOS-CF rpl htf v1: Goddard Earth Observing System Composition Forecast

## 数据集简介

This dataset contains meteorological replay (rpl) of high-temporal
frequency data (htf).
The Goddard Earth Observing System Composition Forecast (GEOS-CF) system is
a global constituent prediction system from NASA's [Global Modeling and Assimilation Office (GMAO)](https://gmao.gsfc.nasa.gov/).

GEOS-CF offers a new tool for atmospheric chemistry research, with the goal
to supplement NASA's broad range of space-based and in-situ observations.
GEOS-CF expands on the GEOS weather and aerosol modeling system by
introducing the [GEOS-Chem](http://wiki.seas.harvard.edu/geos-chem/)
chemistry module to provide hindcasts and 5-days forecasts of atmospheric
constituents including ozone (O<sub>3</sub>), carbon monoxide (CO), nitrogen dioxide
(NO<sub>2</sub>), sulfur dioxide (SO<sub>2</sub>), and fine particulate matter (PM<sub>2.5</sub>). The
chemistry module integrated in GEOS-CF is identical to the offline GEOS-Chem
model and readily benefits from the innovations provided by the GEOS-Chem
community. Model outputs are provided on a 0.25&deg; latitude-longitude grid.
Please refer to the [GEOS-CF Product Page](https://gmao.gsfc.nasa.gov/gmao-products/geos-cf/) for more details.

[Evaluation of GEOS-CF](https://doi.org/10.1029/2020MS002413) against satellite, ozonesonde, and surface
observations for years 2018&ndash;2019 shows realistic simulated
concentrations of O<sub>3</sub>, NO<sub>2</sub>, and CO, with normalized mean biases of &minus;0.1
to 0.3, normalized root mean square errors between 0.1&ndash;0.4, and
correlations between 0.3&ndash;0.8. Comparisons against surface observations
highlight the successful representation of air pollutants in many regions of
the world and during all seasons, yet also highlight current limitations,
such as a global high bias in SO<sub>2</sub> and an overprediction of summertime O<sub>3</sub>
over the Southeast United States.
GEOS-CF v1 generally overestimates aerosols by 20%&ndash;50% due to known
issues in GEOS-Chem v12.0.1 that have been addressed in later versions. The
5-days forecasts have skill scores comparable to the 1-day hindcast. Model
skills can be improved significantly by applying a bias-correction to the
surface model output using a machine-learning approach.

**Please Note:** A new version of GEOS-CF, v2, was released in January 2026. The updates 
to the GEOS-CF system include updates to the GEOS atmospheric general 
circulation model and the GEOS-Chem chemical model, replaying meteorology 
to [GEOS IT](https://gmao.gsfc.nasa.gov/gmao-products/geos-it/), direct assimilation of stratospheric profiles and column ozone, 
and updates to the anthropogenic emission source. Many of the same products 
are available, and some new products have been added, but other products have 
been discontinued. Furthermore, GEOS-CF v2 data will not be back-processed to
cover the same period as GEOS-CF v1. For this reason, we consider GEOS-CF v2 
to be a continuation and supplement to the GEOS-CF v data record, but not a 
replacement for GEOS-CF v1 data. Please see the [GEOS-CF system description](https://gmao.gsfc.nasa.gov/gmao-products/geos-cf/system-description_geos-cf/) 
for a summary of the updates, and consider the 
[preliminary GEOS-CF v2 evaluation results](https://gmao.gsfc.nasa.gov/science-snapshots/improved-atmospheric-composition-forecasting-in-geos-cf-version-2/) 
when deciding which version to use in your analysis.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v1/rpl/htf`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / GMAO、Google Earth Engine
- 时间范围：2018-01-01 至 2026-01-02
- 空间分辨率：27750 米
- 许可：proprietary
- 关键词：atmosphere, composition, forecast, geos, gmao, nasa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CO | Carbon monoxide (CO, MW = 28.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NO2 | Nitrogen dioxide (NO2, MW = 46.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| O3 | Ozone (O3, MW = 48.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| PM25_RH35_GCC | Particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25_RH35_GOCART | Total reconstructed PM2.5 RH 35 | 27750 |  |
| Q | Specific humidity | 27750 |  |
| RH | Relative humidity after moist | 27750 |  |
| SLP | Sea level pressure | 27750 |  |
| SO2 | Sulfur dioxide (SO2, MW = 64.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| T | Air temperature | 27750 |  |
| U | Eastward wind | 27750 |  |
| V | Northward wind | 27750 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v1/rpl/htf');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v1_rpl_htf
- 数据引用：Keller, C. A., Knowland, K. E., Duncan, B. N., Liu, J., Anderson, D. C.,
Das, S., ... & Pawson, S. (2021). Description of the NASA GEOS composition
forecast modeling system GEOS-CF v1. 0. Journal of Advances in Modeling
Earth Systems, 13(4), e2020MS002413.
[doi:10.1029/2020MS002413](https://doi.org/10.1029/2020MS002413)

- DOI：10.1029/2020MS002413

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
