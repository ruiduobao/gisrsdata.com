---
title: "Open Buildings V3 Polygons"
date: 2026-11-03 12:00:00
---

# Open Buildings V3 Polygons

Original name: Open Buildings V3 Polygons

## What this dataset is

This large-scale open dataset consists of outlines of buildings derived
from high-resolution 50 cm satellite imagery. It contains 1.8B building
detections in Africa, Latin America, Caribbean, South Asia and Southeast
Asia. The inference spanned an area of 58M km&#178;.

For each building in this dataset we include the polygon describing its
footprint on the ground, a confidence score indicating how sure we are that
this is a building, and a [Plus Code](https://plus.codes/) corresponding to
the center of the building. There is no information about the type of
building, its street address, or any details other than its geometry.

Building footprints are useful for a range of important applications: from
population estimation, urban planning and humanitarian response to
environmental and climate science. The project is based in Ghana, with an
initial focus on the continent of Africa and new updates on South Asia,
South-East Asia, Latin America and the Caribbean.

Inference was carried out during May 2023.

For more details see the official
[website](https://sites.research.google/open-buildings/) of the Open
Buildings dataset.

## Coverage and time range

- Coverage: Africa, Latin America, Caribbean, South Asia and Southeast Asia
- Time range: 2023-05-30 至 2023-05-30

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| area_in_meters | DOUBLE | Area in square meters of the polygon. |
| confidence | DOUBLE | Confidence score [0.65;1.0] assigned by the model. |
| full_plus_code | STRING | The full [Plus Code](https://plus.codes/) at the building polygon centroid. |
| longitude_latitude | GEOMETRY | Centroid of the polygon. |

## What you can use it for

- Population estimation
- Urban planning and built-up mapping
- Humanitarian response and disaster assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('GOOGLE/Research/open-buildings/v3/polygons');
```

- Earth Engine ID: `GOOGLE/Research/open-buildings/v3/polygons`
- Providers: Google Research - Open Buildings, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings_v3_polygons

## License and citation

- License: CC-BY-4.0
- Keywords: africa, asia, building, built-up, open-buildings, population, south-asia, southeast-asia, structure, table
- 数据引用：W. Sirko, S. Kashubin, M. Ritter, A. Annkah, Y.S.E. Bouchareb, Y. Dauphin,
D. Keysers, M. Neumann, M. Cisse, J.A. Quinn. Continental-scale building
detection from high resolution satellite imagery.
[arXiv:2107.12283](https://arxiv.org/abs/2107.12283), 2021.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Open Buildings V1 Polygons [deprecated]](/pages/a6665342/)
- [Open Buildings V2 Polygons [deprecated]](/pages/42dbfeb4/)
- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
