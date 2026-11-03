---
title: "USFS TreeMap 2023-1"
date: 2026-11-03 12:00:00
permalink: /pages/0e92aeb8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aboveground"
  - "biomass"
  - "carbon"
  - "climate-change"
  - "conus"
  - "forest"
  - "forest-biomass"
  - "forest-inventory-and-analysis"
  - "forest-type"
  - "fsic-go"
  - "gtac"
  - "landcover"
---

# USFS TreeMap 2023-1

## 数据集简介

TreeMap datasets provide detailed spatial information on forest characteristics 
across the entire forested extent of the Conterminous United States (CONUS) for 
the years 2016, 2020, 2022, and 2023. TreeMap 2014 is also available for CONUS but 
not included in this data archive. TreeMap 2024 is projected to be released in fall 2026. 

For each year, TreeMap contains 22-band 30 x 30m resolution gridded map images of 
the forests of the United States, with each band representing an attribute derived 
from select Forest Inventory Analysis (FIA) data and one band representing the TreeMap ID 
(TM_ID). Some commonly used attributes have already been generated for users and are 
represented here, including forest type, canopy cover percent, live tree stocking, 
live/dead tree biomass, and carbon in live/dead trees. 

TreeMap datasets use [LANDFIRE](https://www.landfire.gov/) data as key input layers and 
are constrained to years when LANDFIRE data are available. TreeMap includes only pixels 
defined by LANDFIRE as at least 10% forest cover.

TreeMap is produced using a Random Forest machine learning imputation algorithm that 
assigns the most similar FIA plot to each pixel of gridded LANDFIRE input data. The 
objective is to combine the complementary strengths of detailed-but-spatially-sparse 
FIA data with less-detailed-but-spatially-comprehensive LANDFIRE data to produce better 
estimates of forest characteristics at a variety of scales. 

TreeMap is distinct from other imputed forest vegetation products in that it assigns an FIA 
plot identifier to each pixel, whereas other datasets use separate models for each individual 
forest characteristic such as live basal area (e.g., Ohmann and Gregory 2002; Pierce Jr et al. 
2009; Wilson, Lister, and Riemann 2012). The FIA plot identifier can be linked to the hundreds 
of variables and attributes recorded for each tree and plot in the FIA DataMart, FIA's public 
repository of plot information (Forest Inventory Analysis 2022a). While we provide 21 attribute 
rasters in this data package, users can generate other attributes by linking the TM_ID 
to the FIA plot control number (PLT_CN), which corresponds to a unique plot visit. For 
more information and a lookup table linking TM_ID to FIA PLT_CN, see the Forest Service 
Research Data Archive (DOIs given below in “Additional Resources” section).

TreeMap is used in both the private and public sectors for projects including fuel 
treatment planning, snag hazard mapping, and estimation of terrestrial carbon resources.

The TreeMap 2016 dataset was produced using the methods described in [Riley et al. (2022)](https://research.fs.usda.gov/treesearch/65597). 
The TreeMap 2020, 2022, and 2023 datasets were produced using the methods described in 
Riley et al. (2026, In Prep), 
which are similar to those used for TreeMap 2016, but differ in that: 1) biophysical 
variables were derived by overlay of the plot coordinates with Daymet rasters rather 
than LANDFIRE biophysical variables and included average precipitation, average 
maximum temperature, average minimum temperature, average vapor pressure, average soil 
water equivalent, average vapor pressure deficit, average daily shortwave radiation; 
and 2) plots available for imputation in each LANDFIRE zone were limited to those plots 
with tree species that were present either in the FIA plots found within the LANDFIRE 
zone, or in the zones immediately bordering it. This reduced the number of plots with 
trees that were imputed outside of their observed range, an issue which affected a small number of pixels in previous TreeMap versions.

The results for all years showed good correspondence between the target LANDFIRE data 
and the imputed plot data. Values of overall within-class agreement for forest cover, 
forest height, vegetation group, and disturbance code can be found in each vintage's 
metadata in the USFS Research Data Archive and USFS Raster Data Gateway, as well as in 
Riley et al (In Prep). 

**Additional Resources**

* See TreeMap in the Forest Service Research Data Archive for CONUS-wide datasets, the TM_ID to FIA 
PLT_CN lookup table, plot-level tree data (the Tree Table), and additional information on
[TreeMap 2014](https://www.fs.usda.gov/rds/archive/catalog/RDS-2019-0026), [TreeMap 2016](https://www.fs.usda.gov/rds/archive/catalog/RDS-2021-0074), [TreeMap 2020](https://www.fs.usda.gov/rds/archive/catalog/RDS-2025-0031), [TreeMap 2022](https://www.fs.usda.gov/rds/archive/catalog/RDS-2025-0032), and [TreeMap 2023](https://www.fs.usda.gov/rds/archive/catalog/RDS-2026-0038).

* See the [TreeMap 2016 Publication, Riley et al. 2022](https://www.fs.usda.gov/research/treesearch/65597)
for more detailed information regarding methods and accuracy assessment.

* The [TreeMap Data Explorer](https://apps.fs.usda.gov/lcms-viewer/treemap.html)
is a web-based application that provides users with the ability to view and download 
TreeMap attribute data.

* Visit the [TreeMap Raster Data Gateway](https://data.fs.usda.gov/geodata/rastergateway/treemap/) for TreeMap attribute data downloads, metadata, and support documents.

* The [TreeMap GitHub site](https://github.com/firelab/gtac-treemap) contains scripts and documentation for generating TreeMap datasets, including the Random Forest imputation algorithm, and is intended for users who want to generate their own TreeMap datasets.

* See the [FIA Database Manual version 9.4](https://research.fs.usda.gov/understory/forest-inventory-and-analysis-database-user-guide-nfi) for more detailed information on the attributes included in TreeMap.

Contact sm.fs.treemaphelp@usda.gov with any questions or specific data requests.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/gtac-data-publish/assets/TreeMap/Product_Version/2023-1`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA Forest Service (USFS) Field Services and Innovation Center Geospatial Office (FSIC-GO)、Google Earth Engine
- 时间范围：2016-01-01 至 2023-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：aboveground, biomass, carbon, climate-change, conus, forest, forest-biomass, forest-inventory-and-analysis, forest-type, fsic-go, gtac, landcover, landfire, redcastle-resources, tree-cover, us, usda, usfs, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ALSTK | All-Live-Tree Stocking. The sum of stocking percent values of all live trees on  the condition.  | 30 |  |
| BALIVE | Live Tree Basal Area. Basal area in square feet per acre of all live trees  ≥1.0 inch d.b.h./d.r.c. sampled in the condition.  | 30 |  |
| CANOPYPCT | Live Canopy Cover. Derived from the Forest Vegetation Simulator.  | 30 |  |
| CARBON_D | Carbon, Standing Dead. Calculated via the following FIA query:  Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP)  / 2 /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2) AND  ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| CARBON_DWN | Carbon, Down Dead. Carbon (tons per acre) of woody material >3 inches in  diameter on the ground, and stumps and their roots >3 inches in diameter.  Estimated from models based on geographic area, forest type, and live tree  carbon density (Smith and Heath 2008).  | 30 |  |
| CARBON_L | Carbon, Live Above Ground. Calculated via the following FIA query:  Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP)  / 2 /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |
| DRYBIO_D | Dry Standing Dead Tree Biomass, Above Ground. Calculated via the following FIA  query: Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING,  DRYBIO_WDLD_SPP) /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND  ((TREE.STATUSCD)=2) AND ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| DRYBIO_L | Dry Live Tree Biomass, Above Ground. Calculated via the following FIA query:  Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP)  /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |
| FLDSZCD | Field Stand-Size Class Code - Field-assigned classification of the predominant  (based on stocking) diameter class of live trees within the condition.  | 30 |  |
| FLDTYPCD | Field Forest Type Code - A code indicating the forest type, assigned by the  field crew, based on the tree species or species groups forming a plurality of  all live stocking. The field crew assesses the forest type based on the acre  of forest land around the plot, in addition to the species sampled on the  condition.  | 30 |  |
| FORTYPCD | Algorithm Forest Type Code - This is the forest type used for reporting  purposes. It is primarily derived using a computer algorithm, except when less  than 25 percent of the plot samples a particular forest condition or in a few  other cases.  | 30 |  |
| GSSTK | Growing-Stock Stocking. The sum of stocking percent values of all growing-stock  trees on the condition.  | 30 |  |
| QMD | Stand Quadratic Mean Diameter. The quadratic mean diameter, or the diameter of  the tree of average basal area, on the condition. Based on live trees  ≥1.0 inch d.b.h./d.r.c. Available for years: 2020, 2022, 2023.  | 30 |  |
| QMD_RMRS | Stand Quadratic Mean Diameter. Rocky Mountain Research Station. The quadratic  mean diameter, or the diameter of the tree of average basal area, on the  condition. Based on live trees ≥1.0 inch d.b.h./d.r.c. Only collected by certain FIA work units. Available for years: 2016. Limited spatial availability.  | 30 |  |
| SDIsum | Sum of Stand Density Index. Stand density index (SDI). A relative measure of  stand density for live trees (greater than or equal to 1.0 inch d.b.h./d.r.c.)  on the condition, expressed as a sum of the maximum stand density index (SDI). Available for years: 2020, 2022, 2023.  | 30 |  |
| SDIPCT_RMRS | Stand Density Index. Rocky Mountain Research Station. A relative measure of  stand density for live trees (≥1.0 inch d.b.h./d.r.c.) on the condition,  expressed as a percentage of the maximum stand density index (SDI). Only  collected by certain FIA work units. Available for years: 2016. Limited spatial availability.  | 30 |  |
| STANDHT | Height of dominant trees. Derived from the Forest Vegetation Simulator.  | 30 |  |
| STDSZCD | Algorithm Stand-Size Class Code - A classification of the predominant (based on  stocking) diameter class of live trees within the condition assigned using an  algorithm.  | 30 |  |
| TPA_DEAD | Dead Trees Per Acre. Number of dead standing trees per acre (DIA >= 5”).  Calculated via the following FIA query: Sum TREE.TPA_UNADJ WHERE  (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2) AND ((TREE.DIA)>=5)  AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| TPA_LIVE | Live Trees Per Acre. Number of live trees per acre (DIA > 1”). Calculated via  the following FIA query: Sum TREE.TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1)  AND ((TREE.STATUSCD)=1) AND ((TREE.DIA)>=1))  | 30 |  |
| TM_ID | Raw TreeMap identifier dataset values. This dataset is useful to see spatial groupings of individual modeled plot values. TM_ID mappings to FIA plot ids are specific to each year of data. TM_ID attribute layers should not be compared directly across years. If using TM_ID to calculate additional attributes from FIA data, use the year-specific Raster Attribute Table (RAT) to map TM_ID to PLT_CN. The RAT is provided at the USFS Research Data Archive (RDA) and the USFS Raster Data Gateway.  | 30 |  |
| Value | Raw TreeMap identifier dataset values. This dataset is useful to see spatial  groupings of individual modeled plot values. Equivalent to TM_ID. See notes on TM_ID mappings to FIA plot ids.    | 30 |  |
| VOLBFNET_L | Volume, Live (log rule: Int’l ¼ inch). Calculated via the following FIA query:  Sum VOLBFNET * TPA_UNADJ WHERE (((TREE.TREECLCD)=2) AND  ((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |
| VOLCFNET_D | Volume, Standing Dead. Calculated via the following FIA query:  Sum VOLCFNET*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2)  AND ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| VOLCFNET_L | Volume, Live. Calculated via the following FIA query:  Sum VOLCFNET*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/gtac-data-publish/assets/TreeMap/Product_Version/2023-1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_gtac-data-publish_assets_TreeMap_Product_Version_2023-1
- 数据引用：TreeMap is updated periodically. To ensure scientific reproducibility, please 
cite the specific version(s) corresponding to the data year(s) used in your 
analysis. Individual citations for each TreeMap vintage are listed below.



> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
