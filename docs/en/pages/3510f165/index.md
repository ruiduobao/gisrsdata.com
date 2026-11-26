---
title: "AG100: ASTER Global Emissivity Dataset 100-meter V003"
date: 2026-11-03 12:00:00
---

# AG100: ASTER Global Emissivity Dataset 100-meter V003

Original name: AG100: ASTER Global Emissivity Dataset 100-meter V003

## What this dataset is

The Advanced Spaceborne Thermal Emission and Reflection Radiometer Global
Emissivity Database (ASTER-GED) was developed by the National Aeronautics
and Space Administration's (NASA) Jet Propulsion Laboratory (JPL),
California Institute of Technology. This product includes the mean
emissivity and standard deviation for all 5 ASTER Thermal Infrared bands,
mean land surface temperature (LST) and standard deviation, a re-sampled
ASTER GDEM, land-water mask, mean Normalized Difference Vegetation Index
(NDVI) and standard deviation, and observation count.

ASTER-GED land surface temperature and emissivity (LST&E) are generated
using the ASTER Temperature Emissivity Separation (TES) algorithm in
combination with a Water Vapor Scaling (WVS) atmospheric correction method
using MODIS MOD07 atmospheric profiles and the MODTRAN 5.2 radiative
transfer model.

This product was derived from clear-sky pixels for all available ASTER data
(2000-2008).

[User's Guide] (https://lpdaac.usgs.gov/documents/120/ASTERGED_User_Guide_V3.pdf)

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2008; resolution: 100 m.
- Time range: 2000-01-01 至 2008-12-31

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| emissivity_band10 | Mean band 10 | 100 |  |
| emissivity_band11 | Mean band 11 | 100 |  |
| emissivity_band12 | Mean band 12 | 100 |  |
| emissivity_band13 | Mean band 13 | 100 |  |
| emissivity_band14 | Mean band 14 | 100 |  |
| emissivity_sdev_band10 | Standard deviation band 10 | 100 |  |
| emissivity_sdev_band11 | Standard deviation band 11 | 100 |  |
| emissivity_sdev_band12 | Standard deviation band 12 | 100 |  |
| emissivity_sdev_band13 | Standard deviation band 13 | 100 |  |
| emissivity_sdev_band14 | Standard deviation band 14 | 100 |  |
| temperature | Temperature mean | 100 |  |
| temperature_sdev | Temperature standard deviation | 100 |  |
| ndvi | NDVI mean | 100 |  |
| ndvi_sdev | NDVI standard deviation | 100 |  |
| elevation | ASTER Global Digital Elevation Model V002 | 100 |  |
| land_water_map | Land water map | 100 |  |
| num_obs | Number of observations | 100 |  |

## What you can use it for

- LST and emissivity retrieval
- Thermal infrared remote sensing research
- Climate and land surface process modeling

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('NASA/ASTER_GED/AG100_003');
```

- Earth Engine ID: `NASA/ASTER_GED/AG100_003`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_ASTER_GED_AG100_003

## License and citation

- License: proprietary
- Keywords: aster, caltech, elevation, emissivity, ged, geophysical, infrared, jpl, lst, nasa, ndvi, satellite-imagery, temperature, thermal
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/COMMUNITY/ASTER_GED/AG100.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
