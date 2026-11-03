---
title: "Netherlands orthophotos"
date: 2026-11-03 12:00:00
permalink: /pages/15c7de2b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "netherlands"
  - "orthophotos"
  - "rgb"
---

# Netherlands orthophotos

## 数据集简介

Orthophotos of Netherlands is a set of color orthoimages. Two nationwide
aerial photographs are collected per year: a leafless image at 7.5 cm
resolution in the spring and one with leaves on trees at 25 cm resolution
in the summer.

For more information, please see the
[Netherlands orthophotos documentation](https://opendata.beeldmateriaal.nl/)

## 基本信息

- 数据集编号（Earth Engine ID）：`Netherlands/Beeldmateriaal/LUCHTFOTO_RGB`
- 数据类型：影像集合（ImageCollection）
- 提供方：Beeldmateriaal Nederland、Google Earth Engine
- 时间范围：2021-01-01 至 2022-12-31
- 空间分辨率：0.08 米
- 许可：CC-BY-4.0
- 关键词：netherlands, orthophotos, rgb

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.08 |  |
| G | Green | 0.08 |  |
| B | Blue | 0.08 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Netherlands/Beeldmateriaal/LUCHTFOTO_RGB');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Netherlands_Beeldmateriaal_LUCHTFOTO_RGB
- 数据引用：opendata.beeldmaterial.nl

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
