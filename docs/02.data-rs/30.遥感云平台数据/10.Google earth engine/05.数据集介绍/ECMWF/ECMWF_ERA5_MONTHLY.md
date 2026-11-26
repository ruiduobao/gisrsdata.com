---
title: "ERA5 月聚合数据 — ECMWF 气候再分析"
date: 2026-11-03 12:00:00
permalink: /pages/87085b9b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "copernicus"
  - "dewpoint"
  - "ecmwf"
  - "era5"
  - "precipitation"
  - "pressure"
  - "reanalysis"
  - "surface"
  - "temperature"
  - "weather-and-climate"
  - "wind"
---

# ERA5 月聚合数据 — ECMWF 气候再分析

英文原名：ERA5 Monthly Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service

## 这是什么数据

ERA5 是 ECMWF 第五代全球气候大气再分析。再分析利用物理规律，将模式数据与来自世界各地的观测结合成全球完整、一致的数据集。ERA5 取代了其前身 ERA-Interim 再分析。

ERA5 MONTHLY 提供七个 ERA5 气候再分析参数的逐月聚合值：2 米气温、2 米露点温度、总降水、平均海平面气压、地表气压、10 米风的 u 分量与 10 米风的 v 分量。此外，还基于逐小时 2 米气温数据计算了逐月最低与最高 2 米气温。逐月总降水以月合计给出，其余参数均为月平均。

ERA5 数据自 1940 年起提供至距实时三个月，本 EE 数据目录中的版本自 1979 年起提供。更多信息与更多 ERA5 大气参数见[哥白尼气候数据存储](https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-single-levels-monthly-means?tab=overview)。

提供方注：月聚合值基于各参数的 ERA5 逐小时值计算。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：1979-01-01 至 2020-06-01
- 更新节奏：逐月

## 分辨率与规格

- 空间分辨率：约 27,830 米（约 31 公里格距）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean_2m_air_temperature | 2 米高度气温平均值（月平均） | 27830 |  |
| minimum_2m_air_temperature | 2 米高度气温最小值（月最小） | 27830 |  |
| maximum_2m_air_temperature | 2 米高度气温最大值（月最大） | 27830 |  |
| dewpoint_2m_temperature | 2 米高度露点温度（月平均） | 27830 |  |
| total_precipitation | 总降水（月合计） | 27830 |  |
| surface_pressure | 地表气压（月平均） | 27830 |  |
| mean_sea_level_pressure | 平均海平面气压（月平均） | 27830 |  |
| u_component_of_wind_10m | 10 米风 u 分量（月平均） | 27830 |  |
| v_component_of_wind_10m | 10 米风 v 分量（月平均） | 27830 |  |

## 能拿来做什么

- 月尺度气候监测与异常分析
- 气温、降水的长序列变化研究
- 区域气候评估的月值底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ECMWF/ERA5/MONTHLY');
```

- 数据集编号（Earth Engine ID）：`ECMWF/ERA5/MONTHLY`
- 提供方：ECMWF / Copernicus Climate Change Service、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_MONTHLY

## 许可与引用

- 许可：proprietary
- 关键词：climate, copernicus, dewpoint, ecmwf, era5, precipitation, pressure, reanalysis, surface, temperature, weather-and-climate, wind
- 数据引用：Copernicus Climate Change Service (C3S) (2017): ERA5: Fifth generation of ECMWF atmospheric reanalyses of the global climate.
Copernicus Climate Change Service Climate Data Store (CDS), (date of access), [https://cds.climate.copernicus.eu/cdsapp#!/home](https://cds.climate.copernicus.eu/cdsapp#!/home)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)
- [CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based)](/pages/11a19c2e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
