---
title: "MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG"
date: 2026-11-03 12:00:00
permalink: /pages/f900381f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "emissivity"
  - "global"
  - "lst"
  - "monthly"
  - "nasa"
  - "surface-temperature"
  - "terra"
  - "usgs"
  - "weather-and-climate"
---

# MOD21C3.061 Terra Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG

## 数据集简介

The MOD21C3 dataset is a monthly composite LST product that uses an
algorithm based on a simple averaging method. The algorithm calculates the
average from all the cloud free MOD21A1D and MOD21A1N daily acquisitions
from the 8-day period. Unlike the MOD21A1 data sets where the daytime and
nighttime acquisitions are separate products, the MOD21A2 contains both
daytime and nighttime acquisitions. The LST, Quality Control (QC), view
zenith angle, and viewing time have separate day and night bands, while the
values for the MODIS emissivity bands 29, 31, and 32 are the average of both
the nighttime and daytime acquisitions.

Note that scale factors and offsets described in the MODIS documentation
for MOD21C3 bands are already applied to assets ingested into Earth
Engine.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1398/MOD21_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1399/MOD21_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD21C3)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD21C3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-09-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：emissivity, global, lst, monthly, nasa, surface-temperature, terra, usgs, weather-and-climate

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
| Clear_sky_days | Bitmap of Clear Sky Days (1 = clear, LSB = 1st day) | 1000 |  |
| Clear_sky_nights | Bitmap of Clear Sky Nights (1 = clear, LSB = 1st day) | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD21C3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD21C3
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD21C3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
