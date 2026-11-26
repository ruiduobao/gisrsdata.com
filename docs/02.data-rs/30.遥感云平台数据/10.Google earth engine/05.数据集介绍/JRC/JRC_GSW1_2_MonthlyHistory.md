---
title: "JRC 月度水体历史 v1.2（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/9b3fd33a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "google"
  - "history"
  - "jrc"
  - "landsat-derived"
  - "monthly"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# JRC 月度水体历史 v1.2（已弃用）

英文原名：JRC Monthly Water History, v1.2 [deprecated]

## 这是什么数据

本数据集包含 1984 至 2019 年地表水的位置与时间分布图件，并提供这些水面范围与变化的统计。更多信息见相关期刊论文：[High-resolution mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)（Nature, 2016）与在线 [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2.pdf)。

这些数据使用 Landsat 5、7、8 共 4,185,439 景影像生成，影像获取于 1984 年 3 月 16 日至 2019 年 12 月 31 日。每个像元用专家系统单独分类为水体/非水体，结果汇编为整个时段的月度历史，以及用于变化检测的两个时相（1984–1999、2000–2019）。

这一月度历史集合以逐月为基础保存了水体检测的完整历史。集合包含 430 幅影像，为 1984 年 3 月至 2019 年 12 月 的每个月各一幅。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1984 年 3 月至 2019 年 12 月；分辨率：30 米。
- 时间范围：1984-03-16 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water | 该月的水体检测结果。 | 30 |  |

## 能拿来做什么

- 全球地表水范围与变化分析
- 湖泊与水库长期监测
- 洪水与湿地研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GSW1_2/MonthlyHistory');
```

- 数据集编号（Earth Engine ID）：`JRC/GSW1_2/MonthlyHistory`
- 提供方：EC JRC / Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_2_MonthlyHistory

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, google, history, jrc, landsat-derived, monthly, surface, surface-ground-water, water
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [JRC Global Surface Water Mapping Layers, v1.2 [deprecated]](/pages/4c507763/)
- [JRC Global Surface Water Metadata, v1.2 [deprecated]](/pages/454ad0e7/)
- [JRC Monthly Water Recurrence, v1.2 [deprecated]](/pages/55e542be/)
- [JRC Yearly Water Classification History, v1.2 [deprecated]](/pages/28682d97/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
