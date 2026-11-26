---
title: "GHSL：建成区格网 1975/1990/2000/2015（P2016，已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/5692c91e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "built"
  - "builtup"
  - "jrc"
  - "landsat-derived"
  - "population"
---

# GHSL：建成区格网 1975/1990/2000/2015（P2016，已弃用）

英文原名：GHSL: Global Human Settlement Layers, Built-Up Grid 1975-1990-2000-2015 (P2016) [deprecated]

## 这是什么数据

GHSL 依托新型空间数据挖掘技术的设计与实施，能够自动处理海量异构数据并从中提取分析与知识，包括：全球精细尺度卫星影像数据流、人口普查数据，以及众包或志愿者地理信息来源。

这些数据包含一个多时相信息图层，表示从 Landsat 影像集合（GLS1975、GLS1990、GLS2000 以及专设的 Landsat 8 集合 2013/2014）推导的建成区存在。

这些数据于 2015 年按 [Global Human Settlement Layer 方法](https://publications.jrc.ec.europa.eu/repository/handle/JRC97705) 制作。

更多信息见：[https://ghsl.jrc.ec.europa.eu/ghs_bu.php](https://ghsl.jrc.ec.europa.eu/ghs_bu.php) 与 [https://ghsl.jrc.ec.europa.eu/documents/GHSL_data_access.pdf](https://ghsl.jrc.ec.europa.eu/documents/GHSL_data_access.pdf)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。GHSL 产生描述地球上人类存在的新全球空间信息、循证分析与知识。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：1975、1990、2000、2014 四个时相；分辨率：38 米。
- 时间范围：1975-01-01 至 2014-12-31

## 分辨率与规格

- 空间分辨率：约 38 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built | 多时相建成区存在。 | 38 |  |
| cnfd | 建成区类别的填隙置信度格网（2014 年聚合）：0 = 100% 置信无建成区，127 = 50% 判定截止，255 = 100% 置信有建成区。 | 38 |  |
| dm | 不同时相数据可用性的镶嵌图。 | 38 |  |

## 能拿来做什么

- 城市扩张与建成区变化分析
- 人口暴露与灾害风险评估
- 可持续发展目标（SDG 11）监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_BUILT_LDSMT_GLOBE_V1

## 许可与引用

- 许可：proprietary
- 关键词：built, builtup, jrc, landsat-derived, population
- 数据引用：Pesaresi, Martino; Ehrilch, Daniele; Florczyk, Aneta J.; Freire,
Sergio; Julea, Andreea; Kemper, Thomas; Soille, Pierre; Syrris, Vasileios
(2015): GHS built-up grid, derived from Landsat, multitemporal (1975, 1990,
2000, 2014). European Commission, Joint Research Centre (JRC) [Dataset]
[PID: https://data.europa.eu/89h/jrc-ghsl-ghs_built_ldsmt_globe_r2015b](https://data.europa.eu/89h/jrc-ghsl-ghs_built_ldsmt_globe_r2015b)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
