---
title: "MERIT Hydro: Supplementary Visualization Layers"
date: 2026-11-03 12:00:00
---

# MERIT Hydro: Supplementary Visualization Layers

Original name: MERIT Hydro: Supplementary Visualization Layers

## What this dataset is

Supplementary visualization layers for [MERIT Hydro](MERIT_Hydro_v1_0_1)

## Coverage and time range

- Coverage: Coverage: global land rivers; resolution: 18 arc-seconds (about 556.6 m).
- Time range: 1987-01-01 至 2017-01-01

## Resolution and specifications

- Spatial resolution: about 556.6 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| wth | River channel width at the channel centerlines. River channel width is calculated by the method described in [Yamazaki et al. 2012, WRR], with some improvements/changes on the algorithm. This band was upscaled to 18 arc seconds from the original 3 arc seconds for better visualization at global scale. | 556.6 |  |
| upa | Upstream drainage area (flow accumulation area). This band was upscaled to 18 arc seconds from the original 3 arc seconds for better visualization at global scale. | 556.6 |  |

## What you can use it for

- River network and watershed analysis
- Flood risk and water resources assessment
- Hydrographic terrain processing

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('MERIT/Hydro_reduced/v1_0_1');
```

- Earth Engine ID: `MERIT/Hydro_reduced/v1_0_1`
- Providers: Dai Yamazaki (University of Tokyo), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_reduced_v1_0_1

## License and citation

- License: ODbL-1.0
- Keywords: hydrography, hydrosheds, merit, river-width, surface-ground-water, upstream-drainage-area
- 数据引用：Yamazaki D., D. Ikeshima, J. Sosa, P.D. Bates, G.H. Allen, T.M. Pavelsky.
MERIT Hydro: A high-resolution global hydrography map based on latest
topography datasets
Water Resources Research, vol.55, pp.5053-5073, 2019,
[doi:10.1029/2019WR024873](https://doi.org/10.1029/2019WR024873)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GFPLAIN250m: Global 250m Floodplain Dataset](/en/pages/fcae03ea/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GRIDMET DROUGHT: CONUS Drought Indices](/en/pages/f6533466/)
- [JRC Global Surface Water Metadata, v1.4](/en/pages/1f03ce37/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
