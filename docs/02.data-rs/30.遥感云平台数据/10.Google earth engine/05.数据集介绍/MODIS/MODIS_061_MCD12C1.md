---
title: "MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG"
date: 2026-11-03 12:00:00
permalink: /pages/3c641846/
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

# MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG

## 数据集简介

The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer
(MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data
product provides a spatially aggregated and reprojected version of the tiled
MCD12Q1 Version 6.1 data product. Maps of the International
Geosphere-Biosphere Programme (IGBP), University of Maryland (UMD), and Leaf
Area Index (LAI) classification schemes are provided at yearly intervals at
0.05 degree (5,600 meter) spatial resolution for the entire globe from 2001
to 2022. Additionally, sub-pixel proportions of each land cover class in
each 0.05 degree pixel is provided along with the aggregated quality
assessment information for each of the three land classification schemes.

Provided in each MCD12C1 Version 6.1 Hierarchical Data Format 4 (HDF4) file
are layers for Majority Land Cover Type 1-3, Majority Land Cover Type 1-3
Assessment, and Land Cover Type 1-3 Percent for each class.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1409/MCD12_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD12C1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2001-01-01 至 2025-01-01
- 空间分辨率：5600 米
- 许可：proprietary
- 关键词：landcover, landuse-landcover, modis, nasa, usgs, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Majority_Land_Cover_Type_1 | Majority Land Cover Type 1: Most likely IGBP class for each 0.05 degree pixel | 5600 |  |
| Majority_Land_Cover_Type_1_Assessment | Majority Land Cover Type 1 Assessment: Majority IGBP class confidence | 5600 |  |
| Land_Cover_Type_1_Percent_Class_0 | Percent cover of IGBP class 0 (Water Bodies) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_1 | Percent cover of IGBP class 1 (Evergreen Needleleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_2 | Percent cover of IGBP class 2 (Evergreen Broadleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_3 | Percent cover of IGBP class 3 (Deciduous Needleleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_4 | Percent cover of IGBP class 4 (Deciduous Broadleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_5 | Percent cover of IGBP class 5 (Mixed Forests) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_6 | Percent cover of IGBP class 6 (Closed Shrublands) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_7 | Percent cover of IGBP class 7 (Open Shrublands) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_8 | Percent cover of IGBP class 8 (Woody Savannas) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_9 | Percent cover of IGBP class 9 (Savannas) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_10 | Percent cover of IGBP class 10 (Grasslands) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_11 | Percent cover of IGBP class 11 (Permanent Wetlands) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_12 | Percent cover of IGBP class 12 (Croplands) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_13 | Percent cover of IGBP class 13 (Urban and Built-up Lands) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_14 | Percent cover of IGBP class 14 (Cropland/Natural Vegetation Mosaics) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_15 | Percent cover of IGBP class 15 (Permanent Snow and Ice) at each pixel | 5600 |  |
| Land_Cover_Type_1_Percent_Class_16 | Percent cover of IGBP class 16 (Barren) at each pixel | 5600 |  |
| Majority_Land_Cover_Type_2 | Majority Land Cover Type 2: Most likely UMD class for each 0.05 degree pixel | 5600 |  |
| Majority_Land_Cover_Type_2_Assessment | Majority Land Cover Type 2 Assessment: Majority UMD class confidence | 5600 |  |
| Land_Cover_Type_2_Percent_Class_0 | Percent cover of UMD class 0 (Water Bodies) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_1 | Percent cover of UMD class 1 (Evergreen Needleleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_2 | Percent cover of UMD class 2 (Evergreen Broadleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_3 | Percent cover of UMD class 3 (Deciduous Needleleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_4 | Percent cover of UMD class 4 (Deciduous Broadleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_5 | Percent cover of UMD class 5 (Mixed Forests) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_6 | Percent cover of UMD class 6 (Closed Shrublands) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_7 | Percent cover of UMD class 7 (Open Shrublands) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_8 | Percent cover of UMD class 8 (Woody Savannas) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_9 | Percent cover of UMD class 9 (Savannas) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_10 | Percent cover of UMD class 10 (Grasslands) at each pixel | 5600 |  |
| Land_Cover_Type_2_Percent_Class_11 | Percent cover of UMD class 11 (Croplands) at each pixel. (Note that "Croplands" has value 12 in Majority_Land_Cover_Type_2 to match IGBP.) | 5600 |  |
| Land_Cover_Type_2_Percent_Class_12 | Percent cover of UMD class 12 (Urban and Built-up Lands) at each pixel. (Note that "Urban and Built-up Lands" has value 13 in Majority_Land_Cover_Type_2 to match IGBP.) | 5600 |  |
| Land_Cover_Type_2_Percent_Class_13 | Percent cover of UMD class 13 (Barren) at each pixel. (Note that "Barren" has value 15 in Majority_Land_Cover_Type_2.) | 5600 |  |
| Majority_Land_Cover_Type_3 | Majority Land Cover Type 3: Most likely LAI class for each 0.05 degree pixel | 5600 |  |
| Majority_Land_Cover_Type_3_Assessment | Majority Land Cover Type 3 Assessment: Majority LAI class confidence | 5600 |  |
| Land_Cover_Type_3_Percent_Class_0 | Percent cover of LAI class 0 (Water Bodies) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_1 | Percent cover of LAI class 1 (Grasslands) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_2 | Percent cover of LAI class 2 (Shrublands) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_3 | Percent cover of LAI class 3 (Broadleaf Croplands) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_4 | Percent cover of LAI class 4 (Savannas) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_5 | Percent cover of LAI class 5 (Evergreen Broadleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_6 | Percent cover of LAI class 6 (Deciduous Broadleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_7 | Percent cover of LAI class 7 (Evergreen Needleleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_8 | Percent cover of LAI class 8 (Deciduous Needleleaf Forests) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_9 | Percent cover of LAI class 9 (Unvegetated) at each pixel | 5600 |  |
| Land_Cover_Type_3_Percent_Class_10 | Percent cover of LAI class 10 (Urban and Built-up Lands) at each pixel | 5600 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD12C1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12C1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12C1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
