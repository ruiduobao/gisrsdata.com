---
title: "Ocean Color SMI: Standard Mapped Image MODIS Aqua Data"
date: 2026-11-03 12:00:00
permalink: /pages/d1d3bb55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biology"
  - "chlorophyll"
  - "modis"
  - "nasa"
  - "oceandata"
  - "oceans"
  - "reflectance"
  - "sst"
  - "temperature"
  - "weather"
---

# Ocean Color SMI: Standard Mapped Image MODIS Aqua Data

## 数据集简介

This level 3 product includes ocean color and satellite ocean biology data
produced or collected under [EOSDIS](https://earthdata.nasa.gov/about).

This dataset may be used for studying the biology and hydrology of
coastal zones, changes in the diversity and geographical distribution of
coastal marine habitats, biogeochemical fluxes and their influence in
Earth's oceans and climate over time, and finally the impact of
climate and environmental variability and change on ocean ecosystems
and the biodiversity they support.

Scale factor and offset are already applied.

Documentation:

* [Ocean Color Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)

* [Chlorophyll Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)

* [Algorithm Theoretical Basis Document (Chlorophyll)](https://oceancolor.gsfc.nasa.gov/resources/atbd/chlor_a)

* [Algorithm Theoretical Basis Document (Fluorescence Line Height)](https://oceancolor.gsfc.nasa.gov/resources/atbd/nflh)

* [Algorithm Theoretical Basis Document (Particulate Organic Carbon)](https://oceancolor.gsfc.nasa.gov/resources/atbd/poc)

* [Algorithm Theoretical Basis Document (Remote-Sensing Reflectance)](https://oceancolor.gsfc.nasa.gov/resources/atbd/rrs)

* [Processing History](https://oceancolor.gsfc.nasa.gov/data/reprocessing/V3.0/pace/)

Newer datasets have scaled POC values while older ones don't. This
scaling gets rid of negative values but older datasets still retain them
hence the -2147.48 estimated minimum value. For more information, visit the
[Ocean Color Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl).

[MODIS-Aqua OceanData](https://oceancolor.gsfc.nasa.gov/about/missions/aqua/)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/OCEANDATA/MODIS-Aqua/L3SMI`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA OB.DAAC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：2002-07-03 至 2025-11-30
- 空间分辨率：4616 米
- 许可：proprietary
- 关键词：biology, chlorophyll, modis, nasa, oceandata, oceans, reflectance, sst, temperature, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| chlor_a | Chlorophyll a concentration | 4616 |  |
| nflh | Normalized fluorescence line height | 4616 |  |
| poc | Particulate organic carbon | 4616 |  |
| Rrs_412 | Remote sensing reflectance at band 412nm | 4616 | 412nm |
| Rrs_443 | Remote sensing reflectance at band 443nm | 4616 | 443nm |
| Rrs_469 | Remote sensing reflectance at band 469nm | 4616 | 469nm |
| Rrs_488 | Remote sensing reflectance at band 488nm | 4616 | 488nm |
| Rrs_531 | Remote sensing reflectance at band 531nm | 4616 | 531nm |
| Rrs_547 | Remote sensing reflectance at band 547nm | 4616 | 547nm |
| Rrs_555 | Remote sensing reflectance at band 555nm | 4616 | 555nm |
| Rrs_645 | Remote sensing reflectance at band 645nm | 4616 | 645nm |
| Rrs_667 | Remote sensing reflectance at band 667nm | 4616 | 667nm |
| Rrs_678 | Remote sensing reflectance at band 678nm | 4616 | 678nm |
| sst | Sea surface temperature | 4616 |  |
| nsst | Nighttime Sea Surface Temperature | 4616 |  |
| par | Photosynthetically Available Radiation | 4616 |  |
| Kd_490 | Diffuse attenuation coefficient at 490nm | 4616 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Aqua_L3SMI
- 数据引用：NASA Goddard Space Flight Center, Ocean Ecology Laboratory, Ocean Biology
Processing Group. Moderate-resolution Imaging Spectroradiometer
(MODIS) Aqua Ocean Color Data, NASA OB.DAAC, Greenbelt, MD, USA.

*   DOI: 10.5067/AQUA/MODIS/L3M/CHL/2018 [unrecoverable]


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
