---
title: "MCD12Q1.006 MODIS 土地覆盖类型年度全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/cee0bc6f/
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

# MCD12Q1.006 MODIS 土地覆盖类型年度全球 500 米（已弃用）

英文原名：MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m [deprecated]

## 这是什么数据

MCD12Q1 V6 产品提供源自六种不同分类方案的年度全球土地覆盖类型（2001–2016）。它使用 MODIS Terra 与 Aqua 反射率数据的监督分类推导。监督分类随后经过结合先验知识与辅助信息的额外后处理，以进一步细化特定类别。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2020 年；分辨率：500 米。
- 时间范围：2001-01-01 至 2020-01-01

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
var dataset = ee.ImageCollection('MODIS/006/MCD12Q1');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD12Q1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD12Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/101/MCD12_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/86/MCD12_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD12Q1)

## 许可与引用

- 许可：proprietary
- 关键词：landcover, landuse-landcover, modis, nasa, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD12Q2.006 Land Cover Dynamics Yearly Global 500m [deprecated]](/pages/d42cf828/)
- [MOD44B.006 Terra Vegetation Continuous Fields Yearly Global 250m [deprecated]](/pages/86fc5ddc/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
