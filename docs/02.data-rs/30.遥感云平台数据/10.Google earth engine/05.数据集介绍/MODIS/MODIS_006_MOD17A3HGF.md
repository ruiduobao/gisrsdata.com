---
title: "MOD17A3HGF.006 Terra 净初级生产填补年度全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/ebcf1234/
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

# MOD17A3HGF.006 Terra 净初级生产填补年度全球 500 米（已弃用）

英文原名：MOD17A3HGF.006: Terra Net Primary Production  Gap-Filled Yearly Global 500m [deprecated]

## 这是什么数据

MOD17A3HGF V6 产品提供像元分辨率 500 米的年度净初级生产力（NPP）信息。年度 NPP 源自给定年份的所有 8 天净光合作用（PSN）产品（MOD17A2H）之和。PSN 值是总初级生产力（GPP）与维持呼吸（MR）之差（GPP-MR）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2021 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2021-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Npp | 净初级生产力。 | 500 |  |
| Npp_QC | 质量控制百分比。 | 500 |  |

## 能拿来做什么

- 初级生产力与碳循环研究
- 生态系统建模
- 植被生产力监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD17A3HGF');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD17A3HGF`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD17A3HGF

## 许可与引用

- 许可：proprietary
- 关键词：global, gpp, nasa, npp, photosynthesis, plant-productivity, productivity, psn, terra, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A3HGF.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
