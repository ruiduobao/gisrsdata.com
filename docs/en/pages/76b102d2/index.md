---
title: "ESA WorldCereal 10 m v100"
date: 2026-11-03 12:00:00
---

# ESA WorldCereal 10 m v100

Original name: ESA WorldCereal 10 m v100

## What this dataset is

The European Space Agency (ESA) WorldCereal 10 m 2021 product suite consists
of global-scale annual and seasonal crop maps and their related confidence.
They were generated as part of the
[ESA-WorldCereal project](https://esa-worldcereal.org/). More information on
the content of these products and the methodology used to generate them is
described in [1].

This collection contains up to 106 agro-ecological zone (AEZ) images for
each product which were all processed with respect to their own regional
seasonality and should be considered as independent products. These seasons
are described in the list below and were developed in [2] as part of the
project. Note that cereals as described by WorldCereal include wheat,
barley, and rye, which belong to the *Triticeae* tribe.

WorldCereal seasons description:

- tc-annual: a one-year cycle being defined in an AEZ by the end of the last
considered growing season
- tc-wintercereals: the main cereals season defined in an AEZ
- tc-springcereals: optional springcereals season, only defined in certain
AEZ
- tc-maize-main: the main maize season defined in an AEZ
- tc-maize-second: optional second maize season, only defined in certain AEZ

The available products in this collection are:

- temporarycrops
- maize
- wintercereals
- springcereals
- irrigation

Each product (image) has a binary classification (0 or 100) and a confidence
(0-100) band. Note that AEZs for which no irrigation product is available
were not processed because of the unavailability of thermal Landsat data.

The collection should be filtered using one or more of the following image
properties:

- aez_id, holding the ID of the AEZ to which the image belongs
- product, describing the WorldCereal product name of the image
- season, describing the season for which the image is valid.

References:

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
| confidence | Confidence, 0 to 100 | 10 |  |

## What you can use it for

- Global crop type mapping (maize, winter/spring cereals, irrigation)
- Cropland and irrigated area statistics
- Agricultural monitoring and food security assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ESA/WorldCereal/2021/MODELS/v100');
```

- Earth Engine ID: `ESA/WorldCereal/2021/MODELS/v100`
- Providers: ESA WorldCereal Consortium, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_2021_MODELS_v100
- [1] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)
- [2] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)

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

- [ESA WorldCereal Active Cropland 10 m v100](/pages/dd6f101f/)
- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [World Settlement Footprint 2015](/en/pages/a545a891/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
