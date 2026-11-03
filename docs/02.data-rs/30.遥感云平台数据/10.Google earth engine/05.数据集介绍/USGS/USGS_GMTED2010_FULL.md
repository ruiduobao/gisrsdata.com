---
title: "GMTED2010: Global Multi-resolution Terrain Elevation Data 2010"
date: 2026-11-03 12:00:00
permalink: /pages/6ee1de03/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "srtm"
  - "topography"
  - "usgs"
---

# GMTED2010: Global Multi-resolution Terrain Elevation Data 2010

## 数据集简介

The Global Multi-resolution Terrain Elevation Data
2010 (GMTED2010) dataset contains elevation data for the globe
collected from various sources at 7.5 arc-seconds resolution. More details
are available in the dataset [report](https://pubs.usgs.gov/of/2011/1073/pdf/of2011-1073.pdf).

The primary source dataset for GMTED2010 is NGA''s SRTM Digital
Terrain Elevation Data (DTED&reg;, [https://www2.jpl.nasa.gov/srtm/](https://science.jpl.nasa.gov/projects/srtm/))
(void-filled) 1-arc-second data. For the geographic areas outside
the SRTM coverage area and to fill in remaining holes in the SRTM
data, the following sources were used: non-SRTM DTED&reg;, Canadian
Digital Elevation Data (CDED) at two resolutions, Satellite Pour
l''Observation de la Terre (SPOT 5) Reference3D, National Elevation
Dataset (NED) for the continental United States and Alaska, GEODATA
9 second digital elevation model (DEM) for Australia, an Antarctica
satellite radar and laser altimeter DEM, and a Greenland satellite
radar altimeter DEM.

This dataset replaces the GTOPO30 Elevation Model.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/GMTED2010_FULL`
- 数据类型：影像（Image）
- 提供方：USGS、Google Earth Engine
- 时间范围：2010-01-01 至 2010-01-01
- 空间分辨率：231.92 米
- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, geophysical, srtm, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| std | Standard Deviation | 231.92 |  |
| min | Minimum | 231.92 |  |
| med | Median | 231.92 |  |
| mea | Mean | 231.92 |  |
| max | Maximum | 231.92 |  |
| dsc | Sample | 231.92 |  |
| be75 | Breakline emphasis maintains the critical topographic features (streams or ridges) within the landscape by maintaining any minimum elevation or maximum elevation value on a breakline that passes within the specified analysis window.  | 231.92 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/GMTED2010_FULL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_GMTED2010_FULL
- 数据引用：Global Multi-resolution Terrain Elevation Data 2010 courtesy of
the U.S. Geological Survey

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
