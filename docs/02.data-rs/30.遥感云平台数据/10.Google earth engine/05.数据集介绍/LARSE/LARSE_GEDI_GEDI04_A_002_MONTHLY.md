---
title: "GEDI L4A Raster Aboveground Biomass Density, Version 2.1"
date: 2026-11-03 12:00:00
permalink: /pages/51933d34/
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

# GEDI L4A Raster Aboveground Biomass Density, Version 2.1

## 数据集简介

This dataset contains Global Ecosystem Dynamics Investigation (GEDI)
Level 4A (L4A) Version 2 predictions of the aboveground biomass
density (AGBD; in Mg/ha) and estimates of the prediction standard
error within each sampled geolocated laser footprint. In this version,
the granules are in sub-orbits.
Height metrics from simulated waveforms associated with field estimates
of AGBD from multiple regions and plant functional types (PFTs) were
compiled to generate a calibration dataset for models representing
the combinations of world regions and PFTs (i.e., deciduous broadleaf
trees, evergreen broadleaf trees, evergreen needleleaf trees, deciduous
needleleaf trees, and the combination of grasslands, shrubs, and
woodlands).The algorithm setting group selection
used for GEDI02_A Version 2 has been modified for evergreen broadleaf
trees in South America to reduce false positive errors resulting from
the selection of waveform modes above ground elevation as the lowest mode.
The dataset LARSE/GEDI/GEDI04_A_002_MONTHLY is a raster version
of the original GEDI04_A product. The raster images are organized as monthly
composites of individual orbits in the corresponding month.

See [User Guide](https://daac.ornl.gov/GEDI/guides/GEDI_L4A_AGB_Density_V2_1.html)
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

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_A_002_MONTHLY`
- 数据类型：影像集合（ImageCollection）
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-03-25 至 2025-07-01
- 空间分辨率：25 米
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| agbd | Predicted aboveground biomass density | 25 |  |
| agbd_pi_lower | Lower prediction interval (see "alpha" attribute for the level)  | 25 |  |
| agbd_pi_upper | Upper prediction interval (see "alpha" attribute for the level)  | 25 |  |
| agbd_se | Aboveground biomass density prediction standard error  | 25 |  |
| agbd_t | Model prediction in fit units | 25 |  |
| agbd_t_se | Model prediction standard error in fit units (needed for calculation of custom prediction intervals)  | 25 |  |
| algorithm_run_flag | The L4A algorithm is run if this flag is set to 1. This flag selects data that have sufficient waveform fidelity for AGBD estimation.  | 25 |  |
| beam | Beam identifier | 25 |  |
| channel | Channel identifier | 25 |  |
| degrade_flag | Flag indicating degraded state of pointing and/or positioning information  | 25 |  |
| delta_time | Time since Jan 1 00:00 2018 | 25 |  |
| elev_lowestmode | Elevation of center of lowest mode relative to reference ellipsoid  | 25 |  |
| l2_quality_flag | Flag identifying the most useful L2 data for biomass predictions  | 25 |  |
| l4_quality_flag | Flag simplifying selection of most useful biomass predictions  | 25 |  |
| lat_lowestmode | Latitude of center of lowest mode | 25 |  |
| lon_lowestmode | Longitude of center of lowest mode | 25 |  |
| master_frac | Master time, fractional part. master_int+master_frac is equivalent to /BEAMXXXX/delta_time  | 25 |  |
| master_int | Master time, integer part. Seconds since master_time_epoch. master_int+master_frac is equivalent to /BEAMXXXX/delta_time',  | 25 |  |
| predict_stratum | Prediction stratum identifier. Character ID of the prediction stratum name for the 1 km cell  | 25 |  |
| predictor_limit_flag | Predictor value is outside the bounds of the training data (0=in bounds; 1=lower bound; 2=upper bound)  | 25 |  |
| response_limit_flag | Prediction value is outside the bounds of the training data (0=in bounds; 1=lower bound; 2=upper bound)  | 25 |  |
| selected_algorithm | Selected algorithm setting group | 25 |  |
| selected_mode | ID of mode selected as lowest non-noise mode | 25 |  |
| selected_mode_flag | Flag indicating status of selected_mode | 25 |  |
| sensitivity | Beam sensitivity. Maximum canopy cover that can be penetrated considering the SNR of the waveform  | 25 |  |
| solar_elevation | Solar elevation angle | 25 |  |
| surface_flag | Indicates elev_lowestmode is within 300m of Digital Elevation Model (DEM) or Mean Sea Surface (MSS) elevation  | 25 |  |
| shot_number | Shot number, a unique identifier. This field has the format of OOOOOBBRRGNNNNNNNN, where:  * OOOOO: Orbit number * BB: Beam number * RR: Reserved for future use * G: Sub-orbit granule number * NNNNNNNN: Shot index  | 25 |  |
| shot_number_within_beam | Shot number within beam | 25 |  |
| agbd_aN | Above ground biomass density; Geolocation latitude lowestmode  | 25 |  |
| agbd_pi_lower_aN | Above ground biomass density lower prediction interval | 25 |  |
| agbd_pi_upper_aN | Above ground biomass density upper prediction interval | 25 |  |
| agbd_se_aN | Aboveground biomass density prediction standard error  | 25 |  |
| agbd_t_aN | Aboveground biomass density model prediction in transform space  | 25 |  |
| agbd_t_pi_lower_aN | Lower prediction interval in transform space | 25 |  |
| agbd_t_pi_upper_aN | Upper prediction interval in transform space | 25 |  |
| agbd_t_se_aN | Model prediction standard error in fit units | 25 |  |
| algorithm_run_flag_aN | Algorithm run flag-this algorithm is run if this flag is set to 1. This flag selects data that have sufficient waveform fidelity for AGBD estimation  | 25 |  |
| l2_quality_flag_aN | Flag identifying the most useful L2 data for biomass predictions'  | 25 |  |
| l4_quality_flag_aN | Flag simplifying selection of most useful biomass predictions  | 25 |  |
| predictor_limit_flag_aN | Predictor value is outside the bounds of the training data | 25 |  |
| response_limit_flag_aN | Prediction value is outside the bounds of the training data | 25 |  |
| selected_mode_aN | ID of mode selected as lowest non-noise mode | 25 |  |
| selected_mode_flag_aN | Flag indicating status of selected mode | 25 |  |
| elev_lowestmode_aN | Elevation of center of lowest mode relative to the reference ellipsoid  | 25 |  |
| lat_lowestmode_aN | Latitude of center of lowest mode | 25 |  |
| lon_lowestmode_aN | Longitude of center of lowest mode | 25 |  |
| sensitivity_aN | Maximum canopy cover that can be penetrated considering the SNR of the waveform  | 25 |  |
| stale_return_flag | Flag from digitizer indicating the real-time pulse detection algorithm did not detect a return signal above its detection threshold within the entire 10 km search window. The pulse location of the previous shot was used to select the telemetered waveform.  | 25 |  |
| landsat_treecover | Tree cover in the year 2010, defined as canopy closure for all vegetation taller than 5 m in height (Hansen et al., 2013) and encoded as a percentage per output grid cell.  | 25 |  |
| landsat_water_persistence | The percent UMD GLAD Landsat observations with classified surface water between 2018 and 2019. Values >80 usually represent permanent water while values <10 represent permanent land.  | 25 |  |
| leaf_off_doy | GEDI 1 km EASE 2.0 grid leaf-off start day-of-year derived from the NPP VIIRS Global Land Surface Phenology Product.  | 25 |  |
| leaf_off_flag | GEDI 1 km EASE 2.0 grid flag derived from leaf_off_doy, leaf_on_doy, and pft_class, indicating if the observation was recorded during leaf-off conditions in deciduous needleleaf or broadleaf forests and woodlands. 1=leaf-off, 0=leaf-on.  | 25 |  |
| leaf_on_cycle | Flag that indicates the vegetation growing cycle for leaf-on observations. Values are 0=leaf-off conditions, 1=cycle 1, 2=cycle 2.  | 25 |  |
| leaf_on_doy | GEDI 1 km EASE 2.0 grid leaf-on start day- of-year derived from the NPP VIIRS Global Land Surface Phenology product.  | 25 |  |
| pft_class | GEDI 1 km EASE 2.0 grid Plant Functional Type (PFT) derived from the MODIS MCD12Q1v006 product. Values follow the Land Cover Type 5 Classification scheme.  | 25 |  |
| region_class | GEDI 1 km EASE 2.0 grid world continental regions (0=Water, 1=Europe, 2=North Asia, 3=Australasia, 4=Africa, 5=South Asia, 6=South America, 7=North America).  | 25 |  |
| urban_focal_window_size | The focal window size used to calculate urban_proportion. Values are 3 (3x3 pixel window size) or 5 (5x5 pixel window size).  | 25 |  |
| urban_proportion | The percentage proportion of land area within a focal area surrounding each shot that is urban land cover. Urban land cover was derived from the DLR 12 m resolution TanDEM-X Global Urban Footprint Product.  | 25 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI04_A_002_MONTHLY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_A_002_MONTHLY

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
