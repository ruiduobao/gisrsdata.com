---
title: "MYD11A1.061 Aqua 地表温度与发射率日产品全球 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/5246ade7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "emissivity"
  - "global"
  - "lst"
  - "modis"
  - "myd11a1"
  - "nasa"
  - "surface-temperature"
  - "usgs"
  - "weather-and-climate"
---

# MYD11A1.061 Aqua 地表温度与发射率日产品全球 1 公里

英文原名：MYD11A1.061 Aqua Land Surface Temperature and Emissivity Daily Global 1km

## 这是什么数据

MYD11A1 V6.1 产品在 1,200 × 1,200 公里格网中提供每日地表温度（LST）与发射率值。温度值源自 MYD11_L2 条带产品。在 30 度纬度以上，一些像元在满足晴空判据时可能有多次观测。发生这种情况时，像元值是所有合格观测的平均值。连同白天与夜间地表温度波段及其质量指示层，还提供 MODIS 波段 31 与 32 以及六个观测层。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：1 公里。
- 时间范围：2002-07-04 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | 白天地表温度。 | 1000 |  |
| QC_Day | 白天 LST 质量指示。 | 1000 |  |
| Day_view_time | 白天观测的当地时间。 | 1000 |  |
| Day_view_angle | 白天观测的观测天顶角。 | 1000 |  |
| LST_Night_1km | 夜间地表温度。 | 1000 |  |
| QC_Night | 夜间 LST 质量指示。 | 1000 |  |
| Night_view_time | 夜间观测的当地时间。 | 1000 |  |
| Night_view_angle | 夜间观测的观测天顶角。 | 1000 |  |
| Emis_31 | 波段 31 发射率。 | 1000 |  |
| Emis_32 | 波段 32 发射率。 | 1000 |  |
| Clear_day_cov | 白天晴空覆盖。 | 1000 |  |
| Clear_night_cov | 夜间晴空覆盖。 | 1000 |  |

## 能拿来做什么

- 地表温度监测
- 城市热岛与气候研究
- 干旱与蒸散评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD11A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD11A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD11A1
* [User's Guide](https://lpdaac.usgs.gov/documents/118/MOD11_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/119/MOD11_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD11A1)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, emissivity, global, lst, modis, myd11a1, nasa, surface-temperature, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD11A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
