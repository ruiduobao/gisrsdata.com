---
title: "GCOM-C/SGLI L3 Leaf Area Index (V1)"
date: 2026-11-03 12:00:00
---

# GCOM-C/SGLI L3 Leaf Area Index (V1)

Original name: GCOM-C/SGLI L3 Leaf Area Index (V1)

## What this dataset is

This product is the sum of the one-sided green leaf area per unit ground area.

A newer version [JAXA/GCOM-C/L3/LAND/LAI/V3](JAXA_GCOM-C_L3_LAND_LAI_V3) is also available
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
| LAI_AVE | The sum of the one-sided green leaf area per unit ground area. | 4638.3 |  |
| LAI_QA_flag | LAI QA | 4638.3 |  |

## What you can use it for

- Vegetation growth and phenology monitoring
- Inputs for carbon-cycle and ecosystem models
- Crop yield estimation and drought assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/LAND/LAI/V1');
```

- Earth Engine ID: `JAXA/GCOM-C/L3/LAND/LAI/V1`
- Providers: Global Change Observation Mission (GCOM), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_LAND_LAI_V1

## License and citation

- License: proprietary
- Keywords: g-portal, gcom, gcom-c, jaxa, lai, land, leaf-area-index, vegetation-indices
- 数据引用：Ono, Y. (Nov. 2011). GCOM-C1 / SGLI LAI Product Algorithm Theoretical Basis Document
(Version 1). Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/Ono_Y_ATBD.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/Ono_Y_ATBD.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/pages/9acc1a9f/)
- [GCOM-C/SGLI L3 Leaf Area Index (V3)](/pages/61d677e1/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
