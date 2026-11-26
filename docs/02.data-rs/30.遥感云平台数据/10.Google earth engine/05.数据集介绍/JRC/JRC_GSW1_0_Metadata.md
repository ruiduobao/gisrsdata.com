---
title: "JRC 全球地表水元数据 v1.0（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/5f34ce30/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "google"
  - "jrc"
  - "landsat-derived"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# JRC 全球地表水元数据 v1.0（已弃用）

英文原名：JRC Global Surface Water Metadata, v1.0 [deprecated]

## 这是什么数据

本数据集包含 1984 至 2015 年地表水的位置与时间分布图件，并提供这些水面范围与变化的统计。更多信息见相关期刊论文：[High-resolution mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)（Nature, 2016）与在线 [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2.pdf)。

这些数据使用 Landsat 5、7、8 共 3,066,102 景影像生成，影像获取于 1984 年 3 月 16 日至 2015 年 10 月 10 日。每个像元用专家系统单独分类为水体/非水体，结果汇编为整个时段的月度历史，以及用于变化检测的两个时相（1984–1999、2000–2015）。

本产品包含用于计算全球地表水数据集的观测元数据。从未检测到水体的区域被掩膜。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1984 年 3 月至 2015 年 10 月；分辨率：30 米。
- 时间范围：1984-03-16 至 2015-10-18

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| detections | 研究期内水体检测次数。 | 30 |  |
| valid_obs | 研究期内有效观测次数。 | 30 |  |
| total_obs | 研究期内可用观测（即影像景数）总数。 | 30 |  |

## 能拿来做什么

- 全球地表水范围与变化分析
- 湖泊与水库长期监测
- 洪水与湿地研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('JRC/GSW1_0/Metadata');
```

- 数据集编号（Earth Engine ID）：`JRC/GSW1_0/Metadata`
- 提供方：EC JRC / Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_0_Metadata

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, google, jrc, landsat-derived, surface, surface-ground-water, water
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [JRC Global Surface Water Mapping Layers, v1.0 [deprecated]](/pages/4d377c76/)
- [JRC Monthly Water History, v1.0 [deprecated]](/pages/ff1671f5/)
- [JRC Monthly Water Recurrence, v1.0 [deprecated]](/pages/5e46dfd7/)
- [JRC Yearly Water Classification History, v1.0 [deprecated]](/pages/24553550/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
