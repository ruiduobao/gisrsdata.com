---
title: "WaPOR 实际蒸散发与截留 3.0"
date: 2026-11-03 12:00:00
permalink: /pages/aca03f09/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "fao"
  - "wapor"
  - "water"
  - "water-vapor"
---

# WaPOR 实际蒸散发与截留 3.0

英文原名：WAPOR Actual Evapotranspiration and Interception 3.0

## 这是什么数据

实际蒸散发与截留（ETIa，旬尺度，毫米/天）是土壤蒸发（E）、冠层蒸腾（T）与叶片截留降雨的蒸发（I）之和。每个像元的值表示给定旬内的日均 ETIa。

## 覆盖范围与时间

- 覆盖范围：WaPOR 项目覆盖区
- 时间范围：2018-01-01 至 2026-10-11

## 分辨率与规格

- 空间分辨率：约 326.13 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| L1-AETI-D | 实际蒸散发与截留（旬）[mm] | 326.13 |  |

## 能拿来做什么

- 灌溉用水量与水分生产率评估
- 作物需水与灌溉调度
- 干旱监测与农业水资源管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('FAO/WAPOR/3/L1_AETI_D');
```

- 数据集编号（Earth Engine ID）：`FAO/WAPOR/3/L1_AETI_D`
- 提供方：FAO UN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_WAPOR_3_L1_AETI_D

## 许可与引用

- 许可：proprietary
- 关键词：agriculture, fao, wapor, water, water-vapor
- 数据引用：FAO 2018. WaPOR Database Methodology: Level 1. Remote Sensing for Water
Productivity Technical Report: Methodology Series. Rome, FAO. 72 pages.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [WAPOR Actual Evapotranspiration and Interception 2.0](/pages/f46d014b/)
- [WAPOR Daily Reference Evapotranspiration 2.0](/pages/8bd45090/)
- [WAPOR Daily Reference Evapotranspiration 3.0](/pages/c0820d5a/)
- [WAPOR Dekadal Evaporation 2.0](/pages/35b35c74/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
