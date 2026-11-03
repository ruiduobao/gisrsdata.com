---
title: "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 2 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/df79d207/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "eea"
  - "esa"
  - "eu"
  - "landcover"
  - "landuse-landcover"
  - "proba"
  - "probav"
  - "vito"
---

# Copernicus Global Land Cover Layers: CGLS-LC100 Collection 2 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Copernicus Global Land Service (CGLS) is earmarked as a component of
the Land service to operate a multi-purpose service component that provides
a series of bio-geophysical products on the status and evolution of land
surface at global scale.

The Dynamic Land Cover map at 100 m resolution (CGLS-LC100) is a new product
in the portfolio of the CGLS and delivers a global land cover map at 100 m
spatial resolution. The CGLS Land Cover product provides a primary land
cover scheme. Next to these discrete classes, the product also includes
continuous field layers for all basic land cover classes that provide
proportional estimates for vegetation/ground cover for the land cover types.
This continuous classification scheme may depict areas of heterogeneous
land cover better than the standard classification scheme and, as such,
can be tailored for application use (e.g. forest monitoring, crop monitoring,
biodiversity and conservation, monitoring environment and security in Africa,
climate modelling, etc.).

This Land Cover map is provided for the 2015 reference year over
the entire Globe, derived from the PROBA-V 100 m time-series, a database
of high quality land cover training sites and several ancillary datasets,
reaching an accuracy of 80 % at Level1.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/Landcover/100m/Proba-V/Global`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2015-01-01 至 2015-01-01
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：copernicus, eea, esa, eu, landcover, landuse-landcover, proba, probav, vito

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| discrete_classification | Land cover classification | 100 |  |
| discrete_classification-proba | Quality indicator (classification probability) of the discrete classification | 100 |  |
| forest_type | Forest type for all pixels with tree percentage vegetation cover bigger than 1 % | 100 |  |
| bare-coverfraction | Percent vegetation cover for bare-sparse-vegetation land cover class | 100 |  |
| crops-coverfraction | Percent vegetation cover for cropland land cover class | 100 |  |
| grass-coverfraction | Percent vegetation cover for herbaceous vegetation land cover class | 100 |  |
| moss-coverfraction | Percent vegetation cover for moss and lichen land cover class | 100 |  |
| shrub-coverfraction | Percent vegetation cover for shrubland land cover class | 100 |  |
| tree-coverfraction | Percent vegetation cover for forest land cover class | 100 |  |
| snow-coverfraction | Percent ground cover for snow and ice land cover class | 100 |  |
| urban-coverfraction | Percent ground cover for built-up land cover class | 100 |  |
| water-permanent-coverfraction | Percent ground cover for permanent water land cover class | 100 |  |
| water-seasonal-coverfraction | Percent ground cover for seasonal water land cover class | 100 |  |
| data-density-indicator | Data density indicator for algorithm input data | 100 |  |
| bare-coverfraction-stddev | Quality indicator (std. dev.) of the bare-sparse-vegetation regression | 100 |  |
| crops-coverfraction-stddev | Quality indicator (std. dev.) of the cropland regression | 100 |  |
| grass-coverfraction-stddev | Quality indicator (std. dev.) of the herbaceous vegetation regression | 100 |  |
| moss-coverfraction-stddev | Quality indicator (std. dev.) of the moss and lichen regression | 100 |  |
| shrub-coverfraction-stddev | Quality indicator (std. dev.) of the shrubland regression | 100 |  |
| tree-coverfraction-stddev | Quality indicator (std. dev.) of the forest regression | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/Landcover/100m/Proba-V/Global');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V_Global
- 数据引用：Buchhorn, M. ; Smets, B. ; Bertels, L. ; Lesiv, M. ; Tsendbazar, N. - E. ; Herold, M. ;
Fritz, S. Copernicus Global Land Service: Land Cover 100m: epoch 2015: Globe. Dataset of the
global component of the Copernicus Land Monitoring Service 2019.
[doi:10.5281/zenodo.3243509](https://doi.org/10.5281/zenodo.3243509)

- DOI：10.5281/zenodo.3243509

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
