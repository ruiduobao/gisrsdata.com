---
title: "JRC Monthly Water Recurrence, v1.2 [deprecated]"
date: 2026-11-03 12:00:00
---

# JRC Monthly Water Recurrence, v1.2 [deprecated]

Original name: JRC Monthly Water Recurrence, v1.2 [deprecated]

## What this dataset is

This dataset contains maps of the location and temporal
distribution of surface water from 1984 to 2019 and provides
statistics on the extent and change of those water surfaces.
For more information see the associated journal article: [High-resolution
mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)
(Nature, 2016) and the online [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2.pdf).

These data were generated using 4,185,439 scenes from Landsat
5, 7, and 8 acquired between 16 March 1984 and 31 December 2019.
Each pixel was individually classified into water / non-water
using an expert system and the results were collated into a monthly
history for the entire time period and two epochs (1984-1999,
2000-2019) for change detection.

The Monthly Recurrence collection contains 12 images: monthly measures of
the seasonality of water based on the occurrence values detected in that
month over all years.

## Coverage and time range

- Coverage: Coverage: global; time span: March 1984 to 2019 年 12 月; resolution: 30 m.
- Time range: 1984-03-16 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| monthly_recurrence | The recurrence value expressed as a percentage for this month. | 30 |  |
| has_observations | A flag to indicate if the month has observations. | 30 |  |

## What you can use it for

- Global surface water extent and change analysis
- Long-term lake and reservoir monitoring
- Flood and wetland studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GSW1_2/MonthlyRecurrence');
```

- Earth Engine ID: `JRC/GSW1_2/MonthlyRecurrence`
- Providers: EC JRC / Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_2_MonthlyRecurrence

## License and citation

- License: proprietary
- Keywords: geophysical, google, history, jrc, landsat-derived, monthly, recurrence, surface, surface-ground-water, water
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [JRC Global Surface Water Mapping Layers, v1.2 [deprecated]](/pages/4c507763/)
- [JRC Global Surface Water Metadata, v1.2 [deprecated]](/pages/454ad0e7/)
- [JRC Monthly Water History, v1.2 [deprecated]](/pages/9b3fd33a/)
- [JRC Yearly Water Classification History, v1.2 [deprecated]](/pages/28682d97/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
