---
title: "Copernicus Marine In Situ Observations — Drifters"
date: 2026-11-03 12:00:00
---

# Copernicus Marine In Situ Observations — Drifters

Original name: Copernicus Global In-situ Observations of Ocean Currents - Drifter

## What this dataset is

The In Situ TAC is a distributed centre organized around 7 oceanographic regions: the global ocean and the 6 EUROGOOS regional alliances. It involves 14 partners from 11 countries in Europe. It does not deploy any observing system and relies on data exclusively funded by sources other than the Copernicus Marine Service.

For global ocean products like this one, activities among partners are organized according to expertise and background in data management for operational oceanography. Drifter data in this collection come from two main sources: near-surface velocity measurements (15 m depth) from the French project Coriolis, part of the DBCP's Global Drifter Program, and drifter data retrieved from the OGS Mediterranean drifter dataset. The latter includes raw data from various research institutions and international data centres, processed using techniques described in Menna et al. (2017, 2018). The drifters have varying drogue depths, mostly between 0 and 15 m, but ranging from 0 to 300 m.

For more details refer to the [user manual](https://documentation.marine.copernicus.eu/PUM/CMEMS-INS-PUM-013-048.pdf).

## Coverage and time range

- Coverage: Global ocean (in-situ observations)
- Time range: 2025-03-28 至 至今

## Resolution and specifications

- Data type: bigquery_table, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| TIME | DATETIME | datetime of the observation |
| TIME_QC | INT | Quality control flag for TIME.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| DEPTH | DOUBLE | Number of Depth levels |
| DEPH | DOUBLE | Depth of the observation. (m) |
| DEPH_QC | INT | Quality control flag for DEPH.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| TEMP | DOUBLE | Temperature 20-30 cm beneath the sea surface. (Degrees Celsius) |
| TEMP_QC | INT | Quality control flag for TEMP.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| EWCT | DOUBLE | West-East sea water velocity at the drogue depth from the drifter position (m/s) |
| EWCT_QC | INT | Quality control flag for EWCT.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| NSCT | DOUBLE | South-North sea water velocity at the drogue depth from the drifter position (m/s) |
| NSCT_QC | INT | Quality control flag for NSCT.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| WSTN_MODEL | DOUBLE | North component of the 6-hour integrated wind stress from ECMWF model interpolated at the drifter's position (N/m^2) |
| WSTN_MODEL_QC | DOUBLE | Quality control flag for WSTN_MODEL.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| WSTE_MODEL | DOUBLE | East component of the 6-hour integrated wind stress from ECMWF model interpolated at the drifter's position (N/m^2) |
| WSTE_MODEL_QC | INT | Quality control flag for WSTE_MODEL.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| WSPN_MODEL | DOUBLE | South-North 6-hour integrated 10-m wind component from ECMWF model interpolated at the drifter's position (m/s) |
| WSPN_MODEL_QC | INT | Quality control flag for WSPN_MODEL.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| WSPE_MODEL | DOUBLE | West-East 6-hour integrated 10-m wind component from ECMWF model interpolated at the drifter's position (m/s) |
| WSPE_MODEL_QC | INT | Quality control flag for WSPE_MODEL.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| EWCT_WS | DOUBLE | West-East wind slippage correction (m/s) |
| EWCT_WS_QC | INT | Quality control flag for EWCT_WS.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| NSCT_WS | DOUBLE | South-North wind slippage correction (m/s) |
| NSCT_WS_QC | DOUBLE | Quality control flag for NSCT_WS.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| WS_TYPE_OF_PROCESSING | INT | Wind slippage correction processing method (Dimensionless)  * 0: Optimal mode, it is considered that the drifter trajectory is longer than 30 days * 1: Mean, the first/last days of the trajectory are completed using the mean value over the nearest 7 days. * 2: Undefined for drifters with trajectories shorter than 30 days. |
| PLATFORM_CODE | STRING | Platform code relative to each measurement |
| CURRENT_TEST | STRING | Tests of drogue loss results. It contains the 3 flags value for the 3 tests in a float format [SAW]    * [S] submersion test   * [A] acceleration not done   * [W] wind-currents correlation  It's a three-character string where each character is one of the following digits:    * 0: Drogue probably missing   * 1: Test not performed or not relevant (case for some MO_TS_DC   platforms)   * 2: Weak probability of drogue presence   * 3: Strong probability of drogue presence |
| CURRENT_TEST_QC | INT | Quality control flag for CURRENT_TEST.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| DC_REFERENCE | STRING | Reference to the data center. |
| POSITION_QC | INT | Quality control flag for POSITION.  * 0: No QC was performed * 1: good * 2: probably good * 3: Bad data that are potentially correctable * 4: Bad data * 5: value changed * 6: Not used * 7: nominal * 8: interpolated * 9: Missing value  Note that a valid value for the corresponding variable has a QC bit equal to 1, 2, 5, 7, or 8. |
| TRAJECTORY | STRING | Trajectory identifier |
| geometry | GEOMETRY | Geographic location of the observation. |

## What you can use it for

- Near-surface current analysis from drifter trajectories
- Wind-slippage-corrected surface velocity studies
- Model validation with in-situ drifter data

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/INSITU_MULTI_4KM/DRIFTER');
```

- Earth Engine ID: `COPERNICUS/MARINE/INSITU_MULTI_4KM/DRIFTER`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_DRIFTER

## License and citation

- License: CC-BY-4.0
- Keywords: copernicus, currents, insitu, oceans
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
