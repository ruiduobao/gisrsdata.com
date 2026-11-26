---
title: "RTMA：实时中尺度分析"
date: 2026-11-03 12:00:00
permalink: /pages/d0d6c80e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "cloud"
  - "geophysical"
  - "humidity"
  - "noaa"
  - "nws"
  - "precipitation"
  - "pressure"
  - "rtma"
  - "surface"
  - "temperature"
---

# RTMA：实时中尺度分析

英文原名：RTMA: Real-Time Mesoscale Analysis

## 这是什么数据

实时中尺度分析（RTMA）是近地表天气状况的高时空分辨率分析。本数据集包括美国本土 2.5 公里逐小时分析。

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：2011 年至今（逐小时）；分辨率：2,500 米。
- 时间范围：2011-01-01 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 2,500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HGT | 模式地形高程 | 2500 |  |
| PRES | 气压 | 2500 |  |
| TMP | 温度 | 2500 |  |
| DPT | 露点温度 | 2500 |  |
| UGRD | 风的 U 分量 | 2500 |  |
| VGRD | 风的 V 分量 | 2500 |  |
| SPFH | 比湿 | 2500 |  |
| WDIR | 风向（风的来向） | 2500 |  |
| WIND | 风速 | 2500 |  |
| GUST | 风速（阵风） | 2500 |  |
| VIS | 能见度 | 2500 |  |
| TCDC | 总云量 | 2500 |  |
| ACPC01 | 总降水量 | 2500 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/NWS/RTMA');
```

- 数据集编号（Earth Engine ID）：`NOAA/NWS/RTMA`
- 提供方：NOAA/NWS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NWS_RTMA

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, cloud, geophysical, humidity, noaa, nws, precipitation, pressure, rtma, surface, temperature, visibility, weather, wind
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AERDB_D3_VIIRS_NOAA20.002：VIIRS/NOAA-20 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/64c851e2/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
