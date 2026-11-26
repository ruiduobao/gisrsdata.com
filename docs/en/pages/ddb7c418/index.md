---
title: "IBGE: Brazil State Boundaries 2025 (Federation Units)"
date: 2026-11-03 12:00:00
---

# IBGE: Brazil State Boundaries 2025 (Federation Units)

Original name: IBGE: Brazil State Boundaries 2025 (Federation Units)

## What this dataset is

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

## Coverage and time range

- Coverage: Brazil
- Time range: 2025-01-01 至 2026-01-01

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| CD_UF | STRING | 2-digit State / Federation Unit Code (e.g., 11=RO, 35=SP, 53=DF) |
| NM_UF | STRING | State / Federation Unit Name |
| SIGLA_UF | STRING | 2-letter State Abbreviation (e.g., SP, RJ, MG, DF) |
| CD_REGIAO | STRING | 1-digit Macro Region Code (1=Norte, 2=Nordeste, 3=Sudeste, 4=Sul, 5=Centro-Oeste) |
| NM_REGIAO | STRING | Macro Region Name |
| SIGLA_RG | STRING | Macro Region Abbreviation (N, NE, SE, S, CO) |
| AREA_KM2 | DOUBLE | Area in square kilometers |

## What you can use it for

- Brazilian administrative and statistical mapping
- Regional analysis and spatial statistics
- Territorial mesh reference

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('IBGE/UF/V2025');
```

- Earth Engine ID: `IBGE/UF/V2025`
- Providers: IBGE, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IBGE_UF_V2025

## License and citation

- License: proprietary
- Keywords: borders, boundaries, brazil, ibge, infrastructure-boundaries, states, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ESA WorldCereal AEZ v100](/en/pages/1c72ec66/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries](/en/pages/6acf3380/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, First-Level Administrative Units](/en/pages/b2ab3105/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, Second-Level Administrative Units](/en/pages/313e2d03/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
