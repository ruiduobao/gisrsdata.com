---
title: "Global Power Plant Database"
date: 2026-11-03 12:00:00
permalink: /pages/701c4f84/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "energy"
  - "infrastructure"
  - "infrastructure-boundaries"
  - "power"
  - "power-plants"
  - "table"
  - "wri"
---

# Global Power Plant Database

## 数据集简介

The Global Power Plant Database is a comprehensive, open source
database of power plants around the world. It centralizes
power plant data to make it easier to navigate, compare and draw
insights. Each power plant is geolocated and entries contain
information on plant capacity, generation, ownership, and fuel type.
As of June 2018, the database includes around 28,500 power plants
from 164 countries.
It will be continuously updated as data becomes available.

The methodology for the dataset creation is given in the World Resources
Institute publication
["A Global Database of Power Plants"](https://www.wri.org/publication/global-power-plant-database).

Associated code for the creation of the dataset can be found on
[GitHub](https://github.com/wri/global-power-plant-database).
The bleeding-edge version of the database (which may contain substantial
differences from the release in Earth Engine) is available on GitHub as well.

If you use this dataset, the provider (WRI) has requested that you
[register your use](https://goo.gl/ivTvkd) and (optionally)
sign up to receive update notifications.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/GPPD/power_plants`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：World Resources Institute、Google Earth Engine
- 时间范围：2018-06-11 至 2018-06-11
- 许可：CC-BY-4.0
- 关键词：energy, infrastructure, infrastructure-boundaries, power, power-plants, table, wri

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| country | STRING | 3-character country code corresponding to the ISO 3166-1 alpha-3 specs |
| country_lg | STRING | Longer form of the country designation |
| name | STRING | Name or title of the power plant, generally in Romanized form |
| gppd_idnr | STRING | 10- or 12-character identifier for the power plant |
| capacitymw | DOUBLE | Electrical generating capacity in megawatts |
| latitude | DOUBLE | Geolocation in decimal degrees |
| longitude | DOUBLE | Geolocation in decimal degrees |
| fuel1 | STRING | Energy source used in electricity generation or export |
| fuel2 | STRING | Energy source used in electricity generation or export |
| fuel3 | STRING | Energy source used in electricity generation or export |
| fuel4 | STRING | Energy source used in electricity generation or export |
| comm_year | STRING | Year of plant operation, weighted by unit-capacity when data is available |
| owner | STRING | Majority shareholder of the power plant, generally in Romanized form |
| source | STRING | Entity reporting the data; could be an organization, report, or document, generally in Romanized form |
| url | STRING | Web document corresponding to the "source" field |
| src_latlon | STRING | Attribution for geolocation information |
| cap_year | DOUBLE | Year the capacity information was reported |
| gwh_2013 | DOUBLE | Electricity generation in gigawatt-hours reported for the year 2013 |
| gwh_2014 | DOUBLE | Electricity generation in gigawatt-hours reported for the year 2014 |
| gwh_2015 | DOUBLE | Electricity generation in gigawatt-hours reported for the year 2015 |
| gwh_2016 | DOUBLE | Electricity generation in gigawatt-hours reported for the year 2016 |
| gwh_estimt | DOUBLE | Estimated annual electricity generation in gigawatt-hours for the year 2015 |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WRI/GPPD/power_plants');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_GPPD_power_plants
- 数据引用：Global Energy Observatory, Google, KTH Royal Institute of Technology in
Stockholm, University of Groningen, World Resources Institute. 2018. Global
Power Plant Database. Published on Resource Watch and Google Earth Engine;
[https://resourcewatch.org/](https://resourcewatch.org/)
[https://earthengine.google.com/](https://earthengine.google.com/)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
