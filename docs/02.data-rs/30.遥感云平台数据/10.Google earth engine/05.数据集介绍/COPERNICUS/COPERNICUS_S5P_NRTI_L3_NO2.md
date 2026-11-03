---
title: "Sentinel-5P NRTI NO2: Near Real-Time Nitrogen Dioxide"
date: 2026-11-03 12:00:00
permalink: /pages/8b2b2e23/
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
  - "knmi"
  - "nitrogen-dioxide"
  - "no2"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# Sentinel-5P NRTI NO2: Near Real-Time Nitrogen Dioxide

## 数据集简介

### NRTI/L3_NO2

This dataset provides near real-time high-resolution imagery of NO<sub>2</sub> concentrations.

Nitrogen oxides (NO<sub>2</sub> and NO) are important trace gases in the Earth's atmosphere,
present in both the troposphere and the stratosphere. They enter the atmosphere
as a result of anthropogenic activities (notably fossil fuel combustion and
biomass burning) and natural processes (wildfires, lightning, and microbiological processes in
soils). Here, NO<sub>2</sub> is used to represent concentrations
of collective nitrogen oxides because during daytime, i.e. in the presence of
sunlight, a photochemical cycle involving ozone (O<sub>3</sub>) converts NO into NO<sub>2</sub>
and vice versa on a timescale of minutes. The TROPOMI NO<sub>2</sub> processing system is based
on the algorithm developments for the DOMINO-2 product and for the EU QA4ECV NO<sub>2</sub>
reprocessed dataset for OMI, and has been adapted for TROPOMI. This
retrieval-assimilation-modelling system uses the 3-dimensional global TM5-MP
chemistry transport model at a resolution of 1x1 degree as an essential element.
[More information.](http://www.tropomi.eu/data-products/nitrogen-dioxide)

### NRTI L3 Product

To make our NRTI L3 products, we use [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html)
to grid the data.

Example harpconvert invocation for one tile:
```
harpconvert --format hdf5 --hdf5-compression 9
-a 'tropospheric_NO2_column_number_density_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(NO2_column_number_density,tropospheric_NO2_column_number_density,
     stratospheric_NO2_column_number_density,NO2_slant_column_number_density,
     tropopause_pressure,absorbing_aerosol_index,cloud_fraction,
     sensor_altitude,sensor_azimuth_angle,
     sensor_zenith_angle,solar_azimuth_angle,solar_zenith_angle)'
S5P_NRTI_L2__NO2____20181107T013042_20181107T013542_05529_01_010200_20181107T021824.nc
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

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_NO2`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-07-10 至 2026-11-03
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：air-quality, atmosphere, copernicus, esa, eu, knmi, nitrogen-dioxide, no2, pollution, s5p, sentinel, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NO2_column_number_density | Total vertical column of NO<sub>2</sub> (ratio of the slant column density of NO<sub>2</sub> and the total air mass factor).  | 1113.2 |  |
| tropospheric_NO2_column_number_density | tropospheric vertical column of NO<sub>2</sub> | 1113.2 |  |
| stratospheric_NO2_column_number_density | stratospheric vertical column of NO<sub>2</sub> | 1113.2 |  |
| NO2_slant_column_number_density | NO<sub>2</sub> slant column density | 1113.2 |  |
| tropopause_pressure | topopause pressure | 1113.2 |  |
| absorbing_aerosol_index | Aerosol index (at wavelengths 354/388 nm, i.e. the OMI pair) from the AER_AI level 2 product.  See [Level 2 Algorithms - Ultraviolet Aerosol Index](https://sentinel.esa.int/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-ultraviolet-aerosol-index).  | 1113.2 |  |
| cloud_fraction | Effective cloud fraction. See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220.  | 1113.2 |  |
| sensor_altitude | Altitude of the satellite with respect to the geodetic sub-satellite point (WGS84). | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_NO2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_NO2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
