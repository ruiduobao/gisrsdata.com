---
title: "Côte d'Ivoire BNETD 2020 Land Cover Map"
date: 2026-11-03 12:00:00
---

# Côte d'Ivoire BNETD 2020 Land Cover Map

Original name: Cote d'Ivoire BNETD 2020 Land Cover Map

## What this dataset is

The Côte d'Ivoire BNETD 2020 Land Cover Map was produced by the Ivorian government through BNETD-CIGN (the geographic information and digital centre of the national technical studies and development office), with technical and financial support from the European Union. The methodology was transparent, participatory and in line with international standards.

The map was made by processing a mosaic of 2020 Sentinel-2 satellite images in Google Earth Engine, supplemented with field data used to train a supervised Random Forest classifier. Two field campaigns were run across the country — 10 November to 9 December 2022 and 26 January to 13 February 2023 — involving 33 people from multiple partner organizations.

As part of the EU Deforestation Regulation (EUDR) due diligence process, plot geolocation data for EUDR-relevant products can be overlaid with this 2020 forest cover to assess the risk that a plot sits in an area that was forested before the 2020 cut-off date: the map's classes can be combined into a forest/non-forest map aligned with the FAO forest definition. A platform for accessing the 2020 land cover data, metadata and methodology, built with ESRI solutions on the Africa GeoPortal, is at [https://bit.ly/carte-ci-2020](https://bit.ly/carte-ci-2020).

## Coverage and time range

- Coverage: Côte d'Ivoire
- Time range: 2020-01-01 至 2021-01-01

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| classification | Land Cover class | 10 |  |

## What you can use it for

- EUDR due diligence: check whether production plots were forested before the 2020 cut-off
- National land-cover and forest monitoring for Côte d'Ivoire
- A 10 m land-cover base map for land-use planning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('BNETD/land_cover/v1');
```

- Earth Engine ID: `BNETD/land_cover/v1`
- Providers: BNETD-CIGN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/BNETD_land_cover_v1
* [Detailed documentation](https://africageoportal.maps.arcgis.com/sharing/rest/content/items/26a717d4c13f4f3db2c6056f7e5c0bab/data)
* [Methodology in French](https://africageoportal.maps.arcgis.com/sharing/rest/content/items/76dc18767b89472eb89e8aa54e08a6c9/data)

## License and citation

- License: CC-BY-4.0
- Keywords: classification, deforestation, forest, landcover, landuse-landcover
- 数据引用：BNETD Land Cover Map 2020.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)
- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
