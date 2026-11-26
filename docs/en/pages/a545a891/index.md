---
title: "World Settlement Footprint 2015"
date: 2026-11-03 12:00:00
---

# World Settlement Footprint 2015

Original name: World Settlement Footprint 2015

## What this dataset is

The World Settlement Footprint (WSF) 2015 is a 10m resolution binary mask outlining the extent of human settlements globally derived by means of 2014-2015 multitemporal Landsat-8 and Sentinel-1 imagery (of which ~217,000 and ~107,000 scenes have been processed, respectively).

The temporal dynamics of human settlements over time are sensibly different than those of all other non-settlement information classes. Hence, given all the multitemporal images available over a region of interest in the selected time interval, key temporal statistics (i.e., temporal mean, minimum, maximum, etc.) are extracted for:

* the original backscattering value in the case of radar data; and
* different spectral indices (e.g., vegetation index, built-up index, etc.) derived after performing cloud masking in the case of optical imagery.

Next, different classification schemes based on Support Vector Machines (SVMs) are separately applied to the optical and radar temporal features, respectively, and, finally, the two outputs are properly combined together.

To quantitatively assess the high accuracy and reliability of the layer, an extensive validation exercise has been carried out in collaboration with Google based on a huge amount of ground-truth samples (i.e., 900,000) labeled by crowd-sourcing photo-interpretation. A statistically robust and transparent protocol has been defined following the state-of-the-art practices currently recommended in the literature.

For all technical details, please refer to [the publication](https://www.nature.com/articles/s41597-020-00580-5)

## Coverage and time range

- Coverage: Global
- Time range: 2015-01-01 至 2016-01-01

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| settlement | A human settlement area | 10 |  |

## What you can use it for

- Mapping the extent of human settlements worldwide
- Urban growth and population exposure analysis
- Settlement base layer for disaster risk assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('DLR/WSF/WSF2015/v1');
```

- Earth Engine ID: `DLR/WSF/WSF2015/v1`
- Providers: Deutsches Zentrum für Luft- und Raumfahrt (DLR), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/DLR_WSF_WSF2015_v1

## License and citation

- License: CC0-1.0
- Keywords: landcover, landsat-derived, population, sentinel1-derived, settlement, urban
- 数据引用：Marconcini, M., Metz-Marconcini, A., Üreyen, S., Palacios-Lopez, D., Hanke, W., Bachofer, F.,
Zeidler, J., Esch, T., Gorelick, N., Kakarla, A., Paganini, M., Strano, E. (2020).
Outlining where humans live, the World Settlement Footprint 2015. Scientific Data, 7(1), 1-14.
[doi:10.1038/s41597-020-00580-5](https://doi.org/10.1038/s41597-020-00580-5)

- DOI：10.1038/s41597-020-00580-5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
