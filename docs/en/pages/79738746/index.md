---
title: "OPERA Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS) V1"
date: 2026-11-03 12:00:00
---

# OPERA Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS) V1

Original name: OPERA Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS) V1

## What this dataset is

The Observational Products for End-Users from Remote Sensing Analysis (OPERA)
Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS)
product Version 1 summarizes the DIST-ALERT data product into an annual vegetation
disturbance data product.

The DIST-ANN-HLS product provides annual metrics and classifications of
vegetation disturbance detected from Harmonized Landsat-8/9 and Sentinel-2A/B
(HLS) surface reflectance data at 30-meter resolution. Disturbances include abrupt
events such as wildfire, logging, and clearing, as well as ongoing or longer-term
changes. The product includes both vegetation-specific disturbance metrics (VEG)
and generic disturbance metrics (GEN) across 21 raster layers.

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2023 to 2025 (annual); resolution: 30 m.
- Time range: 2023-01-01 至 2025-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| VEG-DIST-STATUS | Status of vegetation disturbance within the calendar year. | 30 |  |
| VEG-ANOM-MAX | Maximum vegetation loss anomaly observed during the year. | 30 |  |
| VEG-DIST-DATE | Day of initial vegetation disturbance detection, denoted as the number of days since December 31, 2020. | 30 |  |
| VEG-DIST-DUR | Duration of reported vegetation disturbance event in days. | 30 |  |
| VEG-DIST-CONF | Confidence level of vegetation disturbance detection. | 30 |  |
| VEG-DIST-COUNT | Count of observations with detected vegetation loss for the reported event. | 30 |  |
| VEG-CONF-PREV | Reported vegetation loss alert from previous year confirmed in current year. | 30 |  |
| VEG-CONF-COUNT | Count of separate vegetation disturbance events during the calendar year. | 30 |  |
| VEG-LAST-DATE | Day of last observation for vegetation disturbance monitoring, denoted as the number of days since December 31, 2020. | 30 |  |
| VEG-HIST | Vegetation cover percent of baseline at time of maximum anomaly (0-100%, 200 = no disturbance). | 30 |  |
| VEG-IND-MAX | Maximum estimated vegetation cover, with disturbance areas having the vegetation cover from the date of maximum anomaly (0-100%). | 30 |  |
| VEG-IND-3YR-MIN | Minimum vegetation cover percent over the current and previous two years. | 30 |  |
| GEN-DIST-STATUS | Status of generic spectral disturbance within the calendar year. | 30 |  |
| GEN-ANOM-MAX | Maximum generic spectral anomaly observed during the year. | 30 |  |
| GEN-DIST-DATE | Day of initial generic disturbance detection, denoted as the number of days since December 31, 2020. | 30 |  |
| GEN-DIST-DUR | Duration of reported generic disturbance event in days. | 30 |  |
| GEN-DIST-CONF | Confidence level of generic disturbance detection. | 30 |  |
| GEN-DIST-COUNT | Count of observations with detected generic disturbance for the reported event. | 30 |  |
| GEN-CONF-PREV | Reported generic disturbance alert from previous year confirmed in current year. | 30 |  |
| GEN-CONF-COUNT | Count of separate generic disturbance events during the calendar year. | 30 |  |
| GEN-LAST-DATE | Day of last observation for generic disturbance monitoring, denoted as the number of days since December 31, 2020. | 30 |  |

## What you can use it for

- Annual monitoring of deforestation, wildfire and land clearing.
- Disturbance evidence for carbon and ecological assessments.
- Screen change hotspots for field verification.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OPERA/DIST/L3_DIST-ANN-HLS/V1');
```

- Earth Engine ID: `OPERA/DIST/L3_DIST-ANN-HLS/V1`
- Providers: NASA JPL, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OPERA_DIST_L3_DIST-ANN-HLS_V1
* [DIST Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dist-product-suite/)
* [OPERA DIST-HLS Product Specification Document](https://lpdaac.usgs.gov/documents/1766/OPERA_DIST_HLS_Product_Specification_V1.pdf)
* [OPERA DIST-HLS Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/1835/OPERA_DIST_ATBD__V1.pdf)
* [NASA Earthdata Search](https://search.earthdata.nasa.gov/search/granules?p=C2519119034-LPCLOUD)
* [Publication: Rapid monitoring of global land change](https://doi.org/10.1038/s41467-025-64014-9)

## License and citation

- License: proprietary
- Keywords: disturbance, forest, forest-biomass, geophysical, landsat-derived, nasa, opera, sentinel2-derived, vegetation
- 数据引用：Hansen, M. (2024). OPERA Land Surface Disturbance Annual from Harmonized Landsat
Sentinel-2 product (Version 1) [Dataset]. NASA Land Processes Distributed Active
Archive Center.
[https://doi.org/10.5067/SNWG/OPERA_L3_DIST-ANN-HLS_V1.001](https://doi.org/10.5067/SNWG/OPERA_L3_DIST-ANN-HLS_V1.001)

Pickens, A. H., Hansen, M. C., Song, Z., Poulson, A., Komarova, A., Baggett, A.,
Kerr, T., Mikus, A., Dominguez, C. O., Tyukavina, A., & Lima, A. (2025).
Rapid monitoring of global land change. Nature Communications, 16, 8820.
[https://doi.org/10.1038/s41467-025-64014-9](https://doi.org/10.1038/s41467-025-64014-9)

- DOI：10.5067/SNWG/OPERA_L3_DIST-ANN-HLS_V1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/en/pages/465f5706/)
- [GHSL: Global built-up surface 10m (P2023A)](/en/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/en/pages/9724c860/)
- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/en/pages/5396cca7/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
