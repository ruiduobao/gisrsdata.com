---
title: "MOD13A1.006 Terra 植被指数 16 天全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/7a44de8e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "global"
  - "mod13a1"
  - "modis"
  - "nasa"
  - "ndvi"
  - "terra"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13A1.006 Terra 植被指数 16 天全球 500 米（已弃用）

英文原名：MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]

## 这是什么数据

MOD13A1 V6 产品提供逐像元的植被指数（VI）值。有两个主要植被层。第一个是归一化差值植被指数（NDVI），被称为与现有美国国家海洋和大气管理局-高级甚高分辨率辐射计（NOAA-AVHRR）推导的 NDVI 的连续性指数。第二个植被层是增强植被指数（EVI），它最小化冠层背景变异并在茂密植被条件下保持灵敏度。EVI 还使用蓝波段去除由烟与亚像元薄云引起的残余大气污染。MODIS NDVI 与 EVI 产品由大气校正的双向地表反射率计算，并已对水、云、重气溶胶与云影做了掩膜。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2023-02-02

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 归一化差值植被指数。 | 500 |  |
| EVI | 增强植被指数。 | 500 |  |
| DetailedQA | VI 质量指示。 | 500 |  |
| sur_refl_b01 | 红光地表反射率。 | 500 | 645nm |
| sur_refl_b02 | 近红外地表反射率。 | 500 | 858nm |
| sur_refl_b03 | 蓝光地表反射率。 | 500 | 469nm |
| sur_refl_b07 | 中红外地表反射率。 | 500 | 2130nm/2105 - 2155nm |
| ViewZenith | 观测天顶角。 | 500 |  |
| SolarZenith | 太阳天顶角。 | 500 |  |
| RelativeAzimuth | 相对方位角。 | 500 |  |
| DayOfYear | 年儒略日。 | 500 |  |
| SummaryQA | VI 像元的质量可靠性。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD13A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD13A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD13A1
* [User's Guide](https://lpdaac.usgs.gov/documents/103/MOD13_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD13A1)

## 许可与引用

- 许可：proprietary
- 关键词：16-day, evi, global, mod13a1, modis, nasa, ndvi, terra, usgs, vegetation, vegetation-indices
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)
- [MOD15A2H.006: Terra Leaf Area Index/FPAR 8-Day Global 500m [deprecated]](/pages/94591ad1/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
