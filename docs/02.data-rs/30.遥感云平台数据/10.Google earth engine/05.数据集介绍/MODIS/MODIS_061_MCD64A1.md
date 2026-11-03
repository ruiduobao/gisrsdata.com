---
title: "MCD64A1.061 MODIS Burned Area Monthly Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/11a394bf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "burn"
  - "change-detection"
  - "fire"
  - "geophysical"
  - "global"
  - "mcd64a1"
  - "modis"
  - "monthly"
  - "nasa"
  - "usgs"
---

# MCD64A1.061 MODIS Burned Area Monthly Global 500m

## 数据集简介

The Terra and Aqua combined MCD64A1 Version 6.1 Burned Area data product is
a monthly, global gridded 500m product containing per-pixel burned-area
and quality information. The MCD64A1 burned-area mapping approach employs
500m MODIS Surface Reflectance imagery coupled with 1km MODIS active
fire observations. The algorithm uses a burn sensitive vegetation index (VI)
to create dynamic thresholds that are applied to the composite data.
The VI is derived from MODIS shortwave infrared atmospherically corrected
surface reflectance bands 5 and 7 with a measure of temporal texture.
The algorithm identifies the date of burn for the 500m grid cells within
each individual MODIS tile. The date is encoded in a single data layer as
the ordinal day of the calendar year on which the burn occurred, with
values assigned to unburned land pixels and additional special values
reserved for missing data and water grid cells.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1006/MCD64_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/115/MCD64_ATBD_V6.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD64A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD64A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-11-01 至 2026-08-01
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：burn, change-detection, fire, geophysical, global, mcd64a1, modis, monthly, nasa, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BurnDate | Burn day of year. Possible values: 0 (unburned), 1-366 (approximate Julian day of burning). | 500 |  |
| Uncertainty | Estimated uncertainty in burn day | 500 |  |
| QA | Quality assurance indicators | 500 |  |
| FirstDay | First day of the year of reliable change detection | 500 |  |
| LastDay | Last day of the year of reliable change detection | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD64A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD64A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD64A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
