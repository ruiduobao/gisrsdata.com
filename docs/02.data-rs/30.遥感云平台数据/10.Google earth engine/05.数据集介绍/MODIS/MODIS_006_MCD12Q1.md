---
title: "MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/cee0bc6f/
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

# MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD12Q1 V6 product provides global land cover types at yearly intervals
(2001-2016) derived from six different classification schemes. It is derived
using supervised classifications of MODIS Terra and Aqua reflectance data.
The supervised classifications then undergo additional post-processing that
incorporate prior knowledge and ancillary information to further refine
specific classes.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/101/MCD12_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD12Q1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD12Q1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2001-01-01 至 2020-01-01
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
var dataset = ee.ImageCollection('MODIS/006/MCD12Q1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD12Q1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
