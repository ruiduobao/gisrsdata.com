---
title: "MYD09GA.006 Aqua Surface Reflectance Daily Global 1km and 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MYD09GA.006 Aqua Surface Reflectance Daily Global 1km and 500m [deprecated]

Original name: MYD09GA.006 Aqua Surface Reflectance Daily Global 1km and 500m [deprecated]

## What this dataset is

The MODIS Surface Reflectance products provide an estimate
of the surface spectral reflectance as it would be measured at
ground level in the absence of atmospheric scattering or absorption.
Low-level data are corrected for atmospheric gases and aerosols.
MYD09GA version 6 provides bands 1-7 in a daily gridded L2G product
in the sinusoidal projection, including 500m reflectance values
and 1km observation and geolocation statistics.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2023; resolution: 500 m and 1 km.
- Time range: 2002-07-04 至 2023-02-25

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| num_observations_1km | Number of observations per 1K pixel | 1000 |  |
| state_1km | Reflectance data state QA | 1000 |  |
| SensorZenith | Sensor zenith angle | 1000 |  |
| SensorAzimuth | Sensor azimuth angle | 1000 |  |
| Range | Distance to sensor | 1000 |  |
| SolarZenith | Solar zenith angle | 1000 |  |
| SolarAzimuth | Solar azimuth angle | 1000 |  |
| gflags | Geolocation flags | 1000 |  |
| orbit_pnt | Orbit pointer | 1000 |  |
| granule_pnt | Granule pointer | 1000 |  |
| num_observations_500m | Number of observations | 500 |  |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QC_500m | Surface reflectance quality assurance | 500 |  |
| obscov_500m | Observation coverage percent | 500 |  |
| iobs_res | Observation number in coarser grid | 500 |  |
| q_scan | 250m scan value information | 500 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MYD09GA');
```

- Earth Engine ID: `MODIS/006/MYD09GA`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD09GA
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD09GA)

## License and citation

- License: proprietary
- Keywords: aqua, daily, global, modis, myd09ga, nasa, satellite-imagery, sr, surface-reflectance, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09GA.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
