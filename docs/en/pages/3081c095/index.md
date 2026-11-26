---
title: "MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]

Original name: MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]

## What this dataset is

The MCD43A2 V6 Bidirectional Reflectance Distribution
Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter
daily 16-day product. It contains all the quality information
for the corresponding 16-day MCD43A3 Albedo and the MCD43A4 Nadir-BRDF
(NBAR) products.

The MCD43A2 contains individual band quality
and observation information for the MODIS land bands
1-7, along with the overall BRDF/Albedo quality information.

See
[dataset user guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43a2_albedo_product)
for more information.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 500 m.
- Time range: 2000-02-24 至 2023-02-10

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Snow_BRDF_Albedo | Snow-free or snow BRDF/albedo retrieved | 500 |  |
| BRDF_Albedo_Platform | BRDF albedo platform information | 500 |  |
| BRDF_Albedo_LandWaterType | Land/water type | 500 |  |
| BRDF_Albedo_LocalSolarNoon | Solar zenith angle of local solar noon | 500 |  |
| BRDF_Albedo_ValidObs_Band1 | Valid observation for band 1 | 500 |  |
| BRDF_Albedo_ValidObs_Band2 | Valid observation for band 2 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band3 | Valid observation for band 3 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band4 | Valid observation for band 4 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band5 | Valid observation for band 5 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band6 | Valid observation for band 6 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band7 | Valid observation for band 7 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_Band_Quality_Band1 | BRDF inversion information for band 1 | 500 |  |
| BRDF_Albedo_Band_Quality_Band2 | BRDF inversion information for band 2 | 500 |  |
| BRDF_Albedo_Band_Quality_Band3 | BRDF inversion information for band 3 | 500 |  |
| BRDF_Albedo_Band_Quality_Band4 | BRDF inversion information for band 4 | 500 |  |
| BRDF_Albedo_Band_Quality_Band5 | BRDF inversion information for band 5 | 500 |  |
| BRDF_Albedo_Band_Quality_Band6 | BRDF inversion information for band 6 | 500 |  |
| BRDF_Albedo_Band_Quality_Band7 | BRDF inversion information for band 7 | 500 |  |
| BRDF_Albedo_Uncertainty | BRDF inversion information | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A2');
```

- Earth Engine ID: `MODIS/006/MCD43A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A2)

## License and citation

- License: proprietary
- Keywords: albedo, brdf, daily, global, modis, nasa, quality, reflectance, satellite-imagery, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)
- [MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]](/pages/95ebbb0d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
