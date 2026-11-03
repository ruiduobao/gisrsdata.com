---
title: "BLM AIM TerrADat TerrestrialAIM Point v1"
date: 2026-11-03 12:00:00
permalink: /pages/53c74382/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aim"
  - "biota"
  - "blm"
  - "ecosystems"
  - "endangered"
  - "environment"
  - "grsg"
  - "health"
  - "hydrology"
  - "landscape"
  - "range"
  - "soil"
---

# BLM AIM TerrADat TerrestrialAIM Point v1

## 数据集简介

Since 2011, the Bureau of Land Management (BLM) has collected field information
to inform land health through its Assessment Inventory and Monitoring (AIM)
strategy. To date, more than 6,000 terrestrial AIM field plots have been
collected over BLM lands.  The BLM AIM data archive is updated annually.
Standardized core indicators are collected at each plot that are known to be
both ecologically relevant and clearly tied to rangeland health. These
indicators inform biotic integrity, soil and site stability, and hydrologic
function. The terrestrial plot measurements include fractional bare ground
cover, vegetation composition and height, plants of management concern,
non-native invasive species, plant canopy gaps, species richness, and soil
aggregate stability. AIM represents one of the most extensive publicly
available plot measurement datasets across Western US federal lands, which can
be integrated with remotely sensed imagery and other geospatial information for
a range of analysis, classification, and validation purposes.

This dataset was created to monitor the status, condition and trend
of national BLM resources in accordance with BLM policies.  The
methodology used for the collection of these data can be found on
[the Landscape Toolbox](https://landscapetoolbox.org)
and the Monitoring Manual, 2nd Edition.  These
data should not be used for statistical or spatial inferences without
knowledge of how the sample design was drawn or without calculating
spatial weights for the points based on the sample design.

This feature class includes monitoring data collected nationally to
understand the status, condition, and trend of resources on BLM
lands. Data are collected in accordance with the BLM Assessment,
Inventory, and Monitoring (AIM) Strategy. The AIM Strategy specifies
a probabilistic sampling design, standard core indicators and
methods, electronic data capture and management, and integration with
remote sensing. Attributes include the BLM terrestrial core
indicators: bare ground, vegetation composition, plant species of
management concern, non-native invasive species, and percent canopy
gaps (see Entity/Attribute Section for exact details on attributes).
Data were collected and managed by BLM Field Offices, BLM Districts,
and/or affiliated field crews with support from the BLM National
Operations Center. Data are stored in a centralized database
(TerrADat) at the BLM National Operations Center.

Data were collected by trained data collectors with the BLM and
partner organizations. They followed the BLM core terrestrial data
[collection protocols](https://www.ntc.blm.gov/krc/viewresource.php?courseID=281&programAreaId=148).
Data were captured electronically using the [Database for Inventory,
Monitoring, and Assessment](https://jornada.nmsu.edu/tools/dima).
They were managed by the
data collectors, with oversight from BLM field offices, state
offices, and the National Operations Center. This dataset has
undergone rigorous QA/QC to ensure data quality.

## 基本信息

- 数据集编号（Earth Engine ID）：`BLM/AIM/v1/TerrADat/TerrestrialAIM`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：US Department of Interior Bureau of Land Management (BLM)、Google Earth Engine
- 时间范围：2011-05-10 至 2016-12-06
- 许可：CC0-1.0
- 关键词：aim, biota, blm, ecosystems, endangered, environment, grsg, health, hydrology, landscape, range, soil, table, terradat, terrestrialaim, vegetation, wildlife

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BareSoilCover_FH | DOUBLE | The basal cover of soil in the plot, not including soil that has cover above it.  For example, points with sagebrush over bare soil are not counted in this indicator.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  |
| DateEstablished | STRING | The date the plot was established in DIMA, YYYY/MM/DD HH:MM:SS |
| DateLoadedInDb | STRING | Date that the Database for Inventory, Monitoring, and Assessment (DIMA) was uploaded into TerrADat.  Follows a standard date, but changes with the year data was collected (YYYY-09-01).  |
| DateVisited | STRING | The date that data were collected at the plot, YYYY/MM/DD HH:MM:SS |
| EcologicalSiteId | STRING | Unique ID referring to the ecological site, defined by NRCS as "a distinctive kind of land with specific characteristics that differs from other kinds of land in its ability to produce a distinctive kind and amount of vegetation."  IDs are from the [Ecological Site Information System](https://esis.sc.egov.usda.gov/).  |
| GapPct_25_50 | DOUBLE | The percentage of the plot's soil surface covered by gaps between plant canopies that are from 25-50 cm in size.  This indicator is measured using the GAP Intercept Method (three transects per plot).  |
| GapPct_51_100 | DOUBLE | The percentage of the plot's soil surface covered by gaps between plant canopies that are from 50-100 cm in size.  This indicator is measured using the GAP Intercept Method (three transects per plot).  |
| GapPct_101_200 | DOUBLE | The percentage of the plot's soil surface covered by gaps between plant canopies that are from 101-200 cm in size.  This indicator is measured using the GAP Intercept Method (three transects per plot).  |
| GapPct_200_plus | DOUBLE | The percentage of the plot's soil surface covered by gaps between plant canopies that are greater than 200 cm in size. This indicator is measured using the GAP Intercept Method (three transects per plot).  |
| GapPct_25_plus | DOUBLE | The percentage of the plot's soil surface covered by gaps between plant canopies that are greater than 25 cm in size. This indicator is measured using the GAP Intercept Method (three transects per plot).  |
| HerbaceousHgt_Avg | DOUBLE | Average height of herbaceous plants in the plot. This was collected using the Vegetation Height Method (30 points on 3 transects per plot).  |
| InvAnnForbCover_AH | DOUBLE | The cover of non-native invasive annual forbs in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvAnnForbGrassCover_AH | DOUBLE | The cover of non-native invasive annual forbs and grasses in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non- native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvAnnGrassCover_AH | DOUBLE | The cover of non-native invasive annual grasses in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvPerenForbCover_AH | DOUBLE | The cover of non-native invasive perennial forbs in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvPerenForbGrassCover_AH | DOUBLE | The cover of non-native invasive perennial forbs and grasses in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non- native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvPerenGrassCover_AH | DOUBLE | The cover of non-native invasive perennial grasses in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvPerenGrassHgt_Avg | DOUBLE | Average height of invasive perennial grasses in the plot. This was collected using the Vegetation Height Method (30 points on 3 transects per plot).  |
| InvPlantCover_AH | DOUBLE | The cover of non-native invasive plants in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvPlant_NumSp | DOUBLE | The number of non-native invasive plant species found in the entire plot area during a timed search (Species Inventory). Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvShrubCover_AH | DOUBLE | The cover of non-native invasive shrubs in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvSubShrubCover_AH | DOUBLE | The cover of non-native invasive sub-shrubs in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvSucculentCover_AH | DOUBLE | The cover of non-native invasive succulents in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| InvTreeCover_AH | DOUBLE | The cover of non-native invasive trees in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvAnnForbCover_AH | DOUBLE | The cover of non-invasive annual forbs in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvAnnForbGrassCover_AH | DOUBLE | The cover of non-invasive annual forbs and grasses in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural  resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvAnnGrassCover_AH | DOUBLE | The cover of non-invasive annual grasses in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvPerenForbCover_AH | DOUBLE | The cover of non-invasive perennial forbs in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvPerenForbGrassCover_AH | DOUBLE | The cover of non-invasive perennial forbs and grasses in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvPerenGrassCover_AH | DOUBLE | The cover of non-invasive perennial grasses in the plot. This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvPerenGrassHgt_Avg | DOUBLE | Average height of non-invasive perennial grasses in the plot. This was collected using the Vegetation Height Method (30 points on 3 transects per plot).  |
| NonInvShrubCover_AH | DOUBLE | The cover of non-invasive shrubs in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvSubShrubCover_AH | DOUBLE | The cover of non-invasive sub-shrubs in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvSucculentCover_AH | DOUBLE | The cover of non-invasive succulents in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| NonInvTreeCover_AH | DOUBLE | The cover of non-invasive trees in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Non-native invasive status and growth form are designated by local natural resource specialists, often after consulting the USDA PLANTS database.  |
| OtherShrubHgt_Avg | DOUBLE | Average height of non-sagebrush shrubs that are preferred shrubs for sage grouse in the plot. Other Shrub species codes from the USDA Plants Database include: AMAL2, AMUT, ATCO, CEVE, CHNA2, CHVI8, GRSP, GUSA2, JUOC, JUOS, KRLA2, PAMY, PUTR2, ROWO, SAVE4, SYAL, SYOR2, and TECA2. This was collected using the Vegetation Height protocol (30 points on 3 transects per plot).  |
| PlotID | STRING | Name for each location or plot where data is collected, as assigned by the data collector.  Formats vary. Duplicate Plot IDs might exist among different Sites and Projects, but not within the same Site.  Each AIM plot is the center point of a 55-meter radius (110-meter diameter) circle in which monitoring indicators (dataset attributes) were collected.  Points were randomly selected using a spatially balanced sampling design within the desired inference space.  Most of the attributes were collected along three 50- or 25-meter transects, offset from the center point by 5 meters, radiating out from the center point at 0, 120, and 240 degrees.  |
| PlotKey | STRING | Unique numeric ID associated with each plot location. This is automatically generated in DIMA the first time a plot is created.  Future visit to the same plot generally use the same Plot Key.  |
| PrimaryKey | STRING | Unique identifier for each plot.  It includes the Plot Key as well as the data loaded into TerrADat. |
| ProjectName | STRING | Refers to the broader project area the data was collected in.  Generally includes the state, BLM management office, and year.  |
| SagebrushCover_AH | DOUBLE | The cover of sagebrush in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  Sagebrush species codes from the USDA PLANTS database include: ARAR8; ARARL3; ARARL; ARNO4; ARARN; ARBI3; ARCAB3; ARBO5; ARCAC5; ARCAV2; ARCAV; ARFR4; ARPA16; ARPE6; ARPY2; ARRI2; PIDE4; ARSP5; ARTRS2; ARTRT; ARTRV; ARTRX; ARTRV; ARTRP4; ARTRW8; ARTRW; ARTRT2; ARTRR2; ARTRR4; and SPAR2.  |
| SagebrushHgt_Avg | DOUBLE | Average height of sagebrush in the plot. This was collected using the Vegetation Height Method (30 points on 3 transects per plot).  Sagebrush species codes from the USDA PLANTS database include: ARAR8; ARARL3; ARARL; ARNO4; ARARN; ARBI3; ARCAB3; ARBO5; ARCAC5; ARCAV2; ARCAV; ARFR4; ARPA16; ARPE6; ARPY2; ARRI2; PIDE4; ARSP5; ARTRS2; ARTRT; ARTRV; ARTRX; ARTRV; ARTRP4; ARTRW8; ARTRW; ARTRT2; ARTRR2; ARTRR4; and SPAR2.  |
| SiteID | STRING | This is used by data collectors for grouping plots, e.g., by type or management area. Common values are names of management units (such as allotments) or the subject of data collection (such as reclamation).  |
| SoilStability_All | DOUBLE | The average soil aggregate stability of all samples in the plot.  This indicator is measured using the Soil Aggregate Stability Test (up to 18 samples per plot).  In this test, stability ranges from 1-6, with 1 being the least stable and 6 being the most stable.  |
| SoilStability_Protected | DOUBLE | The average soil aggregate stability of samples collected under plant canopies in the plot.  This indicator is measured using the Soil Aggregate Stability Test (up to 18 samples per plot).  In this test, stability ranges from 1-6, with 1 being the least stable and 6 being the most stable.  |
| SoilStability_Unprotected | DOUBLE | The average soil aggregate stability of samples collected between plant canopies (e.g., with no cover directly above them) in the plot.  This indicator is measured using the Soil Aggregate Stability Test (up to 18 samples per plot).  In this test, stability ranges from 1-6, with 1 being the least stable and 6 being the most stable.  |
| TotalFoliarCover_FH | DOUBLE | The foliar cover of plants in the plot.  This indicator is derived from the Line Point Intercept Method (150 points on three transects per plot).  |
| WoodyHgt_Avg | DOUBLE | Average height of woody plants in the plot. This was collected using the Vegetation Height Method (30 points on 3 transects per plot).  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('BLM/AIM/v1/TerrADat/TerrestrialAIM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
