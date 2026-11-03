---
title: "OPERA Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS) V1"
date: 2026-11-03 12:00:00
permalink: /pages/79738746/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "disturbance"
  - "forest"
  - "forest-biomass"
  - "geophysical"
  - "landsat-derived"
  - "nasa"
  - "opera"
  - "sentinel2-derived"
  - "vegetation"
---

# OPERA Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS) V1

## 数据集简介

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

Documentation:

  * [DIST Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dist-product-suite/)
  * [OPERA DIST-HLS Product Specification Document](https://lpdaac.usgs.gov/documents/1766/OPERA_DIST_HLS_Product_Specification_V1.pdf)
  * [OPERA DIST-HLS Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/1835/OPERA_DIST_ATBD__V1.pdf)
  * [NASA Earthdata Search](https://search.earthdata.nasa.gov/search/granules?p=C2519119034-LPCLOUD)
  * [Publication: Rapid monitoring of global land change](https://doi.org/10.1038/s41467-025-64014-9)

## 基本信息

- 数据集编号（Earth Engine ID）：`OPERA/DIST/L3_DIST-ANN-HLS/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA JPL、Google Earth Engine
- 时间范围：2023-01-01 至 2025-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：disturbance, forest, forest-biomass, geophysical, landsat-derived, nasa, opera, sentinel2-derived, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| VEG-DIST-STATUS | Status of vegetation disturbance within the calendar year.  | 30 |  |
| VEG-ANOM-MAX | Maximum vegetation loss anomaly observed during the year. | 30 |  |
| VEG-DIST-DATE | Day of initial vegetation disturbance detection, denoted as the number of days since December 31, 2020.  | 30 |  |
| VEG-DIST-DUR | Duration of reported vegetation disturbance event in days.  | 30 |  |
| VEG-DIST-CONF | Confidence level of vegetation disturbance detection.  | 30 |  |
| VEG-DIST-COUNT | Count of observations with detected vegetation loss for the reported event.  | 30 |  |
| VEG-CONF-PREV | Reported vegetation loss alert from previous year confirmed in current year.  | 30 |  |
| VEG-CONF-COUNT | Count of separate vegetation disturbance events during the calendar year.  | 30 |  |
| VEG-LAST-DATE | Day of last observation for vegetation disturbance monitoring, denoted as the number of days since December 31, 2020.  | 30 |  |
| VEG-HIST | Vegetation cover percent of baseline at time of maximum anomaly (0-100%, 200 = no disturbance).  | 30 |  |
| VEG-IND-MAX | Maximum estimated vegetation cover, with disturbance areas having the vegetation cover from the date of maximum anomaly (0-100%).  | 30 |  |
| VEG-IND-3YR-MIN | Minimum vegetation cover percent over the current and previous two years.  | 30 |  |
| GEN-DIST-STATUS | Status of generic spectral disturbance within the calendar year.  | 30 |  |
| GEN-ANOM-MAX | Maximum generic spectral anomaly observed during the year.  | 30 |  |
| GEN-DIST-DATE | Day of initial generic disturbance detection, denoted as the number of days since December 31, 2020.  | 30 |  |
| GEN-DIST-DUR | Duration of reported generic disturbance event in days.  | 30 |  |
| GEN-DIST-CONF | Confidence level of generic disturbance detection.  | 30 |  |
| GEN-DIST-COUNT | Count of observations with detected generic disturbance for the reported event.  | 30 |  |
| GEN-CONF-PREV | Reported generic disturbance alert from previous year confirmed in current year.  | 30 |  |
| GEN-CONF-COUNT | Count of separate generic disturbance events during the calendar year.  | 30 |  |
| GEN-LAST-DATE | Day of last observation for generic disturbance monitoring, denoted as the number of days since December 31, 2020.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OPERA/DIST/L3_DIST-ANN-HLS/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_DIST_L3_DIST-ANN-HLS_V1
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
