---
title: "MYD17A2H.006 Aqua 总初级生产力 8 天全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/798ec5f4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "global"
  - "gpp"
  - "modis"
  - "myd17a2"
  - "nasa"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "usgs"
---

# MYD17A2H.006 Aqua 总初级生产力 8 天全球 500 米（已弃用）

英文原名：MYD17A2H.006: Aqua Gross Primary Productivity 8-Day Global 500m [deprecated]

## 这是什么数据

MYD17A2H V6 总初级生产力（GPP）产品是一个像元大小 500 米的累积 8 天合成。产品基于辐射利用效率概念，可潜在地用作数据模型的输入，以计算陆地能量、碳、水循环过程与植被生物地球化学。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2023 年；分辨率：500 米。
- 时间范围：2002-07-04 至 2023-02-18

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Gpp | 总初级生产。 | 500 |  |
| PsnNet | 净光合作用；GPP 减去维持呼吸（MR）。 | 500 |  |
| Psn_QC | 质量控制比特。 | 500 |  |

## 能拿来做什么

- 初级生产力与碳循环研究
- 生态系统建模
- 植被生产力监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MYD17A2H');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD17A2H`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD17A2H
* [User's Guide](https://lpdaac.usgs.gov/documents/495/MOD17_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/95/MOD17_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD17A2H)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, aqua, global, gpp, modis, myd17a2, nasa, photosynthesis, plant-productivity, productivity, psn, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD17A2H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
