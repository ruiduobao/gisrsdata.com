---
title: "Dynamic World V1"
date: 2026-11-03 12:00:00
---

# Dynamic World V1

Original name: Dynamic World V1

## What this dataset is

Dynamic World is a 10m near-real-time (NRT) Land Use/Land Cover (LULC)
dataset that includes class probabilities and label information for nine
classes.

Dynamic World predictions are available for the Sentinel-2 L1C collection
from 2015-06-27 to present. The revisit frequency of Sentinel-2 is between
2-5 days depending on latitude. Dynamic World predictions are generated for
Sentinel-2 L1C images with CLOUDY_PIXEL_PERCENTAGE <= 35%.
Predictions are masked to remove clouds and cloud shadows using
a combination of S2 Cloud Probability, Cloud Displacement Index, and
Directional Distance Transform.

Images in the Dynamic World collection have names matching the individual
Sentinel-2 L1C asset names from which they were derived, e.g:

ee.Image('COPERNICUS/S2/20160711T084022_20160711T084751_T35PKT')

has a matching Dynamic World image named:
  ee.Image('GOOGLE/DYNAMICWORLD/V1/20160711T084022_20160711T084751_T35PKT').

All probability bands except the "label" band collectively sum to 1.

To learn more about the Dynamic World dataset and see examples for
generating composites, calculating regional statistics, and working with the
time series, see the [Introduction to Dynamic World](https://developers.google.com/earth-engine/tutorials/community/introduction-to-dynamic-world-pt-1) tutorial series.

Given Dynamic World class estimations are derived from single images using a
spatial context from a small moving window, top-1 "probabilities" for
predicted land covers that are in-part defined by cover over time, like
crops, can be comparatively low in the absence of obvious distinguishing
features. High-return surfaces in arid climates, sand, sunglint, etc may
also exhibit this phenomenon.

To select only pixels that confidently belong to a Dynamic World class,
it is recommended to mask Dynamic World outputs by thresholding the
estimated "probability" of the top-1 prediction.

## Coverage and time range

- Coverage: Global
- Time range: 2015-06-27 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| water | Estimated probability of complete coverage by water | 10 |  |
| trees | Estimated probability of complete coverage by trees | 10 |  |
| grass | Estimated probability of complete coverage by grass | 10 |  |
| flooded_vegetation | Estimated probability of complete coverage by flooded vegetation | 10 |  |
| crops | Estimated probability of complete coverage by crops | 10 |  |
| shrub_and_scrub | Estimated probability of complete coverage by shrub and scrub | 10 |  |
| built | Estimated probability of complete coverage by built | 10 |  |
| bare | Estimated probability of complete coverage by bare | 10 |  |
| snow_and_ice | Estimated probability of complete coverage by snow and ice | 10 |  |
| label | Index of the band with the highest estimated probability | 10 |  |

## What you can use it for

- Near-real-time land cover mapping
- Land use change monitoring
- Ecosystem and urban expansion analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1');
```

- Earth Engine ID: `GOOGLE/DYNAMICWORLD/V1`
- Providers: World Resources Institute, Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_DYNAMICWORLD_V1

## License and citation

- License: CC-BY-4.0
- Keywords: global, google, landcover, landuse, landuse-landcover, nrt, sentinel2-derived
- 数据引用：Brown, C.F., Brumby, S.P., Guzder-Williams, B. et al. Dynamic World, Near
real-time global 10 m land use land cover mapping. Sci Data 9, 251 (2022).
[doi:10.1038/s41597-022-01307-4](https://doi.org/10.1038/s41597-022-01307-4)

- DOI：10.1038/s41597-022-01307-4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)
- [ESA WorldCereal Active Cropland 10 m v100](/en/pages/dd6f101f/)
- [ESA WorldCover 10m v100](/en/pages/69070083/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
