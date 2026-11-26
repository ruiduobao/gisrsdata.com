---
title: "MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]

Original name: MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]

## What this dataset is

The MCD15A3H V6 level 4, Combined Fraction of Photosynthetically
Active Radiation (FPAR), and Leaf Area Index (LAI) product is a
4-day composite data set with 500 meter pixel size. The algorithm
chooses the \"best\" pixel available from all the acquisitions of
both MODIS sensors located on NASA's Terra and Aqua satellites
from within the 4-day period.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2023; resolution: 500 m.
- Time range: 2002-07-04 至 2023-02-14

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Fpar | FPAR absorbed by the green elements of a vegetation canopy | 500 | 400-700nm |
| Lai | One-sided green leaf area per unit ground area in broadleaf canopies; one-half the total needle surface area per unit ground area in coniferous canopies | 500 |  |
| FparLai_QC | Quality for Lai and Fpar | 500 |  |
| FparExtra_QC | Extra detail quality for LAI and FPAR | 500 |  |
| FparStdDev | Standard deviation of Fpar | 500 |  |
| LaiStdDev | Standard deviation for Lai | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MCD15A3H');
```

- Earth Engine ID: `MODIS/006/MCD15A3H`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD15A3H
* [User's Guide](https://lpdaac.usgs.gov/documents/624/MOD15_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/90/MOD15_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD15A3H)

## License and citation

- License: proprietary
- Keywords: 4-day, fpar, global, lai, mcd115a3h, modis, nasa, plant-productivity, usgs, vegetation
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD15A3H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)
- [MOD15A2H.006: Terra Leaf Area Index/FPAR 8-Day Global 500m [deprecated]](/pages/94591ad1/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
