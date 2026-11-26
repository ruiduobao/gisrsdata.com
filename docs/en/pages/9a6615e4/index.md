---
title: "MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid"
date: 2026-11-03 12:00:00
---

# MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid

Original name: MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid

## What this dataset is

The MOD13A3 V6.1 product data is provided monthly at 1 kilometer (km)
spatial resolution. In generating this monthly product, the algorithm
ingests all the MOD13A2 products that overlap the month and employs a
weighted temporal average.

Vegetation indices are used for global monitoring of vegetation conditions
and are used in products displaying land cover and land cover changes. These
data may be used as input for modeling global biogeochemical and hydrologic
processes as well as global and regional climate. Additional applications
include characterizing land surface biophysical properties and processes,
such as primary production and land cover conversion.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 1 km.
- Time range: 2000-02-01 至 2026-09-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | Monthly NDVI average | 1000 |  |
| EVI | Monthly EVI average | 1000 |  |
| DetailedQA | VI Quality indicators | 1000 |  |
| sur_refl_b01 | Surface reflectance band 1 (red) | 1000 | 620-670nm |
| sur_refl_b02 | Surface reflectance band 2 (near-infrared) | 1000 | 841-876nm |
| sur_refl_b03 | Surface reflectance band 3 (blue) | 1000 | 459-479nm |
| sur_refl_b07 | Surface reflectance band 7 (mid-infrared) | 1000 | 2105-2155nm |
| ViewZenith | View zenith angle of VI Pixel | 1000 |  |
| SolarZenith | Sun zenith angle of VI pixel | 1000 |  |
| RelativeAzimuth | Relative azimuth angle of VI pixel | 1000 |  |
| SummaryQA | Quality reliability of VI pixel | 1000 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD13A3');
```

- Earth Engine ID: `MODIS/061/MOD13A3`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13A3
* [User's Guide](https://lpdaac.usgs.gov/documents/621/MOD13_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD13A3)

## License and citation

- License: proprietary
- Keywords: evi, global, modis, monthly, nasa, ndvi, terra, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13A3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid](/pages/7cbb8070/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
