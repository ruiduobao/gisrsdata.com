---
title: "Tallo: A Global Tree Allometry and Crown Architecture Database V1"
date: 2026-11-03 12:00:00
permalink: /pages/01461988/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bigquery"
  - "biodiversity"
  - "biomass"
  - "canopy"
  - "ecosystems"
  - "forest"
  - "forest-biomass"
  - "height"
  - "species"
---

# Tallo: A Global Tree Allometry and Crown Architecture Database V1

## 数据集简介

The Tallo database is a global collection of 498,838 georeferenced and
taxonomically standardized individual-tree records compiled across 61,856
sampling sites globally. Spanning 5,163 tree species, 1,453 genera, and 187
plant families, Tallo provides individual-tree measurements of stem
diameter (DBH), total tree height, and mean crown radius across all major
terrestrial biomes.

The database was created to support research in forest ecology, remote
sensing, and global vegetation carbon modeling. It is described in detail in
[Jucker et al. (2022)](https://doi.org/10.1111/gcb.16302).

This dataset is available through BigQuery at
`earth-engine-public-data.tallo.tallo_v1`.

## 基本信息

- 数据集编号（Earth Engine ID）：`TALLO/TALLO_V1`
- 数据类型：bigquery_table
- 提供方：Tommaso Jucker / Selva Lab (University of Bristol)、Google Earth Engine
- 时间范围：2022-06-08 至 2022-06-09
- 许可：CC-BY-4.0
- 关键词：bigquery, biodiversity, biomass, canopy, ecosystems, forest, forest-biomass, height, species

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| tree_id | STRING | Unique identifier for each individual tree record in the Tallo database |
| division | STRING | Major taxonomic division (Angiosperm or Gymnosperm) |
| family | STRING | Taxonomic family of the tree (e.g. Rubiaceae, Pinaceae, Fabaceae) |
| genus | STRING | Taxonomic genus of the tree (e.g. Coprosma, Pinus, Quercus) |
| species | STRING | Binomial scientific name of the tree species (e.g. Coprosma ochracea) |
| latitude | DOUBLE | Latitude of the sampling location in decimal degrees (WGS84) |
| longitude | DOUBLE | Longitude of the sampling location in decimal degrees (WGS84) |
| geo_point | GEOMETRY | Geographic point geometry (WGS84) |
| stem_diameter_cm | DOUBLE | Stem diameter at breast height (DBH) in centimeters |
| height_m | DOUBLE | Total tree height in meters |
| crown_radius_m | DOUBLE | Mean crown radius of the tree in meters |
| height_outlier | STRING | Outlier flag for tree height measurement (Y = outlier, N = valid) |
| crown_radius_outlier | STRING | Outlier flag for crown radius measurement (Y = outlier, N = valid) |
| reference_id | INT | Numerical identifier linking record to contributing data source citation |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TALLO/TALLO_V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TALLO_TALLO_V1
- 数据引用：Jucker, T., Fischer, F. J., Chave, J., Coomes, D. A., Caspersen, J., Ali, A.,
... & Zavala, M. A. (2022). Tallo: A global tree allometry and crown
architecture database. Global Change Biology, 28(17), 5254-5268.
[doi:10.1111/gcb.16302](https://doi.org/10.1111/gcb.16302)

- DOI：10.1111/gcb.16302

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
