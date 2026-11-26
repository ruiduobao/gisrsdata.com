---
title: "ECMWF 近实时 IFS 海浪预报"
date: 2026-11-03 12:00:00
permalink: /pages/2f7bc360/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecmwf"
  - "forecast"
  - "global"
  - "oceans"
  - "weather-and-climate"
---

# ECMWF 近实时 IFS 海浪预报

英文原名：ECMWF Near-Realtime IFS Wave Forecasts

## 这是什么数据

本数据集包含 ECMWF 综合预报系统（IFS）在 0.25 度分辨率下生成的海浪模式场的 15 天预报。我们称之为近实时（NRT），因为新产品每天发布两次，紧随 ECMWF 实时预报数据的发布，本数据集是其子集。数据可在[正确署名](https://apps.ecmwf.int/datasets/licences/general/)的前提下分发与商业使用。

Earth Engine 中的产品自 [Cycle 49r1](https://confluence.ecmwf.int/display/FCST/Implementation+of+IFS+Cycle+49r1) 于 2024/11/12 实施起提供；更早的产品不包含在内。ECMWF NRT 数据集的使用通则见其[用户文档](https://confluence.ecmwf.int/display/DAC/ECMWF+open+data%3A+real-time+forecasts+from+IFS+and+AIFS)。源文件可在 [Google Cloud marketplace](https://console.cloud.google.com/marketplace/product/bigquery-public-data/open-data-ecmwf) 获取。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2024-11-12 至 2026-11-02
- 更新节奏：每天两次

## 分辨率与规格

- 空间分辨率：约 28,000 米（0.25 度格距）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean_zero_crossing_wave_period_sfc | 海/洋表面穿越平均海平面的时刻之间的平均时间长度（平均过零波周期） | 28000 |  |
| significant_height_of_combined_wind_waves_and_swell_sfc | 由风浪与涌浪生成的海/洋表面波浪中最高三分之一波浪的平均高度，表示波峰与波谷之间的垂直距离 | 28000 |  |
| mean_wave_direction_sfc | 海/洋表面波浪相对于北极地理位置的平均方向（如 0 表示「来自北方」、90 表示「来自东方」） | 28000 |  |
| peak_wave_period_sfc | 由局地风生成、并与涌浪相关的最具能量的海浪的周期。波周期是海/洋表面上两个相继波峰通过一固定点所需的平均时间 | 28000 |  |
| mean_wave_period_sfc | 海/洋表面上两个相继波峰通过一固定点所需的平均时间 | 28000 |  |

## 能拿来做什么

- 海浪预报与航运安全
- 海上作业与港口调度
- 海岸防灾与海浪灾害预警

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ECMWF/NRT_FORECAST/IFS/WAVE');
```

- 数据集编号（Earth Engine ID）：`ECMWF/NRT_FORECAST/IFS/WAVE`
- 提供方：ECMWF、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_NRT_FORECAST_IFS_WAVE

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ecmwf, forecast, global, oceans, weather-and-climate
- DOI：10.21957/open-data

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/pages/423330ad/)
- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
