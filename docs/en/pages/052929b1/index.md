---
title: "TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)"
date: 2026-11-03 12:00:00
---

# TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)

Original name: TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)

## What this dataset is

The TEMPO Level 3 Cloud Product (O2-O2 dimer) provides gridded cloud fraction
and cloud pressure data. These parameters are derived from the O2-O2 absorption
band near 477 nm and are essential for air quality retrievals and atmospheric
monitoring. The data are created by combining and re-gridding Level 2 files
from single East-West scan cycles using an area-weighted methodology.

## Coverage and time range

- Coverage: Coverage: North America (TEMPO field of regard); time span: 2023 to 2026; resolution: 2,226 m.
- Time range: 2023-08-02 至 2026-11-01

## Resolution and specifications

- Spatial resolution: about 2,226 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| weight | Sum of Level 2 pixel overlap areas. Represents the weighting factor for each grid cell, indicating the fraction of the grid cell area with valid data. | 2226 |  |
| relative_azimuth_angle | Relative azimuth angle at pixel center | 2226 |  |
| solar_zenith_angle | Solar zenith angle at pixel center | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle at pixel center | 2226 |  |
| cloud_fraction | Cloud fraction derived from O2-O2 absorption | 2226 |  |
| cloud_pressure | Cloud top pressure derived from O2-O2 absorption | 2226 |  |
| CloudRadianceFraction440 | Cloud radiance fraction at 440 nm | 2226 |  |
| CloudRadianceFraction466 | Cloud radiance fraction at 466 nm | 2226 |  |
| GLER440 | Geometry-dependent Lambertian Equivalent Reflectivity at 440 nm | 2226 |  |
| GLER466 | Geometry-dependent Lambertian Equivalent Reflectivity at 466 nm | 2226 |  |
| surface_pressure | Surface pressure | 2226 |  |

## What you can use it for

- Air quality monitoring
- Trace gas column retrievals
- Atmospheric pollution research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/TEMPO/CLDO4_L3_V4');
```

- Earth Engine ID: `NASA/TEMPO/CLDO4_L3_V4`
- Providers: NASA ASDC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_CLDO4_L3_V4
* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)
* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## License and citation

- License: proprietary
- Keywords: air-quality, cloud, nasa, pollution, satellite-imagery, tempo
- 数据引用：NASA/LARC/SD/ASDC.(2025). TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40e/TEMPO/CLDO4_L3.004](https://doi.org/10.5067/IS-40e/TEMPO/CLDO4_L3.004)

- DOI：10.5067/IS-40e/TEMPO/CLDO4_L3.004

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
