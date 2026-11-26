---
title: "TUBerlin/BigEarthNet/v1"
date: 2026-11-03 12:00:00
---

# TUBerlin/BigEarthNet/v1

Original name: TUBerlin/BigEarthNet/v1

## What this dataset is

BigEarthNet is a new large-scale Sentinel-2 benchmark archive, consisting of
590,326 Sentinel-2 image patches.  To construct BigEarthNet, 125 Sentinel-2
tiles were acquired between June 2017 and May 2018 over the 10 countries
(Austria, Belgium, Finland, Ireland, Kosovo, Lithuania, Luxembourg,
Portugal, Serbia, Switzerland) of Europe. All the tiles were atmospherically
corrected by the Sentinel-2 Level 2A product generation and formatting tool
(sen2cor).  Then, they were divided into 590,326 non-overlapping image
patches. Each image patch was annotated by the multiple land-cover classes
(i.e., multi-labels) that were provided from the CORINE Land Cover database
of the year 2018 (CLC 2018).

## Coverage and time range

- Coverage: Spatial: ten European countries; temporal: 2017 to 2018; resolution: 10-60 m (multi-band).
- Time range: 2017-06-01 至 2018-05-31

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B1 | Aerosols | 60 | 443.9nm (S2A) / 442.3nm (S2B) |
| B2 | Blue | 10 | 496.6nm (S2A) / 492.1nm (S2B) |
| B3 | Green | 10 | 560nm (S2A) / 559nm (S2B) |
| B4 | Red | 10 | 664.5nm (S2A) / 665nm (S2B) |
| B5 | Red Edge 1 | 20 | 703.9nm (S2A) / 703.8nm (S2B) |
| B6 | Red Edge 2 | 20 | 740.2nm (S2A) / 739.1nm (S2B) |
| B7 | Red Edge 3 | 20 | 782.5nm (S2A) / 779.7nm (S2B) |
| B8 | NIR | 10 | 835.1nm (S2A) / 833nm (S2B) |
| B9 | Water vapor | 60 | 945nm (S2A) / 943.2nm (S2B) |
| B10 | Cirrus | 60 | 1373.5nm (S2A) / 1376.9nm (S2B) |
| B11 | SWIR 1 | 20 | 1613.7nm (S2A) / 1610.4nm (S2B) |
| B12 | SWIR 2 | 20 | 2202.4nm (S2A) / 2185.7nm (S2B) |
| B8A | Red Edge 4 | 20 | 864.8nm (S2A) / 864nm (S2B) |

## What you can use it for

- Benchmark dataset for remote-sensing image classification and multi-label learning.
- Train and evaluate deep-learning land-cover models.
- Sentinel-2 image-understanding research.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('TUBerlin/BigEarthNet/v1');
```

- Earth Engine ID: `TUBerlin/BigEarthNet/v1`
- Providers: BigEarthNet, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TUBerlin_BigEarthNet_v1

## License and citation

- License: proprietary
- Keywords: chip, copernicus, corine-derived, label, landuse-landcover, ml, sentinel, tile
- 数据引用：G. Sumbul, M. Charfuelan, B. Demir, V. Markl, BigEarthNet: A Large-Scale
Benchmark Archive for Remote Sensing Image Understanding, IEEE International
Conference on Geoscience and Remote Sensing Symposium, pp. 5901-5904,
Yokohama, Japan, 2019.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [Dynamic World V1](/en/pages/a78539ca/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)
- [ESA WorldCereal Active Cropland 10 m v100](/en/pages/dd6f101f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
