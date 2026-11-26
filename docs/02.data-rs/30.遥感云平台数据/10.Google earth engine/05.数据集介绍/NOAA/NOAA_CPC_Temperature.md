---
title: "CPC 全球统一温度"
date: 2026-11-03 12:00:00
permalink: /pages/8042cb38/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daily"
  - "noaa"
  - "precipitation"
  - "weather"
  - "weather-and-climate"
---

# CPC 全球统一温度

英文原名：CPC Global Unified Temperature

## 这是什么数据

本数据集提供全球陆地区域逐日地表气温的格网分析，包括逐日最高（Tmax）与最低（Tmin）温度。数据从 1979 年至今，以 0.5 度经纬格网呈现，与 CPC 基于雨量计的全球逐日降水分析的分辨率一致。数据集的构建考虑了地形效应。其主要目的是支持气候监测与预报验证活动。输入数据来自 CPC 的 GTS（全球电信系统）逐日报告档案，包括来自约 6,000 至 7,000 个全球站点的 Tmax 与 Tmin 数据。

技术文档见[此](https://ftp.cpc.ncep.noaa.gov/precip/PEOPLE/wd52ws/global_temp/CPC-GLOBAL-T.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：1979 年至 2026 年；分辨率：55,500 米。
- 时间范围：1979-01-01 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 55,500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tmax | 逐日最高温度。 | 55500 |  |
| tmin | 逐日最低温度。 | 55500 |  |
| nmax | 最高温度的报告数。 | 55500 |  |
| nmin | 最低温度的报告数。 | 55500 |  |

## 能拿来做什么

- 全球温度监测
- 气候分析
- 预报验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CPC/Temperature');
```

- 数据集编号（Earth Engine ID）：`NOAA/CPC/Temperature`
- 提供方：NOAA Physical Sciences Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CPC_Temperature

## 许可与引用

- 许可：proprietary
- 关键词：climate, daily, noaa, precipitation, weather, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
