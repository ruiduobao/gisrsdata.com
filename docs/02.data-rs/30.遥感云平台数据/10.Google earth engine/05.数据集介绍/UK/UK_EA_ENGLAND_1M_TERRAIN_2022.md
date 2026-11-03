---
title: "England 1m Composite DTM/DSM (Environment Agency)"
date: 2026-11-03 12:00:00
permalink: /pages/365d0f47/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "lidar"
---

# England 1m Composite DTM/DSM (Environment Agency)

## 数据集简介

The LIDAR Composite DTM/DSM is a raster terrain model covering ~99% of
England at 1m spatial resolution, produced by the UK Environment Agency in
2022. The model contains 3 bands of terrain data: a Digital Terrain Model
(DTM), a first return Digital Surface Model (DSM), and a last return DSM.

The DTM is produced from the last or only laser pulse returned to the
sensor. Surface objects are removed from the DSM, using bespoke algorithms
and manual editing of the data, to produce a terrain model of just the
surface. The DTM is derived from a combination of EA Time Stamped archive
and National LIDAR Program surveys, which have been merged and re-sampled
to give the best possible coverage. Where repeat surveys have been
undertaken the newest, best resolution data is used. Where data was
resampled a bilinear interpolation was used before being merged. The 2022
LIDAR Composite contains surveys undertaken between 6th June 2000 and 2nd
April 2022.

The first return DSM is produced from the first or only laser pulse returned
to the sensor and includes heights of objects, such as vehicles, buildings
and vegetation, as well as the terrain surface where the first or only
return was the ground. The first return DSM is derived from data captured as
part of the National LIDAR Program between 11 November 2016 and 5th May
2022. This program divided England into ~300 blocks for survey over
continuous winters from 2016 onwards. These surveys are merged together to
create the first return LIDAR composite using a feathering technique along
the overlaps to remove any small differences in elevation between surveys.
Please refer to the data provider's metadata index catalogs which show for
any location which survey was used in the production of the LIDAR composite.
The first return DSM will not match in coverage or extent of the last return
DSM, as the last return DSM composite is produced from both the National
LIDAR Program and Timeseries surveys.

The last return DSM is produced from the last or only laser pulse returned
to the sensor and includes heights of objects, such as vehicles, buildings
and vegetation, as well as the terrain surface. The last return DTM is
derived from a combination of EA Time Stamped archive and National LIDAR
Program surveys, which have been merged and re-sampled to give the best
possible coverage. Where repeat surveys have been undertaken the newest,
best resolution data is used. Where data was resampled a bilinear
interpolation was used before being merged. The 2022 LIDAR Composite
contains surveys undertaken between 6th June 2000 and 2nd April 2022. Please
refer to the data provider's metadata index catalogs which show for any
location which survey was used in the production of the LIDAR composite.

The data is aligned to the OS National grid and presented in metres,
referenced to Ordinance Survey Newlyn and using the OSTN'15 transformation
method. All individual LIDAR surveys going into the production of the
composites had a vertical accuracy of +/-15cm root-mean-square error.

## 基本信息

- 数据集编号（Earth Engine ID）：`UK/EA/ENGLAND_1M_TERRAIN/2022`
- 数据类型：影像（Image）
- 提供方：UK Environment Agency、Google Earth Engine
- 时间范围：2000-06-06 至 2022-04-02
- 空间分辨率：1 米
- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, lidar

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dtm | Digital Terrain Model | 1 |  |
| dsm_first | First Return Digital Surface Model | 1 |  |
| dsm_last | Last Return Digital Surface Model | 1 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('UK/EA/ENGLAND_1M_TERRAIN/2022');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UK_EA_ENGLAND_1M_TERRAIN_2022

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
