---
title: "US EPA Ecoregions (Level III)"
date: 2026-11-03 12:00:00
permalink: /pages/3da07cd6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecoregions"
  - "ecosystems"
  - "epa"
  - "table"
---

# US EPA Ecoregions (Level III)

## 数据集简介

The U.S. Environmental Protection Agency (USEPA) provides
the Ecoregions dataset to serve as a spatial framework for the
research, assessment, management, and monitoring of ecosystems
and ecosystem components. Ecoregions denote areas of general
similarity in ecosystems and in the type, quality, and quantity
of environmental resources. These general-purpose regions are
critical for structuring and implementing ecosystem management
strategies across federal agencies, state agencies, and nongovernmental
organizations that are responsible for different types of resources
within the same geographical areas.

The approach used to
compile this map is based on the premise that ecological regions
can be identified through the analysis of patterns of biotic
and abiotic phenomena, including geology, physiography, vegetation,
climate, soils, land use, wildlife, and hydrology. The relative
importance of each characteristic varies from one ecological
region to another.

This dataset includes the USEPA ecoregions
classification scheme, as well as the scheme from the Commission
for Environmental Cooperation (CEC). Ecoregions are hierarchical,
with Level IV being the most detailed and Level I defining the
broadest classifications. Because of this hierarchy, Level III
features retain information from Levels I and II. The CEC divided
all of North America in distinct ecoregions for Levels I, II,
and III, while the USEPA did so only for the United States at
Level III and Level IV. The columns starting with 'us_' belong
to the USEPA scheme, and the columns starting with 'na_' belong
to the CEC scheme. The ingested version of this dataset contains
features for the conterminous United States only (that is, Alaska
and Hawaii are not included). Methods used to define the ecoregions
are explained in Omernik (1995, 2004), Omernik and others (2000),
and Gallant and others (1989).

*Calculated by the data provider.

## 基本信息

- 数据集编号（Earth Engine ID）：`EPA/Ecoregions/2013/L3`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Environmental Protection Agency、Google Earth Engine
- 时间范围：2013-04-16 至 2013-04-17
- 许可：proprietary
- 关键词：ecoregions, ecosystems, epa, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| l1_key | STRING | NA Level I Code and Name |
| l2_key | STRING | NA Level II Code and Name |
| l3_key | STRING | US Level III Code and Name |
| na_l1code | STRING | Code for Level I Ecoregion (North America/CEC) |
| na_l1name | STRING | Name for Level I Ecoregion (North America/CEC) |
| na_l2code | STRING | Code for Level II Ecoregion (North America/CEC) |
| na_l2name | STRING | Name for Level II Ecoregion (North America/CEC) |
| na_l3code | STRING | Code for Level III Ecoregion (North America/CEC) |
| na_l3name | STRING | Name for Level III Ecoregion (North America/CEC) |
| shape_area | DOUBLE | Area of the feature's geometry in its original format |
| shape_leng | DOUBLE | Length of the edges in the feature's geometry in its original format |
| us_l3code | STRING | Code for Level III Ecoregion (US/USEPA) |
| us_l3name | STRING | Name for Level III Ecoregion (US/USEPA) |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('EPA/Ecoregions/2013/L3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EPA_Ecoregions_2013_L3
- 数据引用：Commission for Environmental Cooperation. 1997. Ecological regions
of North America: toward a common perspective. Commission for Environmental
Cooperation, Montreal, Quebec, Canada. 71p. Map (scale 1:12,500,000).
Revised 2006.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
