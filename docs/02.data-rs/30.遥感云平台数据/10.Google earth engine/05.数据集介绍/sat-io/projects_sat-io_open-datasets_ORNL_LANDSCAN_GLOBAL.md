---
title: "LandScan Population Data Global 1km"
date: 2026-11-03 12:00:00
permalink: /pages/3ec3bff1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "demography"
  - "landscan"
  - "population"
---

# LandScan Population Data Global 1km

## 数据集简介

The LandScan dataset, provided by the Oak Ridge National Laboratory (ORNL), offers a comprehensive and high-resolution global population distribution dataset that serves as a valuable resource for a wide range of applications. Leveraging state-of-the-art spatial modeling techniques and advanced geospatial data sources, LandScan provides detailed information on population counts and density at a 30 arc-second resolution, enabling precise and up-to-date insights into human settlement patterns across the globe. With its accuracy and granularity, LandScan supports diverse fields such as urban planning, disaster response, epidemiology, and environmental research, making it an essential tool for decision-makers and researchers seeking to understand and address various societal and environmental challenges on a global scale.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL`
- 数据类型：影像集合（ImageCollection）
- 提供方：Oak Ridge National Laboratory、Google Earth Engine
- 时间范围：2000-01-01 至 2023-12-31
- 空间分辨率：1000 米
- 许可：CC-BY-4.0
- 关键词：demography, landscan, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | Estimated Population count | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/sat-io/open-datasets/ORNL/LANDSCAN_GLOBAL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_ORNL_LANDSCAN_GLOBAL
- 数据引用：Sims, K., Reith, A., Bright, E., Kaufman, J., Pyle, J., Epting, J., Gonzales, J., Adams, D., Powell, E., Urban, M., & Rose, A. (2023). LandScan Global 2022 [Data set]. Oak Ridge National Laboratory. https://doi.org/10.48690/1529167

- DOI：10.48690/1529167

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
