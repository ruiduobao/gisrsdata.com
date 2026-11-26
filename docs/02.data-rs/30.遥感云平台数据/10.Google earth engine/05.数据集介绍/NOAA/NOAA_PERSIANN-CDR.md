---
title: "PERSIANN-CDR：利用人工神经网络从遥感信息估算降水——气候数据记录"
date: 2026-11-03 12:00:00
permalink: /pages/5f880006/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cdr"
  - "climate"
  - "geophysical"
  - "ncdc"
  - "noaa"
  - "persiann"
  - "precipitation"
  - "weather"
---

# PERSIANN-CDR：利用人工神经网络从遥感信息估算降水——气候数据记录

英文原名：PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record

## 这是什么数据

PERSIANN-CDR 是逐日准全球降水产品，时段为 1983-01-01 至今。数据按季度生产，通常滞后三个月。该产品由加州大学欧文分校水文气象与遥感中心（UC-IRVINE/CHRS）开发，使用由 ISCCP B1 红外数据合并而成的格网卫星（GridSat-B1）红外数据，以及 GPCP 2.2 版。

## 覆盖范围与时间

- 覆盖范围：空间：准全球；时间：1983 年至今（逐日）；分辨率：27,830 米。
- 时间范围：1983-01-01 至 2026-07-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | 估算逐日降水量 | 27830 |  |

## 能拿来做什么

- 做 1983 年以来全球降水长期变化与极端降水分析。
- 为水文模型提供长时段逐日降水强迫场。
- 与 GPCP、IMERG 等降水产品做交叉验证。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/PERSIANN-CDR');
```

- 数据集编号（Earth Engine ID）：`NOAA/PERSIANN-CDR`
- 提供方：NOAA NCDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_PERSIANN-CDR

## 许可与引用

- 许可：proprietary
- 关键词：cdr, climate, geophysical, ncdc, noaa, persiann, precipitation, weather
- 数据引用：Cite this dataset when used as a source: Sorooshian, Soroosh;
Hsu, Kuolin; Braithwaite, Dan; Ashouri, Hamed; and NOAA CDR Program
(2014): NOAA Climate Data Record (CDR) of Precipitation Estimation
from Remotely Sensed Information using Artificial Neural Networks
(PERSIANN-CDR), Version 1 Revision 1. [indicate subset used]. NOAA
National Centers for Environmental Information. doi:
[doi:10.7289/V51V5BWQ](https://doi.org/10.7289/V51V5BWQ)
[access date].

- DOI：10.7289/V51V5BWQ

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
