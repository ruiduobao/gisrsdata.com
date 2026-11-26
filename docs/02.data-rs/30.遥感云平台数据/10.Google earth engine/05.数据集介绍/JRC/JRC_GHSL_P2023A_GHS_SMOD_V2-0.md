---
title: "GHSL：城市化程度 1975–2030 V2-0（P2023A）"
date: 2026-11-03 12:00:00
permalink: /pages/5396cca7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ghsl"
  - "jrc"
  - "population"
  - "sdg"
  - "settlement"
---

# GHSL：城市化程度 1975–2030 V2-0（P2023A）

英文原名：GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)

## 这是什么数据

这一栅格数据集表示一种全球多时相城乡分类，应用联合国统计委员会推荐的"城市化程度"第一阶段方法，基于 GHSL 项目为 1975–2030 年每 5 年一期生成的全球格网人口与建成区表面数据。城市化程度图层通过整合从 Landsat 与 Sentinel-2 数据提取的建成区表面信息 [GHS-BUILT-S R2023](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S) 与源自 CIESIN GPW v4.11 的格网人口数据 [GHS-POP R2023](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP) 生成。本产品是基于 GHS-BUILT-S 与 GHS-POP 更新对 2023 年发布数据的更新。住区模型以详细层级（第二级 - L2）提供；第一级分类可由 L2 聚合得到。

有关 GHSL 主要产品的完整信息，见 [GHSL Data Package 2023 报告](https://human-settlement.emergency.copernicus.eu/documents/GHSL_Data_Package_2023.pdf?t=1727170839)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：1975–2030 年（5 年间隔）；分辨率：1,000 米。
- 时间范围：1975-01-01 至 2030-12-31

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
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_SMOD_V2-0');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_SMOD_V2-0`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_SMOD_V2-0

## 许可与引用

- 许可：proprietary
- 关键词：ghsl, jrc, population, sdg, settlement
- DOI：10.2905/A0DF7A6F-49DE-46EA-9BDE-563437A6E2BA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)
- [GHSL: Degree of Urbanization 1975-2030 (P2023A) [deprecated]](/pages/a1a2ee0c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
