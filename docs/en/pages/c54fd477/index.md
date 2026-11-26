---
title: "Open Buildings Temporal V1"
date: 2026-11-03 12:00:00
---

# Open Buildings Temporal V1

Original name: Open Buildings Temporal V1

## What this dataset is

The Open Buildings 2.5D Temporal Dataset contains data about building
presence, fractional building counts, and building heights at an effective<sup>1</sup>
spatial resolution of 4m (rasters are provided at 0.5m resolution) at an
annual cadence from 2016-2023. It is produced from open-source,
low-resolution imagery from the [Sentinel-2](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2)
collection.

The dataset is available across Africa, South Asia, South-East Asia, Latin
America and the Caribbean. The goal of this data is to support organizations
(e.g., governmental, non-profits, commercial) focusing on a range of
applications for social good.

Explore the data interactively with the demo Earth Engine [app](https://goo.gle/open-buildings-temporal-demo-app). (In case you encounter performance issues with the Earth Engine app please try [this](https://goo.gle/open-buildings-temporal-demo) Earth Engine script instead.)

Alternatively, if you are not an Earth Engine user, you can download the
data directly from Google Cloud Storage using [this notebook](https://colab.research.google.com/github/google-research/google-research/blob/master/building_detection/open_buildings_temporal_download_region_geotiffs.ipynb).

For more details on the project and FAQs about the data checkout the project
[website](https://sites.research.google/gr/open-buildings/temporal/).

Example scripts:

* <code>[How to compute building count for a given AOI](https://code.earthengine.google.com/31ca8ccee65887ed2a152c8ea920bbd2)</code>
* <code>[How to compute built-up area for a given AOI](https://code.earthengine.google.com/46468628f66eb57c79753ae4c1c09f54)</code>
* <code>[How to see two years side-by-side and compare](https://code.earthengine.google.com/e9e5a84d279d4b5669872a560e8329a2?hideCode=true)</code>

<small><sup>1</sup>equivalent to what could be achieved by a high-resolution model
using a single frame of 4 m resolution imagery.</small>

## Coverage and time range

- Coverage: Africa, South Asia, South-East Asia, Latin America and the Caribbean
- Time range: 2016-06-30 至 2023-06-30

## Resolution and specifications

- Spatial resolution: about 4 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| building_fractional_count | Source data for deriving building counts for a given AOI. Please see accompanying example scripts. | 4 |  |
| building_height | Building height relative to the terrain in range [0m, 100m]. | 4 |  |
| building_presence | Model confidence values (i.e. how confident a model is that the pixel is part of a building) in range [0.0, 1.0]. Note that model confidence values are uncalibrated, meaning, if model confidence for a certain pixel is 0.8, it doesn't mean the actual likelihood of building presence is 80%. As such, confidence values can only be used for relative ranking (eg. thresholding) of pixels. Also, the model confidence can vary across location and time based on a number of factors such as cloud cover, imagery misalignment, etc. | 4 |  |

## What you can use it for

- Annual building count and height change analysis
- Population estimation and urbanisation monitoring
- Built-up area expansion mapping

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GOOGLE/Research/open-buildings-temporal/v1');
```

- Earth Engine ID: `GOOGLE/Research/open-buildings-temporal/v1`
- Providers: Google Research - Open Buildings, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings-temporal_v1

## License and citation

- License: CC-BY-4.0
- Keywords: africa, annual, asia, building-height, built-up, height, high-resolution, open-buildings, population, south-asia, southeast-asia
- 数据引用：Wojciech Sirko, Emmanuel Asiedu Brempong, Juliana T. C. Marcos, Abigail
Annkah, Abel Korme, Mohammed Alewi Hassen, Krishna Sapkota, Tomer Shekel,
Abdoulaye Diack, Sella Nevo, Jason Hickey, John Quinn. [High-Resolution
Building and Road Detection from Sentinel-2](https://arxiv.org/abs/2310.11622), 2023.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)
- [MethaneAIR L3 Concentration v1](/en/pages/7172790c/)
- [MethaneAIR L4 Point Sources v1](/en/pages/32e81487/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
