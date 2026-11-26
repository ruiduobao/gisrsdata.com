---
title: "VNP46A2：VIIRS 月球填补 BRDF 夜间灯光逐日三级全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/8cb4db04/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brdf"
  - "daily"
  - "nasa"
  - "nighttime"
  - "noaa"
  - "population"
  - "viirs"
---

# VNP46A2：VIIRS 月球填补 BRDF 夜间灯光逐日三级全球 500 米

英文原名：VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m

## 这是什么数据

Suomi 国家极轨伙伴（SNPP）可见光红外成像辐射计套件（VIIRS）支持一个昼夜波段（DNB）传感器，提供适合地球系统科学与应用的夜间可见光与近红外（NIR）光的全球逐日测量。VIIRS DNB 在低光条件下的超高灵敏度使我们能生成一套新的科学质量夜间产品，与先前国防气象卫星计划/业务线扫描系统（DMSP/OLS）夜间灯光影像产品时代相比，在传感器分辨率与校准上有实质改进。此类改进使 VIIRS DNB 产品能更好地监测夜间现象的量级与特征，以及人为光排放源。

VNP46A2 是逐日月光与大气校正夜间灯光（NTL）产品的简称，称为 VIIRS/NPP 填补月球 BRDF 调整夜间灯光逐日三级全球 500 米线性经纬格网。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2012 年至 2026 年；分辨率：500 米。
- 时间范围：2012-01-19 至 2026-10-28

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DNB_BRDF_Corrected_NTL | BRDF 校正的 DNB NTL。 | 500 |  |
| Gap_Filled_DNB_BRDF_Corrected_NTL | 填补的 BRDF 校正 DNB NTL。 | 500 |  |
| DNB_Lunar_Irradiance | DNB 月球辐照度。 | 500 |  |
| Latest_High_Quality_Retrieval | 最新高质量 BRDF 校正 DNB 辐射反演。 | 500 |  |
| Mandatory_Quality_Flag | 强制质量标志。 | 500 |  |
| Snow_Flag | 雪盖标志。 | 500 |  |
| QF_Cloud_Mask | 云掩膜的质量标志。 | 500 |  |

## 能拿来做什么

- 夜间灯光监测
- 城市化与人口研究
- 人为光排放分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP46A2');
```

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP46A2`
- 提供方：NASA LAADS DAAC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP46A2
* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)

## 许可与引用

- 许可：proprietary
- 关键词：brdf, daily, nasa, nighttime, noaa, population, viirs
- 数据引用：Román, M.O., Wang, Z., Sun, Q., Kalb, V., Miller, S.D., Molthan, A.,
Schultz, L., Bell, J., Stokes, E.C., Pandey, B. and Seto, K.C., et al.
(2018). NASA's Black Marble nighttime lights product suite.
Remote Sensing of Environment 210, 113-143.
[10.1016/j.rse.2018.03.017](https://doi.org/10.1016/j.rse.2018.03.017)

- DOI：10.5067/VIIRS/VNP46A2.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [DMSP OLS：全球辐射校准夜间灯光版本 4](/pages/a2c92c1d/)
- [DMSP OLS：夜间灯光时间序列版本 4](/pages/65a6304d/)
- [VIIRS 夜间日/夜波段合成第 1 版（月度）](/pages/331f49de/)
- [VIIRS 夜间日/夜波段年度合成 V2.1](/pages/98ca1d9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
