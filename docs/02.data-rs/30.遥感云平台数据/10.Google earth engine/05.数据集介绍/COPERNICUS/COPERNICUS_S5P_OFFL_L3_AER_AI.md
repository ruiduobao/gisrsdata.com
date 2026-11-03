---
title: "Sentinel-5P OFFL AER AI: Offline UV Aerosol Index"
date: 2026-11-03 12:00:00
permalink: /pages/7e8b854c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aai"
  - "aerosol"
  - "air-quality"
  - "atmosphere"
  - "copernicus"
  - "esa"
  - "eu"
  - "knmi"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# Sentinel-5P OFFL AER AI: Offline UV Aerosol Index

## 数据集简介

### OFFL/L3_AER_AI

This dataset provides offline high-resolution imagery of the UV Aerosol Index
(UVAI), also called the Absorbing Aerosol Index (AAI).

The AAI is based on wavelength-dependent changes in Rayleigh scattering in
the UV spectral range for a pair of wavelengths.  The difference between
observed and modelled reflectance results in the AAI.  When the AAI is
positive, it indicates the presence of UV-absorbing aerosols like dust and
smoke. It is useful for tracking the evolution of episodic aerosol plumes from
dust outbreaks, volcanic ash, and biomass burning.

The wavelengths used have very low ozone absorption, so unlike aerosol optical
thickness measurements, AAI can be calculated in the presence of clouds.
Daily global coverage is therefore possible.

For this L3 AER_AI product, the absorbing_aerosol_index is calculated with a
pair of measurements at the 354 nm and 388 nm wavelengths.  The
[COPERNICUS/S5P/OFFL/L3_SO2](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_SO2)
product has the absorbing_aerosol_index calculated using the 340 nm and 380
nm wavelengths.

### OFFL L3 Product

To make our OFFL L3 products, we find areas within the product's bounding
box with data using a command like this:

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'absorbing_aerosol_index_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__AER_AI_20181030T213916_20181030T232046_05427_01_010200_20181105T210529.nc
grid_info.h5
```

We then merge all the data into one large mosaic (area-averaging values for
pixels that may have different values for different times).  From the
mosaic, we create a set of tiles containing orthorectified raster data.

Example harpconvert invocation for one tile:
```
harpconvert --format hdf5 --hdf5-compression 9
-a 'absorbing_aerosol_index_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(absorbing_aerosol_index,sensor_altitude,sensor_azimuth_angle,
     sensor_zenith_angle,solar_azimuth_angle,solar_zenith_angle)'
S5P_OFFL_L2__AER_AI_20181030T213916_20181030T232046_05427_01_010200_20181105T210529.nc
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

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_AER_AI`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-07-04 至 2026-10-31
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：aai, aerosol, air-quality, atmosphere, copernicus, esa, eu, knmi, pollution, s5p, sentinel, tropomi, uvai

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| absorbing_aerosol_index | A measure of the prevalence of aerosols in the atmosphere.  The UVAI index is based on spectral contrast in the ultraviolet (UV) spectral range for a given wavelength pair, where the difference between observed and modeled reflectance results in a residual value. When this residual is positive it indicates the presence of UV-absorbing aerosols, like dust and smoke, and is often referred to as the Absorbing Aerosol Index (AAI). Clouds yield near-zero residual values and strongly negative residual values can be indicative of the presence of non-absorbing aerosols including sulfate aerosols.  Unlike satellite-based aerosol optical thickness measurements, AAI can also be calculated in the presence of clouds so that daily, global coverage is possible. This is ideal for tracking the evolution of episodic aerosol plumes consisting of desert dust, ash from volcanic eruptions, and smoke from biomass burning.  See further details in the [ATBD](https://sentinels.copernicus.eu/documents/247904/2476257/Sentinel-5P-TROPOMI-ATBD-UV-Aerosol-Index.pdf).  | 1113.2 |  |
| sensor_altitude | Altitude of the satellite with respect to the geodetic sub-satellite point (WGS84). | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_AER_AI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_AER_AI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
