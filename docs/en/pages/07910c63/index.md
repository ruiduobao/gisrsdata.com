---
title: "MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m"
date: 2026-11-03 12:00:00
---

# MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m

Original name: MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m

## What this dataset is

The MOD15A2H V6.1 MODIS combined Leaf Area Index (LAI) and
Fraction of Photosynthetically Active Radiation (FPAR) product is an 8-day
composite dataset at 500m resolution. The algorithm chooses the \"best\" pixel
available from all the acquisitions of the Terra sensor from within the 8-day period.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 500 m.
- Time range: 2000-02-18 至 2026-10-16

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Fpar_500m | Fraction of Photosynthetically Active Radiation | 500 |  |
| Lai_500m | Leaf Area Index | 500 |  |
| FparLai_QC | Quality for LAI and FPAR | 500 |  |
| FparExtra_QC | Extra detail Quality for LAI and FPAR | 500 |  |
| FparStdDev_500m | Standard deviation of FPAR | 500 |  |
| LaiStdDev_500m | Standard deviation of LAI | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD15A2H');
```

- Earth Engine ID: `MODIS/061/MOD15A2H`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD15A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/624/MOD15_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/90/MOD15_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD15A2H)

## License and citation

- License: proprietary
- Keywords: 8-day, fpar, global, lai, mod15a2h, modis, nasa, plant-productivity, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD15A2H.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
