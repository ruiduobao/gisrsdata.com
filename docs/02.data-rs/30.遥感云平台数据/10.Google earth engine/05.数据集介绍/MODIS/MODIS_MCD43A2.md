---
title: "MCD43A2.005 BRDF-反照率质量 16 天全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/383ffd43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "albedo"
  - "brdf"
  - "global"
  - "modis"
  - "quality"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A2.005 BRDF-反照率质量 16 天全球 500 米 [已弃用]

英文原名：MCD43A2.005 BRDF-Albedo Quality 16-Day Global 500m [deprecated]

## 这是什么数据

中分辨率成像光谱仪（MODIS）BRDF/反照率质量产品（MCD43A2）描述其他 BRDF 与反照率产品的总体状况。MCD43A2 产品包含 16 天数据，空间分辨率 500 米，以正弦投影的三级格网数据集提供，包括反照率质量、雪条件、辅助信息与反演信息。本产品生成时同时使用 Terra 与 Aqua 数据，为高质量输入数据提供最高概率，并将其指定为 MCD（即组合）产品。

版本 5 的 MODIS/Terra+Aqua BRDF/反照率产品为验证阶段 1，意味着精度已使用从选定地点与时段获得的少量独立测量以及地面真值/外业计划工作做了估计。尽管之后可能有改进版本，这些数据已可用于科学出版物。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2017 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2017-03-14

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Quality | BRDF/反照率强制质量。 | 500 |  |
| Snow_BRDF_Albedo | 无雪或有雪 BRDF/反照率检索。 | 500 |  |
| BRDF_Albedo_Ancillary | BRDF 反照率辅助质量。 | 500 |  |
| BRDF_Albedo_Band_Quality | BRDF 反照率波段质量。 | 500 |  |

## 能拿来做什么

- BRDF/反照率建模
- 地表反射率校正
- 辐射传输研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MCD43A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A2

## 许可与引用

- 许可：proprietary
- 关键词：16-day, albedo, brdf, global, modis, quality, reflectance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
