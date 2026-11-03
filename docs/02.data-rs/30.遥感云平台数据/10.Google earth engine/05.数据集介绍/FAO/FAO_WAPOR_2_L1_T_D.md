---
title: "WAPOR Dekadal Transpiration 2.0"
date: 2026-11-03 12:00:00
permalink: /pages/906a102a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "fao"
  - "wapor"
  - "water"
  - "water-vapor"
---

# WAPOR Dekadal Transpiration 2.0

## 数据集简介

The transpiration (T) data component (dekadal, in mm/day) is the actual
transpiration of the vegetation canopy. The value of each pixel represents
the average daily actual transpiration for that specific dekad.

## 基本信息

- 数据集编号（Earth Engine ID）：`FAO/WAPOR/2/L1_T_D`
- 数据类型：影像集合（ImageCollection）
- 提供方：FAO UN、Google Earth Engine
- 时间范围：2009-01-01 至 2023-03-01
- 空间分辨率：248.2 米
- 许可：proprietary
- 关键词：agriculture, fao, wapor, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| L1_T_D | Transpiration (Dekadal) [mm] | 248.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('FAO/WAPOR/2/L1_T_D');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_WAPOR_2_L1_T_D
- 数据引用：FAO 2018. WaPOR Database Methodology: Level 1. Remote Sensing for Water
Productivity Technical Report: Methodology Series. Rome, FAO. 72 pages.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
