---
title: "MYD10A1.006 Aqua Snow Cover Daily Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MYD10A1.006 Aqua Snow Cover Daily Global 500m [deprecated]

Original name: MYD10A1.006 Aqua Snow Cover Daily Global 500m [deprecated]

## What this dataset is

The MYD10A1 V6 Snow Cover Daily Global 500m product
contains snow cover, snow albedo, fractional snow cover, and quality
assessment (QA) data. Snow cover data are based on a snow mapping
algorithm that employs a Normalized Difference Snow Index (NDSI)
and other criteria tests.

[General documentation](https://doi.org/10.5067/MODIS/MYD10A1.006)

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2023; resolution: 500 m.
- Time range: 2002-07-04 至 2023-02-25

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDSI_Snow_Cover | NDSI snow cover. This value is computed for MOD10_L2 and retrieved when the observation of the day is selected. Provider values above 100 are masked out in this band (they can be found in the "NDSI_Snow_Cover_Class" band). | 500 |  |
| NDSI_Snow_Cover_Basic_QA | A basic estimate of the quality of the algorithm result. This value is computed for MOD10_L2 and retrieved with the corresponding observation of the day. | 500 |  |
| NDSI_Snow_Cover_Algorithm_Flags_QA | Bit flags indicating screen results and the presence of inland water. These flags are set when MOD10_L2 is generated and retrieved with the corresponding observation of the day. | 500 |  |
| NDSI | Raw NDSI (i.e. prior to screening). This value is computed for MOD10_L2 and retrieved with the corresponding observation of the day. | 500 |  |
| Snow_Albedo_Daily_Tile | Snow albedo percentage. Provider values above 100 are masked out in this band (they can be found in the "Snow_Albedo_Daily_Tile_Class" band). | 500 |  |
| orbit_pnt | Pointer to the orbit number of the swath that was selected as the observation of the day. The pointer references by index the list of orbit numbers written to the ORBITNUMBERARRAY metadata object in ArchiveMetadata.0. | 500 |  |
| granule_pnt | Pointer to the granule (swath) that was mapped into the tile. The pointer references the corresponding value in the GRANULEPOINTERARRAY metadata object written to ArchiveMetadata.0. | 500 |  |
| NDSI_Snow_Cover_Class | Landcover classes from the "NDSI_Snow_Cover" subdataset (provider values less than or equal to 100 are masked out). | 500 |  |
| Snow_Albedo_Daily_Tile_Class | Landcover classes from the "Snow_Albedo_Daily_Tile" subdataset (provider values less than or equal to 100 are masked out). | 500 |  |

## What you can use it for

- Snow cover monitoring and mapping
- Hydrology and climate research
- Snow albedo analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MYD10A1');
```

- Earth Engine ID: `MODIS/006/MYD10A1`
- Providers: NASA NSIDC DAAC at CIRES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD10A1

## License and citation

- License: proprietary
- Keywords: albedo, aqua, cryosphere, daily, geophysical, global, modis, myd10a1, nasa, nsidc, snow
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MYD10A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD10A1.006 Terra Snow Cover Daily Global 500m [deprecated]](/pages/59fd1524/)
- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)
- [ERA5-Land Monthly Aggregated — ECMWF Climate Reanalysis](/en/pages/0889ecdc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
