---
title: "ERA5-Land 静态变量 — ECMWF 气候再分析"
date: 2026-11-03 12:00:00
permalink: /pages/1932ca55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cds"
  - "climate"
  - "copernicus"
  - "ecmwf"
  - "era5-land"
  - "evaporation"
  - "heat"
  - "lakes"
  - "precipitation"
  - "pressure"
  - "radiation"
  - "reanalysis"
---

# ERA5-Land 静态变量 — ECMWF 气候再分析

英文原名：ERA5-Land Static - ECMWF Climate Reanalysis

## 这是什么数据

ERA5-Land 是一套再分析数据集，相比 ERA5 以更高的分辨率、一致地呈现数十年间陆地变量的演变。ERA5-Land 通过重演 ECMWF ERA5 气候再分析的陆面分量制作而成。再分析利用物理规律，将模式数据与来自世界各地的观测结合成全球完整、一致的数据集。再分析数据可回溯数十年，准确描述过去的气候。本数据集包含 CDS 上提供的全部 50 个变量。

ERA5-Land 数据自 1950 年起提供至距实时三个月。

请查阅 [ERA5-Land「已知问题」一节](https://confluence.ecmwf.int/display/CKB/ERA5-Land%3A+data+documentation)。特别注意，总蒸散的三个分量取值互换如下：

* 变量「Evaporation from bare soil」（mars 参数代码 228101（evabs））的值对应「Evaporation from vegetation transpiration」（mars 参数 228103（evavt））；
* 变量「Evaporation from open water surfaces excluding oceans」（mars 参数代码 228102（evaow））的值对应「Evaporation from bare soil」（mars 参数代码 228101（evabs））；
* 变量「Evaporation from vegetation transpiration」（mars 参数代码 228103（evavt））的值对应「Evaporation from open water surfaces excluding oceans」（mars 参数代码 228102（evaow））。

本数据集包含 ERA5-Land 的静态变量，这些变量不随时间变化。

## 覆盖范围与时间

- 覆盖范围：全球陆地
- 时间范围：1950-01-01 至 至今
- 更新节奏：静态，不随时间变化

## 分辨率与规格

- 空间分辨率：约 11,132 米（约 11 公里格距）
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| glacier_mask | 格箱被冰（冰川或冰盖）覆盖的比例。取值在 0 与 1 之间，但不随时间变化。 | 11132 |  |
| lake_cover | 格箱被湖泊（内陆水体）占据的比例。取值在 0 与 1 之间，但不随时间变化。 | 11132 |  |
| high_vegetation_cover | 格箱被归类为「高」的植被覆盖的比例。取值在 0 与 1 之间，但不随时间变化。「高植被」包括常绿乔木、落叶乔木、混交林/林地与间断林。 | 11132 |  |
| low_vegetation_cover | 格箱被归类为「低」的植被覆盖的比例。取值在 0 与 1 之间，但不随时间变化。「低植被」包括作物与混合农业、灌溉作物、矮草、高草、苔原、半荒漠、沼泽、常绿灌木、落叶灌木以及水陆混合。 | 11132 |  |
| lake_total_depth | 湖泊的总深度（水体与冰部分合计）。本参数不随时间变化。 | 11132 |  |
| land_sea_mask | 格箱为陆地的比例。取值在 0 与 1 之间，但不随时间变化。 | 11132 |  |
| soil_type | ECMWF 综合预报系统（IFS）陆面方案所用的土壤质地（或分类），用于在土壤水分与径流计算中预报土壤的持水能力。它来自 FAO/UNESCO 世界数字土壤图（DSMW，FAO，2003）的根区数据（地表以下 30–100 厘米）。 | 11132 |  |
| type_of_high_vegetation | 指示 ECMWF 综合预报系统所识别的高植被类型。植被类型用于计算地表能量平衡与积雪反照率。本参数不随时间变化。 | 11132 |  |
| type_of_low_vegetation | 指示 ECMWF 综合预报系统所识别的低植被类型。植被类型用于计算地表能量平衡与积雪反照率。本参数不随时间变化。 | 11132 |  |

## 能拿来做什么

- 查询冰川掩膜、湖泊覆盖、高/低植被覆盖与土壤类型等静态参数
- 作为 ERA5-Land 分析的辅助底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('ECMWF/ERA5_LAND/STATIC');
```

- 数据集编号（Earth Engine ID）：`ECMWF/ERA5_LAND/STATIC`
- 提供方：Copernicus Climate Data Store、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_STATIC

## 许可与引用

- 许可：proprietary
- 关键词：cds, climate, copernicus, ecmwf, era5-land, evaporation, heat, lakes, precipitation, pressure, radiation, reanalysis, runoff, snow, soil-water, temperature, vegetation, weather-and-climate, wind
- 数据引用：Mu&ntilde;oz Sabater, J., (2019): ERA5-Land monthly averaged data from 1981
to present. Copernicus Climate Change Service (C3S) Climate Data Store
(CDS). (&lt;date of access&gt;),
[doi:10.24381/cds.68d2bb30](https://doi.org/10.24381/cds.68d2bb30)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis](/pages/a05a1bb7/)
- [ERA5-Land Hourly - ECMWF Climate Reanalysis](/pages/0a0b8372/)
- [ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis](/pages/0889ecdc/)
- [ERA5-Land Monthly Averaged by Hour of Day - ECMWF Climate Reanalysis](/pages/39c04517/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
