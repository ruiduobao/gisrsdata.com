---
title: "ALOS-2 PALSAR-2 StripMap Level 2.1"
date: 2026-11-03 12:00:00
---

# ALOS-2 PALSAR-2 StripMap Level 2.1

Original name: ALOS-2 PALSAR-2 StripMap Level 2.1

## What this dataset is

Starting from the night of January 1st, 2024, based on the request from
Japanese ministries and related organization, JAXA implemented ALOS-2
PALSAR-2 emergency observation. Since JAXA expects these emergency
observation data to be extremely useful for disaster
management, JAXA decided to open these data on Google Earth Engine for
public and research usage.

JAXA released PALSAR-2 Level 2.1 strip map mode observation data with 3m
single polarization for January 1-3 and January 8 2024, together with
some archive
data. PALSAR-2 Level 2.1 data is orthorectified from level 1.1 data by using
digital elevation model. The DN values can be converted to sigma naught
values in decibel unit (dB) using the following equation:

* &sigma;<sub>0</sub> = 10*log<sub>10</sub>(DN<sup>2</sup>) - 83.0 dB

Below are the dates for which the dataset has data.

Obs date                   | Frame     |  Beam     | A/D
:--------------------------|:----------|:----------|:---------------
2024/01/01 and 2022/09/26  | 0750, 0760, 0770 | U2-6L | Asc.
2024/01/02 and 2023/06/06  | 2820, 2830, 2840 | U2-8L | Desc.
2024/01/08, 2024/01/03 and 2023/12/06  | 0720, 0730 | U2-9R | Asc.

## Coverage and time range

- Coverage: Coverage: around Japan (January 2024 Noto Peninsula earthquake emergency observation areas and some archive areas); time span: 26 September 2022 to 8 January 2024; resolution: 3 m.
- Time range: 2022-09-26 至 2024-01-08

## Resolution and specifications

- Spatial resolution: about 3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| b1 | HH polarization Terrain-flattened Gamma-Nought backscatter coefficient. | 3 |  |

## What you can use it for

- Surface change and disaster emergency monitoring
- Flood and land-cover mapping
- SAR remote sensing teaching and research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401');
```

- Earth Engine ID: `JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401`
- Providers: JAXA EORC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR-2_Level2_1_StripMap_202401

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: alos2, eroc, jaxa, palsar2, radar, sar, satellite-imagery
- 数据引用：The data used for this paper have been provided by Earth Observation
Research Center (EORC) of Japan Aerospace Exploration Agency (JAXA).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/pages/d4abf354/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0](/pages/13015f55/)
- [PALSAR-2 ScanSAR Level 2.2](/pages/636ee51c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
