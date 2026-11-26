---
title: "OpenET geeSEBAL 逐月蒸散发 v2.0 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/9ab6c030/
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

# OpenET geeSEBAL 逐月蒸散发 v2.0 [已弃用]

英文原名：OpenET geeSEBAL Monthly Evapotranspiration v2.0 [deprecated]

## 这是什么数据

geeSEBAL 的实现最近在 OpenET 框架内完成，当前 geeSEBAL 版本的概述见 Laipelt 等（2021），其基于 Bastiaanssen 等（1998）开发的原始算法。OpenET geeSEBAL 实现使用 Landsat 第 2 集合的地表温度（LST）数据，以及分别作为瞬时与逐日气象输入的 NLDAS 与 gridMET 数据集。选取冷热端元的自动统计算法基于 Allen 等（2013）提出的极端条件逆建模定标（CIMEC）算法的简化版，其中 LST 与归一化植被指数（NDVI）值的分位数用于在 Landsat 域区内选取端元候选。冷湿端元候选在植被良好区域选取，热干端元候选在植被最少的农田区域选取。基于所选端元，geeSEBAL 假设在冷湿端元所有可用能量都转化为潜热（蒸腾速率高），而在热干端元所有可用能量都转化为感热。最后，逐日蒸散发估算基于蒸发分量从瞬时估算升尺度，假设其在白天恒定，土壤湿度与平流无显著变化。基于 OpenET 精度评估与互比研究的结果，OpenET geeSEBAL 算法作了如下修改：（i）使用附加过滤改进 CIMEC 简化版以选取端元，包括使用 USDA 作物数据层（CDL）以及 NDVI、LST 与反照率过滤；（ii）基于前期降水对端元 LST 做校正；（iii）定义 NLDAS 风速阈值以减少大气校正期间的模型不稳定；（iv）使用 FAO-56 为参考改进逐日净辐射估算（Allen 等，1998）。总体而言，geeSEBAL 的性能取决于地形、气候与气象条件，对 CIMEC 自动定标的冷热端元选取敏感性与不确定性较高，对气象输入的敏感性与不确定性较低（Laipelt 等，2021 与 Kayser 等，2022）。为减少复杂地形带来的不确定性，增加了校正地表 LST 与地表总（入射）辐射的改进（包括环境直减率、高程、坡度与坡向），以表征地形特征对模型端元选取算法与 ET 估算的影响。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：1999 年至 2024 年（逐月）；分辨率：30 米。
- 时间范围：1999-10-01 至 2024-12-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | geeSEBAL ET 值 | 30 |  |
| count | 无云值的数量 | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OpenET/GEESEBAL/CONUS/GRIDMET/MONTHLY/v2_0');
```

- 数据集编号（Earth Engine ID）：`OpenET/GEESEBAL/CONUS/GRIDMET/MONTHLY/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_GEESEBAL_CONUS_GRIDMET_MONTHLY_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Laipelt, L., Kayser, R.H.B., Fleischmann, A.S., Ruhoff, A., Bastiaanssen,
W., Erickson, T.A. and Melton, F., 2021. Long-term monitoring of
evapotranspiration using the SEBAL algorithm and Google Earth Engine cloud
computing. ISPRS Journal of Photogrammetry and Remote Sensing, 178,
pp.81-96.
[doi:10.1016/j.isprsjprs.2021.05.018](https://doi.org/10.1016/j.isprsjprs.2021.05.018)

- DOI：10.1016/j.isprsjprs.2021.05.018

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
