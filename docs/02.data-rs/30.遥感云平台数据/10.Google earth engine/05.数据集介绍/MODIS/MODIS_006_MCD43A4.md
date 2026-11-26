---
title: "MCD43A4.006 MODIS 天底 BRDF 调整反射率日产品 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/23f81408/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "brdf"
  - "daily"
  - "global"
  - "modis"
  - "nasa"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A4.006 MODIS 天底 BRDF 调整反射率日产品 500 米（已弃用）

英文原名：MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]

## 这是什么数据

MCD43A4 V6 天底双向反射分布函数调整反射率（NBAR）产品提供 MODIS「陆地」波段 1–7 的 500 米反射率数据。这些数据使用双向反射分布函数调整，以将值建模为如同从天底视角收集。数据基于 16 天反演时段每日生产，影像日期为第 9 天。本产品组合 Terra 与 Aqua 两颗卫星的数据，从 16 天时段中选择最佳代表像元。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：500 米。
- 时间范围：2000-02-24 至 2023-02-10

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Nadir_Reflectance_Band1 | 波段 1 在当地太阳正午的 NBAR。 | 500 | 620-670nm |
| Nadir_Reflectance_Band2 | 波段 2 在当地太阳正午的 NBAR。 | 500 | 841-876nm |
| Nadir_Reflectance_Band3 | 波段 3 在当地太阳正午的 NBAR。 | 500 | 459-479nm |
| Nadir_Reflectance_Band4 | 波段 4 在当地太阳正午的 NBAR。 | 500 | 545-565nm |
| Nadir_Reflectance_Band5 | 波段 5 在当地太阳正午的 NBAR。 | 500 | 1230-1250nm |
| Nadir_Reflectance_Band6 | 波段 6 在当地太阳正午的 NBAR。 | 500 | 1628-1652nm |
| Nadir_Reflectance_Band7 | 波段 7 在当地太阳正午的 NBAR。 | 500 | 2105-2155nm |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | 波段 1的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | 波段 2的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | 波段 3的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | 波段 4的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | 波段 5的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | 波段 6的 BRDF 反照率强制质量。 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | 波段 7的 BRDF 反照率强制质量。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A4');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43A4`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A4)

## 许可与引用

- 许可：proprietary
- 关键词：albedo, brdf, daily, global, modis, nasa, reflectance, satellite-imagery, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A4.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]](/pages/95ebbb0d/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
