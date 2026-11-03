---
title: "NASADEM: NASA 30m Digital Elevation Model"
date: 2026-11-03 12:00:00
permalink: /pages/f9ac1729/
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
  - "nasadem"
  - "srtm"
  - "topography"
  - "usgs"
---

# NASADEM: NASA 30m Digital Elevation Model

## 数据集简介

NASADEM is a reprocessing of SRTM data, with improved accuracy by incorporating auxiliary data
from ASTER GDEM, ICESat GLAS, and PRISM datasets.

The most significant processing improvements involve void reduction through improved
phase unwrapping and using ICESat GLAS data for control.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/592/NASADEM_User_Guide_V1.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/NASADEM_HGT/001`
- 数据类型：影像（Image）
- 提供方：NASA / USGS / JPL-Caltech、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, geophysical, nasa, nasadem, srtm, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Integer heights in the merged void-free DEM files are relative to the EGM96 geoid (whereas the floating-point heights in the SRTM-only DEM files are relative to the WGS84 ellipsoid).  | 30 |  |
| num | Index indicating the data source and the number of source scenes.    * 0: Water in corrected SRTM water body data   * 1-23: SRTM 1-23 (max known is 23)   * 41-94: PRISM 1-50 (54 max polar, 37 max elsewhere)   * 110-160: GDEM3 (saturated at 50)   * 170-220: GDEM2 (saturated at 50)   * 231: SRTMv3 from GDEM3   * 232: SRTMv2 from GDEM3   * 233: SRTMv2 from GDEM2   * 234: SRTM-with-NGA-fill from GDEM2   * 241: NED from GDEM2 (USA)   * 242: NED from GDEM3 (USA)   * 243: CDED from GDEM2 (Canada)   * 244: CDED from GDEM3 (Canada)   * 245: Alaska from GDEM2 (Alaska)   * 246: Alaska from GDEM3 (Alaska)   * 250: Interpolation   * 251: Quad edge averaged where two neighboring quads disagreed (generally a GDEM error)   * 255: ERROR (if NUM IS MISSING - none known to exist)  | 30 |  |
| swb | Updated SRTM water body data    * 0: Land   * 255: Water | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('NASA/NASADEM_HGT/001');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NASADEM_HGT_001
- 数据引用：NASA JPL (2020). NASADEM Merged DEM Global 1 arc second V001 [Data set]. NASA EOSDIS Land
Processes DAAC. Accessed 2020-12-30 from [doi:10.5067/MEaSUREs/NASADEM/NASADEM_HGT.001](https://doi.org/10.5067/MEaSUREs/NASADEM/NASADEM_HGT.001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
