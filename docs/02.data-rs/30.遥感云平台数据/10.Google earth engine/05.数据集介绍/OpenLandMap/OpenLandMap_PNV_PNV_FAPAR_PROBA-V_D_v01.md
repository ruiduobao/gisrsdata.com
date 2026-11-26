---
title: "OpenLandMap 潜在 FAPAR 逐月"
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

# OpenLandMap 潜在 FAPAR 逐月

英文原名：OpenLandMap Potential FAPAR Monthly

## 这是什么数据

预测的潜在自然植被 FAPAR 逐月中位数（基于 PROBA-V FAPAR 2014–2017）。[说明](https://gitlab.com/openlandmap/global-layers/#potential-natural-vegetation)。

要在 Earth Engine 之外访问与可视化地图，使用 [此页面](https://opengeohub.org/about-openlandmap)。

如果您发现 LandGIS 地图中的错误、伪影或不一致，或有问题，请使用以下渠道：

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2001 年至 2002 年（预测参考期）；分辨率：1,000 米。
- 时间范围：2001-01-01 至 2002-01-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| jan | 1 月潜在 FAPAR 逐月 | 1000 |  |
| feb | 2 月潜在 FAPAR 逐月 | 1000 |  |
| mar | 3 月潜在 FAPAR 逐月 | 1000 |  |
| apr | 4 月潜在 FAPAR 逐月 | 1000 |  |
| may | 5 月潜在 FAPAR 逐月 | 1000 |  |
| jun | 6 月潜在 FAPAR 逐月 | 1000 |  |
| jul | 7 月潜在 FAPAR 逐月 | 1000 |  |
| aug | 8 月潜在 FAPAR 逐月 | 1000 |  |
| sep | 9 月潜在 FAPAR 逐月 | 1000 |  |
| oct | 10 月潜在 FAPAR 逐月 | 1000 |  |
| nov | 11 月潜在 FAPAR 逐月 | 1000 |  |
| dec | 12 月潜在 FAPAR 逐月 | 1000 |  |
| annual | 年度潜在 FAPAR 逐月（原文作「Anuual」，系 Annual 之误） | 1000 |  |
| annualdiff | 年度差潜在 FAPAR 逐月 | 1000 |  |

## 能拿来做什么

- 作为全球气候与土地系统分析的基础图层。
- 为生态、水文与土壤建模提供环境变量。
- 与其他全球格网产品做对比与融合。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01');
```

- 数据集编号（Earth Engine ID）：`OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01`
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_PNV_PNV_FAPAR_PROBA-V_D_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, fapar, monthly, opengeohub, openlandmap, plant-productivity, potential
- 数据引用：Hengl T, Walsh MG, Sanderman J, Wheeler I, Harrison SP, Prentice IC. (2018) Global Mapping of Potential Natural Vegetation: An Assessment of Machine Learning Algorithms for Estimating Land Potential. PeerJ Preprints.
[10.7287/peerj.preprints.26811v5](https://doi.org/10.7910/DVN/QQHCIK)

- DOI：10.7910/DVN/QQHCIK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenLandMap Potential Distribution of Biomes](/pages/edd16381/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
