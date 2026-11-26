---
title: "VNP09H1：VIIRS 地表反射率 8 天 L3 全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/59f40ab0/
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

# VNP09H1：VIIRS 地表反射率 8 天 L3 全球 500 米 [已弃用]

英文原名：VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m [deprecated]

## 这是什么数据

8 天可见红外成像辐射计套件（VIIRS）地表反射率（VNP09H1）第 1 版合成产品，提供 Suomi 国家极轨伙伴（Suomi NPP）VIIRS 传感器三个成像波段（I1、I2、I3）在标称 500 米分辨率（约 463 米）下的陆地表面反射率估算。500 米数据集由 L2 输入产品的原生 375 米 VIIRS 分辨率重采样得到。数据经大气条件校正，如臭氧、水汽等分子气体的影响以及大气气溶胶的影响。每个像元代表 8 天期内最佳的 2G 级观测，按高观测覆盖、低传感器角度、无云或云影、气溶胶载荷等标准选取。除三个反射率波段外，本产品还包括状态质量保证（QA）层与反射率波段质量层。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2012 年至 2024 年（8 天合成）；分辨率：500 米。
- 时间范围：2012-01-19 至 2024-06-09

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SurfReflect_I1 | 500 米地表反射率波段 I1 | 500 |  |
| SurfReflect_I2 | 500 米地表反射率波段 I2 | 500 |  |
| SurfReflect_I3 | 500 米地表反射率波段 I3 | 500 |  |
| SurfReflect_QC_500m | 地表反射率波段质量控制（QC） | 500 |  |
| SurfReflect_State_500m | 地表反射率状态质量保证（QA） | 500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP09H1');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP09H1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP09H1
* [User's Guide](https://lpdaac.usgs.gov/documents/123/VNP09_User_Guide_V1.1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp09h1v001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 许可与引用

- 许可：proprietary
- 关键词：daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP09H1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VNP43IA1：BRDF/反照率模型参数逐日 L3 全球 500 米 SIN 网格](/pages/3e009701/)
- [VNP43IA2：BRDF/反照率质量逐日 L3 全球 500 米 SIN 网格](/pages/81521072/)
- [VNP09GA：VIIRS 地表反射率逐日 500 米与 1 公里 [已弃用]](/pages/940b557d/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
