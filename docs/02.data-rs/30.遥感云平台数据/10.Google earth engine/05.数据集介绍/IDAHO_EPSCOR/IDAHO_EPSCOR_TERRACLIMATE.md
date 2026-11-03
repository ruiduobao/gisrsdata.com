---
title: "TerraClimate:  Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho"
date: 2026-11-03 12:00:00
permalink: /pages/a996bfa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "drought"
  - "evapotranspiration"
  - "geophysical"
  - "global"
  - "merced"
  - "monthly"
  - "palmer"
  - "pdsi"
  - "precipitation"
  - "runoff"
  - "temperature"
---

# TerraClimate:  Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho

## 数据集简介

TerraClimate is a dataset of monthly climate and climatic water balance for
global terrestrial surfaces. It uses climatically aided interpolation,
combining high-spatial resolution climatological normals from the
[WorldClim dataset](https://www.worldclim.org/), with coarser spatial
resolution, but time-varying data from
[CRU Ts4.0](https://data.ceda.ac.uk/badc/cru/data/cru_ts/) and the
[Japanese 55-year Reanalysis (JRA55)](https://jra.kishou.go.jp/JRA-55/index_en.html).
Conceptually, the procedure applies interpolated time-varying anomalies
from CRU Ts4.0/JRA55 to the high-spatial resolution climatology of
WorldClim to create a high-spatial resolution dataset that covers a broader
temporal record.

Temporal information is inherited from CRU Ts4.0 for most global land
surfaces for temperature, precipitation, and vapor pressure. However,
JRA55 data is used for regions where CRU data had zero climate stations
contributing (including all of Antarctica, and parts of Africa,
South America, and scattered islands). For primary climate variables of
temperature, vapor pressure, and precipitation, the University of Idaho
provides additional data on the number of stations (between 0 and 8) that
contributed to the CRU Ts4.0 data used by TerraClimate. JRA55 was used
exclusively for solar radiation and wind speeds.

TerraClimate additionally produces monthly surface water balance datasets
using a water balance model that incorporates reference evapotranspiration,
precipitation, temperature, and interpolated plant extractable soil water
capacity. A modified Thornthwaite-Mather climatic water-balance model and
extractable soil water storage capacity data was used at a 0.5° grid from
Wang-Erlandsson et al. (2016).

Data Limitations:

 1. Long-term trends in data are inherited from parent datasets.
    TerraClimate should not be used directly for independent assessments of
    trends.

 2. TerraClimate will not capture temporal variability at finer scales than
    parent datasets and thus is not able to capture variability in
    orographic precipitation ratios and inversions.

 3. The water balance model is very simple and does not account for
    heterogeneity in vegetation types or their physiological response to
    changing environmental conditions.

 4. Limited validation in data-sparse regions (e.g., Antarctica).

## 基本信息

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/TERRACLIMATE`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of California Merced、Google Earth Engine
- 时间范围：1958-01-01 至 2024-12-01
- 空间分辨率：4638.3 米
- 许可：CC0-1.0
- 关键词：climate, drought, evapotranspiration, geophysical, global, merced, monthly, palmer, pdsi, precipitation, runoff, temperature, vapor, water-vapor, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| aet | Actual evapotranspiration, derived using a one-dimensional soil water balance model | 4638.3 |  |
| def | Climate water deficit, derived using a one-dimensional soil water balance model | 4638.3 |  |
| pdsi | Palmer Drought Severity Index | 4638.3 |  |
| pet | Reference evapotranspiration (ASCE Penman-Montieth) | 4638.3 |  |
| pr | Precipitation accumulation | 4638.3 |  |
| ro | Runoff, derived using a one-dimensional soil water balance model | 4638.3 |  |
| soil | Soil moisture, derived using a one-dimensional soil water balance model | 4638.3 |  |
| srad | Downward surface shortwave radiation | 4638.3 |  |
| swe | Snow water equivalent, derived using a one-dimensional soil water balance model | 4638.3 |  |
| tmmn | Minimum temperature | 4638.3 |  |
| tmmx | Maximum temperature | 4638.3 |  |
| vap | Vapor pressure | 4638.3 |  |
| vpd | Vapor pressure deficit | 4638.3 |  |
| vs | Wind-speed at 10m | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/TERRACLIMATE');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_TERRACLIMATE
- 数据引用：Abatzoglou, J.T., S.Z. Dobrowski, S.A. Parks, K.C. Hegewisch, 2018,
Terraclimate, a high-resolution global dataset of monthly climate and
climatic water balance from 1958-2015, Scientific Data 5:170191,
[doi:10.1038/sdata.2017.191](https://doi.org/10.1038/sdata.2017.191)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
