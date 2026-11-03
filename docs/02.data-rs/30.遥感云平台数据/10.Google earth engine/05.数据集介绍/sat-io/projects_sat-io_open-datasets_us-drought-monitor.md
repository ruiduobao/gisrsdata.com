---
title: "United States Drought Monitor"
date: 2026-11-03 12:00:00
permalink: /pages/74eaf939/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "drought"
  - "ndmc"
  - "noaa"
  - "precipitation"
  - "usda"
---

# United States Drought Monitor

## 数据集简介

The U.S. Drought Monitor is a map released every Thursday, showing parts of the U.S. that are in drought. The map uses five classifications: abnormally dry (D0), showing areas that may be going into or are coming out of drought, and four levels of drought: moderate (D1), severe (D2), extreme (D3) and exceptional (D4). The Drought Monitor has been a team effort since its inception in 1999, produced jointly by the National Drought Mitigation Center (NDMC) at the University of Nebraska-Lincoln, the National Oceanic and Atmospheric Administration (NOAA), and the U.S. Department of Agriculture (USDA). The NDMC hosts the web site of the drought monitor and the associated data, and provides the map and data to NOAA, USDA and other agencies. It is freely available at droughtmonitor.unl.edu.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/sat-io/open-datasets/us-drought-monitor`
- 数据类型：影像集合（ImageCollection）
- 提供方：National Drought Mitigation Center、Google Earth Engine
- 时间范围：2000-01-04 至 2026-10-20
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：drought, ndmc, noaa, precipitation, usda

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DM | Drought classes | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/sat-io/open-datasets/us-drought-monitor');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_us-drought-monitor
- 数据引用：National Drought Mitigation Center; U.S. Department of Agriculture; National Oceanic and Atmospheric Administration (2023). United States Drought Monitor. University of Nebraska-Lincoln. https://droughtmonitor.unl.edu/. Accessed 2023-09-17


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
