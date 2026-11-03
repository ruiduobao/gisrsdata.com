---
title: "ALOS/AVNIR-2 ORI"
date: 2026-11-03 12:00:00
permalink: /pages/d4abf354/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "avnir-2"
  - "eorc"
  - "jaxa"
  - "orthophoto"
  - "satellite-imagery"
  - "visible"
---

# ALOS/AVNIR-2 ORI

## 数据集简介

This dataset is contains orthorectified imagery from
the Advanced Visible and Near Infrared Radiometer type 2 (AVNIR-2)
sensor on-board the Advanced Land Observing Satellite (ALOS) \"DAICHI\".

The AVNIR-2 ORI product was created from AVNIR-2 1B1 data after stereo
matching with reference to ALOS's Panchromatic Remote-sensing Instrument
for Stereo Mapping (PRISM)-derived DSM AW3D30. The orthorectification
process used AW3D30 DSM data when available and SRTM (The Shuttle
Radar Topography Mission) DSM data otherwise.

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/AVNIR-2/ORI`
- 数据类型：影像集合（ImageCollection）
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 时间范围：2006-04-26 至 2011-04-18
- 空间分辨率：10 米
- 许可：proprietary
- 关键词：alos, avnir-2, eorc, jaxa, orthophoto, satellite-imagery, visible

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Blue (0.42 - 0.50 &mu;m) | 10 |  |
| B2 | Green (0.52 - 0.60 &mu;m) | 10 |  |
| B3 | Red (0.61 - 0.69 &mu;m) | 10 |  |
| B4 | Near-Infrared (0.76 - 0.89 &mu;m) | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/ALOS/AVNIR-2/ORI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
