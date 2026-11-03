---
title: "Copernicus Global In-situ Observations of Ocean Currents - Argo"
date: 2026-11-03 12:00:00
permalink: /pages/e4b2de62/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "currents"
  - "insitu"
  - "oceans"
---

# Copernicus Global In-situ Observations of Ocean Currents - Argo

## 数据集简介

The In Situ TAC is a distributed centre organized around 7 oceanographic
regions: the global ocean and the 6 EUROGOOS regional alliances. It involves
14 partners from 11 countries in Europe. It doesn't deploy any observing
system and relies on data, exclusively funded by other sources than
Copernicus Marine Service.

This dataset is derived from the original trajectory data from Argo GDAC
(Global Data Assembly Center). In 2020, the GDAC distributes data from more
than 15,000 Argo floats. Deep ocean current is calculated from floats drift
at parking depth, surface current is calculated from float surface drift.

For more details refer to this
[user manual](https://documentation.marine.copernicus.eu/PUM/CMEMS-INS-PUM-013-048.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/INSITU_MULTI_4KM/ARGO`
- 数据类型：bigquery_table
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2025-03-28 至 至今
- 许可：CC-BY-4.0
- 关键词：copernicus, currents, insitu, oceans

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| TIME | DATETIME | Datetime of the observation |
| DEPTH | DOUBLE | Number of depth levels |
| LATITUDE | DOUBLE | Latitude of the observation |
| LONGITUDE | DOUBLE | Longitude of the observation |
| PRES | DOUBLE | Representative pressure of the current observation. Can be 0 or parking depth pressure (decibar).  |
| TRAJECTORY | STRING | Trajectory identifier |
| PRES_QC | INT | Quality control flag for PRES.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| EWCT | DOUBLE | West-East sea water velocity at the representative pressure (m/s)  |
| EWCT_QC | INT | Quality control flag for EWCT.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| NSCT | DOUBLE | South-North sea water velocity at the representative pressure (m/s)  |
| NSCT_QC | INT | Quality control flag for NSCT.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| TIME_QC | INT | Quality control flag for TIME.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| POSITION_QC | INT | Quality control flag for POSITION.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| CYCLE_NUMBER | DOUBLE | Cycle number of the Argo float |
| GROUNDED | STRING | Indicates the best estimate of whether the float touched the ground for that cycle. The conventions are described below:  * Y: Yes, the float touched the ground * B: Yes, the float touched the ground after bathymetry check with an     outside database * N: No, the float did not touch the ground * S: Float is known to be drifting at a shallower depth than     originally programmed * U: Unknown  |
| DURATION | DOUBLE | Duration of measurement |
| geometry | GEOMETRY | Geographic location of the observation |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/INSITU_MULTI_4KM/ARGO');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_ARGO

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
