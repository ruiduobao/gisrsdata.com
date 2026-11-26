---
title: "MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m"
date: 2026-11-03 12:00:00
---

# MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m

Original name: MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m

## What this dataset is

The MOD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an
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

Class assignment in fill values 32761 through 32767 might be inaccurate. 
They are not included in the EE assets.

The Version 6.1 Level-1B (L1B) products have been improved by undergoing
various calibration changes that include: changes to the
response-versus-scan angle (RVS) approach that affects reflectance bands
for Aqua and Terra MODIS, corrections to adjust for the optical crosstalk
in Terra MODIS infrared (IR) bands, and corrections to the Terra MODIS
forward look-up table (LUT) update for the period 2012 - 2017.
A polarization correction has been applied to the L1B Reflective Solar
Bands (RSB). The product uses Climatology LAI/FPAR as back up to the
operational LAI/FPAR.

According to [the MODIS Science Team]
(https://forum.earthdata.nasa.gov/viewtopic.php?p=15070#p15070),
The MOD16A2 6.1 product will not have data prior to 2021. The MODIS Science 
team recommends using the gap-filled MOD16A2GF 6.1 product for data from
2000 to 2021 -- and then also 2022 when the data are available.
They recommend this as the gap-filled product is expected to be superior in
product quality, especially over areas where otherwise the routine product
performance would have been negatively impacted by cloudy or poor quality
input observations. For the current year, there will not be a gap-filled
product until early the following year (i.e. 2023 data should be available
in early 2024). So, if a user needs MOD16A2GF 6.1 data for the year 2023
(or the "current" year in the future), they recommend using the MOD16A2 6.1
product, which is generated using the daily observation with climatology
observation replacing for the cloudy or poor quality observations.

## Coverage and time range

- Coverage: Coverage: global; time span: 2021 to 2026; resolution: 500 m.
- Time range: 2021-01-01 至 2026-10-16

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
var dataset = ee.ImageCollection('MODIS/061/MOD16A2');
```

- Earth Engine ID: `MODIS/061/MOD16A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD16A2
* [User's Guide](https://lpdaac.usgs.gov/documents/494/MOD16_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2)

## License and citation

- License: proprietary
- Keywords: 8-day, evapotranspiration, global, mod16a2, modis, nasa, water-vapor
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m](/en/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
