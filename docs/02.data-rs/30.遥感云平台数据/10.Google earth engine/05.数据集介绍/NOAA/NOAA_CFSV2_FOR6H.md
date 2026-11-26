---
title: "CFSV2：NCEP 气候预报系统版本 2，6 小时产品 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/f7c9715e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daylight"
  - "flux"
  - "forecast"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "nws"
  - "precipitation"
  - "radiation"
  - "snow"
  - "temperature"
---

# CFSV2：NCEP 气候预报系统版本 2，6 小时产品 [已弃用]

英文原名：CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products [deprecated]

## 这是什么数据

注：自 2025 年 10 月 20 日起，本数据集温度波段改用摄氏而非开尔文单位。温度单位一致（开尔文）请使用 [NOAA/CFSV2/FOR6H_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSV2_FOR6H_HARMONIZED)。

国家环境预测中心（NCEP）气候预报系统（CFS）是一个全耦合模式，表示地球大气、海洋、陆地与海冰之间的相互作用。CFS 在 NCEP 的环境建模中心（EMC）开发。业务 CFS 于 2011 年 3 月 30 日升级到版本 2（CFSv2）。

预报每天初始化四次（0000、0600、1200 与 1800 UTC）。这是用于创建 NCEP 气候预报系统再分析（CFSR）的同一模式，CFSv2 数据集的目的是扩展 CFSR。我们仅从匹配 cdas1.t??z.sfluxgrbf**06**.grib2 的文件中摄入波段子集。

有关 CFS 的更多信息，见 [CFS NOAA 站点](https://cfs.ncep.noaa.gov/)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1979 年至 2026 年；分辨率：22,264 米。
- 时间范围：1979-01-01 至 2026-11-01

## 分辨率与规格

- 空间分辨率：约 22,264 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Downward_Long-Wave_Radp_Flux_surface_6_Hour_Average | 地表向下长波辐射通量，6 小时平均。 | 22264 |  |
| Downward_Short-Wave_Radiation_Flux_surface_6_Hour_Average | 地表向下短波辐射通量，6 小时平均。 | 22264 |  |
| Geopotential_height_surface | 地表位势高度。 | 22264 |  |
| Latent_heat_net_flux_surface_6_Hour_Average | 地表潜热净通量，6 小时平均。 | 22264 |  |
| Maximum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval | 地面以上 2 米最大比湿，6 小时间隔。 | 22264 |  |
| Maximum_temperature_height_above_ground_6_Hour_Interval | 地面以上 2 米最高温度，6 小时间隔。注意：单位于 2025-10-20 18:00:00 从开尔文切换为摄氏。 | 22264 |  |
| Minimum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval | 地面以上 2 米最小比湿，6 小时间隔。 | 22264 |  |
| Minimum_temperature_height_above_ground_6_Hour_Interval | 地面以上 2 米最低温度，6 小时间隔。注意：单位于 2025-10-20 18:00:00 从开尔文切换为摄氏。 | 22264 |  |
| Potential_Evaporation_Rate_surface_6_Hour_Average | 地表潜在蒸发率，6 小时平均。 | 22264 |  |
| Precipitation_rate_surface_6_Hour_Average | 地表降水率，6 小时平均。 | 22264 |  |
| Pressure_surface | 地表气压。 | 22264 |  |
| Sensible_heat_net_flux_surface_6_Hour_Average | 地表感热净通量，6 小时平均。 | 22264 |  |
| Specific_humidity_height_above_ground | 地面以上 2 米比湿。 | 22264 |  |
| Temperature_height_above_ground | 地面以上 2 米温度。注意：单位于 2025-10-20 18:00:00 从开尔文切换为摄氏。 | 22264 |  |
| u-component_of_wind_height_above_ground | 地面以上 10 米风的 U 分量。 | 22264 |  |
| Upward_Long-Wave_Radp_Flux_surface_6_Hour_Average | 地表向上长波辐射通量，6 小时平均。 | 22264 |  |
| Upward_Short-Wave_Radiation_Flux_surface_6_Hour_Average | 地表向上短波辐射通量，6 小时平均。 | 22264 |  |
| v-component_of_wind_height_above_ground | 地面以上 10 米风的 V 分量。 | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm | 地表层以下 5 厘米体积土壤水分含量。 | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm | 地表层以下 25 厘米体积土壤水分含量。 | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm | 地表层以下 70 厘米体积土壤水分含量。 | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm | 地表层以下 150 厘米体积土壤水分含量。 | 22264 |  |

## 能拿来做什么

- 气候预报系统再分析
- 天气与气候建模
- 大气变量分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CFSV2/FOR6H');
```

- 数据集编号（Earth Engine ID）：`NOAA/CFSV2/FOR6H`
- 提供方：NOAA NWS National Centers for Environmental Prediction (NCEP)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSV2_FOR6H

## 许可与引用

- 许可：proprietary
- 关键词：climate, daylight, flux, forecast, geophysical, ncep, noaa, nws, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate
- 数据引用：Saha, S., et al. 2011, updated daily. NCEP Climate Forecast System
Version 2 (CFSv2) 6-hourly Products. Research Data Archive at the National
Center for Atmospheric Research, Computational and Information Systems
Laboratory. [https://doi.org/10.5065/D61C1TXF](https://doi.org/10.5065/D61C1TXF).
Accessed dd mmm yyyy.

- DOI：10.5065/D61C1TXF

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CFSV2：NCEP 气候预报系统版本 2，6 小时产品（协调版）](/pages/a1cd75f1/)
- [CFSR：气候预报系统再分析（协调版）](/pages/a2388741/)
- [Daymet V4：逐日地表天气与气候学汇总](/pages/7b6d050e/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
