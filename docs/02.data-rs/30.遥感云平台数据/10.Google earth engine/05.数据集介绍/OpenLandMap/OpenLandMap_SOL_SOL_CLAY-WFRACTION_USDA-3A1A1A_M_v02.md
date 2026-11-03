---
title: "OpenLandMap Clay Content"
date: 2026-11-03 12:00:00
permalink: /pages/f45c0586/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "clay"
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "soil"
  - "usda"
---

# OpenLandMap Clay Content

## 数据集简介

Clay content in % (kg / kg) at 6 standard depths (0, 10, 30, 60,
100 and 200 cm) at 250 m resolution

Based on machine learning predictions from global compilation of soil profiles and samples. Processing
steps are described in detail [here](https://gitlab.com/openlandmap/global-layers/tree/master/soil).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/SOL/SOL_CLAY-WFRACTION_USDA-3A1A1A_M/v02`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：1950-01-01 至 2018-01-01
- 空间分辨率：250 米
- 许可：CC-BY-SA-4.0
- 关键词：clay, envirometrix, opengeohub, openlandmap, soil, usda

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b0 | Clay content at 0 cm depth | 250 |  |
| b10 | Clay content at 10 cm depth | 250 |  |
| b30 | Clay content at 30 cm depth | 250 |  |
| b60 | Clay content at 60 cm depth | 250 |  |
| b100 | Clay content at 100 cm depth | 250 |  |
| b200 | Clay content at 200 cm depth | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_CLAY-WFRACTION_USDA-3A1A1A_M/v02');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_CLAY-WFRACTION_USDA-3A1A1A_M_v02
- 数据引用：Tomislav Hengl. (2018). Clay content in % (kg / kg) at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution (Version v02) [Data set].
[10.5281/zenodo.1476854](https://doi.org/10.5281/zenodo.1476854)

- DOI：10.5281/zenodo.1476854

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
