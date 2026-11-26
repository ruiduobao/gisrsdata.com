---
title: "GCOM-C/SGLI L3 Land Surface Temperature (V1)"
date: 2026-11-03 12:00:00
---

# GCOM-C/SGLI L3 Land Surface Temperature (V1)

Original name: GCOM-C/SGLI L3 Land Surface Temperature (V1)

## What this dataset is

This product is the temperature of terrestrial land surface.

A newer version [JAXA/GCOM-C/L3/LAND/LST/V3](JAXA_GCOM-C_L3_LAND_LST_V3) is also available
for this dataset which uses this [algorithm](https://suzaku.eorc.jaxa.jp/GCOM_C/data/product_std.html)
for processing.

GCOM-C conducts long-term and continuous global observation and data collection to elucidate the
mechanism behind fluctuations in radiation budget and carbon cycle needed to make accurate
projections regarding future temperature rise. At the same time, cooperating with research
institutions having a climate numerical model, it contributes to reduction of errors in
temperature rise prediction derived from the climate numerical model and improvement of accuracy
of prediction of various environmental changes. SGLI mounted on GCOM-C is the succession sensor
of the Global Imager (GLI) mounted on ADEOS-II (MIDORI II) and is the Imaging Radiometer which
measures the radiation from near-ultraviolet to thermal infrared region (380 nm-12 um) in 19
channels. Global observation of once for approximately every two days is possible at
mid-latitude near Japan by observation width at ground greater than 1,000 km. In addition, SGLI
realizes high resolution than the similar global sensor and has a polarized observation function
and a multi-angle observation function.

## Coverage and time range

- Coverage: Coverage: global; time span: 1 January 2018 to 28 June 2020; resolution: about 4,638 m.
- Time range: 2018-01-01 至 2020-06-28

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LST_AVE | Temperature of land surface. | 4638.3 |  |
| LST_QA_flag | LST QA | 4638.3 |  |

## What you can use it for

- Land surface temperature and urban heat island analysis
- Evapotranspiration and drought monitoring
- Climate change research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/LAND/LST/V1');
```

- Earth Engine ID: `JAXA/GCOM-C/L3/LAND/LST/V1`
- Providers: Global Change Observation Mission (GCOM), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_LAND_LST_V1

## License and citation

- License: proprietary
- Keywords: climate, g-portal, gcom, gcom-c, jaxa, land, land-surface-temperature, lst, weather-and-climate
- 数据引用：Moriyama, M. (Sep. 2014). GCOM-C1/SGLI Land Surface Temperature Product Algorithm Theoretical
Basis Document (Version 1). Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/LST-ATBD_2014.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/LST-ATBD_2014.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GCOM-C/SGLI L3 Land Surface Temperature (V2)](/pages/92e78526/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V3)](/pages/318eee27/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
