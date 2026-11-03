---
title: "GPM: Global Precipitation Measurement (GPM) Release 07"
date: 2026-11-03 12:00:00
permalink: /pages/3e858db5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "gpm"
  - "half-hourly"
  - "imerg"
  - "jaxa"
  - "nasa"
  - "precipitation"
  - "weather"
---

# GPM: Global Precipitation Measurement (GPM) Release 07

## 数据集简介

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

* [Algorithm Theoretical Basis Document](https://arthurhou.pps.eosdis.nasa.gov/Documents/IMERG_V07_ATBD_final.pdf)

* [IMERG Quality Index](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_QI.pdf)

* [Caveats for IMERG extension into TRMM era](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/IMERGV06_TRMMera-caveats.pdf)

* [IMERG Technical Documentation](https://arthurhou.pps.eosdis.nasa.gov/Documents/IMERG_TechnicalDocumentation_final.pdf)

* [Release notes; New Morphing algorithm](https://gpm.nasa.gov/resources/documents/imerg-v07-release-notes)

* [Remote-Sensing Reflectance](https://gpm1.gesdisc.eosdis.nasa.gov/data/GPM_L3/doc/README.GPM.pdf)

* [Anomalies](https://gpmweb2https.pps.eosdis.nasa.gov/tsdis/AB/docs/gpm_anomalous.html)

This collection contains provisional products that are regularly replaced
with updated versions when the data become available. The products are
marked with a metadata property called 'status'. When a product is initially
made available, the property value is 'provisional'. Once a provisional
product has been updated with the final version, this value is updated to
'permanent'. (Note: No 'permanent' products are available beyond 2025/09/30
due to the provider's planned transition to version 8; see
[here](https://gpm.nasa.gov/data/news/imerg-v08-transition-schedule) for
details.)

This collection contains data from:

* GPM_3IMERGHH_V07 [doi:10.5067/GPM/IMERG/3B-HH-L/07](https://doi.org/10.5067/GPM/IMERG/3B-HH-L/07)
* GPM_3IMERGHH_07 [doi:10.5067/GPM/IMERG/3B-HH/07](https://doi.org/10.5067/GPM/IMERG/3B-HH/07)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GPM_L3/IMERG_V07`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1998-01-01 至 2026-11-02
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：climate, geophysical, gpm, half-hourly, imerg, jaxa, nasa, precipitation, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| MWobservationTime | PMW source time | 11132 |  |
| MWprecipSource | PMW source sensor identifier | 11132 |  |
| MWprecipitation | merged PMW precipitation | 11132 |  |
| IRinfluence | Kalman filter weight for IR | 11132 |  |
| IRprecipitation | IR precipitation | 11132 |  |
| precipitation | snapshot precipitation - calibrated | 11132 |  |
| precipitationUncal | snapshot precipitation - uncalibrated | 11132 |  |
| probabilityLiquidPrecipitation | probability of liquid precipitation phase | 11132 |  |
| randomError | calibrated-precipitation random error | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_V07');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GPM_L3_IMERG_V07
- 数据引用：Huffman, G.J., E.F. Stocker, D.T. Bolvin, E.J. Nelkin, Jackson Tan (2019),
GPM IMERG Final Precipitation L3 Half Hourly 0.1 degree x 0.1 degree V06,
Greenbelt, MD, Goddard Earth Sciences Data and Information Services Center
(GES DISC), Accessed: [Data Access Date],
[doi:10.5067/GPM/IMERG/3B-HH/07](https://doi.org/10.5067/GPM/IMERG/3B-HH/07)

- DOI：10.5067/GPM/IMERG/3B-HH-L/07

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
