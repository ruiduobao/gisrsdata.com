---
title: "MYD09Q1.061 Aqua 地表反射率 8 天全球 250 米"
date: 2026-11-03 12:00:00
permalink: /pages/97922815/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "global"
  - "modis"
  - "myd09q1"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "usgs"
---

# MYD09Q1.061 Aqua 地表反射率 8 天全球 250 米

英文原名：MYD09Q1.061 Aqua Surface Reflectance 8-Day Global 250m

## 这是什么数据

MYD09Q1 产品提供波段 1 与 2 在 250 米分辨率的地表光谱反射率估计，并已对气体、气溶胶与瑞利散射等大气条件做了校正。连同两个反射率波段，还包括一个质量层。对每个像元，从 8 天合成内的所有获取中基于高观测覆盖、低视角、无云或云影与气溶胶负荷选择一个值。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：250 米。
- 时间范围：2002-07-04 至 2026-10-16

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | 地表反射率波段 1。 | 250 | 620-670nm |
| sur_refl_b02 | 波段 2 的地表反射率。 | 250 | 841-876nm |
| State | 地表反射率 250 米状态标志。 | 250 |  |
| QA | 地表反射率 250 米波段质量控制标志。 | 250 |  |

## 能拿来做什么

- 地表反射率与土地覆盖分析
- 植被与物候监测
- 大气校正研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD09Q1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD09Q1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD09Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD09Q1)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, aqua, global, modis, myd09q1, nasa, satellite-imagery, sr, surface-reflectance, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09Q1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
