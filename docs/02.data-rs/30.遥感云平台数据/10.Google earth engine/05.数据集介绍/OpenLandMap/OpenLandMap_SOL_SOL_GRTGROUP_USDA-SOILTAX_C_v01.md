---
title: "OpenLandMap USDA 土壤分类大土类"
date: 2026-11-03 12:00:00
permalink: /pages/cea3aca8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "soil"
  - "taxonomy"
  - "usda"
---

# OpenLandMap USDA 土壤分类大土类

英文原名：OpenLandMap USDA Soil Taxonomy Great Groups

## 这是什么数据

250 米预测的 USDA 土壤大土类概率。

USDA 土壤大土类的分布，基于全球土壤剖面汇编的机器学习预测。了解土壤大土类请参阅 [土壤分类图解指南——NRCS——USDA](https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download/?cid=stelprdb1247203.pdf)。

* 处理步骤在 [此处](https://gitlab.com/openlandmap/global-layers/tree/master/soil) 详细说明 * 不包括南极洲。

要在 Earth Engine 之外访问与可视化地图，使用 [此页面](https://opengeohub.org/about-openlandmap)。

如果您发现 LandGIS 地图中的错误、伪影或不一致，或有问题，请使用以下渠道：

## 覆盖范围与时间

- 覆盖范围：空间：全球（不含南极洲）；时间：1950 年至 2018 年；分辨率：250 米。
- 时间范围：1950-01-01 至 2018-01-01

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| grtgroup | USDA 土壤分类大土类 | 250 |  |

## 能拿来做什么

- 作为全球气候与土地系统分析的基础图层。
- 为生态、水文与土壤建模提供环境变量。
- 与其他全球格网产品做对比与融合。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX_C/v01');
```

- 数据集编号（Earth Engine ID）：`OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX_C/v01`
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_GRTGROUP_USDA-SOILTAX_C_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, opengeohub, openlandmap, soil, taxonomy, usda
- 数据引用：Tomislav Hengl, & Travis Nauman. (2018). Predicted USDA soil great groups at
250 m (probabilities) (Version v01) [Data set]. Zenodo.
[10.5281/zenodo.1476844](https://doi.org/10.5281/zenodo.1476844)

- DOI：10.5281/zenodo.1476844

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenLandMap Clay Content](/pages/f45c0586/)
- [OpenLandMap Predicted Hapludalfs Probability](/pages/ef97e31c/)
- [OpenLandMap Sand Content](/pages/9cc6623a/)
- [OpenLandMap Soil Bulk Density](/pages/df36abab/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
