---
title: "IBGE: Brazil State Boundaries 2025 (Federation Units)"
date: 2026-11-03 12:00:00
permalink: /pages/ddb7c418/
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
  - "states"
  - "table"
---

# IBGE: Brazil State Boundaries 2025 (Federation Units)

## 数据集简介

The Instituto Brasileiro de Geografia e Estat&iacute;stica (IBGE) provides official
cartographic representations of the Brazilian territorial structure. This
dataset contains the boundaries of the 27 Federation Units (26 States and
1 Federal District) of Brazil for the reference year 2025 (Malha Territorial
2025).

Federation Units are the primary subnational administrative divisions of
Brazil, grouped into five macro regions (Norte, Nordeste, Sudeste, Sul, and
Centro-Oeste).

For more information on the methodology and technical specifications, visit
the [IBGE Municipal Mesh Documentation](https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-meshes/2786-np-municipal-mesh/18890-municipal-mesh.html).

## 基本信息

- 数据集编号（Earth Engine ID）：`IBGE/UF/V2025`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：IBGE、Google Earth Engine
- 时间范围：2025-01-01 至 2026-01-01
- 许可：proprietary
- 关键词：borders, boundaries, brazil, ibge, infrastructure-boundaries, states, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CD_UF | STRING | 2-digit State / Federation Unit Code (e.g., 11=RO, 35=SP, 53=DF) |
| NM_UF | STRING | State / Federation Unit Name |
| SIGLA_UF | STRING | 2-letter State Abbreviation (e.g., SP, RJ, MG, DF) |
| CD_REGIAO | STRING | 1-digit Macro Region Code (1=Norte, 2=Nordeste, 3=Sudeste, 4=Sul, 5=Centro-Oeste) |
| NM_REGIAO | STRING | Macro Region Name |
| SIGLA_RG | STRING | Macro Region Abbreviation (N, NE, SE, S, CO) |
| AREA_KM2 | DOUBLE | Area in square kilometers |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('IBGE/UF/V2025');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IBGE_UF_V2025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
