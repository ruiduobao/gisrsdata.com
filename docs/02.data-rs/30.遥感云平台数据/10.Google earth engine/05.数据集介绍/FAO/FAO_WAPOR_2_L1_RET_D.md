---
title: "WaPOR 旬参考蒸散发 2.0"
date: 2026-11-03 12:00:00
permalink: /pages/52a93d06/
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

# WaPOR 旬参考蒸散发 2.0

英文原名：WAPOR Dekadal Reference Evapotranspiration 2.0

## 这是什么数据

参考蒸散发（RET）定义为一种假想参考作物的蒸散发，模拟水分充足的草地表面的行为。每个像元的值表示该旬日参考蒸散发的平均值。

## 覆盖范围与时间

- 覆盖范围：WaPOR 项目覆盖区
- 时间范围：2009-01-01 至 2023-03-11

## 分辨率与规格

- 空间分辨率：约 18,924 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| L1_RET_D | 参考蒸散发（旬）[mm] | 18924 |  |

## 能拿来做什么

- 灌溉用水量与水分生产率评估
- 作物需水与灌溉调度
- 干旱监测与农业水资源管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('FAO/WAPOR/2/L1_RET_D');
```

- 数据集编号（Earth Engine ID）：`FAO/WAPOR/2/L1_RET_D`
- 提供方：FAO UN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_WAPOR_2_L1_RET_D

## 许可与引用

- 许可：proprietary
- 关键词：agriculture, fao, wapor, water, water-vapor
- 数据引用：FAO 2018. WaPOR Database Methodology: Level 1. Remote Sensing for Water
Productivity Technical Report: Methodology Series. Rome, FAO. 72 pages.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [WAPOR Actual Evapotranspiration and Interception 2.0](/pages/f46d014b/)
- [WAPOR Actual Evapotranspiration and Interception 3.0](/pages/aca03f09/)
- [WAPOR Daily Reference Evapotranspiration 2.0](/pages/8bd45090/)
- [WAPOR Daily Reference Evapotranspiration 3.0](/pages/c0820d5a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
