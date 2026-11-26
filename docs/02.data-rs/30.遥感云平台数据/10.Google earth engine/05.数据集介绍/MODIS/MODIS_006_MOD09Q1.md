---
title: "MOD09Q1.006 Terra 地表反射率 8 天全球 250 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/0501d8ff/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "mod09q1"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "terra"
  - "usgs"
---

# MOD09Q1.006 Terra 地表反射率 8 天全球 250 米（已弃用）

英文原名：MOD09Q1.006 Terra Surface Reflectance 8-Day Global 250m [deprecated]

## 这是什么数据

MOD09Q1 产品提供波段 1 与 2 在 250 米分辨率的地表光谱反射率估计，并针对气体、气溶胶与瑞利散射等大气条件做了校正。连同两个反射率波段，还包括一个质量层。对每个像元，从 8 天合成内的所有获取中基于高观测覆盖、低视角、无云或云影以及气溶胶负荷选择一个值。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：250 米。
- 时间范围：2000-02-18 至 2023-02-10

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | 地表反射率波段 1。 | 250 | 620-670nm |
| sur_refl_b02 | 地表反射率波段 2。 | 250 | 841-876nm |
| State | 地表反射率 250 米状态标志。 | 250 |  |
| QA | 地表反射率 250 米波段质量控制标志。 | 250 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD09Q1');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD09Q1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09Q1
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD09Q1)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, global, mod09q1, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09Q1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
