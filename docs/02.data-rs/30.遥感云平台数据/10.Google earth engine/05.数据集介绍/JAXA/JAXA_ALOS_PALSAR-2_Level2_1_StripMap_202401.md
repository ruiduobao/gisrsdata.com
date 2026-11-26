---
title: "ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）"
date: 2026-11-03 12:00:00
permalink: /pages/b836b19e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos2"
  - "eroc"
  - "jaxa"
  - "palsar2"
  - "radar"
  - "sar"
  - "satellite-imagery"
---

# ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）

英文原名：ALOS-2 PALSAR-2 StripMap Level 2.1

## 这是什么数据

自 2024 年 1 月 1 日夜起，应日本各省厅及相关机构的请求，JAXA 实施了 ALOS-2 PALSAR-2 应急观测。由于 JAXA 认为这些应急观测数据对灾害管理极为有用，决定在 Google Earth Engine 上开放这些数据，供公众与研究使用。

JAXA 发布了 2024 年 1 月 1–3 日与 1 月 8 日的 PALSAR-2 2.1 级条带模式观测数据（3 米、单极化），以及部分存档数据。PALSAR-2 2.1 级数据由 1.1 级数据使用数字高程模型正射校正得到。DN 值可使用以下公式转换为以分贝（dB）为单位的 σ₀ 值：

* σ₀ = 10·log₁₀(DN²) − 83.0 dB

以下为本数据集有数据的日期。

2024/01/01 与 2022/09/26：帧 0750、0760、0770，波束 U2-6L，升轨。2024/01/02 与 2023/06/06：帧 2820、2830、2840，波束 U2-8L，降轨。2024/01/08、2024/01/03 与 2023/12/06：帧 0720、0730，波束 U2-9R，升轨。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：日本周边（2024 年 1 月能登半岛地震应急观测区及部分存档区）；时间范围：2022 年 9 月 26 日至 2024 年 1 月 8 日；分辨率：3 米。
- 时间范围：2022-09-26 至 2024-01-08

## 分辨率与规格

- 空间分辨率：约 3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | HH 极化地形平坦化 γ₀ 后向散射系数。 | 3 |  |

## 能拿来做什么

- 地表形变与灾害应急监测
- 洪水与地表覆盖制图
- 雷达遥感教学与研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401`
- 提供方：JAXA EORC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR-2_Level2_1_StripMap_202401

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：alos2, eroc, jaxa, palsar2, radar, sar, satellite-imagery
- 数据引用：The data used for this paper have been provided by Earth Observation
Research Center (EORC) of Japan Aerospace Exploration Agency (JAXA).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS/AVNIR-2 ORI](/pages/d4abf354/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0](/pages/13015f55/)
- [PALSAR-2 ScanSAR Level 2.2](/pages/636ee51c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
