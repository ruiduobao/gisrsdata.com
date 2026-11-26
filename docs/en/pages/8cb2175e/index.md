---
title: "MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km"
date: 2026-11-03 12:00:00
---

# MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km

Original name: MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km

## What this dataset is

The MYDOCGA V6 ocean reflectance product consists of
1 kilometer reflectance data from Aqua MODIS bands 8-16. The product
is referred to as ocean reflectance, because bands 8-16 are used
primarily to produce ocean products, but this is not an ocean product
as the tiles produced are land tiles.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2023; resolution: 1 km.
- Time range: 2002-07-04 至 2023-02-25

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| num_observations | Number of observations per pixel | 1000 |  |
| sur_refl_b08 | MODIS band 8 surface reflectance | 1000 | 405-420nm |
| sur_refl_b09 | MODIS band 9 surface reflectance | 1000 | 438-448nm |
| sur_refl_b10 | MODIS band 10 surface reflectance | 1000 | 483-493nm |
| sur_refl_b11 | MODIS band 11 surface reflectance | 1000 | 526-536nm |
| sur_refl_b12 | MODIS band 12 surface reflectance | 1000 | 546-556nm |
| sur_refl_b13 | MODIS band 13 surface reflectance | 1000 | 662-672nm |
| sur_refl_b14 | MODIS band 14 surface reflectance | 1000 | 673-683nm |
| sur_refl_b15 | MODIS band 15 surface reflectance | 1000 | 743-753nm |
| sur_refl_b16 | MODIS band 16 surface reflectance | 1000 | 862-877nm |
| QC_b8_15_1km | Band quality for MODIS bands 8-15 | 1000 |  |
| QC_b16_1km | Band quality for MODIS band 16 | 1000 |  |
| orbit_pnt | Pointer to the orbit of each observation | 1000 |  |
| granule_pnt | Pointer to the granule of each observation | 1000 |  |

## What you can use it for

- Ocean reflectance analysis
- Ocean optics research
- Coastal water monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MYDOCGA');
```

- Earth Engine ID: `MODIS/006/MYDOCGA`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYDOCGA
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYDOCGA)

## License and citation

- License: proprietary
- Keywords: aqua, daily, global, modis, mydocga, nasa, oceans, reflectance, satellite-imagery, sr, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYDOCGA.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MODOCGA.006 Terra Ocean Reflectance Daily Global 1km](/pages/c8a03259/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)
- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)](/en/pages/9e90afdc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
