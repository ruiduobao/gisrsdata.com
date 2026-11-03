---
title: "GPM: Monthly Global Precipitation Measurement (GPM) v6"
date: 2026-11-03 12:00:00
permalink: /pages/0308328b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "gpm"
  - "imerg"
  - "jaxa"
  - "monthly"
  - "nasa"
  - "precipitation"
  - "weather"
---

# GPM: Monthly Global Precipitation Measurement (GPM) v6

## 数据集简介

IMERG-Final version "06" stopped being produced in September, 2021.
Version "07" is expected to be released in September 2022

Global Precipitation Measurement (GPM) is an international
satellite mission to provide next-generation observations of
rain and snow worldwide every three hours. The Integrated Multi-satellitE
Retrievals for GPM (IMERG) is the unified algorithm that provides
rainfall estimates combining data from all passive-microwave
instruments in the GPM Constellation.

This algorithm is intended to intercalibrate, merge, and interpolate
all satellite microwave precipitation estimates, together with
microwave-calibrated infrared (IR) satellite estimates, precipitation
gauge analyses, and potentially other precipitation estimators at fine
time and space scales for the TRMM and GPM eras over the entire globe.
The system is run several times for each observation time, first
giving a quick estimate and successively providing better estimates
as more data arrive. The final step uses monthly gauge data to
create research-level products. See [IMERG Technical Documentation](https://pmm.nasa.gov/sites/default/files/document_files/IMERG_doc.pdf)
for more details on the algorithm.

Documentation:

* [Algorithm Theoretical Basis Document](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERG_ATBD_V06.pdf)

* [IMERG Quality Index](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_QI.pdf)

* [Caveats for IMERG extension into TRMM era](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_TRMMera-caveats.pdf)

* [IMERG Technical Documentation](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERG_doc.06.pdf)

* [Release notes; New Morphing algorithm](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/MorphingInV06IMERG.pdf)

* [Remote-Sensing Reflectance](https://gpm1.gesdisc.eosdis.nasa.gov/data/GPM_L3/doc/README.GPM.pdf)

* [Anomalies](https://gpmweb2https.pps.eosdis.nasa.gov/tsdis/AB/docs/gpm_anomalous.html)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GPM_L3/IMERG_MONTHLY_V06`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：2000-06-01 至 2021-09-01
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：climate, geophysical, gpm, imerg, jaxa, monthly, nasa, precipitation, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| gaugeRelativeWeighting | Weighting of gauge precipitation relative to the multi-satellite precipitation | 11132 |  |
| precipitation | Merged satellite-gauge precipitation estimate | 11132 |  |
| precipitationQualityIndex | Quality Index for precipitation field | 11132 |  |
| probabilityLiquidPrecipitation | Accumulation-weighted probability of liquid precipitation phase | 11132 |  |
| randomError | Random error for merged satellite-gauge precipitation | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_MONTHLY_V06');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GPM_L3_IMERG_MONTHLY_V06
- 数据引用：Huffman, G.J., E.F. Stocker, D.T. Bolvin, E.J. Nelkin, Jackson Tan (2019),
GPM IMERG Final Precipitation L3 1 month 0.1 degree x 0.1 degree V06,
Greenbelt, MD, Goddard Earth Sciences Data and Information Services Center
(GES DISC), Accessed: [Data Access Date], 10.5067/GPM/IMERG/3B-MONTH/06

- DOI：10.5067/GPM/IMERG/3B-MONTH/06

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
