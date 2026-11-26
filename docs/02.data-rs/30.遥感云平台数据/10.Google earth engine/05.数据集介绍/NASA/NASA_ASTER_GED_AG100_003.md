---
title: "AG100：ASTER 全球发射率数据集 100 米 V003"
date: 2026-11-03 12:00:00
permalink: /pages/3510f165/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aster"
  - "caltech"
  - "elevation"
  - "emissivity"
  - "ged"
  - "geophysical"
  - "infrared"
  - "jpl"
  - "lst"
  - "nasa"
  - "ndvi"
  - "satellite-imagery"
---

# AG100：ASTER 全球发射率数据集 100 米 V003

英文原名：AG100: ASTER Global Emissivity Dataset 100-meter V003

## 这是什么数据

高级星载热发射与反射辐射计全球发射率数据库（ASTER-GED）由美国国家航空航天局（NASA）喷气推进实验室（JPL）、加州理工学院开发。本产品包括全部 5 个 ASTER 热红外波段的平均发射率与标准差、平均地表温度（LST）与标准差、重采样的 ASTER GDEM、陆地-水体掩膜、平均归一化差值植被指数（NDVI）与标准差以及观测计数。

ASTER-GED 地表温度与发射率（LST&E）使用 ASTER 温度发射率分离（TES）算法结合水汽缩放（WVS）大气校正方法生成，使用 MODIS MOD07 大气廓线与 MODTRAN 5.2 辐射传输模型。

本产品源自所有可用 ASTER 数据（2000–2008）的晴空像元。

[用户指南](https://lpdaac.usgs.gov/documents/120/ASTERGED_User_Guide_V3.pdf)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2008 年；分辨率：100 米。
- 时间范围：2000-01-01 至 2008-12-31

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| emissivity_band10 | 波段 10 平均值。 | 100 |  |
| emissivity_band11 | 波段 11 平均值。 | 100 |  |
| emissivity_band12 | 波段 12 平均值。 | 100 |  |
| emissivity_band13 | 波段 13 平均值。 | 100 |  |
| emissivity_band14 | 波段 14 平均值。 | 100 |  |
| emissivity_sdev_band10 | 波段 10 标准差。 | 100 |  |
| emissivity_sdev_band11 | 波段 11 标准差。 | 100 |  |
| emissivity_sdev_band12 | 波段 12 标准差。 | 100 |  |
| emissivity_sdev_band13 | 波段 13 标准差。 | 100 |  |
| emissivity_sdev_band14 | 波段 14 标准差。 | 100 |  |
| temperature | 温度平均值。 | 100 |  |
| temperature_sdev | 温度标准差。 | 100 |  |
| ndvi | NDVI 平均值。 | 100 |  |
| ndvi_sdev | NDVI 标准差。 | 100 |  |
| elevation | ASTER 全球数字高程模型 V002。 | 100 |  |
| land_water_map | 陆地水体图。 | 100 |  |
| num_obs | 观测数。 | 100 |  |

## 能拿来做什么

- 地表温度与发射率反演
- 热红外遥感研究
- 气候与地表过程建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('NASA/ASTER_GED/AG100_003');
```

- 数据集编号（Earth Engine ID）：`NASA/ASTER_GED/AG100_003`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ASTER_GED_AG100_003

## 许可与引用

- 许可：proprietary
- 关键词：aster, caltech, elevation, emissivity, ged, geophysical, infrared, jpl, lst, nasa, ndvi, satellite-imagery, temperature, thermal
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/COMMUNITY/ASTER_GED/AG100.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
