---
title: "Murray Global Tidal Wetland Change v1.0 (1999-2019)"
date: 2026-11-03 12:00:00
---

# Murray Global Tidal Wetland Change v1.0 (1999-2019)

Original name: Murray Global Tidal Wetland Change v1.0 (1999-2019)

## What this dataset is

The Murray Global Tidal Wetland Change Dataset contains maps of the global
extent of tidal wetlands and their change. The maps were developed from a three
stage classification that sought to (i) estimate the global distribution of
tidal wetlands (defined as either tidal marsh, tidal flat or mangrove
ecosystems), (ii) detect their change over the study period, and (iii) estimate
the ecosystem type and timing of tidal wetland change events.

The dataset was produced by combining observations from 1,166,385 satellite
images acquired by Landsat 5 to 8 with environmental data of variables known
to influence the distributions of each ecosystem type, including temperature,
slope, and elevation. The image contains bands for a tidal wetland extent
product (random forest probability of tidal wetland occurrence) for the
start and end time-steps of the study period and a tidal wetland change product
over the full study period (loss and gain of tidal wetlands).

Please see the [usage notes](https://www.globalintertidalchange.org/data-usage)
on the [project website](https://www.globalintertidalchange.org/). A full
description of the methods, validation, and limitations of the data produced by
this software is available in the associated scientific paper.

See also
[UQ/murray/Intertidal/v1_1/global_intertidal](UQ_murray_Intertidal_v1_1_global_intertidal)
for global maps of the distribution of tidal flat ecosystems.

## Coverage and time range

- Coverage: Coverage: global coasts; time span: 1999 to 2019; resolution: 30 m.
- Time range: 1999-01-01 至 2019-12-31

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| loss | Set to 1 for loss locations, masked out otherwise. | 30 |  |
| lossYear | Integer representing the end year of the time-step of loss analysis (e.g., 19 = 2017-2019). | 30 |  |
| lossType | Loss type  * 2 - Tidal Flat * 3 - Mangrove * 5 - Tidal Marsh | 30 |  |
| gain | Set to 1 for gain locations, masked out otherwise. | 30 |  |
| gainYear | Integer representing the end year of the time-step of gain analysis (e.g., 19 = 2017-2019). | 30 |  |
| gainType | Gain type:  * 2 - Tidal Flat * 3 - Mangrove * 5 - Tidal Marsh | 30 |  |
| twprobabilityStart | Random forest agreement of the overarching tidal wetland class for the first time step (1999-2001). Integer between 0 and 100. | 30 |  |
| twprobabilityEnd | Random forest agreement of the overarching tidal wetland class for the last time step (2017-2019). Integer between 0 and 100. | 30 |  |

## What you can use it for

- Tidal wetland (mangrove, tidal flat, saltmarsh) change monitoring
- Coastal conservation and blue carbon assessment
- Sea-level rise impact studies

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('JCU/Murray/GIC/global_tidal_wetland_change/2019');
```

- Earth Engine ID: `JCU/Murray/GIC/global_tidal_wetland_change/2019`
- Providers: Murray/JCU, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JCU_Murray_GIC_global_tidal_wetland_change_2019

## License and citation

- License: CC-BY-4.0
- Keywords: coastal, ecosystem, intertidal, landsat-derived, mangrove, murray, saltmarsh, surface-ground-water, tidal-flat, tidal-marsh
- 数据引用：Murray, N.J., Worthington, T.A., Bunting, P., Duce, S., Hagger, V.,
Lovelock, C.E., Lucas, R., Saunders, M.I., Sheaves, M., Spalding, M.,
Waltham, N.J., Lyons, M.B., 2022. High-resolution mapping of losses and
gains of Earth's tidal wetlands. *Science*.
[doi:10.1126/science.abm9583](https://doi.org/10.1126/science.abm9583)

- DOI：10.1126/science.abm9583

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)
- [GFW (Global Fishing Watch) Daily Fishing Hours](/en/pages/7dfa6e21/)
- [GFW (Global Fishing Watch) Daily Vessel Hours](/en/pages/37ea4824/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
