---
title: "OpenET eeMETRIC Monthly Evapotranspiration v2.0 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/5c55d011/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gridmet-derived"
  - "landsat-derived"
  - "monthly"
  - "openet"
  - "water"
  - "water-vapor"
---

# OpenET eeMETRIC Monthly Evapotranspiration v2.0 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Google Earth Engine implementation of the Mapping Evapotranspiration
at high Resolution with Internalized Calibration model (eeMETRIC)

eeMETRIC applies the advanced METRIC algorithms and process of Allen
et al. (2007; 2015) and Allen et al. (2013b), where a singular
relationship between the near surface air temperature difference (dT)
and delapsed land surface temperature (TsDEM) is used to estimate sensible
heat flux (H) and is applied to each Landsat scene. Automated selection of
the hot and cold pixels for an image generally follows a statistical
isolation procedure described by Allen et al. (2013a) and ReVelle, Kilic
and Allen (2019a,b). The calibration of H in eeMETRIC utilizes alfalfa
reference ET calculated from the NLDAS gridded weather dataset using a
fixed 15% reduction in computed reference ET to account for known biases
in the gridded data set. The fixed reduction does not impact the
calibration accuracy of eeMETRIC and mostly reduces impacts of boundary
layer buoyancy correction.

The identification of candidates for pools of hot and cold pixels has
evolved in the eeMETRIC implementation of METRIC. The new automated
calibration process incorporates the combination of methodologies and
approaches that stem from two development branches of EEFlux (Allen
et al., 2015). The first branch focused on improving the automated pixel
selection process using standard lapse rates for land surface temperature
(LST) without any further spatial delapsing (ReVelle et al., 2019b). The
second branch incorporated a secondary spatial delapsing of LST as well as
changes to the pixel selection process (ReVelle et al., 2019a). The final,
combined approach is described by Kilic et al. (2021).

eeMETRIC employs the aerodynamic-related functions in complex terrain
(mountains) developed by Allen et al. (2013b) to improve estimates for
aerodynamic roughness, wind speed and boundary layer stability as related
to estimated terrain roughness, position on a slope and wind direction.
These functions tend to increase estimates for H (and reduce ET) on
windward slopes and may reduce H (and increase ET) on leeward slopes.
Other METRIC functions employed in eeMETRIC that have been added since
the descriptions provided in Allen et al. (2007 and 2011) include
reduction in soil heat flux (G) in the presence of organic mulch on the
ground surface, use of an excess aerodynamic resistance for shrublands,
use of the Perrier function for trees identified as forest (Allen et
al., 2018; Santos et al., 2012) and aerodynamic estimation of evaporation
from open water rather than using energy balance (Jensen and Allen 2016;
Allen et al., 2018). In 2022, the Perrier function was applied to tree
(orchard) crops and a 3-source partitioning of bulk surface temperature
into canopy temperature, shaded soil temperature and sunlit soil
temperature was applied to both orchards and vineyards. These latter
applications were made where orchards and vineyards are identified by
CDL or, in California, by a state-sponsored land use system. These
functions and other enhancements to the original METRIC model are described
in the most current METRIC users manual (Allen et al., 2018). eeMETRIC uses
the atmospherically corrected surface reflectance and LST from Landsat
Collection 2 Level 2, with fallback to Collection 2 Level 1 when needed for
near real-time estimates.

[Additional information](https://openetdata.org/methodologies/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：1999-10-01 至 2024-12-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | eeMETRIC ET value | 30 |  |
| count | Number of cloud free values | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_EEMETRIC_CONUS_GRIDMET_MONTHLY_v2_0
- 数据引用：Kilic, A., Allen, R.G., Blankenau, P., ReVelle, P., Ozturk, D. and
Huntington, J., 2021. Global production and free access to Landsat-scale
Evapotranspiration with EEFlux and eeMETRIC. In 6th Decennial National
Irrigation Symposium, 6-8, December 2021, San Diego, California
(p. 1). American Society of Agricultural and Biological Engineers.
[doi:10.13031/irrig.2020-038](https://doi.org/10.13031/irrig.2020-038)

- DOI：10.13031/irrig.2020-038

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
