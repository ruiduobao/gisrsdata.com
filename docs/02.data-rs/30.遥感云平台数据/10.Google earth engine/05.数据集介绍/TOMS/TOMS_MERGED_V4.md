---
title: "TOMS 与 OMI 合并臭氧数据 v4"
date: 2026-11-03 12:00:00
permalink: /pages/c64a1cd2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "aura"
  - "climate"
  - "geophysical"
  - "ges-disc"
  - "goddard"
  - "nasa"
  - "omi"
  - "ozone"
  - "toms"
  - "weather-and-climate"
---

# TOMS 与 OMI 合并臭氧数据 v4

英文原名：TOMS and OMI Merged Ozone Data v4

## 这是什么数据

全臭氧制图光谱仪（TOMS）数据是可用于监测过去 25 年全球与区域总臭氧趋势的主要长期、连续的卫星观测记录。数据由 NASA 戈达德太空飞行中心大气实验室生产。第 8 版 TOMS 数据产品包括 3 级格网数据（1.0 × 1.25 度）。臭氧监测仪（OMI）搭载于 Aura 卫星（2004 年 7 月至今），分辨率更高（1.0 × 1.0 度）。

这些数据是由 TOMS/EarthProbe、TOMS/Nimbus-7、TOMS/Meteor-3、OMI/Aura 以及无数据日期的 USGS 插值数据合并的臭氧产品。

见 [本文档](https://acd-ext.gsfc.nasa.gov/anonftp/toms/omi/Changes_OMI_TO3_col4_col3.pdf) 了解 v3 与 v4 之间变化的总结。

[TOMS 与 OMI 的更多信息](https://ozoneaq.gsfc.nasa.gov/missions/)

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：1978 年至今；分辨率：111,000 米（约 1 度）。
- 时间范围：1978-11-01 至 2026-10-30

## 分辨率与规格

- 空间分辨率：约 111,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ozone | 总柱臭氧 | 111000 |  |

## 能拿来做什么

- 监测全球臭氧层变化与臭氧洞演变。
- 做大气化学与紫外辐射研究。
- 验证化学气候模式的臭氧模拟。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TOMS/MERGED_V4');
```

- 数据集编号（Earth Engine ID）：`TOMS/MERGED_V4`
- 提供方：NASA / GES DISC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TOMS_MERGED_V4

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, aura, climate, geophysical, ges-disc, goddard, nasa, omi, ozone, toms, weather-and-climate
- 数据引用：The data set source should be properly cited when the data are used.
A formal reference of the form: \<authors\>, 2012, last updated 2013:
\<dataset name\>. NASA/GSFC, Greenbelt, MD, USA, NASA Goddard Earth Sciences
Data and Information Services Center (GES DISC). Accessed
\<enter user data access date\> at \<DOI\> is suggested following
Parsons et al. (2010),
[doi:10.1029/2010EO340001](https://doi.org/10.1029/2010EO340001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AERDB_D3_VIIRS_NOAA20.002：VIIRS/NOAA-20 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/64c851e2/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
