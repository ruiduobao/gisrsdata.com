---
title: "FIRMS: Fire Information for Resource Management System"
date: 2026-11-03 12:00:00
---

# FIRMS: Fire Information for Resource Management System

Original name: FIRMS: Fire Information for Resource Management System

## What this dataset is

The Earth Engine version of the Fire Information for Resource Management
System (FIRMS) dataset contains the LANCE fire detection product in
rasterized form. The near real-time (NRT) active fire locations are
processed by LANCE using the standard MODIS MOD14/MYD14 Fire and Thermal
Anomalies product. Each active fire location represents the centroid of a
1km pixel that is flagged by the algorithm as containing one or more fires
within the pixel. The data are rasterized as follows: for each FIRMS active
fire point, a 1km bounding box (BB) is defined; pixels in the MODIS
sinusoidal projection that intersect the FIRMS BB are identified; if
multiple FIRMS BBs intersect the same pixel, the one with higher confidence
is retained; in case of a tie, the brighter one is retained.

The data in the near-real-time dataset are not considered to be of science
quality.

Additional information can be found [here](https://firms.modaps.eosdis.nasa.gov/).

NOTE: VIIRS FIRMS datasets from NOAA20 and SUOMI are also available:

## Coverage and time range

- Coverage: Global
- Time range: 2000-11-01 至 2026-11-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| T21 | The brightness temperature of a fire pixel using MODIS channels 21/22. | 1000 |  |
| confidence | A detection confidence intended to help users gauge the quality of individual active fire pixels. The confidence estimate ranges between 0% and 100% for all fire pixels within the fire mask. The confidence field should be used with caution; it is likely that it will vary in meaning in different parts of the world. | 1000 |  |
| line_number | Line number in the FIRMS CSV file that the pixel came from. | 1000 |  |

## What you can use it for

- Near-real-time active fire and wildfire monitoring
- Fire emissions and burned area assessment
- Emergency management and fire risk warning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('FIRMS');
```

- Earth Engine ID: `FIRMS`
- Providers: NASA / LANCE / EOSDIS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FIRMS
* [NASA/LANCE/NOAA20_VIIRS/C2](NASA_LANCE_NOAA20_VIIRS_C2)
* [NASA/LANCE/SNPP_VIIRS/C2](NASA_LANCE_SNPP_VIIRS_C2)

## License and citation

- License: proprietary
- Keywords: eosdis, fire, firms, geophysical, hotspot, lance, modis, nasa, thermal
- 数据引用：MODIS Collection 6 NRT Hotspot / Active Fire Detections MCD14DL.
Available on-line [https://earthdata.nasa.gov/firms](https://earthdata.nasa.gov/firms).
[doi:10.5067/FIRMS/MODIS/MCD14DL.NRT.006](https://doi.org/10.5067/FIRMS/MODIS/MCD14DL.NRT.006)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [FORMA Alert Thresholds](/pages/299d3b97/)
- [FORMA Alerts](/pages/d92138fe/)
- [FORMA Raw Output FIRMS](/pages/721e383c/)
- [FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1](/pages/2a6e2416/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
