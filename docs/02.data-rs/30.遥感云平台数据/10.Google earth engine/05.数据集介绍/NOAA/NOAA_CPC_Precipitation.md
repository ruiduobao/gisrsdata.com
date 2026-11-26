---
title: "CPC 全球统一雨量计逐日降水分析"
date: 2026-11-03 12:00:00
permalink: /pages/9d6b70e8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "noaa"
  - "precipitation"
  - "weather"
---

# CPC 全球统一雨量计逐日降水分析

英文原名：CPC Global Unified Gauge-Based Analysis of Daily Precipitation

## 这是什么数据

CPC 统一雨量计全球逐日降水分析数据集提供 1979 年至今的陆地逐日降水估计。由 NOAA 气候预测中心（CPC）开发，它利用最优插值技术组合全球雨量计网络的数据，超过 30,000 个雨量计贡献于回顾版本（1979–2005），约 17,000 个贡献于实时版本（2006 至今）。数据以 0.5 度分辨率提供，包括降水量（以 0.1 毫米计）与每个格网单元使用的雨量计数，使用户能评估数据质量。

数据集的质量在热带非洲与南极洲被认为较差，且一般随雨量计密度变化。实时数据会随着更完整的站点数据可用而修订。

[此](https://ftp.cpc.ncep.noaa.gov/precip/CPC_UNI_PRCP/GAUGE_GLB/DOCU/) 文件夹有全部技术文档。

注：当前版本的数据集不提供 1979 至 2005 年的历史数据。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：2006 年至 2026 年；分辨率：55,500 米。
- 时间范围：2006-01-01 至 2026-10-30

## 分辨率与规格

- 空间分辨率：约 55,500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | 以 0.1 毫米计的逐日总降水估计。 | 55500 |  |
| num_gauges | 0.5 度格网单元内贡献于降水估计的雨量计数。 | 55500 |  |

## 能拿来做什么

- 全球降水监测
- 气候分析
- 水文应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CPC/Precipitation');
```

- 数据集编号（Earth Engine ID）：`NOAA/CPC/Precipitation`
- 提供方：NOAA Physical Sciences Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CPC_Precipitation

## 许可与引用

- 许可：proprietary
- 关键词：daily, noaa, precipitation, weather
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
