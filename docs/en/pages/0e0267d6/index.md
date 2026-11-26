---
title: "OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)"
date: 2026-11-03 12:00:00
---

# OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)

Original name: OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)

## What this dataset is

The OpenET dataset includes satellite-based data on the total amount of
water that is transferred from the land surface to the atmosphere through
the process of evapotranspiration (ET). OpenET provides ET data from
multiple satellite-driven models, and also calculates a single "ensemble
value" from the model ensemble. The models currently included in the OpenET
model ensemble are ALEXI/DisALEXI, eeMETRIC, geeSEBAL, PT-JPL, SIMS, and
SSEBop. The OpenET ensemble ET value is calculated as the mean of the
ensemble after filtering and removing outliers using the median absolute
deviation approach. All models currently use Landsat satellite data to
produce ET data at a pixel size of 30 meters by 30 meters (0.22 acres per
pixel). The monthly ET dataset provides data on total ET by month as an
equivalent depth of water in millimeters.

Note: DisALEXI cannot be generated before 2001 and is not included in the
ensemble calculation for this collection.

**OpenET Collection v2.0, pre-2000 (1985-1999)**

Note: This collection should not be merged with the main v2.0
collection to compute long-term trends, annual totals, or difference from
average type calculations, unless care is taken to identify and fill gaps
or missing data. This collection was generated using Landsat 5 data only,
and will have more data gaps (both spatially and temporally) than the main
v2.0 collection, which incorporates data from multiple Landsat satellites
(5 & 7, 7 & 8, etc.). This pre-2000 collection may have long periods
without data, especially in the winter months, and large regions without
data whatsoever in the earlier years (1985-1993).

[Additional information](https://etdata.org/methods/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1984 to 1999 (monthly); resolution: 30 m.
- Time range: 1984-10-01 至 1999-10-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| et_ensemble_mad | Ensemble ET value, computed as the mean of the ensemble after filtering outliers using the median absolute deviation (mad) | 30 |  |
| et_ensemble_mad_min | The minimum value in the ensemble range, after filtering for outliers using the median absolute deviation (mad) | 30 |  |
| et_ensemble_mad_max | The maximum value in the ensemble range, after filtering for outliers using the median absolute deviation (mad) | 30 |  |
| et_ensemble_mad_count | The number of models used to compute the ensemble ET value, after filtering for outliers using the median absolute deviation (mad) | 30 |  |
| et_ensemble_mad_index | Bitmask indicating which models were included in the ensemble ET value, after filtering for outliers using the median absolute deviation (mad) | 30 |  |
| et_ensemble_sam | The simple arithmetic mean (sam) of all six models in the OpenETmodel ensemble | 30 |  |

## What you can use it for

- Monitor field-scale irrigation water use and evapotranspiration.
- Provide monthly ET data for water-resource management and drought assessment.
- Compare multi-model ensemble ET with single-model results.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('projects/openet/assets/ensemble/conus/gridmet/monthly/v2_0_pre2000');
```

- Earth Engine ID: `projects/openet/assets/ensemble/conus/gridmet/monthly/v2_0_pre2000`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ensemble_conus_gridmet_monthly_v2_0_pre2000

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Melton, F., Huntington, J., Grimm, R., Herring, J., Hall, M., Rollison, D.,
Erickson, T., Allen, R., Anderson, M., Fisher, J., Kilic, A., Senay, G.,
volk, J., Hain, C., Johnson, L., Ruhoff, A., Blankenau, P., Bromley, M.,
Carrara, W., Daudert, B., Doherty, C., Dunkerly, C., Friedrichs, M., Guzman,
A., Halverson, G., Hansen, J., Harding, J., Kang, Y., Ketchum, D., Minor,
B., Morton, C., Revelle, P., Ortega-Salazar, S., Ott, T., Ozdogon, M.,
Schull, M., Wang, T., Yang, Y., Anderson, R., 2021. OpenET: Filling a
Critical Data Gap in Water Management for the Western United States.
Journal of the American Water Resources Association, 2021 Nov 2.
[doi:10.1111/1752-1688.12956](https://doi.org/10.1111/1752-1688.12956)

- DOI：10.1111/1752-1688.12956

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.1](/pages/e711299d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
