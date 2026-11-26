---
title: "OpenET SIMS 逐月蒸散发 v2.0 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/977e86b9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gridmet-derived"
  - "landsat-derived"
  - "monthly"
  - "openet"
  - "water"
  - "water-vapor"
---

# OpenET SIMS 逐月蒸散发 v2.0 [已弃用]

英文原名：OpenET SIMS Monthly Evapotranspiration v2.0 [deprecated]

## 这是什么数据

卫星灌溉管理支持

NASA 卫星灌溉管理支持（SIMS）模型最初开发用于支持从灌溉土地卫星制图作物系数与蒸散发（ET），并增加这类数据的可及性，以支持灌溉调度与农业用水需求的区域评估（Melton 等，2012）。SIMS 使用基于反射率的方法，并纳入 Allen 与 Pereira（2009）与 Pereira 等（2020）描述的密度系数，为每个 30 × 30 米像元计算基础作物系数。相对最近的 SIMS 出版物（Pereira 等，2020），在 OpenET 中实现的主要变化是整合了一个格网土壤水分平衡模型，以考虑降水事件后的土壤蒸发。OpenET 第一阶段互比与精度评估（Melton 等，2022）的结果显示，SIMS 在生长季对农田站点总体表现良好，但在冬季月份或降水频繁的其他时段有持续的低估偏差。这一结果在预料之中，因为 SIMS 使用的基于反射率的方法对土壤蒸发不敏感。为校正这一低估，在 Google Earth Engine 上实现了一个基于 FAO-56（Allen 等，1998）的土壤水分平衡模型，由 gridMET 格网降水数据驱动来估算土壤蒸发系数。这些系数随后与 SIMS 计算的基础作物系数结合，使用双作物系数方法计算总作物蒸散发。此外，在植被覆盖低或稀疏的时段，SIMS 数据有适度的正偏差。为校正这一偏差，更新了计算最小基础作物系数的方程，使其能达到更低的最小基础作物系数值。SIMS 模型的完整文档、当前算法以及土壤水分平衡模型所用的细节与方程见 SIMS 用户手册。

SIMS 模型按卫星数据测得的当前作物生长阶段与状况计算充分供水条件下的 ET，SIMS 对亏水灌溉作物与短期或间歇性作物水分胁迫的农田一般预期有正偏差。目前 SIMS 仅针对农田实现，非农业土地在本数据集合中被掩膜。未来研究将把 SIMS 使用的植被密度-作物系数方法扩展到其他土地覆盖类型。[更多信息](https://openetdata.org/methodologies/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：1999 年至 2024 年（逐月）；分辨率：30 米。
- 时间范围：1999-10-01 至 2024-12-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | SIMS ET 值 | 30 |  |
| count | 无云值的数量 | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OpenET/SIMS/CONUS/GRIDMET/MONTHLY/v2_0');
```

- 数据集编号（Earth Engine ID）：`OpenET/SIMS/CONUS/GRIDMET/MONTHLY/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_SIMS_CONUS_GRIDMET_MONTHLY_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Melton, F., Huntington, J., Grimm, R., Herring, J., Hall, M., Rollison, D.,
Erickson, T., Allen, R., Anderson, M., Fisher, J., Kilic, A., Senay, G.,
volk, J., Hain, C., Johnson, L., Ruhoff, A., Blanenau, P., Bromley, M.,
Carrara, W., Daudert, B., Doherty, C., Dunkerly, C., Friedrichs, M., Guzman,
A., Halverson, G., Hansen, J., Harding, J., Kang, Y., Ketchum, D., Minor,
B., Morton, C., Revelle, P., Ortega-Salazar, S., Ott, T., Ozdogon, M.,
Schull, M., Wang, T., Yang, Y., Anderson, R., 2021. "OpenET: Filling a
Critical Data Gap in Water Management for the Western United
States. "Journal of the American Water Resources Association, 58(6),
pp.971-994.
[doi:10.1111/1752-1688.12956](https://doi.org/10.1111/1752-1688.12956)

- DOI：10.1111/1752-1688.12956

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
