---
title: "Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters"
date: 2026-11-03 12:00:00
---

# Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters

Original name: Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters

## What this dataset is

This data set is the first-of-its-kind spatial representation of
multi-seasonal, global C-band Synthetic Aperture Radar (SAR)
interferometric repeat-pass coherence and backscatter signatures.
Coverage comprises land masses and ice sheets from 82 degrees
Northern to 79 degrees Southern latitudes. The data set is derived
from multi-temporal repeat-pass interferometric processing of about
205,000 Sentinel-1 C-band SAR images acquired in Interferometric
Wide-Swath Mode from 1-Dec-2019 to 30-Nov-2020.

This dataset includes parameters for the coherence decay model, an
exponential function fitted to the seasonal median coherence values as a
function of the repeat interval to quantify how quickly coherence is lost
over time. The parameters are:

* **rho**: Represents the long-term coherence, the value that the model
  predicts as the repeat interval increases to infinity. It is a measure of
  the temporal stability of the scattering elements in the target area.

* **tau**: Represents the rate of coherence decay, a measure of how quickly
 the coherence drops from its initial high value towards *rho*. Lower
 values indicate faster decorrelation.

* **rmse**: The root mean square error, a quality indicator of the model
  fit. It quantifies the difference between the modeled coherence curve and
  the original, non-aggregated coherence observations used to fit the model.

The scale factor has already been applied to each of the bands. If you
would like to do calculations using the digital numbers from the original
rasters, load
*Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS_RAW*
instead.

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
| fall_hh_rho | Fall (Sep-Nov 2020) HH rho. | 92.7 |  |
| fall_hh_rmse | Fall (Sep-Nov 2020) HH rmse. | 92.7 |  |
| fall_hh_tau | Fall (Sep-Nov 2020) HH tau. | 92.7 |  |
| fall_vv_rho | Fall (Sep-Nov 2020) VV rho. | 92.7 |  |
| fall_vv_rmse | Fall (Sep-Nov 2020) VV rmse. | 92.7 |  |
| fall_vv_tau | Fall (Sep-Nov 2020) VV tau. | 92.7 |  |
| spring_hh_rho | Spring (Mar-May 2020) HH rho. | 92.7 |  |
| spring_hh_rmse | Spring (Mar-May 2020) HH rmse. | 92.7 |  |
| spring_hh_tau | Spring (Mar-May 2020) HH tau. | 92.7 |  |
| spring_vv_rho | Spring (Mar-May 2020) VV rho. | 92.7 |  |
| spring_vv_rmse | Spring (Mar-May 2020) VV rmse. | 92.7 |  |
| spring_vv_tau | Spring (Mar-May 2020) VV tau. | 92.7 |  |
| summer_hh_rho | Summer (Jun-Aug 2020) HH rho. | 92.7 |  |
| summer_hh_rmse | Summer (Jun-Aug 2020) HH rmse. | 92.7 |  |
| summer_hh_tau | Summer (Jun-Aug 2020) HH tau. | 92.7 |  |
| summer_vv_rho | Summer (Jun-Aug 2020) VV rho. | 92.7 |  |
| summer_vv_rmse | Summer (Jun-Aug 2020) VV rmse. | 92.7 |  |
| summer_vv_tau | Summer (Jun-Aug 2020) VV tau. | 92.7 |  |
| winter_hh_rho | Winter (Dec 2019-Feb 2020) HH rho. | 92.7 |  |
| winter_hh_rmse | Winter (Dec 2019-Feb 2020) HH rmse. | 92.7 |  |
| winter_hh_tau | Winter (Dec 2019-Feb 2020) HH tau. | 92.7 |  |
| winter_vv_rho | Winter (Dec 2019-Feb 2020) VV rho. | 92.7 |  |
| winter_vv_rmse | Winter (Dec 2019-Feb 2020) VV rmse. | 92.7 |  |
| winter_vv_tau | Winter (Dec 2019-Feb 2020) VV tau. | 92.7 |  |

## What you can use it for

- Global comparison of coherence decay rates
- Temporal stability assessment by surface type
- Parameter reference for InSAR time-series analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS');
```

- Earth Engine ID: `Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/DECAY_MODEL_PARAMETERS`
- Providers: Earth Big Data LLC, Alaska Satellite Facility, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS
* [Backscatter](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER)
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Incidence Layover Shadow](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW)

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
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow](/pages/008235d0/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
