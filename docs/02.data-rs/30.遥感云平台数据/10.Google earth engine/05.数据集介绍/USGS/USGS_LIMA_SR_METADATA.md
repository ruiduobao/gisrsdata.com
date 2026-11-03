---
title: "Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata"
date: 2026-11-03 12:00:00
permalink: /pages/db295264/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "antarctica"
  - "ice"
  - "landsat-derived"
  - "lima"
  - "mosaic"
  - "satellite-imagery"
  - "sr"
  - "table"
  - "usgs"
---

# Landsat Image Mosaic of Antarctica (LIMA) - Processed Landsat Scenes (16 bit) Metadata

## 数据集简介

The Landsat Image Mosaic of Antarctica (LIMA) is a seamless
and virtually cloudless mosaic created from processed
Landsat 7 ETM+ scenes.

Processed Landsat Scenes (16 bit) are Level 1Gt NLAPS
scenes converted to 16 bit, processed with sun-angle
correction, and converted to reflectance values
([Bindschadler 2008](https://lima.usgs.gov/LIMA_paper.pdf)).

Each Landsat scene is processed with elevation
data and sun-angle correction to ensure surface features
were accurately represented. The sun's angle in Antarctica
gives the appearance of a setting sun. Because of the low
sun angle, as Landsat passes over Antarctica, the outer
edges of the continent appear brighter than areas closer
to the South Pole, so scenes have bright and dark areas.
Inconsistent sun angles and shadows where corrected for
these scenes. Without this process, mosaicking would produce
a patchwork of scenes since each scene would have a brighter
and a darker side.

This is a table which contains metadata for the Image Collection
[USGS/LIMA/SR](USGS_LIMA_SR)

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/LIMA/SR_METADATA`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1999-06-30 至 2002-09-04
- 许可：proprietary
- 关键词：antarctica, ice, landsat-derived, lima, mosaic, satellite-imagery, sr, table, usgs

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ACQ_DATE | STRING | Acquisition date in YYYY-MM-DD format |
| PATH | INT | WRS path |
| POLY_ID | INT | Unique ID assigned to a polygon |
| ROW | INT | WRS row |
| SCENE_ID | STRING | Scene ID |
| SENSOR | STRING | Sensor |
| SPACE | STRING | Name of the satellite used to gather data |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('USGS/LIMA/SR_METADATA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_SR_METADATA
- 数据引用：Bindschadler, R., Vornberger, P., Fleming, A., Fox, A., Mullins, J.,
Binnie, D., Paulson, S., Granneman, B., and Gorodetzky, D., 2008,
The Landsat Image Mosaic of Antarctica, Remote Sensing of
Environment, 112, pp. 4214-4226.
[PDF](https://lima.usgs.gov/LIMA_paper.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
