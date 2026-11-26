---
title: "OpenET eeMETRIC 逐月蒸散发 v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/9ca383c3/
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

# OpenET eeMETRIC 逐月蒸散发 v2.1

英文原名：OpenET eeMETRIC Monthly Evapotranspiration v2.1

## 这是什么数据

内定标高分辨率蒸散发制图模型（eeMETRIC）的 Google Earth Engine 实现。

eeMETRIC 应用 Allen 等（2007；2015）与 Allen 等（2013b）的先进 METRIC 算法与流程，其中近地表气温差（dT）与去直减地表温度（TsDEM）之间的单一关系用于估算感热通量（H），并应用于每景 Landsat 影像。影像冷热像元的自动选取一般遵循 Allen 等（2013a）与 ReVelle、Kilic 和 Allen（2019a、b）描述的统计隔离程序。eeMETRIC 中 H 的定标利用由 NLDAS-2 格网天气数据集计算的苜蓿参考 ET，并固定减少 15% 的计算参考 ET，以考虑格网数据集的已知偏差。固定减少不影响 eeMETRIC 的定标精度，主要减少边界层浮力校正的影响。

冷热像元候选池的识别在 METRIC 的 eeMETRIC 实现中不断演进。新的自动定标流程结合了源自 EEFlux 两个开发分支（Allen 等，2015）的方法与途径。第一个分支专注于改进自动像元选取流程，使用地表温度（LST）的标准直减率，不做进一步的空间去直减（ReVelle 等，2019b）。第二个分支纳入了 LST 的二次空间去直减以及像元选取流程的变化（ReVelle 等，2019a）。最终的组合方法由 Kilic 等（2021）描述。

eeMETRIC 采用 Allen 等（2013b）开发的复杂地形（山区）空气动力学相关函数，以改进与地形粗糙度估算、坡面位置与风向相关的空气动力学粗糙度、风速与边界层稳定度估算。这些函数倾向于增大迎风坡的 H 估算（并减少 ET），并可能减小背风坡的 H（并增大 ET）。自 Allen 等（2007 与 2011）的描述以来，eeMETRIC 采用的其他 METRIC 函数包括：地面有有机覆盖物时减少土壤热通量（G）；对灌木地使用附加空气动力学阻力；对识别为森林的树木使用 Perrier 函数（Allen 等，2018；Santos 等，2012）；以及用空气动力学方法估算开阔水面蒸发而非能量平衡（Jensen 与 Allen 2016；Allen 等，2018）。2022 年，Perrier 函数应用于乔木（果园）作物，并对果园与葡萄园应用了将总体地表温度三源划分为冠层温度、遮阴土壤温度与受光土壤温度的方法。这些后期应用在果园与葡萄园由 CDL 或（在加州）由州赞助的土地利用系统识别之处进行。这些函数及对原始 METRIC 模型的其他增强在最新 METRIC 用户手册（Allen 等，2018）中说明。eeMETRIC 使用 Landsat 第 2 集合 2 级的大气校正地表反射率与 LST，近实时估算时可回退到第 2 集合 1 级。 **OpenET 集合 v2.1**

OpenET 集合 v2.1 是集合 v2.0 的再处理更新版，主要旨在解决 v2.0 的已知问题，同时纳入小的模型改进与输入数据更新。预计两个集合版本之间的 ET 在某些地点与时间会有明显差异。部分更新与变化包括：

* 额外的云筛查与过滤，跳过含未掩膜云和/或大面积积雪的 Landsat 影像。* 重新处理以纳入 NLDAS-2 与 GRIDMET 输入气象数据集的更新。* 对所有需要土地覆盖信息的模型纳入 USGS 年度 NLCD 产品。* 对所有需要作物类型信息的模型纳入最新 USDA CDL。* 更新插值，使逐月 ET 仅当月中所有天都有插值时才生产（减少多云/多雪或低覆盖时期的「count=0」月份）。* 应用发射率校正，解决 Landsat LST 数据的一个已知问题。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：2015 年至 2026 年（逐月）；分辨率：30 米。
- 时间范围：2015-10-01 至 2026-09-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | 实际蒸散发（ET）总量 | 30 |  |
| count | 当月纳入插值的无云观测数 | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('projects/openet/assets/eemetric/conus/gridmet/monthly/v2_1');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/eemetric/conus/gridmet/monthly/v2_1`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_eemetric_conus_gridmet_monthly_v2_1

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

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
