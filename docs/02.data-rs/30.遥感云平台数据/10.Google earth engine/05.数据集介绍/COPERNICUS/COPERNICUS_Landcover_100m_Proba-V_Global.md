---
title: "哥白尼全球土地覆盖 LC100 第 2 集合（2015，已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/df79d207/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "eea"
  - "esa"
  - "eu"
  - "landcover"
  - "landuse-landcover"
  - "proba"
  - "probav"
  - "vito"
---

# 哥白尼全球土地覆盖 LC100 第 2 集合（2015，已弃用）

英文原名：Copernicus Global Land Cover Layers: CGLS-LC100 Collection 2 [deprecated]

## 这是什么数据

哥白尼全球土地服务（CGLS）是哥白尼计划的陆地组成部分，在全球尺度提供一系列关于地表状态与演变的生物地球物理产品。

它的 100 米动态土地覆盖图（CGLS-LC100）给出一套主分类（离散类别），并为每个基本土地覆盖类给出连续场图层——即每类植被/地面覆盖的比例估计。这种连续分类比单纯分类更能描绘混合的土地覆盖，可以按应用裁剪，例如森林监测、作物监测、生物多样性与保护、非洲环境与安全监测、气候建模等。

本图（第 2 集合）对应 2015 参考年、覆盖全球，由 PROBA-V 100 米时序、高质量土地覆盖训练样地库和若干辅助数据集生成，一级分类精度达到 80%。注意：第 2 集合官方已标注弃用（deprecated），后继版本是第 3 集合。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2015-01-01 至 2015-01-01

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| discrete_classification | 土地覆盖分类 | 100 |  |
| discrete_classification-proba | 离散分类的质量指标（分类概率） | 100 |  |
| forest_type | 树木植被覆盖百分比大于 1% 的全部像元的森林类型 | 100 |  |
| bare-coverfraction | 裸地/稀疏植被类的植被覆盖百分比 | 100 |  |
| crops-coverfraction | 农田类的植被覆盖百分比 | 100 |  |
| grass-coverfraction | 草本植被类的植被覆盖百分比 | 100 |  |
| moss-coverfraction | 苔藓与地衣类的植被覆盖百分比 | 100 |  |
| shrub-coverfraction | 灌木类的植被覆盖百分比 | 100 |  |
| tree-coverfraction | 森林类的植被覆盖百分比 | 100 |  |
| snow-coverfraction | 冰雪类的地面覆盖百分比 | 100 |  |
| urban-coverfraction | 建成区类的地面覆盖百分比 | 100 |  |
| water-permanent-coverfraction | 永久水体类的地面覆盖百分比 | 100 |  |
| water-seasonal-coverfraction | 季节性水体类的地面覆盖百分比 | 100 |  |
| data-density-indicator | 算法输入数据的数据密度指标 | 100 |  |
| bare-coverfraction-stddev | 质量指标（标准差）：裸地/稀疏植被回归的标准差 | 100 |  |
| crops-coverfraction-stddev | 质量指标（标准差）：农田回归的标准差 | 100 |  |
| grass-coverfraction-stddev | 质量指标（标准差）：草本植被回归的标准差 | 100 |  |
| moss-coverfraction-stddev | 质量指标（标准差）：苔藓与地衣回归的标准差 | 100 |  |
| shrub-coverfraction-stddev | 质量指标（标准差）：灌木回归的标准差 | 100 |  |
| tree-coverfraction-stddev | 质量指标（标准差）：森林回归的标准差 | 100 |  |

## 能拿来做什么

- 同时需要类别与各类覆盖比例的全球土地覆盖制图（2015 年）
- 森林与作物监测、生物多样性与保护分析
- 复现基于第 2 集合的既有研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/Landcover/100m/Proba-V/Global');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/Landcover/100m/Proba-V/Global`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V_Global

## 许可与引用

- 许可：proprietary
- 关键词：copernicus, eea, esa, eu, landcover, landuse-landcover, proba, probav, vito
- 数据引用：Buchhorn, M. ; Smets, B. ; Bertels, L. ; Lesiv, M. ; Tsendbazar, N. - E. ; Herold, M. ;
Fritz, S. Copernicus Global Land Service: Land Cover 100m: epoch 2015: Globe. Dataset of the
global component of the Copernicus Land Monitoring Service 2019.
[doi:10.5281/zenodo.3243509](https://doi.org/10.5281/zenodo.3243509)

- DOI：10.5281/zenodo.3243509

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
