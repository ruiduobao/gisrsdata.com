---
title: "MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km"
date: 2026-11-03 12:00:00
---

# MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km

Original name: MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km

## What this dataset is

The MOD11A1 V6.1 product provides daily land surface temperature
(LST) and emissivity values in a 1200 x 1200 kilometer grid. The
temperature value is derived from the MOD11_L2 swath product. Above
30 degrees latitude, some pixels may have multiple observations
where the criteria for clear-sky are met. When this occurs, the
pixel value is the average of all qualifying observations. Provided
along with both the day-time and night-time surface temperature
bands and their quality indicator layers are MODIS bands 31 and
32 and six observation layers.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 1 km.
- Time range: 2000-02-24 至 2026-10-30

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LST_Day_1km | Daytime Land Surface Temperature | 1000 |  |
| QC_Day | Daytime LST Quality Indicators | 1000 |  |
| Day_view_time | Local time of day observation | 1000 |  |
| Day_view_angle | View zenith angle of day observation | 1000 |  |
| LST_Night_1km | Nighttime Land Surface Temperature | 1000 |  |
| QC_Night | Nighttime LST Quality indicators | 1000 |  |
| Night_view_time | Local time of night observation | 1000 |  |
| Night_view_angle | View zenith angle of night observation | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| Clear_day_cov | Day clear-sky coverage | 1000 |  |
| Clear_night_cov | Night clear-sky coverage | 1000 |  |

## What you can use it for

- Land surface temperature monitoring
- Urban heat island and climate research
- Drought and evapotranspiration assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MOD11A1');
```

- Earth Engine ID: `MODIS/061/MOD11A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD11A1
* [User's Guide](https://lpdaac.usgs.gov/documents/118/MOD11_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/119/MOD11_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD11A1)

## License and citation

- License: proprietary
- Keywords: daily, emissivity, global, lst, mod11a1, modis, nasa, surface-temperature, terra, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD11A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)
- [MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG](/pages/4593321a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
