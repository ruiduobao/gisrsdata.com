---
title: "澳大利亚实际蒸散发（CMRSET Landsat V2.2）"
date: 2026-11-03 12:00:00
permalink: /pages/cb36cc12/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "australia"
  - "csiro"
  - "evaporation"
  - "evapotranspiration"
  - "landsat-derived"
  - "tern"
  - "viirs-derived"
  - "water-vapor"
---

# 澳大利亚实际蒸散发（CMRSET Landsat V2.2）

英文原名：Actual Evapotranspiration for Australia (CMRSET Landsat V2.2)

## 这是什么数据

本数据集使用 CMRSET 算法为澳大利亚提供准确的实际蒸散发（AET 或 ETa）。AET 波段（名为「ETa」）包含该月所有无云 Landsat 观测的 CMRSET 模型逐日平均值（在 AET 数据源 QA 位中以值 3 标明）。Landsat 7 ETM+ 扫描行校正器（SLC）于 2003 年 5 月 31 日失效后，仅当该月无无云 Landsat 5 TM 或 Landsat 8 OLI 数据时才使用 Landsat 7 ETM+ 数据。若无无云 Landsat 数据可用，则像元以混合数据填充。混合数据在 2012 年 2 月之前为 Landsat-MODIS 混合，之后为 Landsat-VIIRS 混合（在 AET 数据源 QA 位中以值 2 标明）。若某月无混合数据可用，则缺失的逐月 AET 值线性插值（在 AET 数据源 QA 位中以值 1 标明）。这意味着覆盖全澳大利亚、无云造成间隙的逐月 30 米 AET 数据可供使用。

准确的 AET 信息对灌溉、粮食安全与环境管理很重要。与世界许多其他地区一样，澳大利亚的水资源有限，AET 是水量平衡中最大的消耗分量。澳大利亚 70% 的可用水用于作物与牧场灌溉。更好的监测将支持该部门用水效率的提高，节约的水可作为环境流量。此外，依赖地下水的生态系统（GDE）面积虽小，却是「生物多样性热点」。了解其用水需求有助于加强对这些关键区域的管理。AET 也可用于流域水量平衡建模。若用于水量平衡（质量平衡）计算，此 AET 值需要乘以当月的天数。

如需让开发者知道您在使用本数据集、获取更新信息或有任何问题，请联系：tim.mcvicar@csiro.au、tom.vanniel@csiro.au、jamie.vleeshouwer@csiro.au。

## 覆盖范围与时间

- 覆盖范围：空间：澳大利亚；时间：2000 年至 2026 年（逐月）；分辨率：30 米。
- 时间范围：2000-02-01 至 2026-06-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ETa | 逐日平均蒸散发 | 30 |  |
| pixel_qa | 像元 QA 属性 | 30 |  |

## 能拿来做什么

- 做澳大利亚灌溉用水与农业水效率监测。
- 为流域水量平衡建模提供 AET 输入。
- 评估地下水依赖生态系统的用水需求。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TERN/AET/CMRSET_LANDSAT_V2_2');
```

- 数据集编号（Earth Engine ID）：`TERN/AET/CMRSET_LANDSAT_V2_2`
- 提供方：TERN Landscapes / CSIRO Land and Water、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TERN_AET_CMRSET_LANDSAT_V2_2

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, australia, csiro, evaporation, evapotranspiration, landsat-derived, tern, viirs-derived, water-vapor
- 数据引用：Juan P. Guerschman, Tim R. McVicar, Jamie Vleeshower, Thomas G. Van Niel,
Jorge L. Peña-Arancibia, Yun Chen. Estimating actual evapotranspiration at
field-to-continent scales by calibrating the CMRSET algorithm with MODIS,
VIIRS, Landsat and Sentinel-2 data, Journal of Hydrology, Volume 605, 2022,
127318,
[doi:10.1016/j.jhydrol.2021.127318](
  https://doi.org/10.1016/j.jhydrol.2021.127318).

- DOI：10.1016/j.jhydrol.2021.127318

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Actual Evapotranspiration for Australia (CMRSET Landsat V2.1) [deprecated]](/pages/d90a1c7b/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
