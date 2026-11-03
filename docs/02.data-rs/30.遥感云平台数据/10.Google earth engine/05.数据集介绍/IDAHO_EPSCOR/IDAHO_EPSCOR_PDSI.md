---
title: "PDSI: University of Idaho Palmer Drought Severity Index [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/14a8e5bc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "conus"
  - "crop"
  - "drought"
  - "geophysical"
  - "merced"
  - "palmer"
  - "pdsi"
  - "precipitation"
  - "water-vapor"
---

# PDSI: University of Idaho Palmer Drought Severity Index [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Palmer Drought Severity Index dataset provides
high spatial resolution (~4-km) thrice-monthly estimates of this
widely used measure of integrated water supply and demand anomalies
across the contiguous United States from 1979-present. The PDSI
is calculated using precipitation and potential evapotranspiration
derived from the gridded meteorological dataset of Abatzoglou (2013).

Potential evapotranspiration is computed using the Penman-Montieth
equation for a reference grass surface. Available soil water holding
capacity in the top 2.5m of the soil was derived from the STATSGO
soils database and used in the computations. Whereas PDSI has typically
been computed on monthly timescales, we compute these data three-times
a month to provide more timely updates. Due to the spin-up of PDSI
calculations, data for the first year of record should be used
sparingly.

This dataset contains provisional products that are replaced with
updated versions when the complete source data become available.
Products can be distinguished by the value of the 'status' property.
At first, assets are ingested with status='early'. After several
days, they are replaced by assets with status='provisional'.
After about 2 months, they are replaced by the final assets with
status='permanent'.

## 基本信息

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/PDSI`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of California Merced、Google Earth Engine
- 时间范围：1979-03-01 至 2020-06-20
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：climate, conus, crop, drought, geophysical, merced, palmer, pdsi, precipitation, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pdsi | Possible values: 4.0 or more (extremely wet), 3.0 to 3.99 (very wet), 2.0 to 2.99 (moderately wet), 1.0 to 1.99 (slightly wet), 0.5 to 0.99 (incipient wet spell), 0.49 to -0.49 (near normal), -0.5 to -0.99 (incipient dry spell), -1.0 to -1.99 (mild drought), -2.0 to -2.99 (moderate drought), -3.0 to -3.99 (severe drought), or -4.0 or less (extreme drought).  | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/PDSI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_PDSI
- 数据引用：Abatzoglou J.T., R. Barbero, J.W. Wolf, Z. Holden (2014), Tracking
interannual streamflow variability with drought indices in the
Pacific Northwest, US, Journal of Hydrometeorology, 15, 1900-1912.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
