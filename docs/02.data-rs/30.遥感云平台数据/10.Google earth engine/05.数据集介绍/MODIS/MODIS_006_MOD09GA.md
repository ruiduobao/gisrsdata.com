---
title: "MOD09GA.006 Terra 地表反射率日产品全球 1 公里与 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/f24617c1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "global"
  - "mod09ga"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "terra"
  - "usgs"
---

# MOD09GA.006 Terra 地表反射率日产品全球 1 公里与 500 米（已弃用）

英文原名：MOD09GA.006 Terra Surface Reflectance Daily Global 1km and 500m [deprecated]

## 这是什么数据

MODIS 地表反射率产品提供地表光谱反射率的估计，如同在没有大气散射或吸收的情况下在地面水平测得。低层数据针对大气气体与气溶胶做了校正。MOD09GA 版本 6 在正弦投影的每日格网 L2G 产品中提供波段 1–7，包括 500 米反射率值与 1 公里观测和地理定位统计。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：500 米与 1 公里。
- 时间范围：2000-02-24 至 2023-02-17

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations_1km | 每个 1K 像元的观测数。 | 1000 |  |
| state_1km | 反射率数据状态 QA。 | 1000 |  |
| SensorZenith | 传感器天顶角。 | 1000 |  |
| SensorAzimuth | 传感器方位角。 | 1000 |  |
| Range | 到传感器的距离。 | 1000 |  |
| SolarZenith | 太阳天顶角。 | 1000 |  |
| SolarAzimuth | 太阳方位角。 | 1000 |  |
| gflags | 地理定位标志。 | 1000 |  |
| orbit_pnt | 轨道指针。 | 1000 |  |
| granule_pnt | 颗粒指针。 | 1000 |  |
| num_observations_500m | 观测数。 | 500 |  |
| sur_refl_b01 | 波段 1 的地表反射率。 | 500 | 620-670nm |
| sur_refl_b02 | 波段 2 的地表反射率。 | 500 | 841-876nm |
| sur_refl_b03 | 波段 3 的地表反射率。 | 500 | 459-479nm |
| sur_refl_b04 | 波段 4 的地表反射率。 | 500 | 545-565nm |
| sur_refl_b05 | 波段 5 的地表反射率。 | 500 | 1230-1250nm |
| sur_refl_b06 | 波段 6 的地表反射率。 | 500 | 1628-1652nm |
| sur_refl_b07 | 波段 7 的地表反射率。 | 500 | 2105-2155nm |
| QC_500m | 地表反射率质量保证。 | 500 |  |
| obscov_500m | 观测覆盖百分比。 | 500 |  |
| iobs_res | 较粗网格中的观测号。 | 500 |  |
| q_scan | 250 米扫描值信息。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MOD09GA');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD09GA`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09GA
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD09GA)

## 许可与引用

- 许可：proprietary
- 关键词：daily, global, mod09ga, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09GA.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
