---
title: "GFS：全球预报系统 384 小时预报大气数据"
date: 2026-11-03 12:00:00
permalink: /pages/c5693455/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "cloud"
  - "emc"
  - "flux"
  - "forecast"
  - "geophysical"
  - "gfs"
  - "humidity"
  - "ncep"
  - "noaa"
  - "precipitation"
  - "radiation"
---

# GFS：全球预报系统 384 小时预报大气数据

英文原名：GFS: Global Forecast System 384-Hour Predicted Atmosphere Data

## 这是什么数据

全球预报系统（GFS）是由国家环境预测中心（NCEP）生产的天气预报模式。GFS 数据集由选定的模式输出（见下述）组成，作为格网预报变量。384 小时预报，预报间隔 1 小时（至 120 小时）与 3 小时（120 小时后），以 6 小时时间分辨率制作（即每天更新四次）。使用「creation_time」与「forecast_time」属性选择感兴趣的数据。

GFS 是一个耦合模式，由大气模式、海洋模式、陆地/土壤模式与海冰模式组成，它们共同提供天气条件的准确图景。注意此模式可能变化；更多信息见[全球预报/分析系统近期修改历史](https://www.emc.ncep.noaa.gov/gmb/STATS/html/model_changes.html) 与 [文档](https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php)。可能有显著的逐小时与逐日波动，在分析前需要对波段应用降噪技术。

注意，可用预报小时与间隔随时间变化：

* 2015/04/01–2017/07/09：36 小时预报，不包括 0 小时，间隔 3 小时。
* 2017/07/09–2021/06/11：384 小时预报，0–120 小时间隔 1 小时，120–240 小时间隔 3 小时，240–384 小时间隔 12 小时。
* 2021/06/12 起：384 小时预报，0–120 小时间隔 1 小时，120–384 小时间隔 3 小时。

一些波段仅从 2025/01/15 起可用，如波段描述所注。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2015 年至 2026 年；分辨率：27,830 米。
- 时间范围：2015-07-01 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| temperature_2m_above_ground | 地面以上 2 米温度。 | 27830 |  |
| specific_humidity_2m_above_ground | 地面以上 2 米比湿。 | 27830 |  |
| dew_point_temperature_2m_above_ground | 地面以上 2 米露点温度（从 2025/01/15 起可用）。 | 27830 |  |
| relative_humidity_2m_above_ground | 地面以上 2 米相对湿度。 | 27830 |  |
| maximum_temperature_2m_above_ground | 地面以上 2 米最高温度（从 2025/01/15 起可用，但仅对 forecast_hours > 0 的资产）。 | 27830 |  |
| minimum_temperature_2m_above_ground | 地面以上 2 米最低温度（从 2025/01/15 起可用，但仅对 forecast_hours > 0 的资产）。 | 27830 |  |
| u_component_of_wind_10m_above_ground | 地面以上 10 米风的 U 分量。 | 27830 |  |
| v_component_of_wind_10m_above_ground | 地面以上 10 米风的 V 分量。 | 27830 |  |
| total_precipitation_surface | 地表前 1–6 小时的累积降水，取决于「forecast_hours」属性的值，按公式 ((F - 1) % 6) + 1（且仅对 forecast_hours > 0 的资产）。因此，计算至小时 X 的总降水时，应仅对 forecast_hours 为 6 的倍数的值求和再加到达 X 的余量，以避免重复计数。它还意味着，要确定仅小时 X 的降水，必须减去前一小时的值，除非 X 是 6 小时窗口中的第一小时。 | 27830 |  |
| precipitable_water_entire_atmosphere | 整个大气的可降水量。 | 27830 |  |
| u_component_of_wind_planetary_boundary_layer | 行星边界层风的 U 分量（从 2025/01/15 起可用）。 | 27830 |  |
| v_component_of_wind_planetary_boundary_layer | 行星边界层风的 V 分量（从 2025/01/15 起可用）。 | 27830 |  |
| gust | 风速（阵风）（从 2025/01/15 起可用）。 | 27830 |  |
| precipitation_rate | 降水率（从 2025/01/15 起可用）。 | 27830 |  |
| haines_index | 海恩斯指数（从 2025/01/15 起可用）。 | 27830 |  |
| ventilation_rate | 通风率（从 2025/01/15 起可用）。 | 27830 |  |
| total_cloud_cover_entire_atmosphere | 整个大气的总云量（先前仅对 forecast_hours > 0 的资产可用，但从 2025/01/15 起对 forecast_hours == 0 的资产也可用）。 | 27830 |  |
| downward_shortwave_radiation_flux | 向下短波辐射通量（仅对 forecast_hours > 0 的资产）。 | 27830 |  |
| downward_longwave_radiation_flux | 向下长波辐射通量（从 2025/01/15 起可用，但仅对 forecast_hours > 0 的资产）。 | 27830 |  |
| upward_shortwave_radiation_flux | 向上短波辐射通量（从 2025/01/15 起可用，但仅对 forecast_hours > 0 的资产）。 | 27830 |  |
| upward_longwave_radiation_flux | 向上长波辐射通量（从 2025/01/15 起可用，但仅对 forecast_hours > 0 的资产）。 | 27830 |  |
| planetary_boundary_layer_height | 行星边界层高度（从 2025/01/15 起可用）。 | 27830 |  |

## 能拿来做什么

- 天气预报应用
- 数值模式分析
- 天气研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/GFS0P25');
```

- 数据集编号（Earth Engine ID）：`NOAA/GFS0P25`
- 提供方：NOAA/NCEP/EMC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25

## 许可与引用

- 许可：proprietary
- 关键词：climate, cloud, emc, flux, forecast, geophysical, gfs, humidity, ncep, noaa, precipitation, radiation, temperature, vapor, weather, weather-and-climate, wind
- 数据引用：Alpert, J., 2006 Sub-Grid Scale Mountain Blocking at NCEP, 20th Conf.
WAF/16 Conf. NWP P2.4.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
