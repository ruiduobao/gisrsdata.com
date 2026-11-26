---
title: "MYD09A1.006 Aqua Surface Reflectance 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MYD09A1.006 Aqua Surface Reflectance 8-Day Global 500m [deprecated]

Original name: MYD09A1.006 Aqua Surface Reflectance 8-Day Global 500m [deprecated]

## What this dataset is

The MYD09A1 V6 product provides an estimate of the surface
spectral reflectance of Aqua MODIS bands 1-7 at 500m resolution
and corrected for atmospheric conditions such as gasses, aerosols,
and Rayleigh scattering. Along with the seven reflectance bands
is a quality layer and four observation bands. For each pixel,
a value is selected from all the acquisitions within the 8-day
composite on the basis of high observation coverage, low view angle,
the absence of clouds or cloud shadow, and aerosol loading.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2023; resolution: 500 m.
- Time range: 2002-07-04 至 2023-02-18

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QA | Surface reflectance 500m band quality control flags | 500 |  |
| SolarZenith | MODIS Solar zenith angle | 500 |  |
| ViewZenith | MODIS view zenith angle | 500 |  |
| RelativeAzimuth | MODIS relative azimuth angle | 500 |  |
| StateQA | Surface reflectance 500m state flags | 500 |  |
| DayOfYear | Julian day of the year for the pixel | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MYD09A1');
```

- Earth Engine ID: `MODIS/006/MYD09A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09A1
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD09A1)

## License and citation

- License: proprietary
- Keywords: 8-day, aqua, global, modis, myd09a1, nasa, satellite-imagery, sr, surface-reflectance, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
