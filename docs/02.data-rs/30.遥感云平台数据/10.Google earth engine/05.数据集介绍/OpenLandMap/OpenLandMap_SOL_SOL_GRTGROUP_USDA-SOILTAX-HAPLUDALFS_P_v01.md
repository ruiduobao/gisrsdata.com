---
title: "OpenLandMap Predicted Hapludalfs Probability"
date: 2026-11-03 12:00:00
permalink: /pages/ef97e31c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "argillic"
  - "envirometrix"
  - "hapludalfs"
  - "opengeohub"
  - "openlandmap"
  - "soil"
---

# OpenLandMap Predicted Hapludalfs Probability

## 数据集简介

Predicted USDA soil great groups at 250 m (probabilities).

Distribution of the USDA soil great groups based on machine learning predictions
from global compilation of soil profiles. To learn more about soil great groups
please refer to the [Illustrated Guide to Soil Taxonomy - NRCS - USDA](https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download/?cid=stelprdb1247203.pdf).

* Processing steps are described in detail [here](https://gitlab.com/openlandmap/global-layers/tree/master/soil)
* Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：1950-01-01 至 2018-01-01
- 空间分辨率：250 米
- 许可：CC-BY-SA-4.0
- 关键词：argillic, envirometrix, hapludalfs, opengeohub, openlandmap, soil

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| grtgroup | Predicted Hapludalfs probability | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P_v01
- 数据引用：Tomislav Hengl, & Travis Nauman. (2018). Predicted USDA soil great groups at 250 m (probabilities) (Version v01) [Data set]. Zenodo.
[10.5281/zenodo.1476844](https://doi.org/10.5281/zenodo.1476844)

- DOI：10.5281/zenodo.1476844

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
