---
title: "清华 FROM-GLC 不透水面变化年份（GAIA）"
date: 2026-11-03 12:00:00
permalink: /pages/40b0b1e8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "built"
  - "development"
  - "impervious"
  - "population"
  - "tsinghua"
  - "urban"
---

# 清华 FROM-GLC 不透水面变化年份（GAIA）

英文原名：Tsinghua FROM-GLC Year of Change to Impervious Surface

## 这是什么数据

本数据集包含 1985 至 2018 年全球不透水面面积的年度变化信息，分辨率 30 米。从透水到不透水的变化使用监督分类与时间一致性检查的组合方法确定。不透水像元定义为不透水比例超过 50%。转变年份（从透水到不透水）可由像元值识别，范围从 34（年份：1985）到 1（年份：2018）。例如，1990 年的不透水面可由像元值大于 29 显示（见查找表）。本数据集时间一致，遵循从透水（如非城市）到不透水（如城市）的单调转换。制图方法与评估的更多信息见 [1985 至 2018 年全球人工不透水面年度图（GAIA）（Gong 等 2020）](https://doi.org/10.1016/j.rse.2019.111510)。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：1985 年至 2018 年；分辨率：30 米。
- 时间范围：1985-01-01 至 2018-12-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| change_year_index | 从透水到不透水的转变年份（原文作「from from」，衍字）。从 34（年份：1985）到 1（年份：2018） | 30 |  |

## 能拿来做什么

- 做全球城市扩张的时序分析。
- 重建任意年份的不透水面分布。
- 为城市化与土地变化研究提供长时序数据。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('Tsinghua/FROM-GLC/GAIA/v10');
```

- 数据集编号（Earth Engine ID）：`Tsinghua/FROM-GLC/GAIA/v10`
- 提供方：Tsinghua University、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Tsinghua_FROM-GLC_GAIA_v10

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：built, development, impervious, population, tsinghua, urban
- 数据引用：Gong, P., Li, X., Wang, J., Bai, Y., Chen, B., Hu, T., ... & Zhou, Y. (2020).
Annual maps of global artificial impervious area (GAIA) between 1985 and 2018.
Remote Sensing of Environment, 236, 111510.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL：全球住区特征（10 米）2018（P2023A）](/pages/465f5706/)
- [GHSL：全球建成区表面 10 米（P2023A）](/pages/a10e4a06/)
- [GHSL：全球建成区表面 1975–2030（P2023A）](/pages/9724c860/)
- [GHSL：城市化程度 1975–2030 V2-0（P2023A）](/pages/5396cca7/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
