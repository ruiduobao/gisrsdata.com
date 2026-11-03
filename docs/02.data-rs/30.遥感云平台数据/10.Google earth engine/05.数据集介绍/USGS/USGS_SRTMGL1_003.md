---
title: "NASA SRTM Digital Elevation 30m"
date: 2026-11-03 12:00:00
permalink: /pages/1d3261d4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "nasa"
  - "srtm"
  - "topography"
  - "usgs"
---

# NASA SRTM Digital Elevation 30m

## 数据集简介

The Shuttle Radar Topography Mission (SRTM, see [Farr
et al. 2007](https://onlinelibrary.wiley.com/doi/10.1029/2005RG000183/full))
digital elevation data is an international research effort that
obtained digital elevation models on a near-global scale. This
SRTM V3 product (SRTM Plus) is provided by NASA JPL
at a resolution of 1 arc-second (approximately 30m).

This dataset has undergone a void-filling process using open-source data
(ASTER GDEM2, GMTED2010, and NED), as opposed to other versions that
contain voids or have been void-filled with commercial sources.
For more information on the different versions see the
[SRTM Quick Guide](https://lpdaac.usgs.gov/documents/13/SRTM_Quick_Guide.pdf).

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/179/SRTM_User_Guide_V3.pdf)

* [General Documentation](https://lpdaac.usgs.gov/documents/13/SRTM_Quick_Guide.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://doi.org/10.1029/2005RG000183)

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/SRTMGL1_003`
- 数据类型：影像（Image）
- 提供方：NASA / USGS / JPL-Caltech、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, geophysical, nasa, srtm, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/SRTMGL1_003');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003
- 数据引用：Farr, T.G., Rosen, P.A., Caro, E., Crippen, R., Duren, R., Hensley,
S., Kobrick, M., Paller, M., Rodriguez, E., Roth, L., Seal, D.,
Shaffer, S., Shimada, J., Umland, J., Werner, M., Oskin, M., Burbank,
D., and Alsdorf, D.E., 2007, The shuttle radar topography mission:
Reviews of Geophysics, v. 45, no. 2, RG2004, at
[https://doi.org/10.1029/2005RG000183](https://doi.org/10.1029/2005RG000183).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
