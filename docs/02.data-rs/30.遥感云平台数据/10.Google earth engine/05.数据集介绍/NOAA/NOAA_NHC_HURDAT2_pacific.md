---
title: "NOAA NHC HURDAT2 太平洋飓风目录"
date: 2026-11-03 12:00:00
permalink: /pages/9ad1a384/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "hurricane"
  - "nhc"
  - "noaa"
  - "table"
  - "weather"
  - "weather-and-climate"
---

# NOAA NHC HURDAT2 太平洋飓风目录

英文原名：NOAA NHC HURDAT2 Pacific Hurricane Catalog

## 这是什么数据

飓风最佳路径数据库（HURDAT2）。

太平洋盆地 1949–2018。

## 覆盖范围与时间

- 覆盖范围：空间：太平洋盆地；时间：1949 年至 2018 年；类型：矢量/表格。
- 时间范围：1949-06-11 至 2018-11-09

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| seq | DOUBLE | 当年的 ATCF 气旋编号 |
| name | STRING | 飓风名称。例如「ALEX」 |
| datetime | STRING | UTC 观测时间。格式为 YYYY-MM-DDTHH:MM:SS。 |
| record_id | STRING | 指定飓风路径中特定事件的单字母。无代码时为空字符串。C：最接近海岸但未登陆；G：生成；I：气压与风速两方面的强度峰值；L：登陆（系统中心越过海岸线）；P：中心气压最低值；R：气旋快速变化时提供强度细节；S：系统状态变化；T：提供气旋路径（位置）细节；W：最大持续风速（原文作「desinating」，系 designating 之误） |
| status | STRING | 系统状态：DB：扰动（任意强度）；ET：未知，仅出现在 HARVEY 中；EX：温带气旋（任意强度）；HU：飓风强度的热带气旋（> 64 节）；LO：既非热带气旋、副热带气旋也非温带气旋的低压（任意强度）；SD：副热带低压强度的副热带气旋（< 34 节）；SS：副热带风暴强度的副热带气旋（> 34 节）；TD：热带低压强度的热带气旋（< 34 节）；TS：热带风暴强度的热带气旋（34–63 节）；WV：东风波（任意强度） |
| max_wind_kts | DOUBLE | 最大风速 |
| min_pressure | DOUBLE | 最低气压 |
| numEntries | DOUBLE | 某场飓风的点数 |
| radii_ne_34kt | DOUBLE | 34 节风圈在东北象限的最大范围 |
| radii_se_34kt | DOUBLE | 34 节风圈在东南象限的最大范围 |
| radii_sw_34kt | DOUBLE | 34 节风圈在西南象限的最大范围 |
| radii_nw_34kt | DOUBLE | 34 节风圈在西北象限的最大范围 |
| radii_ne_50kt | DOUBLE | 50 节风圈在东北象限的最大范围 |
| radii_se_50kt | DOUBLE | 50 节风圈在东南象限的最大范围 |
| radii_sw_50kt | DOUBLE | 50 节风圈在西南象限的最大范围 |
| radii_nw_50kt | DOUBLE | 50 节风圈在西北象限的最大范围 |
| radii_ne_64kt | DOUBLE | 64 节风圈在东北象限的最大范围 |
| radii_se_64kt | DOUBLE | 64 节风圈在东南象限的最大范围 |
| radii_sw_64kt | DOUBLE | 64 节风圈在西南象限的最大范围 |
| radii_nw_64kt | DOUBLE | 64 节风圈在西北象限的最大范围 |
| basin | STRING | 洋盆地。恒为以下之一：CP：中北太平洋；EP：东北太平洋 |
| id | STRING | 某场飓风的代码。基本代码后接 2 位气旋编号再接 4 位年份。例如「CP011993」 |
| year | DOUBLE | 飓风发生的年份 |

## 能拿来做什么

- 做太平洋飓风频次与强度的长期趋势分析。
- 为沿海灾害风险评估提供历史飓风样本。
- 检验飓风预报路径与强度误差。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('NOAA/NHC/HURDAT2/pacific');
```

- 数据集编号（Earth Engine ID）：`NOAA/NHC/HURDAT2/pacific`
- 提供方：NOAA NHC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NHC_HURDAT2_pacific

## 许可与引用

- 许可：proprietary
- 关键词：hurricane, nhc, noaa, table, weather, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA NHC HURDAT2 大西洋飓风目录](/pages/8e9e1c36/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
