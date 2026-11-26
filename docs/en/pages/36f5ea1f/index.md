---
title: "Global Ocean Sea Surface Salinity and Density (Daily)"
date: 2026-11-03 12:00:00
---

# Global Ocean Sea Surface Salinity and Density (Daily)

Original name: Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed

## What this dataset is

Think of it as a daily "saltiness map" of the world's oceans: for every day, it shows the salinity (how salty the water is) and density of the sea surface across the globe.

No single satellite produces it. Observations from several satellite missions (such as SMOS and SMAP) are blended with in-situ measurements from Argo floats and ship-based sensors, then combined with a multivariate optimal interpolation algorithm. The result is a gap-free global map — including a reprocessed historical record back to 1993 plus near-real-time updates.

## Coverage and time range

- Coverage: global ocean
- Time range: 1993-01-01 to 2024-12-15
- Cadence: daily

## Resolution and specifications

- Spatial resolution: about 14,000 m (a 1/8-degree grid; one pixel is roughly 14 km across)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sos | Sea Surface Salinity | 14000 |  |
| sos_error | Sea Surface Salinity Error | 14000 |  |
| dos | Sea Surface Density | 14000 |  |
| dos_error | Sea Surface Density Error | 14000 |  |
| sea_ice_fraction | Sea Surface Ice Fraction | 14000 |  |

## What you can use it for

- Monitoring the global water cycle — rainfall, evaporation and river runoff all change seawater salinity, so salinity acts as a fingerprint of the water cycle
- Studying ocean circulation changes driven by density variations
- Feeding climate models and ocean forecasting systems

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/REP_DAILY');
```

- Earth Engine ID: `COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/REP_DAILY`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY
- [User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-MOB-PUM-015-013.pdf)
- [Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-MOB-QUID-015-013.pdf)
- [Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

## License and citation

- License: CC-BY-4.0
- Keywords: copernicus, oceans
- Citation: Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface
Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is
providing daily Sea Surface Salinity and Sea Surface Density analyses.
[doi:10.48670/moi-00051](https://doi.org/10.48670/moi-00051)

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
