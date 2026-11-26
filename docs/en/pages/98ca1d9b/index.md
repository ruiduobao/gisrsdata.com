---
title: "VIIRS Nighttime Day/Night Annual Band Composites V2.1"
date: 2026-11-03 12:00:00
---

# VIIRS Nighttime Day/Night Annual Band Composites V2.1

Original name: VIIRS Nighttime Day/Night Annual Band Composites V2.1

## What this dataset is

Annual global VIIRS nighttime lights dataset is a time series produced from
monthly cloud-free average radiance grids spanning 2013 to 2021.
Data for 2022 are available in the
[NOAA/VIIRS/DNB/ANNUAL_V22](NOAA_VIIRS_DNB_ANNUAL_V22) dataset.

An initial filtering step removed sunlit, moonlit and cloudy pixels,
leading to rough composites that contains lights, fires, aurora and
background. The rough annual composites are made on monthly increments and
then combined to form rough annual composites.

The subsequent steps uses the twelve-month median radiance to discard high
and low radiance outliers, filtering out most fires and isolating the
background. Background areas are zeroed out using the data range (DR)
calculated from 3x3 grid cells. The DR threshold for background is indexed
to cloud-cover levels, with higher DR thresholds in areas having low numbers
of cloud-free coverages.

Note: 2012 data are not yet included because of differences in processing.
(A) 201204-201212, and (B) 201204-201303. Only set (B) has masked median
and average bands which doesn't follow the pattern there in other year
datasets.

## Coverage and time range

- Coverage: Spatial: global; temporal: 2012 to 2021 (annual); resolution: 463.83 m.
- Time range: 2012-04-01 至 2021-01-01

## Resolution and specifications

- Spatial resolution: about 463.83 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| average | Average DNB radiance values. | 463.83 |  |
| average_masked | Average Masked DNB radiance values | 463.83 |  |
| cf_cvg | Cloud-free coverages; the total number of observations that went into each pixel. This band can be used to identify areas with low numbers of observations where the quality is reduced. | 463.83 |  |
| cvg | Total number of observations free of sunlight and moonlight. | 463.83 |  |
| maximum | Maximum DNB radiance values. | 463.83 |  |
| median | Median DNB radiance values | 463.83 |  |
| median_masked | Median masked DNB radiance values. | 463.83 |  |
| minimum | Minimum DNB radiance values | 463.83 |  |

## What you can use it for

- Analyse long-term urbanization and nighttime economic activity.
- Estimate spatial distributions of population and GDP.
- Monitor light changes caused by conflicts and disasters.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/ANNUAL_V21');
```

- Earth Engine ID: `NOAA/VIIRS/DNB/ANNUAL_V21`
- Providers: Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_ANNUAL_V21

## License and citation

- License: proprietary
- Keywords: annual, dnb, eog, lights, nighttime, noaa, population, viirs, visible
- 数据引用：Elvidge, C.D, Zhizhin, M., Ghosh T., Hsu FC, Taneja J. Annual time series of
global VIIRS nighttime lights derived from monthly averages:2012 to 2019.
Remote Sensing 2021, 13(5), p.922, doi:10.3390/rs13050922
[doi:10.3390/rs13050922](https://doi.org/10.3390/rs13050922)

- DOI：10.3390/rs13050922

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VIIRS Nighttime Day/Night Band Composites Version 1](/en/pages/331f49de/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.2](/en/pages/57765f1c/)
- [VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1](/en/pages/b0f1292c/)
- [VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]](/en/pages/877e12fd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
