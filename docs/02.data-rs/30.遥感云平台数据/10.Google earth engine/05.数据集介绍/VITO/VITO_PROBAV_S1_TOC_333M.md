---
title: "PROBA-V C0 Top Of Canopy Daily Synthesis 333m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/d6873dcd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "esa"
  - "multispectral"
  - "nir"
  - "proba"
  - "probav"
  - "satellite-imagery"
  - "swir"
  - "vito"
---

# PROBA-V C0 Top Of Canopy Daily Synthesis 333m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Proba-V is a satellite mission tasked to map land cover and vegetation
growth. It was designed to provide continuity for the VGT optical instrument
from the SPOT-4 and SPOT-5 missions.

The sensor collects data in three VNIR (visible and near-infrared) bands
and one SWIR (short-wave infrared) spectral band with a 2250km field of
view. Global images are produced every 2 days at 300m resolution, and a 100m
image from nadir observations every 5 days. These images are later
composited to produce this daily synthesis dataset. The description of
the compositing and atmospheric correction procedures can be found in
the [user manual](https://publications.vito.be/2017-1333-probav-products-user-manual.pdf).

The reflectances provided in this dataset are presented as Digital Count
Numbers (DN) and must be converted according to the guidelines in
Section 4.6.1 of the [user manual](https://publications.vito.be/2017-1333-probav-products-user-manual.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`VITO/PROBAV/S1_TOC_333M`
- 数据类型：影像集合（ImageCollection）
- 提供方：Vito / ESA、Google Earth Engine
- 时间范围：2013-10-17 至 2016-12-14
- 空间分辨率：333 米
- 许可：proprietary
- 关键词：esa, multispectral, nir, proba, probav, satellite-imagery, swir, vito

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| RED | Top of canopy reflectance RED channel | 333 | 658nm, FWHM: 82nm |
| NIR | Top of canopy reflectance NIR channel | 333 | 834nm, FWHM: 121nm |
| BLUE | Top of canopy reflectance BLUE channel | 333 | 460nm, FWHM: 42nm |
| SWIR | Top of canopy reflectance SWIR channel | 333 | 1610nm, FWHM: 89nm |
| NDVI | Normalized Difference Vegetation Index | 333 |  |
| SZA | Solar zenith angle | 333 |  |
| SAA | Solar azimuth angle | 333 |  |
| SWIRVAA | Viewing azimuth angles SWIR detector | 333 |  |
| SWIRVZA | Viewing zenith angle SWIR detector | 333 |  |
| VNIRVAA | Viewing azimuth angle VNIR detector | 333 |  |
| VNIRVZA | Viewing zenith angle VNIR detector | 333 |  |
| SM | Quality / Information band. | 333 |  |
| TIME | Time elapsed since the start of image collection of this mosaic | 333 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('VITO/PROBAV/S1_TOC_333M');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/VITO_PROBAV_S1_TOC_333M
- 数据引用：Copyright ESA-BELSPO, produced by Vito

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
