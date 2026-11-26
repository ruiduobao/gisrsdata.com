---
title: "MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]

Original name: MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]

## What this dataset is

The MCD43A4 V6 Nadir Bidirectional Reflectance Distribution
Function Adjusted Reflectance (NBAR) product provides 500 meter
reflectance data of the MODIS \"land\" bands 1-7. These are adjusted
using a bidirectional reflectance distribution function to model
the values as if they were collected from a nadir view.  The data
are produced daily based on a 16-day retrieval period, with the
image's date occurring on the 9th day. This product combines data
from both the Terra and Aqua spacecrafts, choosing the best representative
pixel from the 16-day period.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 500 m.
- Time range: 2000-02-24 至 2023-02-10

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Nadir_Reflectance_Band1 | NBAR at local solar noon for band 1 | 500 | 620-670nm |
| Nadir_Reflectance_Band2 | NBAR at local solar noon for band 2 | 500 | 841-876nm |
| Nadir_Reflectance_Band3 | NBAR at local solar noon for band 3 | 500 | 459-479nm |
| Nadir_Reflectance_Band4 | NBAR at local solar noon for band 4 | 500 | 545-565nm |
| Nadir_Reflectance_Band5 | NBAR at local solar noon for band 5 | 500 | 1230-1250nm |
| Nadir_Reflectance_Band6 | NBAR at local solar noon for band 6 | 500 | 1628-1652nm |
| Nadir_Reflectance_Band7 | NBAR at local solar noon for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | BRDF albedo mandatory quality for band 1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | BRDF albedo mandatory quality for band 2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | BRDF albedo mandatory quality for band 3 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | BRDF albedo mandatory quality for band 4 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | BRDF albedo mandatory quality for band 5 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | BRDF albedo mandatory quality for band 6 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | BRDF albedo mandatory quality for band 7 | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A4');
```

- Earth Engine ID: `MODIS/006/MCD43A4`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A4)

## License and citation

- License: proprietary
- Keywords: albedo, brdf, daily, global, modis, nasa, reflectance, satellite-imagery, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A4.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]](/pages/95ebbb0d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
