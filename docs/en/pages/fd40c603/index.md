---
title: "MOD10A1.005 Terra Snow Cover Daily Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD10A1.005 Terra Snow Cover Daily Global 500m [deprecated]

Original name: MOD10A1.005 Terra Snow Cover Daily Global 500m [deprecated]

## What this dataset is

The MOD10A1 V5 Snow Cover Daily Global 500m product
contains snow cover, snow albedo, fractional snow cover, and quality
assessment (QA) data. Snow cover data are based on a snow mapping
algorithm that employs a Normalized Difference Snow Index (NDSI)
and other criteria tests.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2016; resolution: 500 m.
- Time range: 2000-02-24 至 2016-12-26

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Snow_Cover_Daily_Tile | NDSI snow cover plus other results. This value is computed for MOD10_L2 and retrieved when the observation of the day is selected. Possible values are: 0-100 (NDSI snow cover). | 500 |  |
| Snow_Spatial_QA | A basic estimate of the quality of the algorithm result. This value is computed for MOD10_L2 and retrieved with the corresponding observation of the day. | 500 |  |
| Snow_Albedo_Daily_Tile | Snow albedo percentage plus other results. | 500 |  |
| Fractional_Snow_Cover | Snow cover percentage plus other results. | 500 |  |

## What you can use it for

- Snow cover monitoring and snow phenology
- Hydrology and snowmelt runoff modeling
- Climate change research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MOD10A1');
```

- Earth Engine ID: `MODIS/MOD10A1`
- Providers: NSIDC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD10A1

## License and citation

- License: proprietary
- Keywords: albedo, cryosphere, daily, geophysical, global, mod10a1, modis, nsidc, snow, terra
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2006. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 5. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/63NQASRDPDB0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)
- [ERA5-Land Monthly Aggregated — ECMWF Climate Reanalysis](/en/pages/0889ecdc/)
- [ERA5-Land Hourly — ECMWF Climate Reanalysis](/en/pages/0a0b8372/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
