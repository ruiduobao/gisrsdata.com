---
title: "MOD14A1.006: Terra Thermal Anomalies & Fire Daily Global 1km [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD14A1.006: Terra Thermal Anomalies & Fire Daily Global 1km [deprecated]

Original name: MOD14A1.006: Terra Thermal Anomalies & Fire Daily Global 1km [deprecated]

## What this dataset is

The MOD14A1 V6 dataset provides daily fire mask composites
at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
The fire detection strategy is based on absolute detection of a
fire (when the fire strength is sufficient to detect), and on detection
relative to its background (to account for variability of the surface
temperature and reflection by sunlight). The product distinguishes
between fire, no fire and no observation. This information is used
for monitoring the spatial and temporal distribution of fires in
different ecosystems, detecting changes in fire distribution and
identifying new fire frontiers, wild fires, and changes in the
frequency of the fires  or their relative strength.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 1 km.
- Time range: 2000-02-24 至 2023-02-17

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| FireMask | Confidence of fire | 1000 |  |
| MaxFRP | Maximum fire radiative power | 1000 |  |
| sample | Position of fire pixel within scan | 1000 |  |
| QA | Pixel quality indicators | 1000 |  |

## What you can use it for

- Fire monitoring and early warning
- Burned-area assessment
- Fire radiative power analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MOD14A1');
```

- Earth Engine ID: `MODIS/006/MOD14A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD14A1
* [User's Guide](https://lpdaac.usgs.gov/documents/88/MOD14_User_Guide_v6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/87/MOD14_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD14A1)

## License and citation

- License: proprietary
- Keywords: daily, fire, global, mod14a1, modis, nasa, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD14A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated]](/pages/607a2ed5/)
- [MOD14A2.006: Terra Thermal Anomalies & Fire 8-Day Global 1km [deprecated]](/pages/f0c597d2/)
- [MYD14A1.006: Aqua Thermal Anomalies & Fire Daily Global 1km [deprecated]](/pages/488b79dc/)
- [MYD14A2.006: Aqua Thermal Anomalies & Fire 8-Day Global 1km [deprecated]](/pages/6b59dbe5/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
