---
title: "NOAA CDR AVHRR: Surface Reflectance, Version 5"
date: 2026-11-03 12:00:00
---

# NOAA CDR AVHRR: Surface Reflectance, Version 5

Original name: NOAA CDR AVHRR: Surface Reflectance, Version 5

## What this dataset is

The NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance contains
gridded daily surface reflectance and brightness temperatures derived from
the Advanced Very High Resolution Radiometer (AVHRR) sensors onboard seven
NOAA polar orbiting satellites. The data are gridded at a
resolution of 0.05° and computed globally over land surfaces.

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Surface_Reflectance/AVHRR/AlgorithmDescriptionAVHRR_01B-20a.pdf).

Provider's note: the orbital drift of N-19 (the last NOAA satellite
carrying the AVHRR sensor) began to severely degrade the retrieved
product quality. Therefore, VIIRS is now the primary sensor being used for
these products from 2014-present.

## Coverage and time range

- Coverage: Coverage: global land; time span: 1981 to 2013; resolution: 5,566 m.
- Time range: 1981-06-24 至 2013-12-31

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| SREFL_CH1 | Bidirectional surface reflectance | 5566 | 640nm |
| SREFL_CH2 | Bidirectional surface reflectance | 5566 | 860nm |
| SREFL_CH3 | Bidirectional surface reflectance | 5566 | 3.75&micro;m |
| BT_CH3 | Brightness temperature | 5566 | 3.75&micro;m |
| BT_CH4 | Brightness temperature | 5566 | 11.0&micro;m |
| BT_CH5 | Brightness temperature | 5566 | 12.0&micro;m |
| TIMEOFDAY | Hours since start of day | 5566 |  |
| RELAZ | Relative sensor azimuth angle | 5566 |  |
| SZEN | Solar zenith angle | 5566 |  |
| VZEN | View zenith angle, scale 0.01 | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## What you can use it for

- Climate data record applications
- Long-term vegetation change monitoring
- Climate change research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/SR/V5');
```

- Earth Engine ID: `NOAA/CDR/AVHRR/SR/V5`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V5

## License and citation

- License: proprietary
- Keywords: avhrr, cdr, daily, land, noaa, reflectance, satellite-imagery, sr
- 数据引用：Eric Vermote, Chris Justice, Ivan Csiszar, Jeff Eidenshink, Ranga Myneni,
Frederic Baret, Ed Masuoka, Robert Wolfe, Martin Claverie and NOAA CDR
Program (2014): NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance,
Version 4. [indicate subset used]. NOAA National Climatic Data Center.

- DOI：10.7289/V53776Z4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR AVHRR: Surface Reflectance, Version 4 [deprecated]](/en/pages/2d8d516d/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
