---
title: "GHSL：住区格网 1975/1990/2000/2014（P2016，已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/ed72f33a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ghsl"
  - "jrc"
  - "population"
  - "settlement"
  - "smod"
---

# GHSL：住区格网 1975/1990/2000/2014（P2016，已弃用）

英文原名：GHSL: Global Human Settlement Layers, Settlement Grid 1975-1990-2000-2014 (P2016) [deprecated]

## 这是什么数据

GHSL 依托新型空间数据挖掘技术的设计与实施，能够自动处理海量异构数据并从中提取分析与知识，包括：全球精细尺度卫星影像数据流、人口普查数据，以及众包或志愿者地理信息来源。

GHS-SMOD 是 GHSL 采用的城乡住区分类模型（Settlement classification MODel）。它把城市化程度（[DEGURBA](https://ec.europa.eu/eurostat/web/degree-of-urbanisation/background)）概念表示到 GHSL 数据场景中。每个 GHS-SMOD 格网都通过整合参考时相（1975、1990、2000、2015）的 GHSL 建成区与 GHSL 人口格网数据生成。

DEGURBA 分类方案是一种以人为本的城市与住区定义：它以 1 km² 格网单元在某一时间点的人口为主要输入。DEGURBA 把人口格网单元分为三大类：'[城市中心](https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Urban_centre)'（城市）、'[城市集群](https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Urban_cluster)'（城镇与郊区）与 '[乡村格网单元](https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Rural_grid_cell)'（基底）。这些类别抽象在 GHS-SMOD 实现中分别对应 '高密度集群（HDC）'、'低密度集群（LDC）' 与 '乡村格网单元（RUR）'。

'HDC' 与 DEGURBA 的 '[城市中心](https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Urban_centre)' 不同：它通过整合建成区图层，考虑了在大面积低密度居住开发地区城市过度碎片化的问题。在 GHS-SMOD 表示中，'HDC' 是连续人口格网单元（4 连通、填隙）的空间概括，其密度至少为 1500 人/km²，或建成区表面密度 > 50%，且常住人口总数至少 50,000。'LDC' 是密度至少 300 人/km²、人口总数至少 5,000 的连续格网单元。'RUR' 是 'HDC' 与 'LDC' 之外、人口 > 0 且 < 300 的格网单元。其余均分类为人口为 0 的区域。

本数据集以 World Mollweide 投影（EPSG:54009）制作。

更多信息见：[http://ghsl.jrc.ec.europa.eu/ghs_smod.php](http://ghsl.jrc.ec.europa.eu/ghs_smod.php)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。GHSL 产生描述地球上人类存在的新全球空间信息、循证分析与知识。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：1975、1990、2000、2015 四个时相；分辨率：1,000 米；投影：World Mollweide（EPSG:54009）。
- 时间范围：1975-01-01 至 2015-12-31

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| smod_code | 城市化程度。 | 1000 |  |

## 能拿来做什么

- 城市化程度划分
- 城乡分类与统计
- 区域规划研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2016/SMOD_POP_GLOBE_V1');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2016/SMOD_POP_GLOBE_V1`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_SMOD_POP_GLOBE_V1

## 许可与引用

- 许可：proprietary
- 关键词：ghsl, jrc, population, settlement, smod
- 数据引用：Pesaresi, Martino; Freire, Sergio (2016): GHS Settlement grid following the
REGIO model 2014 in application to GHSL Landsat and CIESIN GPW
v4-multitemporal (1975-1990-2000-2015). European Commission, Joint Research
Centre (JRC) [Dataset]
PID: [https://data.europa.eu/89h/jrc-ghsl-ghs_smod_pop_globe_r2016a](https://data.europa.eu/89h/jrc-ghsl-ghs_smod_pop_globe_r2016a)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
