---
title: "GLIMS Current: Global Land Ice Measurements From Space"
date: 2026-11-03 12:00:00
---

# GLIMS Current: Global Land Ice Measurements From Space

Original name: GLIMS Current: Global Land Ice Measurements From Space

## What this dataset is

Global Land Ice Measurements from Space (GLIMS) is
an international initiative with the goal of repeatedly surveying
the world's estimated 200,000 glaciers.

The project seeks
to create a globally comprehensive inventory of land ice, including
measurements of glacier area, geometry, surface velocity, and
snow line elevation. To perform these analyses, the GLIMS project
uses satellite data, primarily from the Advanced Spaceborne Thermal
Emission and Reflection Radiometer (ASTER) and the Landsat Enhanced
Thematic Mapper Plus (ETM+), as well as historical information
derived from maps and aerial photographs.

Each feature in this dataset is a polygonal boundary of a glacier at the
time of analysis.  A few glacier IDs have hundreds of distinct rows over
time.

This dataset is a snapshot of the inventory of glacier boundaries as of
June 7, 2023, providing over 1,100,000 rows.

## Coverage and time range

- Coverage: Global glacierized regions
- Time range: 1750-01-01 至 2023-06-07

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| analysts | STRING | Name(s) of data contributor(s) |
| anlys_id | DOUBLE | ID of a glacier at a particular time |
| anlys_time | STRING | When the analysis was done |
| area | DOUBLE | Area of the glacier in the plane of the map projection in square kilometers |
| chief_affl | STRING | Affiliation of the chief of the regional center |
| db_area | DOUBLE | Same as 'area', but recomputed by the GLIMS project |
| geog_area | STRING | Name of geographic region covered by the regional center |
| glac_id | STRING | The GLIMS glacier ID |
| glac_name | STRING | The glacier name. ~80% of the rows equal 'None' |
| glac_stat | STRING | Glacier status, either 'exists' or 'None' |
| length | DOUBLE | Length of the glacier perimeter in meters |
| line_type | STRING | Glacier record type, e.g. 'glac_bound' for glaciers, or other values for internal rocks, snowlines, water features, etc. |
| local_id | STRING | ID assigned by the contributing institution or regional center |
| max_elev | DOUBLE | Highest part of the glacier, in meters above sea level |
| mean_elev | DOUBLE | Mean elevation of the glacier, in meters above sea level |
| min_elev | DOUBLE | Lowest part of the glacier, in meters above sea level |
| parent_id | STRING | ID of the glacier that is the parent of this glacier |
| primeclass | DOUBLE | WGMS glacier classification number |
| proc_desc | STRING | Description of processing done on this record |
| rc_id | DOUBLE | ID used by the regional center |
| rec_status | STRING | Record status |
| release_dt | STRING | Date data was released, in YYYY-MM-ddTHH:mm:ss format |
| src_date | STRING | Date of source imagery used to create the outline |
| subm_id | DOUBLE | The submission ID assigned by GLIMS |
| submitters | STRING | Name(s) of data submitter(s) |
| wgms_id | STRING | World Glacier Monitoring Service ID |
| width | DOUBLE | Width of the glacier in meters |

## What you can use it for

- Global glacier inventory and area statistics
- Glacier change and sea level rise research
- Glacier cataloguing and data submission

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('GLIMS/current');
```

- Earth Engine ID: `GLIMS/current`
- Providers: National Snow and Ice Data Center (NSDIC), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GLIMS_current

## License and citation

- License: proprietary
- Keywords: cryosphere, glacier, glims, ice, landcover, nasa, nsidc, snow, table
- DOI：10.7265/N5V98602

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)
- [ERA5-Land Monthly Aggregated — ECMWF Climate Reanalysis](/en/pages/0889ecdc/)
- [ERA5-Land Hourly — ECMWF Climate Reanalysis](/en/pages/0a0b8372/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
