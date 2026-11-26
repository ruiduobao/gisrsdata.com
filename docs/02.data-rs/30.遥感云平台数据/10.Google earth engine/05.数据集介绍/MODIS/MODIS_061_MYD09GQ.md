---
title: "MYD09GQ.061 Aqua 地表反射率日产品全球 250 米"
date: 2026-11-03 12:00:00
permalink: /pages/05a2b721/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "global"
  - "modis"
  - "myd09gq"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "usgs"
---

# MYD09GQ.061 Aqua 地表反射率日产品全球 250 米

英文原名：MYD09GQ.061 Aqua Surface Reflectance Daily Global 250m

## 这是什么数据

MODIS 地表反射率产品提供地表光谱反射率的估计，如同在没有大气散射或吸收的情况下在地面测量的那样。低级数据已对大气气体与气溶胶做了校正。MYD09GQ 版本 6.1 在正弦投影的每日格网 L2G 产品中以 250 米分辨率提供波段 1 与 2，包括一个 QC 与五个观测层。本产品旨在与存储重要质量与观测几何信息的 MYD09GA 结合使用。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：250 米。
- 时间范围：2002-07-04 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | 每个 250 米像元的观测数。 | 250 |  |
| sur_refl_b01 | 地表反射率波段 1。 | 250 | 620-670nm |
| sur_refl_b02 | 波段 2 的地表反射率。 | 250 | 841-876nm |
| QC_250m | 地表反射率质量保证。 | 250 |  |
| obscov | 观测覆盖百分比。 | 250 |  |
| iobs_res | 观测编号。 | 250 |  |
| orbit_pnt | 轨道指针。 | 250 |  |
| granule_pnt | 颗粒指针。 | 250 |  |

## 能拿来做什么

- 地表反射率与土地覆盖分析
- 植被与物候监测
- 大气校正研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD09GQ');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD09GQ`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD09GQ
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD09GQ)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, global, modis, myd09gq, nasa, satellite-imagery, sr, surface-reflectance, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09GQ.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
