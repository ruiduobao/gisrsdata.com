---
title: "GEOS-CF fcst tavg1hr v2: Goddard Earth Observing System Composition Forecast"
date: 2026-11-03 12:00:00
permalink: /pages/9b143f3a/
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

# GEOS-CF fcst tavg1hr v2: Goddard Earth Observing System Composition Forecast

## 数据集简介

This dataset contains forecast (fcst) of time-averaged
frequency data (tavg1hr). It is built by merging the original GEOS-CF collections
chm_tavg_1hr_glo_L1440x721_slv, met_tavg_1hr_glo_L1440x721_slv, and
xgc_tavg_1hr_glo_L1440x721_slv. Use the 'creation_time' and 'forecast_time' properties
to select data of interest.
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

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v2/fcst/tavg1hr`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / GMAO、Google Earth Engine
- 时间范围：2025-08-04 至 2026-10-26
- 空间分辨率：27750 米
- 许可：proprietary
- 关键词：atmosphere, composition, forecast, geos, geos-cf, gmao, nasa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ACET | Acetone (CH3C(O)CH3, MW=58.09 g mol-1) mole fraction in dry air | 27750 |  |
| ALD2 | Acetaldehyde (CH3CHO, MW=44.06 g mol-1) mole fraction in dry air | 27750 |  |
| ALK4 | Lumped >= C4 Alkanes (MW=58.12 g mol-1) mole fraction in dry air | 27750 |  |
| AOD550_BC | Aerosol optical depth at 550 nm of black carbon aerosols | 27750 |  |
| AOD550_DUST | Aerosol optical depth at 550 nm of dust aerosols | 27750 |  |
| AOD550_OC | Aerosol optical depth at 550 nm of organic aerosols | 27750 |  |
| AOD550_PSC | Aerosol optical depth at 550 nm of polar stratospheric cloud | 27750 |  |
| AOD550_SLA | Aerosol optical depth at 550 nm of stratospheric liquid aerosols | 27750 |  |
| AOD550_SNA | Aerosol optical depth at 550 nm of sulfate-nitrate-ammonium aerosols | 27750 |  |
| AOD550_SS | Aerosol optical depth at 550 nm of sea salt aerosols | 27750 |  |
| BCPI | Hydrophilic black carbon aerosol (C, MW=12.01 g mol-1) mole fraction in dry air | 27750 |  |
| BCPO | Hydrophobic black carbon aerosol (C, MW=12.01 g mol-1) mole fraction in dry air | 27750 |  |
| BENZ | Benzene (C6H6, MW=78.12 g mol-1) mole fraction in dry air | 27750 |  |
| C2H6 | Ethane (C2H6, MW=30.08 g mol-1) mole fraction in dry air | 27750 |  |
| C3H8 | Propane (C3H8, MW=44.11 g mol-1) mole fraction in dry air | 27750 |  |
| CLDTT | Total cloud area fraction | 27750 |  |
| CO | Carbon monoxide (CO, MW=28.01 g mol-1) mole fraction in dry air | 27750 |  |
| COSZ | Cosine of the solar zenith angle | 27750 |  |
| DST1 | Dust aerosol; Reff = 0.7 microns (MW=29.0 g mol-1) mole fraction in dry air | 27750 |  |
| DST2 | Dust aerosol; Reff = 1.4 microns (MW=29.0 g mol-1) mole fraction in dry air | 27750 |  |
| DST3 | Dust aerosol; Reff = 2.4 microns (MW=29.0 g mol-1) mole fraction in dry air | 27750 |  |
| DST4 | Dust aerosol; Reff = 4.5 microns (MW=29.0 g mol-1) mole fraction in dry air | 27750 |  |
| EMIS_ACET | Acetone total emission mass flux | 27750 |  |
| EMIS_ACET_ANTH | Acetone industry emission mass flux | 27750 |  |
| EMIS_ACET_BB | Acetone biomass burning emission mass flux | 27750 |  |
| EMIS_ACET_BG | Acetone biogenic emission mass flux | 27750 |  |
| EMIS_ACET_OC | Acetone ocean emission mass flux | 27750 |  |
| EMIS_ALD2 | Acetaldehyde total emission mass flux | 27750 |  |
| EMIS_ALD2_ANTH | Acetaldehyde industry emission mass flux | 27750 |  |
| EMIS_ALD2_BB | Acetaldehyde biomass burning emission mass flux | 27750 |  |
| EMIS_ALD2_BG | Acetaldehyde biogenic emission mass flux | 27750 |  |
| EMIS_ALD2_OC | Acetaldehyde ocean emission mass flux | 27750 |  |
| EMIS_ALK4 | Lumped alkanes c4 and higher total emission mass flux | 27750 |  |
| EMIS_ALK4_ANTH | Lumped alkanes c4 and higher industry emission mass flux | 27750 |  |
| EMIS_ALK4_BB | Lumped alkanes c4 and higher biomass burning emission mass flux | 27750 |  |
| EMIS_BCPI | Hydrophilic black carbon total emission mass flux | 27750 |  |
| EMIS_BCPI_ANTH | Hydrophilic black carbon industry emission mass flux | 27750 |  |
| EMIS_BCPI_BB | Hydrophilic black carbon biomass emission mass flux | 27750 |  |
| EMIS_BCPO | Hydrophobic black carbon total emission mass flux | 27750 |  |
| EMIS_BCPO_ANTH | Hydrophobic black carbon industry emission mass flux | 27750 |  |
| EMIS_BCPO_BB | Hydrophobic black carbon biomass emission mass flux | 27750 |  |
| EMIS_BENZ | Benzene total emission mass flux | 27750 |  |
| EMIS_C2H6 | Ethane total emission mass flux | 27750 |  |
| EMIS_C2H6_ANTH | Ethane industry emission mass flux | 27750 |  |
| EMIS_C2H6_BB | Ethane biomass burning emission mass flux | 27750 |  |
| EMIS_C3H8 | Propane total emission mass flux | 27750 |  |
| EMIS_C3H8_ANTH | Propane industry emission mass flux | 27750 |  |
| EMIS_C3H8_BB | Propane biomass burning emission mass flux | 27750 |  |
| EMIS_CH2Br2 | Dibromomethane total emission mass flux | 27750 |  |
| EMIS_CH2I2 | Diiodomethane total emission mass flux | 27750 |  |
| EMIS_CH2IBr | Bromoiodomethane total emission mass flux | 27750 |  |
| EMIS_CH2ICl | Chloroiodomethane total emission mass flux | 27750 |  |
| EMIS_CH3I | Methyl iodide total emission mass flux | 27750 |  |
| EMIS_CHBr3 | Bromoform total emission mass flux | 27750 |  |
| EMIS_CO | Carbon monoxide total emission mass flux | 27750 |  |
| EMIS_CO_AGR | Carbon monoxide agriculture emission mass flux | 27750 |  |
| EMIS_CO_ANTH | Carbon monoxide industry emission mass flux | 27750 |  |
| EMIS_CO_BB | Carbon monoxide biomass emission mass flux | 27750 |  |
| EMIS_CO_BG | Carbon monoxide biogenic emission mass flux | 27750 |  |
| EMIS_CO_SHIP | Carbon monoxide ship emission mass flux | 27750 |  |
| EMIS_DMS | Dimethyl sulfide total emission mass flux | 27750 |  |
| EMIS_DST1 | Dust aerosol 0.7 microns emission mass flux | 27750 |  |
| EMIS_DST2 | Dust aerosol 1.4 microns emission mass flux | 27750 |  |
| EMIS_DST3 | Dust aerosol 2.4 microns emission mass flux | 27750 |  |
| EMIS_DST4 | Dust aerosol 4.5 microns emission mass flux | 27750 |  |
| EMIS_EOH | Ethanol total emission mass flux | 27750 |  |
| EMIS_EOH_ANTH | Ethanol industry emission mass flux | 27750 |  |
| EMIS_EOH_BG | Ethanol biogenic emission mass flux | 27750 |  |
| EMIS_HCHO | Formaldehyde total emission mass flux | 27750 |  |
| EMIS_HCHO_ANTH | Formaldehyde industry emission mass flux | 27750 |  |
| EMIS_HCHO_BB | Formaldehyde biomass burning emission mass flux | 27750 |  |
| EMIS_HCOOH | Formic acid total emission mass flux | 27750 |  |
| EMIS_HNO2 | Nitrous acid total emission mass flux | 27750 |  |
| EMIS_HOI | Hypoiodous acid total emission mass flux | 27750 |  |
| EMIS_I2 | Molecular iodine total emission mass flux | 27750 |  |
| EMIS_ISOP | Isoprene total emission mass flux | 27750 |  |
| EMIS_LIMO_BG | LIMO biogenic emission mass flux | 27750 |  |
| EMIS_MEK | Methyl ethyl ketone total emission mass flux | 27750 |  |
| EMIS_MEK_ANTH | Methyl ethyl ketone industry emission mass flux | 27750 |  |
| EMIS_MEK_BB | Methyl ethyl ketone biomass burning emission mass flux | 27750 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v2/fcst/tavg1hr');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v2_fcst_tavg1hr
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
