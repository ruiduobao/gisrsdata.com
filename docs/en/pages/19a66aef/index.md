---
title: "FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]

Original name: FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]

## What this dataset is

FORMA is a MODIS-based deforestation alerting system for the humid tropical
forests. FORMA is designed for quick identification of new areas of tree
cover loss. The system analyzes data gathered daily by the MODIS sensor,
which operates on NASA's Terra and Aqua satellites. The FORMA alerts system
then detects pronounced changes in vegetation cover over time, as measured
by the Normalized Difference Vegetation Index (NDVI), a measure of
vegetation greenness. These pronounced changes in vegetation cover are
likely to indicate forest being cleared, burned, or defoliated. An alert is
added to the dataset by setting the pixel value to the date at which a
change was detected. FORMA alerts only appear in areas where the probability
of tree cover loss is greater than or equal to 50%. FORMA data has 500-meter
spatial resolution and twice-monthly update interval. FORMA alerts start in
January 2006.

## Coverage and time range

- Coverage: Global humid tropical forests
- Time range: 2006-01-01 至 2015-06-10

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| constant | [Seconds since Jan 1, 1970](https://en.wikipedia.org/wiki/Unix_time) | 500 |  |

## What you can use it for

- Near-real-time deforestation alerts for tropical forests
- Identifying forest clearing hotspots
- REDD+ monitoring and reporting

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('FORMA/FORMA_500m');
```

- Earth Engine ID: `FORMA/FORMA_500m`
- Providers: Global Forest Watch, World Resources Institute, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FORMA_FORMA_500m

## License and citation

- License: proprietary
- Keywords: alerts, deforestation, fire, forest, forma, geophysical, gfw, modis, nasa, wri
- 数据引用：Hammer, Dan, Robin Kraft, and David Wheeler. 2013. FORMA Alerts. World
Resources Institute and Center for Global Development.
[www.globalforestwatch.org](www.globalforestwatch.org).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [FIRMS: Fire Information for Resource Management System](/pages/4ae50fa9/)
- [FORMA Alert Thresholds](/pages/299d3b97/)
- [FORMA Alerts](/pages/d92138fe/)
- [FORMA Raw Output FIRMS](/pages/721e383c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
