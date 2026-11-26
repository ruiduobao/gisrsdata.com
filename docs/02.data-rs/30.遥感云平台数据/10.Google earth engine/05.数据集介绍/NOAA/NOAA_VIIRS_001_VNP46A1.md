---
title: "VNP46A1：VIIRS 逐日格网日夜波段 500 米经纬线性网格夜间产品"
date: 2026-11-03 12:00:00
permalink: /pages/89a1d68e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "dnb"
  - "nasa"
  - "noaa"
  - "population"
  - "viirs"
---

# VNP46A1：VIIRS 逐日格网日夜波段 500 米经纬线性网格夜间产品

英文原名：VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night

## 这是什么数据

Suomi 国家极轨伙伴（SNPP）可见红外成像辐射计套件（VIIRS）搭载日夜波段（DNB）传感器，提供适用于地球系统科学与应用的全球逐日夜间可见光与近红外（NIR）光测量。VIIRS DNB 在弱光条件下的超高灵敏度，使我们能够生成一套新的科学质量夜间产品，与上一代国防气象卫星计划/业务线扫描系统（DMSP/OLS）夜间灯光影像产品相比，传感器分辨率与定标有实质改进。

VNP46A1 是逐日、大气顶、传感器处夜间辐射产品，称为 VIIRS/NPP 逐日格网日夜波段 15 弧秒经纬线性网格夜间产品。该产品包含 26 个科学数据集（SDS），包括传感器辐射、天顶与方位角（传感器、太阳与月球）、云掩膜标志、时间、短波红外辐射、亮温、VIIRS 质量标志、月相角与月球照明分量。它还提供云掩膜、VIIRS 中等分辨率波段 M10、M11、M12、M13、M15、M16 与 DNB 专属的质量标志（QF）信息。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2012 年至 2025 年（逐日）；分辨率：500 米。
- 时间范围：2012-01-19 至 2025-01-02

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BrightnessTemperature_M12 | 波段 M12 的亮温 | 500 |  |
| BrightnessTemperature_M13 | 波段 M13 的亮温 | 500 |  |
| BrightnessTemperature_M15 | 波段 M15 的亮温 | 500 |  |
| BrightnessTemperature_M16 | 波段 M16 的亮温 | 500 |  |
| DNB_At_Sensor_Radiance_500m | 传感器处 DNB 辐射 | 500 |  |
| Glint_Angle | 月球耀斑角 | 500 |  |
| Granule | 所选颗粒数 | 500 |  |
| Lunar_Zenith | 月球天顶角 | 500 |  |
| Lunar_Azimuth | 月球方位角 | 500 |  |
| Moon_Illumination_Fraction | 月球照明分量 | 500 |  |
| Moon_Phase_Angle | 月相角 | 500 |  |
| QF_Cloud_Mask | 云掩膜质量标志 | 500 |  |
| QF_DNB | DNB 质量标志 | 500 |  |
| QF_VIIRS_M10 | 波段 M10 的质量标志 | 500 |  |
| QF_VIIRS_M11 | 波段 M11 的质量标志 | 500 |  |
| QF_VIIRS_M12 | 波段 M12 的质量标志 | 500 |  |
| QF_VIIRS_M13 | 波段 M13 的质量标志 | 500 |  |
| QF_VIIRS_M15 | 波段 M15 的质量标志 | 500 |  |
| QF_VIIRS_M16 | 波段 M16 的质量标志 | 500 |  |
| Radiance_M10 | 波段 M10 的辐射 | 500 |  |
| Radiance_M11 | 波段 M11 的辐射 | 500 |  |
| Sensor_Azimuth | 传感器方位角 | 500 |  |
| Sensor_Zenith | 传感器天顶角 | 500 |  |
| Solar_Azimuth | 太阳方位角 | 500 |  |
| Solar_Zenith | 太阳天顶角 | 500 |  |
| UTC_Time | UTC 时间 | 500 |  |

## 能拿来做什么

- 做夜间灯光原始辐射的精细分析，支撑社会经济与人口研究。
- 监测夜间光污染与城市扩张。
- 为停电、灾害等事件提供夜间光变化证据。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP46A1');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP46A1`
- 提供方：NASA LAADS DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP46A1
* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A1/)

## 许可与引用

- 许可：proprietary
- 关键词：daily, dnb, nasa, noaa, population, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP46A1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)
- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
