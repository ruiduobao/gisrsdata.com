---
title: "OpenLandMap Soil Water Content at 33kPa (Field Capacity)"
date: 2026-11-03 12:00:00
permalink: /pages/cf9a4017/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "soil"
  - "watercontent"
---

# OpenLandMap Soil Water Content at 33kPa (Field Capacity)

## 数据集简介

Soil water content (volumetric %) for 33kPa and 1500kPa suctions
predicted at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution

Training points are based on a global compilation of soil profiles:

* [USDA NCSS](https://ncsslabdatamart.sc.egov.usda.gov/)
* [AfSPDB](https://www.isric.org/projects/africa-soil-profiles-database-afsp)
* [ISRIC WISE](https://data.isric.org/geonetwork/srv/eng/catalog.search#/metadata/a351682c-330a-4995-a5a1-57ad160e621c)
* [EGRPR](http://egrpr.esoil.ru/)
* [SPADE](https://esdac.jrc.ec.europa.eu/content/soil-profile-analytical-database-2)
* [CanNPDB](https://open.canada.ca/data/en/dataset/6457fad6-b6f5-47a3-9bd1-ad14aea4b9e0)
* [UNSODA](https://data.nal.usda.gov/dataset/unsoda-20-unsaturated-soil-hydraulic-database-database-and-program-indirect-methods-estimating-unsaturated-hydraulic-properties)
* [SWIG](https://doi.pangaea.de/10.1594/PANGAEA.885492)
* [HYBRAS](https://www.cprm.gov.br/en/Hydrology/Research-and-Innovation/HYBRAS-4208.html)
* [HydroS](https://doi.org/10.4228/ZALF.2003.273)

Data import steps are available [here](https://gitlab.com/openlandmap/compiled-ess-point-data-sets).
Spatial prediction steps are described in detail [here](https://gitlab.com/openlandmap/global-layers/tree/master/soil/soil_water).
Note: these are actually measured and mapped soil content values; no Pedo-Transfer-Functions
have been used (except to fill in the missing NCSS bulk densities). Available
water capacity in mm (derived as a difference between field capacity and wilting
point multiplied by layer thickness) per layer is available [here](https://doi.org/10.5281/zenodo.2629148).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：1950-01-01 至 2018-01-01
- 空间分辨率：250 米
- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, opengeohub, openlandmap, soil, watercontent

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b0 | Soil water content at 33kPa (field capacity) at 0 cm depth | 250 |  |
| b10 | Soil water content at 33kPa (field capacity) at 10 cm depth | 250 |  |
| b30 | Soil water content at 33kPa (field capacity) at 30 cm depth | 250 |  |
| b60 | Soil water content at 33kPa (field capacity) at 60 cm depth | 250 |  |
| b100 | Soil water content at 33kPa (field capacity) at 100 cm depth | 250 |  |
| b200 | Soil water content at 33kPa (field capacity) at 200 cm depth | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_WATERCONTENT-33KPA_USDA-4B1C_M/v01');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_WATERCONTENT-33KPA_USDA-4B1C_M_v01
- 数据引用：Tomislav Hengl, & Surya Gupta. (2019). Soil water content (volumetric %) for 33kPa and 1500kPa suctions predicted at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution (Version v01) [Data set]. Zenodo.
[10.5281/zenodo.2629589](https://doi.org/10.5281/zenodo.2629589)

- DOI：10.5281/zenodo.2629589

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
