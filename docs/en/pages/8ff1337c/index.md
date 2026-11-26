---
title: "MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m"
date: 2026-11-03 12:00:00
---

# MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m

Original name: MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m

## What this dataset is

The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) MOD16A2GF
Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE) product is a
year-end gap-filled 8-day composite dataset produced at 500 meter (m) pixel
resolution. The algorithm used for the MOD16 data product collection is
based on the logic of the Penman-Monteith equation, which includes inputs of
daily meteorological reanalysis data along with MODIS remotely sensed data
products such as vegetation property dynamics, albedo, and land cover.

The pixel values for the two Evapotranspiration layers (ET and PET) are the
sum of all eight days within the composite period, and the pixel values for
the two Latent Heat layers (LE and PLE) are the average of all eight days
within the composite period. The last acquisition period of each year is a
5 or 6-day composite period, depending on the year.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2025; resolution: 500 m.
- Time range: 2000-01-01 至 2025-12-27

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ET | Total evapotranspiration | 500 |  |
| LE | Average latent heat flux | 500 |  |
| PET | Total potential evapotranspiration | 500 |  |
| PLE | Average potential latent heat flux | 500 |  |
| ET_QC | Evapotranspiration quality control flags | 500 |  |

## What you can use it for

- Evapotranspiration and water resources assessment
- Drought monitoring
- Irrigation management

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD16A2GF');
```

- Earth Engine ID: `MODIS/061/MOD16A2GF`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD16A2GF
* [User's Guide](https://lpdaac.usgs.gov/documents/931/MOD16_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2GF)

## License and citation

- License: proprietary
- Keywords: 8-day, evapotranspiration, global, modis, nasa, water-vapor
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2GF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
