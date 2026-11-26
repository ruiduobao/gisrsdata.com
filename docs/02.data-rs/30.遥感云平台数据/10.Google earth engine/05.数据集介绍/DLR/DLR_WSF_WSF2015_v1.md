---
title: "世界居住区足迹 2015（WSF 2015）"
date: 2026-11-03 12:00:00
permalink: /pages/a545a891/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landcover"
  - "landsat-derived"
  - "population"
  - "sentinel1-derived"
  - "settlement"
  - "urban"
---

# 世界居住区足迹 2015（WSF 2015）

英文原名：World Settlement Footprint 2015

## 这是什么数据

世界居住区足迹（WSF）2015 是一幅 10 米分辨率的二值掩膜，描绘全球人类居住区的范围，由 2014–2015 年多时相 Landsat-8 与 Sentinel-1 影像导出（分别处理了约 217,000 景和约 107,000 景）。

人类居住区随时间的变化动态与所有其他非居住区信息类别明显不同。因此，在选定时间区间内，对某关注区域可获得的全部多时相影像，提取关键时间统计量（即时间均值、最小值、最大值等）：

* 对雷达数据：原始后向散射值；
* 对光学影像：在云掩膜后导出的不同光谱指数（如植被指数、建成区指数等）。

接下来，基于支持向量机（SVM）的不同分类方案分别应用于光学与雷达时间特征，最后将两个输出适当组合。

为定量评估该图层的高精度与可靠性，已与 Google 合作开展了大规模验证工作，基于海量地面真值样本（即 900,000 个）进行众包照片解译标注。验证遵循文献推荐的最新实践，制定了统计上稳健、透明的方案。

全部技术细节见[这篇论文](https://www.nature.com/articles/s41597-020-00580-5)。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2015-01-01 至 2016-01-01

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| settlement | 人类居住区 | 10 |  |

## 能拿来做什么

- 全球人类居住区范围制图
- 城市扩张与人口暴露度分析
- 灾害风险评估的居住区底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('DLR/WSF/WSF2015/v1');
```

- 数据集编号（Earth Engine ID）：`DLR/WSF/WSF2015/v1`
- 提供方：Deutsches Zentrum für Luft- und Raumfahrt (DLR)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/DLR_WSF_WSF2015_v1

## 许可与引用

- 许可：CC0-1.0
- 关键词：landcover, landsat-derived, population, sentinel1-derived, settlement, urban
- 数据引用：Marconcini, M., Metz-Marconcini, A., Üreyen, S., Palacios-Lopez, D., Hanke, W., Bachofer, F.,
Zeidler, J., Esch, T., Gorelick, N., Kakarla, A., Paganini, M., Strano, E. (2020).
Outlining where humans live, the World Settlement Footprint 2015. Scientific Data, 7(1), 1-14.
[doi:10.1038/s41597-020-00580-5](https://doi.org/10.1038/s41597-020-00580-5)

- DOI：10.1038/s41597-020-00580-5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
