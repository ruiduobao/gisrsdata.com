---
title: "GRACE 月度质量格网 - 陆地 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/89809ce5/
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
  - "land"
  - "mass"
  - "nasa"
  - "surface-ground-water"
  - "tellus"
  - "water"
---

# GRACE 月度质量格网 - 陆地 [已弃用]

英文原名：GRACE Monthly Mass Grids - Land [deprecated]

## 这是什么数据

GRACE Tellus 月度质量格网提供相对于 2004–2010 年时间平均基准的月度重力异常。本数据集中的数据单位为「等效水厚」，以厘米表示的水的垂直范围表示质量偏差。更多细节见提供方的[月度质量格网概述](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)。

GRACE Tellus（GRCTellus）月度质量格网数据集由三个中心生产：CSR（德克萨斯大学/空间研究中心）、GFZ（波茨坦地学研究中心）与 JPL（NASA 喷气推进实验室）。每个中心都是 GRACE 地面系统的一部分，生成本数据集中使用的二级数据（球谐场）。输出包括重力场的球谐系数以及用于计算它们的去混叠场的球谐系数。由于每个中心独立生产系数，结果可能略有不同。建议大多数用户使用所有三个数据集的平均值。更多细节见提供方的[选择解](https://grace.jpl.nasa.gov/data/choosing-a-solution/)页面。

**注**

* 由于 GRACE 观测的采样与后处理，小空间尺度上的地表质量变化趋于衰减。因此，用户应将 GRCTellus 陆地数据乘以 [NASA/GRACE/MASS_GRIDS/LAND_AUX_2014](https://code.earthengine.google.com/?asset=NASA/GRACE/MASS_GRIDS/LAND_AUX_2014) 提供的缩放格网。

* 由球谐二级数据处理的 GRCTellus 陆地格网不适合准确量化格陵兰或南极洲以及冰川与冰盖上的冰质量变化。对这些区域，建议使用 JPL 的 mascon 解，即以下影像集合：[NASA/GRACE/MASS_GRIDS/MASCON](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：111,320 米。
- 时间范围：2002-04-01 至 2017-01-07

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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/LAND');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS/LAND`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_LAND

## 许可与引用

- 许可：proprietary
- 关键词：crs, gfz, grace, gravity, jpl, land, mass, nasa, surface-ground-water, tellus, water
- 数据引用：S.C. Swenson. 2012. GRACE monthly land water mass grids NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at
[https://doi.org/10.5067/TELND-NC005](https://doi.org/10.5067/TELND-NC005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/pages/d281cddf/)
- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
