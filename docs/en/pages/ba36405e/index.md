---
title: "Ocean Color SMI: Standard Mapped Image MODIS Terra Data"
date: 2026-11-03 12:00:00
---

# Ocean Color SMI: Standard Mapped Image MODIS Terra Data

Original name: Ocean Color SMI: Standard Mapped Image MODIS Terra Data

## What this dataset is

This level 3 product includes ocean color and satellite ocean biology data
produced or collected under [EOSDIS](https://earthdata.nasa.gov/about).

This dataset may be used for studying the biology and hydrology of
coastal zones, changes in the diversity and geographical distribution of
coastal marine habitats, biogeochemical fluxes and their influence in
Earth's oceans and climate over time, and finally the impact of
climate and environmental variability and change on ocean ecosystems
and the biodiversity they support.

Scale factor and offset are already applied.

## Coverage and time range

- Coverage: Coverage: global oceans; time span: 2000 to 2025; resolution: 4,616 m.
- Time range: 2000-02-24 至 2025-11-29

## Resolution and specifications

- Spatial resolution: about 4,616 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| chlor_a | Chlorophyll a concentration | 4616 |  |
| nflh | Normalized fluorescence line height | 4616 |  |
| poc | Particulate organic carbon | 4616 |  |
| Rrs_412 | Remote sensing reflectance at band 412nm | 4616 | 412nm |
| Rrs_443 | Remote sensing reflectance at band 443nm | 4616 | 443nm |
| Rrs_469 | Remote sensing reflectance at band 469nm | 4616 | 469nm |
| Rrs_488 | Remote sensing reflectance at band 488nm | 4616 | 488nm |
| Rrs_531 | Remote sensing reflectance at band 531nm | 4616 | 531nm |
| Rrs_547 | Remote sensing reflectance at band 547nm | 4616 | 547nm |
| Rrs_555 | Remote sensing reflectance at band 555nm | 4616 | 555nm |
| Rrs_645 | Remote sensing reflectance at band 645nm | 4616 | 645nm |
| Rrs_667 | Remote sensing reflectance at band 667nm | 4616 | 667nm |
| Rrs_678 | Remote sensing reflectance at band 678nm | 4616 | 678nm |
| sst | Sea surface temperature | 4616 |  |
| nsst | Nighttime Sea Surface Temperature | 4616 |  |
| par | Photosynthetically Available Radiation | 4616 |  |
| Kd_490 | Diffuse attenuation coefficient at 490nm | 4616 |  |

## What you can use it for

- Ocean color and primary productivity
- Chlorophyll and water quality monitoring
- Marine ecosystem research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/OCEANDATA/MODIS-Terra/L3SMI');
```

- Earth Engine ID: `NASA/OCEANDATA/MODIS-Terra/L3SMI`
- Providers: NASA OB.DAAC at NASA Goddard Space Flight Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI
* [Ocean Color Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)
* [Chlorophyll Forum](https://oceancolor.gsfc.nasa.gov/forum/oceancolor/forum_show.pl)
* [Algorithm Theoretical Basis Document (Chlorophyll)](https://oceancolor.gsfc.nasa.gov/resources/atbd/chlor_a)
* [Algorithm Theoretical Basis Document (Fluorescence Line Height)](https://oceancolor.gsfc.nasa.gov/resources/atbd/nflh)
* [Algorithm Theoretical Basis Document (Particulate Organic Carbon)](https://oceancolor.gsfc.nasa.gov/resources/atbd/poc)
* [Algorithm Theoretical Basis Document (Remote-Sensing Reflectance)](https://oceancolor.gsfc.nasa.gov/resources/atbd/rrs)
* [Processing History](https://oceancolor.gsfc.nasa.gov/data/reprocessing/)
* [MODIS-Terra OceanData](https://oceancolor.gsfc.nasa.gov/about/missions/terra/)

## License and citation

- License: proprietary
- Keywords: biology, chlorophyll, modis, nasa, oceandata, oceans, reflectance, sst, temperature, weather
- 数据引用：NASA Goddard Space Flight Center, Ocean Ecology Laboratory, Ocean Biology
Processing Group. Moderate-resolution Imaging Spectroradiometer
(MODIS) Aqua Ocean Color Data, NASA OB.DAAC, Greenbelt, MD, USA.

- DOI：10.5067/GHMDT-2PJ19

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Ocean Color SMI: Standard Mapped Image MODIS Aqua Data](/pages/d1d3bb55/)
- [Ocean Color SMI: Standard Mapped Image SeaWiFS Data](/pages/402b2c43/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
