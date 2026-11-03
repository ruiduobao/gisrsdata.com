---
title: "Sentinel-5P OFFL CO: Offline Carbon Monoxide"
date: 2026-11-03 12:00:00
permalink: /pages/0bd864c8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "carbon-monoxide"
  - "copernicus"
  - "esa"
  - "eu"
  - "knmi"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "sron"
  - "tropomi"
---

# Sentinel-5P OFFL CO: Offline Carbon Monoxide

## 数据集简介

### OFFL/L3_CO

This dataset provides offline high-resolution imagery of CO concentrations.

Carbon monoxide (CO) is an important atmospheric trace gas for understanding
tropospheric chemistry. In certain urban areas, it is a major atmospheric
pollutant. Main sources of CO are combustion of fossil fuels, biomass burning,
and atmospheric oxidation of methane and other hydrocarbons. Whereas fossil
fuel combustion is the main source of CO at northern mid-latitudes, the oxidation
of isoprene and biomass burning play an important role in the tropics. TROPOMI
on the Sentinel 5 Precursor (S5P) satellite observes the CO global abundance
exploiting clear-sky and cloudy-sky Earth radiance measurements in the 2.3 &mu;m
spectral range of the shortwave infrared (SWIR) part of the solar spectrum.
TROPOMI clear sky observations provide CO total columns with sensitivity to the
tropospheric boundary layer. For cloudy atmospheres, the column sensitivity
changes according to the light path.
[More information.](http://www.tropomi.eu/data-products/carbon-monoxide)

### OFFL L3 Product

To make our OFFL L3 products, we find areas within the product's bounding
box with data using a command like this:

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'CO_column_number_density_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__CO_____20181031T060643_20181031T074813_05432_01_010200_20181106T052542.nc
grid_info.h5
```

We then merge all the data into one large mosaic (area-averaging values for
pixels that may have different values for different times).  From the
mosaic, we create a set of tiles containing orthorectified raster data.

Example harpconvert invocation for one tile:
```
harpconvert --format hdf5 --hdf5-compression 9
-a 'CO_column_number_density_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(CO_column_number_density,H2O_column_number_density,cloud_height,
sensor_altitude,sensor_azimuth_angle, sensor_zenith_angle,
solar_azimuth_angle,solar_zenith_angle)'
S5P_OFFL_L2__CO_____20181031T060643_20181031T074813_05432_01_010200_20181106T052542.nc
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

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_CO`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-06-28 至 2026-10-31
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：air-quality, atmosphere, carbon-monoxide, copernicus, esa, eu, knmi, pollution, s5p, sentinel, sron, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CO_column_number_density | Vertically integrated CO column density. | 1113.2 |  |
| H2O_column_number_density | Water vapor column. | 1113.2 |  |
| cloud_height | Scattering layer height. | 1113.2 |  |
| sensor_altitude | Altitude of the satellite with respect to the geodetic sub-satellite point (WGS84). | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CO

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
