---
title: "GSMaP Reanalysis: Global Satellite Mapping of Precipitation"
date: 2026-11-03 12:00:00
---

# GSMaP Reanalysis: Global Satellite Mapping of Precipitation

Original name: GSMaP Reanalysis: Global Satellite Mapping of Precipitation

## What this dataset is

Global Satellite Mapping of Precipitation (GSMaP) provides
a global hourly rain rate with a 0.1 x 0.1 degree resolution. GSMaP
is a product of the Global Precipitation Measurement (GPM) mission,
which provides global precipitation observations at three hour
intervals.  Values are estimated using multi-band passive microwave
and infrared radiometers from the GPM Core Observatory satellite
and with the assistance of a constellation of other satellites.  GPM's
precipitation rate retrieval algorithm is based on a radiative
transfer model. The gauge-adjusted rate is calculated based on
the optimization of the 24h accumulation of GSMaP hourly rain rate
to daily precipitation by NOAA/CPC gauge measurement. This dataset
is processed by GSMaP algorithm version 6 (product version 3).
See [GSMaP Technical Documentation](https://www.eorc.jaxa.jp/GPM/doc/algorithm/GSMaPforGPM_20140902_E.pdf)
for more details.

The operational GSMaP dataset (from 2014 to present)
is also [available](JAXA_GPM_L3_GSMaP_v6_operational].

## Coverage and time range

- Coverage: Coverage: global; time span: 1 March 2000 to 12 March 2014; resolution: about 11,132 m (0.1 x 0.1 degree).
- Time range: 2000-03-01 至 2014-03-12

## Resolution and specifications

- Spatial resolution: about 11,132 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| satelliteInfoFlag | Satellite/sensor used | 11132 |  |
| hourlyPrecipRate | Snapshot of hourly precipitation rate | 11132 |  |
| hourlyPrecipRateGC | Snapshot of hourly precipitation rate adjusted to rain gauge | 11132 |  |
| observationTimeFlag | Relative time from the starting time of the file to the time of microwave radiometer (imager/sounder) observing. If no observation exists within the hourly window, the time will be the negative number of hours since the last observation. | 11132 |  |
| gaugeQualityInfo | Existence of gauge adjustment when the status is 'provisional', 1 indicates adjusted and 0 is non-adjusted. When the status is 'permanent', the pixel value is the daily average of number of gauges used for adjustment in the pixel. | 11132 |  |

## What you can use it for

- Global precipitation monitoring and flood early warning
- Hydrological modelling and water resources assessment
- Climate and extreme precipitation research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/GPM_L3/GSMaP/v6/reanalysis');
```

- Earth Engine ID: `JAXA/GPM_L3/GSMaP/v6/reanalysis`
- Providers: JAXA Earth Observation Research Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v6_reanalysis

## License and citation

- License: proprietary
- Keywords: climate, geophysical, gpm, hourly, jaxa, precipitation, weather
- 数据引用：Kubota, T., K. Aonashi, T. Ushio, S. Shige, Y. N. Takayabu, M. Kachi,
Y. Arai, T. Tashima, T. Masaki, N. Kawamoto, T. Mega, M. K. Yamamoto,
A. Hamada, M. Yamaji, G. Liu and R. Oki 2020: Global Satellite Mapping of
Precipitation (GSMaP) products in the GPM era, Satellite precipitation
measurement, Springer, https://doi.org/10.1007/978-3-030-24568-9_20.

- DOI：10.57746/EO.01gs73bkt358gfpy92y2qns5e9

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GSMaP Operational: Global Satellite Mapping of Precipitation - V6](/pages/dd0d38ad/)
- [GSMaP Operational: Global Satellite Mapping of Precipitation - V7](/pages/b305a6bc/)
- [GSMaP Operational: Global Satellite Mapping of Precipitation - V8](/pages/b5eebef7/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
