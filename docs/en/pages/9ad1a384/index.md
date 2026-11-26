---
title: "NOAA NHC HURDAT2 Pacific Hurricane Catalog"
date: 2026-11-03 12:00:00
---

# NOAA NHC HURDAT2 Pacific Hurricane Catalog

Original name: NOAA NHC HURDAT2 Pacific Hurricane Catalog

## What this dataset is

Hurricane best track database (HURDAT2).

Pacific basin 1949-2018.

## Coverage and time range

- Coverage: Spatial: Pacific basin; temporal: 1949 to 2018; type: vector/table.
- Time range: 1949-06-11 至 2018-11-09

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| seq | DOUBLE | ATCF cyclone number for that year |
| name | STRING | Hurricane name.  e.g. "ALEX" |
| datetime | STRING | Observation time in UTC. Format is YYYY-MM-DDTHH:MM:SS. |
| record_id | STRING | Single letter desinating a specific event in a hurricane track.  An empty string if no code.  - C - Closest approach to a coast not followed by a landfall - G - Genesis - I - An intensity peak in terms of both pressure and wind - L - Landfall (center of system crossing a coastline) - P - Minimum in central pressure - R - Provides additional detail on the intensity of the cyclone when rapid changes are underway - S - Change of status of the system - T - Provides additional detail on the track (position) of the cyclone - W - Maximum sustained wind speed |
| status | STRING | Status of system:  - DB - Disturbance (of any intensity) - ET - Unknown.  The only occurrence is in HARVEY. - EX - Extratropical cyclone (of any intensity) - HU - Tropical cyclone of hurricane intensity (> 64 knots) - LO - A low that is neither a tropical cyclone, a subtropical cyclone, nor an extratropical cyclone (of any intensity) - SD - Subtropical cyclone of subtropical depression intensity (< 34 knots) - SS - Subtropical cyclone of subtropical storm intensity (> 34 knots) - TD - Tropical cyclone of tropical depression intensity (< 34 knots) - TS - Tropical cyclone of tropical storm intensity (34-63 knots) - WV - Tropical Wave (of any intensity) |
| max_wind_kts | DOUBLE | Maximum wind speed |
| min_pressure | DOUBLE | Minimum pressure |
| numEntries | DOUBLE | Number of points for a particular hurricane |
| radii_ne_34kt | DOUBLE | 34 kt wind radii maximum extent in northeastern quadrant |
| radii_se_34kt | DOUBLE | 34 kt wind radii maximum extent in southeastern quadrant |
| radii_sw_34kt | DOUBLE | 34 kt wind radii maximum extent in southwestern quadrant |
| radii_nw_34kt | DOUBLE | 34 kt wind radii maximum extent in northwestern quadrant |
| radii_ne_50kt | DOUBLE | 50 kt wind radii maximum extent in northeastern quadrant |
| radii_se_50kt | DOUBLE | 50 kt wind radii maximum extent in southeastern quadrant |
| radii_sw_50kt | DOUBLE | 50 kt wind radii maximum extent in southwestern quadrant |
| radii_nw_50kt | DOUBLE | 50 kt wind radii maximum extent in northwestern quadrant |
| radii_ne_64kt | DOUBLE | 64 kt wind radii maximum extent in northeastern quadrant |
| radii_se_64kt | DOUBLE | 64 kt wind radii maximum extent in southeastern quadrant |
| radii_sw_64kt | DOUBLE | 64 kt wind radii maximum extent in southwestern quadrant |
| radii_nw_64kt | DOUBLE | 64 kt wind radii maximum extent in northwestern quadrant |
| basin | STRING | Ocean basin.  Always one of:  - CP - North Central Pacific - EP - Northeast Pacific |
| id | STRING | Code for a particular hurricane.  Basic code followed by a 2 digit cyclone number followed by a 4-digit year.  e.g. "CP011993" |
| year | DOUBLE | Year in which the hurricane occurred |

## What you can use it for

- Analyse long-term trends in Pacific hurricane frequency and intensity.
- Provide historical hurricane samples for coastal risk assessment.
- Validate hurricane forecast track and intensity errors.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('NOAA/NHC/HURDAT2/pacific');
```

- Earth Engine ID: `NOAA/NHC/HURDAT2/pacific`
- Providers: NOAA NHC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_NHC_HURDAT2_pacific

## License and citation

- License: proprietary
- Keywords: hurricane, nhc, noaa, table, weather, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA NHC HURDAT2 Atlantic Hurricane Catalog](/en/pages/8e9e1c36/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
