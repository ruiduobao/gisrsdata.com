---
title: "Global Forest Canopy Height, 2005"
date: 2026-11-03 12:00:00
permalink: /pages/eb004afb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "canopy"
  - "forest"
  - "forest-biomass"
  - "geophysical"
  - "glas"
  - "jpl"
  - "nasa"
---

# Global Forest Canopy Height, 2005

## 数据集简介

This dataset represents global tree heights based on a fusion of
spaceborne-lidar data (2005) from the Geoscience Laser Altimeter
System (GLAS) and ancillary geospatial data. See
[Simard et al. (2011)](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2011JG001708)
for details.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/JPL/global_forest_canopy_height_2005`
- 数据类型：影像（Image）
- 提供方：NASA/JPL、Google Earth Engine
- 时间范围：2005-05-20 至 2005-06-23
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：canopy, forest, forest-biomass, geophysical, glas, jpl, nasa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 1 | Tree heights | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('NASA/JPL/global_forest_canopy_height_2005');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005
- 数据引用：Simard, M., Pinto, N., Fisher, J., Baccini, A. 2011. Mapping forest
canopy height globally with spaceborne lidar. Journal of Geophysical
Research. 116: G04021.
[doi:10.1029/2011JG001708](https://doi.org/10.1029/2011JG001708)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
