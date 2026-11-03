---
title: "OpenLandMap Soil pH in H2O"
date: 2026-11-03 12:00:00
permalink: /pages/781eee94/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "ph"
  - "soil"
---

# OpenLandMap Soil pH in H2O

## 数据集简介

Soil pH in H2O at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution

Processing steps are described in detail [here](https://gitlab.com/openlandmap/global-layers/tree/master/soil).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/SOL/SOL_PH-H2O_USDA-4C1A2A_M/v02`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：1950-01-01 至 2018-01-01
- 空间分辨率：250 米
- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, opengeohub, openlandmap, ph, soil

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b0 | Soil pH in H2O at 0 cm depth | 250 |  |
| b10 | Soil pH in H2O at 10 cm depth | 250 |  |
| b30 | Soil pH in H2O at 30 cm depth | 250 |  |
| b60 | Soil pH in H2O at 60 cm depth | 250 |  |
| b100 | Soil pH in H2O at 100 cm depth | 250 |  |
| b200 | Soil pH in H2O at 200 cm depth | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_PH-H2O_USDA-4C1A2A_M/v02');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_PH-H2O_USDA-4C1A2A_M_v02
- 数据引用：Tomislav Hengl. (2018). Soil pH in H2O at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution (Version v02) [Data set]. Zenodo.
[10.5281/zenodo.1475459](https://doi.org/10.5281/zenodo.1475459)

- DOI：10.5281/zenodo.1475459

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
