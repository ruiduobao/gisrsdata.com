---
title: "IBGE: Brazil Municipality Boundaries 2025"
date: 2026-11-03 12:00:00
permalink: /pages/842ffbd4/
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

# IBGE: Brazil Municipality Boundaries 2025

## 数据集简介

The Instituto Brasileiro de Geografia e Estat&iacute;stica (IBGE) provides official
cartographic representations of the Brazilian territorial structure. This
dataset contains 5,573 spatial units representing the municipal mesh of
Brazil for the reference year 2025 (Malha Territorial 2025).

These 5,573 units comprise:
- 5,569 municipalities (including Boa Esperan&ccedil;a do Norte, MT, installed in 2025)
- 1 Federal District (Bras&iacute;lia)
- 1 State District (Fernando de Noronha)
- 2 state operational water bodies (Lagoa dos Patos and Lagoa Mirim)

Municipalities (munic&iacute;pios) are the smallest autonomous administrative
units in Brazil, each governed by a municipal administration (prefeitura and
c&acirc;mara municipal).

Note: Users performing regional aggregations should use the pre-aggregated
IBGE collections (e.g., `IBGE/IMEDIATAS/V2025`, `IBGE/INTERMEDIARIAS/V2025`,
`IBGE/UF/V2025`, `IBGE/REGIOES/V2025`) rather than running geometric unions
across all 5,573 polygons to ensure accuracy and consistency with official
hierarchies.

For more information on the methodology and technical specifications, visit
the [IBGE Municipal Mesh Documentation](https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-meshes/2786-np-municipal-mesh/18890-municipal-mesh.html).

## 基本信息

- 数据集编号（Earth Engine ID）：`IBGE/MUNICIPIOS/V2025`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：IBGE、Google Earth Engine
- 时间范围：2025-01-01 至 2026-01-01
- 许可：proprietary
- 关键词：borders, boundaries, brazil, ibge, infrastructure-boundaries, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CD_MUN | STRING | 7-digit Municipality Code |
| NM_MUN | STRING | Municipality Name |
| CD_RGI | STRING | 6-digit Immediate Geographic Region Code |
| NM_RGI | STRING | Immediate Geographic Region Name |
| CD_RGINT | STRING | 4-digit Intermediate Geographic Region Code |
| NM_RGINT | STRING | Intermediate Geographic Region Name |
| CD_UF | STRING | 2-digit State Code |
| NM_UF | STRING | State Name |
| SIGLA_UF | STRING | 2-letter State Abbreviation |
| CD_REGIAO | STRING | 1-digit Macro Region Code (1=Norte, 2=Nordeste, 3=Sudeste, 4=Sul, 5=Centro-Oeste) |
| NM_REGIAO | STRING | Macro Region Name |
| SIGLA_RG | STRING | Macro Region Abbreviation (N, NE, SE, S, CO) |
| CD_CONCURB | STRING | Conurbation Code |
| NM_CONCURB | STRING | Conurbation Name |
| AREA_KM2 | DOUBLE | Area in square kilometers |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('IBGE/MUNICIPIOS/V2025');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IBGE_MUNICIPIOS_V2025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
