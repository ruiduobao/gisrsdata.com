---
title: "SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture"
date: 2026-11-03 12:00:00
permalink: /pages/abac2346/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "drought"
  - "nasa"
  - "smap"
  - "soil"
  - "soil-moisture"
  - "surface"
  - "weather"
---

# SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture

## 数据集简介

The SMAP Level-4 (L4) Soil Moisture product includes surface soil moisture
(0-5 cm vertical average), root-zone soil moisture (0-100 cm vertical
average), and additional research products (not validated), including
surface meteorological forcing variables, soil temperature,
evapotranspiration, and net radiation.
This dataset, formally known as the
SMAP L4 Global 3-hourly 9 km EASE-Grid Surface and Root Zone Soil Moisture
Geophysical Data (SPL4SMGP), is considered the primary product of interest
for most users of the SMAP Level-4 (L4) soil moisture data.

SMAP L4 provides uninterrupted soil moisture data.  During outages of the
SMAP instrument, SMAP L4 soil moisture is based on land model simulations
alone, without the concomitant assimilation of SMAP brightness temperature
observations.  Significant SMAP instrument outages occurred between 19 June
and 23 July 2019 and between 6 August and 20 September 2022.

SMAP L-band brightness temperature data from descending and ascending
half-orbit satellite passes (approximately 6:00 a.m. and 6:00 p.m. local
solar time, respectively) are assimilated into a land surface model that is
gridded using an Earth-fixed, global cylindrical 9 km Equal-Area Scalable
Earth Grid, Version 2.0 (EASE-Grid 2.0) projection.

The SPL4SMGP product includes a series of 3-hourly time-averaged geophysical
data fields from the assimilation system. SPL4SMGP data are transformed to
[geographic coordinates using GDAL libraries](https://github.com/google/earthengine-catalog/blob/main/pipelines/smap_convert_l4.py)
before the data are ingested into Google Earth Engine.

See the [SMAP L4 Soil Moisture User Guide](https://nsidc.org/sites/default/files/documents/user-guide/multi_spl4smau-v007-userguide.pdf)
and references therein for additional documentation and algorithm details.

See
[basic](https://developers.google.com/earth-engine/tutorials/community/smap-soil-moisture)
and
[advanced](https://developers.google.com/earth-engine/tutorials/community/anomalies-analysis-smo-and-pre)
tutorials to learn how to use SMAP data in Earth Engine.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/SMAP/SPL4SMGP/008`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google and NSIDC、Google Earth Engine
- 时间范围：2015-03-31 至 2026-10-31
- 空间分辨率：11000 米
- 许可：proprietary
- 关键词：drought, nasa, smap, soil, soil-moisture, surface, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sm_surface | Top layer soil moisture (0-5 cm) | 11000 |  |
| sm_rootzone | Root zone soil moisture (0-100 cm) | 11000 |  |
| sm_profile | Total profile soil moisture (0 cm to model bedrock depth). | 11000 |  |
| sm_surface_wetness | Top layer soil wetness (0-5 cm; wetness units). Soil wetness units (dimensionless) vary between 0 and 1,         indicating relative saturation between completely dry conditions and         completely saturated conditions, respectively. | 11000 |  |
| sm_rootzone_wetness | Root zone soil wetness (0-100 cm; wetness units). Soil wetness units (dimensionless) vary between 0 and 1,         indicating relative saturation between completely dry conditions and         completely saturated conditions, respectively. | 11000 |  |
| sm_profile_wetness | Total profile soil wetness (0 cm to model bedrock depth; wetness units). Soil wetness units (dimensionless) vary between 0 and 1,         indicating relative saturation between completely dry conditions and         completely saturated conditions, respectively. | 11000 |  |
| surface_temp | Mean land surface temperature (including snow-covered land area). Excluding areas of open water and permanent ice | 11000 |  |
| soil_temp_layer1 | Soil temperature in layer 1 of soil heat diffusion model | 11000 |  |
| soil_temp_layer2 | Soil temperature in layer 2 of soil heat diffusion model | 11000 |  |
| soil_temp_layer3 | Soil temperature in layer 3 of soil heat diffusion model | 11000 |  |
| soil_temp_layer4 | Soil temperature in layer 4 of soil heat diffusion model | 11000 |  |
| soil_temp_layer5 | Soil temperature in layer 5 of soil heat diffusion model | 11000 |  |
| soil_temp_layer6 | Soil temperature in layer 6 of soil heat diffusion model | 11000 |  |
| snow_mass | Average snow mass (or snow water equivalent) over land           fraction of grid cell | 11000 |  |
| snow_depth | Snow depth within snow-covered land fraction of grid cell | 11000 |  |
| land_evapotranspiration_flux | Evapotranspiration from land | 11000 |  |
| overland_runoff_flux | Overland (surface) runoff (including throughflow) | 11000 |  |
| baseflow_flux | Baseflow | 11000 |  |
| snow_melt_flux | Snowmelt | 11000 |  |
| soil_water_infiltration_flux | Soil water infiltration rate | 11000 |  |
| land_fraction_saturated | Fractional land area that is saturated and snow-free | 11000 |  |
| land_fraction_unsaturated | Fractional land area that is unsaturated (but non-wilting) and snow-free  | 11000 |  |
| land_fraction_wilting | Fractional land area that is wilting and snow-free | 11000 |  |
| land_fraction_snow_covered | Fractional land area that is snowcovered | 11000 |  |
| heat_flux_sensible | Sensible heat flux from land | 11000 |  |
| heat_flux_latent | Latent heat flux from land | 11000 |  |
| heat_flux_ground | Downward ground heat flux into layer 1 of soil heat diffusion model  | 11000 |  |
| net_downward_shortwave_flux | Net downward shortwave flux over land | 11000 |  |
| net_downward_longwave_flux | Net downward longwave flux over land | 11000 |  |
| radiation_shortwave_downward_flux | Downward shortwave flux incident on the surface | 11000 |  |
| radiation_longwave_absorbed_flux | Absorbed (downward) longwave radiation at the surface | 11000 |  |
| precipitation_total_surface_flux | Total surface precipitation (incl. snow fall) | 11000 |  |
| snowfall_surface_flux | Surface snow fall  | 11000 |  |
| surface_pressure | Mean land surface temperature (incl. snow-covered land area) | 11000 |  |
| height_lowatmmodlay | Center height of lowest atmospheric model layer | 11000 |  |
| temp_lowatmmodlay | Air temperature at center height of lowest atmospheric           model layer | 11000 |  |
| specific_humidity_lowatmmodlay | Air specific humidity at center height of lowest atmospheric model layer  | 11000 |  |
| windspeed_lowatmmodlay | Surface wind speed at center height of lowest atmospheric model layer  | 11000 |  |
| vegetation_greenness_fraction | Vegetation "greenness" or fraction of transpiring leaves averaged over the land area* of the grid cell.  | 11000 |  |
| leaf_area_index | Vegetation leaf area index | 11000 |  |
| sm_rootzone_pctl | Root zone soil moisture (0-100 cm; percentile units) | 11000 |  |
| sm_profile_pctl | Total profile soil moisture (0 cm to model bedrock depth; percentile units)  | 11000 |  |
| depth_to_water_table_from_surface_in_peat | Depth to water table from mean surface elevation in peatlands (positive above ground)  | 11000 |  |
| free_surface_water_on_peat_flux | Change in free surface water storage on peatlands | 11000 |  |
| mwrtm_vegopacity | Microwave radiative transfer model: Vegetation opacity. | 11000 |  |
| sm_surface_anomaly | Experimental. Difference of the 30-day average of 'sm_surface', centered on asset date, relative to the same 30-day period averaged across years from 2015 to present, excluding asset year.  See [this script](https://github.com/google/earthengine-community/blob/master/datasets/smap_anomaly_l4.py) for anomaly computations.  | 11000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/SMAP/SPL4SMGP/008');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_008
- 数据引用：Reichle, R., De Lannoy, G., Koster, R. D., Crow, W. T., Kimball, J. S.,
Liu, Q. & Bechtold, M. (2025). SMAP L4 Global 3-hourly 9 km EASE-Grid
Surface and Root Zone Soil Moisture Geophysical Data. (SPL4SMGP, Version 8).
[Data Set]. Boulder, Colorado USA. NASA National Snow and Ice Data Center
Distributed Active Archive Center.
[doi:10.5067/T5RUATAQREF8](https://doi.org/10.5067/T5RUATAQREF8)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
