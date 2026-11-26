---
title: "GHSL：全球建成区表面 10 米（P2023A）"
date: 2026-11-03 12:00:00
permalink: /pages/a10e4a06/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "built"
  - "built-environment"
  - "builtup"
  - "copernicus"
  - "ghsl"
  - "jrc"
  - "landcover"
  - "population"
  - "sdg"
  - "sentinel2-derived"
  - "settlement"
  - "urban"
---

# GHSL：全球建成区表面 10 米（P2023A）

英文原名：GHSL: Global built-up surface 10m (P2023A)

## 这是什么数据

这一栅格数据集描绘建成区表面的分布，以每 10 米格网单元的平方米数表示，为从 S2 影像数据观测的 2018 年。

这些数据集测量：a) 建成区表面总量；b) 分配给以非居住（NRES）用途为主的格网单元的建成区表面。

有关 GHSL 主要产品的完整信息，见 [GHSL Data Package 2023 报告](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2018 年；分辨率：10 米。
- 时间范围：2018-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_surface | 每个格网单元的建成区表面。 | 10 |  |
| built_surface_nres | 非居住建成区类别（NRES）。 | 10 |  |

## 能拿来做什么

- 城市扩张与建成区变化分析
- 人口暴露与灾害风险评估
- 可持续发展目标（SDG 11）监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_S_10m');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_S_10m`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S_10m

## 许可与引用

- 许可：proprietary
- 关键词：built, built-environment, builtup, copernicus, ghsl, jrc, landcover, population, sdg, sentinel2-derived, settlement, urban
- DOI：10.2905/9F06F36F-4B11-47EC-ABB0-4F8B7B1D72EA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)
- [GHSL: Degree of Urbanization 1975-2030 (P2023A) [deprecated]](/pages/a1a2ee0c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
