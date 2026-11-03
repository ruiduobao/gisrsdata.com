---
title: "Ocean Color SMI: Standard Mapped Image SeaWiFS Data"
date: 2026-11-03 12:00:00
permalink: /pages/402b2c43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biology"
  - "chlorophyll"
  - "nasa"
  - "oceandata"
  - "oceans"
  - "reflectance"
  - "seawifs"
  - "temperature"
  - "weather"
---

# Ocean Color SMI: Standard Mapped Image SeaWiFS Data

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

* [Processing History](https://oceancolor.gsfc.nasa.gov/data/reprocessing)

- There are number of missing data dates in this dataset. For example,
  most dates are missing between 2009-04-29 and 2009-12-01.

- The estimated values for POC might be a result of the data being generated
  without a scale. For more information, visit the
  [SeaWiFS OceanData](https://oceancolor.gsfc.nasa.gov/about/missions/seawifs)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/OCEANDATA/SeaWiFS/L3SMI`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA OB.DAAC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1997-09-04 至 2010-12-10
- 空间分辨率：9200 米
- 许可：proprietary
- 关键词：biology, chlorophyll, nasa, oceandata, oceans, reflectance, seawifs, temperature, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| chlor_a | Chlorophyll a concentration | 9200 |  |
| poc | Particulate organic carbon | 9200 |  |
| Rrs_412 | Remote sensing reflectance at band 412nm | 9200 | 412nm |
| Rrs_443 | Remote sensing reflectance at band 443nm | 9200 | 443nm |
| Rrs_490 | Remote sensing reflectance at band 469nm | 9200 | 490nm |
| Rrs_510 | Remote sensing reflectance at band 488nm | 9200 | 510nm |
| Rrs_555 | Remote sensing reflectance at band 555nm | 9200 | 555nm |
| Rrs_670 | Remote sensing reflectance at band 531nm | 9200 | 670nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/OCEANDATA/SeaWiFS/L3SMI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_SeaWiFS_L3SMI
- 数据引用：NASA Goddard Space Flight Center, Ocean Ecology Laboratory, Ocean Biology
Processing Group. Sea-viewing Wide Field-of-view Sensor (SeaWiFS) Level 3
Binned Chlorophyll Data, NASA OB.DAAC, Greenbelt, MD, USA.
[SeaWiFS-ORBVIEW-2 Citations](https://oceancolor.gsfc.nasa.gov/resources/how-to-cite/)
The old DOI for this publication was
10.5067/ORBVIEW-2/SEAWIFS/L3B/CHL/2018.0.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
