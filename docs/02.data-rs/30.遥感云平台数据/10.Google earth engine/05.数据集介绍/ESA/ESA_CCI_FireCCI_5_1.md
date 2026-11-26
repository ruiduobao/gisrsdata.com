---
title: "FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）"
date: 2026-11-03 12:00:00
permalink: /pages/2a6e2416/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "burn"
  - "c3s"
  - "cci"
  - "climate-change"
  - "copernicus"
  - "esa"
  - "fire"
  - "firecci"
  - "firecci51"
  - "fragmentation"
  - "gcos"
  - "geophysical"
---

# FireCCI51：MODIS Fire_cci 过火面积像元产品（5.1 版）

英文原名：FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1

## 这是什么数据

MODIS Fire_cci 过火面积像元产品第 5.1 版（FireCCI51）是一个月度、全球、约 250 米空间分辨率的数据集，包含过火面积信息及辅助数据。它基于 Terra 卫星上 MODIS 仪器的近红外（NIR）波段地表反射率，以及来自 Terra 与 Aqua 卫星同一传感器的活动火信息。

过火面积算法采用两阶段混合方法。第一步，基于活动火探测出很可能被烧过的像元（称为「种子」）。第二步，应用上下文生长来完整探测火斑块。生长阶段由自适应阈值控制，阈值根据每个种子周围区域的具体特征计算。指导整个探测过程的变量是火前与火后影像之间的 NIR 下降。

本数据集对每个像元包括：火情首次探测的估计日期、该探测的置信水平，以及被烧的土地覆盖（取自 ESA CCI 土地覆盖数据集 v2.0.7）。此外，还提供一个观测标志，用于识别因缺乏有效观测或属于不可燃土地覆盖而未被处理的像元。

FireCCI51 在 ESA 气候变化倡议（CCI）计划下开发，也是哥白尼气候变化服务（C3S）的一部分。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2001-01-01 至 2020-12-01
- 更新节奏：逐月

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BurnDate | 过火首次探测的估计年内日序 | 250 |  |
| ConfidenceLevel | 将像元探测为过火的概率，表示所有像元探测的不确定性，即使其被分类为未过火 | 250 |  |
| LandCover | 过火像元的土地覆盖类别，取自 CCI LandCover v2.0.7 产品。见 Defourny, P.、Lamarche, C.、Bontemps, S.、De Maet, T.、Van Bogaert, E.、Moreau, I.、Brockmann, C.、Boettcher, M.、Kirches, G.、Wevers, J.、Santoro, M.、Ramoino, F. 与 Arino, O.（2017）。Land Cover Climate Change Initiative - Product User Guide v2. Issue 2.0。[在线] 见：[https://maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf](https://maps.elie.ucl.ac.be/CCI/viewer/download/ESACCI-LC-Ph2-PUGv2_2.0.pdf) 访问于：2020 年 7 月。© ESA Climate Change Initiative - Land Cover，由 UCLouvain 主持（2017） | 250 |  |
| ObservedFlag | 指示像元未被处理原因的标志：-2 = 像元不可燃（水体、裸地、城市区、永久冰雪）；-1 = 像元在该月内未被观测（由于云、云影或传感器故障） | 250 |  |

## 能拿来做什么

- 全球过火面积制图与火灾排放估算
- 火灾对土地覆盖变化的影响分析
- 气候变化背景下的火情势研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ESA/CCI/FireCCI/5_1');
```

- 数据集编号（Earth Engine ID）：`ESA/CCI/FireCCI/5_1`
- 提供方：European Space Agency (ESA) Climate Change Initiative (CCI) Programme, Fire ECV、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_CCI_FireCCI_5_1

## 许可与引用

- 许可：proprietary
- 关键词：burn, c3s, cci, climate-change, copernicus, esa, fire, firecci, firecci51, fragmentation, gcos, geophysical, global, human-modification, landcover, landscape-gradient, modis, monthly, stressors
- 数据引用：Product: Chuvieco, E.; Pettinari, M.L.; Lizundia-Loiola, J.; Storm, T.;
Padilla Parellada, M. (2018): ESA Fire Climate Change Initiative
(Fire_cci): MODIS Fire_cci Burned Area Pixel product, version 5.1. Centre for
Environmental Data Analysis, 01 November 2018.
[https://doi.org/10.5285/58f00d8814064b79a0c49662ad3af537](https://doi.org/10.5285/58f00d8814064b79a0c49662ad3af537).

- DOI：10.5285/58f00d8814064b79a0c49662ad3af537

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [FIRMS: Fire Information for Resource Management System](/pages/4ae50fa9/)
- [FORMA Alert Thresholds](/pages/299d3b97/)
- [FORMA Alerts](/pages/d92138fe/)
- [FORMA Raw Output FIRMS](/pages/721e383c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
