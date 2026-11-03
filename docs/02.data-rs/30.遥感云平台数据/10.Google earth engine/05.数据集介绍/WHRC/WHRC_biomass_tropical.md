---
title: "WHRC Pantropical National Level Carbon Stock Dataset"
date: 2026-11-03 12:00:00
permalink: /pages/60b6e347/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aboveground"
  - "biomass"
  - "carbon"
  - "forest-biomass"
  - "geophysical"
  - "pantropical"
  - "tropical"
  - "umd"
  - "whrc"
---

# WHRC Pantropical National Level Carbon Stock Dataset

## 数据集简介

A national-level map of above-ground live woody biomass density for
tropical countries at 500m. This dataset was assembled from a combination
of co-located field measurements, LiDAR observations, and imagery recorded
from the Moderate Resolution Imaging Spectroradiometer (MODIS).

## 基本信息

- 数据集编号（Earth Engine ID）：`WHRC/biomass/tropical`
- 数据类型：影像（Image）
- 提供方：WHRC、Google Earth Engine
- 时间范围：2012-01-29 至 2012-01-29
- 空间分辨率：500 米
- 许可：proprietary_non_commercial
- 关键词：aboveground, biomass, carbon, forest-biomass, geophysical, pantropical, tropical, umd, whrc

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Mg | Megagrams of aboveground live woody biomass per Hectare | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WHRC/biomass/tropical');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WHRC_biomass_tropical
- 数据引用：A. Baccini, S J. Goetz, W.S. Walker, N. T. Laporte, M. Sun, D.
Sulla-Menashe, J. Hackler, P.S.A. Beck, R. Dubayah, M.A. Friedl, S. Samanta
and R. A. Houghton. Estimated carbon dioxide emissions from tropical
deforestation improved by carbon-density maps. 2012 Nature Climate Change,
[doi:10.1038/NCLIMATE1354](https://doi.org/10.1038/NCLIMATE1354)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
