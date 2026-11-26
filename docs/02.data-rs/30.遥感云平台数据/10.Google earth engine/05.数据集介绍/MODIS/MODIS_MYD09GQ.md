---
title: "MYD09GQ.005 Aqua 地表反射率日 L2G 全球 250 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/4e84ebc3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "global"
  - "modis"
  - "myd09gq"
  - "satellite-imagery"
  - "surface-reflectance"
  - "usgs"
---

# MYD09GQ.005 Aqua 地表反射率日 L2G 全球 250 米 [已弃用]

英文原名：MYD09GQ.005 Aqua Surface Reflectance Daily L2G Global 250m [deprecated]

## 这是什么数据

MODIS 地表反射率产品提供地表光谱反射率的估计，如同在没有大气散射或吸收的情况下在地面测量的那样。低级数据已对大气气体与气溶胶做了校正，为若干更高阶的格网二级（L2G）与三级产品提供二级基础。

MYD09GQ 在正弦投影的每日格网 L2G 产品中以 250 米分辨率提供波段 1 与 2。本产品提供的科学数据集包括波段 1 与 2 的反射率、质量评级、观测覆盖与观测编号。本产品旨在与存储重要质量与观测几何信息的 MOD09GA 结合使用。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：250 米。
- 时间范围：2002-07-04 至 2017-03-30

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | 每个 250 米像元的观测数。 | 250 |  |
| sur_refl_b01 | 地表反射率波段 1。 | 250 | 620-670nm |
| sur_refl_b02 | 波段 2 的地表反射率。 | 250 | 841-876nm |
| QC_250m | 地表反射率质量保证。 | 250 |  |
| obscov | 观测覆盖百分比。 | 250 |  |

## 能拿来做什么

- 地表反射率与土地覆盖分析
- 植被与物候监测
- 大气校正研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MYD09GQ');
```

- 数据集编号（Earth Engine ID）：`MODIS/MYD09GQ`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GQ

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, global, modis, myd09gq, satellite-imagery, surface-reflectance, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
