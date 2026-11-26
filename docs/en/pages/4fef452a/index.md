---
title: "NOAA CDR WHOI: Sea Surface Temperature, Version 2"
date: 2026-11-03 12:00:00
---

# NOAA CDR WHOI: Sea Surface Temperature, Version 2

Original name: NOAA CDR WHOI: Sea Surface Temperature, Version 2

## What this dataset is

The Sea Surface Temperature - WHOI dataset is part of the NOAA Ocean Surface
Bundle (OSB) and provides a high quality Climate Data Record (CDR) of sea
surface temperature over ice-free oceans.

The SST values are found through modeling the diurnal variability in
combination with AVHRR observations of sea surface temperature.

## Coverage and time range

- Coverage: Coverage: global oceans; time span: 1988 to 2021; resolution: 27,830 m.
- Time range: 1988-01-01 至 2021-08-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sea_surface_temperature | Optimum Interpolation Sea Surface Temperature (OISST), with a diurnal warming correction | 27830 |  |
| fill_missing_qc | Quality control flags | 27830 |  |

## What you can use it for

- Sea surface temperature monitoring
- Ocean climate research
- Fisheries and marine ecology applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/SST_WHOI/V2');
```

- Earth Engine ID: `NOAA/CDR/SST_WHOI/V2`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_SST_WHOI_V2

## License and citation

- License: proprietary
- Keywords: atmospheric, cdr, hourly, noaa, oceans, oisst, osb, sst, whoi
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record (CDR) of
Sea Surface Temperature - WHOI, Version 2. [indicate subset used]. NOAA
National Climatic Data Center. [doi:10.7289/V5FB510W](https://doi.org/10.7289/V5FB510W).

- DOI：10.7289/V5FB510W

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature](/en/pages/18f0f810/)
- [NOAA CDR: Ocean Heat Fluxes, Version 2](/en/pages/ab47b752/)
- [NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2](/en/pages/11c640c9/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
