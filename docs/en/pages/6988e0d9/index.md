---
title: "MOD11A2.006 Terra Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD11A2.006 Terra Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]

Original name: MOD11A2.006 Terra Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]

## What this dataset is

The MOD11A2 V6 product provides an average 8-day land
surface temperature (LST)  in a 1200 x 1200 kilometer grid.  Each
pixel value in MOD11A2 is a simple average of all the corresponding
MOD11A1 LST pixels collected within that 8 day period.  The 8 day
compositing period was chosen because twice that period is the
exact ground track repeat period of the Terra and Aqua platforms.
In this product, along with both the day- and night-time surface
temperature bands and their quality indicator (QC) layers, are
also MODIS bands 31 and 32 and eight observation layers.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2022; resolution: 1 km.
- Time range: 2000-02-18 至 2022-11-09

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LST_Day_1km | Day land surface temperature | 1000 |  |
| QC_Day | Daytime LST quality indicators | 1000 |  |
| Day_view_time | Local time of day observation | 1000 |  |
| Day_view_angl | View zenith angle of day observation | 1000 |  |
| LST_Night_1km | Night land surface temperature | 1000 |  |
| QC_Night | Nighttime LST quality indicators | 1000 |  |
| Night_view_time | Local time of night observation | 1000 |  |
| Night_view_angl | View zenith angle of night observation | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| Clear_sky_days | Days in clear-sky conditions | 1000 |  |
| Clear_sky_nights | Nights in clear-sky conditions | 1000 |  |

## What you can use it for

- Land surface temperature monitoring
- Urban heat island and climate research
- Drought and evapotranspiration assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MOD11A2');
```

- Earth Engine ID: `MODIS/006/MOD11A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD11A2
* [User's Guide](https://lpdaac.usgs.gov/documents/118/MOD11_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/119/MOD11_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD11A2)

## License and citation

- License: proprietary
- Keywords: 8-day, emissivity, global, lst, mod11a2, modis, nasa, surface-temperature, terra, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD11A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD11A1.006 Terra Land Surface Temperature and Emissivity Daily Global 1km [deprecated]](/pages/9c921324/)
- [MYD11A1.006 Aqua Land Surface Temperature and Emissivity Daily Global 1km [deprecated]](/pages/316e7556/)
- [MYD11A2.006 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]](/pages/7156a737/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
