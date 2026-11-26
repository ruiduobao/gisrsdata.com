---
title: "MOD09GQ.006 Terra Surface Reflectance Daily Global 250m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD09GQ.006 Terra Surface Reflectance Daily Global 250m [deprecated]

Original name: MOD09GQ.006 Terra Surface Reflectance Daily Global 250m [deprecated]

## What this dataset is

The MODIS Surface Reflectance products provide an estimate
of the surface spectral reflectance as it would be measured at
ground level in the absence of atmospheric scattering or absorption.
Low-level data are corrected for atmospheric gases and aerosols.
MOD09GQ version 6 provides bands 1 and 2 at a 250m resolution in
a daily gridded L2G product in the Sinusoidal projection, including
a QC and five observation layers. This product is meant to be used
in conjunction with the MOD09GA where important quality and viewing
geometry information is stored.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 250 m.
- Time range: 2000-02-24 至 2023-02-17

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| num_observations | Number of observations per 250m pixel | 250 |  |
| sur_refl_b01 | Surface reflectance band 1 | 250 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 250 | 841-876nm |
| QC_250m | Surface reflectance quality assurance | 250 |  |
| obscov | Observation coverage percent | 250 |  |
| iobs_res | Observation number | 250 |  |
| orbit_pnt | Orbit pointer | 250 |  |
| granule_pnt | Granule pointer | 250 |  |

## What you can use it for

- Land-cover and vegetation monitoring
- Global change research
- Remote sensing algorithm validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MOD09GQ');
```

- Earth Engine ID: `MODIS/006/MOD09GQ`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD09GQ
* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD09GQ)

## License and citation

- License: proprietary
- Keywords: daily, global, mod09gq, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09GQ.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]](/pages/dba783be/)
- [MCD43A2.006 MODIS BRDF-Albedo Quality Daily 500m [deprecated]](/pages/3081c095/)
- [MCD43A3.006 MODIS Albedo Daily 500m [deprecated]](/pages/96c6f8ff/)
- [MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]](/pages/23f81408/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
