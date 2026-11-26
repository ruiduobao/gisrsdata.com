---
title: "GRACE 月度质量格网版本 06 第 04 版 - 陆地"
date: 2026-11-03 12:00:00
permalink: /pages/d281cddf/
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

# GRACE 月度质量格网版本 06 第 04 版 - 陆地

英文原名：GRACE Monthly Mass Grids Release 06 Version 04 - Land

## 这是什么数据

月度陆地质量格网包含以等效水厚给出的水质量异常，源自指定时段内 GRACE 与 GRACE-FO 时变重力观测，相对于指定的时间平均参考时段。等效水厚表示来自土壤水分、雪、地表水（包括河流、湖泊、水库等）以及地下水与含水层的总陆地水储量异常。已应用冰川均衡调整（GIA）校正，并纳入地心（1 阶）、C20（20 阶）与 C30（30 阶）的标准校正。已应用后处理滤波以减少相关误差。陆地水储量数据的版本 04（v04）使用更新且一致的 C20 与地心校正（即技术说明 TN-14 与 TN-13），以及椭球校正，以考虑将重力异常映射到地表质量变化时地球的非球形形状。

GRACE Tellus（GRCTellus）月度质量格网数据集由三个中心生产：CSR（德克萨斯大学/空间研究中心）、GFZ（波茨坦地学研究中心）与 JPL（NASA 喷气推进实验室）。每个中心都是 GRACE 地面系统的一部分，生成本数据集中使用的二级数据（球谐场）。输出包括重力场的球谐系数以及用于计算它们的去混叠场的球谐系数。由于每个中心独立生产系数，结果可能略有不同。建议大多数用户使用所有三个数据集的平均值。更多细节见提供方的[选择解](https://grace.jpl.nasa.gov/data/choosing-a-solution/)页面。

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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V04/LAND');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V04/LAND`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V04_LAND

## 许可与引用

- 许可：proprietary
- 关键词：crs, gfz, grace, gravity, jpl, land, mass, nasa, surface-ground-water, tellus, water
- 数据引用：Felix Landerer. 2021. TELLUS_GRAC_L3_JPL_RL06_LND_v04. Ver. RL06 v04.
PO.DAAC, CA, USA. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TELND-3AJ64](https://doi.org/10.5067/TELND-3AJ64).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)
- [GRACE Monthly Mass Grids - Global Mascons [deprecated]](/pages/5bc9dcc7/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
