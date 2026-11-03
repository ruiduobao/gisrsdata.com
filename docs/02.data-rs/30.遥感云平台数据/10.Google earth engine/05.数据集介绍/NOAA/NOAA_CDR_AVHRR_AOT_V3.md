---
title: "NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v03 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/53ecd31b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aot"
  - "atmosphere"
  - "atmospheric"
  - "avhrr"
  - "cdr"
  - "daily"
  - "noaa"
  - "optical"
  - "pollution"
---

# NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v03 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The NOAA Climate Data Record (CDR) of Aerosol Optical Thickness (AOT) is a
collection of global daily 0.1 degree derived data from the PATMOS-x AVHRR
level-2b channel 1 (0.63 micron) orbital clear-sky radiance. The aerosol
product is generated from AVHRR imagery in cloud-free conditions during
daytime over oceans.

Due to the relatively large uncertainties associated with surface
reflectance over water glint area and land surface as well as limited
AVHRR retrieval channels, this dataset only includes retrieval over
non-glint water surface (specifically at the anti-solar side of the orbit
with viewing angle more than 40 degree away from the specular ray). For
more details, see the [Algorithm Description](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Aerosol_Optical_Thickness/AlgorithmDescription_01B-04.pdf).

Image and data processing by NOAA's National Climatic Data Center.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/AVHRR/AOT/V3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1981-01-01 至 2022-03-31
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：aerosol, aot, atmosphere, atmospheric, avhrr, cdr, daily, noaa, optical, pollution

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| aot | Atmosphere optical thickness; the degree to which aerosols prevent the transmission of light by absorption or scattering of light. A value of 0.01 corresponds to an extremely clean atmosphere, and a value of 0.4 would correspond to a very hazy condition. An average aerosol optical depth for the U.S. is 0.1 to 0.15.  | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/AOT/V3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_AOT_V3
- 数据引用：Zhao, Xuepeng; and NOAA CDR Program (2017): NOAA Climate Data Record (CDR)
of AVHRR Daily and Monthly Aerosol Optical Thickness (AOT) over Global
Oceans, Version 3.0. [indicate subset used]. NOAA National Centers for
Environmental Information. [doi:10.7289/V5BZ642P](https://doi.org/10.7289/V5BZ642P)
[date accessed].

- DOI：10.7289/V5BZ642P

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
