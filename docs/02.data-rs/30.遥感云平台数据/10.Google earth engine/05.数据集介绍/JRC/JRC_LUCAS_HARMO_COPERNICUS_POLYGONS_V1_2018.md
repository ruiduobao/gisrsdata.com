---
title: "LUCAS Copernicus (Polygons with attributes, 2018) V1"
date: 2026-11-03 12:00:00
permalink: /pages/3db665a7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "eu"
  - "jrc"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "lucas"
  - "table"
---

# LUCAS Copernicus (Polygons with attributes, 2018) V1

## 数据集简介

The
[Land Use/Cover Area frame Survey (LUCAS)](https://ec.europa.eu/eurostat/web/lucas)
in the European Union (EU) was set up to provide statistical information.
It represents a triennial in-situ landcover and land-use data-collection
exercise that extends over the whole of the EU's territory.  LUCAS collects
information on land cover and land use, agro-environmental variables, soil,
and grassland. The surveys also provide spatial information to analyse the
mutual influences between agriculture, environment, and countryside, such as
irrigation and land management.

The dataset presented here is the LUCAS Copernicus module. It was set set up
in 2018 to provide Earth Observation relevant data for the first time in
LUCAS history. The dataset consist of 63,287 polygons of various sizes and
shapes with consistent land cover, making the ideal tool for polygon-based
extraction from remote sensing data. The harmonization process has improved
the land cover legend to LUCAS Level-3, and has joined, wherever deemed
appropriate, the attribute data from the 2018 LUCAS survey, augmenting the
possibilities for data extraction to the fullest potential of the LUCAS
collected variables.

The text "C1 (Instructions)" in the table schema descriptions refers to
[this document](https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/LUCAS/LUCAS_harmonised/3_supporting/LUCAS2018-C1-Instructions.pdf).

See also [the LUCAS points dataset](JRC_LUCAS_HARMO_THLOC_V1).

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/LUCAS_HARMO/COPERNICUS_POLYGONS/V1/2018`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Joint Research Center, Unit D5、Google Earth Engine
- 时间范围：2006-02-05 至 2019-03-14
- 许可：CC-BY-4.0
- 关键词：copernicus, eu, jrc, landcover, landuse, landuse-landcover, lucas, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | INT | Unique row identifier.  Source: Added by harmonization process |
| point_id | INT | 8-digit unique point identifier, point id according to the LUCAS grid. Such a point ID can either be part or not of a particular yearly LUCAS survey.  Source: C1(Instructions), p.141, sec.9.1.1  Years: all  |
| year | INT | Year of survey.  Source: Added by harmonization process  Years: all |
| nuts0 | STRING | NUTS 2016 Level 0.  Years: all |
| nuts1 | STRING | NUTS 2016 Level 1.  Years: all |
| nuts2 | STRING | NUTS 2016 Level 2.  Years: all |
| nuts3 | STRING | NUTS 2016 Level 3.  Years: 2018 |
| office_pi | STRING | Whether photo-interpretation has happened in the office for this LUCAS point. If true, then this point_id was not visited by an inspector for this year.  Values:  * true * false  Source: C1(Instructions), p.141, sec.9.1.1  Years: 2015, 2018  |
| ex_ante | STRING | Ex-ante points are points that are parts of the in-situ sample and in principle have to be visited in the field, although there are a posteriori reasons why this is impossible. If true, then this point_id was not visited by an inspector for this year.  Values:  * true * false  Source: C1(Instructions), p.16, sec 8.1; C1(Instructions), p.141, sec.9.1.1  Years: 2018  |
| survey_date | STRING | Date on which the survey was carried out in the format dd/mm/yy  Years: all |
| car_latitude | DOUBLE | Latitude (WGS84) on which the car was parked.  Source: C1(Instructions), p.141, sec.9.1.2  Years: 2018  |
| car_ew | STRING | GPS Car parking East/West compass setting. Used for knowing when to add a minus to the respective coordinate.  Values:  * East * West * empty if not relevant  Years: 2018  |
| car_longitude | DOUBLE | Longitude (WGS84) on which the car was parked.  Source: C1(Instructions), p.142, sec.9.1.2  Years: 2018  |
| gps_proj | STRING | GPS projection.  Values:  * WGS84 * No GPS signal * empty if not relevant  Source: C1(Instructions), p.142, sec.9.1.2  Years: all  |
| gps_prec | DOUBLE | Average location error as given by GPS receiver (in meters).  Source: C1(Instructions), p.142, sec.9.1.2  Years: all  |
| gps_altitude | DOUBLE | Elevation in m above sea level.  Source: C1(Instructions), p.141, sec.9.1.1  Years: 2009, 2012, 2015, 2018  |
| gps_lat | DOUBLE | GPS latitude of the location from which observation is actually done (WGS84) measured in degrees.  Source: C1(Instructions), p.142, sec.9.1.2  Years: all  |
| gps_ew | STRING | East-west encoding setting for GPS.  Values:  * East * West * empty if not relevant  Years: all |
| gps_long | DOUBLE | GPS longitude of the location from which observation is actually done (WGS84) measured in degrees.  Source: C1(Instructions), p.142, sec.9.1.2  Years: all  |
| obs_dist | DOUBLE | Distance between observation location and the LUCAS point as provided by the GPS receiver (in meters).  Years: all  |
| obs_direct | STRING | Direction of the observation.  Values:  * On the point: Point regularly observed * Look to the North: "Look to the North" rule is applied if the point is     located on a boundary/ e.g., or a small linear feature (<3 m wide) * Look to the East: "Look to the East" rule is applied if the point is     located on a boundary/e.g., or a small linear feature (<3 m wide) * empty if not relevant  Source: C1(Instructions), p.144, sec.9.1.4  Years: all  |
| obs_type | STRING | The method of observation for the relevant point. For the availability of LUCAS photos according to obs_type, please check C1(Instructions), sec. 8.15.3.  Values:  * In situ < 100 m * In situ > 100 m * In situ PI * In situ PI not possible * Out of national territory * In office PI * Marine Sea * (only 2015)  Find more details check the documentation.  Source: C1(Instructions), p.142-144, sec.9.1.4  Years: all  |
| letter_group | STRING | Which letter group (top tier classification) from the C3 document is the point assigned to.  Source: Added by harmonization process  Years: all  |
| lc1 | STRING | Coding of land cover according to harmonized C3 classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: all  |
| lc1_label | STRING | Label of land cover according to harmonized C3 document. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lc1_spec | STRING | Coding of land cover species according to harmonized C3 classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: 2009, 2012, 2015, 2018  |
| lc1_spec_label | STRING | Label of land cover species according to harmonized C3 document. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lc1_perc | STRING | The percentage that the assigned land cover type (lc1) occupies on the ground.  Values:  * < 10 % * 10 - 25 % * 25 - 50 % * 50 - 75 % * > 75 % * empty if not relevant  This coding applies only for the years 2009-2015 . For 2018 the number represents the percentage of land-cover (0-100). The variable does not exist for 2006  Years: 2009, 2012, 2015, 2018  |
| lc2 | STRING | Coding of land cover according to harmonized C3 classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: all  |
| lc2_label | STRING | Label of land cover according to harmonized C3 document. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lc2_spec | STRING | Coding of land cover species according to harmonized C3 classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: 2009, 2012, 2015, 2018  |
| lc2_spec_label | STRING | Label of land cover species according to harmonized C3 document. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lc2_perc | STRING | The percentage that the assigned land cover type (lc2) occupies on the ground.  Values:  * < 10 % * 10 - 25 % * 25 - 50 % * 50 - 75 % * > 75 % * empty if not relevant  This coding applies only for the years 2009-2015 . For 2018 the number represents the percentage of land-cover (0-100). The variable does not exist for 2006  Years: 2009, 2012, 2015, 2018  |
| lu1 | STRING | Coding of the land use according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: all  |
| lu1_label | STRING | Label of the land use according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lu1_type | STRING | Coding of the land use types according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: 2015, 2018  |
| lu1_type_label | STRING | Label of the land use types according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lu1_perc | STRING | The percentage that the assigned land use type (lu1) occupies on the ground.  Values:  * < 5 % * 5 - 10 % * 10 - 25 % * 25 - 50 % * 50 - 75 % * 75 - 90 % * > 90 % * Not Relevant  This coding applies only for the year 2015. For 2018 the number represents the percentage of land-cover (0-100). The variable does not exist for 2006, 2009 and 2012.  Years: 2015, 2018  |
| lu2 | STRING | Coding of the land use according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: all  |
| lu2_label | STRING | Label of the land use according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lu2_type | STRING | Coding of the land use types according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  Years: 2015, 2018  |
| lu2_type_label | STRING | Label of the land use types according to Harmonized C3 document classification. Coding and label translation can be found in the [supporting docs](https://figshare.com/s/e6cab3bceaa9a2299237) in file *c3_legends_new.csv*.  Source: Harmonized C3 document  |
| lu2_perc | STRING | The percentage that the assigned land use type (lu2) occupies on the ground.  Values:  * < 5 % * 5 - 10 % * 10 - 25 % * 25 - 50 % * 50 - 75 % * 75 - 90 % * > 90 % * Not Relevant  This coding applies only for the year 2015. For 2018 the number represents the percentage of land-cover (0-100). The variable does not exist for 2006, 2009 and 2012.  Years: 2015, 2018  |
| parcel_area_ha | STRING | Size of the surveyed parcel in hectares.  Values:  * < 0.5 * 0.5 - 1 * 1 - 10 * > 10 * empty if not relevant  Source: C1(Instructions), p.50, sec.8.4.15  Years: 2009, 2012, 2015, 2018  |
| tree_height_maturity | STRING | Height of trees at maturity.  Values:  * < 5 m * > 5 m * Not identifiable * empty if not relevant  Source: C1(Instructions), p.147, sec.9.1.6  Years: 2012, 2015, 2018  |
| tree_height_survey | STRING | Height of trees at the moment of survey.  Values:  * < 5 m * > 5 m * Not identifiable * empty if not relevant  Source: C1(Instructions), p.147, sec.9.1.6  Years: 2009, 2012, 2015, 2018  |
| feature_width | STRING | Width of the feature.  Values:  * < 20 m * > 20 m * Not identifiable * empty if not relevant  Source: C1(Instructions), p.147, sec.9.1.6  Years: 2009, 2012, 2015, 2018  |
| lm_stone_walls | STRING | Presence of stone walls on the plot.  Values:  * No * Stone wall not maintained * Stone wall well maintained * empty if not relevant  Source: C1(Instructions), p.148, sec.9.1.7  Years: 2018  |
| crop_residues | STRING | Presence of crop residues on the plot.  Values:  * true * false  Source: C1(Instructions), p.51, sec.8.6  Years: 2018  |
| lm_grass_margins | STRING | Presence of grass margins on the plot.  Values:  * No * < 1 m width * > 1 m width * empty if not relevant  Source: C1(Instructions), p.148, sec.9.1.7  Years: 2018  |
| grazing | STRING | Signs of grazing on the plot.  Values:  * Signs of grazing * No signs of grazing * empty if not relevant  Source: C1(Instructions), p.148, sec.9.1.8  Years: 2009, 2012, 2015, 2018  |
| special_status | STRING | Whether the plot is a part of any specially regulated area.  Values:  * Protected * Hunting * Protected and hunting * No special status * empty if not relevant  Source: C1(Instructions), p.149, sec.9.1.8  Years: 2012, 2015, 2018  |
| lc_lu_special_remark | STRING | Any special remarks on the land cover / land use.  Values:  * Harvested field * Tilled/sowed * Clear cut * Burnt area * Fire break * Nursery * Dump site * Temporary dry * Temporary flooded * No remark * empty if not relevant  For more details check the documentation.  Source: C1(Instructions), p.149-150, sec.9.1.8  Years: 2012, 2015, 2018  |
| cprn_cando | STRING | Whether a Copernicus survey can be done on this point. For more information on the Copernicus module and the data created please refer to [d'Andrimont et al, 2021](https://essd.copernicus.org/articles/13/1119/2021/ ).  Values:  * true * false  Source: C1(Instructions), p.58, sec.8.8.1, C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprn_lc | STRING | The land cover on the Copernicus points according to the classification scheme at level2.  Source: Harmonized C3 document  Years: 2018  |
| cprn_lc_label | STRING | Label of land cover on the Copernicus points according to the classification scheme at level2.  Source: Harmonized C3 document  |
| cprn_lc1n | DOUBLE | The extent (in meters) to which the land cover of the Copernicus point stays the same in direction North.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprnc_lc1e | DOUBLE | The extent (in meters) to which the land cover of the Copernicus point stays the same in direction East.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprnc_lc1s | DOUBLE | The extent (in meters) to which the land cover of the Copernicus point stays the same in direction South.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprnc_lc1w | DOUBLE | The extent (in meters) to which the land cover of the Copernicus point stays the same in direction West.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprn_lc1n_brdth | DOUBLE | The breath (in %) to the next Copernicus land cover in direction North.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprn_lc1e_brdth | DOUBLE | The breath (in %) to the next Copernicus land cover in direction East.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprn_lc1s_brdth | DOUBLE | The breath (in %) to the next Copernicus land cover in direction South.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprn_lc1w_brdth | DOUBLE | The breath (in %) to the next Copernicus land cover in direction West.  Source: C1(Instructions), p.150, sec.9.1.9  Years: 2018  |
| cprn_lc1n_next | STRING | The recorded next land cover if a land cover change (LUCAS land cover level 2) occurs within 50m in direction North, regardless of the fact that the next land cover is visible on the landscape photo or not. Any feature less than 3m wide is not taken into account and is not considered a land cover change.  Source: Harmonized C3 document  Years: 2018  |
| cprn_lc1s_next | STRING | The recorded next land cover if a land cover change (LUCAS land cover level 2) occurs within 50m in direction South, regardless of the fact that the next land cover is visible on the landscape photo or not. Any feature less than 3m wide is not taken into account and is not considered a land cover change.  Source: Harmonized C3 document  Years: 2018  |
| cprn_lc1e_next | STRING | The recorded next land cover if a land cover change (LUCAS land cover level 2) occurs within 50m in direction East, regardless of the fact that the next land cover is visible on the landscape photo or not. Any feature less than 3m wide is not taken into account and is not considered a land cover change.  Source: Harmonized C3 document  Years: 2018  |
| cprn_lc1w_next | STRING | The recorded next land cover if a land cover change (LUCAS land cover level 2) occurs within 50m in direction West, regardless of the fact that the next land cover is visible on the landscape photo or not. Any feature less than 3m wide is not taken into account and is not considered a land cover change.  Source: Harmonized C3 document  Years: 2018  |
| cprn_urban | STRING | Whether the Copernicus point located in an urban area.  Values:  * true * false  Source: C1(Instructions), p.151, sec.9.1.10.1  Years: 2018  |
| cprn_impervious_perc | DOUBLE | Percentage of impervious surfaces.  Source: C1(Instructions), p.151, sec.9.1.10.1  Years: 2018 |
| inspire_plcc1 | DOUBLE | Percentage of coniferous trees.  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018 |
| inspire_plcc2 | DOUBLE | Percentage of broadleaved trees.  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018 |
| inspire_plcc3 | DOUBLE | Percentage of shrubs.  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018 |
| inspire_plcc4 | DOUBLE | Percentage of herbaceous plants.  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018 |
| inspire_plcc5 | DOUBLE | Percentage of lichens and mosses.  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018 |
| inspire_plcc6 | DOUBLE | Percentage of consolidated (bare) surface (e.g., rock outcrops).  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018  |
| inspire_plcc7 | DOUBLE | Percentage of unconsolidated (bare) surface (e.g., sand).  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018  |
| inspire_plcc8 | DOUBLE | Difference between the sum of all inspire percentage classes and 100%.  Source: C1(Instructions), p.151, sec.9.1.10.2  Years: 2015, 2018  |
| eunis_complex | STRING | EUNIS habitat classification.  Values:  * X06 * X09 * Other * Unknown * empty if not relevant  Source: C1(Instructions), p.152, sec.9.1.11  Years: 2018  |
| grassland_sample | STRING | Whether the point is a part of the grassland module.  Values:  * true * false  Source: C1(Instructions), p.152, sec.9.1.12  Years: 2018  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('JRC/LUCAS_HARMO/COPERNICUS_POLYGONS/V1/2018');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_LUCAS_HARMO_COPERNICUS_POLYGONS_V1_2018
- 数据引用：d'Andrimont, R., Verhegghen, A., Meroni, M., Lemoine, G., Strobl, P.,
Eiselt, B., Yordanov, M., Martinez-Sanchez, L. and van der Velde, M., 2020.
LUCAS Copernicus 2018: Earth Observation relevant in-situ data on land cover
throughout the European Union. Earth System Science Data Discussions, 2020,
pp.1-19.
[doi:10.5194/essd-13-1119-2021](https://doi.org/10.5194/essd-13-1119-2021)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
