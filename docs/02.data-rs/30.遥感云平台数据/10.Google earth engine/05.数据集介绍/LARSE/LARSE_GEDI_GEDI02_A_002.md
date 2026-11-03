---
title: "GEDI L2A Vector Canopy Top Height (Version 2)"
date: 2026-11-03 12:00:00
permalink: /pages/4874e1f7/
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

# GEDI L2A Vector Canopy Top Height (Version 2)

## 数据集简介

GEDI's Level 2A Geolocated Elevation and Height Metrics Product (GEDI02_A)
is primarily composed of 100 Relative Height (RH) metrics, which
collectively describe the waveform collected by GEDI.

The original GEDI02_A product is a table of point with a spatial resolution
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

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI02_A_002`
- 数据类型：table_collection
- 提供方：USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-03-25 至 2024-11-29
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| beam | INT | Beam identifier |
| degrade_flag | INT | Flag indicating degraded state of pointing and/or positioning information.  * 3X - ADF CHU solution unavailable (ST-2) * 4X - Platform attitude * 5X - Poor solution (filter covariance large) * 6X - Data outage (platform attitude gap also) * 7X - ST 1+2 unavailable (similar boresight FOV) * 8X - ST 1+2+3 unavailable * 9X - ST 1+2+3 and ISS unavailable * X1 - Maneuver * X2 - GPS data gap * X3 - ST blinding * X4 - Other * X5 - GPS receiver clock drift * X6 - Maneuver & GPS receiver clock drift * X7 - GPS data gap & GPS receiver clock drift * X8 - ST blinding & GPS receiver clock drift * X9 - Other & GPS receiver clock drift  |
| delta_time | DOUBLE | Time delta since Jan 1 00:00 2018 |
| digital_elevation_model | DOUBLE | TanDEM-X elevation at GEDI footprint location |
| digital_elevation_model_srtm | DOUBLE | SRTM elevation at GEDI footprint location |
| elev_highestreturn | DOUBLE | Elevation of highest detected return relative to reference ellipsoid  |
| elev_lowestmode | DOUBLE | Elevation of center of lowest mode relative to reference ellipsoid  |
| elevation_bias_flag | INT | Elevations potentially affected by 4bin (~60 cm) ranging error  |
| energy_total | DOUBLE | Integrated counts in the return waveform relative to the mean noise level  |
| landsat_treecover | DOUBLE | Tree cover in the year 2010, defined as canopy closure for all vegetation taller than 5 m in height as a percentage per output grid cell  |
| landsat_water_persistence | INT | Percent UMD GLAD Landsat observations with classified surface water  |
| lat_highestreturn | DOUBLE | Latitude of highest detected return |
| leaf_off_doy | INT | GEDI 1 km EASE 2.0 grid leaf-off start day-of-year |
| leaf_off_flag | INT | GEDI 1 km EASE 2.0 grid flag |
| leaf_on_cycle | INT | Flag that indicates the vegetation growing cycle for leaf-on observations  |
| leaf_on_doy | INT | GEDI 1 km EASE 2.0 grid leaf-on start day-of-year |
| lon_highestreturn | DOUBLE | Longitude of highest detected return |
| modis_nonvegetated | DOUBLE | Percent non-vegetated from MODIS MOD44B V6 data |
| modis_nonvegetated_sd | DOUBLE | Percent non-vegetated standard deviation from MODIS MOD44B V6 data  |
| modis_treecover | DOUBLE | Percent tree cover from MODIS MOD44B V6 data |
| modis_treecover_sd | DOUBLE | Percent tree cover standard deviation from MODIS MOD44B V6 data  |
| num_detectedmodes | INT | Number of detected modes in rxwaveform |
| pft_class | INT | GEDI 1 km EASE 2.0 grid Plant Functional Type (PFT) |
| quality_flag | INT | Flag indicating likely invalid waveform (1=valid, 0=invalid)  |
| region_class | INT | GEDI 1 km EASE 2.0 grid world continental regions |
| selected_algorithm | INT | Identifier of algorithm selected as identifying the lowest non-noise mode  |
| selected_mode | INT | Identifier of mode selected as lowest non-noise mode |
| selected_mode_flag | INT | Flag indicating status of selected_mode |
| sensitivity | DOUBLE | Maximum canopy cover that can be penetrated. Valid range is [0, 1]. Values outside of this range may be present but must be ignored. They represent noise and non-land surface waveforms.  |
| solar_azimuth | DOUBLE | The azimuth of the sun position vector from the laser bounce point position in the local ENU frame. The angle is measured from North and is positive towards East.  |
| solar_elevation | DOUBLE | The elevation of the sun position vector from the laser bounce point position in the local ENU frame. The angle is measured from the East-North plane and is positive Up.  |
| surface_flag | INT | Indicates elev_lowestmode is within 300m of Digital Elevation Model (DEM) or Mean Sea Surface (MSS) elevation  |
| urban_focal_window_size | INT | The focal window size used to calculate urban_proportion. Values are 3 (3x3 pixel window size) or 5 (5x5 pixel window size).  |
| urban_proportion | INT | The percentage proportion of land area within a focal area surrounding each shot that is urban land cover.  |
| orbit_number | INT | Orbit number |
| minor_frame_number | INT | Minor frame number 0-241() |
| shot_number_within_beam | INT | Shot number within beam |
| local_beam_azimuth | DOUBLE | Azimuth in radians of the unit pointing vector for the laser in the local ENU frame. The angle is measured from North and positive towards East.  |
| local_beam_elevation | DOUBLE | Elevation in radians of the unit pointing vector for the laser in the local ENU frame. The angle is measured from North and positive towards East.  |
| shot_number | STRING | Shot number, a unique identifier. This field has the format of OOOOOBBRRGNNNNNNNN, where:  * OOOOO: Orbit number * BB: Beam number * RR: Reserved for future use * G: Sub-orbit granule number * NNNNNNNN: Shot index  |
| rh0 | DOUBLE | Relative height metrics at 0% |
| rh1 | DOUBLE | Relative height metrics at 1% |
| rh2 | DOUBLE | Relative height metrics at 2% |
| rh3 | DOUBLE | Relative height metrics at 3% |
| rh4 | DOUBLE | Relative height metrics at 4% |
| rh5 | DOUBLE | Relative height metrics at 5% |
| rh6 | DOUBLE | Relative height metrics at 6% |
| rh7 | DOUBLE | Relative height metrics at 7% |
| rh8 | DOUBLE | Relative height metrics at 8% |
| rh9 | DOUBLE | Relative height metrics at 9% |
| rh10 | DOUBLE | Relative height metrics at 10% |
| rh11 | DOUBLE | Relative height metrics at 11% |
| rh12 | DOUBLE | Relative height metrics at 12% |
| rh13 | DOUBLE | Relative height metrics at 13% |
| rh14 | DOUBLE | Relative height metrics at 14% |
| rh15 | DOUBLE | Relative height metrics at 15% |
| rh16 | DOUBLE | Relative height metrics at 16% |
| rh17 | DOUBLE | Relative height metrics at 17% |
| rh18 | DOUBLE | Relative height metrics at 18% |
| rh19 | DOUBLE | Relative height metrics at 19% |
| rh20 | DOUBLE | Relative height metrics at 20% |
| rh21 | DOUBLE | Relative height metrics at 21% |
| rh22 | DOUBLE | Relative height metrics at 22% |
| rh23 | DOUBLE | Relative height metrics at 23% |
| rh24 | DOUBLE | Relative height metrics at 24% |
| rh25 | DOUBLE | Relative height metrics at 25% |
| rh26 | DOUBLE | Relative height metrics at 26% |
| rh27 | DOUBLE | Relative height metrics at 27% |
| rh28 | DOUBLE | Relative height metrics at 28% |
| rh29 | DOUBLE | Relative height metrics at 29% |
| rh30 | DOUBLE | Relative height metrics at 30% |
| rh31 | DOUBLE | Relative height metrics at 31% |
| rh32 | DOUBLE | Relative height metrics at 32% |
| rh33 | DOUBLE | Relative height metrics at 33% |
| rh34 | DOUBLE | Relative height metrics at 34% |
| rh35 | DOUBLE | Relative height metrics at 35% |
| rh36 | DOUBLE | Relative height metrics at 36% |
| rh37 | DOUBLE | Relative height metrics at 37% |
| rh38 | DOUBLE | Relative height metrics at 38% |
| rh39 | DOUBLE | Relative height metrics at 39% |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI02_A_002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI02_A_002
- 数据引用：GEDI L2A Elevation and Height Metrics Data Global Footprint Level - GEDI02_A
Dubayah, R., M. Hofton, J. Blair, J. Armston, H. Tang, S. Luthcke. GEDI L2A
Elevation and Height Metrics Data Global Footprint Level V002. 2021,
distributed by NASA EOSDIS Land Processes DAAC. Accessed YYYY-MM-DD.

- DOI：10.5067/GEDI/GEDI02_A.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
