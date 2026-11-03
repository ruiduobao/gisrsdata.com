---
title: "VIIRS Nighttime Day/Night Annual Band Composites V2.1"
date: 2026-11-03 12:00:00
permalink: /pages/98ca1d9b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "dnb"
  - "eog"
  - "lights"
  - "nighttime"
  - "noaa"
  - "population"
  - "viirs"
  - "visible"
---

# VIIRS Nighttime Day/Night Annual Band Composites V2.1

## 数据集简介

Annual global VIIRS nighttime lights dataset is a time series produced from
monthly cloud-free average radiance grids spanning 2013 to 2021.
Data for 2022 are available in the
[NOAA/VIIRS/DNB/ANNUAL_V22](NOAA_VIIRS_DNB_ANNUAL_V22) dataset.

An initial filtering step removed sunlit, moonlit and cloudy pixels,
leading to rough composites that contains lights, fires, aurora and
background. The rough annual composites are made on monthly increments and
then combined to form rough annual composites.

The subsequent steps uses the twelve-month median radiance to discard high
and low radiance outliers, filtering out most fires and isolating the
background. Background areas are zeroed out using the data range (DR)
calculated from 3x3 grid cells. The DR threshold for background is indexed
to cloud-cover levels, with higher DR thresholds in areas having low numbers
of cloud-free coverages.

Note: 2012 data are not yet included because of differences in processing.
(A) 201204-201212, and (B) 201204-201303. Only set (B) has masked median
and average bands which doesn't follow the pattern there in other year
datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/DNB/ANNUAL_V21`
- 数据类型：影像集合（ImageCollection）
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 时间范围：2012-04-01 至 2021-01-01
- 空间分辨率：463.83 米
- 许可：proprietary
- 关键词：annual, dnb, eog, lights, nighttime, noaa, population, viirs, visible

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| average | Average DNB radiance values. | 463.83 |  |
| average_masked | Average Masked DNB radiance values | 463.83 |  |
| cf_cvg | Cloud-free coverages; the total number of observations that went into each pixel. This band can be used to identify areas with low numbers of observations where the quality is reduced.  | 463.83 |  |
| cvg | Total number of observations free of sunlight and moonlight.  | 463.83 |  |
| maximum | Maximum DNB radiance values. | 463.83 |  |
| median | Median DNB radiance values | 463.83 |  |
| median_masked | Median masked DNB radiance values. | 463.83 |  |
| minimum | Minimum DNB radiance values | 463.83 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/ANNUAL_V21');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_ANNUAL_V21
- 数据引用：Elvidge, C.D, Zhizhin, M., Ghosh T., Hsu FC, Taneja J. Annual time series of
global VIIRS nighttime lights derived from monthly averages:2012 to 2019.
Remote Sensing 2021, 13(5), p.922, doi:10.3390/rs13050922
[doi:10.3390/rs13050922](https://doi.org/10.3390/rs13050922)

- DOI：10.3390/rs13050922

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
