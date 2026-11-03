---
title: "DESS China Terrace Map v1"
date: 2026-11-03 12:00:00
permalink: /pages/3c0d1c61/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "china"
  - "dess"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "terrace"
  - "tsinghua"
---

# DESS China Terrace Map v1

## 数据集简介

This dataset is a China terrace map at 30 m resolution in 2018. It was
developed through supervised pixel-based classification using multisource and
multi-temporal data based on the Google Earth Engine platform. The overall
accuracy and kappa coefficient achieved 94% and 0.72, respectively. This first
30 m China terrace map can be used for studies on soil erosion, food
security, biogeochemical cycle, biodiversity, and ecosystem service
assessments.

## 基本信息

- 数据集编号（Earth Engine ID）：`Tsinghua/DESS/ChinaTerraceMap/v1`
- 数据类型：影像（Image）
- 提供方：Department of Earth System Science, Tsinghua University (DESS, THU)、Google Earth Engine
- 时间范围：2018-01-01 至 2019-01-01
- 许可：CC-BY-4.0
- 关键词：agriculture, china, dess, landcover, landuse, landuse-landcover, terrace, tsinghua

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| terrace | 1 when a terrace is present, 0 when it is not. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('Tsinghua/DESS/ChinaTerraceMap/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Tsinghua_DESS_ChinaTerraceMap_v1
- 数据引用：Cao, B., Yu, L., Naipal, V., Ciais, P., Li, W., Zhao, Y., Wei, W.,
Chen, D., Liu, Z., and Gong, P.: A 30 m terrace mapping in China using
Landsat 8 imagery and digital elevation model based on the Google Earth
Engine, Earth Syst. Sci. Data, 13, 2437-2456,
[doi:10.5194/essd-13-2437-2021](https://doi.org/10.5194/essd-13-2437-2021), 2021.

- DOI：10.5194/essd-13-2437-2021

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
