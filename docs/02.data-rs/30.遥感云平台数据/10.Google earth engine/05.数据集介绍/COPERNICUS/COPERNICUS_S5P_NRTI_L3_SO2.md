---
title: "Sentinel-5P NRTI SO2: Near Real-Time Sulfur Dioxide"
date: 2026-11-03 12:00:00
permalink: /pages/3e5d31e9/
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
  - "pollution"
  - "s5p"
  - "sentinel"
  - "so2"
  - "sulfur-dioxide"
---

# Sentinel-5P NRTI SO2: Near Real-Time Sulfur Dioxide

## 数据集简介

### NRTI/L3_SO2

This dataset provides near real-time high-resolution imagery of atmospheric
sulfur dioxide (SO<sub>2</sub>) concentrations.

Sulfur dioxide (SO<sub>2</sub>) enters the Earth's atmosphere through both natural and
anthropogenic processes. It plays a role in chemistry on a local and global
scale and its impact ranges from short-term pollution to effects on climate.
Only about 30% of the emitted SO<sub>2</sub> comes from natural sources; the majority
is of anthropogenic origin. SO<sub>2</sub> emissions adversely affect human health and
air quality. SO<sub>2</sub> has an effect on climate through radiative forcing, via
the formation of sulfate aerosols. Volcanic SO<sub>2</sub> emissions can also pose a
threat to aviation, along with volcanic ash. S5P/TROPOMI samples the Earth's
surface with a revisit time of one day with unprecedented spatial resolution
of 3.5 x 7 km which allows the resolution of fine details including the
detection of much smaller SO<sub>2</sub> plumes.
[More information.](https://www.tropomi.eu/data-products/sulfur-dioxide)

### NRTI L3 Product

To make our NRTI L3 products, we use [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html)
to grid the data.

The qa value is adjusted before running harpconvert to satisfy all of the
following criteria:

* snow_ice < 0.5
* sulfurdioxide_total_air_mass_factor_polluted > 0.1
* sulfurdioxide_total_vertical_column > -0.001
* qa_value > 0.5
* cloud_fraction_crb < 0.3
* solar_zenith_angle < 60

The 15km SO2 band is ingested only when solar_zenith_angle < 70.

Example harpconvert invocation for one tile:
```
harpconvert --format hdf5 --hdf5-compression 9
-a 'SO2_column_number_density_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(SO2_column_number_density,SO2_column_number_density_amf,
     SO2_slant_column_number_density,cloud_fraction, sensor_altitude,
     sensor_azimuth_angle, sensor_zenith_angle,solar_azimuth_angle,
     solar_zenith_angle)'
S5P_NRTI_L2__SO2____20190129T101503_20190129T102003_06711_01_010105_20190129T111328.nc
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

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_SO2`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-07-10 至 2026-11-02
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：air-quality, atmosphere, bira, copernicus, dlr, esa, eu, pollution, s5p, sentinel, so2, sulfur-dioxide, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SO2_column_number_density | SO<sub>2</sub> vertical column density at ground level, calculated using the DOAS technique. | 1113.2 |  |
| SO2_column_number_density_amf | Weighted mean of cloudy and clear air mass factor (amf) weighted by intensity-weighted cloud fraction. | 1113.2 |  |
| SO2_slant_column_number_density | SO<sub>2</sub> ring corrected slant column number density | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220.  | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| SO2_column_number_density_15km | SO<sub>2</sub> vertical column density at 15km, calculated using the DOAS technique. | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_SO2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_SO2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
