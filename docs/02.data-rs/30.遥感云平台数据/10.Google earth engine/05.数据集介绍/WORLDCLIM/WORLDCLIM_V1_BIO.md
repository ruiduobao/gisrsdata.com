---
title: "WorldClim BIO Variables V1"
date: 2026-11-03 12:00:00
permalink: /pages/2e6cb25a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "berkeley"
  - "bioclim"
  - "climate"
  - "coldest"
  - "diurnal"
  - "driest"
  - "isothermality"
  - "monthly"
  - "precipitation"
  - "seasonality"
  - "temperature"
  - "warmest"
---

# WorldClim BIO Variables V1

## 数据集简介

WorldClim V1 Bioclim provides bioclimatic variables that are derived from
the monthly temperature and rainfall in order to generate more biologically
meaningful values.

The bioclimatic variables represent annual trends (e.g., mean annual
temperature, annual precipitation), seasonality (e.g., annual range in
temperature and precipitation), and extreme or limiting environmental
factors (e.g., temperature of the coldest and warmest month, and
precipitation of the wet and dry quarters).

The bands scheme follows that of ANUCLIM, except that for temperature
seasonality the standard deviation was used because a coefficient of
variation does not make sense with temperatures between -1 and 1.

WorldClim version 1 was developed by Robert J. Hijmans, Susan Cameron,
and Juan Parra, at the Museum of Vertebrate Zoology, University of
California, Berkeley, in collaboration with Peter Jones and Andrew Jarvis
(CIAT), and with Karen Richardson (Rainforest CRC).

## 基本信息

- 数据集编号（Earth Engine ID）：`WORLDCLIM/V1/BIO`
- 数据类型：影像（Image）
- 提供方：University of California, Berkeley、Google Earth Engine
- 时间范围：1960-01-01 至 1991-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-SA-4.0
- 关键词：berkeley, bioclim, climate, coldest, diurnal, driest, isothermality, monthly, precipitation, seasonality, temperature, warmest, weather, weather-and-climate, wettest, worldclim

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| bio01 | Annual mean temperature | 927.67 |  |
| bio02 | Mean diurnal range (mean of monthly (max temp - min temp)) | 927.67 |  |
| bio03 | Isothermality (bio02/bio07 * 100) | 927.67 |  |
| bio04 | Temperature seasonality (Standard deviation * 100) | 927.67 |  |
| bio05 | Max temperature of warmest month | 927.67 |  |
| bio06 | Min temperature of coldest month | 927.67 |  |
| bio07 | Temperature annual range (bio05-bio06) | 927.67 |  |
| bio08 | Mean temperature of wettest quarter | 927.67 |  |
| bio09 | Mean temperature of driest quarter | 927.67 |  |
| bio10 | Mean temperature of warmest quarter | 927.67 |  |
| bio11 | Mean temperature of coldest quarter | 927.67 |  |
| bio12 | Annual precipitation | 927.67 |  |
| bio13 | Precipitation of wettest month | 927.67 |  |
| bio14 | Precipitation of driest month | 927.67 |  |
| bio15 | Precipitation seasonality | 927.67 |  |
| bio16 | Precipitation of wettest quarter | 927.67 |  |
| bio17 | Precipitation of driest quarter | 927.67 |  |
| bio18 | Precipitation of warmest quarter | 927.67 |  |
| bio19 | Precipitation of coldest quarter | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WORLDCLIM/V1/BIO');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WORLDCLIM_V1_BIO
- 数据引用：Hijmans, R.J., S.E. Cameron, J.L. Parra, P.G. Jones and A. Jarvis,
2005. Very High Resolution Interpolated Climate Surfaces for Global Land
Areas. International Journal of Climatology 25: 1965-1978.
[doi:10.1002/joc.1276](https://doi.org/10.1002/joc.1276).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
