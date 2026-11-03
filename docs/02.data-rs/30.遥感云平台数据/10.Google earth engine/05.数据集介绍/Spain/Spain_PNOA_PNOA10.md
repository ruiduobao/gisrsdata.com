---
title: "Spain RGB orthophotos 10 cm"
date: 2026-11-03 12:00:00
permalink: /pages/8464b62b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "orthophotos"
  - "pnoa"
  - "rgb"
  - "spain"
---

# Spain RGB orthophotos 10 cm

## 数据集简介

Mosaics of orthophotos from flights carried out between 2007 and 2018 by
various public administration bodies at 10cm pixel resolution.
This data is provided by National Plan for Aerial Orthophotography Spain
([PNOA](https://pnoa.ign.es)).

For more information, please see the
[Spain orthophotos documentation](https://pnoa.ign.es/web/portal/pnoa-imagen/proceso-fotogrametrico)

## 基本信息

- 数据集编号（Earth Engine ID）：`Spain/PNOA/PNOA10`
- 数据类型：影像集合（ImageCollection）
- 提供方：Spain orthophotos、Google Earth Engine
- 时间范围：2007-01-01 至 2019-01-01
- 空间分辨率：0.1 米
- 许可：proprietary
- 关键词：orthophotos, pnoa, rgb, spain

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.1 |  |
| G | Green | 0.1 |  |
| B | Blue | 0.1 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Spain/PNOA/PNOA10');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Spain_PNOA_PNOA10
- 数据引用：National Geographic Institute Spain

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
