---
title: "Sentinel-5P NRTI O3: Near Real-Time Ozone"
date: 2026-11-03 12:00:00
permalink: /pages/8433d874/
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

# Sentinel-5P NRTI O3: Near Real-Time Ozone

## 数据集简介

### NRTI/L3_O3

This dataset provides near-real-time high-resolution imagery of total
column ozone concentrations. See also `COPERNICUS/S5P/OFFL/L3_O3_TCL`
for the tropospheric column data.

In the stratosphere, the ozone layer shields the biosphere from dangerous
solar ultraviolet radiation. In the troposphere, it acts as an efficient
cleansing agent, but at high concentration it also becomes harmful to the
health of humans, animals, and vegetation. Ozone is also an important
greenhouse-gas contributor to ongoing climate change. Since the discovery
of the Antarctic ozone hole in the 1980s and the subsequent Montreal Protocol
regulating the production of chlorine-containing ozone-depleting substances,
ozone has been routinely monitored from the ground and from space.

For this product, there are two algorithms that deliver total ozone: GDP for
the near real-time and GODFIT for the offline products. GDP is currently
being used for generating the operational total ozone products from GOME,
SCIAMACHY and GOME-2; while GODFIT is being used in the ESA CCI and the
Copernicus C3S projects.
[More information.](https://www.tropomi.eu/data-products/ozone-total-column)
[Product user manual.](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Total-Column)

### NRTI L3 Product

To make our NRTI L3 products, we use [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html)
to grid the data.

The qa value is adjusted before running harpconvert to satisfy all of the
following criteria:

* ozone_total_vertical_column in [0, 0.45]
* ozone_effective_temperature in [180, 260]
* fitted_root_mean_square <= 0.01

Example harpconvert invocation:
```
harpconvert --format hdf5 --hdf5-compression 9
-a 'O3_column_number_density_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(O3_column_number_density,O3_column_number_density_amf,
O3_slant_column_number_density,O3_effective_temperature,cloud_fraction,
sensor_azimuth_angle,sensor_zenith_angle,solar_azimuth_angle,
solar_zenith_angle)'
S5P_NRTI_L2__O3_____20180710T230038_20180710T230538_03840_01_010000_20180711T005227.nc
output.h5
```

- Assets between the dates 2018-07-10 and 2018-07-18 are missing due to non-standard structure
of product files.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_O3`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-07-10 至 2026-11-02
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：air-quality, atmosphere, copernicus, esa, eu, o3, ozone, pollution, s5p, sentinel, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| O3_column_number_density | Total atmospheric column of O<sub>3</sub> between the surface and the top of atmosphere, calculated with the [DOAS algorithm](http://projects.knmi.nl/omi/research/product/product_generator.php?info=algo&product=Ozone&flavour=OMDOAO3&long=DOAS%20Total%20Ozone%20column).  | 1113.2 |  |
| O3_column_number_density_amf | Weighted mean of cloudy and clear air mass factor (amf) weighted by intensity-weighted cloud fraction. | 1113.2 |  |
| O3_slant_column_number_density | O<sub>3</sub> ring corrected slant column number density | 1113.2 |  |
| O3_effective_temperature | Ozone cross section effective temperature | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220.  | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_O3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_O3

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
