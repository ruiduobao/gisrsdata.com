---
title: "Primary Humid Tropical Forests"
date: 2026-11-03 12:00:00
---

# Primary Humid Tropical Forests

Original name: Primary Humid Tropical Forests

## What this dataset is

Primary humid tropical forests provide numerous global ecosystem services,
but are under continuing threat of clearing from economic drivers. To facilitate
national land use planning and balancing the goals of economic development and
maintenance of ecosystem services, a primary humid tropical forest map was
created by the UMD GLAD team. The primary forest extent was mapped
for the year 2001 at a spatial resolution of 30 meters using globally acquired,
free-of-charge, and consistently processed Landsat imagery.

## Coverage and time range

- Coverage: Spatial: global humid tropics; temporal: 2001; resolution: 30 m.
- Time range: 2001-01-01 至 2002-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Primary_HT_forests | Primary Humid Tropical Forests | 30 |  |

## What you can use it for

- Primary forest conservation and monitoring.
- Assess primary forest loss and carbon emissions.
- Primary-forest baseline for land-use planning.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1');
```

- Earth Engine ID: `UMD/GLAD/PRIMARY_HUMID_TROPICAL_FORESTS/v1`
- Providers: UMD/GLAD, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/UMD_GLAD_PRIMARY_HUMID_TROPICAL_FORESTS_v1

## License and citation

- License: proprietary
- Keywords: forest, forest-biomass, glad, global, landsat-derived, umd
- 数据引用：Turubanova S., Potapov P., Tyukavina, A., and Hansen M. (2018) Ongoing primary forest
loss in Brazil, Democratic Republic of the Congo, and Indonesia. Environmental
Research Letters.
[https://doi.org/10.1088/1748-9326/aacd1c](https://doi.org/10.1088/1748-9326/aacd1c)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)
- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/en/pages/f726b0e6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
