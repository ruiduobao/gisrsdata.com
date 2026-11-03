---
title: "TUBerlin/BigEarthNet/v1"
date: 2026-11-03 12:00:00
permalink: /pages/06aa410b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chip"
  - "copernicus"
  - "corine-derived"
  - "label"
  - "landuse-landcover"
  - "ml"
  - "sentinel"
  - "tile"
---

# TUBerlin/BigEarthNet/v1

## 数据集简介

BigEarthNet is a new large-scale Sentinel-2 benchmark archive, consisting of
590,326 Sentinel-2 image patches.  To construct BigEarthNet, 125 Sentinel-2
tiles were acquired between June 2017 and May 2018 over the 10 countries
(Austria, Belgium, Finland, Ireland, Kosovo, Lithuania, Luxembourg,
Portugal, Serbia, Switzerland) of Europe. All the tiles were atmospherically
corrected by the Sentinel-2 Level 2A product generation and formatting tool
(sen2cor).  Then, they were divided into 590,326 non-overlapping image
patches. Each image patch was annotated by the multiple land-cover classes
(i.e., multi-labels) that were provided from the CORINE Land Cover database
of the year 2018 (CLC 2018).

## 基本信息

- 数据集编号（Earth Engine ID）：`TUBerlin/BigEarthNet/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：BigEarthNet、Google Earth Engine
- 时间范围：2017-06-01 至 2018-05-31
- 许可：proprietary
- 关键词：chip, copernicus, corine-derived, label, landuse-landcover, ml, sentinel, tile

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Aerosols | 60 | 443.9nm (S2A) / 442.3nm (S2B) |
| B2 | Blue | 10 | 496.6nm (S2A) / 492.1nm (S2B) |
| B3 | Green | 10 | 560nm (S2A) / 559nm (S2B) |
| B4 | Red | 10 | 664.5nm (S2A) / 665nm (S2B) |
| B5 | Red Edge 1 | 20 | 703.9nm (S2A) / 703.8nm (S2B) |
| B6 | Red Edge 2 | 20 | 740.2nm (S2A) / 739.1nm (S2B) |
| B7 | Red Edge 3 | 20 | 782.5nm (S2A) / 779.7nm (S2B) |
| B8 | NIR | 10 | 835.1nm (S2A) / 833nm (S2B) |
| B9 | Water vapor | 60 | 945nm (S2A) / 943.2nm (S2B) |
| B10 | Cirrus | 60 | 1373.5nm (S2A) / 1376.9nm (S2B) |
| B11 | SWIR 1 | 20 | 1613.7nm (S2A) / 1610.4nm (S2B) |
| B12 | SWIR 2 | 20 | 2202.4nm (S2A) / 2185.7nm (S2B) |
| B8A | Red Edge 4 | 20 | 864.8nm (S2A) / 864nm (S2B) |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TUBerlin/BigEarthNet/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TUBerlin_BigEarthNet_v1
- 数据引用：G. Sumbul, M. Charfuelan, B. Demir, V. Markl, BigEarthNet: A Large-Scale
Benchmark Archive for Remote Sensing Image Understanding, IEEE International
Conference on Geoscience and Remote Sensing Symposium, pp. 5901-5904,
Yokohama, Japan, 2019.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
