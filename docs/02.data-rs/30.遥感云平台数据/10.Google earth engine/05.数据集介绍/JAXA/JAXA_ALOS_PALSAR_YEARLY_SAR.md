---
title: "Global PALSAR-2/PALSAR Yearly Mosaic, version 1"
date: 2026-11-03 12:00:00
permalink: /pages/03cf5a7a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "alos2"
  - "eroc"
  - "jaxa"
  - "palsar"
  - "palsar2"
  - "sar"
  - "satellite-imagery"
---

# Global PALSAR-2/PALSAR Yearly Mosaic, version 1

## 数据集简介

A newer version of this dataset with data for 2015-2021 can be found in
[JAXA/ALOS/PALSAR/YEARLY/SAR_EPOCH](JAXA_ALOS_PALSAR_YEARLY_SAR_EPOCH.html)

The global 25m PALSAR/PALSAR-2 mosaic is a seamless global
SAR image created by mosaicking strips of SAR imagery
from PALSAR/PALSAR-2. For each year and location,
the strip data were selected through visual inspection of the
browse mosaics available over the period, with those showing minimum
response to surface moisture preferentially used. In cases
where the availability was limited (e.g., because of the requirement
for observations during specific emergencies), data were necessarily
selected from the year before or after, including from 2006.
[Shimada et al. 2014](https://doi.org/10.1016/j.rse.2014.04.014)

There is no data for 2011-2014 due to the gap between ALOS and ALOS-2
temporal coverage.

The SAR imagery was ortho-rectificatied and slope corrected
using the 90m SRTM Digital Elevation Model.
A destriping process (Shimada & Isoguchi, 2002, 2010) was applied
to equalize the intensity differences between neighboring strips,
occurring largely due to seasonal and daily differences
in surface moisture conditions.

Polarization data are stored as 16-bit digital numbers (DN).
The DN values can be converted to gamma naught values
in decibel unit (dB) using the following equation:

  *    &#947;&#8320; = 10log&#8321;&#8320;(DN&#178;) - 83.0 dB

Attention:

*   Backscatter values may vary significantly from path to path
    over high latitude forest areas. This is due to the change of
    backscattering intensity caused by freezing trees in winter.

More information is available in the provider's
[Dataset Description](https://www.eorc.jaxa.jp/ALOS/en/palsar_fnf/DatasetDescription_PALSAR2_Mosaic_FNF_revH.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR/YEARLY/SAR`
- 数据类型：影像集合（ImageCollection）
- 提供方：JAXA EORC、Google Earth Engine
- 时间范围：2007-01-01 至 2020-01-01
- 空间分辨率：25 米
- 许可：proprietary
- 关键词：alos, alos2, eroc, jaxa, palsar, palsar2, sar, satellite-imagery

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HH | HH polarization backscattering coefficient, 16-bit DN. | 25 |  |
| HV | HV polarization backscattering coefficient, 16-bit DN. | 25 |  |
| angle | Local incidence angle. | 25 |  |
| date | Observation date (days since Jan 1, 1970). | 25 |  |
| qa | Processing information. | 25 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/SAR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR_YEARLY_SAR
- 数据引用：Masanobu Shimada, Takuya Itoh, Takeshi Motooka, Manabu Watanabe,
Shiraishi Tomohiro, Rajesh Thapa, and Richard Lucas, "New Global
Forest/Non-forest Maps from ALOS PALSAR Data (2007-2010)", Remote Sensing
of Environment, 155, pp. 13-31, December 2014.
[doi:10.1016/j.rse.2014.04.014.](https://doi.org/10.1016/j.rse.2014.04.014)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
