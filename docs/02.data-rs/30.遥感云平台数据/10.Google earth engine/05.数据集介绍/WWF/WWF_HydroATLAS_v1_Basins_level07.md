---
title: "WWF HydroATLAS Basins Level 07"
date: 2026-11-03 12:00:00
permalink: /pages/15c97d15/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "hydroatlas"
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

# WWF HydroATLAS Basins Level 07

## 数据集简介

BasinATLAS is a component of the
[HydroATLAS database](https://www.hydrosheds.org/page/hydroatlas),
which is a component of [HydroSHEDS](https://www.hydrosheds.org).

BasinATLAS provides a standardized compendium of hydro-environmental
attribute information for all watersheds of the world at high
spatial resolution. This dataset includes data for 56 variables,
partitioned into 281 attributes and organized in six categories: hydrology;
physiography; climate; land cover & use; soils & geology; and anthropogenic
influences (see Table 1 in the HydroATLAS documentation linked below).

Watersheds range from level 1 (coarse) to level 12 (detailed), using
Pfastetter codes. The underlying watershed deleniation uses the NASA
SRTM Digital Elevatin Map (DEM) below 60oN latitude and the
USGS HYDRO1k DEM above 60oN.

Technical documentation:

[https://www.hydrosheds.org/images/inpages/HydroATLAS_TechDoc_v10.pdf](https://www.hydrosheds.org/images/inpages/HydroATLAS_TechDoc_v10.pdf)

Note that the quality of HydroATLAS data is significantly lower for regions
above 60 degrees northern latitude as there is no underlying SRTM elevation
data available and thus a coarser-resolution DEM was used
(HYDRO1k provided by USGS).

HydroSHEDS was developed by the World Wildlife Fund (WWF)
Conservation Science Program in partnership with the U.S. Geological
Survey, the International Centre for Tropical Agriculture, The
Nature Conservancy, and the Center for Environmental Systems Research
of the University of Kassel, Germany.

## 基本信息

- 数据集编号（Earth Engine ID）：`WWF/HydroATLAS/v1/Basins/level07`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：WWF、Google Earth Engine
- 时间范围：2000-02-22 至 2000-02-22
- 许可：CC-BY-4.0
- 关键词：geophysical, hydroatlas, hydrography, hydrology, hydrosheds, srtm, surface-ground-water, table, water, watershed, wwf

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| HYBAS_ID | INT | First 1 digit represents the region:   * 1 = Africa   * 2 = Europe   * 3 = Siberia   * 4 = Asia   * 5 = Australia   * 6 = South America   * 7 = North America   * 8 = Arctic (North America)   * 9 = Greenland.  Next 2 digits define the Pfafstetter level (01-12). The value '00' is used for the 'Level 0' layer that contains all original sub-basins and all Pfafstetter codes (at all levels); 'Level 0' only exists in the standard format of HydroBASINS (without lakes).  Next 6 digits represent a unique identifier within the HydroSHEDS network; values larger than 900,000 represent lakes and only occur in the customized format (with lakes)  Last 1 digit indicates the side of a sub-basin in relation to the river network (0 = noSide; 1 = Left; 2 = Right). Sides are only defined for the customized format (with lakes).  |
| COAST | INT | Indicator for lumped coastal basins: 0 = no; 1 = yes. Coastal basins represent conglomerates of small coastal watersheds that drain into the ocean between larger river basins.  |
| DIST_MAIN | DOUBLE | Distance from polygon outlet to the most downstream sink, in km. |
| DIST_SINK | DOUBLE | Distance from polygon outlet to the next downstream sink, in km. |
| ENDO | INT | Indicator for endorheic (inland) basins without surface flow connection to the ocean: 0 = not part of an endorheic basin; 1 = part of an endorheic basin; 2 = sink (i.e. most downstream polygon) of an endorheic basin.  |
| MAIN_BAS | INT | Hybas_id of the most downstream sink, i.e. the outlet of the main river basin. |
| NEXT_DOWN | INT | Hybas_id of the next downstream polygon. |
| NEXT_SINK | INT | Hybas_id of the next downstream sink. |
| PFAF_ID | INT | The Pfafstetter code. |
| SORT | INT | Indicator showing the record number (sequence) in which the original polygons are stored in the shapefile (i.e. counting upwards from 1 in the original shapefile). The original polygons are sorted from downstream to upstream. This field can be used to sort the polygons back to their original sequence or to perform topological searches.  |
| SUB_AREA | DOUBLE | Area of basin, in square kilometers. |
| UP_AREA | DOUBLE | Total upstream area, in square kilometers. |
| aet_mm_s01 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {01} January |
| aet_mm_s02 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {02} February |
| aet_mm_s03 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {03} March |
| aet_mm_s04 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {04} April |
| aet_mm_s05 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {05} May |
| aet_mm_s06 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {06} June |
| aet_mm_s07 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {07} July |
| aet_mm_s08 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {08} August |
| aet_mm_s09 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {09} September |
| aet_mm_s10 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {10} October |
| aet_mm_s11 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {11} November |
| aet_mm_s12 | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {12} December |
| aet_mm_syr | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {yr} annual average |
| aet_mm_uyr | INT | Actual Evapotranspiration: Category = Climate; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {yr} annual average |
| ari_ix_sav | INT | Global Aridity Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {av} average |
| ari_ix_uav | INT | Global Aridity Index: Category = Climate; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {av} average |
| cls_cl_smj | INT | Climate Strata: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mj} spatial majority |
| cly_pc_sav | INT | Clay Fraction in Soil: Category = Soils & Geology; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {av} average |
| cly_pc_uav | INT | Clay Fraction in Soil: Category = Soils & Geology; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {av} average |
| clz_cl_smj | INT | Climate Zones: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mj} spatial majority |
| cmi_ix_s01 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {01} January |
| cmi_ix_s02 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {02} February |
| cmi_ix_s03 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {03} March |
| cmi_ix_s04 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {04} April |
| cmi_ix_s05 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {05} May |
| cmi_ix_s06 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {06} June |
| cmi_ix_s07 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {07} July |
| cmi_ix_s08 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {08} August |
| cmi_ix_s09 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {09} September |
| cmi_ix_s10 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {10} October |
| cmi_ix_s11 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {11} November |
| cmi_ix_s12 | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {12} December |
| cmi_ix_syr | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {yr} annual average |
| cmi_ix_uyr | INT | Climate Moisture Index: Category = Climate; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {yr} annual average |
| crp_pc_sse | INT | Cropland Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {se} spatial extent (%) |
| crp_pc_use | INT | Cropland Extent: Category = Landcover; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {se} spatial extent (%) |
| dis_m3_pmn | DOUBLE | Natural Discharge: Category = Hydrology; Spatial Extent = {p} at sub-bsin pour point; Dimensions = {mn} annual minimum |
| dis_m3_pmx | DOUBLE | Natural Discharge: Category = Hydrology; Spatial Extent = {p} at sub-bsin pour point; Dimensions = {mx} annual maximum |
| dis_m3_pyr | DOUBLE | Natural Discharge: Category = Hydrology; Spatial Extent = {p} at sub-bsin pour point; Dimensions = {yr} annual average |
| dor_pc_pva | INT | Degree of Regulation: Category = Hydrology; Spatial Extent = {p} at sub-bsin pour point; Dimensions = {va} value |
| ele_mt_sav | INT | Elevation: Category = Physiography; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {av} average |
| ele_mt_smn | INT | Elevation: Category = Physiography; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mn} minimum |
| ele_mt_smx | INT | Elevation: Category = Physiography; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mx} maximum |
| ele_mt_uav | INT | Elevation: Category = Physiography; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {av} average |
| ero_kh_sav | INT | Soil Erosion: Category = Soils & Geology; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {av} average |
| ero_kh_uav | INT | Soil Erosion: Category = Soils & Geology; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {av} average |
| fec_cl_smj | INT | Freshwater Ecoregions: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mj} spatial majority |
| fmh_cl_smj | INT | Freshwater Major Habitat Types: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mj} spatial majority |
| for_pc_sse | INT | Forest Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {se} spatial extent (%) |
| for_pc_use | INT | Forest Cover Extent: Category = Landcover; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {se} spatial extent (%) |
| gad_id_smj | INT | Global Administrative Areas: Category = Anthropogenic; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mj} spatial majority |
| gdp_ud_sav | INT | Gross Domestic Product: Category = Anthropogenic; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {av} average |
| gdp_ud_ssu | INT | Gross Domestic Product: Category = Anthropogenic; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {su} sum |
| gdp_ud_usu | INT | Gross Domestic Product: Category = Anthropogenic; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {su} sum |
| gla_pc_sse | INT | Glacier Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {se} spatial extent (%) |
| gla_pc_use | INT | Glacier Extent: Category = Landcover; Spatial Extent = {u} in total watershed upstream of sub-basin pour point; Dimensions = {se} spatial extent (%) |
| glc_cl_smj | INT | Land Cover Classes: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {mj} spatial majority |
| glc_pc_s01 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {01} % coverage: Tree Cover, broadleaved, evergreen |
| glc_pc_s02 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {02} % coverage: Tree Cover, broadleaved, deciduous, closed |
| glc_pc_s03 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {03} % coverage: Tree Cover, broadleaved, deciduous, open |
| glc_pc_s04 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {04} % coverage: Tree Cover, needle-leaved, evergreen |
| glc_pc_s05 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {05} % coverage: Tree Cover, needle-leaved, deciduous |
| glc_pc_s06 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {06} % coverage: Tree Cover, mixed leaf type |
| glc_pc_s07 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {07} % coverage: Tree Cover, regularly flooded, fresh  water (& brackish) |
| glc_pc_s08 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {08} % coverage: Tree Cover, regularly flooded, saline water |
| glc_pc_s09 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {09} % coverage: Mosaic: Tree cover / Other natural vegetation |
| glc_pc_s10 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {10} % coverage: Tree Cover, burnt |
| glc_pc_s11 | INT | Land Cover Extent: Category = Landcover; Spatial Extent = {s} at sub-bsin pour point; Dimensions = {11} % coverage: Shrub Cover, closed-open, evergreen |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WWF/HydroATLAS/v1/Basins/level07');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroATLAS_v1_Basins_level07
- 数据引用：'Linke, S., Lehner, B., Ouellet Dallaire, C., Ariwi, J., Grill, G.,
Anand, M., Beames, P., Burchard-Levine, V., Maxwell, S., Moidu, H., Tan, F.,
Thieme, M. (2019). Global hydro-environmental sub-basin and river reach
characteristics at high spatial resolution. Scientific Data 6: 283.
[DOI:10.1038/s41597-019-0300-6](https://doi.org/10.1038/s41597-019-0300-6).'


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
