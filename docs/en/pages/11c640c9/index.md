---
title: "NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2"
date: 2026-11-03 12:00:00
---

# NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2

Original name: NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2

## What this dataset is

The Ocean Near-Surface Atmospheric Properties dataset is part of the NOAA
Ocean Surface Bundle (OSB) and provides a high quality Climate Data Record
(CDR) of air temperature, wind speed, and specific humidity over ice-free
ocean surfaces.

These atmospheric properties are calculated based on brightness temperature
data from the Special Sensor Microwave/Imager (SSM/I) and the Special Sensor
Microwave/Imager Sounder (SSMIS) on the Defense Meteorological Satellite
Program (DMSP) spacecraft, using a neural network.

## Coverage and time range

- Coverage: Coverage: global oceans; time span: 1988 to 2021; resolution: 27,830 m.
- Time range: 1988-01-01 至 2021-08-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| air_temperature | Air temperature at 10m | 27830 |  |
| specific_humidity | Specific humidity at 10m | 27830 |  |
| wind_speed | Wind speed at 10m | 27830 |  |
| fill_missing_qc | Quality control flags | 27830 |  |

## What you can use it for

- Ocean climate data records
- Air-sea interaction research
- Climate monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/ATMOS_NEAR_SURFACE/V2');
```

- Earth Engine ID: `NOAA/CDR/ATMOS_NEAR_SURFACE/V2`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2

## License and citation

- License: proprietary
- Keywords: air-temperature, atmospheric, cdr, hourly, humidity, noaa, oceans, osb, wind
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record
(CDR) of Near-surface Atmospheric Properties, Version 2. [indicate subset
used]. NOAA National ClimaticData Center. [doi:10.7289/V55T3HH0](https://doi.org/10.7289/V55T3HH0).

- DOI：10.7289/V55T3HH0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature](/en/pages/18f0f810/)
- [NOAA CDR WHOI: Sea Surface Temperature, Version 2](/en/pages/4fef452a/)
- [NOAA CDR: Ocean Heat Fluxes, Version 2](/en/pages/ab47b752/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
