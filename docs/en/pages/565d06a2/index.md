---
title: "Google Global Landsat-based CCDC Segments (1999-2019)"
date: 2026-11-03 12:00:00
---

# Google Global Landsat-based CCDC Segments (1999-2019)

Original name: Google Global Landsat-based CCDC Segments (1999-2019)

## What this dataset is

This collection contains precomputed results from running the
Continuous Change Detection and Classification (CCDC) algorithm on
20 years of Landsat surface reflectance data. CCDC is a break-point
finding algorithm that uses harmonic fitting with a dynamic RMSE
threshold to detect breakpoints in time-series data.

The dataset was created from the Landsat 5, 7, and 8 Collection-1, Tier-1,
surface reflectance time series, using all daytime images between 1999-01-01
and 2019-12-31. Each image was preprocessed to mask pixels identified as
cloud, shadow, or snow (according to the 'pixel_qa' band), saturated pixels,
and pixels with an atmospheric opacity > 300 (as identified by the
'sr_atmos_opacity' and 'sr_aerosol' bands). Pixels repeated in
north/south scene overlap were deduplicated. The results were
output in 2-degree tiles for all landmasses between -60&deg; and +85&deg; latitude.
The images are suitable to simply mosaic() into one global image.

The CCDC algorithm was run with the default algorithm parameters except for
the dateFormat:

* tmaskBands: ['green', 'swir']
* minObservations: 6
* chiSquareProbability: 0.99
* minNumOfYearsScaler: 1.33
* dateFormat: 1 (fractional year)
* lambda: 20
* maxIterations: 25000

Each pixel in the output is encoded using variable length arrays.  The outer
length of each array (axis 0) corresponds to the number of breakpoints
found at that location. The coefs bands contain 2-D arrays, where each inner
array contains the scaling factors for the 8 terms in the linear harmonic
model, in the order: [offset, t, cos(&omega;t), sin(&omega;t), cos(2&omega;t),
sin(2&omega;t), cos(3&omega;t), sin(3&omega;t)], where &omega; = 2&Pi;.  The
models are scale to produce refelectance units (0.0 - 1.0) for the optical
bands and degrees (K) / 100.0 for the thermal band.

Note that since the output bands are arrays and can only be downsampled
using a SAMPLE pyramiding policy. At lower zoom levels, the
results are usually no longer representative of the full-resolution data,
and, for instance, tile boundaries can be seen due to the downsampled masks.
It's therefore not recommended to use this dataset at resolutions less than
240m/pixel.

There are no current plans to add post-2019 assets to this dataset.

## Coverage and time range

- Coverage: Global land
- Time range: 1999-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tStart | 1-D Array containing the date of the start of each segment (fractional year). | 30 |  |
| tEnd | 1-D Array containing the date of the end of each segment (fractional year). | 30 |  |
| tBreak | 1-D Array containing the date of the detected breakpoint of each segment (fractional year). | 30 |  |
| numObs | 1-D Array containing the number of observations found in each segment. | 30 |  |
| changeProb | A pseudo-probability of the detected breakpoint being real. | 30 |  |
| BLUE_coefs | 2-D array containing harmonic model coefficients for the blue band, for each segment. | 30 |  |
| GREEN_coefs | 2-D array containing harmonic model coefficients for the green band, for each segment. | 30 |  |
| RED_coefs | 2-D array containing harmonic model coefficients for the red band, for each segment. | 30 |  |
| NIR_coefs | 2-D array containing harmonic model coefficients for the near-infrared band, for each segment. | 30 |  |
| SWIR1_coefs | 2-D array containing harmonic model coefficients for the shortwave-infrared (1.55&mu;m-1.75&mu;m) band, for each segment. | 30 |  |
| SWIR2_coefs | 2-D array containing harmonic model coefficients for the shortwave-infrared (2.09&mu;m-2.35&mu;m) band, for each segment. | 30 |  |
| TEMP_coefs | 2-D array containing harmonic model coefficients for the thermal band, for each segment. | 30 |  |
| BLUE_rmse | 1-D array containing the RMSE of the model for the blue band, for each segment. | 30 |  |
| GREEN_rmse | 1-D array containing the RMSE of the model for the green band, for each segment. | 30 |  |
| RED_rmse | 1-D array containing the RMSE of the model for the red band, for each segment. | 30 |  |
| NIR_rmse | 1-D array containing the RMSE of the model for the near-infrared band, for each segment. | 30 |  |
| SWIR1_rmse | 1-D array containing the RMSE of the model for the the shortwave-infrared (1.55&mu;m-1.75&mu;m) band, for each segment. | 30 |  |
| SWIR2_rmse | 1-D array containing the RMSE of the model for the shortwave-infrared (2.09&mu;m-2.35&mu;m) band, for each segment. | 30 |  |
| TEMP_rmse | 1-D array containing the RMSE of the model for the thermal band, for each segment. | 30 |  |
| BLUE_magnitude | 1-D array containing the magnitude of the detected breakpoint for the blue band, for each segment. | 30 |  |
| GREEN_magnitude | 1-D array containing the magnitude of the detected breakpoint for the green band, for each segment. | 30 |  |
| RED_magnitude | 1-D array containing the magnitude of the detected breakpoint for the red band, for each segment. | 30 |  |
| NIR_magnitude | 1-D array containing the magnitude of the detected breakpoint for the near-infrared band, for each segment. | 30 |  |
| SWIR1_magnitude | 1-D array containing the magnitude of the detected breakpoint for the shortwave-infrared-1 (1.55&mu;m-1.75&mu;m) band, for each segment. | 30 |  |
| SWIR2_magnitude | 1-D array containing the magnitude of the detected breakpoint for the shortwave-infrared-2 (2.09&mu;m-2.35&mu;m) band, for each segment. | 30 |  |
| TEMP_magnitude | 1-D array containing the magnitude of the detected breakpoint for the thermal band, for each segment. | 30 |  |

## What you can use it for

- Land cover change breakpoint detection
- Forest disturbance and recovery time series analysis
- Change year mapping

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GOOGLE/GLOBAL_CCDC/V1');
```

- Earth Engine ID: `GOOGLE/GLOBAL_CCDC/V1`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_GLOBAL_CCDC_V1

## License and citation

- License: CC-BY-4.0
- Keywords: change-detection, google, landcover, landsat-derived, landuse, landuse-landcover
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)
- [ESA WorldCereal Active Cropland 10 m v100](/en/pages/dd6f101f/)
- [ESA WorldCover 10m v100](/en/pages/69070083/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
