---
title: "VNP09H1：VIIRS 地表反射率 8 天三级全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/862913cc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "nasa"
  - "noaa"
  - "npp"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
  - "viirs"
---

# VNP09H1：VIIRS 地表反射率 8 天三级全球 500 米

英文原名：VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m

## 这是什么数据

8 天可见光红外成像辐射计套件（VIIRS）地表反射率（VNP09H1）版本 1 合成产品提供来自 Suomi 国家极轨伙伴（Suomi NPP）VIIRS 传感器的陆地地表反射率估计，为三个影像波段（I1、I2、I3），标称 500 米分辨率（约 463 米）。500 米数据集通过重采样二级输入产品中原生 375 米 VIIRS 分辨率导出。数据经大气条件校正，如包括臭氧与水汽在内的分子气体的影响，以及大气气溶胶的影响。每个像元表示 8 天时段内最佳可能的二级 G 观测，基于高观测覆盖、低传感器角度、无云或云影以及气溶胶负荷选择。三个反射率波段，本产品包括一个状态质量保证（QA）层与一个反射率波段质量层。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：500 米。
- 时间范围：2012-01-19 至 2026-10-16

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SurfReflect_I1 | 500 米地表反射率波段 I1。 | 500 |  |
| SurfReflect_I2 | 500 米地表反射率波段 I2。 | 500 |  |
| SurfReflect_I3 | 500 米地表反射率波段 I3。 | 500 |  |
| SurfReflect_QC_500m | 地表反射率波段质量控制（QC）。 | 500 |  |
| SurfReflect_State_500m | 地表反射率状态质量保证（QA）。 | 500 |  |

## 能拿来做什么

- 地表反射率监测
- 植被与土地覆盖研究
- VIIRS 数据应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP09H1');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP09H1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP09H1
* [User's Guide]( https://lpdaac.usgs.gov/documents/1657/VNP09_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp09h1v002/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP09H1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km](/pages/f3f78834/)
- [VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid](/pages/217dd9b2/)
- [VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid](/pages/00b89222/)
- [VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid](/pages/86f9040c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
