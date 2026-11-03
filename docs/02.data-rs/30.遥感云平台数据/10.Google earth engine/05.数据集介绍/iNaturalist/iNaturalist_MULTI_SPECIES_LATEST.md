---
title: "iNaturalist Multispecies Open Range Maps"
date: 2026-11-03 12:00:00
permalink: /pages/6cc41dda/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bigquery"
  - "biodiversity"
  - "ecosystems"
  - "range"
  - "species"
---

# iNaturalist Multispecies Open Range Maps

## 数据集简介

The iNaturalist Multispecies Range Dataset provides modeled geographic
ranges for thousands of species. Dataset contains species polygons, with
attributes such as taxon_id, name, scientific_name, and geomodel_version.
Ranges are estimated from iNaturalist community observations and updated on
a monthly basis. These datasets enable large-scale biodiversity analyses,
ecological modeling, and integration with other spatial data.
This dataset contains the latest available range maps for multiple species
from iNaturalist. The dataset is available through BigQuery.

## 基本信息

- 数据集编号（Earth Engine ID）：`iNaturalist/MULTI_SPECIES/LATEST`
- 数据类型：bigquery_table
- 提供方：iNaturalist、Google Earth Engine
- 时间范围：2025-02-25 至 2025-03-25
- 许可：CC-BY-4.0
- 关键词：bigquery, biodiversity, ecosystems, range, species

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| taxon_id | STRING | Unique identifier for a species in iNaturalist |
| parent_taxon_id | STRING | Identifier for the immediate higher-level taxon (e.g., genus or family), giving taxonomic context.  |
| name | STRING | The scientific name of the species. |
| rank | STRING | Taxonomic rank of the taxon (e.g., species, genus, family, order). Useful for filtering or grouping taxa by level.  |
| iconic_taxon_id | STRING | Internal identifier for one of iNaturalist's "iconic taxa" - broad, recognizable groups such as Mammalia, Aves, Reptilia, Plantae.  |
| iconic_taxon_name | STRING | The iconic taxon name of the species (e.g., Mammalia, Aves).  |
| geomodel_version | STRING | The version of the geomodel used. |
| geometry | GEOMETRY | Polygon or multipolygon in WGS84 (EPSG:4326) representing the modeled distribution.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('iNaturalist/MULTI_SPECIES/LATEST');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/iNaturalist_MULTI_SPECIES_LATEST

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
