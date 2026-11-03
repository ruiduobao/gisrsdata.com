---
title: "GFW (Global Fishing Watch) Daily Vessel Hours"
date: 2026-11-03 12:00:00
permalink: /pages/37ea4824/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fishing"
  - "gfw"
  - "monthly"
  - "oceans"
---

# GFW (Global Fishing Watch) Daily Vessel Hours

## 数据集简介

Fishing vessel presence, measured in hours per square km. Each asset
is the vessel presence for a given flag state and day, with one band for the
presence of each gear type.

See [sample Earth Engine
scripts](https://globalfishingwatch.org/research/global-footprint-of-fisheries/).
Also see [the main GFW site](https://GlobalFishingWatch.org) for program
information, fully interactive visualization maps, and impacts.

## 基本信息

- 数据集编号（Earth Engine ID）：`GFW/GFF/V1/vessel_hours`
- 数据类型：影像集合（ImageCollection）
- 提供方：Global Fishing Watch、Google Earth Engine
- 时间范围：2012-01-01 至 2017-01-01
- 空间分辨率：1113.2 米
- 许可：CC-BY-SA-4.0
- 关键词：fishing, gfw, monthly, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| drifting_longlines | Hours per sq. km of fishing vessel presence with drifting longlines. | 1113.2 |  |
| fixed_gear | Hours per sq. km of fishing vessel presence with fixed gear. | 1113.2 |  |
| other_fishing | Hours per sq. km of fishing vessel presence with other gear types. | 1113.2 |  |
| purse_seines | Hours per sq. km of fishing vessel presence with purse seines. | 1113.2 |  |
| squid_jigger | Hours per sq. km of fishing vessel presence with squid jiggers. | 1113.2 |  |
| trawlers | Hours per sq. km of fishing vessel presence with trawlers. | 1113.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GFW/GFF/V1/vessel_hours');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours
- 数据引用：Global Fishing Watch, "Tracking the Global Footprint of Fisheries." Science 361.6378 (2018).

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
