---
title: "美国 EPA 生态区（三级）"
date: 2026-11-03 12:00:00
permalink: /pages/3da07cd6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecoregions"
  - "ecosystems"
  - "epa"
  - "table"
---

# 美国 EPA 生态区（三级）

英文原名：US EPA Ecoregions (Level III)

## 这是什么数据

美国环境保护署（USEPA）提供生态区（Ecoregions）数据集，作为生态系统及其组成部分研究、评估、管理与监测的空间框架。生态区表示生态系统以及环境资源的类型、质量与数量具有总体相似性的区域。这些通用区域对于在负责同一地理区域内不同类型资源的联邦机构、州机构与非政府组织之间组织和实施生态系统管理战略至关重要。

编制这幅地图所采用的方法基于这样一个前提：生态区域可以通过分析生物与非生物现象的格局来识别，包括地质、地貌、植被、气候、土壤、土地利用、野生动物与水文。每个特征的相对重要性因生态区而异。

本数据集包含 USEPA 生态区分类方案，以及环境合作委员会（CEC）的方案。生态区是分级的：IV 级最详细，I 级的分类最宽泛。由于这种层级关系，III 级要素保留了 I 级与 II 级的信息。CEC 将整个北美划分为 I、II、III 级的不同生态区，而 USEPA 仅对美国做了 III 级与 IV 级划分。以「us_」开头的列属于 USEPA 方案，以「na_」开头的列属于 CEC 方案。本数据集的摄入版本仅包含美国本土的要素（即不包括阿拉斯加与夏威夷）。定义生态区所用的方法在 Omernik（1995，2004）、Omernik 等（2000）与 Gallant 等（1989）中有说明。

*由数据提供方计算。

## 覆盖范围与时间

- 覆盖范围：美国本土
- 时间范围：2013-04-16 至 2013-04-17

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| l1_key | STRING | 北美 I 级代码与名称 |
| l2_key | STRING | 北美 II 级代码与名称 |
| l3_key | STRING | 美国 III 级代码与名称 |
| na_l1code | STRING | I 级生态区代码（北美/CEC） |
| na_l1name | STRING | I 级生态区名称（北美/CEC） |
| na_l2code | STRING | II 级生态区代码（北美/CEC） |
| na_l2name | STRING | II 级生态区名称（北美/CEC） |
| na_l3code | STRING | III 级生态区代码（北美/CEC） |
| na_l3name | STRING | III 级生态区名称（北美/CEC） |
| shape_area | DOUBLE | 要素几何在原始格式下的面积 |
| shape_leng | DOUBLE | 要素几何在原始格式下的边长 |
| us_l3code | STRING | III 级生态区代码（美国/USEPA） |
| us_l3name | STRING | III 级生态区名称（美国/USEPA） |

## 能拿来做什么

- 生态系统评估与管理的空间框架
- 按生态区汇总环境资源统计
- 生物多样性与土地管理研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('EPA/Ecoregions/2013/L3');
```

- 数据集编号（Earth Engine ID）：`EPA/Ecoregions/2013/L3`
- 提供方：United States Environmental Protection Agency、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EPA_Ecoregions_2013_L3

## 许可与引用

- 许可：proprietary
- 关键词：ecoregions, ecosystems, epa, table
- 数据引用：Commission for Environmental Cooperation. 1997. Ecological regions
of North America: toward a common perspective. Commission for Environmental
Cooperation, Montreal, Quebec, Canada. 71p. Map (scale 1:12,500,000).
Revised 2006.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [US EPA Ecoregions (Level IV)](/pages/ac6dd98c/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [世界居住区足迹 2015（WSF 2015）](/pages/a545a891/)
- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
