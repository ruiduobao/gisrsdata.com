---
title: "MOD17A2H.006: Terra Gross Primary Productivity 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD17A2H.006: Terra Gross Primary Productivity 8-Day Global 500m [deprecated]

Original name: MOD17A2H.006: Terra Gross Primary Productivity 8-Day Global 500m [deprecated]

## What this dataset is

The MOD17A2H V6 Gross Primary Productivity (GPP) product
is a cumulative 8-day composite with a 500m pixel size. The product
is based on the radiation-use efficiency concept and can be potentially
used as inputs to data models to calculate terrestrial energy,
carbon, water cycle processes, and biogeochemistry of vegetation.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 500 m.
- Time range: 2000-02-18 至 2023-02-10

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
var dataset = ee.ImageCollection('MODIS/006/MOD17A2H');
```

- Earth Engine ID: `MODIS/006/MOD17A2H`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD17A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/495/MOD17_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/95/MOD17_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD17A2H)

## License and citation

- License: proprietary
- Keywords: 8-day, global, gpp, mod17a2, modis, nasa, photosynthesis, plant-productivity, productivity, psn, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A2H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
