---
title: "GOES-18 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/2e7bfffb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "abi"
  - "atmosphere"
  - "goes"
  - "goes-18"
  - "goes-t"
  - "goes-west"
  - "mcmip"
  - "nesdis"
  - "noaa"
  - "ospo"
  - "satellite-imagery"
  - "weather"
---

# GOES-18 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS

## 数据集简介

[GOES](https://www.goes.noaa.gov) satellites are geostationary weather satellites run by NOAA.

The Cloud and Moisture Imagery products are all at 2km
resolution. Bands 1-6 are reflective. The dimensionless "reflectance factor" quantity is
normalized by the solar zenith angle. These bands support the characterization of clouds,
vegetation, snow/ice, and aerosols. Bands 7-16 are emissive. The brightness temperature at the
Top-Of-Atmosphere (TOA) is measured in Kelvin. These bands support the characterization of the
surface, clouds, water vapor, ozone, volcanic ash, and dust based on emissive properties.

[README](https://www.ncei.noaa.gov/products/satellite/goes-r-series)

NOAA's Office of Satellite and Product Operations has a
[General Satellite Messages](https://www.ospo.noaa.gov/Operations/messages.html)
channel with status updates.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/GOES/18/MCMIPC`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：2018-12-04 至 2026-11-03
- 空间分辨率：2000 米
- 许可：proprietary
- 关键词：abi, atmosphere, goes, goes-18, goes-t, goes-west, mcmip, nesdis, noaa, ospo, satellite-imagery, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CMI_C01 | Visible - Blue  Daytime aerosol over land, coastal water mapping. | 2000 | 0.45-0.49&micro;m |
| DQF_C01 | Data quality flags | 2000 |  |
| CMI_C02 | Visible - Red  Daytime clouds, fog, insolation, winds | 2000 | 0.59-0.69&micro;m |
| DQF_C02 | Data quality flags | 2000 |  |
| CMI_C03 | Near-IR - Veggie  Daytime vegetation, burn scar, aerosol over water, winds | 2000 | 0.846-0.885&micro;m |
| DQF_C03 | Data quality flags | 2000 |  |
| CMI_C04 | Near-IR - Cirrus  Daytime cirrus cloud | 2000 | 1.371-1.386&micro;m |
| DQF_C04 | Data quality flags | 2000 |  |
| CMI_C05 | Near-IR - Snow/Ice  Daytime cloud-top phase and particle size, snow | 2000 | 1.58-1.64&micro;m |
| DQF_C05 | Data quality flags | 2000 |  |
| CMI_C06 | Near IR - Cloud Particle Size  Daytime land, cloud properties, particle size, vegetation, snow | 2000 | 2.225-2.275&micro;m |
| DQF_C06 | Data quality flags | 2000 |  |
| CMI_C07 | Infrared - Shortwave Window  Brightness | 2000 | 3.80-4.00&micro;m |
| DQF_C07 | Data quality flags | 2000 |  |
| CMI_C08 | Infrared - Upper-level water vapor  High-level atmospheric water vapor, winds, rainfall  Brightness | 2000 | 5.77-6.6&micro;m |
| DQF_C08 | Data quality flags | 2000 |  |
| CMI_C09 | Infrared - Mid-level water vapor  Mid-level atmospheric water vapor, winds, rainfall  Brightness | 2000 | 6.75-7.15&micro;m |
| DQF_C09 | Data quality flags | 2000 |  |
| CMI_C10 | Infrared - Lower-level water vapor  Lower-level water vapor, winds, and sulfur dioxide  Brightness | 2000 | 7.24-7.44&micro;m |
| DQF_C10 | Data quality flags | 2000 |  |
| CMI_C11 | Infrared - Cloud-top phase  Total water for stability, cloud phase, dust, sulfur dioxide, rainfall  Brightness  | 2000 | 8.3-8.7&micro;m |
| DQF_C11 | Data quality flags | 2000 |  |
| CMI_C12 | Infrared - Ozone  Total ozone, turbulence, winds | 2000 | 9.42-9.8&micro;m |
| DQF_C12 | Data quality flags | 2000 |  |
| CMI_C13 | Infrared - "Clean" longwave window  Surface and clouds  Brightness | 2000 | 10.1-10.6&micro;m |
| DQF_C13 | Data quality flags | 2000 |  |
| CMI_C14 | Infrared - Longwave window  Imagery, sea surface temperature, clouds, rainfall  Brightness | 2000 | 10.8-11.6&micro;m |
| DQF_C14 | Data quality flags | 2000 |  |
| CMI_C15 | Infrared "Dirty" longwave  Total water, volcanic ash, sea surface temperature  Brightness | 2000 | 11.8-12.8&micro;m |
| DQF_C15 | Data quality flags | 2000 |  |
| CMI_C16 | Infrared - CO_2 longwave  Air temperature, cloud heights  Brightness | 2000 | 13.0-13.6&micro;m |
| DQF_C16 | Data quality flags | 2000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/GOES/18/MCMIPC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_18_MCMIPC
- 数据引用：Bah, Gunshor, Schmit, Generation of GOES-16 True Color Imagery without a
Green Band, 2018. [doi:10.1029/2018EA000379](https://doi.org/10.1029/2018EA000379)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
