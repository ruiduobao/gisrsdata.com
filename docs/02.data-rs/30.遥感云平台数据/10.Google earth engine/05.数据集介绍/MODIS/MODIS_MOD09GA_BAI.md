---
title: "MODIS Terra Daily BAI [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/b02a0fac/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bai"
  - "daily"
  - "global"
  - "mod09ga"
  - "modis"
  - "surface-reflectance"
  - "terra"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Terra Daily BAI [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Burn Area Index (BAI) is generated from the Red and
Near-IR bands, and measures the spectral distance of each pixel from a
reference spectral point (the measured reflectance of charcoal).  This
index is intended to emphasize the charcoal signal in post-fire
images. See
[Chuvieco et al. (2002)](https://www.tandfonline.com/doi/abs/10.1080/01431160210153129)
for details. This product is generated from the MODIS/MOD09GA surface reflectance composites.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD09GA_BAI`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2000-02-24 至 2017-03-30
- 许可：proprietary
- 关键词：bai, daily, global, mod09ga, modis, surface-reflectance, terra, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BAI | Burn Area Index | 463.312716528 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA_BAI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_BAI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
