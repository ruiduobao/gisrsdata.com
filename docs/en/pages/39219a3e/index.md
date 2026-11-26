---
title: "MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m"
date: 2026-11-03 12:00:00
---

# MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m

Original name: MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m

## What this dataset is

The MYD17A3HGF V6.1 product provides information about annual Gross and Net
Primary Productivity (GPP and NPP) at 500m pixel resolution. Annual NPP is
derived from the sum of all 8-day Net Photosynthesis(PSN) products
(MYD17A2H) from the given year.  The PSN value is the difference of the
Gross Primary Productivity (GPP) and the Maintenance Respiration (MR)
(GPP-MR).

## Coverage and time range

- Coverage: Coverage: global; time span: 2001 to 2025; resolution: 500 m.
- Time range: 2001-01-01 至 2025-01-01

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Gpp | Gross primary productivity | 500 |  |
| Npp | Net primary productivity | 500 |  |
| Npp_QC | Quality control percentage | 500 |  |

## What you can use it for

- Primary productivity and carbon cycle research
- Ecosystem modeling
- Vegetation productivity monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MYD17A3HGF');
```

- Earth Engine ID: `MODIS/061/MYD17A3HGF`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD17A3HGF

## License and citation

- License: proprietary
- Keywords: aqua, global, gpp, nasa, npp, photosynthesis, plant-productivity, productivity, psn, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD17A3HGF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
