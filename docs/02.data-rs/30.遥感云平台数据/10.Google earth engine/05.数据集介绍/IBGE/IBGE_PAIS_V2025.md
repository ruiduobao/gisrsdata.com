---
title: "IBGE: Brazil Country Boundary 2025"
date: 2026-11-03 12:00:00
permalink: /pages/7c10716b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "boundaries"
  - "brazil"
  - "countries"
  - "ibge"
  - "infrastructure-boundaries"
  - "table"
---

# IBGE: Brazil Country Boundary 2025

## 数据集简介

The Instituto Brasileiro de Geografia e Estat&iacute;stica (IBGE) provides official
cartographic representations of the Brazilian territorial structure. This
dataset represents the official national country boundary of the Federative
Republic of Brazil for the reference year 2025 (Malha Territorial 2025).

The dataset includes the whole territory of Brazil along with the official
calculated land area.

For more information on the methodology and technical specifications, visit
the [IBGE Municipal Mesh Documentation](https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-meshes/2786-np-municipal-mesh/18890-municipal-mesh.html).

## 基本信息

- 数据集编号（Earth Engine ID）：`IBGE/PAIS/V2025`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：IBGE、Google Earth Engine
- 时间范围：2025-01-01 至 2026-01-01
- 许可：proprietary
- 关键词：borders, boundaries, brazil, countries, ibge, infrastructure-boundaries, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| Pais | STRING | Country name |
| AREA_KM2 | DOUBLE | Area in square kilometers |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('IBGE/PAIS/V2025');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IBGE_PAIS_V2025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
