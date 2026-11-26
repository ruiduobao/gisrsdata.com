---
title: "DESS 中国梯田图 v1"
date: 2026-11-03 12:00:00
permalink: /pages/3c0d1c61/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "china"
  - "dess"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "terrace"
  - "tsinghua"
---

# DESS 中国梯田图 v1

英文原名：DESS China Terrace Map v1

## 这是什么数据

本数据集是 2018 年 30 米分辨率的中国梯田图。它基于 Google Earth Engine 平台，使用多源、多时相数据通过监督的基于像元分类开发。总体精度与 kappa 系数分别达到 94% 与 0.72。这幅首张 30 米中国梯田图可用于土壤侵蚀、粮食安全、生物地球化学循环、生物多样性与生态系统服务评估研究。

## 覆盖范围与时间

- 覆盖范围：空间：中国；时间：2018 年；分辨率：30 米。
- 时间范围：2018-01-01 至 2019-01-01

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| terrace | 有梯田时为 1，无梯田时为 0。 | 30 |  |

## 能拿来做什么

- 做梯田分布与土壤侵蚀研究。
- 为粮食安全与农业管理提供梯田数据。
- 分析梯田的生态系统服务价值。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('Tsinghua/DESS/ChinaTerraceMap/v1');
```

- 数据集编号（Earth Engine ID）：`Tsinghua/DESS/ChinaTerraceMap/v1`
- 提供方：Department of Earth System Science, Tsinghua University (DESS, THU)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Tsinghua_DESS_ChinaTerraceMap_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, china, dess, landcover, landuse, landuse-landcover, terrace, tsinghua
- 数据引用：Cao, B., Yu, L., Naipal, V., Ciais, P., Li, W., Zhao, Y., Wei, W.,
Chen, D., Liu, Z., and Gong, P.: A 30 m terrace mapping in China using
Landsat 8 imagery and digital elevation model based on the Google Earth
Engine, Earth Syst. Sci. Data, 13, 2437-2456,
[doi:10.5194/essd-13-2437-2021](https://doi.org/10.5194/essd-13-2437-2021), 2021.

- DOI：10.5194/essd-13-2437-2021

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
