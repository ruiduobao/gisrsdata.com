---
title: "Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter"
date: 2026-11-03 12:00:00
---

# Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter

Original name: Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter

## What this dataset is

This data set is the first-of-its-kind spatial representation of
multi-seasonal, global C-band Synthetic Aperture Radar (SAR)
interferometric repeat-pass coherence and backscatter signatures.
Coverage comprises land masses and ice sheets from 82 degrees
Northern to 79 degrees Southern latitudes. The data set is derived
from multi-temporal repeat-pass interferometric processing of about
205,000 Sentinel-1 C-band SAR images acquired in Interferometric
Wide-Swath Mode from 1-Dec-2019 to 30-Nov-2020.

This dataset contains mean Radiometrically Terrain Corrected (RTC)
backscatter. The raw signal intensity has been adjusted to account for the
influence of local topography (like hills and slopes) on the measured radar
cross-section. This correction is performed to produce a
terrain-flattened backscatter value that is more representative of the
intrinsic scattering properties of the surface itself.

If you would like to do calculations using the digital numbers from the
original rasters, load
*Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER_RAW* instead.

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
| fall_hh_AMP | Fall (Sep-Nov 2020) HH backscatter amplitude. | 92.7 |  |
| fall_hv_AMP | Fall (Sep-Nov 2020) HV backscatter amplitude. | 92.7 |  |
| fall_vh_AMP | Fall (Sep-Nov 2020) VH backscatter amplitude. | 92.7 |  |
| fall_vv_AMP | Fall (Sep-Nov 2020) VV backscatter amplitude. | 92.7 |  |
| spring_hh_AMP | Spring (Mar-May 2020) HH backscatter amplitude. | 92.7 |  |
| spring_hv_AMP | Spring (Mar-May 2020) HV backscatter amplitude. | 92.7 |  |
| spring_vh_AMP | Spring (Mar-May 2020) VH backscatter amplitude. | 92.7 |  |
| spring_vv_AMP | Spring (Mar-May 2020) VV backscatter amplitude. | 92.7 |  |
| summer_hh_AMP | Summer (Jun-Aug 2020) HH backscatter amplitude. | 92.7 |  |
| summer_hv_AMP | Summer (Jun-Aug 2020) HV backscatter amplitude. | 92.7 |  |
| summer_vh_AMP | Summer (Jun-Aug 2020) VH backscatter amplitude. | 92.7 |  |
| summer_vv_AMP | Summer (Jun-Aug 2020) VV backscatter amplitude. | 92.7 |  |
| winter_hh_AMP | Winter (Dec 2019-Feb 2020) HH backscatter amplitude. | 92.7 |  |
| winter_hv_AMP | Winter (Dec 2019-Feb 2020) HV backscatter amplitude. | 92.7 |  |
| winter_vh_AMP | Winter (Dec 2019-Feb 2020) VH backscatter amplitude. | 92.7 |  |
| winter_vv_AMP | Winter (Dec 2019-Feb 2020) VV backscatter amplitude. | 92.7 |  |

## What you can use it for

- Seasonal analysis of global SAR backscatter signatures
- Radar features for land cover and vegetation classification
- Joint use of backscatter and coherence

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER');
```

- Earth Engine ID: `Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER`
- Providers: Earth Big Data LLC, Alaska Satellite Facility, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Decay Model Parameters](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS)
* [Incidence Layover Shadow](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW)

## License and citation

- License: CC-BY-4.0
- Keywords: backscatter, earth-big-data, jpl, nasa, polarization, radar, sar, satellite-imagery, seasonal, sentinel1-derived
- 数据引用：Kellndorfer, J., Cartus, O., Lavalle, M. et al. Global seasonal Sentinel-1
interferometric coherence and backscatter data set. Sci Data 9, 73 (2022).
[doi:10.1038/s41597-022-01189-6](https://doi.org/10.1038/s41597-022-01189-6).

- DOI：10.1038/s41597-022-01189-6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence](/pages/2e6c1d1a/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters](/pages/40f99a0e/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow](/pages/008235d0/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
