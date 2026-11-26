---
title: "全球 2020 森林分类（IPCC 地上生物量一级估计）V1"
date: 2026-11-03 12:00:00
permalink: /pages/750f4ec5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aboveground"
  - "biomass"
  - "carbon"
  - "classification"
  - "forest"
  - "forest-biomass"
  - "ipcc"
  - "nasa"
  - "primary-forest"
  - "secondary-forest"
---

# 全球 2020 森林分类（IPCC 地上生物量一级估计）V1

英文原名：Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1

## 这是什么数据

本数据集提供按状态/条件划分的 2020 年全球森林类别，分辨率约 30 米。数据支持为《2006 年 IPCC 国家温室气体清单指南 2019 年修订版》中天然林的地上干木生物量密度（AGBD）生成一级估计。森林类别包括原生林、幼次生林（≤20 年）与老次生林（>20 年）。分类基于一组现有地球观测（EO）产品的布尔组合，这些产品为表示 2000 至 2020 年的森林树木覆盖、高度、年龄与土地利用分类层。此森林状态/条件分类优先通过最小化模糊像元的纳入来减少划定中潜在的误分误差。因此，它提供全球森林面积的保守估计，识别出全球约 32.6 亿公顷森林。

### 质量评估

这些数据全面汇编了已发表的最新森林条件数据集，但不存在能验证这些划定的全球数据独立样本是一个制约。因此，全球森林状态/条件分类未经验证。

### 数据获取、材料与方法

森林状态/条件分类通过对一组现有数据集（见表 1，[Hunka 等，2024](https://doi.org/10.1038/s41597-024-03930-9)）进行布尔分析创建，包括卫星源的森林树木覆盖、高度、年龄与土地利用分类层。在此方法中，识别潜在森林状态/条件类别（如原生林）的层被合并，识别分歧来源（如划定的原生林中存在人工林或毁林）的层被用于移除潜在误分误差区域。

原生林类别使用识别完整/原生林的数据集建立，具有高森林完整性指数、存在树木覆盖与森林高度 ≥5 米，且无已知的森林损失事件、人工林或种植园。

幼次生林类别捕获 2000 至 2020 年间森林高度或覆盖发生变化的像元，不包括人工林与种植园。这些森林在 2020 年高度 ≥5 米，且（a）2000 年高度 <5 米，或（b）2000 年高度 ≥5 米但 2000 年后经历了树木覆盖损失。

老次生林类别捕获在排除原生林与幼次生林类别后剩余的森林像元。这些像元在 2000 与 2020 年森林高度均 ≥5 米，2000 年后未探测到树木覆盖损失或森林干扰，也没有任何人工林或种植园。

[分析工作流示意图](https://daac.ornl.gov/CMS/guides/CMS_Global_Forest_Age_Fig2.jpg)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2020 年；分辨率：30 米。
- 时间范围：2020-01-01 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 森林类型。 | 30 |  |

## 能拿来做什么

- IPCC 温室气体清单支持
- 森林状态与年龄制图
- 地上生物量一级估计

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/ORNL/global_forest_classification_2020/V1');
```

- 数据集编号（Earth Engine ID）：`NASA/ORNL/global_forest_classification_2020/V1`
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_global_forest_classification_2020_V1

## 许可与引用

- 许可：proprietary
- 关键词：aboveground, biomass, carbon, classification, forest, forest-biomass, ipcc, nasa, primary-forest, secondary-forest
- 数据引用：Hunka, N., L. Duncanson, J. Armston, R.O. Dubayah, S.P. Healey, M.
Santoro, P. May, A. Araza, C. Bourgain, P.M. Montesano, C.S. Neigh, H.
Grantham, V. Potapov, S. Turubanova, A. Tyukavina, J. Richter, N. Harris, M.
Urbazaev, A. Pascual, D. Requena Suarez, M. Herold, B. Poulter, S.N. Wilson,
G. Grassi, S. Federici, M.J. Sanz Sanchez, and J. Melo. 2024. Classification
of Global Forests for IPCC Aboveground Biomass Tier 1 Estimates, 2020. ORNL
DAAC, Oak Ridge, Tennessee, USA.
[https://doi.org/10.3334/ORNLDAAC/2345](https://doi.org/10.3334/ORNLDAAC/2345)

- DOI：10.3334/ORNLDAAC/2345

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global Aboveground and Belowground Biomass Carbon Density Maps](/pages/f5cf8a95/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
