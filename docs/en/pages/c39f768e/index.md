---
title: "JRC Global Surface Water Metadata, v1.3 [deprecated]"
date: 2026-11-03 12:00:00
---

# JRC Global Surface Water Metadata, v1.3 [deprecated]

Original name: JRC Global Surface Water Metadata, v1.3 [deprecated]

## What this dataset is

This dataset contains maps of the location and temporal
distribution of surface water from 1984 to 2020 and provides
statistics on the extent and change of those water surfaces.
For more information see the associated journal article: [High-resolution
mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)
(Nature, 2016) and the online [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2.pdf).

These data were generated using 4,453,989 scenes from Landsat
5, 7, and 8 acquired between 16 March 1984 and 31 December 2020.
Each pixel was individually classified into water / non-water
using an expert system and the results were collated into a monthly
history for the entire time period and two epochs (1984-1999,
2000-2020) for change detection.

This product contains metadata about the observations that went into
computing The Global Surface Water dataset. Areas where water has never
been detected are masked.

## Coverage and time range

- Coverage: Coverage: global; time span: March 1984 to 2020 年 12 月; resolution: 30 m.
- Time range: 1984-03-16 至 2021-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| detections | The number of water detections in the study period. | 30 |  |
| valid_obs | The number of valid observations in the study period. | 30 |  |
| total_obs | The total number of available observations (i.e. scenes) in the study period. | 30 |  |

## What you can use it for

- Global surface water extent and change analysis
- Long-term lake and reservoir monitoring
- Flood and wetland studies

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('JRC/GSW1_3/Metadata');
```

- Earth Engine ID: `JRC/GSW1_3/Metadata`
- Providers: EC JRC / Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_3_Metadata

## License and citation

- License: proprietary
- Keywords: geophysical, google, jrc, landsat-derived, surface, surface-ground-water, water
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [JRC Global Surface Water Mapping Layers, v1.3 [deprecated]](/pages/08dc5359/)
- [JRC Monthly Water History, v1.3 [deprecated]](/pages/46ad4f43/)
- [JRC Monthly Water Recurrence, v1.3 [deprecated]](/pages/748c5c9b/)
- [JRC Yearly Water Classification History, v1.3 [deprecated]](/pages/adb7aac6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
