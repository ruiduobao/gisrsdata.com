---
title: "CSP gHM: Global Human Modification"
date: 2026-11-03 12:00:00
---

# CSP gHM: Global Human Modification

Original name: CSP gHM: Global Human Modification

## What this dataset is

The global Human Modification dataset (gHM) provides a cumulative measure of human modification of terrestrial lands globally at 1 square-kilometer resolution. The gHM values range from 0.0-1.0 and are calculated by estimating the proportion of a given location (pixel) that is modified, the estimated intensity of modification associated with a given type of human modification or "stressor". 5 major anthropogenic stressors circa 2016 were mapped using 13 individual datasets:

* human settlement (population density, built-up areas)
* agriculture (cropland, livestock)
* transportation (major, minor, and two-track roads; railroads)
* mining and energy production
* electrical infrastructure (power lines, nighttime lights)

Please see the paper for additional methodological details. This asset was re-projected to WGS84 for use in Earth Engine.

## Coverage and time range

- Coverage: Global (terrestrial)
- Time range: 2016-01-01 至 2016-12-31

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| gHM | global Human Modification | 1000 |  |

## What you can use it for

- Assessing global human activity intensity and landscape modification
- Human pressure analysis for conservation planning
- Land degradation and habitat fragmentation studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CSP/HM/GlobalHumanModification');
```

- Earth Engine ID: `CSP/HM/GlobalHumanModification`
- Providers: Conservation Science Partners, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CSP_HM_GlobalHumanModification

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: csp, fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc
- 数据引用：Kennedy, C.M., J.R. Oakleaf, D.M. Theobald, S. Baruch-Murdo, and J. Kiesecker. 2019. Managing
the middle: A shift in conservation priorities based on the global human modification gradient.
Global Change Biology 00:1-16. [doi:10.1111/gcb.14549](https://doi.org/10.1111/gcb.14549)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)
- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
