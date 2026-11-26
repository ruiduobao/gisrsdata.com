---
title: "MOD17A3HGF.061 Terra 净初级生产填补年度全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/912eee37/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "gpp"
  - "nasa"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "usgs"
  - "yearly"
---

# MOD17A3HGF.061 Terra 净初级生产填补年度全球 500 米

英文原名：MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m

## 这是什么数据

MOD17A3HGF V6.1 产品提供像元分辨率 500 米的年度总初级生产力与净初级生产力（GPP 与 NPP）信息。年度 NPP 源自给定年份的所有 8 天净光合作用（PSN）产品（MOD17A2H）之和。PSN 值是总初级生产力（GPP）与维持呼吸（MR）之差（GPP-MR）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2025 年；分辨率：500 米。
- 时间范围：2001-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Gpp | 总初级生产力。 | 500 |  |
| Npp | 净初级生产力。 | 500 |  |
| Npp_QC | 质量控制百分比。 | 500 |  |

## 能拿来做什么

- 初级生产力与碳循环研究
- 生态系统建模
- 植被生产力监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD17A3HGF');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD17A3HGF`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD17A3HGF

## 许可与引用

- 许可：proprietary
- 关键词：global, gpp, nasa, npp, photosynthesis, plant-productivity, productivity, psn, terra, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A3HGF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米](/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
