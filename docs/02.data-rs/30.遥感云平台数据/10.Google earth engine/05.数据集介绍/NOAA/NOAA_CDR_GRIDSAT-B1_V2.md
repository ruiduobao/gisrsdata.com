---
title: "NOAA CDR GRIDSAT-B1：地球静止红外通道亮温"
date: 2026-11-03 12:00:00
permalink: /pages/a8c34af0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brightness"
  - "cdr"
  - "climate"
  - "fundamental"
  - "geostationary"
  - "infrared"
  - "isccp"
  - "noaa"
  - "reflectance"
  - "sr"
  - "weather-and-climate"
---

# NOAA CDR GRIDSAT-B1：地球静止红外通道亮温

英文原名：NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature

## 这是什么数据

注：由于持续的基础设施更新，本数据集自 2024-03-31 起未被提供方更新。目前没有数据集更新何时恢复的时间表。

本数据集提供来自地球静止卫星的全球红外测量的高质量气候数据记录（CDR）。

地球静止卫星数据（GridSat-B1）提供 3 个通道的数据：CDR 质量的红外窗口（IRWIN）通道（近 11 μm）、可见光通道（近 0.6 μm）与红外水汽（IRWVP）通道（近 6.7 μm）。GridSat-B1 数据投影到全球 0.07 度纬度等角格网上，日期覆盖从 1980 年至今。此数据来自 3 小时国际卫星云气候学项目（ISCCP）B1 数据。本数据集中包括的卫星及其随时间的经度覆盖见[此处](https://www.ncdc.noaa.gov/gridsat/images/isccp_coverage_VZA60_nolegend.png)。在重叠区域，CDR 方法通过为每个格网点选择最天底的观测合并卫星。

注：

- satid 到卫星名称的映射包含在影像的属性中，形式为 satid_number: "satellite_name"，如 satid_0: GOES-13、satid_1: GOES-15、satid_2: GOES-16。

- IRWIN 数据已校正观测天顶角，但此校正并不完美。它还以相同方式处理所有卫星，而观测天顶角依赖性会因卫星而异。一些 VZA 残差将显而易见。

- IRWVP 数据没有观测天顶角校正，不是 CDR 质量。

- VSCHN 数据没有观测天顶角校正，不是 CDR 质量。

- 移除 IRWIN 通道的观测天顶角校正可如下完成：
  Original_temperature_observed = irwin_cdr - irwin_vza_adj

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1980 年至 2024 年；分辨率：7,792 米。
- 时间范围：1980-01-01 至 2024-09-30

## 分辨率与规格

- 空间分辨率：约 7,792 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| irwin_cdr | 近 11 μm 亮温，最天底观测。 | 7792 |  |
| irwin_2 | 近 11 μm 亮温，第二佳观测（基于观测天顶角）。 | 7792 |  |
| irwin_3 | 亮温，基于观测天顶角的第三佳观测。 | 7792 |  |
| irwvp | 近 6.7 μm 亮温，最天底观测。 | 7792 |  |
| irwvp_2 | 近 6.7 μm 亮温，基于观测天顶角的第二佳观测。 | 7792 |  |
| vschn | 近 0.6 μm 可见光反射率，最天底观测。 | 7792 |  |
| vschn_2 | 近 0.6 μm 可见光反射率，基于观测天顶角的第二佳观测。 | 7792 |  |
| irwin_vza_adj | 对所有 IRWIN 通道所做的调整。提供它是为了让用户能反转 irwin_cdr 变量的观测天顶角校正。 | 7792 |  |
| satid_ir1 | irwin_cdr 的 satid 值。对于此波段与其他 satid 波段，satid 到卫星名称的映射在每景影像的属性中给出。 | 7792 |  |
| satid_ir2 | irwin_2 的逐像元 satid 值。 | 7792 |  |
| satid_ir3 | irwin_3 的逐像元 satid 值。 | 7792 |  |
| satid_wv1 | irwvp 的逐像元 satid 值。 | 7792 |  |
| satid_wv2 | irwvp2 的逐像元 satid 值。 | 7792 |  |
| satid_vs1 | vischn 的逐像元 satid 值。 | 7792 |  |
| satid_vs2 | vischn2 的逐像元 satid 值。 | 7792 |  |

## 能拿来做什么

- 地球静止卫星气候记录
- 云与天气分析
- 红外亮温长期序列

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/GRIDSAT-B1/V2');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/GRIDSAT-B1/V2`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_GRIDSAT-B1_V2

## 许可与引用

- 许可：proprietary
- 关键词：brightness, cdr, climate, fundamental, geostationary, infrared, isccp, noaa, reflectance, sr, weather-and-climate
- 数据引用：Kenneth R. Knapp, and NOAA CDR Program (2014): NOAA Climate Data Record
(CDR) of Gridded Satellite Data from ISCCP B1 (GridSat-B1) 11 micron
Brightness Temperature, Version 2. [indicate subset used]. NOAA National
Climatic Data Center. [doi:10.7289/V59P2ZKR](https://doi.org/10.7289/V59P2ZKR)
[access date].

- DOI：10.7289/V59P2ZKR

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR PATMOSX：云特性、反射率与亮温，版本 5.3](/pages/2e70bee4/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
