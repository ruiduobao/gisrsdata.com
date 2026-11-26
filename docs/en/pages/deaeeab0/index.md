---
title: "LANDFIRE EVT (Existing Vegetation Type) v1.4.0"
date: 2026-11-03 12:00:00
---

# LANDFIRE EVT (Existing Vegetation Type) v1.4.0

Original name: LANDFIRE EVT (Existing Vegetation Type) v1.4.0

## What this dataset is

LANDFIRE (LF), Landscape Fire and Resource Management Planning Tools, is a
shared program between the wildland fire management programs of the U.S.
Department of Agriculture's Forest Service, U.S. Department of the Interior's
Geological Survey, and The Nature Conservancy.

LANDFIRE (LF) layers are created using predictive landscape models based on
extensive field-referenced data, satellite imagery and biophysical gradient
layers using classification and regression trees.

LANDFIRE's (LF) Existing Vegetation Type (EVT) represents the current distribution of the terrestrial ecological systems classification, developed by NatureServe for the western hemisphere, through 2016. A terrestrial ecological system is defined as a group of plant community types (associations) that tend to co-occur within landscapes with similar ecological processes, substrates, and/or environmental gradients.

*The LF Ecological Systems Descriptions for CONUS provides descriptions for each Ecological System including species, distribution and classification information.

EVT also includes ruderal or semi-natural vegetation types within the U.S. National Vegetation Classification.
The LF Ruderal NVC Groups Descriptions for CONUS provides descriptions for each ruderal NVC Group including species, distribution, and classification information.

EVT is mapped using decision tree models, field data, Landsat imagery, elevation, and biophysical gradient data.

* Decision tree models are developed separately for each of the three lifeforms-tree, shrub, and herbaceous and are then used to generate lifeform specific EVT layers.

* Disturbance products are included in LF Remap products to describe areas on the landscape that have experienced change within the previous 10-year period.

* The EVT product is reconciled through QA/QC measures to ensure life-form is synchronized with both Existing Vegetation Cover and Existing Vegetation Height.

The LANDIFRE Vegetation datasets include:

* Biophysical Settings (BPS)
* Environmental Site Potential (ESP)
* Existing Vegetation Canopy Cover (EVC)
* Existing Vegetation Height (EVH).
* Existing Vegetation Type (EVT)
These layers are created using predictive landscape models based on extensive
field-referenced data, satellite imagery and biophysical gradient layers using
classification and regression trees.

## Coverage and time range

- Coverage: Coverage: United States; time: 2014; resolution: 30 m.
- Time range: 2014-09-01 至 2014-09-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| EVT | Existing Vegetation Type | 30 |  |

## What you can use it for

- Vegetation type and structure mapping
- Landscape ecological assessment
- Inputs for fire and fuel modelling

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDFIRE/Vegetation/EVT/v1_4_0');
```

- Earth Engine ID: `LANDFIRE/Vegetation/EVT/v1_4_0`
- Providers: U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_EVT_v1_4_0

## License and citation

- License: proprietary
- Keywords: doi, fire, forest-biomass, landfire, nature-conservancy, usda, usgs, vegetation, wildfire
- 数据引用：The suggested way to cite LANDFIRE products is specific to each product,
so the model for citation is provided, with an example for a particular product.
Producer. Year released. Product xxxxx:

- Individual model name.
- BpS Models and Descriptions, Online. LANDFIRE. Washington, DC. U.S. Department of
  Agriculture, Forest Service
- U.S. Department of the Interior; U.S. Geological Survey; Arlington, VA
- The Nature Conservancy (Producers). Available- URL. Access date.

Example Citation: LANDFIRE Biophysical Settings. 2018. Biophysical setting 14420:
South Texas sand sheet grassland. In: LANDFIRE Biophysical Setting Model: Map zone 36,
[Online]. In: BpS Models and Descriptions. In: LANDFIRE. Washington, DC:
U.S. Department of Agriculture, Forest Service; U.S. Department of the Interior;
U.S. Geological Survey; Arlington, VA: The Nature Conservancy (Producers).
Available: [https://www.landfire.gov/bps-models.php](https://www.landfire.gov/bps-models.php) [2018, June 27].
Additional guidance on citation of LANDFIRE products can be found
[here](https://landfire.gov/data/citation)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [LANDFIRE BPS (Biophysical Settings) v1.4.0](/pages/18949a9a/)
- [LANDFIRE ESP AK (Environmental Site Potential) v1.2.0](/pages/b2b4a475/)
- [LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0](/pages/ca4671c8/)
- [LANDFIRE ESP HI (Environmental Site Potential) v1.2.0](/pages/7bb2ed52/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
