---
title: "International Best Track Archive for Climate Stewardship Project"
date: 2026-11-03 12:00:00
permalink: /pages/d0121e5a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "hurricane"
  - "noaa"
  - "table"
  - "weather"
  - "weather-and-climate"
---

# International Best Track Archive for Climate Stewardship Project

## 数据集简介

The International Best Track Archive for Climate Stewardship (IBTrACS)
provides location and intensity for global tropical cyclones. The data span
from the 1840s to present, generally providing data at 3-hour intervals.
While the best track data is focused on position and intensity
(maximum sustained wind speed or minimum central pressure), other parameters
are provided by some agencies (e.g., radius of maximum winds, environmental
pressure, radius of hurricane force winds, etc.) and are likewise provided
in IBTrACS. Files are available subset by Basin or time period, where basins
include: East Pacific, North Atlantic, North Indian, South Atlantic,
South Indian, South Pacific, and the West Pacific.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/IBTrACS/v4`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：NOAA NCEI、Google Earth Engine
- 时间范围：1842-10-25 至 2024-05-19
- 许可：proprietary
- 关键词：climate, hurricane, noaa, table, weather, weather-and-climate

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| SID | STRING | Storm Identifier |
| SEASON | DOUBLE | Year in which the storm occurred |
| NUMBER | DOUBLE | The cardinal number of the system for that season. The count includes all basins, so this will not be continuous for basin files.  |
| BASIN | STRING | Basins include:  * NA: North Atlantic * EP: Eastern North Pacific * WP: Western North Pacific * NI: North Indian * SI: South Indian * SP: Southern Pacific * SA: South Atlantic * MM: Missing - should not appear in final IBTrACS product  |
| SUBBASIN | STRING | Subbasins include:  * MM: missing - no sub basin for this basin   (no subbasins provided for WP, SI) * CS: Caribbean Sea * GM: Gulf of Mexico * CP: Central Pacific * BB: Bay of Bengal * AS: Arabian Sea * WA: Western Australia * EA: Eastern Australia  |
| NAME | STRING | Name provided by the agency |
| ISO_TIME | STRING | ISO Time provided in Universal Time Coordinates (UTC). Format is YYYY-MM-DD HH:mm:ss Most points are provided at 6 hour intervals. Some agencies provided 3 hour points (e.g., New Delhi) or times at important observations (e.g.,landfall times in the North Atlantic,etc)  |
| NATURE | STRING | Combined storm type. This is assigned based on all available storm types. Values:  * DS: Disturbance * TS: Tropical * ET: Extratropical * SS: Subtropical * NR: Not reported * MX: Mixture (contradicting nature reports from different agencies)  |
| WMO_WIND | DOUBLE | Maximum sustained wind speed from the WMO agency for the current location. NO adjustment is made for differences in wind speed averaging periods. hurdat/atcf = North Atlantic - U.S. Miami (NOAA NHC) - 1-minute winds tokyo = RSMC Tokyo (JMA) - 10-minute newdelhi = RSMC New Delhi (IMD) - 3-minute reunion = RSMC La Reunion (MFLR) - 10 minute bom = Australian TCWCs (TCWC Perth, Darwin, Brisbane) - 10-minute nadi = RSMC Nadi (FMS) - 10 minute wellington = TCWC Wellington (NZMS) - 10-minute  |
| WMO_PRES | DOUBLE | Minimum central pressure assigned by the responsible WMO agnecy  |
| WMO_AGENCY | STRING | This is the reporting agency responsible for the basin as currently listed.It should be noted that many of the agencies did not accept official WMO responsibility until relatively recently, e.g., La Reunion in 1993 or IMD in 1990. Therefore the WMO agency is used loosely to describe the currently responsible agency.  |
| TRACK_TYPE | STRING | Track type Tropical storms can interact. Values:  * PROVISIONAL: Real time data used to populate the position and other   parameters of this system.This is a provisional track that will be   replaced when reanalysis of the storm is performed. (Usually within   2 years of the storm's occurrence) * PROVISIONAL_spur: Real time data (see provisional description above)   but due to differences in positions between various inputs,   algorithm can not identify accurate position. When counting storms,   these should not likely be counted. These should be rare for   PROVISIONAL data. * MAIN: primary track associated with a storm system.   This is a track that has had some reanalysis and is higher quality   than provisional data. * spur: usually short lived tracks associated with a main track and   often represents alternate positions at the beginning of a system.   Can also represent actual system interactions (e.g., Fujiwhara   interactions).  |
| DIST2LAND | DOUBLE | Distance to land from the current position. The land dataset includes all continents and any islands larger than 1400 km^2. The distance is the nearest at the present time in any direction.  |
| LANDFALL | DOUBLE | Nearest location to land within next 6 hours. This can be thought of a landfall flag: =0 -- Landfall within 6 hours. >0 -- No landfall within next 6 hours. Calculations are based on storm center (columns 9,10). Values less than 60 nmile likely are impacted by the system even though the center of the system is not over land. The uses the same land mask as DIST2LAND.  |
| IFLAG | STRING | Interpolation Flag A 14 character flag string which denotes the source of each agency's report. Values:  * _: missing reports. No information provided. * O: original report as provided by the agency. * P: position was interpolated (all variables were   interpolated/filled, including intensity) * I: Position was provided, but Intensity variables   (and likely other variables) were interpolated/filled * V: Position and intensity variables are original but   some variables were interpolated/filled.  The order of the 14 characters refers to the following 14 datasets:  * 1: USA Agency (see column 18) * 2: Tokyo * 3: CMA * 4: HKO * 5: NewDelhi * 6: Reunion * 7: BoM * 8: Nadi * 9: Wellington * 10: ds824 * 11: TD9636 * 12: TD9635 * 13: Neumann Southern Hemisphere data set * 14: M.L. Chenoweth N Atlantic Historic dataset  |
| USA_AGENCY | STRING | The agency file providing the information: The representative US agency data is derived from a hierarchical selection: the first dataset in the following list to provide information at the given time is used as the USA_agency. Values:  * HURDAT_ATL * HURSAT_EPA * ATCF (for NA and EP basins only) * JTWC_WP * JTWC_IO * JTWC_EP * JTWC_CP * JTWC_SH * CPHC [separate file provided by CPHC for years 1966-2003, 2008] * tcvitals - THIS INDICATES THAT THE DATA ARE PRELIMINARY  While these agencies are generally orthogonal, there are cases where a system is provided in more than one source. In this case, the report from the highest source is used. ATCF format info from: https://www.nrlmry.navy.mil/atcf_web/docs/database/new/abdeck.txt HURDAT2 info from: http://www.nhc.noaa.gov/data/hurdat/hurdat2-format-atlantic.pdf  |
| USA_ATCF_ID | STRING | The ATCF ID is assigned by US agencies and can be used to comparethe storm with other US cyclone-related datasets. If two (or more) ATCF tracks make up one storm, then the IDs are separated by a colon. The format of the ATCF ID is B&lt;bb&gt;&lt;nn&gt;&lt;yyyy&gt; where bb is the basin ID, nn is the number of the storm in that basin and yyyy is the year. Possible basin values are:  * AL: North Atlantic * SL: South Atlantic * EP: East Pacific * WP: West Pacific * SH: Southern Hemisphere * IO: North Indian  For the provisional data, other basin identifiers were provided that include:  * CP: Central Pacific * SP: South Pacific * SI: South Indian * AS: Arabian Sea (North Indian) * BB: Bay of Bengal (North Indian)  |
| USA_LAT | DOUBLE | USA Latitude  |
| USA_LON | DOUBLE | USA Longitude  |
| USA_RECORD | STRING | Record identifier. Values:  * C: Closest approach to a coast, not followed by a landfall * G: Genesis * I: An intensity peak in terms of both pressure and wind * L: Landfall (center of system crossing a coastline) * P: Minimum in central pressure * R: Provides additional detail on the intensity of the cyclone when      rapid changes are underway * S: Change of status of the system * T: Provides additional detail on the track (position) of the cyclone * W: Maximum sustained wind speed  |
| USA_STATUS | STRING | Status of system. Values:  * DB: disturbance * TD: tropical depression * TS: tropical storm * TY: typhoon * ST: super typhoon * TC: tropical cyclone * HU,HR: hurricane * SD: subtropical depression * SS: subtropical storm * EX: extratropical systems * PT: post tropical * IN: inland * DS: dissipating * LO: low * WV: tropical wave * ET: extrapolated * MD: monsoon depression * XX: unknown  |
| USA_WIND | DOUBLE | Maximum sustained wind speed in knots: 0 - 300 kts  |
| USA_PRES | DOUBLE | Minimum sea level pressure, 850 - 1050 mb.  |
| USA_SSHS | STRING | Saffir-Simpson Hurricane Scale information based on the wind speed provided by the US agency wind speed (US agencies provide 1-minute wind speeds) Values:  * -5: Unknown [XX] * -4: Post-tropical [EX, ET, PT] * -3: Miscellaneous disturbances [WV, LO, DB, DS, IN, MD] * -2: Subtropical [SS, SD]  Tropical systems classified based on wind speeds [TD, TS, HU, TY,, TC, ST, HR] Values:  * -1: Tropical depression (W<34) * 0: Tropical storm [34<W<64] * 1: Category 1 [64<=W<83] * 2: Category 2 [83<=W<96] * 3: Category 3 [96<=W<113] * 4: Category 4 [113<=W<137] * 5: Category 5 [W >= 137]  |
| USA_R34_NE | DOUBLE | 34 kt wind radii maximum extent in northeastern quadrant  |
| USA_R34_SE | DOUBLE | 34 kt wind radii maximum extent in southeastern quadrant  |
| USA_R34_SW | DOUBLE | 34 kt wind radii maximum extent in southwestern quadrant  |
| USA_R34_NW | DOUBLE | 34 kt wind radii maximum extent in northwestern quadrant  |
| USA_R50_NE | DOUBLE | 50 kt wind radii maximum extent in northeastern quadrant  |
| USA_R50_SE | DOUBLE | 50 kt wind radii maximum extent in southeastern quadrant  |
| USA_R50_SW | DOUBLE | 50 kt wind radii maximum extent in southwestern quadrant  |
| USA_R50_NW | DOUBLE | 50 kt wind radii maximum extent in northwestern quadrant  |
| USA_R64_NE | DOUBLE | 64 kt wind radii maximum extent in northeastern quadrant  |
| USA_R64_SE | DOUBLE | 64 kt wind radii maximum extent in southeastern quadrant  |
| USA_R64_SW | DOUBLE | 64 kt wind radii maximum extent in southwestern quadrant  |
| USA_R64_NW | DOUBLE | 64 kt wind radii maximum extent in northwestern quadrant  |
| USA_POCI | DOUBLE | pressure in millibars of the last closed isobar, 900 - 1050 mb NOT BEST-TRACKED (not reanalyzed)  |
| USA_ROCI | DOUBLE | radius of the last closed isobar, 0 - 999 n mi. NOT BEST TRACKED (not reanalyzed)  |
| USA_RMW | DOUBLE | radius of max winds, 0 - 999 n mi. NOT BEST TRACKED (not reanalyzed)  |
| USA_EYE | DOUBLE | eye diameter, 0 - 120 n mi. NOT BEST TRACKED (not reanalyzed)  |
| TOKYO_LAT | DOUBLE | Tokyo Latitude  |
| TOKYO_LON | DOUBLE | Tokyo Longitude  |
| TOKYO_GRADE | STRING | Grade Values:  * 1: Not used * 2: Tropical Depression (TD) * 3: Tropical Storm (TS) * 4: Severe Tropical Storm (STS) * 5: Typhoon (TY) * 6: Extratropical Cyclone (L) * 7: Just entering into the responsible area of   Japan Meteorological Agency (JMA) * 8: Not used * 9 : Tropical Cyclone of TS intensity or higher   |
| TOKYO_WIND | DOUBLE | Maximum sustained wind speed [10-min averaging period]  |
| TOKYO_PRES | DOUBLE | Central pressure  |
| TOKYO_R50_DIR | STRING | Values:  * 1: Northeast (NE) * 2: East (E) * 3: Southeast (SE) * 4: South (S) * 5: Southwest (SW) * 6: West (W) * 7: Northwest (NW) * 8: North (N) * 9: (symmetric circle)   |
| TOKYO_R50_LONG | DOUBLE | The longest radius of 50kt winds or greater  |
| TOKYO_R50_SHORT | DOUBLE | The shortest radius of 50kt winds or greater  |
| TOKYO_R30_DIR | STRING | Values:  * 1: Northeast (NE) * 2: East (E) * 3: Southeast (SE) * 4: South (S) * 5: Southwest (SW) * 6: West (W) * 7: Northwest (NW) * 8: North (N) * 9: (symmetric circle)   |
| TOKYO_R30_LONG | DOUBLE | The longest radius of 30kt winds or greater  |
| TOKYO_R30_SHORT | DOUBLE | The shortest radius of 30kt winds or greater  |
| TOKYO_LAND | STRING | Landfall or passage over the Japanese islands occurred within one hour after the time of the analysis with this indicator.  |
| CMA_LAT | DOUBLE | CMA Latitude  |
| CMA_LON | DOUBLE | CMA Longitude  |
| CMA_CAT | STRING | Intensity category according to the Chinese National Standard for Grade of Tropical Cyclones (which has been used since 15 June 2006). Values:  * 0: Weaker than Tropical Depression or unknown intensity * 1: Tropical Depression (TD: 10.8-17.1 m/s) * 2: Tropical Storm (TS:17.2-24.4 m/s) * 3: Severe Tropical Storm (STS: 24.5-32.6 m/s) * 4: Typhoon (TY: 32.7-41.4 m/s) * 5: Severe Typhoon (STY: 41.5-50.9 m/s) * 6: Super Typhoon (SuperTY: ≥51.0 m/s) * 9: Extratropical Cyclone (ET) stage  |
| CMA_WIND | DOUBLE | Two-minute mean maximum sustained wind (MSW; m/s) near the TC center. WND = 9 indicates MSW < 10 m/s, WND = 0 indicates unknown intensity.  |
| HKO_LAT | DOUBLE | HKO Latitude  |
| HKO_LON | DOUBLE | USA Longitude  |
| HKO_CAT | DOUBLE | After 2009, we further classified two more storm types above typhoon, so there are in total 7 storm types LW (Low) <22 kt TD (Tropical Depression) 22 - 33 kt TS (Tropical Storm) 34 - 47 kt STS (Severe Tropical Storm) 48 - 63 kt T (Typhoon) 64 - 80 kt ST (Severe Typhoon) 81 - 99 kt SuperT (Super Typhoon) >= 100 kt  |
| HKO_WIND | DOUBLE | Maximum sustained wind speed  |
| HKO_PRES | DOUBLE | Minimum sea level pressure  |
| NEWDELHI_LAT | DOUBLE | NewDelhi Latitude  |
| NEWDELHI_LON | DOUBLE | NewDelhi Longitude  |
| NEWDELHI_GRADE | STRING | Types of disturbances:  * Low pressure area: W<17 knots * D: Depression 17<=W<28 * DD: Deep Depression 28<=W<34 * CS: Cyclonic Storm 34<=W<48 * SCS: Severe Cyclonic Storm 48<=W<64 * VSCS: Very Severe Cyclonic Storm 64<=W<120 * SCS: Super Cyclonic Storm W>=120 knots  |
| NEWDELHI_WIND | DOUBLE | Maximum sustained wind speed  |
| NEWDELHI_PRES | DOUBLE | Minimum sea level pressure  |
| NEWDELHI_CI | STRING | Dvorak CI-number  |
| NEWDELHI_DP | DOUBLE | New Delhi DP  |
| NEWDELHI_POCI | DOUBLE | Environmental pressure in which the cyclone is embedded  |
| REUNION_LAT | DOUBLE | Reunion Latitude  |
| REUNION_LON | DOUBLE | Reunion Longitude  |
| REUNION_TYPE | STRING | Values:  * 01: tropics; disturbance ( no closed isobars) * 02: <34 knot winds, <17m/s winds and at least one closed isobar * 03: 34-63 knots, 17-32m/s * 04: >63 knots, >32m/s * 05: extratropical * 06: dissipating * 07: subtropical cyclone (nonfrontal, low pressure system that       comprises initially baroclinic circulation developing over       subtropical water) * 08: overland * 09: unknown  |
| REUNION_WIND | DOUBLE | Maximum average wind speed  |
| REUNION_PRES | DOUBLE | Central pressure  |
| REUNION_TNUM | STRING | Dvorak T-number  |
| REUINION_CI | STRING | Dvorak CI-number  |
| REUNION_RMW | DOUBLE | Radius of maximum winds  |
| REUNION_R34_NE | DOUBLE | 34 kt wind radii maximum extent in northeastern quadrant  |
| REUNION_R34_SE | DOUBLE | 34 kt wind radii maximum extent in southeastern quadrant  |
| REUNION_R34_SW | DOUBLE | 34 kt wind radii maximum extent in southwestern quadrant  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('NOAA/IBTrACS/v4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_IBTrACS_v4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
