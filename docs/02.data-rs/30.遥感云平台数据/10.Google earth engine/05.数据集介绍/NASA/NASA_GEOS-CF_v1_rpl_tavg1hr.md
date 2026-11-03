---
title: "GEOS-CF rpl tavg1hr v1: Goddard Earth Observing System Composition Forecast"
date: 2026-11-03 12:00:00
permalink: /pages/b0d4fd6a/
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

# GEOS-CF rpl tavg1hr v1: Goddard Earth Observing System Composition Forecast

## 数据集简介

This dataset contains meteorological replay (rpl) of time-average one hour
data (tavg1hr). It is built by merging the original GEOS-CF collections
chm_tavg_1hr_g1440x721_v1, met_tavg_1hr_g1440x721_x1, and
xgc_tavg_1hr_g1440x721_x1.
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

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v1/rpl/tavg1hr`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / GMAO、Google Earth Engine
- 时间范围：2018-01-01 至 2026-01-02
- 空间分辨率：27750 米
- 许可：proprietary
- 关键词：atmosphere, composition, forecast, geos, gmao, nasa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ACET | Acetone (CH3C(O)CH3, MW = 58.08 g mol-1) volume mixing ratio dry air | 27750 |  |
| ALD2 | Acetaldehyde (CH3CHO, MW = 44.05 g mol-1) volume mixing ratio dry air | 27750 |  |
| ALK4 | Lumped >= C4 Alkanes (MW = 58.12 g mol-1) volume mixing ratio dry air | 27750 |  |
| AOD550_BC | Black carbon optical depth at 550nm | 27750 |  |
| AOD550_CLOUD | Cloud optical depth | 27750 |  |
| AOD550_DST1 | Dust bin1 optical depth at 550nm | 27750 |  |
| AOD550_DST2 | Dust bin2 optical depth at 550nm | 27750 |  |
| AOD550_DST3 | Dust bin3 optical depth at 550nm | 27750 |  |
| AOD550_DST4 | Dust bin4 optical depth at 550nm | 27750 |  |
| AOD550_DST5 | Dust bin5 optical depth at 550nm | 27750 |  |
| AOD550_DST6 | Dust bin6 optical depth at 550nm | 27750 |  |
| AOD550_DST7 | Dust bin7 optical depth at 550nm | 27750 |  |
| AOD550_DUST | Dust optical depth at 550nm | 27750 |  |
| AOD550_OC | Organic carbon optical depth at 550nm | 27750 |  |
| AOD550_SALA | Accumulation mode sea salt optical depth at 550nm | 27750 |  |
| AOD550_SALC | Coarse mode sea salt optical depth at 550nm | 27750 |  |
| AOD550_SULFATE | Sulfate optical depth at 550nm | 27750 |  |
| BCPI | Hydrophilic black carbon aerosol (MW = 12.01 g mol-1) volume mixing ratio dry air | 27750 |  |
| BCPO | Hydrophobic black carbon aerosol (MW = 12.01 g mol-1) volume mixing ratio dry air | 27750 |  |
| BENZ | Benzene (C6H6, MW = 78.11 g mol-1) volume mixing ratio dry air | 27750 |  |
| C2H6 | Ethane (C2H6, MW = 30.07 g mol-1) volume mixing ratio dry air | 27750 |  |
| C3H8 | Propane (C3H8, MW = 44.10 g mol-1) volume mixing ratio dry air | 27750 |  |
| CH4 | Methane (CH4, MW = 16.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| CLDTT | Total cloud area fraction | 27750 |  |
| CO | Carbon monoxide (CO, MW = 28.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| DRYDEPFLX_BCPI | Hydrophilic black carbon aerosol (MW = 12.01 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_BCPO | Hydrophobic black carbon aerosol (MW = 12.01 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_DST1 | Dust aerosol, Reff = 0.7 microns (MW = 29.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_DST2 | Dust aerosol, Reff = 1.4 microns (MW = 29.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_DST3 | Dust aerosol, Reff = 2.4 microns (MW = 29.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_DST4 | Dust aerosol, Reff = 4.5 microns (MW = 29.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_HCHO | Formaldehyde (CH2O, MW = 30.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_HNO3 | Nitric acid (HNO3, MW = 63.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_NH3 | Ammonia (NH3, MW = 17.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_NH4 | Ammonium (NH4, MW = 18.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_NIT | Inorganic nitrates (MW = 62.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_NO2 | Nitrogen dioxide (NO2, MW = 46.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_O3 | Ozone (O3, MW = 48.00 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_OCPI | Hydrophilic organic carbon aerosol (MW = 12.01 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_OCPO | Hydrophobic organic carbon aerosol (MW = 12.01 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_SALA | Fine (0.01-0.05 microns) sea salt aerosol (MW = 31.40 g mol-1) dry deposition flux | 27750 |  |
| DRYDEPFLX_SALC | Coarse (0.5-8 microns) sea salt aerosol (MW = 31.40 g mol-1) dry deposition flux | 27750 |  |
| DST1 | Dust aerosol, Reff = 0.7 microns (MW = 29.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| DST2 | Dust aerosol, Reff = 1.4 microns (MW = 29.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| DST3 | Dust aerosol, Reff = 2.4 microns (MW = 29.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| DST4 | Dust aerosol, Reff = 4.5 microns (MW = 29.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| EOH | Ethanol (C2H5OH, MW = 46.07 g mol-1) volume mixing ratio dry air | 27750 |  |
| H2O2 | Hydrogen peroxide (H2O2, MW = 34.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| HCHO | Formaldehyde (CH2O, MW = 30.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| HNO3 | Nitric acid (HNO3, MW = 63.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| HNO4 | Peroxynitric acid (HNO4, MW = 79.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| ISOP | Isoprene (CH2=C(CH3)CH=CH2, MW = 68.12 g mol-1) volume mixing ratio dry air | 27750 |  |
| MACR | Methacrolein (CH2=C(CH3)CHO, MW = 70.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| MEK | Methyl Ethyl Ketone (RC(O)R, MW = 72.11 g mol-1) volume mixing ratio dry air | 27750 |  |
| MVK | Methyl vinyl ketone (CH2=CHC(=O)CH3, MW = 70.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| N2O5 | Dinitrogen pentoxide (N2O5, MW = 108.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NH3 | Ammonia (NH3, MW = 17.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NH4 | Ammonium (NH4, MW = 18.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NIT | Inorganic nitrates (MW = 62.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NO | Nitrogen oxide (NO, MW = 30.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NO2 | Nitrogen dioxide (NO2, MW = 46.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| NOy | Reactive nitrogen = NO NO2 HNO3 HNO4 HONO 2xN2O5 PAN OrganicNitrates AerosolNitrates | 27750 |  |
| O3 | Ozone (O3, MW = 48.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| OCPI | Hydrophilic organic carbon aerosol (MW = 12.01 g mol-1) volume mixing ratio dry air | 27750 |  |
| OCPO | Hydrophobic organic carbon aerosol (MW = 12.01 g mol-1) volume mixing ratio dry air | 27750 |  |
| PAN | Peroxyacetyl nitrate (CH3C(O)OONO2, MW = 121.00 g mol-1) volume mixing ratio dry air | 27750 |  |
| PHIS | Surface geopotential height | 27750 |  |
| PM25_RH35_GCC | Particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25_RH35_GOCART | Total reconstructed PM2.5 RH 35 | 27750 |  |
| PM25bc_RH35_GCC | Black carbon particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25du_RH35_GCC | Dust particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25ni_RH35_GCC | Nitrate particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25oc_RH35_GCC | Organic carbon particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25soa_RH35_GCC | Secondary organic aerosol particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25ss_RH35_GCC | Seasalt particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PM25su_RH35_GCC | Sulfate particulate matter with diameter below 2.5 um RH 35 | 27750 |  |
| PRPE | Lumped >= C3 alkenes (C3H6, MW = 42.08 g mol-1) volume mixing ratio dry air | 27750 |  |
| PS | Surface pressure | 27750 |  |
| Q | Specific humidity | 27750 |  |
| Q10M | 10-meter specific humidity | 27750 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v1/rpl/tavg1hr');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v1_rpl_tavg1hr
- 数据引用：Keller, C. A., Knowland, K. E., Duncan, B. N., Liu, J., Anderson, D. C.,
Das, S., ... & Pawson, S. (2021). Description of the NASA GEOS composition
forecast modeling system GEOS-CF v1. 0. Journal of Advances in Modeling
Earth Systems, 13(4), e2020MS002413.
[doi:10.1029/2020MS002413](https://doi.org/10.1029/2020MS002413)

- DOI：10.1029/2020MS002413

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
