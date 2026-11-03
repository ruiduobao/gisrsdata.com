---
title: "MethaneSAT L4 Area Sources Public Preview V2.0.0"
date: 2026-11-03 12:00:00
permalink: /pages/96d54b07/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "edf"
  - "emissions"
  - "ghg"
  - "methane"
  - "methanesat"
---

# MethaneSAT L4 Area Sources Public Preview V2.0.0

## 数据集简介

*The dispersed area emissions model is still in development and not
representative of a final product.*

This early "Public Preview" dataset provides high precision data for methane
emissions from dispersed area sources. These novel measurements demonstrate
the importance of quantifying total methane emissions with high resolution
to meet global methane mitigation goals.

Total emissions for a scene may be obtained by summing the area emissions
for a given collection ID.

Dispersed area emissions are estimated from methane concentration observations
in the form of column-averaged dry-air mole fractions of methane (XCH4) using
an inverse model. An atmospheric transport model - the Stochastic Time-Inverted
Lagrangian Transport (STILT) model; [Lin et al. (2003)](https://doi.org/10.1029/2002JD003161),
[Fasoli et al. (2018)](https://doi.org/10.5194/gmd-11-2813-2018); driven
by meteorological data from the National Centers for Environmental
Prediction ([NCEP](https://www.weather.gov/ncep/)) Global Forecast System
([GFS](https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php))
- is used to link variations in observed XCH4 to potential upwind sources.

These predictive linkages are used to invert an estimated set of emissions
from the observations of MethaneSAT using a novel Markov Chain Monte Carlo
technique nicknamed CORE (Conserved and Optimized Retrieval of Emissions).
Inflow across the domain boundary and pre-existing background concentrations
are estimated, but not reported. 

This set of initial observations made by MethaneSAT are consistent with
independent empirical data where available from other sources. Not all data
products (L3 concentration, L4 area and L4 points) are available for all
collection IDs. Individual heat maps can have spatial misallocations due to
several factors, including wind field uncertainty, observational
uncertainty and variable emission rates. Users are advised to interpret
individual emission grids with caution. For more about definitions and
limitations, see our
[technical explanation](https://www.methanesat.org/sites/default/files/2025-11/MethaneSAT%20Dispersed%20Area%20Emissions_Definitions%20and%20Limitations.pdf).
Contact the data provider for more information about the project at this
link:
[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/).

---

7/2/2025 Important Update: 

As you may be aware, we recently lost contact with the satellite. After
exploring all possible recovery options, we have now confirmed that it is
no longer functioning, due to an undetermined problem with the outer
platform carrying our methane detector. While there is no question this is
a setback, we are undeterred in our efforts to drive down methane pollution.
Please see our official statement here:
[MethaneSAT Loses Contact with Satellite | MethaneSAT](https://www.methanesat.org/project-updates/methanesat-loses-contact-satellite).

What this means for the Public Preview data: The existing datasets will
remain accessible on Google platforms and on our web portal for the
foreseeable future. Additionally, over the next few months, we will release
substantial new data collected by MethaneSAT prior to the loss of contact.
This will include hundreds of scenes (of targets that are roughly
200kmx200km). We hope this will be useful for you. Should there be any
changes to data availability, we will notify you well in advance.

Looking ahead: While we don’t have all the answers yet, we plan to leverage
our advanced Data Processing Platform (DPP) to quantify other streams of
satellite and/or aerial data. We will also take the necessary time to
evaluate the best next step in our efforts to enable methane reductions. To
stay up to date with further updates, feel free to sign up for our
[newsletter](https://mailchi.mp/methanesat/methanesat-newsletter-sign-up).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/edf-methanesat-ee/assets/public-preview/L4area_v2`
- 数据类型：影像集合（ImageCollection）
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 时间范围：2024-05-01 至 2025-06-14
- 空间分辨率：4000 米
- 许可：proprietary
- 关键词：atmosphere, climate, edf, emissions, ghg, methane, methanesat

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean_flux | Methane emissions traceable to a 4km^2 area. | 4000 |  |
| lower_bound_flux | Lower bound on the 95% confidence interval of flux. | 4000 |  |
| upper_bound_flux | Upper bound on the 95% confidence interval of flux. | 4000 |  |
| l4_retained_emitter | * 0: Emitter that is likely non-emitting and below noise threshold of   1 kg/hr/km^2. Emitter not included in emission totals. * 1: Emitter that is likely emitting and above noise threshold of 1   kg/hr/km^2. Emitter included in emission totals.  Only present on two step CORE products.  | 4000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/edf-methanesat-ee/assets/public-preview/L4area_v2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_edf-methanesat-ee_assets_public-preview_L4area_v2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
