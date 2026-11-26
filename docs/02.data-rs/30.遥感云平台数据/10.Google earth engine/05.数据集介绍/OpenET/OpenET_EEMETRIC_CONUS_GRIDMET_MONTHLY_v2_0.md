---
title: "OpenET eeMETRIC 逐月蒸散发 v2.0 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/5c55d011/
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

# OpenET eeMETRIC 逐月蒸散发 v2.0 [已弃用]

英文原名：OpenET eeMETRIC Monthly Evapotranspiration v2.0 [deprecated]

## 这是什么数据

内定标高分辨率蒸散发制图模型（eeMETRIC）的 Google Earth Engine 实现。

eeMETRIC 应用 Allen 等（2007；2015）与 Allen 等（2013b）的先进 METRIC 算法与流程，其中近地表气温差（dT）与去直减地表温度（TsDEM）之间的单一关系用于估算感热通量（H），并应用于每景 Landsat 影像。影像冷热像元的自动选取一般遵循 Allen 等（2013a）与 ReVelle、Kilic 和 Allen（2019a、b）描述的统计隔离程序。eeMETRIC 中 H 的定标利用由 NLDAS 格网天气数据集计算的苜蓿参考 ET，并固定减少 15% 的计算参考 ET，以考虑格网数据集的已知偏差。固定减少不影响 eeMETRIC 的定标精度，主要减少边界层浮力校正的影响。

冷热像元候选池的识别在 METRIC 的 eeMETRIC 实现中不断演进。新的自动定标流程结合了源自 EEFlux 两个开发分支（Allen 等，2015）的方法与途径。第一个分支专注于改进自动像元选取流程，使用地表温度（LST）的标准直减率，不做进一步的空间去直减（ReVelle 等，2019b）。第二个分支纳入了 LST 的二次空间去直减以及像元选取流程的变化（ReVelle 等，2019a）。最终的组合方法由 Kilic 等（2021）描述。

eeMETRIC 采用 Allen 等（2013b）开发的复杂地形（山区）空气动力学相关函数，以改进与地形粗糙度估算、坡面位置与风向相关的空气动力学粗糙度、风速与边界层稳定度估算。这些函数倾向于增大迎风坡的 H 估算（并减少 ET），并可能减小背风坡的 H（并增大 ET）。自 Allen 等（2007 与 2011）的描述以来，eeMETRIC 采用的其他 METRIC 函数包括：地面有有机覆盖物时减少土壤热通量（G）；对灌木地使用附加空气动力学阻力；对识别为森林的树木使用 Perrier 函数（Allen 等，2018；Santos 等，2012）；以及用空气动力学方法估算开阔水面蒸发而非能量平衡（Jensen 与 Allen 2016；Allen 等，2018）。2022 年，Perrier 函数应用于乔木（果园）作物，并对果园与葡萄园应用了将总体地表温度三源划分为冠层温度、遮阴土壤温度与受光土壤温度的方法。这些后期应用在果园与葡萄园由 CDL 或（在加州）由州赞助的土地利用系统识别之处进行。这些函数及对原始 METRIC 模型的其他增强在最新 METRIC 用户手册（Allen 等，2018）中说明。eeMETRIC 使用 Landsat 第 2 集合 2 级的大气校正地表反射率与 LST，近实时估算时可回退到第 2 集合 1 级。

[更多信息](https://openetdata.org/methodologies/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：1999 年至 2024 年（逐月）；分辨率：30 米。
- 时间范围：1999-10-01 至 2024-12-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | eeMETRIC ET 值 | 30 |  |
| count | 无云值的数量 | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2_0');
```

- 数据集编号（Earth Engine ID）：`OpenET/EEMETRIC/CONUS/GRIDMET/MONTHLY/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_EEMETRIC_CONUS_GRIDMET_MONTHLY_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Kilic, A., Allen, R.G., Blankenau, P., ReVelle, P., Ozturk, D. and
Huntington, J., 2021. Global production and free access to Landsat-scale
Evapotranspiration with EEFlux and eeMETRIC. In 6th Decennial National
Irrigation Symposium, 6-8, December 2021, San Diego, California
(p. 1). American Society of Agricultural and Biological Engineers.
[doi:10.13031/irrig.2020-038](https://doi.org/10.13031/irrig.2020-038)

- DOI：10.13031/irrig.2020-038

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
