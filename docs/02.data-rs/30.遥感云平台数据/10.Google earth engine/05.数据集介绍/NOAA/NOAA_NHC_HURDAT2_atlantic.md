---
title: "NOAA NHC HURDAT2 Atlantic Hurricane Catalog"
date: 2026-11-03 12:00:00
permalink: /pages/8e9e1c36/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "hurricane"
  - "nhc"
  - "noaa"
  - "table"
  - "weather"
  - "weather-and-climate"
---

# NOAA NHC HURDAT2 Atlantic Hurricane Catalog

## 数据集简介

Hurricane best track database (HURDAT2).

Atlantic basin 1851-2018.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/NHC/HURDAT2/atlantic`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：NOAA NHC、Google Earth Engine
- 时间范围：1851-06-25 至 2018-11-04
- 许可：proprietary
- 关键词：hurricane, nhc, noaa, table, weather, weather-and-climate

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| seq | DOUBLE | ATCF cyclone number for that year |
| name | STRING | Hurricane name.  e.g. "ALEX" |
| datetime | STRING | Observation time in UTC. Format is YYYY-MM-DDTHH:MM:SS. |
| record_id | STRING | Single letter desinating a specific event in a hurricane track.  An empty string if no code.  - C - Closest approach to a coast not followed by a landfall - G - Genesis - I - An intensity peak in terms of both pressure and wind - L - Landfall (center of system crossing a coastline) - P - Minimum in central pressure - R - Provides additional detail on the intensity of the cyclone when rapid changes are underway - S - Change of status of the system - T - Provides additional detail on the track (position) of the cyclone - W - Maximum sustained wind speed  |
| status | STRING | Status of system:  - DB - Disturbance (of any intensity) - ET - Unknown.  The only occurrence is in HARVEY. - EX - Extratropical cyclone (of any intensity) - HU - Tropical cyclone of hurricane intensity (> 64 knots) - LO - A low that is neither a tropical cyclone, a subtropical cyclone, nor an extratropical cyclone (of any intensity) - SD - Subtropical cyclone of subtropical depression intensity (< 34 knots) - SS - Subtropical cyclone of subtropical storm intensity (> 34 knots) - TD - Tropical cyclone of tropical depression intensity (< 34 knots) - TS - Tropical cyclone of tropical storm intensity (34-63 knots) - WV - Tropical Wave (of any intensity)  |
| max_wind_kts | DOUBLE | Maximum wind speed |
| min_pressure | DOUBLE | Minimum pressure |
| numEntries | DOUBLE | Number of points for a particular hurricane |
| radii_ne_34kt | DOUBLE | 34 kt wind radii maximum extent in northeastern quadrant |
| radii_se_34kt | DOUBLE | 34 kt wind radii maximum extent in southeastern quadrant |
| radii_sw_34kt | DOUBLE | 34 kt wind radii maximum extent in southwestern quadrant |
| radii_nw_34kt | DOUBLE | 34 kt wind radii maximum extent in northwestern quadrant |
| radii_ne_50kt | DOUBLE | 50 kt wind radii maximum extent in northeastern quadrant |
| radii_se_50kt | DOUBLE | 50 kt wind radii maximum extent in southeastern quadrant |
| radii_sw_50kt | DOUBLE | 50 kt wind radii maximum extent in southwestern quadrant |
| radii_nw_50kt | DOUBLE | 50 kt wind radii maximum extent in northwestern quadrant |
| radii_ne_64kt | DOUBLE | 64 kt wind radii maximum extent in northeastern quadrant |
| radii_se_64kt | DOUBLE | 64 kt wind radii maximum extent in southeastern quadrant |
| radii_sw_64kt | DOUBLE | 64 kt wind radii maximum extent in southwestern quadrant |
| radii_nw_64kt | DOUBLE | 64 kt wind radii maximum extent in northwestern quadrant |
| basin | STRING | Ocean basin.  Always "AL" for Atlantic. |
| id | STRING | Code for a particular hurricane.  "AL" followed by a 2 digit cyclone number followed by a 4-digit year.  e.g. "AL162018"  |
| year | DOUBLE | Year in which the hurricane occurred |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('NOAA/NHC/HURDAT2/atlantic');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NHC_HURDAT2_atlantic

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
