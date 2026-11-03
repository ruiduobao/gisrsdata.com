---
title: "Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties"
date: 2026-11-03 12:00:00
permalink: /pages/1637d632/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "cloud"
  - "copernicus"
  - "dlr"
  - "esa"
  - "eu"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties

## 数据集简介

### NRTI/L3_CLOUD

This dataset provides near real-time high-resolution imagery of cloud parameters.

The TROPOMI/S5P cloud properties retrieval is based on the OCRA and ROCINN
algorithms currently being used in the operational GOME and GOME-2 products.
OCRA retrieves the cloud fraction using measurements in the UV/VIS spectral
regions and ROCINN retrieves the cloud height (pressure) and optical thickness
(albedo) using measurements in and around the oxygen A-band at 760 nm. Version 3.0
of the algorithms are used, which are based on a more realistic
treatment of clouds as optically uniform layers of light-scattering particles.
Additionally, the cloud parameters are also provided for a cloud model which
assumes the cloud to be a Lambertian reflecting boundary.
[More information.](http://www.tropomi.eu/data-products/cloud)

### NRTI L3 Product

To make our NRTI L3 products, we use [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html)
to grid the data.

Example harpconvert invocation for one tile:
```
harpconvert --format hdf5 --hdf5-compression 9
-a 'cloud_fraction>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(cloud_fraction,cloud_top_pressure,cloud_top_height,
cloud_base_pressure,cloud_base_height,cloud_optical_depth,surface_albedo,
sensor_azimuth_angle,sensor_zenith_angle,solar_azimuth_angle,
solar_zenith_angle)'
S5P_NRTI_L2__CLOUD__20190208T230503_20190208T231003_06860_01_010105_20190209T005255.nc
output.h5
```

Assets between the dates 2018-07-10 and 2018-07-18 are missing due to non-standard structure
of product files.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/NRTI/L3_CLOUD`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2018-07-05 至 2026-11-02
- 空间分辨率：1113.2 米
- 许可：proprietary
- 关键词：atmosphere, cloud, copernicus, dlr, esa, eu, s5p, sentinel, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cloud_fraction | Retrieved effective radiometric cloud fraction | 1113.2 |  |
| cloud_top_pressure | Retrieved atmospheric pressure at the level of cloud top | 1113.2 |  |
| cloud_top_height | Retrieved altitude of the cloud top | 1113.2 |  |
| cloud_base_pressure | Cloud base pressure | 1113.2 |  |
| cloud_base_height | Cloud base height | 1113.2 |  |
| cloud_optical_depth | Retrieved cloud optical depth | 1113.2 |  |
| surface_albedo | Surface albedo | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical.  | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_CLOUD');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_CLOUD

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
