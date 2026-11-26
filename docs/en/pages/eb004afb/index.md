---
title: "Global Forest Canopy Height, 2005"
date: 2026-11-03 12:00:00
---

# Global Forest Canopy Height, 2005

Original name: Global Forest Canopy Height, 2005

## What this dataset is

This dataset represents global tree heights based on a fusion of
spaceborne-lidar data (2005) from the Geoscience Laser Altimeter
System (GLAS) and ancillary geospatial data. See
[Simard et al. (2011)](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2011JG001708)
for details.

## Coverage and time range

- Coverage: Coverage: global; time span: May 20 to June 23, 2005; resolution: 927.67 m.
- Time range: 2005-05-20 至 2005-06-23

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| 1 | Tree heights | 927.67 |  |

## What you can use it for

- Forest canopy height mapping
- Forest biomass estimation
- Carbon stock assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('NASA/JPL/global_forest_canopy_height_2005');
```

- Earth Engine ID: `NASA/JPL/global_forest_canopy_height_2005`
- Providers: NASA/JPL, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_JPL_global_forest_canopy_height_2005

## License and citation

- License: proprietary
- Keywords: canopy, forest, forest-biomass, geophysical, glas, jpl, nasa
- 数据引用：Simard, M., Pinto, N., Fisher, J., Baccini, A. 2011. Mapping forest
canopy height globally with spaceborne lidar. Journal of Geophysical
Research. 116: G04021.
[doi:10.1029/2011JG001708](https://doi.org/10.1029/2011JG001708)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
