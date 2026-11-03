---
title: "HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m"
date: 2026-11-03 12:00:00
permalink: /pages/7a357ddf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landsat"
  - "nasa"
  - "satellite-imagery"
  - "sentinel"
  - "usgs"
---

# HLSL30: HLS-2 Landsat Operational Land Imager Surface Reflectance and TOA Brightness Daily Global 30m

## 数据集简介

The Harmonized Landsat Sentinel-2 (HLS) project provides consistent surface
reflectance (SR) and top of atmosphere (TOA) brightness data from a virtual
constellation of satellite sensors. The Operational Land Imager (OLI) is
housed aboard the joint NASA/USGS Landsat 8 and Landsat 9 satellites, while
the Multi-Spectral Instrument (MSI) is mounted aboard Europe's Copernicus
Sentinel-2A and Sentinel-2B satellites. The combined measurement enables
global observations of the land every 2 to 3 days at 30m spatial
resolution.
The HLS project uses a set of algorithms
to obtain seamless products from OLI and MSI that include atmospheric
correction, cloud and cloud-shadow masking, spatial co-registration and
common gridding, illumination and view angle normalization, and spectral
bandpass adjustment.

The HLS project distributes data as two separate products: HLSL30
(Landsat 8/9) and HLSS30 (Sentinel-2 A/B). They both provide 30m Nadir
Bidirectional Reflectance Distribution Function (BRDF), Adjusted Reflectance
(NBAR).

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1698/HLS_User_Guide_V2.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/769/HLS_ATBD_V15_provisional.pdf)

* [General Documentation](https://lpdaac.usgs.gov/products/hlsl30v002/)
* S30 catalog link: [NASA/HLS/HLSS30/v002](NASA_HLS_HLSS30_v002)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/HLS/HLSL30/v002`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC、Google Earth Engine
- 时间范围：2013-04-11 至 2026-10-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：landsat, nasa, satellite-imagery, sentinel, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Coastal Aerosol | 30 |  |
| B2 | Blue | 30 |  |
| B3 | Green | 30 |  |
| B4 | Red | 30 |  |
| B5 | NIR | 30 |  |
| B6 | SWIR1 | 30 |  |
| B7 | SWIR2 | 30 |  |
| B9 | Cirrus | 30 |  |
| B10 | TIRS1 | 30 |  |
| B11 | TIRS2 | 30 |  |
| Fmask | Quality Bits | 30 |  |
| SZA | Sun Zenith Angle | 30 |  |
| SAA | Sun Azimuth Angle | 30 |  |
| VZA | View Zenith Angle | 30 |  |
| VAA | View Azimuth Angle | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/HLS/HLSL30/v002');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_HLS_HLSL30_v002
- 数据引用：Masek, J., Ju, J., Roger, J., Skakun, S., Vermote, E., Claverie, M., Dungan,
J., Yin, Z., Freitag, B., Justice, C. (2021). HLS Operational Land Imager
Surface Reflectance and TOA Brightness Daily Global 30m v2.0 [Data set].
NASA EOSDIS Land Processes Distributed Active Archive Center.
Accessed 2023-09-12 from https://doi.org/10.5067/HLS/HLSL30.002


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
