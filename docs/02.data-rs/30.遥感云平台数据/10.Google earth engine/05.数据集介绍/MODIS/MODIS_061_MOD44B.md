---
title: "MOD44B.061 Terra 植被连续场年度全球 250 米"
date: 2026-11-03 12:00:00
permalink: /pages/6ca60ab0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "geophysical"
  - "global"
  - "landuse-landcover"
  - "mod44b"
  - "modis"
  - "nasa"
  - "terra"
  - "tree-cover"
  - "vegetation"
---

# MOD44B.061 Terra 植被连续场年度全球 250 米

英文原名：MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m

## 这是什么数据

Terra MODIS 植被连续场（VCF）产品是全球地表植被覆盖估计的亚像元级表征。它旨在将地球陆地表面连续表征为基本植被性状的比例，提供三个地表覆盖分量的梯度：树木覆盖百分比、非树木覆盖百分比与裸地百分比。VCF 产品提供具有改进空间细节的土地表面覆盖的连续、定量描绘，因此被广泛用于环境建模与监测应用。

VCF 产品每年生成，使用 Terra MODIS 250 与 500 米地表反射率数据的月度合成（包括全部七个波段）与地表温度生产。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2025 年；分辨率：250 米。
- 时间范围：2000-03-05 至 2025-03-06

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Percent_Tree_Cover | 被树冠覆盖的像元百分比。 | 250 |  |
| Percent_NonTree_Vegetation | 被非树木植被覆盖的像元百分比。 | 250 |  |
| Percent_NonVegetated | 未植被的像元百分比。 | 250 |  |
| Quality | 描述质量差的输入（多云、高气溶胶、云影或观测天顶角 >45°）。字段中的每个比特代表模型的 8 个输入地表反射率文件之一。 | 250 |  |
| Percent_Tree_Cover_SD | 用于生成树木覆盖百分比数据层中像元值的 30 个模型的标准差（SD）。 | 250 |  |
| Percent_NonVegetated_SD | 用于生成非植被百分比数据层中像元值的 30 个模型的标准差（SD）。 | 250 |  |
| Cloud | 阐明「Quality」层，向用户指示「坏」数据指的是多云输入数据。字段中的每个比特代表模型的 8 个输入地表反射率文件之一。 | 250 |  |

## 能拿来做什么

- 植被连续场制图
- 森林覆盖变化监测
- 环境建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD44B');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD44B`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD44B
* [User's Guide](https://lpdaac.usgs.gov/documents/1494/MOD44B_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/113/MOD44B_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/mod44bv061/)

## 许可与引用

- 许可：proprietary
- 关键词：annual, geophysical, global, landuse-landcover, mod44b, modis, nasa, terra, tree-cover, vegetation
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD12C1.061 MODIS 土地覆盖类型年度全球 0.05 度 CMG](/pages/3c641846/)
- [MCD12Q1.061 MODIS 土地覆盖类型年度全球 500 米](/pages/676a6522/)
- [MCD12Q2.061 MODIS 土地覆盖动力学年度全球 500 米](/pages/7a9ce2ed/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
