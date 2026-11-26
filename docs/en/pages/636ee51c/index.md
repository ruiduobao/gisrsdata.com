---
title: "PALSAR-2 ScanSAR Level 2.2"
date: 2026-11-03 12:00:00
---

# PALSAR-2 ScanSAR Level 2.2

Original name: PALSAR-2 ScanSAR Level 2.2

## What this dataset is

The 25 m PALSAR-2 ScanSAR is normalized backscatter data
of PALSAR-2 broad area observation mode with observation width of 350 km.
The SAR imagery was ortho-rectificatied and slope corrected
using the ALOS World 3D - 30 m (AW3D30) Digital Surface Model.
Polarization data are stored as 16-bit digital numbers (DN).
The DN values can be converted to gamma naught values in decibel unit (dB)
using the following equation:

* &gamma;<sub>0</sub> = 10*log<sub>10</sub>(DN<sup>2</sup>) - 83.0 dB

Level 2.2 data are ortho-rectified and radiometrically terrain-corrected.

This dataset is compatible with the
[Committee on Earth Observation (CEOS)](https://ceos.org/)
[Analysis Ready Data for LAND (CARD4L)](https://ceos.org/ard/files/PFS/NRB/v5.5/CARD4L-PFS_NRB_v5.5.pdf) standard.

Note that this collection is heterogeneous and contains a mixture of
single-polarization (HH) and dual-polarization (HH+HV, and rarely VV+VH)
images. Users should filter the collection by the `Polarizations` property
before selecting polarization bands (e.g.,
`collection.filter(ee.Filter.listContains('Polarizations', 'HV'))`).

## Coverage and time range

- Coverage: Coverage: global; time span: 4 August 2014 to 16 October 2026; resolution: 25 m.
- Time range: 2014-08-04 至 2026-10-16

## Resolution and specifications

- Spatial resolution: about 25 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| HH | HH polarization Terrain-flattened Gamma-Nought backscatter coefficient. | 25 |  |
| HV | HV polarization Terrain-flattened Gamma-Nought backscatter coefficient. | 25 |  |
| VV | VV polarization Terrain-flattened Gamma-Nought backscatter coefficient. | 25 |  |
| VH | VH polarization Terrain-flattened Gamma-Nought backscatter coefficient. | 25 |  |
| LIN | Local incidence angle. The angle formed by the radar irradiation direction and the normal of the slope. | 25 |  |
| MSK | Data quality bitmask. | 25 |  |

## What you can use it for

- Surface change and disaster emergency monitoring
- Flood and land-cover mapping
- SAR remote sensing teaching and research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR');
```

- Earth Engine ID: `JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR`
- Providers: JAXA EORC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR-2_Level2_2_ScanSAR

## License and citation

- License: proprietary
- Keywords: alos2, eroc, jaxa, palsar2, radar, sar, satellite-imagery
- 数据引用：The data used for this paper have been provided by Earth Observation
Research Center (EORC) of Japan Aerospace Exploration Agency (JAXA).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS-2 PALSAR-2 StripMap Level 2.1](/pages/b836b19e/)
- [ALOS/AVNIR-2 ORI](/pages/d4abf354/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0](/pages/13015f55/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
