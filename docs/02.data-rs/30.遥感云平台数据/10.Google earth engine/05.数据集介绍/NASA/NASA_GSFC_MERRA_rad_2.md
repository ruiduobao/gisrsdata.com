---
title: "MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/201faee8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "atmosphere"
  - "climate"
  - "emissivity"
  - "merra"
  - "shortwave"
  - "temperature"
  - "weather-and-climate"
---

# MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4

## 数据集简介

M2T1NXRAD (or tavg1_2d_rad_Nx) is an hourly time-averaged data
collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of radiation
diagnostics, such as surface albedo, cloud area fraction, in cloud
optical thickness, surface incoming shortwave flux (i.e. solar
radiation), surface net downward shortwave flux, and upwelling longwave
flux at TOA (top of atmosphere) (i.e. outgoing longwave radiation (OLR)
at TOA). The data field is time-stamped with the central time of an hour
starting from 00:30 UTC, e.g.: 00:30, 01:30, ... , 23:30 UTC.

MERRA-2 is the latest version of global atmospheric reanalysis for the
satellite era produced by NASA Global Modeling and Assimilation Office
(GMAO) using the Goddard Earth Observing System Model (GEOS) version
5.12.4. The dataset covers the period of 1980-present with the latency
of ~3 weeks after the end of a month.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/rad/2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA/MERRA、Google Earth Engine
- 时间范围：1980-01-01 至 2026-10-01
- 空间分辨率：69375 米
- 许可：proprietary
- 关键词：albedo, atmosphere, climate, emissivity, merra, shortwave, temperature, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ALBEDO | Surface albedo | 69375 |  |
| ALBNIRDF | Surface albedo for near infrared diffuse | 69375 |  |
| ALBNIRDR | Surface albedo for near infrared beam | 69375 |  |
| ALBVISDF | Surface albedo for visible diffuse | 69375 |  |
| ALBVISDR | Surface albedo for visible beam | 69375 |  |
| CLDHGH | Cloud area fraction for high clouds | 69375 |  |
| CLDLOW | Cloud area fraction for low clouds | 69375 |  |
| CLDMID | Cloud area fraction for middle clouds | 69375 |  |
| CLDTOT | Total cloud area fraction | 69375 |  |
| EMIS | Surface emissivity | 69375 |  |
| LWGABCLRCLN | Surface absorbed longwave radiation assuming clear sky and no aerosol | 69375 |  |
| LWGABCLR | Surface absorbed longwave radiation assuming clear sky | 69375 |  |
| LWGAB | Surface absorbed longwave radiation | 69375 |  |
| LWGEM | Longwave flux emitted from surface | 69375 |  |
| LWGNTCLRCLN | Surface net downward longwave flux assuming clear sky and no aerosol | 69375 |  |
| LWGNTCLR | Surface net downward longwave flux assuming clear sky | 69375 |  |
| LWGNT | Surface net downward longwave flux | 69375 |  |
| LWTUPCLRCLN | Upwelling longwave flux at TOA assuming clear sky and no aerosol | 69375 |  |
| LWTUPCLR | Upwelling longwave flux at TOA assuming clear sky | 69375 |  |
| LWTUP | Upwelling longwave flux at TOA | 69375 |  |
| SWGDNCLR | Surface incoming shortwave flux assuming clear sky | 69375 |  |
| SWGDN | Surface incoming shortwave flux | 69375 |  |
| SWGNTCLN | Surface net downward shortwave flux assuming no aerosol | 69375 |  |
| SWGNTCLRCLN | Surface net downward shortwave flux assuming clear sky and no aerosol | 69375 |  |
| SWGNTCLR | Surface net downward shortwave flux assuming clear sky | 69375 |  |
| SWGNT | Surface net downward shortwave flux | 69375 |  |
| SWTDN | TOA incoming shortwave flux | 69375 |  |
| SWTNTCLN | TOA net downward shortwave flux assuming no aerosol | 69375 |  |
| SWTNTCLRCLN | TOA net downward shortwave flux assuming clear sky and no aerosol | 69375 |  |
| SWTNTCLR | TOA net downward shortwave flux assuming clear sky | 69375 |  |
| SWTNT | TOA net downward shortwave flux | 69375 |  |
| TAUHGH | In cloud optical thickness of high clouds(export) | 69375 |  |
| TAULOW | In cloud optical thickness of low clouds | 69375 |  |
| TAUMID | In cloud optical thickness of middle clouds | 69375 |  |
| TAUTOT | In cloud optical thickness of all clouds | 69375 |  |
| TS | Surface skin temperature | 69375 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/rad/2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_rad_2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
