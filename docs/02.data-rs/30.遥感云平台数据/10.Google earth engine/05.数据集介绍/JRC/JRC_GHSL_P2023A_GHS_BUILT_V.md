---
title: "GHSL: Global building volume 1975-2030 (P2023A)"
date: 2026-11-03 12:00:00
permalink: /pages/a37f30e2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "building"
  - "built-environment"
  - "copernicus"
  - "dem"
  - "ghsl"
  - "jrc"
  - "population"
  - "sdg"
  - "sentinel2-derived"
  - "srtm"
  - "urban"
---

# GHSL: Global building volume 1975-2030 (P2023A)

## 数据集简介

This raster dataset depicts the global distribution of building volume,
expressed in cubic metres per 100 m grid cell. The dataset measures the
total building volume and the building volume allocated to grid cells of
predominant non-residential (NRES) use. Estimates are based on the [built-up
surface](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S)
and [building height](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_H)
products.

More information about the GHSL data products can be found in the [GHSL Data
Package 2023 report](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_V`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：1975-01-01 至 2030-12-31
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：alos, building, built-environment, copernicus, dem, ghsl, jrc, population, sdg, sentinel2-derived, srtm, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_volume_total | Total building volume per grid cell | 100 |  |
| built_volume_nres | Non-residential building volume per grid cell | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_V');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_V
- DOI：10.2905/AB2F107A-03CD-47A3-85E5-139D8EC63283

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
