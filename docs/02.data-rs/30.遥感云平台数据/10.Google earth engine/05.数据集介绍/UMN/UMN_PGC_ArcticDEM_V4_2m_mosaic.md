---
title: "ArcticDEM Mosaic V4.1"
date: 2026-11-03 12:00:00
permalink: /pages/7ffa5c19/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "dem"
  - "elevation-topography"
  - "geophysical"
  - "pgc"
  - "umn"
---

# ArcticDEM Mosaic V4.1

## 数据集简介

ArcticDEM is a National Geospatial-Intelligence Agency (NGA) and National
Science Foundation (NSF) public-private initiative to automatically produce
a high-resolution, high-quality digital surface model (DSM) of the Arctic
using optical stereo imagery, high-performance computing, and open source
photogrammetry software. It includes vegetation, tree canopy, buildings, and
other man-made surface features. The 2m asset is a collection of strips rather
than a single mosaic due to projection differences between strips.

Mosaicked DEM files are compiled from the best quality strip DEM files
which have been blended and feathered to reduce void areas and edge-matching
artifacts. Filtered IceSAT altimetry data has been applied to the raster
files to improve absolute accuracy.

These version (V4.1) mosaics include additional raster bands:
'count', 'mad','mindate', and 'maxdate' to provide
information on data provenance and uncertainty.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMN/PGC/ArcticDEM/V4/2m_mosaic`
- 数据类型：影像（Image）
- 提供方：University of Minnesota Polar Geospatial Center、Google Earth Engine
- 时间范围：2012-06-03 至 2020-09-03
- 空间分辨率：2 米
- 许可：proprietary
- 关键词：arctic, dem, elevation-topography, geophysical, pgc, umn

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 2 |  |
| count | Number of source DEMs used to calculate the elevation value at that pixel. | 2 |  |
| mad | Median absolute deviation of the stack of source datasets from the median elevation value. | 2 |  |
| mindate | Earliest date of the source DEMs used to build the mosaic, as the number of days since January 1, 2000. | 2 |  |
| maxdate | Latest date of the source DEMs used to build the mosaic, as the number of days since January 1, 2000. | 2 |  |
| datamask | Data mask indicates whether the elevation was 0 or 1. where 0 indicates , Filled/merged with another dataset or masked out as NoData in quality control steps. 1 indicates output by SETSM, the Ohio State University’s Surface Extraction with TIN-based Search-space Minimization software package.  | 2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('UMN/PGC/ArcticDEM/V4/2m_mosaic');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMN_PGC_ArcticDEM_V4_2m_mosaic
- 数据引用：DEM(s) created by the Polar Geospatial Center from DigitalGlobe, Inc. imagery.
Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian;
Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith;
Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric;
Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.;
Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William;
Becker, Peter; Doshi, Abhijit; D'Souza, Cristelle; Cummens, Pat; Laurier, Fabien;
Bojesen, Mikkel, 2018, ArcticDEM, Harvard Dataverse, V1, [Date Accessed].

- DOI：10.7910/DVN/OHHUKH

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
