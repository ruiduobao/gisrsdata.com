---
title: "VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid"
date: 2026-11-03 12:00:00
---

# VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid

Original name: VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid

## What this dataset is

The NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) Visible
Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance
Distribution Function (BRDF) and Albedo (BRDF/Albedo) Version 2 product
provides albedo estimates at 500 meter resolution. The VNP43IA3 product is
produced daily using 16 days of VIIRS data and is weighted temporally to the
ninth day, which is reflected in the file name. It provides both directional
hemispherical reflectance (black-sky albedo) at local solar noon and
bihemispherical reflectance (white-sky albedo) for the three VIIRS imagery
bands (I1, I2, and I3). The VNP43 data products are designed to promote the
continuity of NASA's Moderate Resolution Imaging Spectroradiometer (MODIS)
BRDF/Albedo data product suite.

The VNP43 algorithm uses the RossThick/Li-Sparse-Reciprocal (RTLSR)
semi-empirical kernel-driven BRDF model, with the three kernel weights from
VNP43IA1 to reconstruct surface anisotropic effects, correcting the
directional reflectance to a common view geometry (VNP43IA4), while
also computing integrated black-sky albedo (BSA) at local solar noon and
white-sky albedo (WSA) (VNP43IA3). Researchers can use the BRDF model
parameters with a simple polynomial, to obtain black-sky albedo at any solar
illumination angle. Likewise, both the BSA and WSA Science Dataset (SDS)
layers can be used with a simple polynomial, to manually estimate
instantaneous actual albedo (blue-sky albedo). Additional details regarding
the methodology are available in the Algorithm Theoretical Basis Document
(ATBD).

## Coverage and time range

- Coverage: Coverage: global; time span: 2012 to 2026; resolution: 500 m.
- Time range: 2012-01-17 至 2026-10-21

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Mandatory_Quality_I1 | BRDF/Albedo mandatory quality for band I1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I2 | BRDF/Albedo mandatory quality for band I2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I3 | BRDF/Albedo mandatory quality for band I3 | 500 |  |
| Albedo_BSA_I1 | Black-sky albedo for band I1 | 500 |  |
| Albedo_BSA_I2 | Black-sky albedo for band I2 | 500 |  |
| Albedo_BSA_I3 | Black-sky albedo for band I3 | 500 |  |
| Albedo_WSA_I1 | White-sky albedo for band I1 | 500 |  |
| Albedo_WSA_I2 | White-sky albedo for band I2 | 500 |  |
| Albedo_WSA_I3 | White-sky albedo for band I3 | 500 |  |

## What you can use it for

- Land surface parameter monitoring
- Vegetation and land cover research
- VIIRS data applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP43IA3');
```

- Earth Engine ID: `NASA/VIIRS/002/VNP43IA3`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP43IA3
* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guides-c1-and-c2/vnp43ia3-and-vnp43ma3-albedo-products/)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/VIIRS/1/VNP43IA3)

## License and citation

- License: proprietary
- Keywords: albedo, brdf, land, nasa, noaa, satellite-imagery, surface, viirs
- 数据引用：Schaaf, C., Z. Wang, A. Erb, I. Paynter. VIIRS/NPP BRDF/Albedo Albedo Daily L3
Global 500m SIN Grid V002. 2024, distributed by NASA EOSDIS Land Processes
Distributed Active Archive Center,
[10.5067/VIIRS/VNP43IA3.002](https://doi.org/10.5067/VIIRS/VNP43IA3.002).

- DOI：10.5067/VIIRS/VNP43IA3.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km](/en/pages/f3f78834/)
- [VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m](/en/pages/862913cc/)
- [VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid](/en/pages/00b89222/)
- [VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid](/en/pages/86f9040c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
