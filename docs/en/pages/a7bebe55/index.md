---
title: "ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002"
date: 2026-11-03 12:00:00
---

# ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002

Original name: ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002

## What this dataset is

The ECOSTRESS Tiled Ancillary NDVI and Albedo (ECO_L2T_STARS) V002 dataset
provides Normalized Difference Vegetation Index (NDVI) and albedo data at a
70m spatial resolution. This ancillary product, essential for understanding
plant water needs and stress, is created through a data fusion process that
combines Visible Infrared Imaging Radiometer Suite (VIIRS) and Harmonized
Landsat Sentinel (HLS) data. The fusion is performed using the STARS
algorithm, a Bayesian timeseries methodology, to align the data with
daytime ECOSTRESS overpasses. This product is only generated for
corresponding ECOSTRESS Land Surface Temperature and Emissivity tiles.

## Coverage and time range

- Coverage: Coverage: global; time span: 2018 to 2026; resolution: 70 m.
- Time range: 2018-07-09 至 2026-10-21

## Resolution and specifications

- Spatial resolution: about 70 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index (NDVI) | 70 |  |
| NDVI-UQ | Normalized Difference Vegetation Index (NDVI) uncertainty. | 70 |  |
| albedo | Albedo | 70 |  |
| albedo-UQ | Albedo uncertainty. | 70 |  |

## What you can use it for

- Land surface temperature and evapotranspiration research
- Plant water stress monitoring
- Urban thermal environment analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/ECOSTRESS/L2T_STARS/V2');
```

- Earth Engine ID: `NASA/ECOSTRESS/L2T_STARS/V2`
- Providers: Land Processes Distributed Active Archive Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_ECOSTRESS_L2T_STARS_V2
* [User's Guide](https://lpdaac.usgs.gov/documents/1655/ECO_L1C-4_Grid_Tile_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1869/ECOSTRESSL3JET_ATBD_V1.pdf)
* [General Documentation](https://github.com/nasa/ECOSTRESS-Data-Resources)
* [Land Processes Distributed Active Archive Center](https://www.earthdata.nasa.gov/centers/lp-daac)

## License and citation

- License: proprietary
- Keywords: albedo, ecostress, land, ndvi, plant-productivity
- 数据引用：Hook, Simon, et al. ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m
v002. NASA Land Processes Distributed Active Archive Center, 2023,
doi:[10.5067/ECOSTRESS/ECO_L2T_STARS.002](https://doi.org/10.5067/ECOSTRESS/ECO_L2T_STARS.002)

- DOI：10.5067/ECOSTRESS/ECO_L2T_STARS.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/pages/f726b0e6/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
