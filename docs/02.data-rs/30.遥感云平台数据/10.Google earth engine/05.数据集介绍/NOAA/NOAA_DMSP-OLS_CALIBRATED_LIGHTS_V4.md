---
title: "DMSP OLS：全球辐射校准夜间灯光版本 4"
date: 2026-11-03 12:00:00
permalink: /pages/a2c92c1d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "calibrated"
  - "dmsp"
  - "eog"
  - "imagery"
  - "lights"
  - "nighttime"
  - "ols"
  - "population"
  - "radiance"
  - "visible"
  - "yearly"
---

# DMSP OLS：全球辐射校准夜间灯光版本 4

英文原名：DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System

## 这是什么数据

国防气象计划（DMSP）业务线扫描系统（OLS）有在夜间探测可见光与近红外（VNIR）发射源的独特能力。

本集合包含无传感器饱和的全球夜间灯光影像。传感器通常以高增益设置运行，以能探测月光云。然而，由于六位量化与有限的动态范围，记录的数据在城市中心的明亮核心饱和。在低月球照明下获得了一组有限的观测，其中探测器的增益设置显著低于其典型业务设置（有时低 100 倍）。以低增益设置获取的稀疏数据与以高增益设置获取的业务数据结合，生产出无传感器饱和的全球夜间灯光影像集。来自不同卫星的数据被合并混合进最终产品，以获得最大覆盖。更多信息，见提供方的此 [readme](https://eogdata.mines.edu/dmsp/radcal_readme.txt) 文件。

影像与数据处理由 NOAA 国家地球物理数据中心完成。DMSP 数据由美国空军气象局收集。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1996 年至 2011 年；分辨率：927.67 米。
- 时间范围：1996-03-16 至 2011-07-31

## 分辨率与规格

- 空间分辨率：约 927.67 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| avg_vis | 具有无云光探测的观测的平均数字波段值。 | 927.67 |  |
| cf_cvg | 无云覆盖，进入每个 30 弧秒格网单元的观测总数。此影像可用于识别观测数低、质量降低的区域。 | 927.67 |  |

## 能拿来做什么

- 夜间灯光长期监测
- 城市化与人口研究
- 社会经济分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4');
```

- 数据集编号（Earth Engine ID）：`NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4`
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_CALIBRATED_LIGHTS_V4

## 许可与引用

- 许可：proprietary
- 关键词：calibrated, dmsp, eog, imagery, lights, nighttime, ols, population, radiance, visible, yearly
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [DMSP OLS：夜间灯光时间序列版本 4](/pages/65a6304d/)
- [VIIRS 夜间日/夜波段合成第 1 版（月度）](/pages/331f49de/)
- [VIIRS 夜间日/夜波段年度合成 V2.1](/pages/98ca1d9b/)
- [VIIRS 夜间日/夜波段年度合成 V2.2](/pages/57765f1c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
