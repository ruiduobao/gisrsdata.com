---
title: "Canada AAFC Annual Crop Inventory"
date: 2026-11-03 12:00:00
---

# Canada AAFC Annual Crop Inventory

Original name: Canada AAFC Annual Crop Inventory

## What this dataset is

This is an annual map of what is grown where across Canada. Starting in 2009, the Earth Observation Team of the Science and Technology Branch at Agriculture and Agri-Food Canada (AAFC) began generating annual crop type digital maps.

The 2009 and 2010 editions focused on the Prairie Provinces, applying a decision-tree method to optical imagery (Landsat-5, AWiFS, DMC) and radar imagery (Radarsat-2). Beginning with the 2011 growing season, the activity was extended to other provinces in support of a national crop inventory. The inventory consistently meets an overall accuracy target of at least 85% at a final spatial resolution of 30 m (56 m in 2009 and 2010).

## Coverage and time range

- Coverage: Canada (Prairie Provinces in 2009–2010, later extended to other provinces)
- Time range: 2009-01-01 至 2025-01-01
- Cadence: Annual

## Resolution and specifications

- Spatial resolution: about 30 m (one pixel is about 30 m across; 56 m in 2009 and 2010)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| landcover | Main crop-specific land cover classification. | 30 |  |

## What you can use it for

- See which crops are grown where each year, and tally crop areas and their changes
- Provide a base map for agricultural policy, yield estimation and food-security analysis
- Study long-term land-use and crop-rotation change

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('AAFC/ACI');
```

- Earth Engine ID: `AAFC/ACI`
- Providers: Agriculture and Agri-Food Canada, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AAFC_ACI

## License and citation

- License: OGL-Canada-2.0
- Keywords: aafc, agriculture, canada, crop, landcover
- 数据引用：Agriculture and Agri-Food Canada Annual Crop Inventory. {YEAR}

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)
- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)
- [Côte d'Ivoire BNETD 2020 Land Cover Map](/en/pages/ede6637e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
