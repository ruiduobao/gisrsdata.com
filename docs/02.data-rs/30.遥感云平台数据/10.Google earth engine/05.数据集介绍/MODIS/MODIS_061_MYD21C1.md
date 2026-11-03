---
title: "MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG"
date: 2026-11-03 12:00:00
permalink: /pages/e25ce455/
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
  - "nasa"
  - "surface-temperature"
  - "usgs"
  - "weather-and-climate"
---

# MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG

## 数据集简介

The MYD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at the
equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded (L2G)
intermediate LST products. The L2G process maps the daily MYD21 swath
granules onto a sinusoidal MODIS grid and stores all observations falling
over a gridded cell for a given day. The MYD21C1 algorithm sorts through
these observations for each cell and estimates the final LST value as an
average from all observations that are cloud free and have good LST&E
accuracies. The daytime average is weighted by the observation coverage for
that cell. Only observations having an observation coverage greater than a
15% threshold are considered. The MYD21C1 product contains the calculated
LST as well as quality control, the three emissivity bands, view zenith
angle, and time of observation.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1398/MOD21_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1399/MOD21_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD21C1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD21C1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-31
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：aqua, daily, emissivity, global, lst, nasa, surface-temperature, usgs, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Count_Day | Count of Daytime Input Values | 1000 |  |
| Count_Night | Count of Nighttime Input Values | 1000 |  |
| QC_Day | Quality Control for Daytime LST and Emissivity | 1000 |  |
| QC_Night | Quality Control for Nighttime LST and Emissivity | 1000 |  |
| LST_Day | Average Daytime Land Surface Temperature | 1000 |  |
| LST_Night | Average Nighttime Land Surface Temperature | 1000 |  |
| LST_Day_err | Root-mean-square-error Daytime Land Surface Temperature | 1000 |  |
| LST_Night_err | Average Nighttime Land Surface Temperature | 1000 |  |
| Day_view_angle | Average Daytime View Zenith Angle | 1000 |  |
| Night_view_angle | Average Nighttime View Zenith Angle | 1000 |  |
| Day_view_time | Average Daytime View Time (UTC) | 1000 |  |
| Night_view_time | Average Nighttime View Time (UTC) | 1000 |  |
| Emis_29_Day | Average Daytime Band 29 Emissivity | 1000 |  |
| Emis_29_Night | Average Nighttime Band 29 Emissivity | 1000 |  |
| Emis_29_Day_err | Root-mean-square-error Daytime Band 29 Emissivity | 1000 |  |
| Emis_29_Night_err | Root-mean-square-error Nighttime Band 29 Emissivity | 1000 |  |
| Emis_31_Day | Average Daytime Band 31 Emissivity | 1000 |  |
| Emis_31_Night | Average Nighttime Band 31 Emissivity | 1000 |  |
| Emis_31_Day_err | Root-mean-square-error Daytime Band 31 Emissivity | 1000 |  |
| Emis_31_Night_err | Root-mean-square-error Nighttime Band 31 Emissivity | 1000 |  |
| Emis_32_Day | Average Daytime Band 32 Emissivity | 1000 |  |
| Emis_32_Night | Average Nighttime Band 32 Emissivity | 1000 |  |
| Emis_32_Day_err | Root-mean-square-error Daytime Band 32 Emissivity | 1000 |  |
| Emis_32_Night_err | Root-mean-square-error Nighttime Band 32 Emissivity | 1000 |  |
| View_Angle | MODIS view zenith angle | 1000 |  |
| Percent_land_in_grid | Percent of Land Detections in Grid Cell | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MYD21C1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD21C1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD21C1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
