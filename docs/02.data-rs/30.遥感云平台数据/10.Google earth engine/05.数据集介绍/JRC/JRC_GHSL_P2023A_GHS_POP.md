---
title: "GHSL：全球人口表面 1975–2030（P2023A）"
date: 2026-11-03 12:00:00
permalink: /pages/cf948667/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin-derived"
  - "ghsl"
  - "jrc"
  - "population"
  - "sdg"
---

# GHSL：全球人口表面 1975–2030（P2023A）

英文原名：GHSL: Global population surfaces 1975-2030 (P2023A)

## 这是什么数据

这一栅格数据集描绘居住人口的空间分布，以格网单元居民的绝对数量表示。1975 年至 2020 年每 5 年一期的居住人口估算以及推算至 2025 年与 2030 年的预估，源自 CIESIN GPWv4.11，从人口普查或行政单元分解到格网单元，分解依据是各时相 [GHSL 全球建成区表面图层](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S) 所绘的建成区分布、体积与分类。

有关 GHSL 主要产品的完整信息，见 [GHSL Data Package 2023 报告](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：1975–2030 年（5 年间隔，2025/2030 为预估）；分辨率：100 米。
- 时间范围：1975-01-01 至 2030-12-31

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population_count | 按时相的人口数。 | 100 |  |

## 能拿来做什么

- 全球人口分布制图
- 城市化研究
- 公共服务可达性分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_POP');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_POP`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP

## 许可与引用

- 许可：proprietary
- 关键词：ciesin-derived, ghsl, jrc, population, sdg
- DOI：10.2905/2FF68A52-5B5B-4A22-8F40-C41DA8332CFE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]](/pages/434906ce/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)
- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
