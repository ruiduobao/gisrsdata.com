---
title: "United Nations Geospatial Data: BNDA_simplified"
date: 2026-11-03 12:00:00
permalink: /pages/b71c8d49/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "countries"
  - "infrastructure-boundaries"
  - "table"
---

# United Nations Geospatial Data: BNDA_simplified

## 数据集简介

The United Nations Geospatial Data, or Geodata, is a worldwide geospatial
dataset of the United Nations.

The United Nations Geodata is provided to facilitate the preparation of
cartographic materials in the United Nations includes geometry, attributes
and labels to facilitate the adequate depiction and naming of geographic
features for the preparation of maps in accordance with United Nations
policies and practices.

The geospatial dataset include polygons/areas of countries
(BNDA_simplified). Please refer this [page](https://geoportal.un.org/arcgis/home/item.html?id=e4ee80edac9d4e08b8303522dd4a5fc1)
for more information.

## 基本信息

- 数据集编号（Earth Engine ID）：`UN/Geodata/BNDA_simplified/current`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United Nations Geospatial、Google Earth Engine
- 时间范围：2023-02-11 至 2023-02-12
- 许可：proprietary_non_commercial
- 关键词：borders, countries, infrastructure-boundaries, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| admiso | STRING | ISO-3166 alpha-3 code of the area's administrator. |
| geo_cd | INT | UN M49 geographical region code |
| georeg | STRING | UN M49 geographic region |
| globalid | STRING | GlobalID |
| globalid_1 | STRING | GlobalID_1 |
| int_cd | STRING | UN M49 intermediary region code; 0 if unset |
| intreg | STRING | UN M49 intermediary region; empty if "int_cd" is 0 |
| iso2cd | STRING | ISO-3166 alpha-2 code |
| iso3cd | STRING | ISO-3166 alpha-3 code |
| lbl_en | STRING | Cartographic label (English) |
| lbl_fr | STRING | Cartographic label (French) |
| m49_cd | STRING | UN M49 country or area code |
| nam_en | STRING | Name (English) |
| name_fr | STRING | Name (French) |
| objectid | STRING | Internal object ID number |
| st_area_sh | DOUBLE | Total area of the geometry |
| stscod | INT | Sovereignty status code:  * 0: Antarctica * 1: State * 2: Occupied Palestinian Territory * 3: Non-Self Governing Territory * 4: Territory * 5: Special Region or Province * 99: Undetermined  |
| sub_cd | INT | UN M49 sub-region code |
| subreg | STRING | UN M49 sub-region |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('UN/Geodata/BNDA_simplified/current');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UN_Geodata_BNDA_simplified_current

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
