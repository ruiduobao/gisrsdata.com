---
title: "全球 SPEI 干旱指数数据库（2.11 版）"
date: 2026-11-03 12:00:00
permalink: /pages/2a1f609f/
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

# 全球 SPEI 干旱指数数据库（2.11 版）

英文原名：SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.11

## 这是什么数据

全球 SPEI 数据库（SPEIbase）在全球尺度提供长时间、稳健的干旱状况信息，像元大小 0.5 度，月度节奏。它提供 1 到 48 个月时间尺度的 SPEI。

标准化降水蒸散指数（SPEI）以标准化变量（均值 0、方差 1）的形式，表达当前气候平衡（降水减潜在蒸散）相对长期平衡的偏离。SPEIbase 计算的参考期就是整个研究期。作为标准化变量，SPEI 状况可以在空间和时间上互相比较。

SPEIbase 基于 [FAO-56 Penman-Monteith 估计](https://www.fao.org/3/x0490e/x0490e06.htm)计算潜在蒸散。这是它与 SPEI 全球干旱监测（用 Thornthwaite PET 估计）的主要区别。Penman-Monteith 方法被认为是更优的方法，因此 SPEIbase 推荐用于大多数用途，包括长期气候学分析。本页为 2.11 版。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：1901-01-01 至 2025-01-01
- 更新节奏：月度

## 分辨率与规格

- 空间分辨率：约 55,660 米（0.5 度（约 55.66 公里））
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
- 1901 年以来干旱气候学与趋势分析
- 农业与水资源干旱评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CSIC/SPEI/2_11');
```

- 数据集编号（Earth Engine ID）：`CSIC/SPEI/2_11`
- 提供方：Spanish National Research Council (CSIC)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSIC_SPEI_2_11

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：climate, climate-change, drought, evapotranspiration, global, monthly, palmer, precipitation, temperature, water-vapor
- 数据引用：Product: Beguer&iacute;a, Santiago; Vicente Serrano, Sergio M.;
Reig-Gracia, Fergus; Latorre Garc&eacute;s, Borja; 2024;
SPEIbase v.2.10 [Dataset]; DIGITAL.CSIC; Version 2.10.
[doi:10.20350/digitalCSIC/16497](https://doi.org/10.20350/digitalCSIC/16497)

- DOI：10.20350/digitalCSIC/16497

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球 SPEI 干旱指数数据库（2.10 版，已弃用）](/pages/9bb9126f/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.8 [deprecated]](/pages/8f385aa2/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.9 [deprecated]](/pages/070aa91d/)
- [加拿大森林林龄图 2019（Landsat 衍生）](/pages/65b34141/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
