---
title: "全球蒸散发与总初级生产力 PML_V2.1.8（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/82a78155/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gpp"
  - "plant-productivity"
  - "water-vapor"
---

# 全球蒸散发与总初级生产力 PML_V2.1.8（已弃用）

英文原名：PML_V2.1.7: Coupled Evapotranspiration and Gross Primary Product (GPP) [deprecated]

## 这是什么数据

PML_V2 是一套同时算「水」和「碳」的全球产品：给出蒸散发（ET）及其三个分量、还有总初级生产力（GPP），空间分辨率 500 米、每 8 天一期，覆盖 2000–2023 年、60°S 到 90°N。它的两个主要优点：① 通过冠层导度把蒸腾与 GPP 耦合起来一起估算（Gan 等，2018；Zhang 等，2019）；② 把 ET 拆成三个分量——植被蒸腾、土壤直接蒸发、植被截留降雨的蒸发（Zhang 等，2016）。

该产品在全球 95 个通量站点的观测检验中表现良好，与水文和生态研究界常用的主流 ET、GPP 产品相当或明显更好（Zhang 等，2019）。版本说明：PML-V2.1.8 取代此前的 PML-V2 0.1.8。相对原始 V2.0（Zhang 等，2019）的主要变化：用 MODIS C6.1 数据把时间覆盖延长到最新（可能逐年更新）；叶面积指数改用 MODIS Terra 的 MOD15A2H 而非合成产品 MCD15A3H；随 LAI 变化重新率定了参数，其余驱动数据不变。本版本在目录中已标注弃用（deprecated）。

## 覆盖范围与时间

- 覆盖范围：全球，60°S 至 90°N
- 时间范围：2000-02-26 至 2020-12-26
- 更新节奏：每 8 天一期

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| GPP | 总初级生产力 | 500 |  |
| Ec | 植被蒸腾 | 500 |  |
| Es | 土壤直接蒸发 | 500 |  |
| Ei | 植被冠层截留降雨的蒸发 | 500 |  |
| ET_water | 水体、雪和冰的蒸发。用 Penman 方程计算，被认为是这些表面实际蒸发的良好估计。 | 500 |  |

## 能拿来做什么

- 分析区域生态系统与农田的耗水（至 2023 年）
- 结合水分散失研究植被的碳吸收（GPP）
- 与通量塔观测对比检验蒸散发产品

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CAS/IGSNRR/PML/V2_v017');
```

- 数据集编号（Earth Engine ID）：`CAS/IGSNRR/PML/V2_v017`
- 提供方：PML_V2、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CAS_IGSNRR_PML_V2_v017

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gpp, plant-productivity, water-vapor
- 数据引用：Zhang, Y., Kong, D., Gan, R., Chiew, F.H.S., McVicar, T.R., Zhang, Q.,
and Yang, Y., 2019. Coupled estimation of 500m and 8-day resolution global
evapotranspiration and gross primary production in 2002-2017.
Remote Sens. Environ. 222, 165-182,
[doi:10.1016/j.rse.2018.12.031](https://doi.org/10.1016/j.rse.2018.12.031)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球蒸散发与总初级生产力 PML_V2.1.7（已弃用）](/pages/78dca129/)
- [全球蒸散发与总初级生产力 PML_V2（已弃用）](/pages/1fcbf3b8/)
- [全球 SPEI 干旱指数数据库（2.11 版）](/pages/2a1f609f/)
- [加拿大森林林龄图 2019（Landsat 衍生）](/pages/65b34141/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
