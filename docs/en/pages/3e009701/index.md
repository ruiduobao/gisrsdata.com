---
title: "VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid"
date: 2026-11-03 12:00:00
---

# VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid

Original name: VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid

## What this dataset is

The Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible
Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance
Distribution Function (BRDF) and Albedo Model Parameters (VNP43IA1) Version
1 product provides kernel weights (parameters) at 500 resolution. The
VNP43IA1 product is produced daily using 16 days of VIIRS data, temporally
weighted to the ninth day, which is reflected in the file name. The VNP43IA1
product provides three spectrally dependent kernel weights, also known as
model parameters: isotropic (fiso), volumetric (fvol), and geometric (fgeo),
which can be used to model anisotropic effects of the Earth's surface.
All VNP43 data products are designed to promote the continuity of
NASA's Moderate Resolution Imaging Spectroradiometer (MODIS)
BRDF/Albedo data product suite.

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2012 to 2024 (daily); resolution: 500 m.
- Time range: 2012-01-17 至 2024-06-09

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Mandatory_Quality_I1 | BRDF/Albedo mandatory quality for band I1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I2 | BRDF/Albedo mandatory quality for band I2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I3 | BRDF/Albedo mandatory quality for band I3 | 500 |  |
| BRDF_Albedo_Parameters_fiso_I1 | Isotropic parameter for band I1 | 500 |  |
| BRDF_Albedo_Parameters_fvol_I1 | Volumetric parameter for band I1 | 500 |  |
| BRDF_Albedo_Parameters_fgeo_I1 | Geometric parameter for band I1 | 500 |  |
| BRDF_Albedo_Parameters_fiso_I2 | Isotropic parameter for band I2 | 500 |  |
| BRDF_Albedo_Parameters_fvol_I2 | Volumetric parameter for band I2 | 500 |  |
| BRDF_Albedo_Parameters_fgeo_I2 | Geometric parameter for band I2 | 500 |  |
| BRDF_Albedo_Parameters_fiso_I3 | Isotropic parameter for band I3 | 500 |  |
| BRDF_Albedo_Parameters_fvol_I3 | Volumetric parameter for band I3 | 500 |  |
| BRDF_Albedo_Parameters_fgeo_I3 | Geometric parameter for band I3 | 500 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP43IA1');
```

- Earth Engine ID: `NOAA/VIIRS/001/VNP43IA1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP43IA1
* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guide/vnp43ia1-and-vnp43ma1-brdf-albedo-model-parameters)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp43ia1v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: land, nasa, noaa, satellite-imagery, surface, viirs
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP43IA1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid](/en/pages/81521072/)
- [VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km [deprecated]](/en/pages/940b557d/)
- [VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m [deprecated]](/en/pages/59f40ab0/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
