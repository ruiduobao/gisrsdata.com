---
title: "MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m [deprecated]

Original name: MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m [deprecated]

## What this dataset is

The MCD12Q1 V6 product provides global land cover types at yearly intervals
(2001-2016) derived from six different classification schemes. It is derived
using supervised classifications of MODIS Terra and Aqua reflectance data.
The supervised classifications then undergo additional post-processing that
incorporate prior knowledge and ancillary information to further refine
specific classes.

## Coverage and time range

- Coverage: Coverage: global; time span: 2001 to 2020; resolution: 500 m.
- Time range: 2001-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LC_Type1 | Land Cover Type 1: Annual International Geosphere-Biosphere Programme (IGBP) classification | 500 |  |
| LC_Type2 | Land Cover Type 2: Annual University of Maryland (UMD) classification | 500 |  |
| LC_Type3 | Land Cover Type 3: Annual Leaf Area Index (LAI) classification | 500 |  |
| LC_Type4 | Land Cover Type 4: Annual BIOME-Biogeochemical Cycles (BGC) classification | 500 |  |
| LC_Type5 | Land Cover Type 5: Annual Plant Functional Types classification | 500 |  |
| LC_Prop1_Assessment | LCCS1 land cover layer confidence | 500 |  |
| LC_Prop2_Assessment | LCCS2 land use layer confidence | 500 |  |
| LC_Prop3_Assessment | LCCS3 surface hydrology layer confidence | 500 |  |
| LC_Prop1 | FAO-Land Cover Classification System 1 (LCCS1) land cover layer | 500 |  |
| LC_Prop2 | FAO-LCCS2 land use layer | 500 |  |
| LC_Prop3 | FAO-LCCS3 surface hydrology layer | 500 |  |
| QC | Product quality flags | 500 |  |
| LW | Binary land (class 2) / water (class 1) mask derived from MOD44W | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MCD12Q1');
```

- Earth Engine ID: `MODIS/006/MCD12Q1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD12Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/101/MCD12_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD12Q1)

## License and citation

- License: proprietary
- Keywords: landcover, landuse-landcover, modis, nasa, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD12Q2.006 Land Cover Dynamics Yearly Global 500m [deprecated]](/pages/d42cf828/)
- [MOD44B.006 Terra Vegetation Continuous Fields Yearly Global 250m [deprecated]](/pages/86fc5ddc/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [Dynamic World V1](/en/pages/a78539ca/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
