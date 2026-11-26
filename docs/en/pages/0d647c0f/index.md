---
title: "JRC Global Surface Water Mapping Layers, v1.4"
date: 2026-11-03 12:00:00
---

# JRC Global Surface Water Mapping Layers, v1.4

Original name: JRC Global Surface Water Mapping Layers, v1.4

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

This mapping layers product consists of 1 image containing 7 bands.
It maps different facets of the spatial and temporal distribution of
surface water over the last 38 years. Areas where water has
never been detected are masked.

**Note:**: the mask value for the occurrence band is equal to the band
value. That is, if the occurrence band is 0.5, the mask is also 0.5,
so the dataset is double-counting the partial occurrence.
This is probably not the intuitively expected behavior.

## Coverage and time range

- Coverage: Coverage: global; time span: March 1984 to 2021 年 12 月; resolution: 30 m.
- Time range: 1984-03-16 至 2022-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| occurrence | The frequency with which water was present. | 30 |  |
| change_abs | Absolute change in occurrence between two epochs: 1984-1999 vs 2000-2021. | 30 |  |
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
var dataset = ee.Image('JRC/GSW1_4/GlobalSurfaceWater');
```

- Earth Engine ID: `JRC/GSW1_4/GlobalSurfaceWater`
- Providers: EC JRC / Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_4_GlobalSurfaceWater

## License and citation

- License: proprietary
- Keywords: change-detection, geophysical, google, jrc, landsat-derived, surface, surface-ground-water, water
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [JRC Global Surface Water Metadata, v1.4](/pages/1f03ce37/)
- [JRC Monthly Water History, v1.4](/pages/b476f77f/)
- [JRC Monthly Water Recurrence, v1.4](/pages/74e9569e/)
- [JRC Yearly Water Classification History, v1.4](/pages/f6b4d504/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
