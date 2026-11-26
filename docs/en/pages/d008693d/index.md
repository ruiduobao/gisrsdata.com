---
title: "LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0"
date: 2026-11-03 12:00:00
---

# LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0

Original name: LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0

## What this dataset is

LANDFIRE (LF), Landscape Fire and Resource Management Planning Tools, is a
shared program between the wildland fire management programs of the U.S.
Department of Agriculture's Forest Service, U.S. Department of the Interior's
Geological Survey, and The Nature Conservancy.

Landfire (LF) Historical fire regimes, intervals, and vegetation conditions
are mapped using the Vegetation Dynamics Development Tool (VDDT).
These data support fire and landscape management planning goals in
the National Cohesive Wildland Fire Management Strategy, the Federal Wildland
Fire Management Policy, and the Healthy Forests Restoration Act.

The Percent of Mixed-severity Fire (PMS) layer quantifies the amount of mixed-severity fires relative to low- and replacement-severity fires under the presumed historical fire regime.
Mixed severity is defined as between 25 and 75 percent average top-kill within a typical fire perimeter for a given vegetation type.
PMS was derived from the vegetation and disturbance dynamics model VDDT (Vegetation Dynamics Development Tool) (LF 1.0.0 CONUS only used the vegetation and disturbance dynamics model LANDSUM).
This layer is intended to describe one component of historical fire regime characteristics in the context of the broader historical time period represented by the LANDFIRE (LF) Biophysical Settings (BPS) layer and BPS Model documentation.
This layer is created by linking the BPS Group attribute in the BPS layer with the Refresh Model Tracker (RMT) data and assigning the PMS attribute.
This geospatial product should display a reasonable approximation of PMS, as documented in the RMT.
PMS is used in landscape assessments.

The LANDIFRE Fire datasets include:

* Fire Regime Groups (FRG) is intended to characterize presumed historical
  fire regimes within landscapes based on interactions between vegetation
  dynamics, fire spread, fire effects, and spatial context
* Mean Fire Return Interval (MFRI) quantifies the average period between
  fires under the presumed historical fire regime
* Percent of Low-severity Fire (PLS) image quantifies the amount of
  low-severity fires relative to mixed- and replacement-severity fires
  under the presumed historical fire regime and is defined as less than 25
  percent average top-kill within a typical fire perimeter for a given
  vegetation type
* Percent of Mixed-severity Fire (PMS) layer quantifies the amount of
  mixed-severity fires relative to low- and replacement-severity fires under
  the presumed historical fire regime, and is defined as between 25 and 75
  percent average top-kill within a typical fire perimeter for a given
  vegetation type
* Percent of Replacement-severity Fire (PRS) layer quantifies the amount of
  replacement-severity fires relative to low- and mixed-severity fires under
  the presumed historical fire regime, and is defined as greater than 75
  percent average top-kill within a typical fire perimeter for a given
  vegetation type
* Succession Classes (SClass) layer characterizes current vegetation conditions
  with respect to the vegetation species composition, cover, and height ranges
  of successional states that occur within each biophysical setting
* Vegetation Condition Class (VCC) represents a simple categorization of the
  associated Vegetation Departure (VDEP) layer and indicates the general level
  to which current vegetation is different from the simulated historical
  vegetation reference conditions
* Vegetation Departure (VDep) indicates how different current vegetation on a
  landscape is from estimated historical conditions. VDep is based on changes
  to species composition, structural stage, and canopy closure.

## Coverage and time range

- Coverage: Coverage: contiguous US (CONUS); time: 2010; resolution: 30 m.
- Time range: 2010-01-01 至 2010-12-31

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| PMS | Percent of Mixed-severity Fire | 30 |  |

## What you can use it for

- Historical fire regime analysis
- Landscape assessment and fire management planning
- Fuel and vegetation management

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDFIRE/Fire/PMS/v1_2_0');
```

- Earth Engine ID: `LANDFIRE/Fire/PMS/v1_2_0`
- Providers: U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Fire_PMS_v1_2_0

## License and citation

- License: proprietary
- Keywords: doi, fire, landfire, nature-conservancy, usda, usgs, vegetation, wildfire
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

- [LANDFIRE FRG (Fire Regime Groups) v1.2.0](/pages/fe1e8477/)
- [LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0](/pages/fde00c02/)
- [LANDFIRE PLS (Percent Low-severity Fire) v1.2.0](/pages/cfcc463e/)
- [LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0](/pages/e2c45982/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
