---
title: "ALOS AVNIR-2 正射影像（ORI）"
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

# ALOS AVNIR-2 正射影像（ORI）

英文原名：ALOS/AVNIR-2 ORI

## 这是什么数据

本数据集包含来自陆地观测卫星（ALOS）"DAICHI"所载高级可见光与近红外辐射计 2 型（AVNIR-2）传感器的正射校正影像。

AVNIR-2 ORI 产品由 AVNIR-2 1B1 数据经立体匹配生成，参考了由 ALOS 全色立体测绘遥感仪（PRISM）推导的 DSM 产品 AW3D30。正射校正过程中，有 AW3D30 DSM 数据时使用该数据，否则使用 SRTM（航天飞机雷达地形测绘任务）DSM 数据。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球（ALOS 观测区）；时间范围：2006 年 4 月 26 日至 2011 年 4 月 18 日；分辨率：10 米。
- 时间范围：2006-04-26 至 2011-04-18

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 蓝光（0.42–0.50 μm） | 10 |  |
| B2 | 绿光（0.52–0.60 μm） | 10 |  |
| B3 | 红光（0.61–0.69 μm） | 10 |  |
| B4 | 近红外（0.76–0.89 μm） | 10 |  |

## 能拿来做什么

- 历史高分辨率光学影像分析
- 土地覆盖变化回溯
- 正射影像底图与目视解译

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/ALOS/AVNIR-2/ORI');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/AVNIR-2/ORI`
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AVNIR-2_ORI

## 许可与引用

- 许可：proprietary
- 关键词：alos, avnir-2, eorc, jaxa, orthophoto, satellite-imagery, visible
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS-2 PALSAR-2 StripMap Level 2.1](/pages/b836b19e/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0](/pages/13015f55/)
- [PALSAR-2 ScanSAR Level 2.2](/pages/636ee51c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
