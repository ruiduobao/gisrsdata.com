---
title: "MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m"
date: 2026-11-03 12:00:00
---

# MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m

Original name: MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m

## What this dataset is

The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer
(MODIS) Land Cover Type (MCD12Q1) Version 6.1 data product provides global
land cover types at yearly intervals. The MCD12Q1 Version 6.1
data product is derived using supervised classifications of MODIS Terra and
Aqua reflectance data. Land cover types are derived from the International
Geosphere-Biosphere Programme (IGBP), University of Maryland (UMD), Leaf
Area Index (LAI), BIOME-Biogeochemical Cycles (BGC), and Plant Functional
Types (PFT) classification schemes. The supervised classifications then
underwent additional post-processing that incorporate prior knowledge and
ancillary information to further refine specific classes. Additional land
cover property assessment layers are provided by the Food and Agriculture
Organization (FAO) Land Cover Classification System (LCCS) for land cover,
land use, and surface hydrology.

Layers for Land Cover Type 1-5, Land Cover Property 1-3, Land Cover Property
Assessment 1-3, Land Cover Quality Control (QC), and a Land Water Mask are
also provided.

## Coverage and time range

- Coverage: Coverage: global; time span: 2001 to 2025; resolution: 500 m.
- Time range: 2001-01-01 至 2025-01-01

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
var dataset = ee.ImageCollection('MODIS/061/MCD12Q1');
```

- Earth Engine ID: `MODIS/061/MCD12Q1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/1409/MCD12_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD12Q1)

## License and citation

- License: proprietary
- Keywords: landcover, landuse-landcover, modis, nasa, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG](/pages/3c641846/)
- [MCD12Q2.006 Land Cover Dynamics Yearly Global 500m](/pages/7a9ce2ed/)
- [MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m](/pages/6ca60ab0/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
