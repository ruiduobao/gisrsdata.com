---
title: "Overture Maps - Places: Place"
date: 2026-11-03 12:00:00
permalink: /pages/fe31a17a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "infrastructure-boundaries"
  - "map"
  - "population"
  - "urban"
---

# Overture Maps - Places: Place

## 数据集简介

The Overture Maps Places theme contains more than 64 million point
representations of real-world entities: businesses, schools, hospitals,
religious organizations, landmarks, mountain peaks, and much more.

Each place record includes location coordinates, names, categories,
contact information (websites, social media, emails, phones), brand
information, addresses, and operating status. A confidence score
indicates the certainty of each place's existence.

This dataset is part of the Overture Maps Foundation's collaborative
effort to develop interoperable open map data. The data is released
monthly and always reflects the most recent release.

Data source: [Overture Maps Foundation](https://overturemaps.org/)

Documentation: [Places Theme Guide](https://docs.overturemaps.org/guides/places/)

BigQuery table: `bigquery-public-data.overture_maps.place`

## 基本信息

- 数据集编号（Earth Engine ID）：`overture-maps/places_place`
- 数据类型：bigquery_table
- 提供方：Overture Maps Foundation、CARTO、Google Earth Engine
- 时间范围：2023-07-01 至 至今
- 许可：ODbL-1.0
- 关键词：global, infrastructure-boundaries, map, population, urban

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| addresses | RECORD_LIST | The addresses of the place. Array of address records, each containing: freeform (street address text), locality (city/town name), postcode, region (administrative region code, e.g., "US-NY"), and country (ISO country code, e.g., "US").  |
| bbox | RECORD | Bounding box of the feature geometry. Record with fields: xmin (minimum longitude), xmax (maximum longitude), ymin (minimum latitude), ymax (maximum latitude).  |
| brand | RECORD | The brand of the place. Record containing: names (brand name container with primary and common names) and wikidata (Wikidata identifier for the brand). Places with multiple brands are represented as separate place entries.  |
| categories | RECORD | The categories of the place. Record containing: primary (the main category of the place) and alternate (array of additional applicable categories). Complete list available on [GitHub](https://github.com/OvertureMaps/schema/blob/main/docs/schema/concepts/by-theme/places/overture_categories.csv).  |
| confidence | DOUBLE | The confidence of the existence of the place. A number between 0 and 1, where higher values indicate greater certainty.  |
| emails | RECORD_LIST | The email addresses associated with the place. Array of records containing email address strings.  |
| geometry | GEOMETRY | Point geometry in WGS84 (EPSG:4326). |
| id | STRING | A feature ID. This may be an ID associated with the Global Entity Reference System (GERS).  |
| names | RECORD | The names of the place. Record containing: primary (main name), common (translations by language code, e.g., "es" for Spanish), and rules (array of naming variants such as short forms or abbreviations).  |
| operating_status | STRING | Indicates operating status of a place. Possible values: 'open', 'permanently_closed', or 'temporarily_closed'.  |
| phones | RECORD_LIST | The phone numbers associated with the place. Array of records containing phone number strings.  |
| socials | RECORD_LIST | The social media profiles of the place. Array of records containing URLs to social media pages.  |
| sources | RECORD_LIST | Source attribution for the feature properties. Array of records, each containing: property (property name in JSON Pointer notation), dataset (source dataset name), and record_id (identifier in the source dataset).  |
| version | INT | Version number of the feature, incremented in each Overture release where geometry or attributes changed.  |
| websites | RECORD_LIST | The websites associated with the place. Array of records containing URLs to the place's websites.  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('overture-maps/places_place');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/overture-maps_places_place

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
