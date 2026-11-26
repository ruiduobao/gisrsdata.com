---
title: "MOD17A3.055 Terra 净初级生产年度全球 1 公里（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/4841efce/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "gpp"
  - "mod17a3"
  - "modis"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "yearly"
---

# MOD17A3.055 Terra 净初级生产年度全球 1 公里（已弃用）

英文原名：MOD17A3.055: Terra Net Primary Production Yearly Global 1km [deprecated]

## 这是什么数据

MOD17A3 V055 产品提供像元分辨率 1 公里的年度总初级生产力与净初级生产力（NPP）信息。净初级生产力（NPP）定义生态系统中所有植物生产净有用化学能的速率。换言之，NPP 等于生态系统中植物生产有用化学能（即 GPP）的速率与它们为呼吸消耗部分该能量的速率之差。

NPP 产品的版本 055 由蒙大拿大学（UMT）的数值陆地动力学模拟组（[NTSG](https://www.ntsg.umt.edu)）生产。它修正了 MOD17 算法的云污染 MODIS LAI-FPAR 输入的问题。原始的、未修正的数据集构成版本 4 NPP 产品。关于本产品 NTSG 与 NASA 版本之间差异的更多细节，请查阅[此文档](https://lpdaac.usgs.gov/documents/188/MOD17_NTSG_Note.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2014 年；分辨率：1 公里。
- 时间范围：2000-01-01 至 2014-01-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Gpp | 年度总初级生产力。 | 1000 |  |
| Npp | 年度净初级生产力。 | 1000 |  |
| Gpp_Npp_QC | 一年中生长季（定义为日最低气温高于 -8° 时）因云污染导致的填充 MOD15 LAI 的百分比。高值表示云污染频率高。例如，QA 在热带雨林高，但在干旱地区低。 | 1000 |  |

## 能拿来做什么

- 初级生产力与碳循环研究
- 生态系统建模
- 植被生产力监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/055/MOD17A3');
```

- 数据集编号（Earth Engine ID）：`MODIS/055/MOD17A3`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_055_MOD17A3

## 许可与引用

- 许可：proprietary
- 关键词：global, gpp, mod17a3, modis, npp, photosynthesis, plant-productivity, productivity, psn, terra, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
