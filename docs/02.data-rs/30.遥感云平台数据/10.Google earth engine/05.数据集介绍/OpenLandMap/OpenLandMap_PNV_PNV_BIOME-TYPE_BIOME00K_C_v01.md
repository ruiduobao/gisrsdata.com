---
title: "OpenLandMap Potential Distribution of Biomes"
date: 2026-11-03 12:00:00
permalink: /pages/edd16381/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biome"
  - "ecosystems"
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "potential"
---

# OpenLandMap Potential Distribution of Biomes

## 数据集简介

Potential Natural Vegetation biomes global predictions of classes
(based on predictions using the BIOMES 6000 dataset's 'current biomes' category.)

Potential Natural Vegetation (PNV) is the vegetation cover in equilibrium with climate
that would exist at a given location non-impacted by human activities. PNV is useful for raising
public awareness about land degradation and for estimating land potential.
This dataset contains results of predictions of
- (1) global distribution of biomes based on the BIOME 6000 data set (8057 modern pollen-based site reconstructions),
- (2) distribution of forest tree species in Europe based on detailed occurrence records (1,546,435 ground observations), and
- (3) global monthly Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) values (30,301 randomly-sampled points).

To report an issue or artifact in data, please use [this link](https://github.com/envirometrix/PNVmaps/issues).

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：2001-01-01 至 2002-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-SA-4.0
- 关键词：biome, ecosystems, envirometrix, opengeohub, openlandmap, potential

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| biome_type | Potential distribution of biomes | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_PNV_PNV_BIOME-TYPE_BIOME00K_C_v01
- 数据引用：Hengl T, Walsh MG, Sanderman J, Wheeler I, Harrison SP, Prentice IC. (2018) Global Mapping of Potential Natural Vegetation: An Assessment of Machine Learning Algorithms for Estimating Land Potential. PeerJ Preprints.
[10.7287/peerj.preprints.26811v1](https://doi.org/10.7910/DVN/QQHCIK)

- DOI：10.7910/DVN/QQHCIK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
