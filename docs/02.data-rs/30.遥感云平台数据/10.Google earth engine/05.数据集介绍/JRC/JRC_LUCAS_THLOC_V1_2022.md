---
title: "LUCAS THLOC (Points with attributes, 2022) V1"
date: 2026-11-03 12:00:00
permalink: /pages/99e20fc7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eu"
  - "jrc"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "lucas"
  - "table"
---

# LUCAS THLOC (Points with attributes, 2022) V1

## 数据集简介

The
[Land Use/Cover Area frame Survey (LUCAS)](https://ec.europa.eu/eurostat/web/lucas)
in the European Union (EU) was set up to provide statistical information.
It represents a triennial in-situ landcover and land-use data-collection
exercise that extends over the whole of the EU's territory. LUCAS collects
information on land cover and land use, agro-environmental variables, soil,
and grassland. The surveys also provide spatial information to analyse the
mutual influences between agriculture, environment, and countryside, such as
irrigation and land management.

The dataset presented here is the 2022 version of the LUCAS
surveys. Each point's location is using
the fields 'POINT_LAT' and 'POINT_LON', that is, the LUCAS theoretical
location (THLOC), as prescribed by the LUCAS grid.  For more information
please see Citations.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/LUCAS/THLOC/V1/2022`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Joint Research Center, Unit D5、Google Earth Engine
- 时间范围：2022-01-01 至 2022-12-31
- 许可：CC-BY-4.0
- 关键词：eu, jrc, landcover, landuse, landuse-landcover, lucas, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| POINT_ID | DOUBLE | Theoretical point position in LAEA: First 4 digits are X_LAEA and other 4 digits are Y_LAEA.  |
| POINT_NUTS0 | STRING | Country (NUTS 2021 classification). |
| POINT_NUTS1 | STRING | Sub country division (NUTS 2021 classification).  |
| POINT_NUTS2 | STRING | Region (NUTS 2021 classification). |
| POINT_NUTS3 | STRING | Province (NUTS 2021 classification). |
| POINT_ALTITUDE | DOUBLE | Point altitude. |
| POINT_SOIL | STRING | SOIL 2022 sample. |
| POINT_EX_ANTE | STRING | Ex-Ante point. |
| PI_EXTENSION | DOUBLE | PI extension point |
| POINT_COPERNICUS | STRING | COPERNICUS 2022 sample |
| POINT_EROSION | STRING | GULLY EROSION point |
| POINT_SOIL_BULK_0_10 | STRING | SOIL_BULK_0_10 point |
| POINT_SOIL_BULK_10_20 | STRING | SOIL_BULK_10_20 point |
| POINT_SOIL_BULK_20_30 | STRING | SOIL_BULK_20_30 point |
| POINT_SOIL_BIO | STRING | SOIL BIO point |
| POINT_LF | STRING | LANSCAPE FEATURES 2022 sample |
| SURVEY_DATE | STRING | Date. |
| SURVEY_OBS_TYPE | STRING | Type of Observation.  Values:  * 1 Field survey, point visible, <= 100 m * 2 Field survey, point visible, >100 m to point * 3 Photo-interpretation in the field * 4 Point not visible. PI not possible * 5 Out of national territory * 6 Out of EU * 7 Photo-interpretation in the office  |
| SURVEY_GPS_PROJ | STRING | GPS coordinate system.  Values:  * WGS84 * Problem with Signal * N.R.  |
| SURVEY_GPS_ALTITUDE | DOUBLE | GPS elevation (meters). |
| SURVEY_GPS_PREC | DOUBLE | GPS precision (meters). |
| SURVEY_OBS_DIST | DOUBLE | GPS distance to point. |
| SURVEY_OBS_DIRECT | STRING | Direction of observation.  Values:  * 1 On the point * 2 To North * 3 To East * 4 N.R.  |
| SURVEY_PARCEL_AREA_HA | STRING | Parcel area (ha).  Values:  * 1 area < 0.1 * 2 0.1 <= area < 0.5 * 3 0.5 <= area < 1 * 4 1 <= area < 10 * 5 area >= 10 * 6 N.R.  |
| SURVEY_LC1 | STRING | LC1 land cover 1. Land cover code (C3 doc). In case of PI, in addition to the detailed classification, also an aggregated classification can be used.  |
| SURVEY_LC1_SPEC | STRING | LC1 crop species. List of detailed crop species (C3 doc, codes B00), and an option “Assessment not possible” for PI (observation type 3 or 7).  |
| SURVEY_LC1_PERC | DOUBLE | LC1 Crop-coverage (%). |
| SURVEY_LC2 | STRING | LC2 land cover 2. Land cover code (C3 doc). In case of PI, in addition to the detailed classification, also an aggregated classification can be used.  |
| SURVEY_LC2_SPEC | STRING | LC2 crop species. List of detailed crop species (C3 doc, codes B00), and an option “Assessment not possible” for PI (observation type 3 or 7).  |
| SURVEY_LC2_PERC | DOUBLE | LC2 Crop-coverage (%). |
| SURVEY_TREE_HEIGHT_SURVEY | STRING | Height of trees (CXX, D10, E10)/crops (B70,B80) at survey.  Values:  * 1 < 5 m * 2 >= 5 m * 3 N.R. * 4 Assessment not possible  |
| SURVEY_TREE_HEIGHT_MATURITY | STRING | Height of trees (CXX, D10, E10)/crops (B70,B80) at maturity.  Values:  * 1 < 5 m * 2 >= 5 m * 3 N.R. * 4 Assessment not possible  |
| SURVEY_FEATURE_WIDTH | STRING | Width of feature.  Values:  * 1 < 20 m * 2 >= 20 m * 3 N.R.  |
| SURVEY_LU1 | STRING | LU1 land use 1. Land use code (C3 doc). In case of PI, in addition to the detailed classification, also an aggregated classification can be used.  |
| SURVEY_LU1_TYPE | STRING | LU1 land use type. List of detailed crop species (C3 doc, codes U22Xn and U315n), and an option “Assessment not possible” for PI (observation type 3 or 7).  |
| SURVEY_LU1_PERC | DOUBLE | LU1 coverage (%). |
| SURVEY_LU2 | STRING | LU2 land use 2. Land use code (C3 doc). In case of PI, in addition to the detailed classification, also an aggregated classification can be used.  |
| SURVEY_LU2_TYPE | STRING | LU2 land use type. List of detailed crop species (C3 doc, codes U22Xn, U315n), and an option “Assessment not possible” for PI (observation type 3 or 7).  |
| SURVEY_LU2_PERC | DOUBLE | LU2 coverage (%). |
| SURVEY_GRAZING | STRING | Signs of grazing in the field (for points with LC in BXX, CXX, DXX, EXX,FXX,HXX).  Values:  * 1 Visible signs of grazing * 2 No signs of grazing * 3 N.R.  |
| SURVEY_SPECIAL_STATUS | STRING | Special status.  Values:  * 1 Protected * 2 Hunting * 3 Protected and Hunting * 4 No special status * 5 N.R.  |
| SURVEY_LC_LU_SPECIAL_REMARK | STRING | Special remarks on land cover/ land use.  Values:  * 1 Crop not recognizable - Field harvested (no re-visit) * 2 Crop not recognizable - Tilled and/or sowed (To be re-visited) * 3 Clear cut * 4 Burnt area * 5 Fire break * 6 Nursery * 7 Dump site * 8 Currently dry (river bed / lake) * 9 Currently flooded * 10 No remark * 11 N.R.  |
| SURVEY_INSPIRE_PLCC1 | DOUBLE | Coniferous forest trees (%). |
| SURVEY_INSPIRE_PLCC2 | DOUBLE | Broadleaved forest trees (%). |
| SURVEY_INSPIRE_PLCC3 | DOUBLE | Shrubs (%). |
| SURVEY_INSPIRE_PLCC4 | DOUBLE | Herbaceous plants (%). |
| SURVEY_INSPIRE_PLCC5 | DOUBLE | Lichens and mosses (%). |
| SURVEY_INSPIRE_PLCC6 | DOUBLE | Consolidated (bare) surface (%). |
| SURVEY_INSPIRE_PLCC7 | DOUBLE | Unconsolidated (bare) surface (%). |
| SURVEY_WM | STRING | Presence of water management.  Values:  * 1 Irrigation * 2 Potential irrigation * 3 Drainage * 4 Irrigation and drainage * 5 No visible water management * 6 N.R.  |
| SURVEY_WM_TYPE | STRING | Type of irrigation.  Values:  * 1 Gravity * 2 Pressure: Sprinkler irrigation * 3 Pressure: Micro-irrigation * 4 Gravity/Pressure * 5 Other/not identifiable * 6 N.R.  |
| SURVEY_WM_SOURCE | STRING | Source of irrigation.  Values:  * 1 Well * 2 Pond/Lake/Reservoir * 3 Stream/Canal/Ditch * 4 Lagoon/Wastewater * 5 Other/not identifiable * 6 N.R  |
| SURVEY_WM_DELIVERY | STRING | Delivery System.  Values:  * 1 Canal * 2 Ditch * 3 Pipeline * 4 Other/not identifiable * 5 N.R.  |
| SURVEY_SOIL_STD_TAKEN | STRING | Standard soil sample taken?  Values:  * 1 Yes * 2 Not possible * 3 N.R.  |
| SURVEY_LM_HEDGE | STRING | Presence of hedgerows.  Values:  * 1 Yes * 2 No * 3 N.R.  |
| SURVEY_SOIL_STONES_PERC | STRING | Stones on the surface (% related to the area of the circular sampling zone of 2-m radius, possible values 0-100).  Values:  * 0-25% * 25-50% * 50-75% * 75-100%  |
| SURVEY_LM_STONE_WALLS | STRING | Presence of stone walls.  Values:  * 1 No * 2 Stone wall, not maintained * 3 Stone wall, well maintained * 4 N.R.  |
| SURVEY_LM_GRASS_MARGINS | STRING | Presence of grass margins.  Values:  * 1 No * 2 Grass margins <= 1m * 3 Grass margins > 1m * 4 N.R.  |
| SURVEY_CPRN_LC1N | DOUBLE | Extension of LC to the North (in m).  Source: C1(Instructions), p.233, sec.9.1.12  |
| SURVEY_CPRNC_LC1E | DOUBLE | Extension of LC to the East (in m).  Source: C1(Instructions), p.233, sec.9.1.12  |
| SURVEY_CPRNC_LC1S | DOUBLE | Extension of LC to the South (in m).  Source: C1(Instructions), p.233, sec.9.1.12  |
| SURVEY_CPRNC_LC1W | DOUBLE | Extension of LC to the West (in m).  Source: C1(Instructions), p.233, sec.9.1.12  |
| SURVEY_CPRN_URBAN | STRING | Point in urban area?  Values:  * 1 Yes * 2 No * 3 N.R.  |
| SURVEY_TREES_SECONDARY | DOUBLE | Trees with secondary crops or grazing 2 (within the extended + homogenous plot).  Values:  * 1 Cultivated trees with secondary crops, meadow or pasture (X06) * 2 Forest trees with grazed grassland, heathland and/or woodland flora (X09) * 3 N.R.  |
| SURVEY_SOIL_BIO_TAKEN | STRING | Biodiversity sample taken?  Values:  * 1 Yes * 2 Not possible * 3 N.R.  |
| SURVEY_SOIL_BLK_0_10_TAKEN | STRING | Bulk (0-10 cm) sample taken?  Values:  * 1 Yes * 2 Not possible * 3 N.R.  |
| SURVEY_SOIL_BLK_10_20_TAKEN | STRING | Bulk (10-20 cm) sample taken?  Values:  * 1 Yes * 2 Not possible * 3 N.R.  |
| SURVEY_SOIL_BLK_20_30_TAKEN | STRING | Bulk (20-30 cm) sample taken?  Values:  * 1 Yes * 2 Not possible * 3 N.R.  |
| SURVEY_SOIL_BLK_0_10_CO_P | STRING | 0-10 cores taken: Point. |
| SURVEY_SOIL_BLK_0_10_CO_N | STRING | 0-10 cores taken: North. |
| SURVEY_SOIL_BLK_0_10_CO_E | STRING | 0-10 cores taken: East. |
| SURVEY_SOIL_BLK_0_10_CO_S | STRING | 0-10 cores taken: South. |
| SURVEY_SOIL_BLK_0_10_CO_W | STRING | 0-10 cores taken: West. |
| SURVEY_SOIL_BLK_10_20_CO_P | STRING | 10-20 cores taken: Point. |
| SURVEY_SOIL_BLK_10_20_CO_N | STRING | 10-20 cores taken: North. |
| SURVEY_SOIL_BLK_10_20_CO_E | STRING | 10-20 cores taken: East. |
| SURVEY_SOIL_BLK_10_20_CO_S | STRING | 10-20 cores taken: South. |
| SURVEY_SOIL_BLK_10_20_CO_W | STRING | 10-20 cores taken: West. |
| SURVEY_SOIL_BLK_20_30_CO_P | STRING | 20-30 cores taken: Point. |
| SURVEY_SOIL_BLK_20_30_CO_N | STRING | 20-30 cores taken: North. |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('JRC/LUCAS/THLOC/V1/2022');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_LUCAS_THLOC_V1_2022
- 数据引用：Ghassemi, B., Izquierdo-Verdiguier, E., Verhegghen, A. et al.
European Union crop map 2022: Earth observation’s 10-meter dive into
Europe's crop tapestry. Sci Data 11, 1048 (2024).
[doi:10.1038/s41597-024-03884-y](https://doi.org/10.1038/s41597-024-03884-y)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
