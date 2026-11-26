---
title: "MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]

Original name: MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]

## What this dataset is

The MOD13A2 V6 product provides two Vegetation Indices (VI): the Normalized
Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
The NDVI is referred to as the continuity index to the existing National
Oceanic and Atmospheric Administration-Advanced Very High Resolution
Radiometer (NOAA-AVHRR) derived NDVI. The EVI has improved sensitivity over
high biomass regions.

The algorithm for this product chooses the best available
pixel value from all the acquisitions from the 16-day period. The criteria
used are low clouds, low view angle, and the highest NDVI/EVI value.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 1 km.
- Time range: 2000-02-18 至 2023-02-02

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | 16-day NDVI average | 1000 |  |
| EVI | 16-day EVI average | 1000 |  |
| DetailedQA | VI Quality indicators | 1000 |  |
| sur_refl_b01 | Surface reflectance band 1 (red) | 1000 | 620-670nm |
| sur_refl_b02 | Surface reflectance band 2 (near-infrared) | 1000 | 841-876nm |
| sur_refl_b03 | Surface reflectance band 3 (blue) | 1000 | 459-479nm |
| sur_refl_b07 | Surface reflectance band 7 (mid-infrared) | 1000 | 2105-2155nm |
| ViewZenith | View zenith angle of VI Pixel | 1000 |  |
| SolarZenith | Sun zenith angle of VI pixel | 1000 |  |
| RelativeAzimuth | Relative azimuth angle of VI pixel | 1000 |  |
| DayOfYear | Day of year VI pixel | 1000 |  |
| SummaryQA | Quality reliability of VI pixel | 1000 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MOD13A2');
```

- Earth Engine ID: `MODIS/006/MOD13A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD13A2
* [User's Guide](https://lpdaac.usgs.gov/documents/103/MOD13_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD13A2)

## License and citation

- License: proprietary
- Keywords: 16-day, evi, global, mod13a2, modis, nasa, ndvi, terra, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)
- [MOD15A2H.006: Terra Leaf Area Index/FPAR 8-Day Global 500m [deprecated]](/pages/94591ad1/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
