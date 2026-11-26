---
title: "MYD09GQ.006 Aqua 地表反射率日产品全球 250 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/994fe0ed/
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

# MYD09GQ.006 Aqua 地表反射率日产品全球 250 米（已弃用）

英文原名：MYD09GQ.006 Aqua Surface Reflectance Daily Global 250m [deprecated]

## 这是什么数据

MODIS 地表反射率产品提供地表光谱反射率的估计，如同在没有大气散射或吸收的情况下在地面水平测得。低层数据针对大气气体与气溶胶做了校正。MYD09GQ 版本 6 在正弦投影的每日格网 L2G 产品中以 250 米分辨率提供波段 1 与 2，包括一个 QC 与五个观测层。本产品旨在与 MYD09GA 结合使用，重要的质量与观测几何信息存储在后者中。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2023 年；分辨率：250 米。
- 时间范围：2002-07-04 至 2023-02-25

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | 每个 250 米像元的观测数。 | 250 |  |
| sur_refl_b01 | 地表反射率波段 1。 | 250 | 620-670nm |
| sur_refl_b02 | 地表反射率波段 2。 | 250 | 841-876nm |
| QC_250m | 地表反射率质量保证。 | 250 |  |
| obscov | 观测覆盖百分比。 | 250 |  |
| iobs_res | 观测号。 | 250 |  |
| orbit_pnt | 轨道指针。 | 250 |  |
| granule_pnt | 颗粒指针。 | 250 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MYD09GQ');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD09GQ`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GQ
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD09GQ)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, global, modis, myd09gq, nasa, satellite-imagery, sr, surface-reflectance, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09GQ.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
