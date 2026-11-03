---
title: "GLOBathy Global lakes bathymetry dataset"
date: 2026-11-03 12:00:00
permalink: /pages/87664fa3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bathymetry"
  - "hydrology"
  - "lake"
  - "surface-ground-water"
---

# GLOBathy Global lakes bathymetry dataset

## 数据集简介

The GLObal Bathymetric (GLOBathy) dataset, comprising data on over 1.4 million waterbodies globally, has been meticulously developed to harmonize with the widely recognized HydroLAKES dataset. Utilizing a sophisticated Geographic Information System (GIS)-based framework, GLOBathy constructs detailed bathymetric maps by integrating maximum depth estimates and geometric/geophysical attributes sourced from HydroLAKES. Ensuring data accuracy and reliability, GLOBathy undergoes stringent validation procedures involving 1,503 waterbodies and a diverse range of observed data sources. Consequently, GLOBathy stands as a robust and comprehensive dataset for hydrography and aquatic sciences, offering invaluable resources for researchers and professionals in these fields.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/sat-io/open-datasets/GLOBathy/GLOBathy_bathymetry`
- 数据类型：影像（Image）
- 提供方：Bahram Khazaei、Google Earth Engine
- 时间范围：2022-01-26 至 2022-01-26
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：bathymetry, hydrology, lake, surface-ground-water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | Maximum depth | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('projects/sat-io/open-datasets/GLOBathy/GLOBathy_bathymetry');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_sat-io_open-datasets_GLOBathy_GLOBathy_bathymetry
- 数据引用：Khazaei, Bahram; Read, Laura K; Casali, Matthew; Sampson, Kevin M; Yates, David N (2022): GLOBathy Bathymetry Rasters. figshare. Dataset. https://doi.org/10.6084/m9.figshare.c.5243309.v1

- DOI：10.6084/m9.figshare.c.5243309.v1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
