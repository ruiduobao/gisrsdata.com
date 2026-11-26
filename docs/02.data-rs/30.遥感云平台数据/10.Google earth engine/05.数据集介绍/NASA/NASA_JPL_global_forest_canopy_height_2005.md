---
title: "全球森林冠层高度，2005"
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

# 全球森林冠层高度，2005

英文原名：Global Forest Canopy Height, 2005

## 这是什么数据

本数据集表示基于星载激光雷达数据（2005 年，来自地球科学激光测高系统 GLAS）与辅助地理空间数据融合的全球树高。细节见 [Simard 等（2011）](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2011JG001708)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2005 年 5 月 20 日至 6 月 23 日；分辨率：927.67 米。
- 时间范围：2005-05-20 至 2005-06-23

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 1 | 树高。 | 927.67 |  |

## 能拿来做什么

- 森林冠层高度制图
- 森林生物量估算
- 碳储量评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('NASA/JPL/global_forest_canopy_height_2005');
```

- 数据集编号（Earth Engine ID）：`NASA/JPL/global_forest_canopy_height_2005`
- 提供方：NASA/JPL、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005

## 许可与引用

- 许可：proprietary
- 关键词：canopy, forest, forest-biomass, geophysical, glas, jpl, nasa
- 数据引用：Simard, M., Pinto, N., Fisher, J., Baccini, A. 2011. Mapping forest
canopy height globally with spaceborne lidar. Journal of Geophysical
Research. 116: G04021.
[doi:10.1029/2011JG001708](https://doi.org/10.1029/2011JG001708)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
