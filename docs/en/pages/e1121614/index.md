---
title: "Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1"
date: 2026-11-03 12:00:00
---

# Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1

Original name: Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1

## What this dataset is

This dataset contains Level-3 Dynamic OPERA surface water extent from
Sentinel-1 (DSWX-S1). DSWx-S1 provides near-global geographical
mapping of surface water extent over land at a spatial resolution
of 30 meters over the Military Grid reference System (MGRS) grid
system, with a temporal revisit frequency between 6-12 days.
Using Sentinel-1 radar observations, DSWx-S1 maps open inland water
bodies greater than 3 hectares and 200 meters in width, irrespective
of cloud conditions and daylight illumination that often pose
challenges to optical sensors. Forward production of the DSWx-S1 data
record began in Sept 2024.

## Coverage and time range

- Coverage: Spatial: near-global land; temporal: 2024 to present (6-12 day revisit); resolution: 30 m.
- Time range: 2024-08-01 至 2026-10-28

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| WTR_Water_classification | Masked interpreted water classification layer. This represents pixel-wise classification into one of three water classes (not water, open water and inundated vegetation), masks (HAND mask and layover/shadow mask), or no data classes. | 30 |  |
| BWTR_Binary_water | The binary water map is derived from the WTR layer as a union of water classes (open water and inundated vegetation) into a binary map indicating areas with and without water. Invalid data classes (HAND masked, layover/shadow masked and fill value) are also provided to indicate areas in which the binary classification does not provide water/not water classification. | 30 |  |
| CONF_Confidence | A representation of the confidence associated with the WTR classification that is based on DIAG results. For example, the Open water class of the WTR layer is split into two classes: High Confidence and Moderate Confidence. Additionally, this layer includes areas characterized by low backscattering that are not water: Low-backscattering not water and land cover masked. Detailed explanations of these classifications are outlined in the [DSWx-S1 ATBD](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/D-108763_Rev_A_OPERA_DSWx_S1_NI_ATBD_20240530_SIGNED.pdf). Similar to the WTR and BWTR layers, the Confidence (CONF) layer also marks pixels where water detection is challenging or unfeasible due to factors like layover/shadow effects, no-data areas, and regions where water presence is hydrologically unrealistic (identified by HAND mask). | 30 |  |
| DIAG_diagnostic | A metric of Fuzzy values is computed using ancillary data, including HAND, terrain slope angle, reference water, and RTC-S1 backscattering, applying specific thresholds. These values fall within a range of 0 to 100, where a higher value signifies a greater likelihood of the presence of open water. | 30 |  |

## What you can use it for

- Surface-water mapping for cloudy regions and flood response.
- Monitor lake and wetland water-extent change.
- Cross-validate water extent with the optical DSWx-HLS.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OPERA/DSWX/L3_V1/S1');
```

- Earth Engine ID: `OPERA/DSWX/L3_V1/S1`
- Providers: NASA JPL, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OPERA_DSWX_L3_V1_S1
* [DSWx-S1 Product Specification Document](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/D-108761_OPERA_DSWx_S1AB_ProductSpec_Rev_A.pdf)
* [DSWx Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dswx-product-suite/)
* [DSWx-S1 Algorithm Theoretical Basis Document](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/D-108763_Rev_A_OPERA_DSWx_S1_NI_ATBD_20240530_SIGNED.pdf)

## License and citation

- License: proprietary
- Keywords: geophysical, nasa, opera, sentinel1-derived, surface, surface-ground-water, water
- 数据引用：OPERA . 2024. OPERA Dynamic Surface Water Extent from Sentinel-1 product
(Version 1). Ver. 1.0. PO.DAAC, CA, USA. Dataset accessed [YYYY-MM-DD]
at https://doi.org/10.5067/OPDSWS1-L3V1

- DOI：10.5067/OPDSWS1-L3V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/en/pages/0bb51b32/)
- [GFPLAIN250m: Global 250m Floodplain Dataset](/en/pages/fcae03ea/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/en/pages/d281cddf/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
