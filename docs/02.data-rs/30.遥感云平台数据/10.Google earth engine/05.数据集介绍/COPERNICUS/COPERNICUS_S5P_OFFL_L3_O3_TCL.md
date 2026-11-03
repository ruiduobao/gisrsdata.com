---
title: "Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone"
date: 2026-11-03 12:00:00
permalink: /pages/469453b0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "copernicus"
  - "esa"
  - "eu"
  - "o3"
  - "ozone"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone

## 数据集简介

### OFFL/L3_O3_TCL

This dataset provides offline tropospheric high-resolution imagery of ozone
concentrations between 20N and 20S. See also `COPERNICUS/S5P/OFFL/L3_O3` and
`COPERNICUS/S5P/NRTI/L3_O3` for the total column data.

In the stratosphere, the ozone layer shields the biosphere from dangerous
solar ultraviolet radiation. In the troposphere, it acts as an efficient
cleansing agent, but at high concentration it also becomes harmful to the
health of humans, animals, and vegetation. Ozone is also an important
greenhouse-gas contributor to ongoing climate change. Since the discovery
of the Antarctic ozone hole in the 1980s and the subsequent Montreal Protocol
regulating the production of chlorine-containing ozone-depleting substances,
ozone has been routinely monitored from the ground and from space.

For this product, the convective cloud differential (ccd) and
cloud slicing (csa) algorithm were used.
[Product user manual.](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Tropospheric-Column).
[More information.](http://www.tropomi.eu/data-products/tropospheric-ozone-column).

Unlike all other S5P products, this product was ingested directly without using
`harpconvert`, as it is already a gridded product. Pixels with qa_value<=70
are masked out.

### Sentinel-5 Precursor

Sentinel-5 Precursor is a satellite launched on 13 October 2017
by the European Space Agency to monitor air pollution.  The onboard sensor
is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument).

All of the S5P datasets, except CH<sub>4</sub>, have two versions: Near 
Real-Time (NRTI) and Offline (OFFL). CH<sub>4</sub> is available as OFFL only. 
The NRTI assets cover a smaller area than the OFFL assets, but appear more 
quickly after acquisition.  The OFFL assets contain data from a single orbit 
(which, due to half the earth being dark, contains data only for a single 
hemisphere).

Because of noise in the data, negative vertical column values are often
observed in particular over clean regions or for low SO2 emissions. It is
recommended not to filter these values except for outliers, i.e.
for vertical columns lower than -0.001 mol/m^2.

The original Sentinel 5P Level 2 (L2) data is binned
by time, not by latitude/longitude.  To make it possible to ingest the data
into Earth Engine, each Sentinel 5P L2 product is converted to L3, keeping
a single grid per orbit (that is, no aggregation across products
is performed).

Source products spanning the antimeridian are ingested as two Earth Engine
assets, with suffixes _1 and _2.

The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html)
tool using the `bin_spatial` operation.  The source data is filtered to
remove pixels with QA values less than:

*  80% for AER_AI
*  75% for the tropospheric_NO2_column_number_density band of NO2
*  50% for all other datasets except for O3 and SO2

The O3_TCL product is ingested directly (without running harpconvert).

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_O3_TCL`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-04-30 至 2026-10-18
- 空间分辨率：111320 米
- 许可：proprietary
- 关键词：air-quality, atmosphere, copernicus, esa, eu, o3, ozone, pollution, s5p, sentinel, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ozone_tropospheric_mixing_ratio | Average tropospheric ozone mixing ratio based on CCD algorithm. | 111320 |  |
| ozone_tropospheric_mixing_ratio_precision | Standard deviation of tropospheric ozone mixing ratio based on CCD algorithm. | 111320 |  |
| ozone_tropospheric_vertical_column | Average tropospheric ozone column based on CCD algorithm. | 111320 |  |
| ozone_tropospheric_vertical_column_precision | Standard deviation of tropospheric ozone column based on CCD algorithm. | 111320 |  |
| qa_value | A continuous quality descriptor, varying between 0 (no data) and 100 (full quality data). Pixels with qa_value <= 70 are masked out.  | 111320 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3_TCL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_O3_TCL

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
