---
title: "PDSI: University of Idaho Palmer Drought Severity Index [deprecated]"
date: 2026-11-03 12:00:00
---

# PDSI: University of Idaho Palmer Drought Severity Index [deprecated]

Original name: PDSI: University of Idaho Palmer Drought Severity Index [deprecated]

## What this dataset is

The Palmer Drought Severity Index dataset provides
high spatial resolution (~4-km) thrice-monthly estimates of this
widely used measure of integrated water supply and demand anomalies
across the contiguous United States from 1979-present. The PDSI
is calculated using precipitation and potential evapotranspiration
derived from the gridded meteorological dataset of Abatzoglou (2013).

Potential evapotranspiration is computed using the Penman-Montieth
equation for a reference grass surface. Available soil water holding
capacity in the top 2.5m of the soil was derived from the STATSGO
soils database and used in the computations. Whereas PDSI has typically
been computed on monthly timescales, we compute these data three-times
a month to provide more timely updates. Due to the spin-up of PDSI
calculations, data for the first year of record should be used
sparingly.

This dataset contains provisional products that are replaced with
updated versions when the complete source data become available.
Products can be distinguished by the value of the 'status' property.
At first, assets are ingested with status='early'. After several
days, they are replaced by assets with status='provisional'.
After about 2 months, they are replaced by the final assets with
status='permanent'.

## Coverage and time range

- Coverage: Contiguous United States
- Time range: 1979-03-01 至 2020-06-20

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| pdsi | Possible values: 4.0 or more (extremely wet), 3.0 to 3.99 (very wet), 2.0 to 2.99 (moderately wet), 1.0 to 1.99 (slightly wet), 0.5 to 0.99 (incipient wet spell), 0.49 to -0.49 (near normal), -0.5 to -0.99 (incipient dry spell), -1.0 to -1.99 (mild drought), -2.0 to -2.99 (moderate drought), -3.0 to -3.99 (severe drought), or -4.0 or less (extreme drought). | 4638.3 |  |

## What you can use it for

- Drought monitoring
- Agricultural and water resources assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/PDSI');
```

- Earth Engine ID: `IDAHO_EPSCOR/PDSI`
- Providers: University of California Merced, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_PDSI

## License and citation

- License: proprietary
- Keywords: climate, conus, crop, drought, geophysical, merced, palmer, pdsi, precipitation, water-vapor
- 数据引用：Abatzoglou J.T., R. Barbero, J.W. Wolf, Z. Holden (2014), Tracking
interannual streamflow variability with drought indices in the
Pacific Northwest, US, Journal of Hydrometeorology, 15, 1900-1912.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
