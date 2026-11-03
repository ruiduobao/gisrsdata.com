---
title: "Finland RGB NLS orthophotos 50 cm by SMK"
date: 2026-11-03 12:00:00
permalink: /pages/9ac43642/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "finland"
  - "orthophotos"
  - "rgb"
  - "smk"
---

# Finland RGB NLS orthophotos 50 cm by SMK

## 数据集简介

NLS Orthophotos are an aerial photo dataset covering the whole of Finland.
This data is provided by SMK([The Energy Agency](https://energiavirasto.fi/etusivu),
formerly abbreviated SMK). An orthophoto is a combination of several
individual aerial photos. The aerial photo data set in orthophoto format is
available as the most recent data set consisting of the most recent aerial
photos available. The most recent data is usually 1-3 years old. NLS
Orthophotos are updated every 3 years (in Northern Lapland 12 years).

(In Dataset id, V stands for "v&auml;ri", which means "color" as opposed to
"false color")
For more information, please see the
[NLS orthophotos documentation](https://www.maanmittauslaitos.fi/en/maps-and-spatial-data/expert-users/product-descriptions/orthophotos)

## 基本信息

- 数据集编号（Earth Engine ID）：`Finland/SMK/V/50cm`
- 数据类型：影像集合（ImageCollection）
- 提供方：NLS orthophotos、Google Earth Engine
- 时间范围：2015-01-01 至 2023-01-01
- 空间分辨率：0.5 米
- 许可：CC-BY-4.0
- 关键词：finland, orthophotos, rgb, smk

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.5 |  |
| G | Green | 0.5 |  |
| B | Blue | 0.5 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Finland/SMK/V/50cm');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Finland_SMK_V_50cm
- 数据引用：The National Land Survey of Finland

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
