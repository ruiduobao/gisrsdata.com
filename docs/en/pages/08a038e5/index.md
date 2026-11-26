---
title: "ESA WorldCover 10m v200"
date: 2026-11-03 12:00:00
---

# ESA WorldCover 10m v200

Original name: ESA WorldCover 10m v200

## What this dataset is

The European Space Agency (ESA) WorldCover 10 m 2021 product provides a
global land cover map for 2021 at 10 m resolution based on Sentinel-1 and
Sentinel-2 data.
 The WorldCover product comes with 11 land cover classes and has been
generated in the framework of the ESA WorldCover project, part of the
5th Earth Observation Envelope Programme (EOEP-5) of the European Space
Agency.

See also:

## Coverage and time range

- Coverage: Global
- Time range: 2021-01-01 至 2022-01-01

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Map | Landcover class | 10 |  |

## What you can use it for

- Global land cover mapping
- Land use change analysis
- Base map for environmental and ecological assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ESA/WorldCover/v200');
```

- Earth Engine ID: `ESA/WorldCover/v200`
- Providers: ESA WorldCover Consortium, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCover_v200
* [ESA WorldCover website](https://esa-worldcover.org)
* [User Manual and Validation Report](https://esa-worldcover.org/en/data-access)

## License and citation

- License: CC-BY-4.0
- Keywords: esa, landcover, landuse, landuse-landcover, sentinel1-derived, sentinel2-derived
- 数据引用：Zanaga, D., Van De Kerchove, R., Daems, D., De Keersmaecker, W., Brockmann,
C., Kirches, G., Wevers, J., Cartus, O., Santoro, M., Fritz, S., Lesiv, M.,
Herold, M., Tsendbazar, N.E., Xu, P., Ramoino, F., Arino, O., 2022. ESA
WorldCover 10 m 2021 v200.
([doi:10.5281/zenodo.7254221](https://doi.org/10.5281/zenodo.7254221))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ESA WorldCover 10m v100](/pages/69070083/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [World Settlement Footprint 2015](/en/pages/a545a891/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
