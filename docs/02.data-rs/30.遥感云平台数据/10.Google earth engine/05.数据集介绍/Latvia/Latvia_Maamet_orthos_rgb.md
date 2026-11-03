---
title: "Latvia RGB orthophotos"
date: 2026-11-03 12:00:00
permalink: /pages/21f79fb2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "latvia"
  - "orthophotos"
  - "rgb"
---

# Latvia RGB orthophotos

## 数据集简介

In Latvia, orthophoto maps are prepared in the Latvian coordinate system
LKS-92 TM according to the TKS-93 map sheet division (scale 1:10000 map
sheet corresponds to 5 x 5 kilometers in nature). Orthophoto maps are
prepared for the whole territory of Latvia at the scale of
1:10000, but for separate territories - for cities and densely populated
areas - at the scale of 1:2000 or 1:1000.

The RGB dataset has three bands: red, green, and blue.

For more information, please see the
[Latvia orthophotos documentation](https://www.lgia.gov.lv/lv/ortofotokartes-1)

## 基本信息

- 数据集编号（Earth Engine ID）：`Latvia/Maamet/orthos/rgb`
- 数据类型：影像集合（ImageCollection）
- 提供方：Latvia orthophotos、Google Earth Engine
- 时间范围：2007-01-01 至 2018-01-01
- 空间分辨率：0.2 米
- 许可：CC-BY-4.0
- 关键词：latvia, orthophotos, rgb

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.2 |  |
| G | Green | 0.2 |  |
| B | Blue | 0.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Latvia/Maamet/orthos/rgb');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Latvia_Maamet_orthos_rgb
- 数据引用：Latvijas Geospatial Information Agency

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
