---
title: "ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002"
date: 2026-11-03 12:00:00
---

# ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002

Original name: ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002

## What this dataset is

The ECOSTRESS Land Surface Temperature and Emissivity (ECO_L2T_LSTE) V002
dataset provides Land Surface Temperature (LST), LST error, Quality Control
flags, Broadband Emissivity, cloud mask, surface height, water mask, and
view zenith angle data at a 70m spatial resolution. This product is derived
from ECOSTRESS observations and is essential for understanding surface
energy balance and water stress.

## Coverage and time range

- Coverage: Coverage: global; time span: 2018 to 2026; resolution: 70 m.
- Time range: 2018-07-09 至 2026-11-01

## Resolution and specifications

- Spatial resolution: about 70 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LST | Land Surface Temperature | 70 |  |
| LST_err | Land Surface Temperature error | 70 |  |
| QC | Quality Control flags for LST and emissivity | 70 |  |
| EmisWB | Wide band Emissivity | 70 |  |
| cloud | Cloud mask | 70 |  |
| height | Surface elevation of observation" | 70 |  |
| water | Water mask | 70 |  |
| view_zenith | View Zenith Angle | 70 |  |

## What you can use it for

- Land surface temperature and evapotranspiration research
- Plant water stress monitoring
- Urban thermal environment analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/ECOSTRESS/L2T_LSTE/V2');
```

- Earth Engine ID: `NASA/ECOSTRESS/L2T_LSTE/V2`
- Providers: Land Processes Distributed Active Archive Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_ECOSTRESS_L2T_LSTE_V2
* [User's Guide](https://lpdaac.usgs.gov/documents/1655/ECO_L1C-4_Grid_Tile_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1869/ECOSTRESSL3JET_ATBD_V1.pdf)
* [General Documentation](https://github.com/nasa/ECOSTRESS-Data-Resources)
* [Land Processes Distributed Active Archive Center](https://www.earthdata.nasa.gov/centers/lp-daac)

## License and citation

- License: proprietary
- Keywords: ecostress, emissivity, land, lst, plant-productivity, temperature
- 数据引用：Hook, Simon, et al. ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m
v002. NASA Land Processes Distributed Active Archive Center, 2023,
doi:[10.5067/ECOSTRESS/ECO_L2T_LSTE.002](https://doi.org/10.5067/ECOSTRESS/ECO_L2T_LSTE.002)

- DOI：10.5067/ECOSTRESS/ECO_L2T_LSTE.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/pages/a7bebe55/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
