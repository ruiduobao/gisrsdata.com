---
title: "MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated]

Original name: MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated]

## What this dataset is

The MODIS Normalized Difference Vegetation Index
(NDVI) complements NOAA's Advanced Very High Resolution Radiometer (AVHRR) NDVI
products and provides continuity for time series historical applications. MODIS
also includes a new Enhanced Vegetation Index (EVI) that minimizes canopy
background variations and maintains sensitivity over dense vegetation
conditions. The EVI also uses the blue band to remove residual atmosphere
contamination caused by smoke and sub-pixel thin cloud clouds. The MODIS NDVI
and EVI products are computed from atmospherically corrected bi-directional
surface reflectances that have been masked for water, clouds, heavy aerosols,
and cloud shadows.

MOD13AQ1 is comprised of the following layers:

- NDVI: Normalized Difference Vegetation Index, Scale 0.0001
- EVI: Enhanced Vegetation Index, Scale 0.0001
- DetailedQA: VI Quality, see MOD13Q1 VI Quality
- sur_refl_b01: Red surface reflectance, scale 0.0001
- sur_refl_b02: NIR surface reflectance, scale 0.0001
- sur_refl_b03: Blue surface reflectance, scale 0.0001
- sur_refl_b07: MIR surface reflectance, scale 0.0001
- ViewZenith: View zenith angle, scale 0.01
- SolarZenith: Solar zenith angle, scale 0.01
- RelativeAzimuth: Relative azimuth angle, scale 0.1
- DayOfYear: Julian day of year
- SummaryQA: Pixel reliability summary QA
   - -1 Fill/No data: Not processed
   - 0 Good data: Use with confidence
   - 1 Marginal data: Useful but look at detailed QA for more information
   - 2 Snow/ice: Pixel covered with snow/ice
   - 3: Cloudy: Pixel is cloudy

MOD13Q1 IV Quality

- Bits 0-1: MODLAND_QA
   - 00 (0): VI produced, good quality
   - 01 (1): VI produced, check other QA
   - 10 (2): Pixel produced, probably cloudy
   - 11 (3): Pixel not produced due to other reason (not clouds)
- Bits 2-5: VI Usefulness
   - 0000 (0): Highest quality
   - 0001 (1): Lower quality
   - 0010 (2): Decreasing quality
   - 0100 (4): Decreasing quality
   - 1000 (8): Decreasing quality
   - 1001 (9): Decreasing quality
   - 1010 (10): Decreasing quality
   - 1100 (12): Lowest quality
   - 1101 (13): Quality so low that it is not useful
   - 1110 (14): L1B data faulty
   - 1111 (15): Not useful for any other reason/not processed
- Bits 6-7: Aerosol quantity
   - 00 (0): Climatology
   - 01 (1): Low
   - 10 (2): Average
   - 11 (3): High
- Bit 8: Adjacent cloud detected
   - 0: No
   - 1: Yes
- Bit 9: Atmosphere BRDF correction performed
   - 0: No
   - 1: Yes
- Bit 10: Mixed Clouds
    - 0: No
    - 1: Yes
- Bits 11-13: Land/Water flag
   - 000 (0): Shallow ocean
   - 001 (1): Land
   - 010 (2): Ocean coastlines and lake shorelines
   - 011 (3): Shallow inland water
   - 100 (4): Ephemeral water
   - 101 (5): Deep inland water
   - 110 (6): Moderate or continental ocean
   - 111 (7): Deep ocean
- Bit 14: Possible snow/ice
   - 0: No
   - 1: Yes
- Bit 15: Possible shadow
   - 0: No
   - 1: Yes

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2017; resolution: 250 m.
- Time range: 2000-02-18 至 2017-03-06

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index | 250 |  |
| EVI | Enhanced Vegetation Index | 250 |  |
| DetailedQA | VI quality indicators | 250 |  |
| sur_refl_b01 | Red surface reflectance | 250 | 645nm |
| sur_refl_b02 | NIR surface reflectance | 250 | 858nm |
| sur_refl_b03 | Blue surface reflectance | 250 | 469nm |
| sur_refl_b07 | MIR surface reflectance | 250 | 2130nm/2105 - 2155nm |
| ViewZenith | View zenith angle | 250 |  |
| SolarZenith | Solar zenith angle | 250 |  |
| RelativeAzimuth | Relative azimuth angle | 250 |  |
| DayOfYear | Julian day of year | 250 |  |
| SummaryQA | Quality reliability of VI pixel | 250 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MOD13Q1');
```

- Earth Engine ID: `MODIS/MOD13Q1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1

## License and citation

- License: proprietary
- Keywords: 16-day, evi, global, mod13q1, modis, ndvi, terra, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
