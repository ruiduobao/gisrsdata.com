---
title: "Sentinel-5P OFFL HCHO: Offline Formaldehyde"
date: 2026-11-03 12:00:00
permalink: /pages/44d5d575/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "bira"
  - "copernicus"
  - "dlr"
  - "esa"
  - "eu"
  - "formaldehyde"
  - "hcho"
  - "pollution"
  - "s5p"
  - "sentinel"
---

# Sentinel-5P OFFL HCHO: Offline Formaldehyde

## 数据集简介

### OFFL/L3_HCHO

This dataset provides offline high-resolution imagery of atmospheric
formaldehyde (HCHO) concentrations.

Formaldehyde is an intermediate gas in almost all oxidation chains of non-methane
volatile organic compounds (NMVOC), leading eventually to CO<sub>2</sub>. Non-Methane Volatile
Organic Compounds (NMVOCs) are, together with NO<sub>x</sub>, CO and CH<sub>4</sub>, among the
most important precursors of tropospheric O<sub>3</sub>. The major HCHO source in the remote
atmosphere is CH<sub>4</sub> oxidation. Over the continents, the oxidation of higher NMVOCs
emitted from vegetation, fires, traffic and industrial sources results in important
and localized enhancements of the HCHO levels. The seasonal and inter-annual
variations of the formaldehyde distribution are principally related to temperature
changes and fire events, but also to changes in anthropogenic activities. HCHO concentrations
in the boundary layer can be directly related to the release of short-lived hydrocarbons, which
mostly cannot be observed directly from space.
[More information.](http://www.tropomi.eu/data-products/formaldehyde)

### OFFL L3 Product

To make our OFFL L3 products, we find areas within the product's bounding
box with data using a command like this:

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'tropospheric_HCHO_column_number_density_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__HCHO___20190116T171037_20190116T185207_06531_01_010105_20190123T104749.nc
grid_info.h5
```

We then merge all the data into one large mosaic (area-averaging values for
pixels that may have different values for different times).  From the
mosaic, we create a set of tiles containing orthorectified raster data.

Example harpconvert invocation for one tile:

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'tropospheric_HCHO_column_number_density_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(tropospheric_HCHO_column_number_density,
     tropospheric_HCHO_column_number_density_amf,
     HCHO_slant_column_number_density,cloud_fraction,sensor_altitude,
     sensor_azimuth_angle, sensor_zenith_angle,solar_azimuth_angle,
     solar_zenith_angle)'
S5P_OFFL_L2__HCHO___20190116T171037_20190116T185207_06531_01_010105_20190123T104749.nc
output.h5
```

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

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_HCHO`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-12-05 至 2026-10-31
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：air-quality, atmosphere, bira, copernicus, dlr, esa, eu, formaldehyde, hcho, pollution, s5p, sentinel, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tropospheric_HCHO_column_number_density | Tropospheric HCHO column number density. | 1113.2 |  |
| tropospheric_HCHO_column_number_density_amf | Tropospheric air mass factor. | 1113.2 |  |
| HCHO_slant_column_number_density | HCHO slant column number density. | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220.  | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_HCHO');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_HCHO

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
