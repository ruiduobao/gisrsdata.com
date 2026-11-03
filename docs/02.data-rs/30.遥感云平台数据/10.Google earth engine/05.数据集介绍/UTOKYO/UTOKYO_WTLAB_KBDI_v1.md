---
title: "KBDI: Keetch-Byram Drought Index"
date: 2026-11-03 12:00:00
permalink: /pages/ba005b82/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "drought"
  - "fire"
  - "kbdi"
  - "lst-derived"
  - "rainfall"
  - "utokyo"
  - "wtlab"
---

# KBDI: Keetch-Byram Drought Index

## 数据集简介

Keetch-Byram Drought Index (KBDI) is a continuous reference scale for estimating the dryness of
the soil and duff layers. The index increases for each day without rain (the amount of increase
depends on the daily high temperature) and decreases when it rains. This system is based
primarily on recent rainfall patterns. It is a measure of meteorological drought; it reflects
water gain or loss within the soil.

The scale ranges from 0 (no moisture deficit) to 800 (extreme drought). The range of the index
is determined by assuming that there is 20 cm of moisture in a saturated soil that is readily
available to the vegetation (Keetch and Byram, 1968). KBDI is world widely used for drought
monitoring for national weather forecast, wildfire prevention and usefully especially in regions
with rain-fed crops.

## 基本信息

- 数据集编号（Earth Engine ID）：`UTOKYO/WTLAB/KBDI/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Institute of Industrial Science, The University of Tokyo, Japan、Google Earth Engine
- 时间范围：2007-01-01 至 2026-11-01
- 空间分辨率：4000 米
- 许可：CC-BY-4.0
- 关键词：drought, fire, kbdi, lst-derived, rainfall, utokyo, wtlab

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| KBDI | Keetch-Byram Drought Index | 4000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UTOKYO/WTLAB/KBDI/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UTOKYO_WTLAB_KBDI_v1
- 数据引用：Wataru Takeuchi, Soni Darmawan, Rizatus Shofiyati, Mai Van Khiem, Kyaw San Oo, Uday Pimple
and Suthy Heng, 2015. Near-real time meteorological drought monitoring and early warning
system for croplands in Asia.
36th Asian conference on remote sensing (ACRS): Manila, Philippines, Oct. 20, 2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
