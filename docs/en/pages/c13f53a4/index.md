---
title: "MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m"
date: 2026-11-03 12:00:00
---

# MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m

Original name: MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m

## What this dataset is

The MOD13Q1 V6.1 product provides a Vegetation Index (VI)
value at a per pixel basis. There are two primary vegetation layers.
The first is the Normalized Difference Vegetation Index (NDVI)
which is referred to as the continuity index to the existing National
Oceanic and Atmospheric Administration-Advanced Very High Resolution
Radiometer (NOAA-AVHRR) derived NDVI. The second vegetation layer
is the Enhanced Vegetation Index (EVI) that minimizes canopy background
variations and maintains sensitivity over dense vegetation conditions.
The EVI also uses the blue band to remove residual atmosphere contamination
caused by smoke and sub-pixel thin cloud clouds. The MODIS NDVI
and EVI products are computed from atmospherically corrected bi-directional
surface reflectances that have been masked for water, clouds, heavy
aerosols, and cloud shadows.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 250 m.
- Time range: 2000-02-18 至 2026-09-30

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index | 250 |  |
| EVI | Enhanced Vegetation Index | 250 |  |
| DetailedQA | VI quality indicators | 250 |  |
| sur_refl_b01 | Red surface reflectance | 250 | 645nm |
| sur_refl_b02 | NIR surface reflectance | 250 | 858nm |
| sur_refl_b03 | Blue surface reflectance | 250 | 469nm |
| sur_refl_b07 | MIR surface reflectance | 250 | 2130nm/2105 - 2155nm |
| ViewZenith | View zenith angle | 250 |  |
| SolarZenith | Solar zenith angle | 250 |  |
| RelativeAzimuth | Relative azimuth angle | 250 |  |
| DayOfYear | Julian day of year | 250 |  |
| SummaryQA | Quality reliability of VI pixel | 250 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD13Q1');
```

- Earth Engine ID: `MODIS/061/MOD13Q1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/103/MOD13_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD13A2)

## License and citation

- License: proprietary
- Keywords: 16-day, evi, global, mod13q1, modis, nasa, ndvi, terra, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13Q1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
