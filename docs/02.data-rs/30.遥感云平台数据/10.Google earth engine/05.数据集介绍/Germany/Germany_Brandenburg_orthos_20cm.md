---
title: "Brandenburg (Germany) RGBN orthophotos 20 cm"
date: 2026-11-03 12:00:00
permalink: /pages/d15dcdc4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brandenburg"
  - "germany"
  - "orthophotos"
  - "rgbn"
---

# Brandenburg (Germany) RGBN orthophotos 20 cm

## 数据集简介

Orthophotos are an aerial photo dataset covering the Brandenburg state of
Germany.
This data is provided by State government of
Brandenburg ([LGB](https://geobasis-bb.de/lgb/de/)).
Digital orthophotos are digitally corrected aerial photos and show all
objects that are visible from the air at the time of recording in a parallel
perspective. They have a high density of information on ecological,
phenological, geographical and other topics.

For more information, please see the
[Brandenburg orthophotos documentation](https://geobasis-bb.de/lgb/de/geodaten/luftbilder/luftbilder-aktuell/)

## 基本信息

- 数据集编号（Earth Engine ID）：`Germany/Brandenburg/orthos/20cm`
- 数据类型：影像集合（ImageCollection）
- 提供方：Brandenburg orthophotos、Google Earth Engine
- 时间范围：2021-08-23 至 2023-01-20
- 空间分辨率：0.2 米
- 许可：proprietary
- 关键词：brandenburg, germany, orthophotos, rgbn

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| N | Near infrared | 0.2 |  |
| R | Red | 0.2 |  |
| G | Green | 0.2 |  |
| B | Blue | 0.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Germany/Brandenburg/orthos/20cm');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Germany_Brandenburg_orthos_20cm
- 数据引用：Data License Germany - Attribution - Version 2.0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
