---
title: "Gridded GEDI Vegetation Structure Metrics and Biomass Density, 1KM pixel size"
date: 2026-11-03 12:00:00
---

# Gridded GEDI Vegetation Structure Metrics and Biomass Density, 1KM pixel size

Original name: Gridded GEDI Vegetation Structure Metrics and Biomass Density, 1KM pixel size

## What this dataset is

This dataset consists of near-global, analysis-ready, multi-resolution
gridded vegetation structure metrics derived from NASA Global Ecosystem
Dynamics Investigation (GEDI) Level 2 and 4A products associated with 25-m
diameter lidar footprints. This dataset provides a comprehensive
representation of near-global vegetation structure that is inclusive of
the entire vertical profile, based solely on GEDI lidar, and validated with
independent data.

The GEDI sensor, mounted on the International Space
Station (ISS), uses eight laser beams spaced by 60 m along-track and 600 m
across-track on the Earth surface to measure ground elevation and vegetation
structure between approximately 52 degrees North and South latitude.
Between April 17th 2019 and March 16th 2023, GEDI acquired 11 and 7.7
billion quality waveforms suitable for measuring ground elevation and
vegetation structure, respectively.

In addition to many of the standard L2 and L4A shot metrics, several
additional metrics have been derived which may be particularly useful for
applications in carbon and water cycling processes in earth system models,
as well as forest management, biodiversity modeling, and habitat assessment.
Variables include canopy height, canopy cover, plant area index, foliage
height diversity, and plant area volume density at 5 m strata. Refer to the
[Gridded GEDI Vegetation Structure Metrics and Biomass Density]
(https://daac.ornl.gov/VEGETATION/guides/GEDI_HighQuality_Shots_Rasters.html)
for more information.

Eight statistics are included for each GEDI shot metric: mean, bootstrapped
standard error of the mean, median, standard deviation, interquartile range,
95th percentile, Shannon's diversity index, and shot count.
Quality shot filtering methodology that aligns with the GEDI L4B Gridded
Aboveground Biomass Density, Version 2.1 was used. In comparison to the
corresponding GEDI L3 dataset, this dataset provides additional gridded metrics at
multiple spatial resolutions and over several temporal periods (annual and
the full mission duration).

This dataset provides GEDI shot metrics aggregated into raster grids at
three spatial resolutions: 1 km, 6 km, and 12 km.
This dataset uses the pixel size of 1KM.

## Coverage and time range

- Coverage: Coverage: about 52° N to 52° S globally; time span: 2019 to 2023; resolution: 1 km.
- Time range: 2019-04-17 至 2023-03-16

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| mean | The mean of GEDI shot metric values within a pixel | 1000 |  |
| meanbse | Standard error of the mean calculated using bootstrap resampling. 100 bootstrap samples were created; each sample included 70% of shots, randomly selected.  Standard error was calculated using the means of bootstrapped samples. (Only calculated when there are at least 10 GEDI shots in the grid cell.) | 1000 |  |
| median | The median value (50th percentile) of GEDI shot metric values within a pixel. | 1000 |  |
| sd | The standard deviation of GEDI shot metric values within a pixel. | 1000 |  |
| iqr | The interquartile range (75 percentile minus 25th percentile) of GEDI shot metric values within a pixel. | 1000 |  |
| p95 | The 95th percentile value of GEDI shot metric values within a pixel. | 1000 |  |
| shan | Shannons diversity index (H) of GEDI shot metric values within a pixel. Calculated as:-1*(sum(p*log(p))) where p is the proportion of GEDI shot values per bin. | 1000 |  |
| countf | The count of GEDI shot metric values within a pixel. A 30-m sub-grid was used to select the (temporally) first GEDI shot acquired in each 30-m sub-grid cell. | 1000 |  |

## What you can use it for

- Gridded vegetation structure mapping
- Carbon and water cycle modeling
- Forest management and habitat assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GRIDDEDVEG_002/V1/1KM');
```

- Earth Engine ID: `LARSE/GEDI/GRIDDEDVEG_002/V1/1KM`
- Providers: Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE), Gridded GEDI Vegetation Structure Metrics and Biomass Density, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GRIDDEDVEG_002_V1_1KM

## License and citation

- License: proprietary
- Keywords: biomass, canopy, forest, forest-biomass, gedi, larse, lidar, nasa, vegetation
- 数据引用：Burns, P., Hakkenberg, C.R. & Goetz, S.J. Multi-resolution gridded maps of
vegetation structure from GEDI. Sci Data 11, 881 (2024).
[doi:10.1038/s41597-024-03668-4](https://doi.org/10.1038/s41597-024-03668-4)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GEDI L2A Raster Canopy Top Height (Version 2)](/pages/6e0348e1/)
- [GEDI L2A Vector Canopy Top Height (Version 2)](/pages/4874e1f7/)
- [GEDI L2A table index](/pages/81e014ca/)
- [GEDI L2B Raster Canopy Cover Vertical Profile Metrics (Version 2)](/pages/359e6f68/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
