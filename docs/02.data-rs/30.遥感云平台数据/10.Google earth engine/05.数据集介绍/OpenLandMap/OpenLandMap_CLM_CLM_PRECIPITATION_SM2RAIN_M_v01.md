---
title: "OpenLandMap 逐月降水"
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

# OpenLandMap 逐月降水

英文原名：OpenLandMap Precipitation Monthly

## 这是什么数据

基于 [SM2RAIN-ASCAT 2007-2018](https://doi.org/10.5281/zenodo.2615278)、IMERG、CHELSA 气候与 WorldClim 的 1 公里分辨率逐月降水（毫米）。

[使用 gdalwarp 降尺度到 1 公里分辨率](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/clim1km)（三次样条），并在 [WorldClim](https://www.worldclim.org/data/worldclim21.html)、[CHELSA 气候](https://chelsa-climate.org/) 与 [IMERG 逐月产品](https://gpm.nasa.gov/data/imerg) 之间取平均（例如「3B-MO-L.GIS.IMERG.20180601.V05B.tif」）。SM2RAIN-ASCAT 数据的权重为 3 倍，因为其被认为更准确。处理步骤见 [此处](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/clim1km)。不包括南极洲。

要在 Earth Engine 之外访问与可视化地图，使用 [此页面](https://opengeohub.org/about-openlandmap)。

如果您发现 LandGIS 地图中的错误、伪影或不一致，或有问题，请使用以下渠道：

## 覆盖范围与时间

- 覆盖范围：空间：全球（不含南极洲）；时间：2007 年至 2019 年（逐月）；分辨率：1,000 米。
- 时间范围：2007-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| jan | 1 月逐月降水 | 1000 |  |
| feb | 2 月逐月降水 | 1000 |  |
| mar | 3 月逐月降水 | 1000 |  |
| apr | 4 月逐月降水 | 1000 |  |
| may | 5 月逐月降水 | 1000 |  |
| jun | 6 月逐月降水 | 1000 |  |
| jul | 7 月逐月降水 | 1000 |  |
| aug | 8 月逐月降水 | 1000 |  |
| sep | 9 月逐月降水 | 1000 |  |
| oct | 10 月逐月降水 | 1000 |  |
| nov | 11 月逐月降水 | 1000 |  |
| dec | 12 月逐月降水 | 1000 |  |

## 能拿来做什么

- 作为全球气候与土地系统分析的基础图层。
- 为生态、水文与土壤建模提供环境变量。
- 与其他全球格网产品做对比与融合。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01');
```

- 数据集编号（Earth Engine ID）：`OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01`
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_CLM_CLM_PRECIPITATION_SM2RAIN_M_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：envirometrix, imerg, monthly, opengeohub, openlandmap, precipitation
- 数据引用：Monthly precipitation in mm at 1 km resolution based on SM2RAIN-ASCAT 2007-2018 and IMERG 2014-2018
[10.5281/zenodo.1435912](https://doi.org/10.5281/zenodo.1435912)

- DOI：10.5281/zenodo.1435912

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median](/pages/014c6b8e/)
- [OpenLandMap Long-term Land Surface Temperature Monthly Day-Night Difference](/pages/a6fac662/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
