---
title: "Landsat Collection 2 Tier 1 二级 年度合成"
date: 2026-11-03 12:00:00
permalink: /pages/ed17e820/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landsat"
  - "landsat-composite"
  - "satellite-imagery"
  - "sr"
  - "usgs"
---

# Landsat Collection 2 Tier 1 二级 年度合成

英文原名：Landsat Collection 2 Tier 1 Level 2 Annual Composite

## 这是什么数据

这些 Landsat Collection 2 Tier 1 Level 2 合成由 Tier 1 Level 2 正射校正影像制作，包括地表反射率波段：蓝、绿、红、近红外、短波红外 1、短波红外 2 与热红外。

这些合成由每个年度时段内的所有影像生成，时段从每年的第一天开始、持续到每年的最后一天。每一年的所有影像都包括在合成中，以最新像元作为合成值。

注：

* 创建这些合成所用的代码[可在此查看](https://github.com/google/earthengine-catalog/blob/main/pipelines/landsat.py)。

* 只包括 WRS_ROW < 122 的白天影像。

* 对 Landsat 7，2017-01-01 之后的影像因轨道漂移被排除。

* 对 Landsat 8，2013-05-01 之前的影像因指向问题被排除。

**注意：** 这些合成是实时计算的，计入请求项目的 [EECU](https://developers.google.com/earth-engine/guides/computation_overview#eecus) 用量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：1984 年至今；分辨率：30 米。
- 时间范围：1984-01-01 至 2026-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| blue | 蓝光（地表反射率）。 | 30 |  |
| green | 绿光（地表反射率）。 | 30 |  |
| red | 红光（地表反射率）。 | 30 |  |
| nir | 近红外（地表反射率）。 | 30 |  |
| swir1 | 短波红外 1（地表反射率）。 | 30 |  |
| swir2 | 短波红外 2（地表反射率）。 | 30 |  |
| thermal | 地表温度。 | 30 |  |

## 能拿来做什么

- 长时序地表反射率分析
- 土地覆盖变化监测
- 植被指数时间序列

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL`
- 提供方：Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_COMPOSITES_C02_T1_L2_ANNUAL

## 许可与引用

- 许可：proprietary
- 关键词：landsat, landsat-composite, satellite-imagery, sr, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Landsat Collection 2 Tier 1 Level 2 32-Day Composite](/pages/ca9766bc/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day Composite](/pages/80887808/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
