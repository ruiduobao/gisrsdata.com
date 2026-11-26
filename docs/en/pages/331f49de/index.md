---
title: "VIIRS Nighttime Day/Night Band Composites Version 1"
date: 2026-11-03 12:00:00
---

# VIIRS Nighttime Day/Night Band Composites Version 1

Original name: VIIRS Nighttime Day/Night Band Composites Version 1

## What this dataset is

Monthly average radiance composite images using nighttime data from the
Visible Infrared Imaging Radiometer Suite (VIIRS) Day/Night Band (DNB).

As these data are composited monthly, there are many areas of the globe
where it is impossible to get good quality data coverage for that month.
This can be due to cloud cover, especially in the tropical regions, or due
to solar illumination, as happens toward the poles in their respective
summer months. Therefore it is recommended that users of these data utilize
the 'cf_cvg' band and not assume a value of zero in the average radiance
image means that no lights were observed.

Cloud cover is determined using the VIIRS Cloud
Mask product (VCM). In addition, data near the edges of the swath are not
included in the composites (aggregation zones 29-32). Version 1 has NOT
been filtered to screen out lights from aurora, fires, boats, and other
temporal lights. This separation is under development and will be included
in a later version of this time series. Also in development is a method to
separate lights from background (non-light) values.

Prior to averaging, the DNB data is filtered to exclude data impacted by
stray light, lightning, lunar illumination, and cloud-cover.

## Coverage and time range

- Coverage: Spatial: global; temporal: 2012 to present (monthly); resolution: 463.83 m.
- Time range: 2012-04-01 至 2026-09-01

## Resolution and specifications

- Spatial resolution: about 463.83 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| avg_rad | Average DNB radiance values. | 463.83 |  |
| cf_cvg | Cloud-free coverages; the total number of observations that went into each pixel. This band can be used to identify areas with low numbers of observations where the quality is reduced. | 463.83 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG');
```

- Earth Engine ID: `NOAA/VIIRS/DNB/MONTHLY_V1/VCMCFG`
- Providers: Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_MONTHLY_V1_VCMCFG

## License and citation

- License: proprietary
- Keywords: dnb, eog, lights, monthly, nighttime, noaa, population, viirs, visible
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VIIRS Nighttime Day/Night Annual Band Composites V2.1](/en/pages/98ca1d9b/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.2](/en/pages/57765f1c/)
- [VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1](/en/pages/b0f1292c/)
- [VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]](/en/pages/877e12fd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
