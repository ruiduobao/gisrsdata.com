---
title: "Brandenburg (Germany) RGBN orthophotos 20 cm"
date: 2026-11-03 12:00:00
---

# Brandenburg (Germany) RGBN orthophotos 20 cm

Original name: Brandenburg (Germany) RGBN orthophotos 20 cm

## What this dataset is

Orthophotos are an aerial photo dataset covering the Brandenburg state of
Germany.
This data is provided by State government of
Brandenburg ([LGB](https://geobasis-bb.de/lgb/de/)).
Digital orthophotos are digitally corrected aerial photos and show all
objects that are visible from the air at the time of recording in a parallel
perspective. They have a high density of information on ecological,
phenological, geographical and other topics.

For more information, please see the
[Brandenburg orthophotos documentation](https://geobasis-bb.de/lgb/de/geodaten/luftbilder/luftbilder-aktuell/)

## Coverage and time range

- Coverage: Brandenburg, Germany
- Time range: 2021-08-23 至 2023-01-20

## Resolution and specifications

- Spatial resolution: about 0.2 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| N | Near infrared | 0.2 |  |
| R | Red | 0.2 |  |
| G | Green | 0.2 |  |
| B | Blue | 0.2 |  |

## What you can use it for

- High-detail feature interpretation
- Urban and land use mapping
- Ecological and phenological monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Germany/Brandenburg/orthos/20cm');
```

- Earth Engine ID: `Germany/Brandenburg/orthos/20cm`
- Providers: Brandenburg orthophotos, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Germany_Brandenburg_orthos_20cm

## License and citation

- License: proprietary
- Keywords: brandenburg, germany, orthophotos, rgbn
- 数据引用：Data License Germany - Attribution - Version 2.0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [EO-1 Hyperion Hyperspectral Imager](/en/pages/9f815cd7/)
- [Landsat 8 Level 2 Surface Reflectance and Surface Temperature](/en/pages/778e3960/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow](/en/pages/008235d0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
