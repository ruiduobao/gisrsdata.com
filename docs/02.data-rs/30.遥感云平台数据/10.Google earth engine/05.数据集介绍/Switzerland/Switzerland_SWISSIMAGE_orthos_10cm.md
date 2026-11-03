---
title: "SWISSIMAGE 10 cm RGB imagery"
date: 2026-11-03 12:00:00
permalink: /pages/b8e806f0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "orthophotos"
  - "rgb"
  - "swissimage"
  - "swisstopo"
---

# SWISSIMAGE 10 cm RGB imagery

## 数据集简介

The SWISSIMAGE 10 cm orthophoto mosaic is an assembly of new color digital
aerial images over the whole of Switzerland with a ground resolution of
10 cm in the plains and the main alpine valleys and 25 cm in the Alps. It
is updated annually.

For more information, please see the
[SWISSIMAGE10cm_FR documentation](https://backend.swisstopo.admin.ch/fileservice/sdweb-docs-prod-swisstopoch-files/files/2023/11/14/a84642dc-5feb-48e5-af6b-55df4ae7a10b.pdf)

This RGB collection contains digital aerial images with three bands.
Standard deviation for the precision in position: +/- 0.15 m for the ground
sample distance of 0.1 m.

## 基本信息

- 数据集编号（Earth Engine ID）：`Switzerland/SWISSIMAGE/orthos/10cm`
- 数据类型：影像集合（ImageCollection）
- 提供方：Topography swisstopo、Google Earth Engine
- 时间范围：2017-01-01 至 2021-01-01
- 空间分辨率：0.1 米
- 许可：proprietary
- 关键词：orthophotos, rgb, swissimage, swisstopo

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.1 | 619-651nm |
| G | Green | 0.1 | 525-585nm |
| B | Blue | 0.1 | 435-495nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Switzerland/SWISSIMAGE/orthos/10cm');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Switzerland_SWISSIMAGE_orthos_10cm
- 数据引用：Copyright Federal Office of Topography swisstopo

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
