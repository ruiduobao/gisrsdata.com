---
title: "DMSP OLS：夜间灯光时间序列版本 4"
date: 2026-11-03 12:00:00
permalink: /pages/65a6304d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dmsp"
  - "eog"
  - "imagery"
  - "lights"
  - "nighttime"
  - "ols"
  - "population"
  - "visible"
  - "yearly"
---

# DMSP OLS：夜间灯光时间序列版本 4

英文原名：DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System

## 这是什么数据

国防气象计划（DMSP）业务线扫描系统（OLS）有在夜间探测可见光与近红外（VNIR）发射源的独特能力。

DMSP-OLS 夜间灯光时间序列版本 4 由使用日历年全部可用存档 DMSP-OLS 平滑分辨率数据制作的无云合成组成。在两颗卫星收集数据的情况下，生产了两个合成。

影像与数据处理由 NOAA 国家地球物理数据中心完成。DMSP 数据由美国空军气象局收集。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1992 年至 2014 年；分辨率：927.67 米。
- 时间范围：1992-01-01 至 2014-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| avg_vis | 可见光波段数字值的平均，无进一步过滤。 | 927.67 |  |
| stable_lights | 清理后的 avg_vis 包含来自城市、城镇与其他有持续照明的地点（包括天然气火炬）的光。短暂事件（如火）已被丢弃。背景噪声已被识别并替换为零值。 | 927.67 |  |
| cf_cvg | 无云覆盖统计进入每个 30 弧秒格网单元的观测总数。此波段可用于识别观测数低、质量降低的区域。 | 927.67 |  |
| avg_lights_x_pct | 无云光探测的平均可见光波段数字值（DN）乘以光探测的百分比频率。纳入探测百分比频率项将结果数字值按照明持续性的变化归一化。例如，仅一半时间被探测到的光的值打五折。注意，本产品包含来自火的探测与可变量的背景噪声。 | 927.67 |  |

## 能拿来做什么

- 夜间灯光长期监测
- 城市化与人口研究
- 社会经济分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS');
```

- 数据集编号（Earth Engine ID）：`NOAA/DMSP-OLS/NIGHTTIME_LIGHTS`
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_NIGHTTIME_LIGHTS

## 许可与引用

- 许可：proprietary
- 关键词：dmsp, eog, imagery, lights, nighttime, ols, population, visible, yearly
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [DMSP OLS：全球辐射校准夜间灯光版本 4](/pages/a2c92c1d/)
- [VIIRS 夜间日/夜波段合成第 1 版（月度）](/pages/331f49de/)
- [VIIRS 夜间日/夜波段年度合成 V2.1](/pages/98ca1d9b/)
- [VIIRS 夜间日/夜波段年度合成 V2.2](/pages/57765f1c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
