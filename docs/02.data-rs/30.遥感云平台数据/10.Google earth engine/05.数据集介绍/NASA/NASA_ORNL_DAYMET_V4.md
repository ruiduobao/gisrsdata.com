---
title: "Daymet V4：逐日地表天气与气候学汇总"
date: 2026-11-03 12:00:00
permalink: /pages/7b6d050e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daily"
  - "daylight"
  - "daymet"
  - "flux"
  - "geophysical"
  - "nasa"
  - "ornl"
  - "precipitation"
  - "radiation"
  - "snow"
  - "temperature"
---

# Daymet V4：逐日地表天气与气候学汇总

英文原名：Daymet V4: Daily Surface Weather and Climatological Summaries

## 这是什么数据

Daymet V4 为北美大陆、夏威夷与波多黎各提供逐日天气参数的格网估计（波多黎各数据自 1950 年起可用）。它源自选定的气象站数据与各种辅助数据源。

与先前版本相比，Daymet V4 为已知问题提供了有效的解决方案，并进一步考虑了对被认为是输入气象站偏差的改进。改进包括：

- 减少输入报告气象站测量的时间偏差。

- 改进核心算法中的三维回归模型技术。

- 一种处理高海拔温度测量偏差的新方法。

2020 与 2021 年数据从 V4 R1 来源摄入。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北美大陆、夏威夷与波多黎各；时间范围：1980 年至 2025 年；分辨率：1,000 米。
- 时间范围：1980-01-01 至 2025-12-31

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dayl | 日光时段的时长。基于太阳高于假想平坦地平线的当日时段。 | 1000 |  |
| prcp | 日总降水，所有形态之和换算为水当量。 | 1000 |  |
| srad | 入射短波辐射通量密度，取当日日光时段的平均。 | 1000 |  |
| swe | 雪水当量，积雪中包含的水量。 | 1000 |  |
| tmax | 日最高 2 米气温。 | 1000 |  |
| tmin | 日最低 2 米气温。 | 1000 |  |
| vp | 水汽日平均分压。 | 1000 |  |

## 能拿来做什么

- 逐日天气与气候分析
- 水文与生态建模
- 农业气象应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/ORNL/DAYMET_V4');
```

- 数据集编号（Earth Engine ID）：`NASA/ORNL/DAYMET_V4`
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V4
* [ORNL DAAC Dataset Documentation](https://daac.ornl.gov/DAYMET/guides/Daymet_Daily_V4.html)
* [Dataset Documentation](https://daac.ornl.gov/daacdata/daymet/Daymet_Daily_V4/comp/Daymet_Daily_V4.pdf)
* [The THREDDS location for this Collection](https://thredds.daac.ornl.gov/thredds/catalogs/ornldaac/Regional_and_Global_Data/DAYMET_COLLECTIONS/DAYMET_COLLECTIONS.html)

## 许可与引用

- 许可：proprietary
- 关键词：climate, daily, daylight, daymet, flux, geophysical, nasa, ornl, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate
- 数据引用：Thornton, M.M., R. Shrestha, Y. Wei, P.E. Thornton, S-C. Kao, and B.E. Wilson. 2022.
Daymet: Daily Surface Weather Data on a 1-km Grid for North America, Version 4 R1.
ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/2129

- DOI：10.3334/ORNLDAAC/2129

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]](/pages/b11f9c4f/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)
- [ERA5-Land 月聚合数据 — ECMWF 气候再分析](/pages/0889ecdc/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
