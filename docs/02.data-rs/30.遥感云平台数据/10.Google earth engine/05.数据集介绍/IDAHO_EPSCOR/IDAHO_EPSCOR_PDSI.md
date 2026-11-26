---
title: "PDSI：爱达荷大学帕尔默干旱严重指数（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/14a8e5bc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "conus"
  - "crop"
  - "drought"
  - "geophysical"
  - "merced"
  - "palmer"
  - "pdsi"
  - "precipitation"
  - "water-vapor"
---

# PDSI：爱达荷大学帕尔默干旱严重指数（已弃用）

英文原名：PDSI: University of Idaho Palmer Drought Severity Index [deprecated]

## 这是什么数据

帕尔默干旱严重指数数据集提供自 1979 年至今美国本土这一广泛使用的综合供水与需水异常测度的高空间分辨率（约 4 公里）每月三次估计。PDSI 使用源自 Abatzoglou（2013）格网气象数据集的降水和潜在蒸散量计算。

潜在蒸散量使用 Penman-Monteith 方程针对参考草地表面计算。计算中使用了源自 STATSGO 土壤数据库的土壤顶部 2.5 米的可用土壤持水能力。虽然 PDSI 通常按月度时间尺度计算，但我们每月计算三次这些数据，以提供更及时的更新。由于 PDSI 计算的预热（spin-up），记录第一年的数据应谨慎使用。

该数据集包含临时产品，当完整的源数据可用时会被更新版本替换。产品可通过 'status' 属性值区分。起初，资产以 status='early' 摄入。几天后，它们被 status='provisional' 的资产替换。大约 2 个月后，它们被 status='permanent' 的最终资产替换。

## 覆盖范围与时间

- 覆盖范围：美国本土
- 时间范围：1979-03-01 至 2020-06-20

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pdsi | 可能的值：4.0 或以上（极端湿润）、3.0 至 3.99（很湿润）、2.0 至 2.99（中度湿润）、1.0 至 1.99（轻微湿润）、0.5 至 0.99（初始湿润期）、0.49 至 -0.49（接近正常）、-0.5 至 -0.99（初始干旱期）、-1.0 至 -1.99（轻度干旱）、-2.0 至 -2.99（中度干旱）、-3.0 至 -3.99（严重干旱），或 -4.0 或以下（极端干旱）。 | 4638.3 |  |

## 能拿来做什么

- 干旱监测
- 农业与水资源评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/PDSI');
```

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/PDSI`
- 提供方：University of California Merced、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_PDSI

## 许可与引用

- 许可：proprietary
- 关键词：climate, conus, crop, drought, geophysical, merced, palmer, pdsi, precipitation, water-vapor
- 数据引用：Abatzoglou J.T., R. Barbero, J.W. Wolf, Z. Holden (2014), Tracking
interannual streamflow variability with drought indices in the
Pacific Northwest, US, Journal of Hydrometeorology, 15, 1900-1912.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
