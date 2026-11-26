---
title: "Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1"
date: 2026-11-03 12:00:00
---

# Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1

Original name: Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1

## What this dataset is

This dataset contains Level-3 Dynamic OPERA surface water extent product
version 1. The data are validated surface water extent observations
beginning April 2023. Known issues and caveats on usage are described
in the product documentation. The input dataset for generating each product is
the Harmonized Landsat-8 and Sentinel-2A/B/C (HLS) product version 2.0.
HLS products provide surface reflectance (SR) data from the
Operational Land Imager (OLI) aboard the Landsat 8 satellite and the
MultiSpectral Instrument (MSI) aboard the Sentinel-2A/B/C satellite.

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2023 to present; resolution: 30 m.
- Time range: 2023-04-04 至 2026-10-27

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| WTR_Water_classification | Water Classification - This represents pixel-wise classification into one of three water classes (not water, open water, and partial surface water), snow/ice, cloud/cloud shadow and adjacent to cloud/cloud shadow, ocean masked, or no data classes as a result of processing the diagnostic (DIAG) layer through all intermediate steps/layers | 30 |  |
| BWTR_Binary_water | The binary water map is derived from the WTR layer as a union of water classes (open water and partial surface water) into a binary map indicating areas with and without water. This layer is meant to provide users with a quick view for water/no-water. Invalid data classes (snow/ice, cloud/cloud shadow along with adjacent to cloud/cloud shadow, ocean masked, and fill value) are also provided to indicate areas in which the binary classification does not provide water/no-water classification. | 30 |  |
| CONF_Confidence | A representation of the confidence associated with the WTR classification that is based on a combination of DIAG results and quality assurance information provided with the input HLS data. For example, the Open water class of the WTR layer is split into two classes: High Confidence and Moderate Confidence while WTR Partial surface water class pixels of WTR are flagged as either partial surface water conservative or partial surface water aggressive, with the latter exhibiting less certainty. As in the WTR and BWTR layers, pixels for which water retrievals are difficult or impossible due to snow/ice, cloud/shadow, or fill values are also noted in the CONF layer. | 30 |  |
| DIAG_diagnostic | A layer coded to indicate which of five initial DSWx-HLS tests were positive for water detection on a per-pixel basis. Values range from 0 (i.e, 00000), indicating that none of the five DSWx-HLS tests returned a positive result, to 11111, denoting that all tests resulted positive. The tests are described in [DSWX-HLS ATBD](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf) and [Jones, John W. 2019](https://doi.org/10.3390/rs11040374) are used to derive the confidence layer above. The combination of positive tests for a particular class determines its confidence value. The Fill value (no data) is represented by the number 65535. | 30 |  |
| WTR1_Interpretation_of_diagnostic_layer_into_water_classes | Classification of the DIAG layer results in open water, partial surface water, and no-water. This layer is further refined through the application of masks resulting in Layers 6 (WTR-2) and 1 (WTR). | 30 |  |
| WTR2_Refined_WTR1_given_HLS_FMASK | The WTR-2 layer is derived from the WTR-1 (Layer 5) outcome by applying additional tests based on land cover and terrain shadow information, and aerosol overcorrection mitigation, as described in [DSWX-HLS ATBD](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf) and [Jones, John W. 2019](https://doi.org/10.3390/rs11040374) to mask (eliminate) false-positive water detections. | 30 |  |
| LAND_land_cover_classification | Land cover thematic layer used to determine where additional testing is performed to potentially mask WTR-1 layer water detections to produce the intermediate WTR-2 layer. | 30 |  |
| SHAD_terrain_shadow | Mask used to eliminate likely locations of terrain-induced shadow based on a classification of shadow areas generated for the capture date/time of the input HLS image from Digital Elevation Model data. This is used in the creation of the intermediate layer WTR-2. | 30 |  |
| HLS_CLOUD_SNOW_FMASK_classification | Cloud, cloud-shadow, and snow/ice classification layer from HLS input. | 30 |  |

## What you can use it for

- Dynamic monitoring of lakes, rivers and flood extent.
- Surface-water time series for water-resource management.
- Complement the SAR-based DSWx-S1 for all-weather water monitoring.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OPERA/DSWX/L3_V1/HLS');
```

- Earth Engine ID: `OPERA/DSWX/L3_V1/HLS`
- Providers: NASA JPL, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OPERA_DSWX_L3_V1_HLS
* [DSWx-HLS Product Specification Document](https://d2pn8kiwq2w21t.cloudfront.net/documents/OPERA_DSWx-HLS_ProductSpec_v1.0.0_D-107395_RevB.pdf)
* [DSWx Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dswx-product-suite/)
* [DSWx-HLS Algorithm Theoretical Basis Document (ATBD)](https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf)

## License and citation

- License: proprietary
- Keywords: geophysical, landsat-derived, nasa, opera, sentinel2-derived, surface, surface-ground-water, water
- 数据引用：OPERA . 2023. OPERA Dynamic Surface Water Extent from Harmonized Landsat
Sentinel-2 (Version 1). Ver. 1.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at https://doi.org/10.5067/OPDSW-PL3V1

- DOI：10.5067/OPDSW-PL3V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1](/en/pages/e1121614/)
- [GFPLAIN250m: Global 250m Floodplain Dataset](/en/pages/fcae03ea/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/en/pages/d281cddf/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
