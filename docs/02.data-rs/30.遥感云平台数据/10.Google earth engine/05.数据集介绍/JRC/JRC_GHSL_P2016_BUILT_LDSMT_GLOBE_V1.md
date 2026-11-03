---
title: "GHSL: Global Human Settlement Layers, Built-Up Grid 1975-1990-2000-2015 (P2016) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/5692c91e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "built"
  - "builtup"
  - "jrc"
  - "landsat-derived"
  - "population"
---

# GHSL: Global Human Settlement Layers, Built-Up Grid 1975-1990-2000-2015 (P2016) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The GHSL relies on the design and implementation of new spatial data mining
technologies allowing to automatically process and extract analytics and
knowledge from large amount of heterogeneous data including: global,
fine-scale satellite image data streams, census data, and crowd sources or
volunteered geographic information sources.

These data contain a multitemporal information layer on built-up presence as
derived from Landsat image collections (GLS1975, GLS1990, GLS2000, and
ad-hoc Landsat 8 collection 2013/2014).

The data have been produced by means of [Global Human Settlement Layer
methodology](https://publications.jrc.ec.europa.eu/repository/handle/JRC97705)
in 2015.

For more information visit: [https://ghsl.jrc.ec.europa.eu/ghs_bu.php](https://ghsl.jrc.ec.europa.eu/ghs_bu.php)
and [https://ghsl.jrc.ec.europa.eu/documents/GHSL_data_access.pdf](https://ghsl.jrc.ec.europa.eu/documents/GHSL_data_access.pdf).

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Center, and Directorate-General for
Regional and Urban Policy. The GHSL produces new global spatial information,
evidence-based analytics, and knowledge describing the human presence in
the planet.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1`
- 数据类型：影像（Image）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：1975-01-01 至 2014-12-31
- 空间分辨率：38 米
- 许可：proprietary
- 关键词：built, builtup, jrc, landsat-derived, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built | Multitemporal built-up presence | 38 |  |
| cnfd | Gaps-filled confidence grid on the built-up class aggregated for 2014. 0 = 100% confidence of no built-up, 127 = 50% decision cut off, 255 = 100% conficence of yes built-up  | 38 |  |
| dm | Mosaic of data availability in the different epochs. | 38 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_BUILT_LDSMT_GLOBE_V1
- 数据引用：Pesaresi, Martino; Ehrilch, Daniele; Florczyk, Aneta J.; Freire,
Sergio; Julea, Andreea; Kemper, Thomas; Soille, Pierre; Syrris, Vasileios
(2015): GHS built-up grid, derived from Landsat, multitemporal (1975, 1990,
2000, 2014). European Commission, Joint Research Centre (JRC) [Dataset]
[PID: https://data.europa.eu/89h/jrc-ghsl-ghs_built_ldsmt_globe_r2015b](https://data.europa.eu/89h/jrc-ghsl-ghs_built_ldsmt_globe_r2015b)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
