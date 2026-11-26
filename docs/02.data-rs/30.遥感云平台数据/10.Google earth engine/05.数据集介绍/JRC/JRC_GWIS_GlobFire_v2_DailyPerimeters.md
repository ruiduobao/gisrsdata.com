---
title: "GlobFire 每日火事件检测（基于 MCD64A1）"
date: 2026-11-03 12:00:00
permalink: /pages/71c82772/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "area"
  - "burnt"
  - "disaster"
  - "fire"
  - "globfire"
  - "mcd64a1"
  - "modis-derived"
  - "wildfire"
---

# GlobFire 每日火事件检测（基于 MCD64A1）

英文原名：GlobFire Daily Fire Event Detection Based on MCD64A1

## 这是什么数据

基于 MODIS 数据集 MCD64A1 的火边界。数据由一种算法计算，该算法把过火区域斑块之间的时空关系编码为图结构。

每场火都有一个唯一编号标识该事件。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2020 年；类型：矢量/表格数据。
- 时间范围：2001-01-01 至 2021-01-01

## 分辨率与规格

- 数据类型：table_collection，在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| Id | INT | 火的数字编号。 |
| InitialDate | INT | 火的初始日期（自 1970-01-01 起的毫秒数）。 |

## 能拿来做什么

- 野火事件与过火面积分析
- 火灾制度与火行为研究
- 灾害评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GWIS/GlobFire/v2/DailyPerimeters');
```

- 数据集编号（Earth Engine ID）：`JRC/GWIS/GlobFire/v2/DailyPerimeters`
- 提供方：European Commission, Joint Research Centre, Global Wildfire Information System、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GWIS_GlobFire_v2_DailyPerimeters

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：area, burnt, disaster, fire, globfire, mcd64a1, modis-derived, wildfire
- 数据引用：Artés, T., Oom, D., De Rigo, D., Durrant, T. H., Maianti, P., Libertà, G., &
San-Miguel-Ayanz, J. (2019). A global wildfire dataset for the analysis of
fire regimes and fire behaviour. Scientific data, 6(1), 1-11.
[doi:10.1038/s41597-019-0312-2](https://doi.org/10.1038/s41597-019-0312-2)

- DOI：10.1038/s41597-019-0312-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GlobFire Final Fire Event Detection Based on MCD64A1](/pages/16d164e6/)
- [FIRMS：资源管理火灾信息系统](/pages/4ae50fa9/)
- [FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）](/pages/2a6e2416/)
- [FORMA 全球森林观察毁林警报，500 米（已弃用）](/pages/19a66aef/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
