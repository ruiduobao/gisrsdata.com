---
title: "MOD13A2.006 Terra 植被指数 16 天全球 1 公里（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/9296243b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "global"
  - "mod13a2"
  - "modis"
  - "nasa"
  - "ndvi"
  - "terra"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13A2.006 Terra 植被指数 16 天全球 1 公里（已弃用）

英文原名：MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]

## 这是什么数据

MOD13A2 V6 产品提供两种植被指数（VI）：归一化差值植被指数（NDVI）与增强植被指数（EVI）。NDVI 被称为与现有 NOAA-AVHRR 推导的 NDVI 的连续性指数。EVI 在高生物量区域具有改进的灵敏度。

本产品的算法从 16 天时段的所有获取中选择最佳可用像元值。使用的判据是低云、低视角与最高的 NDVI/EVI 值。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：1 公里。
- 时间范围：2000-02-18 至 2023-02-02

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 16 天 NDVI 平均值。 | 1000 |  |
| EVI | 16 天 EVI 平均值。 | 1000 |  |
| DetailedQA | VI 质量指示。 | 1000 |  |
| sur_refl_b01 | 地表反射率波段 1（红）。 | 1000 | 620-670nm |
| sur_refl_b02 | 地表反射率波段 2（近红外）。 | 1000 | 841-876nm |
| sur_refl_b03 | 地表反射率波段 3（蓝）。 | 1000 | 459-479nm |
| sur_refl_b07 | 地表反射率波段 7（中红外）。 | 1000 | 2105-2155nm |
| ViewZenith | VI 像元的观测天顶角。 | 1000 |  |
| SolarZenith | VI 像元的太阳天顶角。 | 1000 |  |
| RelativeAzimuth | VI 像元的相对方位角。 | 1000 |  |
| DayOfYear | VI 像元的年积日。 | 1000 |  |
| SummaryQA | VI 像元的质量可靠性。 | 1000 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD13A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD13A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD13A2
* [User's Guide](https://lpdaac.usgs.gov/documents/103/MOD13_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD13A2)

## 许可与引用

- 许可：proprietary
- 关键词：16-day, evi, global, mod13a2, modis, nasa, ndvi, terra, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)
- [MOD15A2H.006: Terra Leaf Area Index/FPAR 8-Day Global 500m [deprecated]](/pages/94591ad1/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
