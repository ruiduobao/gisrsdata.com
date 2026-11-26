---
title: "MOD08_M3.006 Terra 气溶胶云水汽臭氧月产品全球 1 度 CMG（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/93d0522c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "geophysical"
  - "global"
  - "mod08"
  - "mod08-m3"
  - "modis"
  - "monthly"
  - "nasa"
  - "temperature"
  - "terra"
  - "usgs"
---

# MOD08_M3.006 Terra 气溶胶云水汽臭氧月产品全球 1 度 CMG（已弃用）

英文原名：MOD08_M3.006 Terra Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]

## 这是什么数据

MOD08_M3 V6 是一个大气全球产品，包含大气参数的月度 1 × 1 度格网平均值。这些参数与大气气溶胶颗粒属性、总臭氧负荷、大气水汽、云光学与物理属性以及大气稳定度指数相关。该产品还提供平均值、标准差、QA 加权统计、对数正态分布、不确定性估计以及满足某种条件的像元比例统计。以下是波段的子集，完整列表见 [MOD08 波段列表](https://developers.google.com/earth-engine/MOD08_bands.html)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2018 年；分辨率：1 度（约 111,320 米）。
- 时间范围：2000-03-01 至 2018-04-01

## 分辨率与规格

- 空间分辨率：约 111,320 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Aerosol_Optical_Depth_Land_Ocean_Mean_Mean | 海洋（最佳）与陆地（校正）两者在 0.55 微米的气溶胶光学厚度：日平均的平均值。 | 111320 |  |
| Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean | 海洋（最佳）与陆地（校正）两者在 0.55 微米的气溶胶光学厚度：日标准差的平均值。 | 111320 |  |
| Aerosol_Optical_Depth_Land_QA_Mean_Mean_470 | 0.47 微米的校正气溶胶光学深度（陆地）：三级 QA 加权平均的平均值。 | 111320 |  |
| Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470 | 0.47 微米的校正气溶胶光学深度（陆地）：三级加权 QA 标准差的平均值。 | 111320 |  |
| Cirrus_Fraction_SWIR_FMean | 卷云面积比例：日比例的平均值。 | 111320 |  |
| Cirrus_Fraction_SWIR_FStd | 卷云面积比例：日比例的标准差。 | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Mean_Mean | 液态水云光学厚度：日对数平均的平均值。 | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean | 液态水云光学厚度：日对数标准差的平均值。 | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Mean_Uncertainty | 液态水云光学厚度：由日绝对不确定性估计推导的多日绝对不确定性估计。 | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty | 液态水云光学厚度：由日绝对对数不确定性估计推导的多日绝对对数不确定性估计。 | 111320 |  |

## 能拿来做什么

- 大气参数与气候研究
- 云与气溶胶分析
- 臭氧与水汽监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD08_M3');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD08_M3`
- 提供方：NASA LAADS DAAC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD08_M3
* [User's Guide](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/L3_ATBD_C6_C61_2019_02_20.pdf)
* [Science Data Product Software Documentation](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/L3_C61_Changes_v2.pdf)
* [MYD08_M3 product description](https://modis-atmos.gsfc.nasa.gov/products/monthly)
* [File specification document](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/MOD08_M3_fs_3045.txt)

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, geophysical, global, mod08, mod08-m3, modis, monthly, nasa, temperature, terra, usgs, weather-and-climate
- 数据引用：Platnick, S., M. King, P. Hubanks, 2015. MODIS Atmosphere L3 Monthly
Product. NASA MODIS Adaptive Processing System, Goddard Space Flight
Center, [doi:10.5067/MODIS/MOD08_M3.006](https://doi.org/10.5067/MODIS/MOD08_M3.006)

- DOI：10.5067/MODIS/MOD08_M3.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]](/pages/2dcc3bae/)
- [MYD08_M3.006 Aqua Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]](/pages/6fa8c555/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
