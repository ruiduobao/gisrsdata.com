---
title: "ALOS DSM: Global 30m  v4.1"
date: 2026-11-03 12:00:00
permalink: /pages/774620fb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "jaxa"
  - "topography"
---

# ALOS DSM: Global 30m  v4.1

## 数据集简介

ALOS World 3D - 30m (AW3D30) is a global digital surface
model (DSM) dataset with a horizontal resolution of approximately
30 meters (1 arcsec mesh). The dataset is based on the DSM dataset
(5-meter mesh version) of the [World 3D Topographic Data](https://www.aw3d.jp/en/).
More details are available in the dataset [documentation](https://www.eorc.jaxa.jp/ALOS/en/dataset/aw3d30/data/aw3d30v4.1_product_e_1.0.pdf).

This ingested dataset combines data from versions 3.1, 4.0, and 4.1.

Version 4.1 (April 2024): This major update released 19,051 tiles covering
global regions (excluding Antarctica and Japan). It incorporates new
supplementary data for void filling and corrects partial anomalies found in
versions 3.1 and 3.2, along with re-filling voids. For specific tile updates
in v4.1, please use the v4.1 filter on map tiles or consult the latest
format description.

Version 4.0 (April 2023): This update released 1,886 tiles, improving low
and mid-latitude regions and areas south of 60 degrees latitude.

Key changes include:
1. New supplementary data for void filling.
2. Correction of partial anomalies and re-filling of voids (2 tiles).
3. Updated coastlines for regions south of 60 degrees latitude (44 tiles).
4. Disabled Caspian Sea water mask and supplemented with elevation data
  (54 tiles).
5. Extracted and corrected new partial anomaly areas in South America
  (1,786 tiles).
6. For detailed tile information for v4.0, please use the v4.0 filter on
  map tiles or refer to the format description.

Version 3.2, released in January 2021, is an improved version created by
reconsidering the format in the high latitude area, auxiliary data, and
processing method. Different pixel spacing for each latitude zone was
adopted at high latitude area. Coastline data, which is one of the
auxiliary datasets, was changed, and new supplementary data was used. In
addition, as a source data for Japan, AW3D version 3 was also used.
Furthermore, the method of detecting anomalous values in the process was
improved.

Note: See the code example for the recommended way of computing slope.
Unlike most DEMs in Earth Engine, this is an image collection due to
multiple resolutions of source files that make it impossible to mosaic them
into a single asset, so the slope computations need a reprojection.

The AW3D DSM elevation is calculated by an image matching process
that uses a stereo pair of optical images. Clouds, snow, and ice are
automatically identified during processing and applied the
mask information. However, mismatched points sometimes
remain especially surrounding (or at the edges of) clouds, snow,
and ice areas, which cause some height errors in the final DSM.

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/AW3D30/V4_1`
- 数据类型：影像集合（ImageCollection）
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 时间范围：2006-01-24 至 2011-05-12
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：alos, dem, elevation, elevation-topography, geophysical, jaxa, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DSM | Height above sea level. Signed 16 bits. Elevation (in meter) converted from the ellipsoidal height based on ITRF97 and GRS80, using EGM96&#8224;1 geoid model.  | 30 |  |
| STK | Stacking number of the scene unit DSM used in producing DSM. The band is derived by resampling the stacking number for 5m resolution DSM to 30m resolution.  | 30 |  |
| MSK | 8-bit mask for the band. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/ALOS/AW3D30/V4_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V4_1
- 数据引用：T. Tadono, H. Ishida, F. Oda, S. Naito, K. Minakawa, H. Iwamoto
: Precise Global DEM Generation By ALOS PRISM, ISPRS Annals of
the Photogrammetry, Remote Sensing and Spatial Information Sciences,
Vol.II-4, pp.71-76, 2014. [PDF file](https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/II-4/71/2014/isprsannals-II-4-71-2014.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
