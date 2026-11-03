---
title: "NOAA CDR WHOI: Sea Surface Temperature, Version 2"
date: 2026-11-03 12:00:00
permalink: /pages/4fef452a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmospheric"
  - "cdr"
  - "hourly"
  - "noaa"
  - "oceans"
  - "oisst"
  - "osb"
  - "sst"
  - "whoi"
---

# NOAA CDR WHOI: Sea Surface Temperature, Version 2

## 数据集简介

The Sea Surface Temperature - WHOI dataset is part of the NOAA Ocean Surface
Bundle (OSB) and provides a high quality Climate Data Record (CDR) of sea
surface temperature over ice-free oceans.

The SST values are found through modeling the diurnal variability in
combination with AVHRR observations of sea surface temperature.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/SST_WHOI/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1988-01-01 至 2021-08-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：atmospheric, cdr, hourly, noaa, oceans, oisst, osb, sst, whoi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sea_surface_temperature | Optimum Interpolation Sea Surface Temperature (OISST), with a diurnal warming correction | 27830 |  |
| fill_missing_qc | Quality control flags | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/SST_WHOI/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_SST_WHOI_V2
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record (CDR) of
Sea Surface Temperature - WHOI, Version 2. [indicate subset used]. NOAA
National Climatic Data Center. [doi:10.7289/V5FB510W](https://doi.org/10.7289/V5FB510W).

- DOI：10.7289/V5FB510W

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
