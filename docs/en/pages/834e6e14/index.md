---
title: "GCOM-C/SGLI L3 Chlorophyll-a Concentration (V2)"
date: 2026-11-03 12:00:00
---

# GCOM-C/SGLI L3 Chlorophyll-a Concentration (V2)

Original name: GCOM-C/SGLI L3 Chlorophyll-a Concentration (V2)

## What this dataset is

This product is the concentration of the photosynthetic pigment (chlorophyll-a) in phytoplankton
in the sea surface layer.

For data after 2021-11-28, see [the V3 dataset](JAXA/GCOM-C/L3/LAND/CHLA/V3).

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

- Coverage: Coverage: global oceans; time span: 1 January 2018 to 28 November 2021; resolution: about 4,638 m.
- Time range: 2018-01-01 至 2021-11-28

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| CHLA_AVE | Concentration of the green pigment (chlorophyll-a) in phytoplankton in sea surface layer. | 4638.3 |  |
| CHLA_QA_flag | CHLA QA | 4638.3 |  |

## What you can use it for

- Ocean primary production and phytoplankton monitoring
- Fisheries and harmful algal bloom warning
- Ocean carbon cycle research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/OCEAN/CHLA/V2');
```

- Earth Engine ID: `JAXA/GCOM-C/L3/OCEAN/CHLA/V2`
- Providers: Global Change Observation Mission (GCOM), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_OCEAN_CHLA_V2

## License and citation

- License: proprietary
- Keywords: chla, chlorophyll-a, g-portal, gcom, gcom-c, jaxa, ocean-color, oceans
- 数据引用：Murakami, H. (Jan. 2020). ATBD of GCOM-C chlorophyll-a concentration algorithm (Version 2).
Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_O3AB_Chla_Murakami.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_O3AB_Chla_Murakami.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)](/pages/9e90afdc/)
- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V3)](/pages/7e6d6232/)
- [GCOM-C/SGLI L3 Sea Surface Temperature (V1)](/pages/e9d27326/)
- [GCOM-C/SGLI L3 Sea Surface Temperature (V2)](/pages/f830a5c2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
