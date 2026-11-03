---
title: "MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global  Climate Models"
date: 2026-11-03 12:00:00
permalink: /pages/f81aa130/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "conus"
  - "geophysical"
  - "idaho"
  - "maca"
  - "monthly"
  - "weather-and-climate"
---

# MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global  Climate Models

## 数据集简介

The MACAv2-METDATA dataset is a collection of 20 global
climate models covering the conterminous USA. The Multivariate Adaptive
Constructed Analogs (MACA) method is a statistical downscaling
method which utilizes a training dataset (i.e. a meteorological
observation dataset) to remove historical biases and match spatial
patterns in climate model output.

The MACA method was used to downscale the model output from 20
global climate models (GCMs) of the Coupled Model Inter-Comparison
Project 5 (CMIP5) for the historical GCM forcings (1950-2005) and
the future Representative Concentration Pathways (RCPs) RCP 4.5
and RCP 8.5 scenarios (2006-2100) from the native resolution of
the GCMS to 4km.

This version contains monthly summaries.

The full list of models can be found at:
[https://climate.northwestknowledge.net/MACA/GCMs.php](https://climate.northwestknowledge.net/MACA/GCMs.php)

## 基本信息

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of California Merced、Google Earth Engine
- 时间范围：1900-01-01 至 2099-12-31
- 空间分辨率：4638.3 米
- 许可：CC0-1.0
- 关键词：climate, conus, geophysical, idaho, maca, monthly, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tasmax | Monthly average of maximum daily temperature near surface | 4638.3 |  |
| tasmin | Monthly average of minimum daily temperature near surface | 4638.3 |  |
| huss | Monthly average of mean daily specific humidity near surface | 4638.3 |  |
| pr | Total monthly precipitation amount at surface | 4638.3 |  |
| rsds | Monthly average of mean daily downward shortwave radiation at surface | 4638.3 |  |
| was | Monthly average of mean daily near surface wind speed | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_MACAv2_METDATA_MONTHLY
- 数据引用：Abatzoglou J.T. and Brown T.J., A comparison of statistical downscaling
methods suited for wildfire applications, International Journal
of Climatology(2012) [doi:10.1002/joc.2312](https://doi.org/10.1002/joc.2312).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
