---
title: "Global Oil Palm Extent and Planting Year (1990–2021) v1.2"
date: 2026-11-03 12:00:00
---

# Global Oil Palm Extent and Planting Year (1990–2021) v1.2

Original name: Global Oil Palm Extent and Planting Year (1990-2021) v1.2

## What this dataset is

This dataset maps where oil palm grows and when it was planted. It gives global oil palm extent for 2016–2021 at 10 m resolution, plus the planting year from 1990 to 2021 at 30 m resolution, across 609 grid tiles of 100×100 km covering tropical and subtropical oil-palm regions. In total it maps 23.98 Mha of closed-canopy oil palm (16.69 Mha, 69.6%, industrial; 7.29 Mha, 30.4%, smallholder), with a sample-based area estimate of 16.82 ± 0.19 Mha industrial and 7.37 ± 0.25 Mha smallholder. Note: although the catalog time range spans 1990–2021 to reflect the planting-year range, this is a single static mosaic, not a multi-temporal time series.

How it was made, in brief: annual closed-canopy maps for 2016–2021 come from a DeepLabv3+ convolutional neural network applied to Sentinel-1 annual composites, with ESA WorldCover classes masked out to reduce false positives (such as coconut plantations and paddy fields) and manual screening afterwards. The six annual maps were merged with an oil-palm-presence priority rule. The planting-year layer was derived from 1990–2021 Landsat time series: a Random Forest identified the last land-clearing event before canopy closure, and values span 1989–2022.

Key limitations to keep in mind: Sentinel-1 only detects oil palm reliably after canopy closure (about 3 years after planting), so plantations established in 2019–2021 are largely missing from the extent layer — do not use it to measure new expansion or deforestation in 2019–2021. The planting year records the most recent replanting, not necessarily the first conversion to oil palm, and it is left-censored at 1989 (values of 1989, about 7.5% of oil palm pixels, mean planted in or before 1989). Open-canopy and semi-wild groves are largely omitted, accuracy is lower for smallholder plantations (planting-year RMSE 4.89 years vs 2.02 years for industrial; overall RMSE 2.65 years), and about 5% of 10 m oil palm pixels along plantation edges lack a planting-year value because the two bands have different resolutions.

## Coverage and time range

- Coverage: Tropical and subtropical oil-palm regions worldwide (609 tiles of 100×100 km)
- Time range: 1990-01-01 至 2021-12-31

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| classification | Oil palm plantation type classification | 10 |  |
| planting_year | Estimated year of plantation establishment | 30 |  |

## What you can use it for

- Map the extent and age structure of oil palm plantations worldwide
- Assess deforestation and EUDR-related risk with planting-year evidence
- Compare industrial and smallholder plantation patterns

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('BIOPAMA/GlobalOilPalm/v1_2');
```

- Earth Engine ID: `BIOPAMA/GlobalOilPalm/v1_2`
- Providers: Biopama Programme, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1_2

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, biodiversity, biopama, conservation, crop, global, landcover, landuse, landuse-landcover, palm, plantation
- 数据引用：Descals, A., Gaveau, D. L., Wich, S., Szantoi, Z., and Meijaard, E. (2024).
Global mapping of oil palm planting year from 1990 to 2021.
Earth System Science Data, 16(11), 5111-5129.
[doi:10.5194/essd-16-5111-2024](https://doi.org/10.5194/essd-16-5111-2024)

- DOI：10.5194/essd-16-5111-2024

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Map of Oil Palm Plantations 2019 [deprecated]](/en/pages/1dc500dd/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)
- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
