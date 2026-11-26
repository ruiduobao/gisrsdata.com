---
title: "TEMPO gridded NO2 tropospheric and stratospheric columns V03 [deprecated]"
date: 2026-11-03 12:00:00
---

# TEMPO gridded NO2 tropospheric and stratospheric columns V03 [deprecated]

Original name: TEMPO gridded NO2 tropospheric and stratospheric columns V03 [deprecated]

## What this dataset is

Nitrogen dioxide Level 3 files provide trace gas information on a
regular grid covering the TEMPO field of regard for nominal TEMPO
observations. Level 3 files are derived by combining information from
all Level 2 files constituting a TEMPO East-West scan cycle. The
rasters contain information on tropospheric, stratospheric and total
nitrogen dioxide vertical columns, ancillary data used in air mass
factor and stratospheric/tropospheric separation calculations, and
retrieval quality flags. The re-gridding algorithm uses an area-weighted
approach.

* A version of this dataset with QA filters applied is available as [NASA/TEMPO/NO2_L3_QA](NASA_TEMPO_NO2_L3_QA)
* [General Documentation](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)

## Coverage and time range

- Coverage: Coverage: North America (TEMPO field of regard); time span: 2023 to 2025; resolution: 2,226 m.
- Time range: 2023-08-01 至 2025-09-16

## Resolution and specifications

- Spatial resolution: about 2,226 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| weight | Sum of Level 2 pixel overlap areas. Represents the weighting factor for each grid cell, indicating the fraction of the grid cell area with valid data. | 2226 |  |
| vertical_column_troposphere | NO2 troposphere vertical column | 2226 |  |
| vertical_column_troposphere_uncertainty | NO2 troposphere vertical column uncertainty | 2226 |  |
| vertical_column_stratosphere | NO2 stratosphere vertical column uncertainty | 2226 |  |
| main_data_quality_flag | Main data quality flag. Provides an overall assessment of the data quality | 2226 |  |
| num_vertical_column_troposphere_samples | Number of Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column. | 2226 |  |
| min_vertical_column_troposphere_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column. | 2226 |  |
| max_vertical_column_troposphere_sample | Largest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column. | 2226 |  |
| num_vertical_column_troposphere_uncertainty_samples | Number of Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column uncertainty. | 2226 |  |
| min_vertical_column_troposphere_uncertainty_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column uncertainty. | 2226 |  |
| max_vertical_column_troposphere_uncertainty_sample | Largest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column uncertainty. | 2226 |  |
| num_vertical_column_stratosphere_samples | Number of Level 2 pixel values contributing to Level 3 grid for the stratospheric vertical column. | 2226 |  |
| min_vertical_column_stratosphere_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the stratospheric vertical column. | 2226 |  |
| max_vertical_column_stratosphere_sample | Largest Level 2 pixel values contributing to Level 3 grid for the stratospheric vertical column. | 2226 |  |
| num_vertical_column_total_samples | Number of Level 2 pixel values contributing to Level 3 grid for the total vertical column. | 2226 |  |
| min_vertical_column_total_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the total vertical column. | 2226 |  |
| max_vertical_column_total_sample | Largest Level 2 pixel values contributing to Level 3 grid for the total vertical column. | 2226 |  |
| solar_zenith_angle | Solar zenith angle at pixel center | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle at pixel center | 2226 |  |
| relative_azimuth_angle | Relative azimuth angle at pixel center | 2226 |  |
| vertical_column_total | NO2 vertical column | 2226 |  |
| vertical_column_total_uncertainty | NO2 vertical column uncertainty | 2226 |  |
| surface_pressure | Surface pressure | 2226 |  |
| terrain_height | Terrain height | 2226 |  |
| snow_ice_fraction | Fraction of pixel area covered by snow and/or ice | 2226 |  |
| fitted_slant_column | NO2 fitted slant column | 2226 |  |
| fitted_slant_column_uncertainty | NO2 fitted slant column uncertainty | 2226 |  |
| albedo | Surface albedo | 2226 |  |
| tropopause_pressure | Tropopause pressure | 2226 |  |
| amf_total | NO2 air mass factor | 2226 |  |
| eff_cloud_fraction | Effective cloud fraction | 2226 |  |
| amf_cloud_fraction | Cloud radiance fraction for AMF calculation | 2226 |  |
| amf_cloud_pressure | Cloud pressure for AMF calculation | 2226 |  |
| amf_troposphere | NO2 troposphere air mass factor | 2226 |  |
| amf_stratosphere | NO2 stratosphere air mass factor | 2226 |  |

## What you can use it for

- Air quality monitoring
- Trace gas column retrievals
- Atmospheric pollution research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/TEMPO/NO2_L3');
```

- Earth Engine ID: `NASA/TEMPO/NO2_L3`
- Providers: NASA ASDC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_NO2_L3

## License and citation

- License: proprietary
- Keywords: air-quality, nasa, nitrogen-dioxide, pollution, satellite-imagery, tempo, tropomi
- 数据引用：NASA/LARC/SD/ASDC. (n.d.). TEMPO gridded NO2 tropospheric and
stratospheric columns V03 (PROVISIONAL) [Data set]. NASA Langley
Atmospheric Science Data Center DAAC.
Retrieved from https://doi.org/10.5067/IS-40e/TEMPO/NO2_L3.003


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
