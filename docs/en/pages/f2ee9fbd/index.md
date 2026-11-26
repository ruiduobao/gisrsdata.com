---
title: "MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m"
date: 2026-11-03 12:00:00
---

# MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m

Original name: MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m

## What this dataset is

The MODIS Surface Reflectance products provide an estimate
of the surface spectral reflectance as it would be measured at
ground level in the absence of atmospheric scattering or absorption.
Low-level data are corrected for atmospheric gases and aerosols.
MOD09GA version 6.1 provides bands 1-7 in a daily gridded L2G product
in the sinusoidal projection, including 500m reflectance values
and 1km observation and geolocation statistics.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 500 m and 1 km.
- Time range: 2000-02-24 至 2026-10-31

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
var dataset = ee.ImageCollection('MODIS/061/MOD09GA');
```

- Earth Engine ID: `MODIS/061/MOD09GA`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD09GA
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD09GA)

## License and citation

- License: proprietary
- Keywords: daily, global, mod09ga, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09GA.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
