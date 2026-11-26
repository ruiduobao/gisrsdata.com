---
title: "Landsat Collection 2 Tier 1 二级 32 天 BAI 合成"
date: 2026-11-03 12:00:00
permalink: /pages/dadba6a4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bai"
  - "fire"
  - "landsat"
  - "landsat-composite"
  - "usgs"
  - "vegetation-indices"
---

# Landsat Collection 2 Tier 1 二级 32 天 BAI 合成

英文原名：Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite

## 这是什么数据

这些 Landsat Collection 2 Tier 1 Level 2 合成由 Tier 1 Level 2 正射校正影像制作。

过火面积指数（BAI）由红光与近红外波段生成，测量每个像元到参考光谱点（木炭的实测反射率）的光谱距离。该指数旨在突出火后影像中的木炭信号。详见 [Chuvieco et al. (2002)](https://www.tandfonline.com/doi/abs/10.1080/01431160210153129)。

这些合成由每个 32 天时段内的所有影像生成，时段从每年的第一天开始、持续到每年的第 352 天。一年中最后一个合成从第 353 天开始，将与次年第一个合成重叠 20 天。每个 32 天时段的所有影像都包括在合成中，以最新像元作为合成值。

注：

* 创建这些合成所用的代码[可在此查看](https://github.com/google/earthengine-catalog/blob/main/pipelines/landsat.py)。

* 只包括 WRS_ROW < 122 的白天影像。

* 对 Landsat 7，2017-01-01 之后的影像因轨道漂移被排除。

* 对 Landsat 8，2013-05-01 之前的影像因指向问题被排除。

**注意：** 这些合成是实时计算的，计入请求项目的 [EECU](https://developers.google.com/earth-engine/guides/computation_overview#eecus) 用量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：1984 年至今；分辨率：30 米。
- 时间范围：1984-01-01 至 2026-10-16

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BAI | 过火面积指数。 | 30 |  |

## 能拿来做什么

- 长时序地表反射率分析
- 土地覆盖变化监测
- 植被指数时间序列

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/COMPOSITES/C02/T1_L2_32DAY_BAI');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/COMPOSITES/C02/T1_L2_32DAY_BAI`
- 提供方：Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_COMPOSITES_C02_T1_L2_32DAY_BAI

## 许可与引用

- 许可：proprietary
- 关键词：bai, fire, landsat, landsat-composite, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite](/pages/0f909690/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite](/pages/2457b55b/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite](/pages/4b8ec6f8/)
- [Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite](/pages/4b076ef3/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
