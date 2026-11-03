---
title: "Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic"
date: 2026-11-03 12:00:00
permalink: /pages/68f1885d/
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
  - "usgs"
---

# Landsat Image Mosaic of Antarctica (LIMA) 16-Bit Pan-Sharpened Mosaic

## 数据集简介

The Landsat Image Mosaic of Antarctica (LIMA) is a seamless
and virtually cloudless mosaic created from processed
Landsat 7 ETM+ scenes.

This LIMA dataset is the 16-bit Intermediate LIMA.
The mosaic consists of pan-sharpened normalized surface reflectance
scenes (Landsat ETM+ bands 1, 2, 3, and 4). The mosaic was
constructed by ordering cloud free images on top and trimming
image boundaries when tile discontinuities occurred.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/LIMA/MOSAIC`
- 数据类型：影像（Image）
- 提供方：USGS、Google Earth Engine
- 时间范围：1999-06-30 至 2002-09-04
- 空间分辨率：15 米
- 许可：proprietary
- 关键词：antarctica, ice, landsat-derived, lima, mosaic, satellite-imagery, sr, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Blue | 15 | 0.45 - 0.52 &mu;m |
| B2 | Green | 15 | 0.52 - 0.60 &mu;m |
| B3 | Red | 15 | 0.63 - 0.69 &mu;m |
| B4 | Near infrared | 15 | 0.77 - 0.90 &mu;m |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/LIMA/MOSAIC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_LIMA_MOSAIC
- 数据引用：Bindschadler, R., Vornberger, P., Fleming, A., Fox, A., Mullins, J.,
Binnie, D., Paulson, S., Granneman, B., and Gorodetzky, D., 2008,
The Landsat Image Mosaic of Antarctica, Remote Sensing of
Environment, 112, pp. 4214-4226.
[PDF](https://lima.usgs.gov/LIMA_paper.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
