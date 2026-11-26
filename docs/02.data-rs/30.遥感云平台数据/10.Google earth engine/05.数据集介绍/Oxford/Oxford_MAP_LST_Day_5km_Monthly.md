---
title: "牛津 MAP LST：疟疾地图项目间隙填充白天地表温度 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/b4606dbf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "lst"
  - "map"
  - "oxford"
  - "surface-temperature"
  - "weather-and-climate"
---

# 牛津 MAP LST：疟疾地图项目间隙填充白天地表温度 [已弃用]

英文原名：Oxford MAP LST: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature [deprecated]

## 这是什么数据

本白天产品的底层数据集是 MODIS 地表温度数据（MOD11A2），使用 Weiss 等（2014）概述的方法做间隙填充，以消除云覆盖等因素造成的数据缺失。无间隙产出随后在时间与空间上聚合，生成逐月约 5 公里产品。

本数据集由疟疾地图项目（英国牛津大学大数据研究所，[https://malariaatlas.org/](https://malariaatlas.org/)）的 Harry Gibson 与 Daniel Weiss 制作。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2001 年至 2015 年（逐月）；分辨率：5,000 米。
- 时间范围：2001-03-01 至 2015-06-01

## 分辨率与规格

- 空间分辨率：约 5,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Mean | 每个聚合像元的白天地表温度平均值。 | 5000 |  |
| FilledProportion | 质量控制波段，标明每个结果像元中由原始数据（相对间隙填充估算）构成的百分比。 | 5000 |  |

## 能拿来做什么

- 为疟疾传播环境因素研究提供长时序环境变量。
- 做疾病生态与媒介分布建模。
- 与其他健康地理数据联用分析。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Oxford/MAP/LST_Day_5km_Monthly');
```

- 数据集编号（Earth Engine ID）：`Oxford/MAP/LST_Day_5km_Monthly`
- 提供方：Oxford Malaria Atlas Project、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_LST_Day_5km_Monthly

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：lst, map, oxford, surface-temperature, weather-and-climate
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
