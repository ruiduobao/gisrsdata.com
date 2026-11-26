---
title: "TEMPO gridded ozone total column V03 (PROVISIONAL) [deprecated]"
date: 2026-11-03 12:00:00
---

# TEMPO gridded ozone total column V03 (PROVISIONAL) [deprecated]

Original name: TEMPO gridded ozone total column V03 (PROVISIONAL) [deprecated]

## What this dataset is

The TEMPO gridded ozone total column V03 (PROVISIONAL) is a Level 3 dataset
providing essential total column ozone information on a regular grid across
North America. Generated from the TEMPO instrument on the IS-40e platform,
the data is created by combining and re-gridding Level 2 files from single
East-West scan cycles using an area-weighted methodology. These measurements
are critical for monitoring continental air quality and atmospheric
chemistry and are distributed by the NASA Langley Research Center (LaRC)
ASDC.

This Level 3 product serves as a quality-controlled version of the Level 2
data, pre-filtered to include only the highest-quality retrievals.
Specifically, it includes pixels with a quality flag of 0, solar and
viewing zenith angles (SZA/VZA) below 80°, and an effective cloud fraction
under 0.5.

This dataset includes auxiliary measurements such as effective and radiative
cloud properties, sulfur dioxide index, and terrain pressure. These
parameters support a wide range of research applications while ensuring
that users have access to research-ready data that has already been
screened for common retrieval anomalies and extreme geometries.

## Coverage and time range

- Coverage: Coverage: North America; time span: 2023 to 2025; resolution: 2,226 m.
- Time range: 2023-08-02 至 2025-09-16

## Resolution and specifications

- Spatial resolution: about 2,226 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| relative_azimuth_angle | Relative azimuth angle | 2226 |  |
| solar_zenith_angle | Solar zenith angle | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle | 2226 |  |
| column_amount_o3 | Total column ozone | 2226 |  |
| fc | Effective cloud fraction (mixed LER model) | 2226 |  |
| o3_below_cloud | Ozone concentration below cloud | 2226 |  |
| radiative_cloud_frac | Radiative cloud fraction | 2226 |  |
| so2_index | Sulfur dioxide index | 2226 |  |
| uv_aerosol_index | UV aerosol index | 2226 |  |
| max_column_sample | Maximum column sample | 2226 |  |
| min_column_sample | Minimum column sample | 2226 |  |
| num_column_samples | Number of column samples | 2226 |  |
| cloud_pressure | Cloud pressure | 2226 |  |
| terrain_height | Terrain height | 2226 |  |
| terrain_pressure | Terrain pressure | 2226 |  |
| weight | Sum of Level 2 pixel overlap areas, representing the total spatial coverage of valid data within each grid cell. It serves as the weighting factor for calculating the gridded average, where lower values indicate partial coverage or data removed due to quality filtering. | 2226 |  |

## What you can use it for

- Air quality monitoring
- Trace gas column retrievals
- Atmospheric pollution research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/TEMPO/O3_L3_QA');
```

- Earth Engine ID: `NASA/TEMPO/O3_L3_QA`
- Providers: NASA ASDC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_O3_L3_QA
* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_O3TOT_user_guide_V2.0.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://asdc.larc.nasa.gov/documents/tempo/TEMPO_O3TOT_Algorithm_description_V2.0.pdf)
* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## License and citation

- License: proprietary
- Keywords: air-quality, nasa, ozone, pollution, satellite-imagery, tempo, tropomi
- 数据引用：NASA/LARC/SD/ASDC.(2024). TEMPO gridded ozone total column V03 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40e/TEMPO/O3TOT_L3.003](https://doi.org/10.5067/IS-40e/TEMPO/O3TOT_L3.003)

- DOI：10.5067/IS-40e/TEMPO/O3TOT_L3.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
