---
title: "MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km"
date: 2026-11-03 12:00:00
---

# MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km

Original name: MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km

## What this dataset is

The MYD14A2 V6.1 dataset provides 8-day fire mask composites
at 1km resolution. It contains the maximum value of the individual
pixel classes over the compositing period. Along with the fire
mask, an associated quality information layer is also provided.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2026; resolution: 1 km.
- Time range: 2002-07-04 至 2026-10-16

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| FireMask | Confidence of fire | 1000 |  |
| QA | Pixel quality indicators | 1000 |  |

## What you can use it for

- Fire monitoring and early warning
- Burned-area assessment
- Fire radiative power analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MYD14A2');
```

- Earth Engine ID: `MODIS/061/MYD14A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD14A2
* [User's Guide](https://lpdaac.usgs.gov/documents/88/MOD14_User_Guide_v6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/87/MOD14_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD14A2)

## License and citation

- License: proprietary
- Keywords: 8-day, aqua, fire, global, modis, myd14a2, nasa, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD14A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD64A1.061 MODIS Burned Area Monthly Global 500m](/pages/11a394bf/)
- [MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km](/pages/cfc73d5b/)
- [MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km](/pages/f1b7626d/)
- [MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km](/pages/051acfdf/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
