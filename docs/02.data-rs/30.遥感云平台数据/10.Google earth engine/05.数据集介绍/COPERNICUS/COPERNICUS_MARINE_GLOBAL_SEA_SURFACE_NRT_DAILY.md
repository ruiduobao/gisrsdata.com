---
title: "全球海表盐度与海表密度近实时逐日分析"
date: 2026-11-03 12:00:00
permalink: /pages/f9c69da9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# 全球海表盐度与海表密度近实时逐日分析

英文原名：Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time

## 这是什么数据

「多源观测全球海洋海表盐度与海表密度」产品提供逐日、全球、无缺口的四级（L4）海表盐度（SSS）与海表密度（SSD）分析，分辨率 1/8 度。它把多颗卫星任务（如 SMOS、SMAP）的观测与原位测量（如 Argo 浮标和温盐深走航仪 TSG）用复杂的多变量最优插值算法融合，生成一条长且一致的时间序列，包含历史（再处理）数据和近实时更新。借助这些气候变量，可以监测全球水循环、研究密度变化驱动的海洋环流变化，并为气候建模和海洋预报系统提供输入。

本数据集是海表盐度与海表密度逐日全球 L4 分析的近实时（NRT）版本。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2023-01-01 至 2026-09-08

## 分辨率与规格

- 空间分辨率：约 14,000 米（约 14 公里（1/8 度））
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sos | 海表盐度 | 14000 |  |
| sos_error | 海表盐度误差 | 14000 |  |
| dos | 海表密度 | 14000 |  |
| dos_error | 海表密度误差 | 14000 |  |
| sea_ice_fraction | 海表冰比例（海冰覆盖比例） | 14000 |  |

## 能拿来做什么

- 用无缺口盐度场监测全球水循环
- 研究密度驱动的海洋环流变化
- 作为气候模型与海洋预报系统的输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/NRT_DAILY');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/NRT_DAILY`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY
* [User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-MOB-PUM-015-013.pdf)
* [Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-MOB-QUID-015-013.pdf)
* [Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, oceans
- 数据引用：Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface
Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is
providing daily Sea Surface Salinity and Sea Surface Density analyses.
[doi:10.48670/moi-00051](https://doi.org/10.48670/moi-00051)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
