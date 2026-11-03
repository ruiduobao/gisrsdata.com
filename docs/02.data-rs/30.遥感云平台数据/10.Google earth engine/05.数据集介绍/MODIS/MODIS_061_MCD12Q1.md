---
title: "MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/676a6522/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landcover"
  - "landuse-landcover"
  - "modis"
  - "nasa"
  - "usgs"
  - "yearly"
---

# MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m

## 数据集简介

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

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1409/MCD12_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD12Q1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD12Q1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2001-01-01 至 2025-01-01
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：landcover, landuse-landcover, modis, nasa, usgs, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
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

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD12Q1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
