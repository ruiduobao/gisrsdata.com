---
title: "WWF HydroSHEDS Basins Level 11"
date: 2026-11-03 12:00:00
permalink: /pages/21372992/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "hydrography"
  - "hydrology"
  - "hydrosheds"
  - "srtm"
  - "surface-ground-water"
  - "table"
  - "water"
  - "watershed"
  - "wwf"
---

# WWF HydroSHEDS Basins Level 11

## 数据集简介

HydroSHEDS is a mapping product that provides hydrographic
information for regional and global-scale applications in a consistent
format. It offers a suite of geo-referenced datasets (vector and
raster) at various scales, including river networks, watershed
boundaries, drainage directions, and flow accumulations. HydroSHEDS
is based on elevation data obtained in 2000 by NASA's Shuttle Radar
Topography Mission (SRTM).

This dataset provides polygons of nested, hierarchical watersheds, based on
15 arc-seconds (approx. 500 m at the equator) resolution raster data.
The watersheds range from level 1 (coarse) to level 12 (detailed), using Pfastetter codes.

Technical documentation:

[https://hydrosheds.org/images/inpages/HydroBASINS_TechDoc_v1c.pdf](https://hydrosheds.org/images/inpages/HydroBASINS_TechDoc_v1c.pdf)

Note that the quality of the HydroSHEDS data is significantly lower for regions above
60 degrees northern latitude as there is no underlying SRTM elevation data available
and thus a coarser-resolution DEM was (HYDRO1k provided by USGS).

HydroSHEDS was developed by the World Wildlife Fund (WWF)
Conservation Science Program in partnership with the U.S. Geological
Survey, the International Centre for Tropical Agriculture, The
Nature Conservancy, and the Center for Environmental Systems Research
of the University of Kassel, Germany.

## 基本信息

- 数据集编号（Earth Engine ID）：`WWF/HydroSHEDS/v1/Basins/hybas_11`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：WWF、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 许可：proprietary
- 关键词：geophysical, hydrography, hydrology, hydrosheds, srtm, surface-ground-water, table, water, watershed, wwf

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| HYBAS_ID | INT | First 1 digit represents the region:   * 1 = Africa   * 2 = Europe   * 3 = Siberia   * 4 = Asia   * 5 = Australia   * 6 = South America   * 7 = North America   * 8 = Arctic (North America)   * 9 = Greenland.  Next 2 digits define the Pfafstetter level (01-12). The value '00' is used for the 'Level 0' layer that contains all original sub-basins and all Pfafstetter codes (at all levels); 'Level 0' only exists in the standard format of HydroBASINS (without lakes).  Next 6 digits represent a unique identifier within the HydroSHEDS network; values larger than 900,000 represent lakes and only occur in the customized format (with lakes)  Last 1 digit indicates the side of a sub-basin in relation to the river network (0 = noSide; 1 = Left; 2 = Right). Sides are only defined for the customized format (with lakes).  |
| NEXT_DOWN | INT | Hybas_id of the next downstream polygon. |
| NEXT_SINK | INT | Hybas_id of the next downstream sink. |
| MAIN_BAS | INT | Hybas_id of the most downstream sink, i.e. the outlet of the main river basin. |
| DIST_SINK | DOUBLE | Distance from polygon outlet to the next downstream sink, in km. |
| DIST_MAIN | DOUBLE | Distance from polygon outlet to the most downstream sink, in km. |
| SUB_AREA | DOUBLE | Area of basin, in square kilometers. |
| UP_AREA | DOUBLE | Total upstream area, in square kilometers. |
| PFAF_ID | INT | The Pfafstetter code. |
| ENDO | INT | Indicator for endorheic (inland) basins without surface flow connection to the ocean: 0 = not part of an endorheic basin; 1 = part of an endorheic basin; 2 = sink (i.e. most downstream polygon) of an endorheic basin.  |
| COAST | INT | Indicator for lumped coastal basins: 0 = no; 1 = yes. Coastal basins represent conglomerates of small coastal watersheds that drain into the ocean between larger river basins.  |
| ORDER | INT | Indicator of river order (classical ordering system): * Order 1 represents the main stem river from sink to source; * Order 2 represents all tributaries that flow into a 1st order river; * Order 3 represents all tributaries that flow into a 2nd order river; etc.; * Order 0 is used for conglomerates of small coastal watersheds.  |
| SORT | INT | Indicator showing the record number (sequence) in which the original polygons are stored in the shapefile (i.e. counting upwards from 1 in the original shapefile). The original polygons are sorted from downstream to upstream. This field can be used to sort the polygons back to their original sequence or to perform topological searches.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WWF/HydroSHEDS/v1/Basins/hybas_11');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_v1_Basins_hybas_11
- 数据引用：Lehner, B., Verdin, K., Jarvis, A. (2008): New global hydrography
derived from spaceborne elevation data. Eos, Transactions, AGU,
89(10): 93-94.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
