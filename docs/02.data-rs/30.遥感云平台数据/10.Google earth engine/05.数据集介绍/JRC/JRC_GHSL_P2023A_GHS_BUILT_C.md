---
title: "GHSL：全球住区特征（10 米）2018（P2023A）"
date: 2026-11-03 12:00:00
permalink: /pages/465f5706/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "building"
  - "built"
  - "builtup"
  - "copernicus"
  - "ghsl"
  - "height"
  - "jrc"
  - "landcover"
  - "population"
  - "roads"
  - "sdg"
  - "sentinel2-derived"
---

# GHSL：全球住区特征（10 米）2018（P2023A）

英文原名：GHSL: Global settlement characteristics (10 m) 2018 (P2023A)

## 这是什么数据

这一空间栅格数据集以 10 米分辨率勾画人类住区，并从建成环境的功能与高度相关成分方面描述其内部特征。

有关 GHSL 数据产品的更多信息，见 [GHSL Data Package 2023 报告](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2018 年；分辨率：10 米。
- 时间范围：2018-01-01 至 2018-12-31

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_characteristics | 住区特征。 | 10 |  |

## 能拿来做什么

- 城市扩张与建成区变化分析
- 人口暴露与灾害风险评估
- 可持续发展目标（SDG 11）监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_C');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_C`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_C

## 许可与引用

- 许可：proprietary
- 关键词：building, built, builtup, copernicus, ghsl, height, jrc, landcover, population, roads, sdg, sentinel2-derived, settlement, urban
- DOI：10.2905/3c60ddf6-0586-4190-854b-f6aa0edc2a30

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Degree of Urbanization 1975-2030 (P2023A) [deprecated]](/pages/a1a2ee0c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
