---
title: "MYD11A1.005 地表温度与发射率日产品全球 1 公里 SIN 格网 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/e9796280/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "emissivity"
  - "global"
  - "landuse-landcover"
  - "lst"
  - "modis"
  - "myd11a1"
  - "surface-temperature"
---

# MYD11A1.005 地表温度与发射率日产品全球 1 公里 SIN 格网 [已弃用]

英文原名：MYD11A1.005 Land Surface Temperature and Emissivity Daily Global 1 km Grid SIN [deprecated]

## 这是什么数据

MODIS/Aqua 地表温度与发射率（LST/E）产品 MYD11A1 提供逐像元的温度与发射率值，每日使用广义分裂窗 LST 算法生产。该算法最适合用于将大气柱水汽与下边界空气表面温度的范围分离为可处理的子范围。波段 31 与 32 的地表发射率由土地覆盖类型估计。

V5 MYD11A1 产品通过将二级 LST 产品（MYD11_L2）映射到 1 公里（精确为 0.928 公里）格网上，投影在正弦格网中。MYD11A1 产品包含以下用于白天与夜间观测的科学数据集（SDS）层：LST、质量控制评估、观测时间、观测天顶角、晴空覆盖以及由土地覆盖类型得到的波段 31 与 32 发射率。

包括 MYD11A1 在内的 V5 Aqua/MODIS LST/E 产品已通过外业活动与基于辐射的验证研究验证至阶段 2。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：1 公里。
- 时间范围：2002-07-08 至 2017-03-30

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
var dataset = ee.ImageCollection('MODIS/MYD11A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/MYD11A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD11A1

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, emissivity, global, landuse-landcover, lst, modis, myd11a1, surface-temperature
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
