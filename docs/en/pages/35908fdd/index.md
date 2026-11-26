---
title: "MYD13A1.005 Vegetation Indices 16-Day L3 Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MYD13A1.005 Vegetation Indices 16-Day L3 Global 500m [deprecated]

Original name: MYD13A1.005 Vegetation Indices 16-Day L3 Global 500m [deprecated]

## What this dataset is

Global MODIS vegetation indices are designed to
provide consistent spatial and temporal comparisons of vegetation conditions.
Blue, red, and near-infrared reflectances, centered at 469-nanometers,
645-nanometers, and 858-nanometers, respectively, are used to determine the
MODIS daily vegetation indices.

The MODIS Normalized Difference Vegetation Index (NDVI) complements
NOAA's Advanced Very High Resolution Radiometer (AVHRR) NDVI products
provide continuity for time series historical applications. MODIS also
includes a new Enhanced Vegetation Index (EVI) that minimizes canopy
background variations and maintains sensitivity over dense vegetation
conditions. The EVI also uses the blue band to remove residual atmosphere
contamination caused by smoke and sub-pixel thin cloud clouds. The MODIS
NDVI and EVI products are computed from atmospherically corrected
bi-directional surface reflectances that have been masked for water, clouds,
heavy aerosols, and cloud shadows.

Global MYD13A1 data are provided every 16 days at 500-meter spatial
resolution as a gridded level-3 product in the Sinusoidal projection.
Vegetation indices are used for global monitoring of vegetation conditions
and are used in products displaying land cover and land cover changes. These
data may be used as input for modeling global biogeochemical and hydrologic
processes and global and regional climate. These data also may be used for
characterizing land surface biophysical properties and processes, including
primary production and land cover conversion.

Version-5 MODIS Vegetation Indices products have attained Validation Stage
3.

Vegetation Indices production is phased between Terra and Aqua
acquisitions, with Terra beginning on Day 001 and Aqua beginning on Day
008.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2017; resolution: 500 m.
- Time range: 2002-07-04 至 2017-03-14

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index | 500 |  |
| EVI | Enhanced Vegetation Index | 500 |  |
| DetailedQA | VI quality indicators | 500 |  |
| sur_refl_b01 | Red surface reflectance | 500 | 645nm |
| sur_refl_b02 | NIR surface reflectance | 500 | 858nm |
| sur_refl_b03 | Blue surface reflectance | 500 | 469nm |
| sur_refl_b07 | MIR surface reflectance | 500 | 2130nm/2105 - 2155nm |
| ViewZenith | View zenith angle | 500 |  |
| SolarZenith | Solar zenith angle | 500 |  |
| RelativeAzimuth | Relative azimuth angle | 500 |  |
| DayOfYear | Julian day of year | 500 |  |
| SummaryQA | Quality reliability of VI pixel | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MYD13A1');
```

- Earth Engine ID: `MODIS/MYD13A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD13A1

## License and citation

- License: proprietary
- Keywords: 16-day, aqua, evi, global, modis, myd13a1, ndvi, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
