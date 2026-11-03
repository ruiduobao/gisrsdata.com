---
title: "Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters"
date: 2026-11-03 12:00:00
permalink: /pages/40f99a0e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "earth-big-data"
  - "jpl"
  - "nasa"
  - "polarization"
  - "radar"
  - "sar"
  - "satellite-imagery"
  - "seasonal"
  - "sentinel1-derived"
---

# Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters

## 数据集简介

This data set is the first-of-its-kind spatial representation of
multi-seasonal, global C-band Synthetic Aperture Radar (SAR)
interferometric repeat-pass coherence and backscatter signatures.
Coverage comprises land masses and ice sheets from 82 degrees
Northern to 79 degrees Southern latitudes. The data set is derived
from multi-temporal repeat-pass interferometric processing of about
205,000 Sentinel-1 C-band SAR images acquired in Interferometric
Wide-Swath Mode from 1-Dec-2019 to 30-Nov-2020.

This dataset includes parameters for the coherence decay model, an
exponential function fitted to the seasonal median coherence values as a
function of the repeat interval to quantify how quickly coherence is lost
over time. The parameters are:

* **rho**: Represents the long-term coherence, the value that the model
  predicts as the repeat interval increases to infinity. It is a measure of
  the temporal stability of the scattering elements in the target area.

* **tau**: Represents the rate of coherence decay, a measure of how quickly
 the coherence drops from its initial high value towards *rho*. Lower
 values indicate faster decorrelation.

* **rmse**: The root mean square error, a quality indicator of the model
  fit. It quantifies the difference between the modeled coherence curve and
  the original, non-aggregated coherence observations used to fit the model.

The scale factor has already been applied to each of the bands. If you
would like to do calculations using the digital numbers from the original
rasters, load
*Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS_RAW*
instead.

Other datasets derived from Sentinel-1 observations over the same time
period include:

* [Backscatter](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER)
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Incidence Layover Shadow](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW)

## 基本信息

- 数据集编号（Earth Engine ID）：`Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS`
- 数据类型：影像集合（ImageCollection）
- 提供方：Earth Big Data LLC、Alaska Satellite Facility、Google Earth Engine
- 时间范围：2019-12-01 至 2020-12-01
- 空间分辨率：92.7 米
- 许可：CC-BY-4.0
- 关键词：earth-big-data, jpl, nasa, polarization, radar, sar, satellite-imagery, seasonal, sentinel1-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| fall_hh_rho | Fall (Sep-Nov 2020) HH rho. | 92.7 |  |
| fall_hh_rmse | Fall (Sep-Nov 2020) HH rmse. | 92.7 |  |
| fall_hh_tau | Fall (Sep-Nov 2020) HH tau. | 92.7 |  |
| fall_vv_rho | Fall (Sep-Nov 2020) VV rho. | 92.7 |  |
| fall_vv_rmse | Fall (Sep-Nov 2020) VV rmse. | 92.7 |  |
| fall_vv_tau | Fall (Sep-Nov 2020) VV tau. | 92.7 |  |
| spring_hh_rho | Spring (Mar-May 2020) HH rho. | 92.7 |  |
| spring_hh_rmse | Spring (Mar-May 2020) HH rmse. | 92.7 |  |
| spring_hh_tau | Spring (Mar-May 2020) HH tau. | 92.7 |  |
| spring_vv_rho | Spring (Mar-May 2020) VV rho. | 92.7 |  |
| spring_vv_rmse | Spring (Mar-May 2020) VV rmse. | 92.7 |  |
| spring_vv_tau | Spring (Mar-May 2020) VV tau. | 92.7 |  |
| summer_hh_rho | Summer (Jun-Aug 2020) HH rho. | 92.7 |  |
| summer_hh_rmse | Summer (Jun-Aug 2020) HH rmse. | 92.7 |  |
| summer_hh_tau | Summer (Jun-Aug 2020) HH tau. | 92.7 |  |
| summer_vv_rho | Summer (Jun-Aug 2020) VV rho. | 92.7 |  |
| summer_vv_rmse | Summer (Jun-Aug 2020) VV rmse. | 92.7 |  |
| summer_vv_tau | Summer (Jun-Aug 2020) VV tau. | 92.7 |  |
| winter_hh_rho | Winter (Dec 2019-Feb 2020) HH rho. | 92.7 |  |
| winter_hh_rmse | Winter (Dec 2019-Feb 2020) HH rmse. | 92.7 |  |
| winter_hh_tau | Winter (Dec 2019-Feb 2020) HH tau. | 92.7 |  |
| winter_vv_rho | Winter (Dec 2019-Feb 2020) VV rho. | 92.7 |  |
| winter_vv_rmse | Winter (Dec 2019-Feb 2020) VV rmse. | 92.7 |  |
| winter_vv_tau | Winter (Dec 2019-Feb 2020) VV tau. | 92.7 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS
- 数据引用：Kellndorfer, J., Cartus, O., Lavalle, M. et al. Global seasonal Sentinel-1
interferometric coherence and backscatter data set. Sci Data 9, 73 (2022).
[doi:10.1038/s41597-022-01189-6](https://doi.org/10.1038/s41597-022-01189-6).

- DOI：10.1038/s41597-022-01189-6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
