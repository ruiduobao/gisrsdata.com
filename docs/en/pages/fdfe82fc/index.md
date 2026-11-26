---
title: "GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS"
date: 2026-11-03 12:00:00
---

# GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS

Original name: GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS

## What this dataset is

[GOES](https://www.goes.noaa.gov) satellites are geostationary weather satellites run by NOAA.

The Fire (HSC) product contains four images: one in the form
of a fire mask and the other three with pixel values identifying fire temperature, fire area,
and fire radiative power.

The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel
that indicates its disposition with respect to the FHS algorithm. Operational users who have
the lowest tolerance for false alarms should focus on the "processed" and
"saturated" categories (mask codes 10, 11, 30, and 31), but within these categories there
can still be false alarms.

Formerly known as "GOES East"; replaced by
[GOES-19](https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_19_FDCC)
as of April 7, 2025.

[README](https://www.ncei.noaa.gov/products/satellite/goes-r)

NOAA provides the following scripts for suggested categories,
color maps, and visualizations:

NOAA's Office of Satellite and Product Operations has a
[General Satellite Messages](https://www.ospo.noaa.gov/Operations/messages.html)
channel with status updates.

## Coverage and time range

- Coverage: Coverage: CONUS; time span: 2017 to 2025; resolution: 2,000 m.
- Time range: 2017-05-24 至 2025-04-07

## Resolution and specifications

- Spatial resolution: about 2,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Area | Fire area | 2000 |  |
| Temp | Fire temperature | 2000 |  |
| Mask | Fire mask categories.  Pixel values in the fire mask image identify a fire category and diagnostic information associated with algorithm execution. The six fire categories include: Good quality or temporally filtered good quality fire pixel; Saturated fire pixel or temporally filtered saturated fire pixel; Cloud contaminated or temporally filtered cloud contaminated fire pixel; High probability or temporally filtered high probability fire pixel; Medium probability or temporally filtered high probability fire pixel; Low probability or temporally filtered high probability fire. Temporally filtered fire pixels are those resulting from fire pixels that are in close proximity in both space and time. | 2000 |  |
| Power | Fire radiative power | 2000 |  |
| DQF | Data quality flags | 2000 |  |

## What you can use it for

- Near real-time wildfire monitoring
- Fire alerting
- Fire science research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/GOES/16/FDCC');
```

- Earth Engine ID: `NOAA/GOES/16/FDCC`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCC
- [GOES-16-17_FireDetection.js](https://github.com/google/earthengine-community/blob/master/datasets/scripts/GOES-16-17_FireDetection.js)
- [GOES-16-17_FireReclassification.js](https://github.com/google/earthengine-community/blob/master/datasets/scripts/GOES-16-17_FireReclassification.js)

## License and citation

- License: proprietary
- Keywords: abi, fdc, fire, goes, goes-16, goes-east, goes-r, hotspot, nesdis, noaa, ospo, wildfire
- 数据引用：Early characterization of the active fire detection products derived from the next generation
NPOESS/VIIRS and GOES-R/ABI instruments.  Schroeder, W., Csiszar, I., et al, (2010), Early
characterization of the active fire detection products derived from the next generation
NPOESS/VIIRS and GOES-R/ABI instruments, paper presented at 2010 IEEE International Geoscience
and Remote Sensing Symposium (IGARSS), Honolulu, HI.
[doi:10.1109/IGARSS.2010.5650863](https://doi.org/10.1109/IGARSS.2010.5650863)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GOES-16 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk](/en/pages/a85f942c/)
- [GOES-17 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS](/en/pages/2579124b/)
- [GOES-17 FDCF Series ABI Level 2 Fire/Hot Spot Characterization Full Disk](/en/pages/3480c331/)
- [GOES-18 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS](/en/pages/6ba905f6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
