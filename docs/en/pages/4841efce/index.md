---
title: "MOD17A3.055: Terra Net Primary Production Yearly Global 1km [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD17A3.055: Terra Net Primary Production Yearly Global 1km [deprecated]

Original name: MOD17A3.055: Terra Net Primary Production Yearly Global 1km [deprecated]

## What this dataset is

The MOD17A3 V055 product provides information about
annual Gross and Net Primary Productivity (NPP) at 1km pixel resolution.
Net Primary Productivity (NPP) defines the rate at which all plants
in an ecosystem produce net useful chemical energy.  In other words,
NPP is equal to the difference between the rate at which plants
in an ecosystem produce useful chemical energy (or GPP), and the
rate at which they expend some of that energy for respiration.

The version 055 of the NPP product is produced by the Numerical
Terradynamic Simulation Group ([NTSG](https://www.ntsg.umt.edu)),
University of Montana (UMT).  It corrects the problem with cloud-contaminated
MODIS LAI-FPAR inputs to the MOD17 algorithm. The original, uncorrected
datasets constitute the version 4 NPP products. For further details
regarding the differences between the NTSG and NASA versions of
this product, please consult [this document](https://lpdaac.usgs.gov/documents/188/MOD17_NTSG_Note.pdf)

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2014; resolution: 1 km.
- Time range: 2000-01-01 至 2014-01-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Gpp | Annual gross primary productivity | 1000 |  |
| Npp | Annual net primary productivity | 1000 |  |
| Gpp_Npp_QC | Percentage of filled MOD15 LAI caused by cloud-contamination during a growing season (defined when daily minimum air temperatures are above -8°) in a year. A high value indicates a high frequency of cloud-contamination. For example, QA is high for tropical rainforests but low in arid areas. | 1000 |  |

## What you can use it for

- Primary productivity and carbon cycle research
- Ecosystem modeling
- Vegetation productivity monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/055/MOD17A3');
```

- Earth Engine ID: `MODIS/055/MOD17A3`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_055_MOD17A3

## License and citation

- License: proprietary
- Keywords: global, gpp, mod17a3, modis, npp, photosynthesis, plant-productivity, productivity, psn, terra, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
