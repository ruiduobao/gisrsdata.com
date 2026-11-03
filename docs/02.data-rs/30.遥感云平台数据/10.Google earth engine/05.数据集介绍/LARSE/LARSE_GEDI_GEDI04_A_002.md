---
title: "GEDI L4A Aboveground Biomass Density, Version 2.1"
date: 2026-11-03 12:00:00
permalink: /pages/d6d5821d/
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

# GEDI L4A Aboveground Biomass Density, Version 2.1

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

Please see [User Guide](https://daac.ornl.gov/GEDI/guides/GEDI_L4A_AGB_Density_V2_1.html)
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

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GEDI04_A_002`
- 数据类型：table_collection
- 提供方：USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、NASA GEDI mission, accessed through the USGS LP DAAC、Google Earth Engine
- 时间范围：2019-04-18 至 2024-11-28
- 许可：proprietary
- 关键词：elevation, forest-biomass, gedi, larse, nasa, tree-cover, usgs

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| agbd | INT | Predicted aboveground biomass density |
| agbd_pi_lower | INT | Lower prediction interval (see "alpha" attribute for the level)  |
| agbd_pi_upper | INT | Upper prediction interval (see "alpha" attribute for the level)  |
| agbd_se | INT | Aboveground biomass density prediction standard error  |
| agbd_t | INT | Model prediction in fit units |
| agbd_t_se | INT | Model prediction standard error in fit units (needed for calculation of custom prediction intervals)  |
| algorithm_run_flag | INT | The L4A algorithm is run if this flag is set to 1. This flag selects data that have sufficient waveform fidelity for AGBD estimation.  |
| beam | INT | Beam identifier |
| channel | INT | Channel identifier |
| degrade_flag | INT | Flag indicating degraded state of pointing and/or positioning information  |
| delta_time | INT | Time since Jan 1 00:00 2018 |
| elev_lowestmode | INT | Elevation of center of lowest mode relative to reference ellipsoid  |
| l2_quality_flag | INT | Flag identifying the most useful L2 data for biomass predictions  |
| l4_quality_flag | INT | Flag simplifying selection of most useful biomass predictions  |
| lat_lowestmode | INT | Latitude of center of lowest mode |
| lon_lowestmode | INT | Longitude of center of lowest mode |
| master_frac | INT | Master time, fractional part. master_int+master_frac is equivalent to /BEAMXXXX/delta_time  |
| master_int | INT | Master time, integer part. Seconds since master_time_epoch. master_int+master_frac is equivalent to /BEAMXXXX/delta_time',  |
| predict_stratum | STRING | Prediction stratum identifier. Character ID of the prediction stratum name for the 1 km cell  |
| predictor_limit_flag | INT | Predictor value is outside the bounds of the training data (0=in bounds; 1=lower bound; 2=upper bound)  |
| response_limit_flag | INT | Prediction value is outside the bounds of the training data (0=in bounds; 1=lower bound; 2=upper bound)  |
| selected_algorithm | INT | Selected algorithm setting group |
| selected_mode | INT | ID of mode selected as lowest non-noise mode |
| selected_mode_flag | INT | Flag indicating status of selected_mode |
| sensitivity | INT | Beam sensitivity. Maximum canopy cover that can be penetrated considering the SNR of the waveform  |
| solar_elevation | INT | Solar elevation angle |
| surface_flag | INT | Indicates elev_lowestmode is within 300m of Digital Elevation Model (DEM) or Mean Sea Surface (MSS) elevation  |
| shot_number | STRING | Shot number, a unique identifier. This field has the format of OOOOOBBRRGNNNNNNNN, where:  * OOOOO: Orbit number * BB: Beam number * RR: Reserved for future use * G: Sub-orbit granule number * NNNNNNNN: Shot index  |
| shot_number_within_beam | INT | Shot number within beam |
| agbd_aN | INT | Above ground biomass density; Geolocation latitude lowestmode  |
| agbd_pi_lower_aN | INT | Above ground biomass density lower prediction interval |
| agbd_pi_upper_aN | INT | Above ground biomass density upper prediction interval |
| agbd_se_aN | INT | Aboveground biomass density prediction standard error  |
| agbd_t_aN | INT | Aboveground biomass density model prediction in transform space  |
| agbd_t_pi_lower_aN | INT | Lower prediction interval in transform space |
| agbd_t_pi_upper_aN | INT | Upper prediction interval in transform space |
| agbd_t_se_aN | INT | Model prediction standard error in fit units |
| algorithm_run_flag_aN | INT | Algorithm run flag-this algorithm is run if this flag is set to 1. This flag selects data that have sufficient waveform fidelity for AGBD estimation  |
| l2_quality_flag_aN | INT | Flag identifying the most useful L2 data for biomass predictions'  |
| l4_quality_flag_aN | INT | Flag simplifying selection of most useful biomass predictions  |
| predictor_limit_flag_aN | INT | Predictor value is outside the bounds of the training data |
| response_limit_flag_aN | INT | Prediction value is outside the bounds of the training data |
| selected_mode_aN | INT | ID of mode selected as lowest non-noise mode |
| selected_mode_flag_aN | INT | Flag indicating status of selected mode |
| elev_lowestmode_aN | INT | Elevation of center of lowest mode relative to the reference ellipsoid  |
| lat_lowestmode_aN | INT | Latitude of center of lowest mode |
| lon_lowestmode_aN | INT | Longitude of center of lowest mode |
| sensitivity_aN | INT | Maximum canopy cover that can be penetrated considering the SNR of the waveform  |
| stale_return_flag | INT | Flag from digitizer indicating the real-time pulse detection algorithm did not detect a return signal above its detection threshold within the entire 10 km search window. The pulse location of the previous shot was used to select the telemetered waveform.  |
| landsat_treecover | INT | Tree cover in the year 2010, defined as canopy closure for all vegetation taller than 5 m in height (Hansen et al., 2013) and encoded as a percentage per output grid cell.  |
| landsat_water_persistence | INT | The percent UMD GLAD Landsat observations with classified surface water between 2018 and 2019. Values >80 usually represent permanent water while values <10 represent permanent land.  |
| leaf_off_doy | INT | GEDI 1 km EASE 2.0 grid leaf-off start day-of-year derived from the NPP VIIRS Global Land Surface Phenology Product.  |
| leaf_off_flag | INT | GEDI 1 km EASE 2.0 grid flag derived from leaf_off_doy, leaf_on_doy, and pft_class, indicating if the observation was recorded during leaf-off conditions in deciduous needleleaf or broadleaf forests and woodlands. 1=leaf-off, 0=leaf-on.  |
| leaf_on_cycle | INT | Flag that indicates the vegetation growing cycle for leaf-on observations. Values are 0=leaf-off conditions, 1=cycle 1, 2=cycle 2.  |
| leaf_on_doy | INT | GEDI 1 km EASE 2.0 grid leaf-on start day- of-year derived from the NPP VIIRS Global Land Surface Phenology product.  |
| pft_class | INT | GEDI 1 km EASE 2.0 grid Plant Functional Type (PFT) derived from the MODIS MCD12Q1v006 product. Values follow the Land Cover Type 5 Classification scheme.  |
| region_class | INT | GEDI 1 km EASE 2.0 grid world continental regions (0=Water, 1=Europe, 2=North Asia, 3=Australasia, 4=Africa, 5=South Asia, 6=South America, 7=North America).  |
| urban_focal_window_size | INT | The focal window size used to calculate urban_proportion. Values are 3 (3x3 pixel window size) or 5 (5x5 pixel window size).  |
| urban_proportion | INT | The percentage proportion of land area within a focal area surrounding each shot that is urban land cover. Urban land cover was derived from the DLR 12 m resolution TanDEM-X Global Urban Footprint Product.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GEDI04_A_002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GEDI04_A_002
- 数据引用：GEDI L4A Footprint Level Aboveground Biomass Density, Version 2.1.
Dubayah, R.O., J. Armston, J.R. Kellner, L. Duncanson, S.P. Healey,
P.L. Patterson, S. Hancock, H. Tang, J. Bruening, M.A. Hofton, J.B. Blair,
and S.B. Luthcke. 2022. ORNL DAAC, Oak Ridge, Tennessee, USA.
[doi:10.3334/ORNLDAAC/2056](https://doi.org/10.3334/ORNLDAAC/2056)

- DOI：10.5067/GEDI/GEDI04_A.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
