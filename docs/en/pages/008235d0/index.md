---
title: "Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow"
date: 2026-11-03 12:00:00
---

# Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow

Original name: Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow

## What this dataset is

This data set is the first-of-its-kind spatial representation of
multi-seasonal, global C-band Synthetic Aperture Radar (SAR)
interferometric repeat-pass coherence and backscatter signatures.
Coverage comprises land masses and ice sheets from 82 degrees
Northern to 79 degrees Southern latitudes. The data set is derived
from multi-temporal repeat-pass interferometric processing of about
205,000 Sentinel-1 C-band SAR images acquired in Interferometric
Wide-Swath Mode from 1-Dec-2019 to 30-Nov-2020.

This dataset contains ancillary data to aid in the interpretation and
processing of the backscatter and coherence products.

Other datasets derived from Sentinel-1 observations over the same time
period include:

## Coverage and time range

- Coverage: Land masses and ice sheets, 82°N to 79°S
- Time range: 2019-12-01 至 2020-12-01

## Resolution and specifications

- Spatial resolution: about 92.7 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| inc | The angle between the incoming radar signal path and the normal vector to the local ground surface at each pixel. | 92.7 |  |
| lsmap | Layover/Shadow mask:  * 1 = No Shadow or Layover * 5 = Layover: A geometric distortion where features at higher   elevations are displaced toward the radar (appearing before features   at lower elevations), making measurement impossible. * 17 = Shadow: Areas hidden from the radar beam (behind steep slopes   or tall objects) where no signal is received, resulting in zero or   near-zero measured backscatter and coherence. * 21 = Shadow in Layover | 92.7 |  |

## What you can use it for

- Masking SAR geometric distortion areas (layover/shadow)
- Quality control for backscatter and coherence products

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW');
```

- Earth Engine ID: `Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW`
- Providers: Earth Big Data LLC, Alaska Satellite Facility, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW
* [Backscatter](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER)
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Decay Model Parameters](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS)

## License and citation

- License: CC-BY-4.0
- Keywords: earth-big-data, jpl, nasa, polarization, radar, sar, satellite-imagery, seasonal, sentinel1-derived
- 数据引用：Kellndorfer, J., Cartus, O., Lavalle, M. et al. Global seasonal Sentinel-1
interferometric coherence and backscatter data set. Sci Data 9, 73 (2022).
[doi:10.1038/s41597-022-01189-6](https://doi.org/10.1038/s41597-022-01189-6).

- DOI：10.1038/s41597-022-01189-6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter](/pages/0fd3af2c/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence](/pages/2e6c1d1a/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters](/pages/40f99a0e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
