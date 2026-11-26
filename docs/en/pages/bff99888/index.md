---
title: "MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m"
date: 2026-11-03 12:00:00
---

# MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m

Original name: MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m

## What this dataset is

The MOD17A2HGF Version 6.1 Gross Primary Productivity (GPP) product
is a cumulative 8-day composite of values with 500 meter (m) pixel size
based on the radiation use efficiency concept that can be potentially used
as inputs to data models to calculate terrestrial energy, carbon,
water cycle processes, and biogeochemistry of vegetation.

## Coverage and time range

- Coverage: Coverage: global; time span: 2021 to 2025; resolution: 500 m.
- Time range: 2021-01-01 至 2025-12-27

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Gpp | Gross primary production | 500 |  |
| PsnNet | Net photosynthesis; GPP minus the maintenance respiration (MR) | 500 |  |
| Psn_QC | Quality control bits | 500 |  |

## What you can use it for

- Primary productivity and carbon cycle research
- Ecosystem modeling
- Vegetation productivity monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD17A2HGF');
```

- Earth Engine ID: `MODIS/061/MOD17A2HGF`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD17A2HGF
* [User's Guide](https://lpdaac.usgs.gov/documents/972/MOD17_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/95/MOD17_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD17A2HGF)

## License and citation

- License: proprietary
- Keywords: 8-day, global, gpp, modis, nasa, photosynthesis, plant-productivity, productivity, psn, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A2HGF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
