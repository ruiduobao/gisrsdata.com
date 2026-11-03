---
title: "HUC08: USGS Watershed Boundary Dataset of Subbasins"
date: 2026-11-03 12:00:00
permalink: /pages/92e609f8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "hydrology"
  - "surface-ground-water"
  - "table"
  - "usgs"
  - "water"
  - "watershed"
  - "wbd"
---

# HUC08: USGS Watershed Boundary Dataset of Subbasins

## 数据集简介

The Watershed Boundary Dataset (WBD) is a comprehensive
aggregated collection of hydrologic unit (HU) data consistent
with the national criteria for delineation and resolution. It
defines the areal extent of surface water drainage to a point
except in coastal or lake front areas where there could be multiple
outlets as stated by the [Federal Standards and Procedures for
the National Watershed Boundary Dataset](https://pubs.usgs.gov/tm/11/a3).
Watershed boundaries are determined solely upon science-based
hydrologic principles, not favoring any administrative boundaries
or special projects, nor particular program or agency. The intent
of defining HUs for the WBD is to establish a baseline drainage
boundary framework, accounting for all land and surface areas.

The HUs are delineated at 1:24,000-scale in the conterminous
United States, 1:25,000-scale in Hawaii and the Caribbean, and
1:63,360-scale in Alaska, meeting the National Map Accuracy Standards
(NMAS). WBDs are represented as polygons that define the boundary
of the HUs. The HUs are given a Hydrologic Unit Code (HUC) that
ranges from 2 digits to 12 digits. These codes describe where
the unit is in the country and the level of the unit. The number
of digits in a HUC is related to 6 levels of detail for the WBD:
the lower level polygons cover larger areas than higher level
ones. The higher the level, the more digits to the HUC, since
previous levels are nested in it.

The WBD polygons attributes
include HUCs, size (in the form of acres and square kilometers),
name, downstream HUC, type of watershed, non-contributing areas,
and flow modifications. WBD line attributes contain the highest
level of hydrologic unit for each boundary, line source information
and flow modifications.

| Name         | Level | Digit | HU Code |
|--------------|-------|-------|---------|
| Region       | 1     | 2     | 2       |
| Subregion    | 2     | 4     | 4       |
| Basin        | 3     | 6     | 6       |
| Subbasin     | 4     | 8     | 8       |
| Watershed    | 5     | 10    | 10      |
| Subwatershed | 6     | 12    | 12      |

*Calculated by the data provider.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/WBD/2017/HUC08`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Geological Survey、Google Earth Engine
- 时间范围：2017-04-22 至 2017-04-23
- 许可：proprietary
- 关键词：hydrology, surface-ground-water, table, usgs, water, watershed, wbd

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| areaacres | STRING | Size of the feature in acres |
| areasqkm | STRING | Size of the feature in square kilometers |
| gnis_id | STRING | A unique number to relate the name of the hydrologic unit to the GNIS names database (always empty) |
| loaddate | STRING | Date when the data were loaded into the official provider database |
| metasource | STRING | A unique identifier that links the element to the metadata tables |
| name | STRING | GNIS name for the geographic area in which the hydrologic unit is located |
| shape_area | STRING | Area of feature in internal units squared |
| shape_leng | STRING | Length of feature in internal units |
| sourcedata | STRING | A space provided for a brief description of the type of base data used to update or change the current WBD (always empty)  |
| sourcefeat | STRING | Identifies the parent of the feature if the feature is the result of a split or merge (always empty) |
| sourceorig | STRING | Description of the agency that created the base data used to improve the WBD (always empty) |
| states | STRING | Identifies the State(s) or outlying areas that the hydrologic unit falls within or touches |
| tnmid | STRING | A unique 40-character field that identifies each element in the database exclusively |
| huc8 | STRING | Unique hydrologic unit code |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC08');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_WBD_2017_HUC08
- 数据引用：Coordinated effort between the United States Department of Agriculture-Natural
Resources Conservation Service (USDA-NRCS), the United States Geological
Survey (USGS), and the Environmental Protection Agency (EPA). The
Watershed Boundary Dataset (WBD) was created from a variety of
sources from each state and aggregated into a standard national
layer for use in strategic planning and accountability. Watershed
Boundary Dataset for HUC# [Online WWW]. Available URL: (https://datagateway.nrcs.usda.gov)
[Accessed 22/04/2017].


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
