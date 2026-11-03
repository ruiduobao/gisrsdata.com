---
title: "SoilGrids250m 2.0 - Volumetric Water Content"
date: 2026-11-03 12:00:00
permalink: /pages/ec88a629/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "soil"
  - "soil-moisture"
  - "water"
---

# SoilGrids250m 2.0 - Volumetric Water Content

## 数据集简介

Volumetric Water Content at 10kPa, 33kPa, and 1500kPa suction in
10^-3 cm^3/cm^3 (0.1 v% or 1 mm/m) at 6 standard depths (0-5cm, 5-15cm,
15-30cm, 30-60cm, 60-100cm, 100-200cm). Predictions were derived using a
digital soil mapping approach based on Quantile Random Forest, drawing on a
global compilation of soil profile data and environmental layers.
This dataset includes predictions for three different suction levels,
providing insights into soil water availability.

The dataset is organized into three main assets: `/wv0010`, `/wv0033`,
and `/wv1500`. Each of these assets contains bands representing soil
properties at different depths and quantiles. The band names follow the
pattern `val_<depth>_<quantile>`, where `depth` represents a soil depth
range (e.g., 0-5cm, 5-15cm, 15-30cm, 30-60cm, 60-100cm, 100-200cm) and
`quantile` represents a statistical measure (e.g., mean, Q0.05, Q0.5,
Q0.95).

The uncertainty band is not yet included. It is possible to calculate
the uncertainty from the ratio between the inter-quantile range
(90% prediction interval width) and the median: (Q0.95-Q0.05)/Q0.50.

Documentation:

* [Scientific Paper](https://www.sciencedirect.com/science/article/pii/S2095633922000636?via%3Dihub)

## 基本信息

- 数据集编号（Earth Engine ID）：`ISRIC/SoilGrids250m/v2_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：ISRIC - World Soil Information、Google Earth Engine
- 时间范围：1905-04-01 至 2016-07-05
- 空间分辨率：250 米
- 许可：CC-BY-4.0
- 关键词：soil, soil-moisture, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| val_0_5cm_mean | Mean Volumetric Water Content (0-5cm depth) | 250 |  |
| val_0_5cm_Q0_05 | Q0.05 Volumetric Water Content (0-5cm depth) | 250 |  |
| val_0_5cm_Q0_5 | Q0.5 Volumetric Water Content (0-5cm depth) | 250 |  |
| val_0_5cm_Q0_95 | Q0.95 Volumetric Water Content (0-5cm depth) | 250 |  |
| val_5_15cm_mean | Mean Volumetric Water Content (5-15cm depth) | 250 |  |
| val_5_15cm_Q0_05 | Q0.05 Volumetric Water Content (5-15cm depth) | 250 |  |
| val_5_15cm_Q0_5 | Q0.5 Volumetric Water Content (5-15cm depth) | 250 |  |
| val_5_15cm_Q0_95 | Q0.95 Volumetric Water Content (5-15cm depth) | 250 |  |
| val_15_30cm_mean | Mean Volumetric Water Content (15-30cm depth) | 250 |  |
| val_15_30cm_Q0_05 | Q0.05 Volumetric Water Content (15-30cm depth) | 250 |  |
| val_15_30cm_Q0_5 | Q0.5 Volumetric Water Content (15-30cm depth) | 250 |  |
| val_15_30cm_Q0_95 | Q0.95 Volumetric Water Content (15-30cm depth) | 250 |  |
| val_30_60cm_mean | Mean Volumetric Water Content (30-60cm depth) | 250 |  |
| val_30_60cm_Q0_05 | Q0.05 Volumetric Water Content (30-60cm depth) | 250 |  |
| val_30_60cm_Q0_5 | Q0.5 Volumetric Water Content (30-60cm depth) | 250 |  |
| val_30_60cm_Q0_95 | Q0.95 Volumetric Water Content (30-60cm depth) | 250 |  |
| val_60_100cm_mean | Mean Volumetric Water Content (60-100cm depth) | 250 |  |
| val_60_100cm_Q0_05 | Q0.05 Volumetric Water Content (60-100cm depth) | 250 |  |
| val_60_100cm_Q0_5 | Q0.5 Volumetric Water Content (60-100cm depth) | 250 |  |
| val_60_100cm_Q0_95 | Q0.95 Volumetric Water Content (60-100cm depth) | 250 |  |
| val_100_200cm_mean | Mean Volumetric Water Content (100-200cm depth) | 250 |  |
| val_100_200cm_Q0_05 | Q0.05 Volumetric Water Content (100-200cm depth) | 250 |  |
| val_100_200cm_Q0_5 | Q0.5 Volumetric Water Content (100-200cm depth) | 250 |  |
| val_100_200cm_Q0_95 | Q0.95 Volumetric Water Content (100-200cm depth) | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ISRIC/SoilGrids250m/v2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ISRIC_SoilGrids250m_v2_0
- 数据引用：Global mapping of volumetric water retention at 100, 330 and 15000 cm
suction using the WoSIS database
Turek M.E., Poggio L., Batjes N.H., Armindo R.A., de Jong van Lier Q.,
de Sousa L., Heuvelink G.B.M. (2023)
International Soil and Water Conservation Research, 11 (2), pp. 225-239.

- DOI：10.1016/j.iswcr.2022.08.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
