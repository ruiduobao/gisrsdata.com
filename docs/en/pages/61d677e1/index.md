---
title: "GCOM-C/SGLI L3 Leaf Area Index (V3)"
date: 2026-11-03 12:00:00
---

# GCOM-C/SGLI L3 Leaf Area Index (V3)

Original name: GCOM-C/SGLI L3 Leaf Area Index (V3)

## What this dataset is

This product is the sum of the one-sided green leaf area per unit ground area.

This is an ongoing dataset with a latency of 3-4 days.

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

- Coverage: Coverage: global; time span: from 29 November 2021, ongoing; resolution: about 4,638 m.
- Time range: 2021-11-29 至 2026-10-14

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
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/LAND/LAI/V3');
```

- Earth Engine ID: `JAXA/GCOM-C/L3/LAND/LAI/V3`
- Providers: Global Change Observation Mission (GCOM), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_LAND_LAI_V3

## License and citation

- License: proprietary
- Keywords: g-portal, gcom, gcom-c, jaxa, lai, land, leaf-area-index, vegetation-indices
- 数据引用：Kobayashi, T., Ono, Y., Kobayashi, H., Yang, W. (June. 2020). GCOM-C/SGLI
Leaf Area Index (LAI)/ fraction of Absorbed Photosynthetically Active Radiation (fAPAR) Product
Algorithm Theoretical Basis Document (Version 2). Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_T2B_LAI_Kobayashi_r1.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_T2B_LAI_Kobayashi_r1.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/pages/9acc1a9f/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
