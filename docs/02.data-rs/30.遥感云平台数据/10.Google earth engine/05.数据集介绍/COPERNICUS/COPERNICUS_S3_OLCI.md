---
title: "Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution"
date: 2026-11-03 12:00:00
permalink: /pages/e7ebe842/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "esa"
  - "eu"
  - "olci"
  - "radiance"
  - "satellite-imagery"
  - "sentinel"
  - "toa"
---

# Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution

## 数据集简介

The Ocean and Land Color Instrument (OLCI) Earth Observation
Full Resolution (EFR) dataset contains top of atmosphere radiances
at 21 spectral bands with center wavelengths ranging between
0.4&micro;m and 1.02&micro;m at spatial resolution of 300m with
worldwide coverage every ~2 days.

OLCI is one of the instruments
in the ESA/EUMETSAT Sentinel-3 mission for measuring sea-surface
topography, sea- and land-surface temperature, ocean color and
land color with high-end accuracy and reliability to support
ocean forecasting systems, as well as environmental and climate
monitoring.

The Sentinel-3 OLCI instrument is based on the
optomechanical and imaging design of ENVISAT's MERIS. It is designed
to retrieve the spectral distribution of upwelling radiance just
above the sea surface (the water-leaving radiance).

OLCI observation is performed simultaneously in 21 spectral bands
ranging from the visible to the near-infrared (400 to 1029 nm).

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S3/OLCI`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2016-10-18 至 2026-11-02
- 空间分辨率：300 米
- 许可：proprietary
- 关键词：copernicus, esa, eu, olci, radiance, satellite-imagery, sentinel, toa

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Oa01_radiance | Aerosol correction, improved water constituent retrieval | 300 | 400nm/15nm |
| Oa02_radiance | Yellow substance and detrital pigments (turbidity) | 300 | 412.5nm/10nm |
| Oa03_radiance | Chl absorption max., biogeochemistry, vegetation | 300 | 442.5nm/10nm |
| Oa04_radiance | High Chl, other pigments | 300 | 490nm/10nm |
| Oa05_radiance | Chl, sediment, turbidity, red tide | 300 | 510nm/10nm |
| Oa06_radiance | Chlorophyll reference (Chl minimum) | 300 | 560nm/10nm |
| Oa07_radiance | Sediment loading | 300 | 620nm/10nm |
| Oa08_radiance | Chl (2^nd Chl abs. max.), sediment, yellow substance/vegetation | 300 | 665nm/10nm |
| Oa09_radiance | For improved fluorescence retrieval and to better account for [smile](https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-3-olci/level-2/smile-correction) together with the bands 665 and 680nm  | 300 | 673.75nm/7.5nm |
| Oa10_radiance | Chl fluorescence peak, red edge | 300 | 681.25nm/7.5nm |
| Oa11_radiance | Chl fluorescence baseline, red edge transition | 300 | 708.75nm/10nm |
| Oa12_radiance | O2 absorption/clouds, vegetation | 300 | 753.75nm/7.5nm |
| Oa13_radiance | O2 absorption band/aerosol correction | 300 | 761.25nm/7.5nm |
| Oa14_radiance | Atmospheric correction | 300 | 764.375nm/3.75nm |
| Oa15_radiance | O2A used for cloud top pressure, fluorescence over land | 300 | 767.5nm/2.5nm |
| Oa16_radiance | Atmospheric correction/aerosol correction | 300 | 778.75nm/15nm |
| Oa17_radiance | Atmospheric correction/aerosol correction, clouds, pixel co-registration | 300 | 865nm/20nm |
| Oa18_radiance | Water vapor absorption reference band. Common reference band with SLSTR instrument. Vegetation monitoring  | 300 | 885nm/10nm |
| Oa19_radiance | Water vapor absorption/vegetation monitoring (max. reflectance) | 300 | 900nm/10nm |
| Oa20_radiance | Water vapor absorption, atmospheric/aerosol correction | 300 | 940nm/20nm |
| Oa21_radiance | Atmospheric/aerosol correction | 300 | 1029nm/40nm |
| quality_flags | Quality flags | 300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S3/OLCI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S3_OLCI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
