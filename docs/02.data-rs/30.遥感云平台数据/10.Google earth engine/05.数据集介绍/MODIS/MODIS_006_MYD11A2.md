---
title: "MYD11A2.006 Aqua 地表温度与发射率 8 天全球 1 公里（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/7156a737/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "emissivity"
  - "global"
  - "lst"
  - "modis"
  - "myd11a2"
  - "nasa"
  - "surface-temperature"
  - "usgs"
  - "weather-and-climate"
---

# MYD11A2.006 Aqua 地表温度与发射率 8 天全球 1 公里（已弃用）

英文原名：MYD11A2.006 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]

## 这是什么数据

MYD11A2 V6 产品在 1200 × 1200 公里格网中提供平均 8 天地表温度（LST）。MYD11A2 中的每个像元值是该 8 天时段内收集的所有对应 MYD11A1 LST 像元的简单平均。选择 8 天合成时段是因为该时段的两倍正是 Terra 与 Aqua 平台的精确地面轨迹重复周期。在本产品中，连同白天与夜间地表温度波段及其质量指示（QC）层，还有 MODIS 波段 31 与 32 以及八个观测层。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2023 年；分辨率：1 公里。
- 时间范围：2002-07-04 至 2023-02-18

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | 白天地表温度。 | 1000 |  |
| QC_Day | 白天 LST 质量指示。 | 1000 |  |
| Day_view_time | 白天观测的当地时间。 | 1000 |  |
| Day_view_angl | 白天观测的观测天顶角。 | 1000 |  |
| LST_Night_1km | 夜间地表温度。 | 1000 |  |
| QC_Night | 夜间 LST 质量指示。 | 1000 |  |
| Night_view_time | 夜间观测的当地时间。 | 1000 |  |
| Night_view_angl | 夜间观测的观测天顶角。 | 1000 |  |
| Emis_31 | 波段 31 发射率。 | 1000 |  |
| Emis_32 | 波段 32 发射率。 | 1000 |  |
| Clear_sky_days | 晴空条件的天数。 | 1000 |  |
| Clear_sky_nights | 晴空条件的夜数。 | 1000 |  |

## 能拿来做什么

- 地表温度监测
- 城市热岛与气候研究
- 干旱与蒸散评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MYD11A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD11A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2
* [User's Guide](https://lpdaac.usgs.gov/documents/118/MOD11_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/119/MOD11_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD11A2)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, aqua, emissivity, global, lst, modis, myd11a2, nasa, surface-temperature, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD11A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD11A1.006 Terra Land Surface Temperature and Emissivity Daily Global 1km [deprecated]](/pages/9c921324/)
- [MOD11A2.006 Terra Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]](/pages/6988e0d9/)
- [MYD11A1.006 Aqua Land Surface Temperature and Emissivity Daily Global 1km [deprecated]](/pages/316e7556/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
