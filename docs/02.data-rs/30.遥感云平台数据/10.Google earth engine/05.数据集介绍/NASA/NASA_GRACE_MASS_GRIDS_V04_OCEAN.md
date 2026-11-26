---
title: "GRACE 月度质量格网版本 06 第 04 版 - 海洋"
date: 2026-11-03 12:00:00
permalink: /pages/de20d64c/
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

# GRACE 月度质量格网版本 06 第 04 版 - 海洋

英文原名：GRACE Monthly Mass Grids Release 06 Version 04 - Ocean

## 这是什么数据

GRACE Tellus 月度质量格网提供相对于 2004–2010 年时间平均基准的月度重力异常。本数据集中的数据单位为「等效水厚」，以厘米表示的水的垂直范围表示质量偏差。更多细节见提供方的[月度质量格网概述](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)。

GRACE Tellus（GRCTellus）月度质量格网海洋数据集由三个中心生产：CSR（德克萨斯大学/空间研究中心）、GFZ（波茨坦地学研究中心）与 JPL（NASA 喷气推进实验室）。每个中心都是 GRACE 地面系统的一部分，生成本数据集中使用的二级数据（球谐场）。输出包括重力场的球谐系数以及用于计算它们的去混叠场的球谐系数。由于每个中心独立生产系数，结果可能略有不同。建议大多数用户使用所有三个数据集的平均值。更多细节见提供方的[选择解](https://grace.jpl.nasa.gov/data/choosing-a-solution/)页面。

**注**

* 陆地泄漏校正：海洋信号通常比陆地信号弱，在季节与年际时间尺度上相差 2 倍以上。为最小化高陆地信号向海洋信号的泄漏，已应用去条带滤波，这可能在更大的距离上引起相关。

* GRCTellus 海洋数据集经优化用于检查区域海洋底部压力，但不打算做空间平均来确定全球平均海洋质量。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：111,320 米。
- 时间范围：2002-04-04 至 2017-10-25

## 分辨率与规格

- 空间分辨率：约 111,320 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness_csr | 由 CSR 计算的厘米等效液态水厚。 | 111320 |  |
| lwe_thickness_gfz | 由 GFZ 计算的厘米等效液态水厚。 | 111320 |  |
| lwe_thickness_jpl | 由 JPL 计算的厘米等效液态水厚。 | 111320 |  |
| uncertainty_csr | CSR 的误差估计。 | 111320 |  |
| uncertainty_gfz | GFZ 的误差估计。 | 111320 |  |
| uncertainty_jpl | JPL 的误差估计。 | 111320 |  |

## 能拿来做什么

- 陆地水储量变化监测
- 冰盖与冰川质量平衡
- 地下水与海平面研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V04/OCEAN');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V04/OCEAN`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V04_OCEAN

## 许可与引用

- 许可：proprietary
- 关键词：crs, gfz, grace, gravity, jpl, mass, nasa, oceans, tellus, water
- 数据引用：D.P. Chambers. 2012. GRACE MONTHLY OCEAN MASS GRIDS NETCDF
RELEASE 6.0. Ver. 4.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at [https://doi.org/10.5067/TEOCN-3AC64](https://doi.org/10.5067/TEOCN-3AC64).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids - Ocean EOFR](/pages/25e1bee4/)
- [GRACE Monthly Mass Grids - Ocean [deprecated]](/pages/bb65f4de/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
