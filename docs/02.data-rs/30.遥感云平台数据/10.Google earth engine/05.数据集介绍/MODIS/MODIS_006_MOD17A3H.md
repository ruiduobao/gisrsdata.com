---
title: "MOD17A3H.006 Terra 净初级生产年度全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/b5054ffc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "gpp"
  - "mod17a3"
  - "modis"
  - "nasa"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "usgs"
---

# MOD17A3H.006 Terra 净初级生产年度全球 500 米（已弃用）

英文原名：MOD17A3H.006: Terra Net Primary Production Yearly Global 500m [deprecated]

## 这是什么数据

MOD17A3H V6 产品提供像元分辨率 500 米的年度净初级生产力（NPP）信息。年度 NPP 源自给定年份的 45 个 8 天净光合作用（PSN）产品（MOD17A2H）之和。PSN 值是 GPP 与维持呼吸（MR）之差（GPP-MR）。

这是本产品的 NASA 版本。另一个版本由蒙大拿大学（UMT）的数值陆地动力学模拟组（[NTSG](https://www.ntsg.umt.edu)）生产。NTSG 版本修正了 MOD17 算法的云污染 MODIS LAI-FPAR 输入的问题，但其分辨率为 1 公里。它以 MODIS/055/MOD17A3 摄入 Earth Engine。

关于本产品 NTSG 与 NASA 版本之间差异的更多细节，请查阅[此文档](https://lpdaac.usgs.gov/documents/188/MOD17_NTSG_Note.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2014 年；分辨率：500 米。
- 时间范围：2000-01-01 至 2014-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Npp | 净初级生产力。 | 500 |  |
| Npp_QC | 质量控制比特。 | 500 |  |

## 能拿来做什么

- 初级生产力与碳循环研究
- 生态系统建模
- 植被生产力监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD17A3H');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD17A3H`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD17A3H

## 许可与引用

- 许可：proprietary
- 关键词：global, gpp, mod17a3, modis, nasa, npp, photosynthesis, plant-productivity, productivity, psn, terra, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A3H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
