---
title: "DESS China Terrace Map v1"
date: 2026-11-03 12:00:00
---

# DESS China Terrace Map v1

Original name: DESS China Terrace Map v1

## What this dataset is

This dataset is a China terrace map at 30 m resolution in 2018. It was
developed through supervised pixel-based classification using multisource and
multi-temporal data based on the Google Earth Engine platform. The overall
accuracy and kappa coefficient achieved 94% and 0.72, respectively. This first
30 m China terrace map can be used for studies on soil erosion, food
security, biogeochemical cycle, biodiversity, and ecosystem service
assessments.

## Coverage and time range

- Coverage: Spatial: China; temporal: 2018; resolution: 30 m.
- Time range: 2018-01-01 至 2019-01-01

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| terrace | 1 when a terrace is present, 0 when it is not. | 30 |  |

## What you can use it for

- Terrace distribution and soil-erosion studies.
- Terrace data for food security and agricultural management.
- Analyse ecosystem services of terraces.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('Tsinghua/DESS/ChinaTerraceMap/v1');
```

- Earth Engine ID: `Tsinghua/DESS/ChinaTerraceMap/v1`
- Providers: Department of Earth System Science, Tsinghua University (DESS, THU), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Tsinghua_DESS_ChinaTerraceMap_v1

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, china, dess, landcover, landuse, landuse-landcover, terrace, tsinghua
- 数据引用：Cao, B., Yu, L., Naipal, V., Ciais, P., Li, W., Zhao, Y., Wei, W.,
Chen, D., Liu, Z., and Gong, P.: A 30 m terrace mapping in China using
Landsat 8 imagery and digital elevation model based on the Google Earth
Engine, Earth Syst. Sci. Data, 13, 2437-2456,
[doi:10.5194/essd-13-2437-2021](https://doi.org/10.5194/essd-13-2437-2021), 2021.

- DOI：10.5194/essd-13-2437-2021

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [Dynamic World V1](/en/pages/a78539ca/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)
- [ESA WorldCereal Active Cropland 10 m v100](/en/pages/dd6f101f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
