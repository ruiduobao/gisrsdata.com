---
title: "MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km"
date: 2026-11-03 12:00:00
---

# MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km

Original name: MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km

## What this dataset is

The MOD21A1D dataset is produced daily from daytime Level 2 Gridded (L2G)
intermediate LST products at a spatial resolution of 1,000 meters. The L2G
process maps the daily MOD21 swath granules onto a sinusoidal MODIS grid and
stores all observations falling over a gridded cell for a given day. The
MOD21A1 algorithm sorts through these observations for each cell and
estimates the final LST value as an average from all observations that are
cloud free and have good LST&E accuracies. The daytime average is weighted
by the observation coverage for that cell. Only observations having an
observation coverage greater than a 15% threshold are considered. The
MOD21A1D product contains the calculated LST as well as quality control, the
three emissivity bands, view zenith angle, and time of observation.

Note that scale factors and offsets described in the MODIS documentation
for MOD21A1D bands are already applied to assets ingested into Earth
Engine.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 1 km.
- Time range: 2000-02-24 至 2026-10-29

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LST_1KM | Land Surface Temperature | 1000 |  |
| QC | Quality Control | 1000 |  |
| Emis_29 | Band 29 emissivity | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| View_Angle | MODIS view zenith angle | 1000 |  |
| View_Time | Time of MODIS observation | 1000 |  |

## What you can use it for

- Land surface temperature monitoring
- Urban heat island and climate research
- Drought and evapotranspiration assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD21A1D');
```

- Earth Engine ID: `MODIS/061/MOD21A1D`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD21A1D
* [User's Guide](https://lpdaac.usgs.gov/documents/1398/MOD21_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1399/MOD21_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD21A1D)

## License and citation

- License: proprietary
- Keywords: daily, emissivity, global, lst, nasa, surface-temperature, terra, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD21A1D.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)
- [MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG](/pages/4593321a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
