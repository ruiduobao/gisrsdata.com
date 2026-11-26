---
title: "JRC Global Surface Water Mapping Layers, v1.0 [deprecated]"
date: 2026-11-03 12:00:00
---

# JRC Global Surface Water Mapping Layers, v1.0 [deprecated]

Original name: JRC Global Surface Water Mapping Layers, v1.0 [deprecated]

## What this dataset is

This dataset contains maps of the location and temporal
distribution of surface water from 1984 to 2015 and provides
statistics on the extent and change of those water surfaces.
For more information see the associated journal article: [High-resolution
mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)
(Nature, 2016) and the online [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2.pdf).

These data were generated using 3,066,102 scenes from Landsat
5, 7, and 8 acquired between 16 March 1984 and 10 October 2015.
Each pixel was individually classified into water / non-water
using an expert system and the results were collated into a monthly
history for the entire time period and two epochs (1984-1999,
2000-2015) for change detection.

This mapping layers product consists of 1 image containing 7 bands.
It maps different facets of the spatial and temporal distribution of
surface water over the last 32 years. Areas where water has
never been detected are masked.

## Coverage and time range

- Coverage: Coverage: global; time span: March 1984 to October 2015; resolution: 30 m.
- Time range: 1984-03-16 至 2015-10-18

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| occurrence | The frequency with which water was present. | 30 |  |
| change_abs | Absolute change in occurrence between two epochs: 1984-1999 vs 2000-2015. | 30 |  |
| change_norm | Normalized change in occurrence. (epoch1-epoch2)/(epoch1+epoch2) * 100 | 30 |  |
| seasonality | Number of months water is present. | 30 |  |
| recurrence | The frequency with which water returns from year to year. | 30 |  |
| transition | Categorical classification of change between first and last year. | 30 |  |
| max_extent | Binary image containing 1 anywhere water has ever been detected. | 30 |  |

## What you can use it for

- Global surface water extent and change analysis
- Long-term lake and reservoir monitoring
- Flood and wetland studies

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('JRC/GSW1_0/GlobalSurfaceWater');
```

- Earth Engine ID: `JRC/GSW1_0/GlobalSurfaceWater`
- Providers: EC JRC / Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_0_GlobalSurfaceWater

## License and citation

- License: proprietary
- Keywords: geophysical, google, jrc, landsat-derived, surface, surface-ground-water, water
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [JRC Global Surface Water Metadata, v1.0 [deprecated]](/pages/5f34ce30/)
- [JRC Monthly Water History, v1.0 [deprecated]](/pages/ff1671f5/)
- [JRC Monthly Water Recurrence, v1.0 [deprecated]](/pages/5e46dfd7/)
- [JRC Yearly Water Classification History, v1.0 [deprecated]](/pages/24553550/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
