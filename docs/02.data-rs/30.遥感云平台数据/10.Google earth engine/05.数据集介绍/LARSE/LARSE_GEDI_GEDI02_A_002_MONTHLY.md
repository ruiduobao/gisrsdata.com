---
title: "GEDI L2A Raster Canopy Top Height (Version 2)"
date: 2026-11-03 12:00:00
permalink: /pages/6e0348e1/
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

# GEDI L2A Raster Canopy Top Height (Version 2)

## 数据集简介

GEDI's Level 2A Geolocated Elevation and Height Metrics Product (GEDI02_A)
is primarily composed of 100 Relative Height (RH) metrics, which
collectively describe the waveform collected by GEDI.

The original GEDI02_A product is a table of point with a spatial resolution
(average footprint) of 25 meters.
The dataset LARSE/GEDI/GEDI02_A_002_MONTHLY is a raster version
of the original GEDI02_A product. The raster images are organized as monthly
composites of individual orbits in the corresponding month. Only root-level
RH values and their associated quality flags and metadata are preserved
as raster bands. Each GEDI02_A_002 raster has 136 bands.

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

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_A_002_MONTHLY`
- 数据类型：影像集合（ImageCollection）
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-03-25 至 2025-07-01
- 空间分辨率：25 米
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| beam | Beam identifier | 25 |  |
| degrade_flag | Flag indicating degraded state of pointing and/or positioning information.  * 3X - ADF CHU solution unavailable (ST-2) * 4X - Platform attitude * 5X - Poor solution (filter covariance large) * 6X - Data outage (platform attitude gap also) * 7X - ST 1+2 unavailable (similar boresight FOV) * 8X - ST 1+2+3 unavailable * 9X - ST 1+2+3 and ISS unavailable * X1 - Maneuver * X2 - GPS data gap * X3 - ST blinding * X4 - Other * X5 - GPS receiver clock drift * X6 - Maneuver & GPS receiver clock drift * X7 - GPS data gap & GPS receiver clock drift * X8 - ST blinding & GPS receiver clock drift * X9 - Other & GPS receiver clock drift  | 25 |  |
| delta_time | Time delta since Jan 1 00:00 2018 | 25 |  |
| digital_elevation_model | TanDEM-X elevation at GEDI footprint location | 25 |  |
| digital_elevation_model_srtm | SRTM elevation at GEDI footprint location | 25 |  |
| elev_highestreturn | Elevation of highest detected return relative to reference ellipsoid  | 25 |  |
| elev_lowestmode | Elevation of center of lowest mode relative to reference ellipsoid  | 25 |  |
| elevation_bias_flag | Elevations potentially affected by 4bin (~60 cm) ranging error  | 25 |  |
| energy_total | Integrated counts in the return waveform relative to the mean noise level  | 25 |  |
| landsat_treecover | Tree cover in the year 2010, defined as canopy closure for all vegetation taller than 5 m in height as a percentage per output grid cell  | 25 |  |
| landsat_water_persistence | Percent UMD GLAD Landsat observations with classified surface water  | 25 |  |
| lat_highestreturn | Latitude of highest detected return | 25 |  |
| leaf_off_doy | GEDI 1 km EASE 2.0 grid leaf-off start day-of-year | 25 |  |
| leaf_off_flag | GEDI 1 km EASE 2.0 grid flag | 25 |  |
| leaf_on_cycle | Flag that indicates the vegetation growing cycle for leaf-on observations  | 25 |  |
| leaf_on_doy | GEDI 1 km EASE 2.0 grid leaf-on start day-of-year | 25 |  |
| lon_highestreturn | Longitude of highest detected return | 25 |  |
| modis_nonvegetated | Percent non-vegetated from MODIS MOD44B V6 data | 25 |  |
| modis_nonvegetated_sd | Percent non-vegetated standard deviation from MODIS MOD44B V6 data  | 25 |  |
| modis_treecover | Percent tree cover from MODIS MOD44B V6 data | 25 |  |
| modis_treecover_sd | Percent tree cover standard deviation from MODIS MOD44B V6 data  | 25 |  |
| num_detectedmodes | Number of detected modes in rxwaveform | 25 |  |
| pft_class | GEDI 1 km EASE 2.0 grid Plant Functional Type (PFT) | 25 |  |
| quality_flag | Flag indicating likely invalid waveform (1=valid, 0=invalid)  | 25 |  |
| region_class | GEDI 1 km EASE 2.0 grid world continental regions | 25 |  |
| selected_algorithm | Identifier of algorithm selected as identifying the lowest non-noise mode  | 25 |  |
| selected_mode | Identifier of mode selected as lowest non-noise mode | 25 |  |
| selected_mode_flag | Flag indicating status of selected_mode | 25 |  |
| sensitivity | Maximum canopy cover that can be penetrated. Valid range is [0, 1]. Values outside of this range may be present but must be ignored. They represent noise and non-land surface waveforms.  | 25 |  |
| solar_azimuth | The azimuth of the sun position vector from the laser bounce point position in the local ENU frame. The angle is measured from North and is positive towards East.  | 25 |  |
| solar_elevation | The elevation of the sun position vector from the laser bounce point position in the local ENU frame. The angle is measured from the East-North plane and is positive Up.  | 25 |  |
| surface_flag | Indicates elev_lowestmode is within 300m of Digital Elevation Model (DEM) or Mean Sea Surface (MSS) elevation  | 25 |  |
| urban_focal_window_size | The focal window size used to calculate urban_proportion. Values are 3 (3x3 pixel window size) or 5 (5x5 pixel window size).  | 25 |  |
| urban_proportion | The percentage proportion of land area within a focal area surrounding each shot that is urban land cover.  | 25 |  |
| orbit_number | Orbit number | 25 |  |
| minor_frame_number | Minor frame number 0-241() | 25 |  |
| shot_number_within_beam | Shot number within beam | 25 |  |
| local_beam_azimuth | Azimuth in radians of the unit pointing vector for the laser in the local ENU frame. The angle is measured from North and positive towards East.  | 25 |  |
| local_beam_elevation | Elevation in radians of the unit pointing vector for the laser in the local ENU frame. The angle is measured from North and positive towards East.  | 25 |  |
| rh0 | Relative height metrics at 0% | 25 |  |
| rh1 | Relative height metrics at 1% | 25 |  |
| rh2 | Relative height metrics at 2% | 25 |  |
| rh3 | Relative height metrics at 3% | 25 |  |
| rh4 | Relative height metrics at 4% | 25 |  |
| rh5 | Relative height metrics at 5% | 25 |  |
| rh6 | Relative height metrics at 6% | 25 |  |
| rh7 | Relative height metrics at 7% | 25 |  |
| rh8 | Relative height metrics at 8% | 25 |  |
| rh9 | Relative height metrics at 9% | 25 |  |
| rh10 | Relative height metrics at 10% | 25 |  |
| rh11 | Relative height metrics at 11% | 25 |  |
| rh12 | Relative height metrics at 12% | 25 |  |
| rh13 | Relative height metrics at 13% | 25 |  |
| rh14 | Relative height metrics at 14% | 25 |  |
| rh15 | Relative height metrics at 15% | 25 |  |
| rh16 | Relative height metrics at 16% | 25 |  |
| rh17 | Relative height metrics at 17% | 25 |  |
| rh18 | Relative height metrics at 18% | 25 |  |
| rh19 | Relative height metrics at 19% | 25 |  |
| rh20 | Relative height metrics at 20% | 25 |  |
| rh21 | Relative height metrics at 21% | 25 |  |
| rh22 | Relative height metrics at 22% | 25 |  |
| rh23 | Relative height metrics at 23% | 25 |  |
| rh24 | Relative height metrics at 24% | 25 |  |
| rh25 | Relative height metrics at 25% | 25 |  |
| rh26 | Relative height metrics at 26% | 25 |  |
| rh27 | Relative height metrics at 27% | 25 |  |
| rh28 | Relative height metrics at 28% | 25 |  |
| rh29 | Relative height metrics at 29% | 25 |  |
| rh30 | Relative height metrics at 30% | 25 |  |
| rh31 | Relative height metrics at 31% | 25 |  |
| rh32 | Relative height metrics at 32% | 25 |  |
| rh33 | Relative height metrics at 33% | 25 |  |
| rh34 | Relative height metrics at 34% | 25 |  |
| rh35 | Relative height metrics at 35% | 25 |  |
| rh36 | Relative height metrics at 36% | 25 |  |
| rh37 | Relative height metrics at 37% | 25 |  |
| rh38 | Relative height metrics at 38% | 25 |  |
| rh39 | Relative height metrics at 39% | 25 |  |
| rh40 | Relative height metrics at 40% | 25 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI02_A_002_MONTHLY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_A_002_MONTHLY

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
