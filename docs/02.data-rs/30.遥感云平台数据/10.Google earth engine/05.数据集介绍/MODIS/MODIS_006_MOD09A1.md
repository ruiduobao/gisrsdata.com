---
title: "MOD09A1.006 Terra 地表反射率 8 天全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/abe0a2db/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "mod09a1"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "terra"
  - "usgs"
---

# MOD09A1.006 Terra 地表反射率 8 天全球 500 米（已弃用）

英文原名：MOD09A1.006 Terra Surface Reflectance 8-Day Global 500m [deprecated]

## 这是什么数据

MOD09A1 V6 产品提供 Terra MODIS 波段 1–7 在 500 米分辨率的地表光谱反射率估计，并针对气体、气溶胶与瑞利散射等大气条件做了校正。连同七个反射率波段，还有一个质量层与四个观测波段。对每个像元，从 8 天合成内的所有获取中基于高观测覆盖、低视角、无云或云影以及气溶胶负荷选择一个值。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2023-02-10

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | 波段 1 的地表反射率。 | 500 | 620-670nm |
| sur_refl_b02 | 波段 2 的地表反射率。 | 500 | 841-876nm |
| sur_refl_b03 | 波段 3 的地表反射率。 | 500 | 459-479nm |
| sur_refl_b04 | 波段 4 的地表反射率。 | 500 | 545-565nm |
| sur_refl_b05 | 波段 5 的地表反射率。 | 500 | 1230-1250nm |
| sur_refl_b06 | 波段 6 的地表反射率。 | 500 | 1628-1652nm |
| sur_refl_b07 | 波段 7 的地表反射率。 | 500 | 2105-2155nm |
| QA | 地表反射率 500 米波段质量控制标志。 | 500 |  |
| SolarZenith | MODIS 太阳天顶角。 | 500 |  |
| ViewZenith | MODIS 观测天顶角。 | 500 |  |
| RelativeAzimuth | MODIS 相对方位角。 | 500 |  |
| StateQA | 地表反射率 500 米状态标志。 | 500 |  |
| DayOfYear | 像元的年儒略日。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD09A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD09A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09A1
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD09A1)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, global, mod09a1, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
