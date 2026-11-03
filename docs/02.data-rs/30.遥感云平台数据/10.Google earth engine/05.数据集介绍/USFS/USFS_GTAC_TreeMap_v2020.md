---
title: "USFS TreeMap v2020 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/085db7ff/
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

# USFS TreeMap v2020 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This product is part of the TreeMap data suite. It provides detailed spatial
information on forest characteristics including number of live and dead trees,
biomass, and carbon across the entire forested extent of the United States in
2020.

TreeMap v2020 contains 22-band 30 x 30m resolution gridded map images per study
area, of the forests of the United States circa 2020, with each band
representing an attribute derived from select Forest Inventory Analysis (FIA)
data (and one band representing the TreeMap ID). Examples of attributes include
forest type, canopy cover percent, live tree stocking, live/dead tree biomass,
and carbon in live/dead trees.

TreeMap products are the output of a random forest machine learning algorithm
that assigns the most similar FIA plot to each pixel of gridded LANDFIRE input
data. The objective is to combine the complimentary strengths of
detailed-but-spatially-sparse FIA data with less-detailed-but-spatially-
comprehensive LANDFIRE data to produce better estimations of forest
characteristics at a variety of scales. TreeMap is being used in both the
private and public sectors for projects including fuel treatment planning,
snag hazard mapping, and estimation of terrestrial carbon resources.

TreeMap is distinct from other imputed forest vegetation products in that it
provides an FIA plot identifier to each pixel whereas other datasets provide
forest characteristics such as live basal area (e.g., Ohmann and Gregory 2002;
Pierce Jr et al. 2009; Wilson, Lister, and Riemann 2012). The FIA plot
identifier can be linked to the hundreds of variables and attributes recorded
for each tree and plot in the FIA DataMart, FIA's public repository of plot
information (Forest Inventory Analysis 2022a).

The TreeMap 2020 CONUS dataset featured here updates the TreeMap 2016 dataset
to landscape conditions circa 2020 and updates the methods by: 1) using a
different suite of climate variables in the imputation and 2) improving species
composition assignments to prevent plots being imputed to areas where their
existing vegetation type was not present, an issue which affected a small number
of pixels in previous TreeMap versions.

TreeMap v2020 was produced using the methods described in
[Riley et al. (2022)](https://research.fs.usda.gov/treesearch/65597)
but differ from TreeMap v2016 in that: 1) the climatic variables were obtained
from DayMet and included precipitation, shortwave radiation, soil water
equivalent, maximum temperature, minimum temperature, vapor pressure, and vapor
pressure deficit; and 2) plots available for imputation in each LANDFIRE zone
were limited to those plots with a tree species that were present either in the
plots found within the LANDFIRE zone, or in the zones immediately bordering it,
according to the FIA plots located within the zone. This reduced not only plots
with Existing Vegetation Type not present in the zone but also plots with trees
outside of their observed range.

The results showed good correspondence between the target LANDFIRE data and the
imputed plot data, with an overall within-class agreement of 94.3% for forest
cover, 99.0% for forest height, 95.6% for vegetation group, and 95.5% for
disturbance code. Of 69,800 single-condition FIA plots available to Random
Forest, 64,745 of these (92.7%) were utilized in the imputation to 2,687,805,994
forested pixels.

Other TreeMap vintages can be found at:

**Additional Resources**

* Please see the [TreeMap 2016 Publication](https://www.fs.usda.gov/research/treesearch/65597)
  for more detailed information regarding methods and accuracy assessment.

* The [TreeMap Data Explorer](https://apps.fs.usda.gov/lcms-viewer/treemap.html)
  is a web-based application that provides users the ability to view and
  download TreeMap attribute data.

* Visit the [TreeMap Research Data Archive](https://www.fs.usda.gov/rds/archive/catalog/RDS-2025-0031)
  for the full dataset download, metadata, and support documents.

* Visit the [TreeMap Raster Data Gateway](https://data.fs.usda.gov/geodata/rastergateway/treemap/)
  for TreeMap attribute data downloads, metadata, and support documents.

* See the [FIA Database Manual version 9.3](https://research.fs.usda.gov/understory/forest-inventory-and-analysis-database-user-guide-nfi)
  for more detailed information on the attributes included in TreeMap 2020.

* The [Treemap 2016 vintage](https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2016)
  contains landscape conditions of the forests of the United States circa 2016.

* The [Treemap 2022 vintage](https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2022)
  contains landscape conditions of the forests of the United States circa 2022.

Contact [sm.fs.treemaphelp@usda.gov] with any
questions or specific data requests.

## 基本信息

- 数据集编号（Earth Engine ID）：`USFS/GTAC/TreeMap/v2020`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA Forest Service (USFS) Field Services and Innovation Center Geospatial Office (FSIC-GO)、Google Earth Engine
- 时间范围：2020-01-01 至 2021-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：aboveground, biomass, carbon, climate-change, conus, forest, forest-biomass, forest-inventory-and-analysis, forest-type, fsic-go, gtac, landcover, landfire, redcastle-resources, tree-cover, us, usda, usfs, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ALSTK | All-Live-Tree Stocking. The sum of stocking percent values of all live trees on the condition.  | 30 |  |
| BALIVE | Live Tree Basal Area. Basal area in square feet per acre of all live trees ≥1.0 inch d.b.h./d.r.c. sampled in the condition.  | 30 |  |
| CANOPYPCT | Live Canopy Cover. Derived from the Forest Vegetation Simulator.  | 30 |  |
| CARBON_D | Carbon, Standing Dead. Calculated via the following FIA query: Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP) / 2 /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2) AND ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| CARBON_DWN | Carbon, Down Dead. Carbon (tons per acre) of woody material >3 inches in diameter on the ground, and stumps and their roots >3 inches in diameter. Estimated from models based on geographic area, forest type, and live tree carbon density (Smith and Heath 2008).  | 30 |  |
| CARBON_L | Carbon, Live Above Ground. Calculated via the following FIA query: Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP) / 2 /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |
| DRYBIO_D | Dry Standing Dead Tree Biomass, Above Ground. Calculated via the following FIA query: Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP) /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2) AND ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| DRYBIO_L | Dry Live Tree Biomass, Above Ground. Calculated via the following FIA query: Sum (DRYBIO_BOLE, DRYBIO_TOP, DRYBIO_STUMP, DRYBIO_SAPLING, DRYBIO_WDLD_SPP) /2000*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |
| FLDSZCD | Field Stand-Size Class Code - Field-assigned classification of the predominant (based on stocking) diameter class of live trees within the condition.  | 30 |  |
| FLDTYPCD | Field Forest Type Code - A code indicating the forest type, assigned by the field crew, based on the tree species or species groups forming a plurality of all live stocking. The field crew assesses the forest type based on the acre of forest land around the plot, in addition to the species sampled on the condition.  | 30 |  |
| FORTYPCD | Algorithm Forest Type Code - This is the forest type used for reporting purposes. It is primarily derived using a computer algorithm, except when less than 25 percent of the plot samples a particular forest condition or in a few other cases.  | 30 |  |
| GSSTK | Growing-Stock Stocking. The sum of stocking percent values of all growing-stock trees on the condition.  | 30 |  |
| QMD | Stand Quadratic Mean Diameter. The quadratic mean diameter, or the diameter of the tree of average basal area, on the condition. Based on live trees ≥1.0 inch d.b.h./d.r.c.  | 30 |  |
| SDIsum | Sum of Stand Density Index. Stand density index (SDI). A relative measure of stand density for live trees (greater than or equal to 1.0 inch d.b.h./d.r.c.) on the condition, expressed as a sum of the maximum stand density index (SDI).  | 30 |  |
| STANDHT | Height of dominant trees. Derived from the Forest Vegetation Simulator.  | 30 |  |
| STDSZCD | Algorithm Stand-Size Class Code - A classification of the predominant (based on stocking) diameter class of live trees within the condition assigned using an algorithm.  | 30 |  |
| TPA_DEAD | Dead Trees Per Acre. Number of dead standing trees per acre (DIA >= 5”). Calculated via the following FIA query: Sum TREE.TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2) AND ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| TPA_LIVE | Live Trees Per Acre. Number of live trees per acre (DIA > 1"). Calculated via the following FIA query: Sum TREE.TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1) AND ((TREE.DIA)>=1))  | 30 |  |
| TM_ID | Raw TreeMap identifier dataset values. This dataset is useful to see spatial groupings of individual modeled plot values.  | 30 |  |
| VOLBFNET_L | Volume, Live (log rule: Int’l ¼ inch). Calculated via the following FIA query: Sum VOLBFNET * TPA_UNADJ WHERE (((TREE.TREECLCD)=2) AND ((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |
| VOLCFNET_D | Volume, Standing Dead. Calculated via the following FIA query: Sum VOLCFNET*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=2) AND ((TREE.DIA)>=5) AND ((TREE.STANDING_DEAD_CD)=1))  | 30 |  |
| VOLCFNET_L | Volume, Live. Calculated via the following FIA query: Sum VOLCFNET*TPA_UNADJ WHERE (((COND.COND_STATUS_CD)=1) AND ((TREE.STATUSCD)=1))  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USFS/GTAC/TreeMap/v2020');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2020
- 数据引用：Zimmer, S. N., R. M. Houtman, L. S. T. Leatherman, I. W. Housman, A. Shrestha,
J. D. Shaw, K. L. Riley: 2025, TreeMap 2020 CONUS: A tree-level model of the
forests of the conterminous United States circa 2020. Fort Collins, CO: Forest
Service Research Data Archive.
[doi:10.2737/RDS-2025-0031](https://doi.org/10.2737/RDS-2025-0031)



> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
