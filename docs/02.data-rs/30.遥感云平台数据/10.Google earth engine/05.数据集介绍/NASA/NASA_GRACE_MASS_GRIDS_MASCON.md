---
title: "GRACE 月度质量格网 - 全球 Mascons [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/5bc9dcc7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "grace"
  - "gravity"
  - "jpl"
  - "mascon"
  - "mass"
  - "nasa"
  - "surface-ground-water"
  - "tellus"
  - "water"
---

# GRACE 月度质量格网 - 全球 Mascons [已弃用]

英文原名：GRACE Monthly Mass Grids - Global Mascons [deprecated]

## 这是什么数据

GRACE Tellus 月度质量格网提供相对于 2004–2010 年时间平均基准的月度重力异常。本数据集中的数据单位为「等效水厚」，以厘米表示的水的垂直范围表示质量偏差。更多细节见提供方的[月度质量格网概述](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)。

GRACE Tellus（GRCTellus）全球 Mascon 数据集基于一级 GRACE 观测并在 NASA 喷气推进实验室（JPL）处理。

本数据集使用空间与时间上的先验约束，以等面积 3°×3° 球冠质量集中（mascon）函数估计全球月度重力场，以最小化测量误差的影响。数据未应用额外的经验去条带滤波。与传统球谐解相比，这使 mascon 场有更好的信噪比。

**注**

* 位于海岸线上的 mascon 包含混合的陆地与海洋信号。本数据集的一个应用了海岸线分辨率改进（CRI）滤波的版本，在后处理步骤中分离每个陆地/海洋 mascon 内的陆地与海洋质量部分。该数据集位于 [NASA/GRACE/MASS_GRIDS/MASCON_CRI](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON_CRI)。

* 数据表示在 1/2 度经纬度格网上，但它们表示 3×3 度等面积球冠，这是 JPL-RL05M 当前的原生分辨率。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：55,660 米。
- 时间范围：2002-03-31 至 2017-05-22

## 分辨率与规格

- 空间分辨率：约 55,660 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness | 厘米等效液态水厚。 | 55660 |  |
| uncertainty | 每个 3 度 mascon 估计的 1 西格玛不确定性。所提供的不确定性估计被认为是保守的。见提供方的[误差与不确定性估计部分](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/)。 | 55660 |  |

## 能拿来做什么

- 陆地水储量变化监测
- 冰盖与冰川质量平衡
- 地下水与海平面研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/MASCON');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS/MASCON`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON

## 许可与引用

- 许可：proprietary
- 关键词：grace, gravity, jpl, mascon, mass, nasa, surface-ground-water, tellus, water
- 数据引用：D.N. Wiese. 2015. GRACE monthly global water mass grids NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA.. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-OCL05](https://doi.org/10.5067/TEMSC-OCL05).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/pages/d281cddf/)
- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
