---
title: "ALOS DSM: Global 30m v2.1 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/4e1fdf4b/
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

# ALOS DSM: Global 30m v2.1 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

ALOS World 3D - 30m (AW3D30) is a global digital surface
model (DSM) dataset with a horizontal resolution of approximately
30 meters (1 arcsec mesh). The dataset is based on the DSM dataset
(5-meter mesh version) of the [World 3D Topographic Data](https://www.aw3d.jp/en/).
More details are available in the dataset [documentation](https://www.eorc.jaxa.jp/ALOS/en/aw3d30/aw3d30v11_format_e.pdf).

In the version 2.1, released in April 2018, the source AW3D DSM has been upgraded
to version 2. Masks of the land water and low correlation pixels were also filled
with existing DEMs in addition to the cloud and snow pixels between 60 degrees
North and 60 degrees South. In Japan area, filling was carried out after updating
coastline information.

The AW3D DSM elevation is calculated by an image matching process
that uses a stereo pair of optical images. Clouds, snow, and ice are
automatically identified during processing and applied the
mask information. However, mismatched points sometimes
remain especially surrounding (or at the edges of) clouds, snow,
and ice areas, which cause some height errors in the final DSM.

Here are some example areas with data values outside of valid elevation
range. Impossibly low negative values are concentrated in Antarctica around
(-63.77, -61.660), (-77.22, -150.27), and (-73.29, 168.14); in Indonesia
around (-5.36, 134.55); in Brazil around (-1.667113844, -50.6269684);
and in Peru around (-10.45048137, -75.39459876) with approximate values of
-1013, -998, -635, and -610 respectively. Impossibly high
positive values are found in several locations in the Arctic around
(79.83, -77.67) and (69.54, -75.42); in Fiji around (-16.58, 179.44)
and (-18.96, 178.39); and in Nepal around (28.50, 84.56) with
approximate values of 15369, 15213, and 10900 respectively.

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/AW3D30/V2_1`
- 数据类型：影像（Image）
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 时间范围：2006-01-24 至 2011-05-12
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：alos, dem, elevation, elevation-topography, geophysical, jaxa, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AVE_DSM | Height above sea level. Signed 16 bits (Little endian) raster data. Elevation (in meter) converted from the ellipsoidal height based on ITRF97 and GRS80, using EGM96&#8224;1 geoid model.  | 30 |  |
| AVE_STK | Stacking number of the scene unit DSM used in producing DSM. The band is derived by resampling the stacking number for 5m resolution DSM to 30m resolution.  | 30 |  |
| AVE_MSK | 8-bit mask for the ave band. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('JAXA/ALOS/AW3D30/V2_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V2_1
- 数据引用：T. Tadono, H. Ishida, F. Oda, S. Naito, K. Minakawa, H. Iwamoto
: Precise Global DEM Generation By ALOS PRISM, ISPRS Annals of
the Photogrammetry, Remote Sensing and Spatial Information Sciences,
Vol.II-4, pp.71-76, 2014. [PDF file](https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/II-4/71/2014/isprsannals-II-4-71-2014.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
