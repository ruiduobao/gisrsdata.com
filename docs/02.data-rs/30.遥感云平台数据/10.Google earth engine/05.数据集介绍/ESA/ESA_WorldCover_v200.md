---
title: "ESA WorldCover 10m v200"
date: 2026-11-03 12:00:00
permalink: /pages/08a038e5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "esa"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "sentinel1-derived"
  - "sentinel2-derived"
---

# ESA WorldCover 10m v200

## 数据集简介

The European Space Agency (ESA) WorldCover 10 m 2021 product provides a
global land cover map for 2021 at 10 m resolution based on Sentinel-1 and
Sentinel-2 data.
 The WorldCover product comes with 11 land cover classes and has been
generated in the framework of the ESA WorldCover project, part of the
5th Earth Observation Envelope Programme (EOEP-5) of the European Space
Agency.

See also:

* [ESA WorldCover website](https://esa-worldcover.org)
* [User Manual and Validation Report](https://esa-worldcover.org/en/data-access)

## 基本信息

- 数据集编号（Earth Engine ID）：`ESA/WorldCover/v200`
- 数据类型：影像集合（ImageCollection）
- 提供方：ESA WorldCover Consortium、Google Earth Engine
- 时间范围：2021-01-01 至 2022-01-01
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：esa, landcover, landuse, landuse-landcover, sentinel1-derived, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Map | Landcover class | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ESA/WorldCover/v200');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCover_v200
- 数据引用：Zanaga, D., Van De Kerchove, R., Daems, D., De Keersmaecker, W., Brockmann,
C., Kirches, G., Wevers, J., Cartus, O., Santoro, M., Fritz, S., Lesiv, M.,
Herold, M., Tsendbazar, N.E., Xu, P., Ramoino, F., Arino, O., 2022. ESA
WorldCover 10 m 2021 v200.
([doi:10.5281/zenodo.7254221](https://doi.org/10.5281/zenodo.7254221))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
