---
title: "ALOS/AVNIR-2 ORI"
date: 2026-11-03 12:00:00
---

# ALOS/AVNIR-2 ORI

Original name: ALOS/AVNIR-2 ORI

## What this dataset is

This dataset is contains orthorectified imagery from
the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2)
sensor on-board the Advanced Land Observing Satellite (ALOS) \"DAICHI\".

The AVNIR-2 ORI product was created from AVNIR-2 1B1 data after stereo
matching with reference to ALOS's Panchromatic Remote-sensing Instrument
for Stereo Mapping (PRISM)-derived DSM AW3D30. The orthorectification
process used AW3D30 DSM data when available and SRTM (The Shuttle
Radar Topography Mission) DSM data otherwise.

## Coverage and time range

- Coverage: Coverage: global (ALOS observation areas); time span: 26 April 2006 to 18 April 2011; resolution: 10 m.
- Time range: 2006-04-26 至 2011-04-18

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B1 | Blue (0.42 - 0.50 &mu;m) | 10 |  |
| B2 | Green (0.52 - 0.60 &mu;m) | 10 |  |
| B3 | Red (0.61 - 0.69 &mu;m) | 10 |  |
| B4 | Near-Infrared (0.76 - 0.89 &mu;m) | 10 |  |

## What you can use it for

- Historical high-resolution optical imagery analysis
- Land-cover change backtracking
- Orthophoto basemaps and visual interpretation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/ALOS/AVNIR-2/ORI');
```

- Earth Engine ID: `JAXA/ALOS/AVNIR-2/ORI`
- Providers: JAXA Earth Observation Research Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI

## License and citation

- License: proprietary
- Keywords: alos, avnir-2, eorc, jaxa, orthophoto, satellite-imagery, visible
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS-2 PALSAR-2 StripMap Level 2.1](/pages/b836b19e/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0](/pages/13015f55/)
- [PALSAR-2 ScanSAR Level 2.2](/pages/636ee51c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
