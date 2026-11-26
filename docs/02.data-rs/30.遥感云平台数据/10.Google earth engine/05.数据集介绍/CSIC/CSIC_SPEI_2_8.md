---
title: "全球 SPEI 干旱指数数据库（2.8 版，已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/8f385aa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "climate-change"
  - "drought"
  - "evapotranspiration"
  - "global"
  - "monthly"
  - "palmer"
  - "precipitation"
  - "temperature"
  - "water-vapor"
---

# 全球 SPEI 干旱指数数据库（2.8 版，已弃用）

英文原名：SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.8 [deprecated]

## 这是什么数据

全球 SPEI 数据库（SPEIbase）在全球尺度提供长时间、稳健的干旱状况信息，像元大小 0.5 度，月度节奏。它提供 1 到 48 个月时间尺度的 SPEI。

标准化降水蒸散指数（SPEI）以标准化变量（均值为零、单位方差）的形式，表达当前气候平衡（降水减去潜在蒸散）相对于长期平衡的偏差。SPEIbase 计算所用的参考期为整个研究时段。作为标准化变量，SPEI 状况可以在空间和时间上相互比较。

SPEIbase 的潜在蒸散基于 [FAO-56 Penman-Monteith 估算](https://www.fao.org/3/x0490e/x0490e06.htm)。这是它与 SPEI 全球干旱监测（使用 Thornthwaite 方法估算潜在蒸散）的主要区别。Penman-Monteith 方法被认为是更优的方法，因此 SPEIbase 推荐用于大多数用途，包括长期气候学分析。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：1901-01-01 至 2021-01-01
- 更新节奏：每月

## 分辨率与规格

- 空间分辨率：约 55,660 米（像元约 0.5 度）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SPEI_01_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 1 个月累积 | 55660 |  |
| SPEI_02_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 2 个月累积 | 55660 |  |
| SPEI_03_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 3 个月累积 | 55660 |  |
| SPEI_04_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 4 个月累积 | 55660 |  |
| SPEI_05_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 5 个月累积 | 55660 |  |
| SPEI_06_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 6 个月累积 | 55660 |  |
| SPEI_07_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 7 个月累积 | 55660 |  |
| SPEI_08_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 8 个月累积 | 55660 |  |
| SPEI_09_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 9 个月累积 | 55660 |  |
| SPEI_10_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 10 个月累积 | 55660 |  |
| SPEI_11_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 11 个月累积 | 55660 |  |
| SPEI_12_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 12 个月累积 | 55660 |  |
| SPEI_13_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 13 个月累积 | 55660 |  |
| SPEI_14_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 14 个月累积 | 55660 |  |
| SPEI_15_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 15 个月累积 | 55660 |  |
| SPEI_16_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 16 个月累积 | 55660 |  |
| SPEI_17_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 17 个月累积 | 55660 |  |
| SPEI_18_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 18 个月累积 | 55660 |  |
| SPEI_19_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 19 个月累积 | 55660 |  |
| SPEI_20_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 20 个月累积 | 55660 |  |
| SPEI_21_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 21 个月累积 | 55660 |  |
| SPEI_22_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 22 个月累积 | 55660 |  |
| SPEI_23_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 23 个月累积 | 55660 |  |
| SPEI_24_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 24 个月累积 | 55660 |  |
| SPEI_25_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 25 个月累积 | 55660 |  |
| SPEI_26_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 26 个月累积 | 55660 |  |
| SPEI_27_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 27 个月累积 | 55660 |  |
| SPEI_28_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 28 个月累积 | 55660 |  |
| SPEI_29_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 29 个月累积 | 55660 |  |
| SPEI_30_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 30 个月累积 | 55660 |  |
| SPEI_31_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 31 个月累积 | 55660 |  |
| SPEI_32_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 32 个月累积 | 55660 |  |
| SPEI_33_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 33 个月累积 | 55660 |  |
| SPEI_34_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 34 个月累积 | 55660 |  |
| SPEI_35_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 35 个月累积 | 55660 |  |
| SPEI_36_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 36 个月累积 | 55660 |  |
| SPEI_37_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 37 个月累积 | 55660 |  |
| SPEI_38_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 38 个月累积 | 55660 |  |
| SPEI_39_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 39 个月累积 | 55660 |  |
| SPEI_40_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 40 个月累积 | 55660 |  |
| SPEI_41_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 41 个月累积 | 55660 |  |
| SPEI_42_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 42 个月累积 | 55660 |  |
| SPEI_43_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 43 个月累积 | 55660 |  |
| SPEI_44_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 44 个月累积 | 55660 |  |
| SPEI_45_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 45 个月累积 | 55660 |  |
| SPEI_46_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 46 个月累积 | 55660 |  |
| SPEI_47_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 47 个月累积 | 55660 |  |
| SPEI_48_month | 标准化降水蒸散指数（SPEI）：降水与蒸散数据按过去 48 个月累积 | 55660 |  |

## 能拿来做什么

- 1–48 个月时间尺度的全球干旱监测
- 1901 年以来的干旱气候学与趋势分析
- 跨地区、跨时期比较干旱程度（标准化指数）
- 农业旱情与水资源评估的参考数据

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CSIC/SPEI/2_8');
```

- 数据集编号（Earth Engine ID）：`CSIC/SPEI/2_8`
- 提供方：Spanish National Research Council (CSIC)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSIC_SPEI_2_8

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：climate, climate-change, drought, evapotranspiration, global, monthly, palmer, precipitation, temperature, water-vapor
- 数据引用：Product: Beguería, Santiago; Vicente Serrano, Sergio M.;
Reig-Gracia, Fergus; Latorre Garcés, Borja; 2023;
SPEIbase v.2.8 [Dataset]; DIGITAL.CSIC; Version 2.8.
[doi:10.20350/digitalCSIC/15121](https://doi.org/10.20350/digitalCSIC/15121)

- DOI：10.20350/digitalCSIC/15121

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球 SPEI 干旱指数数据库（2.11 版）](/pages/2a1f609f/)
- [全球 SPEI 干旱指数数据库（2.10 版，已弃用）](/pages/9bb9126f/)
- [全球 SPEI 干旱指数数据库（2.9 版，已弃用）](/pages/070aa91d/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
