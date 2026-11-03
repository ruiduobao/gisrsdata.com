---
title: "OpenLandMap Precipitation Monthly"
date: 2026-11-03 12:00:00
permalink: /pages/13ce8975/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "envirometrix"
  - "imerg"
  - "monthly"
  - "opengeohub"
  - "openlandmap"
  - "precipitation"
---

# OpenLandMap Precipitation Monthly

## 数据集简介

Monthly precipitation in mm at 1 km resolution based on [SM2RAIN-ASCAT
2007-2018](https://doi.org/10.5281/zenodo.2615278),
IMERG, CHELSA Climate, and WorldClim.

[Downscaled to 1 km resolution using gdalwarp](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/clim1km)
(cubic splines) and an average between [WorldClim](https://www.worldclim.org/data/worldclim21.html),
[CHELSA Climate](https://chelsa-climate.org/),
and [IMERG monthly product](https://gpm.nasa.gov/data/imerg) (see, e.g, "3B-MO-L.GIS.IMERG.20180601.V05B.tif").
3x higher weight is given to the SM2RAIN-ASCAT data since it assumed to be more accurate. Processing steps are available
[here](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/clim1km).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：2007-01-01 至 2019-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, imerg, monthly, opengeohub, openlandmap, precipitation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| jan | Jan Precipitation monthly | 1000 |  |
| feb | Feb Precipitation monthly | 1000 |  |
| mar | Mar Precipitation monthly | 1000 |  |
| apr | Apr Precipitation monthly | 1000 |  |
| may | May Precipitation monthly | 1000 |  |
| jun | Jun Precipitation monthly | 1000 |  |
| jul | Jul Precipitation monthly | 1000 |  |
| aug | Aug Precipitation monthly | 1000 |  |
| sep | Sep Precipitation monthly | 1000 |  |
| oct | Oct Precipitation monthly | 1000 |  |
| nov | Nov Precipitation monthly | 1000 |  |
| dec | Dec Precipitation monthly | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_CLM_CLM_PRECIPITATION_SM2RAIN_M_v01
- 数据引用：Monthly precipitation in mm at 1 km resolution based on SM2RAIN-ASCAT 2007-2018 and IMERG 2014-2018
[10.5281/zenodo.1435912](https://doi.org/10.5281/zenodo.1435912)

- DOI：10.5281/zenodo.1435912

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
