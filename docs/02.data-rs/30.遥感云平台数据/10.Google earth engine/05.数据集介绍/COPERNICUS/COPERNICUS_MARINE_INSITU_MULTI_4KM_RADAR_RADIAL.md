---
title: "Copernicus Global In-situ Observations of Ocean Currents - Radar Radial"
date: 2026-11-03 12:00:00
permalink: /pages/954f2a11/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "currents"
  - "insitu"
  - "oceans"
  - "radar"
---

# Copernicus Global In-situ Observations of Ocean Currents - Radar Radial

## 数据集简介

The In Situ TAC is a distributed centre organized around 7 oceanographic
regions: the global ocean and the 6 EUROGOOS regional alliances. It involves
14 partners from 11 countries in Europe. It doesn't deploy any observing
system and relies on data, exclusively funded by other sources than
Copernicus Marine Service.

This dataset contains sea surface current observations from High-Frequency
(HF) radars. Sea surface currents measured by HF radar are an average over
the top 0.3-2.5 m of the water column, depending on the operating central
frequency.

This dataset provides radial velocity components. It comprises gridded maps
of radial velocity fields of the surface current averaged over a time
interval. Radial velocities are measured on a polar grid and then remapped
onto a Cartesian grid. The final product is a map of the zonal and
meridional components of the radial ocean currents on a regular grid in the
area covered by the individual radar stations.

For more details refer to this
[user manual](https://documentation.marine.copernicus.eu/PUM/CMEMS-INS-PUM-013-048.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_RADIAL`
- 数据类型：bigquery_table
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2025-03-28 至 至今
- 许可：CC-BY-4.0
- 关键词：copernicus, currents, insitu, oceans, radar

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| TIME | DATETIME | Datetime of the observation |
| LATITUDE | DOUBLE | Latitude of the observation |
| LONGITUDE | DOUBLE | Longitude of the observation |
| DEPTH | DOUBLE | Number of depth levels |
| RNGE | DOUBLE | Range (away from the instrument) of the measurement (km) |
| BEAR | DOUBLE | Bearing (away from the instrument) of the measurement (degrees)  |
| DEPH | DOUBLE | Depth of the observation (m) |
| ESPC | DOUBLE | Radial Standard Deviation of Current Velocity over the Scatter Patch (m/s)  |
| ETMP | DOUBLE | Radial Standard Deviation of Current Velocity over the Coverage Period (m/s)  |
| MAXV | DOUBLE | Maximum velocity |
| MINV | DOUBLE | Minimum velocity |
| ERSC | DOUBLE | Radial surface current error |
| ERTC | DOUBLE | Total radial current error |
| XDST | DOUBLE | Distance in X-direction from radar site |
| YDST | DOUBLE | Distance in Y-direction from radar site |
| SPRC | DOUBLE | Spectral peakiness |
| OWTR_QC | INT | Quality control flag for OWTR.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| CSPD_QC | INT | Quality control flag for CSPD.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| VART_QC | INT | Quality control flag for VART.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| MDFL_QC | INT | Quality control flag for MDFL.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| AVRB_QC | INT | Quality control flag for AVRB.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| RDCT_QC | INT | Quality control flag for RDCT.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| QCflag | INT | Overall quality flag  Note: a value of 1 here indicates that all data in that row's source file was good, but because each row has QC bits for individual fields, a value other than 1 here does not necessarily mean that a row cannot or should not be used.  |
| DRVA | DOUBLE | Direction of Radial Sea Water Velocity away From Instrument (degrees)  |
| RDVA | DOUBLE | Radial Sea Water Velocity Away From Instrument (m/s)  |
| EWCT | DOUBLE | Surface Eastward Sea Water Velocity (m/s) |
| NSCT | DOUBLE | Surface Northward Sea Water Velocity (m/s) |
| POSITION_QC | INT | Quality control flag for POSITION.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| SDN_STATION | STRING | Station identifier |
| TIME_QC | INT | Quality control flag for TIME.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| DEPH_QC | INT | Quality control flag for DEPH.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8.  |
| geometry | GEOMETRY | Geographic location of the observation |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_RADIAL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_RADAR_RADIAL

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
