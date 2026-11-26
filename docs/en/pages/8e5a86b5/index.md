---
title: "Oxford MAP TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness [deprecated]"
date: 2026-11-03 12:00:00
---

# Oxford MAP TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness [deprecated]

Original name: Oxford MAP TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness [deprecated]

## What this dataset is

This gap-filled Tasseled Cap Brightness (TCB) dataset was created by
applying the tasseled-cap equations defined in Lobser and Cohen (2007) to
MODIS BRDF-corrected imagery (MCD43B4). The resulting data were gap-filled
using the approach outlined in Weiss et al. (2014) to eliminate missing
data caused by factors such as cloud cover, and then the data were
aggregated temporally and spatially to produce the monthly &asymp;5km product.

This dataset was produced by Harry Gibson and Daniel Weiss of the
[Malaria Atlas Project](https://malariaatlas.org/).

## Coverage and time range

- Coverage: Spatial: global; temporal: 2001 to 2015 (monthly); resolution: 5,000 m.
- Time range: 2001-02-01 至 2015-01-01

## Resolution and specifications

- Spatial resolution: about 5,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Mean | The mean value of Tasseled Cap Brightness for each aggregated pixel. | 5000 |  |
| FilledProportion | A quality control band that indicates the percentage of each resulting pixel that was comprised of raw data (as opposed to gap-filled estimates). | 5000 |  |

## What you can use it for

- Provide long time-series environmental variables for malaria-transmission studies.
- Model disease ecology and vector distributions.
- Combine with other health-geography data.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Oxford/MAP/TCB_5km_Monthly');
```

- Earth Engine ID: `Oxford/MAP/TCB_5km_Monthly`
- Providers: Oxford Malaria Atlas Project, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_TCB_5km_Monthly

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: brightness, map, oxford, tasseled-cap, tcb, vegetation-indices
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Oxford MAP EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index [deprecated]](/pages/c7bdaa5d/)
- [Oxford MAP TCW: Malaria Atlas Project Gap-Filled Tasseled Cap Wetness [deprecated]](/pages/cac49666/)
- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
