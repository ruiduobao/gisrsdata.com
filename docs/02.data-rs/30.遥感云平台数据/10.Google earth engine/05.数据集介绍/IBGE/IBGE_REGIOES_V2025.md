---
title: "IBGE: Brazil Macro Regions 2025"
date: 2026-11-03 12:00:00
permalink: /pages/bc8e9520/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "boundaries"
  - "brazil"
  - "ibge"
  - "infrastructure-boundaries"
  - "table"
---

# IBGE: Brazil Macro Regions 2025

## 数据集简介

The Instituto Brasileiro de Geografia e Estat&iacute;stica (IBGE) provides official
cartographic representations of the Brazilian territorial structure. This
dataset contains the boundaries of the five official Macro Regions of Brazil
(Norte, Nordeste, Sudeste, Sul, and Centro-Oeste) for reference year 2025
(Malha Territorial 2025).

Macro regions are groupings of Federation Units (states) established for
statistical, planning, and administrative purposes.

For more information on the methodology and technical specifications, visit
the [IBGE Municipal Mesh Documentation](https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-meshes/2786-np-municipal-mesh/18890-municipal-mesh.html).

## 基本信息

- 数据集编号（Earth Engine ID）：`IBGE/REGIOES/V2025`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：IBGE、Google Earth Engine
- 时间范围：2025-01-01 至 2026-01-01
- 许可：proprietary
- 关键词：borders, boundaries, brazil, ibge, infrastructure-boundaries, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CD_REGIAO | STRING | 1-digit Macro Region Code (1=Norte, 2=Nordeste, 3=Sudeste, 4=Sul, 5=Centro-Oeste) |
| NM_REGIAO | STRING | Macro Region Name |
| SIGLA_RG | STRING | Macro Region Abbreviation (N, NE, SE, S, CO) |
| AREA_KM2 | DOUBLE | Area in square kilometers |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('IBGE/REGIOES/V2025');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IBGE_REGIOES_V2025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
