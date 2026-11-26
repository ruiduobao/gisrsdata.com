---
title: "JRC 年度水体分类历史 v1.4"
date: 2026-11-03 12:00:00
permalink: /pages/f6b4d504/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "geophysical"
  - "google"
  - "history"
  - "jrc"
  - "landsat-derived"
  - "surface"
  - "surface-ground-water"
  - "water"
  - "yearly"
---

# JRC 年度水体分类历史 v1.4

英文原名：JRC Yearly Water Classification History, v1.4

## 这是什么数据

本数据集包含 1984 至 2021 年地表水的位置与时间分布图件，并提供这些水面范围与变化的统计。更多信息见相关期刊论文：[High-resolution mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)（Nature, 2016）与在线 [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2021.pdf)。

这些数据使用 Landsat 5、7、8 共 4,716,475 景影像生成，影像获取于 1984 年 3 月 16 日至 2021 年 12 月 31 日。每个像元用专家系统单独分类为水体/非水体，结果汇编为整个时段的月度历史，以及用于变化检测的两个时相（1984–1999、2000–2021）。

这一年度季节性分类集合包含基于全年检测到的出现值的水体季节性逐年分类。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1984 年 3 月至 2021 年 12 月；分辨率：30 米。
- 时间范围：1984-03-16 至 2022-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| waterClass | 全年水体季节性分类。 | 30 |  |

## 能拿来做什么

- 全球地表水范围与变化分析
- 湖泊与水库长期监测
- 洪水与湿地研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GSW1_4/YearlyHistory');
```

- 数据集编号（Earth Engine ID）：`JRC/GSW1_4/YearlyHistory`
- 提供方：EC JRC / Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_4_YearlyHistory

## 许可与引用

- 许可：proprietary
- 关键词：annual, geophysical, google, history, jrc, landsat-derived, surface, surface-ground-water, water, yearly
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [JRC Global Surface Water Mapping Layers, v1.4](/pages/0d647c0f/)
- [JRC Global Surface Water Metadata, v1.4](/pages/1f03ce37/)
- [JRC Monthly Water History, v1.4](/pages/b476f77f/)
- [JRC Monthly Water Recurrence, v1.4](/pages/74e9569e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
