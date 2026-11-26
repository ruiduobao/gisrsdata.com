---
title: "全球红树林分布 v1（2000 年）"
date: 2026-11-03 12:00:00
permalink: /pages/2f0c27e8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "ciesin"
  - "forest-biomass"
  - "global"
  - "landsat-derived"
  - "mangrove"
  - "nasa"
  - "usgs"
---

# 全球红树林分布 v1（2000 年）

英文原名：Global Mangrove Forests Distribution, v1 (2000)

## 这是什么数据

该数据库使用 2000 年的 Landsat 卫星数据编制。来自 USGS 地球资源观测与科学中心（EROS）的 1,000 多景 Landsat 影像使用混合监督与非监督数字影像分类技术分类。该数据库是世界上第一个、最全面的红树林评估（[Giri et al., 2011](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1466-8238.2010.00584.x)）。本研究的部分资金由 NASA 提供。

红树林数据库被用于识别红树林保护的优先区域、研究红树林在自然灾害（如海啸）中拯救生命与财产的作用、碳核算与生物多样性保护。USGS EROS 一直在使用该数据研究海平面上升对红树林生态系统的影响。该数据库是红树林监测的基准。

[一般文档](https://www.earthdata.nasa.gov/data/catalog/sedac-ciesin-sedac-lulc-mangroves-2000-1.0#documents-and-resources)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球红树林分布区；时间：2000 年；分辨率：30 米。
- 时间范围：2000-01-01 至 2001-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 1 | 红树林。 | 30 |  |

## 能拿来做什么

- 红树林保护优先区识别
- 海岸带灾害防护评估
- 蓝碳核算与生物多样性保护

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/MANGROVE_FORESTS');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/MANGROVE_FORESTS`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_MANGROVE_FORESTS

## 许可与引用

- 许可：proprietary
- 关键词：annual, ciesin, forest-biomass, global, landsat-derived, mangrove, nasa, usgs
- 数据引用：Giri, C., E. Ochieng, L.L.Tieszen, Z. Zhu, A. Singh, T. Loveland, J. Masek, and N. Duke. 2013. Global Mangrove Forests Distribution, 2000. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). [https://doi.org/10.7927/H4J67DW8](https://doi.org/10.7927/H4J67DW8). Accessed DAY MONTH YEAR

- DOI：10.7927/H4J67DW8

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)
- [GCOM-C/SGLI 三级叶绿素 a 浓度产品（V1）](/pages/9e90afdc/)
- [GCOM-C/SGLI 三级叶绿素 a 浓度产品（V2）](/pages/834e6e14/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
