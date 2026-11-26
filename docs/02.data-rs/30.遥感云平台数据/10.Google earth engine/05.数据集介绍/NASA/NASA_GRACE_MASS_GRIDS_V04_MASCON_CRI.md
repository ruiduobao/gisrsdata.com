---
title: "GRACE 月度质量格网第 04 版 - 全球 Mascon（CRI 滤波）"
date: 2026-11-03 12:00:00
permalink: /pages/78028c87/
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

# GRACE 月度质量格网第 04 版 - 全球 Mascon（CRI 滤波）

英文原名：GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)

## 这是什么数据

本数据集包含格网化的月度全球水储量/高度异常（相对于时间平均），源自 GRACE 与 GRACE-FO 并在 JPL 使用 Mascon 方法（RL06.3Mv04）处理。这些数据以 netCDF 格式在单个数据文件中提供，可用于海洋、冰与水文现象的分析。水储量/高度异常以等效水厚单位（厘米）给出。此处提供的解源自以地理定位的球冠质量集中函数而非全球球谐系数求解月度重力场变化。此外，在解反演期间引入了真实的地球物理信息，以内在地去除相关误差。因此，这些 Mascon 格网不需要像传统球谐重力解那样去相关或平滑。

完整的 Mascon 解由 4,551 个相对独立的地表质量变化估计组成，使用单个 mascon 的等面积 3 度格网推导。应注意，本数据集不校正跨海岸线的泄漏误差；因此仅建议希望应用自己的算法分离海岸线附近陆地与海洋质量的用户使用。

更多信息，请访问 [GRACE 页面](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/)。有关 Mascon 解的详细描述，包括数学推导、地球物理约束的实现与解验证，请见 [Watkins 等，2015](https://doi.org/10.1002/2014JB011547)。本产品仅供专家使用；鼓励其他用户使用 [CRI 滤波的 Mascon 数据集](https://podaac.jpl.nasa.gov/dataset/TELLUS_GRAC-GRFO_MASCON_CRI_GRID_RL06.3_V4)。

此 RL06.3Mv04 是先前 [Tellus JPL Mascon RL06.1Mv03](https://doi.org/10.5067/TEMSC-3MJ63) 的更新版本。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2024 年；分辨率：55,660 米。
- 时间范围：2002-03-31 至 2024-09-30

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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V04_MASCON_CRI

## 许可与引用

- 许可：proprietary
- 关键词：grace, gravity, jpl, mascon, mass, nasa, surface-ground-water, tellus, water
- 数据引用：D. N. Wiese, D.-N. Yuan, C. Boening, F. W. Landerer, M. M. Watkins. 2023.
JPL GRACE and GRACE-FO Mascon Ocean, Ice, and Hydrology Equivalent Water
Height CRI Filtered RL06.3Mv04. Ver. RL06.3Mv04. PO.DAAC, CA, USA. Dataset
accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-3JC634](https://doi.org/10.5067/TEMSC-3JC634).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/pages/d281cddf/)
- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)
- [GRACE Monthly Mass Grids - Global Mascons [deprecated]](/pages/5bc9dcc7/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
