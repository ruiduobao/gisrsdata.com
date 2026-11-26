---
title: "MCD12Q1.061 MODIS 土地覆盖类型年度全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/676a6522/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landcover"
  - "landuse-landcover"
  - "modis"
  - "nasa"
  - "usgs"
  - "yearly"
---

# MCD12Q1.061 MODIS 土地覆盖类型年度全球 500 米

英文原名：MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m

## 这是什么数据

Terra 与 Aqua 组合的中分辨率成像光谱仪（MODIS）土地覆盖类型（MCD12Q1）版本 6.1 数据产品以年度间隔提供全球土地覆盖类型。MCD12Q1 版本 6.1 数据产品使用 MODIS Terra 与 Aqua 反射率数据的监督分类推导。土地覆盖类型源自国际地圈-生物圈计划（IGBP）、马里兰大学（UMD）、叶面积指数（LAI）、BIOME-生物地球化学循环（BGC）与植物功能型（PFT）分类方案。监督分类随后经过结合先验知识与辅助信息的额外后处理，以进一步细化特定类别。额外的土地覆盖属性评估层由联合国粮食及农业组织（FAO）土地覆盖分类系统（LCCS）针对土地覆盖、土地利用与地表水文提供。

还提供土地覆盖类型 1–5、土地覆盖属性 1–3、土地覆盖属性评估 1–3、土地覆盖质量控制（QC）与陆地水体掩膜的图层。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2025 年；分辨率：500 米。
- 时间范围：2001-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LC_Type1 | 土地覆盖类型 1：年度国际地圈-生物圈计划（IGBP）分类。 | 500 |  |
| LC_Type2 | 土地覆盖类型 2：年度马里兰大学（UMD）分类。 | 500 |  |
| LC_Type3 | 土地覆盖类型 3：年度叶面积指数（LAI）分类。 | 500 |  |
| LC_Type4 | 土地覆盖类型 4：年度 BIOME-生物地球化学循环（BGC）分类。 | 500 |  |
| LC_Type5 | 土地覆盖类型 5：年度植物功能型分类。 | 500 |  |
| LC_Prop1_Assessment | LCCS1 土地覆盖层置信度。 | 500 |  |
| LC_Prop2_Assessment | LCCS2 土地利用层置信度。 | 500 |  |
| LC_Prop3_Assessment | LCCS3 地表水文层置信度。 | 500 |  |
| LC_Prop1 | FAO 土地覆盖分类系统 1（LCCS1）土地覆盖层。 | 500 |  |
| LC_Prop2 | FAO-LCCS2 土地利用层。 | 500 |  |
| LC_Prop3 | FAO-LCCS3 地表水文层。 | 500 |  |
| QC | 产品质量标志。 | 500 |  |
| LW | 源自 MOD44W 的二值陆地（类别 2）/水体（类别 1）掩膜。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD12Q1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD12Q1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/1409/MCD12_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD12Q1)

## 许可与引用

- 许可：proprietary
- 关键词：landcover, landuse-landcover, modis, nasa, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG](/pages/3c641846/)
- [MCD12Q2.006 Land Cover Dynamics Yearly Global 500m](/pages/7a9ce2ed/)
- [MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m](/pages/6ca60ab0/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
