---
title: "Estonia mono orthophotos"
date: 2026-11-03 12:00:00
permalink: /pages/baca66e9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "estonia"
  - "orthophotos"
---

# Estonia mono orthophotos

## 数据集简介

Orthophotos are an aerial photo dataset covering Estonia.

An orthophoto is a processed aerial photo from which distortions caused
by terrain relief, camera tilt relative to the ground at the moment of
exposure and camera central projection are removed. A digital orthophoto
has a certain pixel size or resolution which shows the smallest
indivisible exposed area on the ground (Ground Sampling Distance, GSD).

Orthophotos have a nationwide coverage and correspond to the scale of
1:5000-1:10000 (pixel size 20-40 cm). Orthophotos for densely-populated
areas are produced with the pixel size of 10-16 cm.

The mono dataset has a single grayscale band with nationwide coverage.

For more information, please see the
[Estonia orthophotos documentation](https://geoportaal.maaamet.ee/eng/Spatial-Data/Orthophotos-p309.html)

## 基本信息

- 数据集编号（Earth Engine ID）：`Estonia/Maamet/orthos/mono`
- 数据类型：影像集合（ImageCollection）
- 提供方：Estonia orthophotos、Google Earth Engine
- 时间范围：1993-01-01 至 2021-06-16
- 空间分辨率：0.4 米
- 许可：proprietary
- 关键词：estonia, orthophotos

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mono | Grayscale | 0.4 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Estonia/Maamet/orthos/mono');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Estonia_Maamet_orthos_mono
- 数据引用：Map data: Estonian Land Board

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
