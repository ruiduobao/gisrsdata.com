---
title: "MCD43A2.006 MODIS BRDF-反照率质量日产品 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/3081c095/
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
  - "quality"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A2.006 MODIS BRDF-反照率质量日产品 500 米（已弃用）

英文原名：MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]

## 这是什么数据

MCD43A2 V6 双向反射分布函数与反照率（BRDF/反照率）质量数据集是一个 500 米日 16 天产品。它包含对应的 16 天 MCD43A3 反照率与 MCD43A4 天底-BRDF（NBAR）产品的全部质量信息。

MCD43A2 包含 MODIS 陆地波段 1–7 的单波段质量与观测信息，以及总体 BRDF/反照率质量信息。

更多信息见[数据集用户指南](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43a2_albedo_product)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：500 米。
- 时间范围：2000-02-24 至 2023-02-10

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Snow_BRDF_Albedo | 反演的无雪或有雪 BRDF/反照率。 | 500 |  |
| BRDF_Albedo_Platform | BRDF 反照率平台信息。 | 500 |  |
| BRDF_Albedo_LandWaterType | 陆地/水体类型。 | 500 |  |
| BRDF_Albedo_LocalSolarNoon | 当地太阳正午的太阳天顶角。 | 500 |  |
| BRDF_Albedo_ValidObs_Band1 | 波段 1 的有效观测。 | 500 |  |
| BRDF_Albedo_ValidObs_Band2 | 波段 2 的有效观测。（与波段 1 相同的比特含义） | 500 |  |
| BRDF_Albedo_ValidObs_Band3 | 波段 3 的有效观测。（与波段 1 相同的比特含义） | 500 |  |
| BRDF_Albedo_ValidObs_Band4 | 波段 4 的有效观测。（与波段 1 相同的比特含义） | 500 |  |
| BRDF_Albedo_ValidObs_Band5 | 波段 5 的有效观测。（与波段 1 相同的比特含义） | 500 |  |
| BRDF_Albedo_ValidObs_Band6 | 波段 6 的有效观测。（与波段 1 相同的比特含义） | 500 |  |
| BRDF_Albedo_ValidObs_Band7 | 波段 7 的有效观测。（与波段 1 相同的比特含义） | 500 |  |
| BRDF_Albedo_Band_Quality_Band1 | 波段 1 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Band_Quality_Band2 | 波段 2 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Band_Quality_Band3 | 波段 3 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Band_Quality_Band4 | 波段 4 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Band_Quality_Band5 | 波段 5 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Band_Quality_Band6 | 波段 6 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Band_Quality_Band7 | 波段 7 的 BRDF 反演信息。 | 500 |  |
| BRDF_Albedo_Uncertainty | BRDF 反演信息。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A2
* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A2)

## 许可与引用

- 许可：proprietary
- 关键词：albedo, brdf, daily, global, modis, nasa, quality, reflectance, satellite-imagery, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)
- [MCD43C3.006 BRDF/Albedo Daily L3 0.05 Deg CMG [deprecated]](/pages/95ebbb0d/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
