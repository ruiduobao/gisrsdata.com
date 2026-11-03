---
title: "Slovakia orthophotos"
date: 2026-11-03 12:00:00
permalink: /pages/98803e4e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "orthophotos"
  - "rgb"
---

# Slovakia orthophotos

## 数据集简介

Orthophotomosaic of the Slovak Republic is a set of color orthoimages
without overlaps, gaps and visible brightness and color differences along
the connecting lines.

For more information, please see the
[Slovakia orthophotos documentation](https://www.geoportal.sk/files/zbgis/orto/technicka_sprava_ortofotomozaika_sr_2017-2019.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`Slovakia/orthos/25cm`
- 数据类型：影像集合（ImageCollection）
- 提供方：Slovakia orthophotomosaic、Google Earth Engine
- 时间范围：2017-01-01 至 2020-01-01
- 空间分辨率：0.25 米
- 许可：proprietary
- 关键词：orthophotos, rgb

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.25 |  |
| G | Green | 0.25 |  |
| B | Blue | 0.25 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Slovakia/orthos/25cm');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Slovakia_orthos_25cm
- 数据引用：GKU Bratislava, NLC

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
