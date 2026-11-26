---
title: "GRACE 月度质量格网 - 海洋 EOFR"
date: 2026-11-03 12:00:00
permalink: /pages/25e1bee4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "crs"
  - "gfz"
  - "grace"
  - "gravity"
  - "jpl"
  - "mass"
  - "nasa"
  - "oceans"
  - "tellus"
  - "water"
---

# GRACE 月度质量格网 - 海洋 EOFR

英文原名：GRACE Monthly Mass Grids - Ocean EOFR

## 这是什么数据

GRACE Tellus 月度质量格网提供相对于 2004–2010 年时间平均基准的月度重力异常。本数据集中的数据单位为「等效水厚」，以厘米表示的水的垂直范围表示质量偏差。更多细节见提供方的[月度质量格网概述](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)。

本数据集是 GRACE Tellus（GRCTellus）海洋数据集的滤波版本。「EOFR」底部压力（OBP）格网通过将常规 GRC 海洋格网产品的数据投影到环流与潮汐海洋模式（OMCT）的经验正交函数（EOF）上获得。这有效地滤除了 GRACE 数据中与 OMCT 海洋模式的物理与 OBP 变化不一致的信号。

EOFR 滤波重构的 OBP 场与雷达测高海面高度更一致，减少冰盖与冰川周围的泄漏，并减少 OBP 变率较低的中纬度噪声。[(Chambers 与 Willis，2010)](https://doi.org/10.1175/2010JTECHO738.1)

**注**

* GRCTellus 海洋数据集经优化用于检查区域海洋底部压力，但不打算做空间平均来确定全球平均海洋质量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2016 年；分辨率：111,320 米。
- 时间范围：2002-12-31 至 2016-12-10

## 分辨率与规格

- 空间分辨率：约 111,320 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness_csr | 由 CSR 计算的厘米等效液态水厚。 | 111320 |  |
| lwe_thickness_gfz | 由 GFZ 计算的厘米等效液态水厚。 | 111320 |  |
| lwe_thickness_jpl | 由 JPL 计算的厘米等效液态水厚。 | 111320 |  |

## 能拿来做什么

- 陆地水储量变化监测
- 冰盖与冰川质量平衡
- 地下水与海平面研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/OCEAN_EOFR');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS/OCEAN_EOFR`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_OCEAN_EOFR

## 许可与引用

- 许可：proprietary
- 关键词：crs, gfz, grace, gravity, jpl, mass, nasa, oceans, tellus, water
- 数据引用：D.P. Chambers. 2012. GRACE MONTHLY OCEAN MASS GRIDS NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at [doi:10.5067/TEOCN-0N005](https://doi.org/10.5067/TEOCN-0N005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids Release 06 Version 04 - Ocean](/pages/de20d64c/)
- [GRACE Monthly Mass Grids - Ocean [deprecated]](/pages/bb65f4de/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
