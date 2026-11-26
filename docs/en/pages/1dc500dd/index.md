---
title: "Global Map of Oil Palm Plantations 2019 [deprecated]"
date: 2026-11-03 12:00:00
---

# Global Map of Oil Palm Plantations 2019 [deprecated]

Original name: Global Map of Oil Palm Plantations [deprecated]

## What this dataset is

This dataset is a 10 m global map of industrial and smallholder oil palm plantations for 2019, covering the areas where oil palm was detected.

The classified images are the output of a convolutional neural network applied to Sentinel-1 and Sentinel-2 half-year composites. See the [article](https://essd.copernicus.org/articles/13/1211/2021/) for additional information. Note: this version is marked deprecated.

## Coverage and time range

- Coverage: Global oil-palm growing areas
- Time range: 2019-01-01 至 2019-12-31

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| classification | Oil Palm class description | 10 |  |

## What you can use it for

- Locate industrial and smallholder oil palm plantations worldwide
- Assess deforestation risk linked to oil palm expansion
- A 2019 baseline layer for land-use and supply-chain studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('BIOPAMA/GlobalOilPalm/v1');
```

- Earth Engine ID: `BIOPAMA/GlobalOilPalm/v1`
- Providers: Biopama programme, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, biodiversity, biopama, conservation, crop, global, landuse, palm, plantation
- 数据引用：Adrià, D., Serge, W., Erik, M., David, G., Stephen, P., & Zoltan, S. (2021). High resolution global industrial and smallholder oil palm map for 2019 (Version v1) [Data set]. Zenodo.
[doi:10.5281/zenodo.4473715](https://doi.org/10.5281/zenodo.4473715)

- DOI：10.5281/zenodo.4473715

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)
- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
