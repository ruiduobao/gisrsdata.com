---
title: "IBGE: Brazil Macro Regions 2025"
date: 2026-11-03 12:00:00
---

# IBGE: Brazil Macro Regions 2025

Original name: IBGE: Brazil Macro Regions 2025

## What this dataset is

The Instituto Brasileiro de Geografia e Estat&iacute;stica (IBGE) provides official
cartographic representations of the Brazilian territorial structure. This
dataset contains the boundaries of the five official Macro Regions of Brazil
(Norte, Nordeste, Sudeste, Sul, and Centro-Oeste) for reference year 2025
(Malha Territorial 2025).

Macro regions are groupings of Federation Units (states) established for
statistical, planning, and administrative purposes.

For more information on the methodology and technical specifications, visit
the [IBGE Municipal Mesh Documentation](https://www.ibge.gov.br/en/geosciences/territorial-organization/territorial-meshes/2786-np-municipal-mesh/18890-municipal-mesh.html).

## Coverage and time range

- Coverage: Brazil
- Time range: 2025-01-01 至 2026-01-01

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
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
var dataset = ee.FeatureCollection('IBGE/REGIOES/V2025');
```

- Earth Engine ID: `IBGE/REGIOES/V2025`
- Providers: IBGE, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IBGE_REGIOES_V2025

## License and citation

- License: proprietary
- Keywords: borders, boundaries, brazil, ibge, infrastructure-boundaries, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ESA WorldCereal AEZ v100](/en/pages/1c72ec66/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2015, Country Boundaries](/en/pages/6acf3380/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, First-Level Administrative Units](/en/pages/b2ab3105/)
- [FAO GAUL 500m Simplified: Global Administrative Unit Layers 2025, Second-Level Administrative Units](/en/pages/313e2d03/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
