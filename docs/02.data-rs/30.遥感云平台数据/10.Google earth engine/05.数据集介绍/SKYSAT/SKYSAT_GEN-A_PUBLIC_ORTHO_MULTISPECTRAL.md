---
title: "Planet SkySat Public Ortho Imagery, Multispectral"
date: 2026-11-03 12:00:00
permalink: /pages/29a32150/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "highres"
  - "multispectral"
  - "pansharpened"
  - "planet"
  - "satellite-imagery"
  - "skysat"
---

# Planet SkySat Public Ortho Imagery, Multispectral

## 数据集简介

This data from Planet labs Inc. SkySat satellites was collected for
the experimental \"Skybox for Good Beta\" program in 2015, as well as for
various crisis response events and a few other projects. The data is
available in both a 5-band Multispectral/Pan collection, and a Pansharpened
RGB collection.

Each image's asset ID contains the acquisition date and time, for
example, image s01_20150304T080608Z was acquired on March 4, 2015 at
08:06 Zulu (UTC). For more information, please see the
[Planet Imagery Product Specifications](https://www.planet.com/products/#planet-monitoring)
and visit the
[Planet Imagery and Archive site](https://www.planet.com/latest-satellite-imagery-gallery/)

This Multispectral/Pan collection contains images with five 16-bit bands
shifted up from the original 12-bit data. The B, G, R, and Near-IR bands
have a resolution of approximately 2m per pixel, while the Pan band is
approximately 0.8m resolution (closer to 1m for off-nadir images).

## 基本信息

- 数据集编号（Earth Engine ID）：`SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL`
- 数据类型：影像集合（ImageCollection）
- 提供方：Planet Labs Inc.、Google Earth Engine
- 时间范围：2014-07-03 至 2016-12-24
- 许可：CC-BY-4.0
- 关键词：highres, multispectral, pansharpened, planet, satellite-imagery, skysat

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B | Blue | 2 | 450-515nm |
| G | Green | 2 | 515-595nm |
| R | Red | 2 | 605-695nm |
| N | Near-IR | 2 | 740-900nm |
| P | Panchromatic | 0.8 | 450-900nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/SKYSAT_GEN-A_PUBLIC_ORTHO_MULTISPECTRAL
- 数据引用：© \<year\> Planet Labs Inc.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
