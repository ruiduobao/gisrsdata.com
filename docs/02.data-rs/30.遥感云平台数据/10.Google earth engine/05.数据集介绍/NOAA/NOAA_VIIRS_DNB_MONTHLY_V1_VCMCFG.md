---
title: "VIIRS Nighttime Day/Night Band Composites Version 1"
date: 2026-11-03 12:00:00
permalink: /pages/331f49de/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dnb"
  - "eog"
  - "lights"
  - "monthly"
  - "nighttime"
  - "noaa"
  - "population"
  - "viirs"
  - "visible"
---

# VIIRS Nighttime Day/Night Band Composites Version 1

## 数据集简介

Monthly average radiance composite images using nighttime data from the
Visible Infrared Imaging Radiometer Suite (VIIRS) Day/Night Band (DNB).

As these data are composited monthly, there are many areas of the globe
where it is impossible to get good quality data coverage for that month.
This can be due to cloud cover, especially in the tropical regions, or due
to solar illumination, as happens toward the poles in their respective
summer months. Therefore it is recommended that users of these data utilize
the 'cf_cvg' band and not assume a value of zero in the average radiance
image means that no lights were observed.

Cloud cover is determined using the VIIRS Cloud
Mask product (VCM). In addition, data near the edges of the swath are not
included in the composites (aggregation zones 29-32). Version 1 has NOT
been filtered to screen out lights from aurora, fires, boats, and other
temporal lights. This separation is under development and will be included
in a later version of this time series. Also in development is a method to
separate lights from background (non-light) values.

Prior to averaging, the DNB data is filtered to exclude data impacted by
stray light, lightning, lunar illumination, and cloud-cover.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG`
- 数据类型：影像集合（ImageCollection）
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 时间范围：2012-04-01 至 2026-09-01
- 空间分辨率：463.83 米
- 许可：proprietary
- 关键词：dnb, eog, lights, monthly, nighttime, noaa, population, viirs, visible

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| avg_rad | Average DNB radiance values. | 463.83 |  |
| cf_cvg | Cloud-free coverages; the total number of observations that went into each pixel. This band can be used to identify areas with low numbers of observations where the quality is reduced.  | 463.83 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_MONTHLY_V1_VCMCFG

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
