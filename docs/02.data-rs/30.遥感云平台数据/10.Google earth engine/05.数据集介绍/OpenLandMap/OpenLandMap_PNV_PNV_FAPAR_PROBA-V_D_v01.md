---
title: "OpenLandMap Potential FAPAR Monthly"
date: 2026-11-03 12:00:00
permalink: /pages/284f7bab/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "envirometrix"
  - "fapar"
  - "monthly"
  - "opengeohub"
  - "openlandmap"
  - "plant-productivity"
  - "potential"
---

# OpenLandMap Potential FAPAR Monthly

## 数据集简介

Potential Natural Vegetation FAPAR predicted monthly median (based on PROB-V FAPAR 2014-2017).
[Description](https://gitlab.com/openlandmap/global-layers/#potential-natural-vegetation).

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：2001-01-01 至 2002-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, fapar, monthly, opengeohub, openlandmap, plant-productivity, potential

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| jan | Jan Potential FAPAR monthly | 1000 |  |
| feb | Feb Potential FAPAR monthly | 1000 |  |
| mar | Mar Potential FAPAR monthly | 1000 |  |
| apr | Apr Potential FAPAR monthly | 1000 |  |
| may | May Potential FAPAR monthly | 1000 |  |
| jun | Jun Potential FAPAR monthly | 1000 |  |
| jul | Jul Potential FAPAR monthly | 1000 |  |
| aug | Aug Potential FAPAR monthly | 1000 |  |
| sep | Sep Potential FAPAR monthly | 1000 |  |
| oct | Oct Potential FAPAR monthly | 1000 |  |
| nov | Nov Potential FAPAR monthly | 1000 |  |
| dec | Dec Potential FAPAR monthly | 1000 |  |
| annual | Anuual Potential FAPAR monthly | 1000 |  |
| annualdiff | Annual Difference Potential FAPAR monthly | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_PNV_PNV_FAPAR_PROBA-V_D_v01
- 数据引用：Hengl T, Walsh MG, Sanderman J, Wheeler I, Harrison SP, Prentice IC. (2018) Global Mapping of Potential Natural Vegetation: An Assessment of Machine Learning Algorithms for Estimating Land Potential. PeerJ Preprints.
[10.7287/peerj.preprints.26811v5](https://doi.org/10.7910/DVN/QQHCIK)

- DOI：10.7910/DVN/QQHCIK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
