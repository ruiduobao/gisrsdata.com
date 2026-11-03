---
title: "MYD09Q1.006 Aqua Surface Reflectance 8-Day Global 250m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/ae92865d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "global"
  - "modis"
  - "myd09q1"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "usgs"
---

# MYD09Q1.006 Aqua Surface Reflectance 8-Day Global 250m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MYD09Q1 product provides an estimate of the surface
spectral reflectance of bands 1 and 2 at 250m resolution and corrected
for atmospheric conditions such as gasses, aerosols, and Rayleigh
scattering. Along with the two reflectance bands, a quality layer
is also included. For each pixel, a value is selected from all
the acquisitions within the 8-day composite on the basis of high
observation coverage, low view angle, the absence of clouds or
cloud shadow, and aerosol loading.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD09Q1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD09Q1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2023-02-18
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：8-day, aqua, global, modis, myd09q1, nasa, satellite-imagery, sr, surface-reflectance, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance band 1 | 250 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 250 | 841-876nm |
| State | Surface reflectance 250m state flags | 250 |  |
| QA | Surface reflectance 250m band quality control flags | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MYD09Q1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09Q1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09Q1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
