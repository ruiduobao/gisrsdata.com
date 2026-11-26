---
title: "ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）"
date: 2026-11-03 12:00:00
permalink: /pages/e9028b43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biomass"
  - "cci"
  - "ecosystems"
  - "esa"
  - "forest"
---

# ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）

英文原名：ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)

## 这是什么数据

本数据集更新至 v6.0，提供 2007、2010、2015、2016、2017、2018、2019、2020、2021 与 2022 年的森林地上生物量估计。这些估计由多种对地观测数据组合导出（因年份而异），来自哥白尼 Sentinel-1 任务、Envisat 的 ASAR（高级合成孔径雷达）仪器以及 JAXA 的高级陆地观测卫星（ALOS-1 与 ALOS-2），并辅以其他对地观测来源的信息。本数据集由生物量 CCI 团队在欧洲空间局（ESA）气候变化倡议（CCI）计划下生成。

与第 5 版相比，第 6 版包括更新的 2010、2015、2016、2017、2018、2019、2020 与 2021 年 AGB 地图，以及新增的 2007 与 2022 年 AGB 地图。本数据集对所有生物群系与每个年份都包含 L 波段多时相观测。地上生物量（AGB）地图采用了修订的异速生长方程，现基于来自 GEDI 与 ICESat-2 任务的更广泛的星载 LiDAR 数据汇编。反演算法纳入了扩展的 ICESat-2 观测来校准反演模型，并采用了改进的代价函数，保留遥感数据所表达的时间特征，限制 2007–2010 年地图与 2015 年以后地图之间的偏差。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2007-01-01 至 2023-01-01
- 更新节奏：多年度（2007、2010、2015–2022）

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| agb | 地上生物量（AGB）定义为所有活立木木质部分（茎、树皮、枝与梢）的质量，以烘干重量表示，不包括树桩与根 | 100 |  |
| agb_sd | 地上生物量不确定性的逐像元估计，以标准差表示 | 100 |  |

## 能拿来做什么

- 全球森林碳储量估算
- 森林生物量变化监测
- REDD+ 与碳核算的数据底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ESA/CCI/Above_Ground_Biomass/V6_0');
```

- 数据集编号（Earth Engine ID）：`ESA/CCI/Above_Ground_Biomass/V6_0`
- 提供方：ESA Biomass CCI、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_CCI_Above_Ground_Biomass_V6_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：biomass, cci, ecosystems, esa, forest
- 数据引用：Santoro, M.; Cartus, O. (2025): ESA Biomass Climate Change Initiative
(Biomass_cci): Global datasets of forest above-ground biomass for the
years 2007, 2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021 and 2022,
v6.0. NERC EDS Centre for Environmental Data Analysis, 17 April 2025.
doi:10.5285/95913ffb6467447ca72c4e9d8cf30501.

- DOI：10.5285/95913ffb6467447ca72c4e9d8cf30501

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [全球 SPEI 干旱指数数据库（2.11 版）](/pages/2a1f609f/)
- [加拿大森林林龄图 2019（Landsat 衍生）](/pages/65b34141/)
- [全球 SPEI 干旱指数数据库（2.10 版，已弃用）](/pages/9bb9126f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
