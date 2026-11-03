---
title: "GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)"
date: 2026-11-03 12:00:00
permalink: /pages/359e6f68/
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

# GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)

## 数据集简介

GEDI Level 2B Canopy Cover and Vertical Profile Metrics product (GEDI02_B)
extracts biophysical metrics from each GEDI waveform. These metrics
are based on the directional gap probability profile derived from the L1B
waveform.

The vertical step between foliage profile measurements
(known as dZ in GEDI documentation) is always 5 meters.

The dataset LARSE/GEDI/GEDI02_B_002_MONTHLY is a raster version
of the original GEDI02_B product. The raster images are organized as monthly
composites of individual orbits in the corresponding month. Only root-level
cover, pai and pavd values and their associated quality flags and metadata
are preserved as raster bands. Each GEDI02_B_002 raster has 109 bands.

See [User Guide](https://lpdaac.usgs.gov/documents/986/GEDI02_UserGuide_V2.pdf)
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

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_B_002_MONTHLY`
- 数据类型：影像集合（ImageCollection）
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-03-25 至 2025-07-01
- 空间分辨率：25 米
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| algorithmrun_flag | The L2B algorithm is run if this flag is set to 1 indicating data have sufficient waveform fidelity for L2B to run.  | 25 |  |
| beam | Beam number | 25 |  |
| cover | Total canopy cover | 25 |  |
| degrade_flag | Flag indicating degraded state of pointing and/or positioning information.  * 3X - ADF CHU solution unavailable (ST-2) * 4X - Platform attitude * 5X - Poor solution (filter covariance large) * 6X - Data outage (platform attitude gap also) * 7X - ST 1+2 unavailable (similar boresight FOV) * 8X - ST 1+2+3 unavailable * 9X - ST 1+2+3 and ISS unavailable * X1 - Maneuver * X2 - GPS data gap * X3 - ST blinding * X4 - Other * X5 - GPS receiver clock drift * X6 - Maneuver & GPS receiver clock drift * X7 - GPS data gap & GPS receiver clock drift * X8 - ST blinding & GPS receiver clock drift * X9 - Other & GPS receiver clock drift  | 25 |  |
| delta_time | Transmit time of the shot, measured in seconds from the master_time_epoch since 2018-01-01  | 25 |  |
| fhd_normal | Foliage Height Diversity | 25 |  |
| l2b_quality_flag | L2B quality flag | 25 |  |
| local_beam_azimuth | Azimuth of the unit pointing vector for the laser in the local ENU frame measured from North and positive towards East.  | 25 |  |
| local_beam_elevation | Elevation of the unit pointing vector for the laser in the local ENU frame measured from East-North plane and positive towards Up.  | 25 |  |
| pai | Total Plant Area Index | 25 |  |
| pgap_theta | Total Gap Probability (theta) | 25 |  |
| selected_l2a_algorithm | Selected L2A algorithm setting | 25 |  |
| selected_rg_algorithm | Selected R (ground) algorithm | 25 |  |
| sensitivity | Maximum canopy cover that can be penetrated. Valid range is [0, 1]. Values outside of this range may be present but must be ignored. They represent noise and non-land surface waveforms.  | 25 |  |
| solar_azimuth | The azimuth of the sun position vector from the laser bounce point position in the local ENU frame measured from North and is positive towards East.  | 25 |  |
| solar_elevation | The elevation of the sun position vector from the laser bounce point position in the local ENU frame measured from the East-North plane and is positive Up.  | 25 |  |
| shot_number | Shot number, a unique identifier. This field has the format of OOOOOBBRRGNNNNNNNN, where:  * OOOOO: Orbit number * BB: Beam number * RR: Reserved for future use * G: Sub-orbit granule number * NNNNNNNN: Shot index  | 25 |  |
| shot_number_within_beam | Shot number within beam | 25 |  |
| cover_z0 | Cumulative canopy cover vertical profile at 0% | 25 |  |
| cover_z1 | Cumulative canopy cover vertical profile at 1% | 25 |  |
| cover_z2 | Cumulative canopy cover vertical profile at 2% | 25 |  |
| cover_z3 | Cumulative canopy cover vertical profile at 3% | 25 |  |
| cover_z4 | Cumulative canopy cover vertical profile at 4% | 25 |  |
| cover_z5 | Cumulative canopy cover vertical profile at 5% | 25 |  |
| cover_z6 | Cumulative canopy cover vertical profile at 6% | 25 |  |
| cover_z7 | Cumulative canopy cover vertical profile at 7% | 25 |  |
| cover_z8 | Cumulative canopy cover vertical profile at 8% | 25 |  |
| cover_z9 | Cumulative canopy cover vertical profile at 9% | 25 |  |
| cover_z10 | Cumulative canopy cover vertical profile at 10% | 25 |  |
| cover_z11 | Cumulative canopy cover vertical profile at 11% | 25 |  |
| cover_z12 | Cumulative canopy cover vertical profile at 12% | 25 |  |
| cover_z13 | Cumulative canopy cover vertical profile at 13% | 25 |  |
| cover_z14 | Cumulative canopy cover vertical profile at 14% | 25 |  |
| cover_z15 | Cumulative canopy cover vertical profile at 15% | 25 |  |
| cover_z16 | Cumulative canopy cover vertical profile at 16% | 25 |  |
| cover_z17 | Cumulative canopy cover vertical profile at 17% | 25 |  |
| cover_z18 | Cumulative canopy cover vertical profile at 18% | 25 |  |
| cover_z19 | Cumulative canopy cover vertical profile at 19% | 25 |  |
| cover_z20 | Cumulative canopy cover vertical profile at 20% | 25 |  |
| cover_z21 | Cumulative canopy cover vertical profile at 21% | 25 |  |
| cover_z22 | Cumulative canopy cover vertical profile at 22% | 25 |  |
| cover_z23 | Cumulative canopy cover vertical profile at 23% | 25 |  |
| cover_z24 | Cumulative canopy cover vertical profile at 24% | 25 |  |
| cover_z25 | Cumulative canopy cover vertical profile at 25% | 25 |  |
| cover_z26 | Cumulative canopy cover vertical profile at 26% | 25 |  |
| cover_z27 | Cumulative canopy cover vertical profile at 27% | 25 |  |
| cover_z28 | Cumulative canopy cover vertical profile at 28% | 25 |  |
| cover_z29 | Cumulative canopy cover vertical profile at 29% | 25 |  |
| cover_z30 | Cumulative canopy cover vertical profile at 30% | 25 |  |
| pai_z0 | Plant Area Index profile in 0 m&sup2;/m&sup2; | 25 |  |
| pai_z1 | Plant Area Index profile in 1 m&sup2;/m&sup2; | 25 |  |
| pai_z2 | Plant Area Index profile in 2 m&sup2;/m&sup2; | 25 |  |
| pai_z3 | Plant Area Index profile in 3 m&sup2;/m&sup2; | 25 |  |
| pai_z4 | Plant Area Index profile in 4 m&sup2;/m&sup2; | 25 |  |
| pai_z5 | Plant Area Index profile in 5 m&sup2;/m&sup2; | 25 |  |
| pai_z6 | Plant Area Index profile in 6 m&sup2;/m&sup2; | 25 |  |
| pai_z7 | Plant Area Index profile in 7 m&sup2;/m&sup2; | 25 |  |
| pai_z8 | Plant Area Index profile in 8 m&sup2;/m&sup2; | 25 |  |
| pai_z9 | Plant Area Index profile in 9 m&sup2;/m&sup2; | 25 |  |
| pai_z10 | Plant Area Index profile in 10 m&sup2;/m&sup2; | 25 |  |
| pai_z11 | Plant Area Index profile in 11 m&sup2;/m&sup2; | 25 |  |
| pai_z12 | Plant Area Index profile in 12 m&sup2;/m&sup2; | 25 |  |
| pai_z13 | Plant Area Index profile in 13 m&sup2;/m&sup2; | 25 |  |
| pai_z14 | Plant Area Index profile in 14 m&sup2;/m&sup2; | 25 |  |
| pai_z15 | Plant Area Index profile in 15 m&sup2;/m&sup2; | 25 |  |
| pai_z16 | Plant Area Index profile in 16 m&sup2;/m&sup2; | 25 |  |
| pai_z17 | Plant Area Index profile in 17 m&sup2;/m&sup2; | 25 |  |
| pai_z18 | Plant Area Index profile in 18 m&sup2;/m&sup2; | 25 |  |
| pai_z19 | Plant Area Index profile in 19 m&sup2;/m&sup2; | 25 |  |
| pai_z20 | Plant Area Index profile in 20 m&sup2;/m&sup2; | 25 |  |
| pai_z21 | Plant Area Index profile in 21 m&sup2;/m&sup2; | 25 |  |
| pai_z22 | Plant Area Index profile in 22 m&sup2;/m&sup2; | 25 |  |
| pai_z23 | Plant Area Index profile in 23 m&sup2;/m&sup2; | 25 |  |
| pai_z24 | Plant Area Index profile in 24 m&sup2;/m&sup2; | 25 |  |
| pai_z25 | Plant Area Index profile in 25 m&sup2;/m&sup2; | 25 |  |
| pai_z26 | Plant Area Index profile in 26 m&sup2;/m&sup2; | 25 |  |
| pai_z27 | Plant Area Index profile in 27 m&sup2;/m&sup2; | 25 |  |
| pai_z28 | Plant Area Index profile in 28 m&sup2;/m&sup2; | 25 |  |
| pai_z29 | Plant Area Index profile in 29 m&sup2;/m&sup2; | 25 |  |
| pai_z30 | Plant Area Index profile in 30 m&sup2;/m&sup2; | 25 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI02_B_002_MONTHLY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_B_002_MONTHLY

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
