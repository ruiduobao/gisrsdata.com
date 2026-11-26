---
title: "MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]

Original name: MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]

## What this dataset is

The MOD16A2 Version 6 Evapotranspiration/Latent Heat Flux product is an
8-day composite product produced at 500 meter pixel resolution. The
algorithm used for the MOD16 data product collection is based on the logic
of the Penman-Monteith equation, which includes inputs of daily
meteorological reanalysis data along with MODIS remotely sensed data
products such as vegetation property dynamics, albedo, and land cover.

The pixel values for the two Evapotranspiration layers (ET & PET) are the
sum of all eight days within the composite period. The pixel values for
the two Latent Heat layers (LE & PLE) are the average of all eight days
within the composite period. Note that the last 8-day period of each year
is a 5 or 6-day composite period, depending on the year.

According to
[the \"Layers\" section of the dataset docs](https://lpdaac.usgs.gov/products/mod16a2v006),
the class assignment in fill values 32761 through 32767 might be inaccurate.
They are not included in the EE assets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2001 to 2023; resolution: 500 m.
- Time range: 2001-01-01 至 2023-02-02

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
var dataset = ee.ImageCollection('MODIS/006/MOD16A2');
```

- Earth Engine ID: `MODIS/006/MOD16A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD16A2
* [User's Guide](https://lpdaac.usgs.gov/documents/494/MOD16_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2)

## License and citation

- License: proprietary
- Keywords: 8-day, evapotranspiration, global, mod16a2, modis, nasa, water-vapor
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]](/pages/762d4697/)
- [MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]](/pages/7a44de8e/)
- [MOD13A2.006 Terra Vegetation Indices 16-Day Global 1km [deprecated]](/pages/9296243b/)
- [MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m [deprecated]](/pages/7d865478/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
