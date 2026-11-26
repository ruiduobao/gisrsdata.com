---
title: "TOMS and OMI Merged Ozone Data v3 [deprecated]"
date: 2026-11-03 12:00:00
---

# TOMS and OMI Merged Ozone Data v3 [deprecated]

Original name: TOMS and OMI Merged Ozone Data v3 [deprecated]

## What this dataset is

The Total Ozone Mapping Spectrometer (TOMS) data represent the primary
long-term, continuous record of satellite-based observations available for
use in monitoring global and regional trends in total ozone over the past
25 years. The data are produced by the Laboratory for Atmospheres at NASA's
Goddard Space Flight Center. Version 8 TOMS data products include level 3
gridded data (1.0 x 1.25 deg). The Ozone Monitoring Instrument (OMI), aboard
the Aura satellite (July 2004 - current), has a higher resolution
(1.0 x 1.0 deg).

These data represent a merged ozone product from TOMS/EarthProbe,
TOMS/Nimbus-7, TOMS/Meteor-3, OMI/Aura and USGS-interpolated data for dates
with no data.

[Additional TOMS and OMI information](https://ozoneaq.gsfc.nasa.gov/missions/)

## Coverage and time range

- Coverage: Spatial: global; temporal: 1978 to present; resolution: 111,000 m (about 1 degree).
- Time range: 1978-11-01 至 2026-04-11

## Resolution and specifications

- Spatial resolution: about 111,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ozone | Total column ozone | 111000 |  |

## What you can use it for

- Monitor global ozone-layer change and ozone-hole evolution.
- Atmospheric chemistry and UV radiation studies.
- Validate ozone simulations in chemistry-climate models.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('TOMS/MERGED');
```

- Earth Engine ID: `TOMS/MERGED`
- Providers: NASA / GES DISC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TOMS_MERGED

## License and citation

- License: proprietary
- Keywords: atmosphere, aura, climate, geophysical, ges-disc, goddard, nasa, omi, ozone, toms, weather-and-climate
- 数据引用：The data set source should be properly cited when the data are used.
A formal reference of the form: \<authors\>, 2012, last updated 2013:
\<dataset name\>. NASA/GSFC, Greenbelt, MD, USA, NASA Goddard Earth Sciences
Data and Information Services Center (GES DISC). Accessed
\<enter user data access date\> at \<DOI\> is suggested following
Parsons et al. (2010),
[doi:10.1029/2010EO340001](https://doi.org/10.1029/2010EO340001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/64c851e2/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
