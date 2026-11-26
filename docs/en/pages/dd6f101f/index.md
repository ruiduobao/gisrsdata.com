---
title: "ESA WorldCereal Active Cropland 10 m v100"
date: 2026-11-03 12:00:00
---

# ESA WorldCereal Active Cropland 10 m v100

Original name: ESA WorldCereal Active Cropland 10 m v100

## What this dataset is

The European Space Agency (ESA) WorldCereal Active Cropland 10 m 2021
product suite contains global-scale seasonal active cropland markers. They
were generated as part of the
[ESA-WorldCereal project](https://esa-worldcereal.org/). The active cropland
products indicate whether or not a pixel identified as temporary crops has
been actively cultivated during a specific growing season. In order for a
pixel to be labeled as “active” during a particular growing season, a full
crop growth cycle (sowing, growing, senescence and harvesting) needs to take
place within the designated time period. Note that this active marker is not
crop-type specific. Any crop grown (slightly) outside the predefined growing
seasons will not be flagged as active cropland in any of the seasons covered
by the WorldCereal system. The active marker results from running a growing
season detection algorithm [1] on the Sentinel-2 derived enhanced vegetation
index (EVI). More information on the methodology used to generate these
products is described in [2].

This collection contains up to 106 agro-ecological zone (AEZ) images per
crop season, where each AEZ has its own seasonality. The seasons for which
the active cropland marker is available are described in the list below and
were developed in [3] as part of the project.

WorldCereal seasons description:

- tc-wintercereals: the main cereals season defined in an AEZ
- tc-springcereals: optional springcereals season, only defined in certain
AEZ
- tc-maize-main: the main maize season defined in an AEZ
- tc-maize-second: optional second maize season, only defined in certain AEZ

Each product (image) has a binary classification band where value 0
corresponds to inactive cropland and value 100 corresponds to active
cropland.

The collection should be filtered using one or more of the following image
properties:

- aez_id, holding the ID of the AEZ to which the image belongs
- season, describing the season for which the image is valid.

References:

- [1] Bolton, D. K., Gray, J. M., Melaas, E. K., Moon, M., Eklundh, L., and
Friedl, M. A.: Continental-scale land surface phenology from harmonized
Landsat 8 and Sentinel-2 imagery, Remote Sens. Environ., 240, 111685,
https://doi.org/10.1016/j.rse.2020.111685, 2020.
- [2] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)
- [3] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)

WorldCereal datasets:

-  Version 100 for year 2021
   -  [ESA/WorldCereal/AEZ/v100](ESA_WorldCereal_AEZ_v100)
   -  [ESA/WorldCereal/2021/MODELS/v100](ESA_WorldCereal_2021_MODELS_v100)
   -  [ESA/WorldCereal/2021/MARKERS/v100](ESA_WorldCereal_2021_MARKERS_v100)

## Coverage and time range

- Coverage: Global
- Time range: 2020-01-01 至 2021-12-31

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| classification | Classification: 0 or 100 | 10 |  |

## What you can use it for

- Identifying seasonally active cropland
- Monitoring global cropland use intensity
- Food security and crop area estimation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ESA/WorldCereal/2021/MARKERS/v100');
```

- Earth Engine ID: `ESA/WorldCereal/2021/MARKERS/v100`
- Providers: ESA WorldCereal Consortium, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_2021_MARKERS_v100

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, copernicus, crop, esa, global, landcover, landsat, sentinel1-derived, sentinel2-derived
- 数据引用：Van Tricht, K., Degerickx, J., Gilliams, S., Zanaga, D., Battude, M., Grosu,
A., Brombacher, J., Lesiv, M., Bayas, J. C. L., Karanam, S., Fritz, S.,
Becker-Reshef, I., Franch, B., Mollà-Bononad, B., Boogaard, H., Pratihast,
A. K., and Szantoi, Z.: WorldCereal: a dynamic open-source system for
global-scale, seasonal, and reproducible crop and irrigation mapping, Earth
Syst. Sci. Data Discuss. [preprint],
[doi:10.5194/essd-2023-184](https://doi.org/10.5194/essd-2023-184), in
review, 2023.,

- DOI：10.5194/essd-2023-184

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ESA WorldCereal 10 m v100](/pages/76b102d2/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [World Settlement Footprint 2015](/en/pages/a545a891/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
