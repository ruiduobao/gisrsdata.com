---
title: "MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/cf65a02a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cryosphere"
  - "daily"
  - "geophysical"
  - "global"
  - "modis"
  - "nasa"
  - "nsidc"
  - "snow"
  - "terra"
---

# MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m

## 数据集简介

MOD10A2 is a snow cover dataset from the MODIS on the Terra satellite.
The dataset reports the maximum snow cover extent during an eight-day
period at the resolution of 500 m.

An eight-day compositing period was chosen because that is the exact ground
track repeat period of the Terra and Aqua platforms. Snow cover over eight
days is mapped as maximum snow extent in one SDS and as a chronology of
observations in the other SDS. Eight-day periods begin on the first day of
the year and extend into the next year. The product can be produced with
two to eight days of input. There may not always be eight days of input,
because of various reasons, so the user should check the attributes to
determine on what days observations were obtained.

* [General documentation](https://doi.org/10.5067/MODIS/MOD10A2.061)
* [User's Guide]( https://modis-snow-ice.gsfc.nasa.gov/uploads/snow_user_guide_C6.1_final_revised_april.pdf),

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD10A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 时间范围：2000-02-18 至 2026-10-16
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：cryosphere, daily, geophysical, global, modis, nasa, nsidc, snow, terra

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Maximum_Snow_Extent | Maximum snow extent observed over an eight-day period.  | 500 |  |
| Eight_Day_Snow_Cover | Snow chronology bit flags for each day in the eight-day observation period.  | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD10A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD10A2
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MOD10A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
