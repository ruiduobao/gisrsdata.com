---
title: "GEDI L2B Vector Canopy Cover Vertical Profile Metrics (Version 2)"
date: 2026-11-03 12:00:00
permalink: /pages/7bed5b79/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "elevation"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "nasa"
  - "tree-cover"
  - "usgs"
---

# GEDI L2B Vector Canopy Cover Vertical Profile Metrics (Version 2)

## 数据集简介

GEDI Level 2B Canopy Cover and Vertical Profile Metrics product (GEDI02_B)
extracts biophysical metrics from each GEDI waveform. These metrics
are based on the directional gap probability profile derived from the L1B
waveform.

The vertical step between foliage profile measurements
(known as dZ in GEDI documentation) is always 5 meters.
The original GEDI02_B product is a table of points with a spatial resolution
(average footprint) of 25 meters.

Please see [User Guide](https://lpdaac.usgs.gov/documents/986/GEDI02_UserGuide_V2.pdf)
for more information.

The Global Ecosystem Dynamics Investigation [GEDI](https://gedi.umd.edu/)
mission aims to characterize ecosystem structure and dynamics to enable
radically improved quantification and understanding of the Earth's carbon cycle
and biodiversity. The GEDI instrument, attached to the International Space
Station (ISS), collects data globally between 51.6&deg; N and 51.6&deg; S
latitudes at the highest resolution and densest sampling of the
3-dimensional structure of the Earth. The GEDI instrument consists of three
lasers producing a total of eight beam ground transects, which instantaneously
sample eight ~25 m footprints spaced approximately every 60 m along-track.

Product                 | Description
:---------------------  | :----------------------------------------------
L2A Vector         | [LARSE/GEDI/GEDI02_A_002](LARSE_GEDI_GEDI02_A_002)
L2A Monthly raster | [LARSE/GEDI/GEDI02_A_002_MONTHLY](LARSE_GEDI_GEDI02_A_002_MONTHLY)
L2A table index    | [LARSE/GEDI/GEDI02_A_002_INDEX](LARSE_GEDI_GEDI02_A_002_INDEX)
L2B Vector         | [LARSE/GEDI/GEDI02_B_002](LARSE_GEDI_GEDI02_B_002)
L2B Monthly raster | [LARSE/GEDI/GEDI02_B_002_MONTHLY](LARSE_GEDI_GEDI02_B_002_MONTHLY)
L2B table index    | [LARSE/GEDI/GEDI02_B_002_INDEX](LARSE_GEDI_GEDI02_B_002_INDEX)
L4A Biomass Vector | [LARSE/GEDI/GEDI04_A_002](LARSE_GEDI_GEDI04_A_002)
L4A Monthly raster | [LARSE/GEDI/GEDI04_A_002_MONTHLY](LARSE_GEDI_GEDI04_A_002_MONTHLY)
L4A table index    | [LARSE/GEDI/GEDI04_A_002_INDEX](LARSE_GEDI_GEDI04_A_002_INDEX)
L4B Biomass        | [LARSE/GEDI/GEDI04_B_002](LARSE_GEDI_GEDI04_B_002)
L4D Imputed Waveforms | [LARSE/GEDI/GEDI04_D_002](LARSE_GEDI_GEDI04_D_002)

## 基本信息

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_B_002`
- 数据类型：table_collection
- 提供方：USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-03-25 至 2024-11-29
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| algorithmrun_flag | INT | The L2B algorithm is run if this flag is set to 1 indicating data have sufficient waveform fidelity for L2B to run.  |
| beam | INT | Beam number |
| cover | INT | Total canopy cover |
| degrade_flag | INT | Flag indicating degraded state of pointing and/or positioning information.  * 3X - ADF CHU solution unavailable (ST-2) * 4X - Platform attitude * 5X - Poor solution (filter covariance large) * 6X - Data outage (platform attitude gap also) * 7X - ST 1+2 unavailable (similar boresight FOV) * 8X - ST 1+2+3 unavailable * 9X - ST 1+2+3 and ISS unavailable * X1 - Maneuver * X2 - GPS data gap * X3 - ST blinding * X4 - Other * X5 - GPS receiver clock drift * X6 - Maneuver & GPS receiver clock drift * X7 - GPS data gap & GPS receiver clock drift * X8 - ST blinding & GPS receiver clock drift * X9 - Other & GPS receiver clock drift  |
| delta_time | DOUBLE | Transmit time of the shot, measured in seconds from the master_time_epoch since 2018-01-01  |
| fhd_normal | INT | Foliage Height Diversity |
| l2b_quality_flag | INT | L2B quality flag |
| local_beam_azimuth | INT | Azimuth of the unit pointing vector for the laser in the local ENU frame measured from North and positive towards East.  |
| local_beam_elevation | INT | Elevation of the unit pointing vector for the laser in the local ENU frame measured from East-North plane and positive towards Up.  |
| pai | INT | Total Plant Area Index |
| pgap_theta | INT | Total Gap Probability (theta) |
| selected_l2a_algorithm | INT | Selected L2A algorithm setting |
| selected_rg_algorithm | INT | Selected R (ground) algorithm |
| sensitivity | INT | Maximum canopy cover that can be penetrated. Valid range is [0, 1]. Values outside of this range may be present but must be ignored. They represent noise and non-land surface waveforms.  |
| solar_azimuth | INT | The azimuth of the sun position vector from the laser bounce point position in the local ENU frame measured from North and is positive towards East.  |
| solar_elevation | INT | The elevation of the sun position vector from the laser bounce point position in the local ENU frame measured from the East-North plane and is positive Up.  |
| shot_number | STRING | Shot number, a unique identifier. This field has the format of OOOOOBBRRGNNNNNNNN, where:  * OOOOO: Orbit number * BB: Beam number * RR: Reserved for future use * G: Sub-orbit granule number * NNNNNNNN: Shot index  |
| shot_number_within_beam | INT | Shot number within beam |
| cover_z0 | INT | Cumulative canopy cover vertical profile at 0% |
| cover_z1 | INT | Cumulative canopy cover vertical profile at 1% |
| cover_z2 | INT | Cumulative canopy cover vertical profile at 2% |
| cover_z3 | INT | Cumulative canopy cover vertical profile at 3% |
| cover_z4 | INT | Cumulative canopy cover vertical profile at 4% |
| cover_z5 | INT | Cumulative canopy cover vertical profile at 5% |
| cover_z6 | INT | Cumulative canopy cover vertical profile at 6% |
| cover_z7 | INT | Cumulative canopy cover vertical profile at 7% |
| cover_z8 | INT | Cumulative canopy cover vertical profile at 8% |
| cover_z9 | INT | Cumulative canopy cover vertical profile at 9% |
| cover_z10 | INT | Cumulative canopy cover vertical profile at 10% |
| cover_z11 | INT | Cumulative canopy cover vertical profile at 11% |
| cover_z12 | INT | Cumulative canopy cover vertical profile at 12% |
| cover_z13 | INT | Cumulative canopy cover vertical profile at 13% |
| cover_z14 | INT | Cumulative canopy cover vertical profile at 14% |
| cover_z15 | INT | Cumulative canopy cover vertical profile at 15% |
| cover_z16 | INT | Cumulative canopy cover vertical profile at 16% |
| cover_z17 | INT | Cumulative canopy cover vertical profile at 17% |
| cover_z18 | INT | Cumulative canopy cover vertical profile at 18% |
| cover_z19 | INT | Cumulative canopy cover vertical profile at 19% |
| cover_z20 | INT | Cumulative canopy cover vertical profile at 20% |
| cover_z21 | INT | Cumulative canopy cover vertical profile at 21% |
| cover_z22 | INT | Cumulative canopy cover vertical profile at 22% |
| cover_z23 | INT | Cumulative canopy cover vertical profile at 23% |
| cover_z24 | INT | Cumulative canopy cover vertical profile at 24% |
| cover_z25 | INT | Cumulative canopy cover vertical profile at 25% |
| cover_z26 | INT | Cumulative canopy cover vertical profile at 26% |
| cover_z27 | INT | Cumulative canopy cover vertical profile at 27% |
| cover_z28 | INT | Cumulative canopy cover vertical profile at 28% |
| cover_z29 | INT | Cumulative canopy cover vertical profile at 29% |
| cover_z30 | INT | Cumulative canopy cover vertical profile at 30% |
| pai_z0 | INT | Plant Area Index profile in 0 m&sup2;/m&sup2; |
| pai_z1 | INT | Plant Area Index profile in 1 m&sup2;/m&sup2; |
| pai_z2 | INT | Plant Area Index profile in 2 m&sup2;/m&sup2; |
| pai_z3 | INT | Plant Area Index profile in 3 m&sup2;/m&sup2; |
| pai_z4 | INT | Plant Area Index profile in 4 m&sup2;/m&sup2; |
| pai_z5 | INT | Plant Area Index profile in 5 m&sup2;/m&sup2; |
| pai_z6 | INT | Plant Area Index profile in 6 m&sup2;/m&sup2; |
| pai_z7 | INT | Plant Area Index profile in 7 m&sup2;/m&sup2; |
| pai_z8 | INT | Plant Area Index profile in 8 m&sup2;/m&sup2; |
| pai_z9 | INT | Plant Area Index profile in 9 m&sup2;/m&sup2; |
| pai_z10 | INT | Plant Area Index profile in 10 m&sup2;/m&sup2; |
| pai_z11 | INT | Plant Area Index profile in 11 m&sup2;/m&sup2; |
| pai_z12 | INT | Plant Area Index profile in 12 m&sup2;/m&sup2; |
| pai_z13 | INT | Plant Area Index profile in 13 m&sup2;/m&sup2; |
| pai_z14 | INT | Plant Area Index profile in 14 m&sup2;/m&sup2; |
| pai_z15 | INT | Plant Area Index profile in 15 m&sup2;/m&sup2; |
| pai_z16 | INT | Plant Area Index profile in 16 m&sup2;/m&sup2; |
| pai_z17 | INT | Plant Area Index profile in 17 m&sup2;/m&sup2; |
| pai_z18 | INT | Plant Area Index profile in 18 m&sup2;/m&sup2; |
| pai_z19 | INT | Plant Area Index profile in 19 m&sup2;/m&sup2; |
| pai_z20 | INT | Plant Area Index profile in 20 m&sup2;/m&sup2; |
| pai_z21 | INT | Plant Area Index profile in 21 m&sup2;/m&sup2; |
| pai_z22 | INT | Plant Area Index profile in 22 m&sup2;/m&sup2; |
| pai_z23 | INT | Plant Area Index profile in 23 m&sup2;/m&sup2; |
| pai_z24 | INT | Plant Area Index profile in 24 m&sup2;/m&sup2; |
| pai_z25 | INT | Plant Area Index profile in 25 m&sup2;/m&sup2; |
| pai_z26 | INT | Plant Area Index profile in 26 m&sup2;/m&sup2; |
| pai_z27 | INT | Plant Area Index profile in 27 m&sup2;/m&sup2; |
| pai_z28 | INT | Plant Area Index profile in 28 m&sup2;/m&sup2; |
| pai_z29 | INT | Plant Area Index profile in 29 m&sup2;/m&sup2; |
| pai_z30 | INT | Plant Area Index profile in 30 m&sup2;/m&sup2; |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI02_B_002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_B_002
- 数据引用：GEDI L2B Canopy Cover and Vertical Profile Metrics Data Global Footprint
Level - GEDI02_B Dubayah, R., H. Tang, J. Armston, S. Luthcke, M. Hofton,
J. Blair. GEDI L2B Canopy Cover and Vertical Profile Metrics Data Global
Footprint Level V002. 2021, distributed by NASA EOSDIS Land Processes DAAC.
Accessed YYYY-MM-DD.

- DOI：10.5067/GEDI/GEDI02_B.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
