---
title: "MYDOCGA.006 Aqua 海洋反射率日产品全球 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/8cb2175e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "global"
  - "modis"
  - "mydocga"
  - "nasa"
  - "oceans"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
  - "usgs"
---

# MYDOCGA.006 Aqua 海洋反射率日产品全球 1 公里

英文原名：MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km

## 这是什么数据

MYDOCGA V6 海洋反射率产品由 Aqua MODIS 波段 8–16 的 1 公里反射率数据组成。该产品被称为海洋反射率，因为波段 8–16 主要用于生产海洋产品，但这不是一个海洋产品，因为所生产的瓦片是陆地瓦片。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2023 年；分辨率：1 公里。
- 时间范围：2002-07-04 至 2023-02-25

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | 每个像元的观测数。 | 1000 |  |
| sur_refl_b08 | MODIS 波段 8 地表反射率。 | 1000 | 405-420nm |
| sur_refl_b09 | MODIS 波段 9 地表反射率。 | 1000 | 438-448nm |
| sur_refl_b10 | MODIS 波段 10 地表反射率。 | 1000 | 483-493nm |
| sur_refl_b11 | MODIS 波段 11 地表反射率。 | 1000 | 526-536nm |
| sur_refl_b12 | MODIS 波段 12 地表反射率。 | 1000 | 546-556nm |
| sur_refl_b13 | MODIS 波段 13 地表反射率。 | 1000 | 662-672nm |
| sur_refl_b14 | MODIS 波段 14 地表反射率。 | 1000 | 673-683nm |
| sur_refl_b15 | MODIS 波段 15 地表反射率。 | 1000 | 743-753nm |
| sur_refl_b16 | MODIS 波段 16 地表反射率。 | 1000 | 862-877nm |
| QC_b8_15_1km | MODIS 波段 8–15 的波段质量。 | 1000 |  |
| QC_b16_1km | MODIS 波段 16 的波段质量。 | 1000 |  |
| orbit_pnt | 指向每次观测轨道的指针。 | 1000 |  |
| granule_pnt | 指向每次观测颗粒的指针。 | 1000 |  |

## 能拿来做什么

- 海洋反射率分析
- 海洋光学研究
- 近岸水体监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MYDOCGA');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MYDOCGA`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYDOCGA
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYDOCGA)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, global, modis, mydocga, nasa, oceans, reflectance, satellite-imagery, sr, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYDOCGA.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MODOCGA.006 Terra Ocean Reflectance Daily Global 1km](/pages/c8a03259/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)
- [GCOM-C/SGLI 三级叶绿素 a 浓度产品（V1）](/pages/9e90afdc/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
