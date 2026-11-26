---
title: "JRC Yearly Water Classification History, v1.4"
date: 2026-11-03 12:00:00
---

# JRC Yearly Water Classification History, v1.4

Original name: JRC Yearly Water Classification History, v1.4

## What this dataset is

This dataset contains maps of the location and temporal
distribution of surface water from 1984 to 2021 and provides
statistics on the extent and change of those water surfaces.
For more information see the associated journal article: [High-resolution
mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)
(Nature, 2016) and the online
[Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2021.pdf).

These data were generated using 4,716,475 scenes from Landsat
5, 7, and 8 acquired between 16 March 1984 and 31 December 2021.
Each pixel was individually classified into water / non-water
using an expert system and the results were collated into a monthly
history for the entire time period and two epochs (1984-1999,
2000-2021) for change detection.

This Yearly Seasonality Classification collection contains a year-by-year
classification of the seasonality of water based on the occurrence values
detected throughout the year.

## Coverage and time range

- Coverage: Coverage: global; time span: March 1984 to 2021 年 12 月; resolution: 30 m.
- Time range: 1984-03-16 至 2022-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| waterClass | Classification of the seasonality of water throughout the year. | 30 |  |

## What you can use it for

- Global surface water extent and change analysis
- Long-term lake and reservoir monitoring
- Flood and wetland studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GSW1_4/YearlyHistory');
```

- Earth Engine ID: `JRC/GSW1_4/YearlyHistory`
- Providers: EC JRC / Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_4_YearlyHistory

## License and citation

- License: proprietary
- Keywords: annual, geophysical, google, history, jrc, landsat-derived, surface, surface-ground-water, water, yearly
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [JRC Global Surface Water Mapping Layers, v1.4](/pages/0d647c0f/)
- [JRC Global Surface Water Metadata, v1.4](/pages/1f03ce37/)
- [JRC Monthly Water History, v1.4](/pages/b476f77f/)
- [JRC Monthly Water Recurrence, v1.4](/pages/74e9569e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
