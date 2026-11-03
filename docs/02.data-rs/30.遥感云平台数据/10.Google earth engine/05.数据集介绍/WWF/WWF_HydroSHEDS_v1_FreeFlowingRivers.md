---
title: "WWF HydroSHEDS Free Flowing Rivers Network v1"
date: 2026-11-03 12:00:00
permalink: /pages/fff18c82/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "flow-regulation"
  - "geophysical"
  - "hydrography"
  - "hydrology"
  - "hydrosheds"
  - "river-networks"
  - "srtm"
  - "surface-ground-water"
  - "table"
  - "water"
  - "wwf"
---

# WWF HydroSHEDS Free Flowing Rivers Network v1

## 数据集简介

HydroSHEDS is a mapping product that provides hydrographic
information for regional and global-scale applications in a consistent
format. It offers a suite of geo-referenced datasets (vector and
raster) at various scales, including river networks, watershed
boundaries, drainage directions, and flow accumulations. HydroSHEDS
is based on elevation data obtained in 2000 by NASA's Shuttle Radar
Topography Mission (SRTM).

This dataset provides polylines that represent river networks, derived from and consistent
with other HydroSHEDS datasets. These data are based on 15 arc-seconds
(approx. 500 m at the equator) resolution raster data.

[Mapping the world's free-flowing rivers: data set and technical documentation](
https://figshare.com/articles/Mapping_the_world_s_free-flowing_rivers_data_set_and_technical_documentation/7688801)

Note that the quality of the HydroSHEDS data is significantly lower for regions above
60 degrees northern latitude as there is no underlying SRTM elevation data available
and thus a coarser-resolution DEM was (HYDRO1k provided by USGS).

HydroSHEDS was developed by the World Wildlife Fund (WWF)
Conservation Science Program in partnership with the U.S. Geological
Survey, the International Centre for Tropical Agriculture, The
Nature Conservancy, and the Center for Environmental Systems Research
of the University of Kassel, Germany.

## 基本信息

- 数据集编号（Earth Engine ID）：`WWF/HydroSHEDS/v1/FreeFlowingRivers`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：WWF、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 许可：proprietary
- 关键词：flow-regulation, geophysical, hydrography, hydrology, hydrosheds, river-networks, srtm, surface-ground-water, table, water, wwf

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BAS_ID | INT | Basin Identifier. Identifies the hydrological river basin according to the HydroSHEDS framework |
| BAS_NAME | STRING | Basin Name (if available). Based on HydroSHEDS original basins and other sources. |
| BB_DIS_ORD | INT | Backbone river discharge order. River Order (RIV_ORD) of the most downstream reach of the backbone river (BB_ID).  |
| BB_ID | INT | Backbone River Identifier. Represents the contiguous river unit (defined as flow path from source/headwater to sink/terminus).  |
| BB_LEN_KM | DOUBLE | Backbone river length. Sum of length (LENGTH_KM) of the river reaches of the backbone river (BB_ID). |
| BB_OCEAN | DOUBLE | Ocean connectivity. Determines if river reach is part of a backbone river (BB_ID) that is directly connected to the ocean (value=1) or not (value=0). Used to summarize statistics based on connectivity to ocean.  |
| BB_VOL_TCM | DOUBLE | Backbone river volume. Sum of volume (VOLUME_TCM) of the river reaches of the backbone river (BB_ID). |
| CONTINENT | STRING | Name of the continent. See CON_ID. |
| CON_ID | DOUBLE | Identifier for the continent to which the reach belongs. Continent boundaries are delineated based on HydroBASINS.  * 1 = North America  * 2 = South America  * 3 = Europe  * 4 = Africa  * 5 = Asia  * 6 = Australia  |
| COUNTRY | STRING | Country name |
| CSI | DOUBLE | Connectivity Status. Index from 0 to 100%; 100% = full connectivity; 0% = no connectivity. |
| CSI_D | STRING | Dominant pressure factor (DOM). Possible field values are: DOF; DOR; SED; USE; RDD; URB. |
| CSI_FF | INT | CSI above or below free-flowing threshold. Indicates if the CSI value of a river reach is below (value = 0) or above (value = 1) the threshold of 95%. The attribute is used to calculate the free-flowing status of the river (see CSI_FF1 and CSI_FF2).  |
| CSI_FF1 | INT | Free-flowing status (two categories). Indicates river reaches that belong to a river with "freeflowing" status (value = 1) or "non-free-flowing" status (value = 3). Note that the value 2 is reserved for river stretches with "good connectivity" status (see CSI_FF2).  |
| CSI_FF2 | INT | Free-flowing status (three categories). Indicates river reaches that belong to a river with "free flowing" status (value = 1), or a river stretch with "good connectivity" status (value = 2) or a river or river stretch with "impacted" status(value = 3).  |
| CSI_FFID | INT | River stretch identifier. Additional identifier to distinguish contiguous river stretches. |
| DIS_AV_CMS | DOUBLE | Average long-term (1971-2000) naturalized discharge in cubic meters per second (CMS). |
| DOF | DOUBLE | Degree of Fragmentation. Index from 0 to 100% (see extended Data figure 5a of manuscript). |
| DOR | DOUBLE | Degree of Regulation. Index from 0 to 100% (see extended Data figure 5b of manuscript). |
| ERO_YLD_TO | DOUBLE | Sum of erosion in tons per year per river reach. Calculated as the sum of sediment erosion within the river reach catchment (i.e., sediment erosion is not accumulated along the river network).  |
| FLD | DOUBLE | Inundation (floodplain) extent in river reach catchment (%). |
| GOID | INT | The feature ID. |
| HYFALL | DOUBLE | Indicates the presence (1) or absence (0) of one or more waterfalls along the river reach. |
| INC | DOUBLE | Filter field. In Grill et al. (2019), we considered all river reaches for routing purposes, but only analyzed and produced results for a subset of river reaches (INC = 1).  |
| LENGTH_KM | DOUBLE | Length of the river reach in kilometers. |
| NDOID | INT | Identifies the NOID of the next downstream river reach. If value=0, the river reach represents a terminal reach (ocean, inland sink).  |
| NOID | INT | Network Object Identifier. Same purpose as GOID' |
| NUOID | STRING | Identifies the NOIDs of the next upstream river reach. If there is "NoData" given, the reach is a headwater reach. Otherwise, the field holds 2 or more NOIDs. In the case of multiple NOIDs, the NOIDs are separated by an underscore.  |
| OBJECTID | INT | Object Identifier |
| RDD | DOUBLE | Road construction. Index from 0 to 100% (see extended Data figure 5e of manuscript). |
| REACH_ID | INT | Reach Identifier. The reach identifier can be used to link this dataset to the HydroATLAS database. |
| RIV_ORD | INT | River order. River order is here defined and calculated based on the long-term average discharge (DIS_AV_CMS) using logarithmic progression:  * 1 = > 100000  * 2 = 10000 - 100000  * 3 = 1000 - 10000  * 4 = 100 - 1000  * 5 = 10 - 100  * 6 = 1 - 10  * 7 = 0.1 - 1  * 8 = 0.01 - 0.1  * 9 = 0.001 - 0.01  * 10 = < 0.001  |
| SED | DOUBLE | Sediment trapping. Index from 0 to 100% (see extended Data figure 5c of manuscript). |
| Shape_Leng | DOUBLE | Use field LENGTH_KM instead. |
| UPLAND_SKM | DOUBLE | Upstream watershed area of river reach in square kilometers (SKM). |
| URB | DOUBLE | Urbanization. Index from 0 to 100% (see extended Data figure 5f of manuscript). |
| USE | DOUBLE | Water consumption. Index from 0 to 100% (see extended Data figure 5d of manuscript). |
| VOLUME_TCM | DOUBLE | Volume of the reach channel in thousand cubic meters (TCM). Calculated using width, length and depth of river channel.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WWF/HydroSHEDS/v1/FreeFlowingRivers');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_v1_FreeFlowingRivers
- 数据引用：Lehner, B., Verdin, K., Jarvis, A. (2008): New global hydrography
derived from spaceborne elevation data. Eos, Transactions, AGU,
89(10): 93-94.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
